<script setup>
import { ref, reactive, watch } from 'vue'
import { REGISTRY } from './ppt/registry.js'

defineProps({ open: Boolean })
defineEmits(['close'])

// Use import.meta.glob so Vite can statically analyse all possible modules
const dataModules  = import.meta.glob('./data/*.js')
const slideModules = import.meta.glob('./ppt/slides/*.js')

// ── State ───────────────────────────────────────────────────────────────────
const uiLocale     = ref('en')   // controls left-panel labels
const exportLocale = ref('en')   // controls PPT content language
const selTheme     = ref('light')
const clientName   = ref('')
const generating   = ref(false)
const genError     = ref('')

const expandedGroups = ref([])             // groupId[]
const caseData       = reactive({})        // { [dataFile]: case[] }
const selectedItems  = ref([])             // { id, label, type, dataFile?, caseId? }[]

// ── Accordion ───────────────────────────────────────────────────────────────
function isExpanded(id) { return expandedGroups.value.includes(id) }

async function toggleGroup(groupId) {
  if (isExpanded(groupId)) {
    expandedGroups.value = expandedGroups.value.filter(g => g !== groupId)
    return
  }
  expandedGroups.value = [...expandedGroups.value, groupId]

  // Lazy-load case data
  const group = REGISTRY.find(g => g.groupId === groupId)
  if (group?.type === 'cases' && !caseData[group.dataFile]) {
    await loadCaseData(group.dataFile, uiLocale.value)
  }
}

async function loadCaseData(dataFile, locale) {
  const key = `./data/${dataFile}.${locale}.js`
  if (!(key in dataModules)) { caseData[dataFile] = []; return }
  try {
    const mod = await dataModules[key]()
    caseData[dataFile] = mod.cases ?? []
  } catch { caseData[dataFile] = [] }
}

// Reload case data for expanded groups when uiLocale changes
watch(uiLocale, async (locale) => {
  for (const groupId of expandedGroups.value) {
    const group = REGISTRY.find(g => g.groupId === groupId)
    if (group?.type === 'cases') {
      caseData[group.dataFile] = null   // trigger loading indicator
      await loadCaseData(group.dataFile, locale)
    }
  }
})

// ── Selection ────────────────────────────────────────────────────────────────
function isSelected(id) { return selectedItems.value.some(i => i.id === id) }

function toggleSection(sec) {
  if (isSelected(sec.id)) {
    selectedItems.value = selectedItems.value.filter(i => i.id !== sec.id)
  } else {
    selectedItems.value = [
      ...selectedItems.value,
      { id: sec.id, label: sec.label[uiLocale.value], type: 'section' },
    ]
  }
}

function toggleCase(c, group) {
  const id = `case:${c.id}`
  if (isSelected(id)) {
    selectedItems.value = selectedItems.value.filter(i => i.id !== id)
  } else {
    selectedItems.value = [
      ...selectedItems.value,
      { id, label: c.title, type: 'case', dataFile: group.dataFile, caseId: c.id },
    ]
  }
}

function removeItem(id) {
  selectedItems.value = selectedItems.value.filter(i => i.id !== id)
}

// ── Generate ─────────────────────────────────────────────────────────────────
async function generate() {
  if (generating.value || !selectedItems.value.length) return
  generating.value = true
  genError.value = ''
  try {
    const { default: PptxGenJS } = await import('pptxgenjs')
    const { lightTheme }    = await import('./ppt/themes/light.js')
    const { techDarkTheme } = await import('./ppt/themes/tech-dark.js')
    const theme  = selTheme.value === 'tech-dark' ? techDarkTheme : lightTheme
    const locale = exportLocale.value

    const pptx = new PptxGenJS()
    pptx.layout = 'LAYOUT_WIDE'

    // Cover (always first)
    const coverMod = await slideModules['./ppt/slides/cover.js']()
    coverMod.render(pptx, { clientName: clientName.value }, theme, locale)

    // User-selected sections, in order
    for (const item of selectedItems.value) {
      if (item.type === 'section') {
        const slideKey = `./ppt/slides/${item.id}.js`
        const domain   = item.id.split('-')[0]
        const dataKey  = `./data/${domain}.${locale}.js`
        if (!(slideKey in slideModules) || !(dataKey in dataModules)) continue
        const [slideMod, dataMod] = await Promise.all([
          slideModules[slideKey](),
          dataModules[dataKey](),
        ])
        slideMod.render(pptx, dataMod, theme, locale)
      } else if (item.type === 'case') {
        const dataKey = `./data/${item.dataFile}.${locale}.js`
        if (!(dataKey in dataModules)) continue
        const [caseMod, dataMod] = await Promise.all([
          slideModules['./ppt/slides/case.js'](),
          dataModules[dataKey](),
        ])
        const caseObj = dataMod.cases?.find(c => c.id === item.caseId)
        if (caseObj) caseMod.render(pptx, caseObj, theme, locale)
      }
    }

    // Closing (always last)
    const closingMod = await slideModules['./ppt/slides/closing.js']()
    closingMod.render(pptx, { clientName: clientName.value }, theme, locale)

    // Build file name
    const suffix   = locale === 'zh' ? '方案介绍_ZH' : 'Proposal_EN'
    const baseName = clientName.value
      ? `CSI_${clientName.value.replace(/\s+/g, '_')}_${suffix}`
      : `CSI_Capability_${suffix}`
    await pptx.writeFile({ fileName: `${baseName}.pptx` })
  } catch (e) {
    genError.value = e.message || 'Generation failed'
    console.error('[PPTBuilder]', e)
  } finally {
    generating.value = false
  }
}
</script>

<template>
  <!-- Backdrop -->
  <Transition name="ppt-fade">
    <div v-if="open" class="ppt-backdrop" @click="$emit('close')" />
  </Transition>

  <!-- Drawer -->
  <div class="ppt-drawer" :class="{ 'ppt-drawer--open': open }" role="dialog" aria-label="Export PPT">

    <!-- Header -->
    <div class="ppt-hd">
      <span class="ppt-hd-title">Export PPT</span>
      <div class="ppt-hd-actions">
        <button
          class="ppt-lang-toggle"
          :title="uiLocale === 'en' ? 'Switch to 中文' : 'Switch to English'"
          @click="uiLocale = uiLocale === 'en' ? 'zh' : 'en'"
        >{{ uiLocale === 'en' ? 'EN' : '中文' }}</button>
        <button class="ppt-close" @click="$emit('close')" aria-label="Close">✕</button>
      </div>
    </div>

    <!-- Body -->
    <div class="ppt-body">

      <!-- ── Left: Module tree ── -->
      <div class="ppt-left">
        <div v-for="group in REGISTRY" :key="group.groupId" class="ppt-group">

          <!-- Group header -->
          <button class="ppt-group-hd" @click="toggleGroup(group.groupId)">
            <span class="ppt-caret">{{ isExpanded(group.groupId) ? '▼' : '▶' }}</span>
            <span class="ppt-group-name">{{ group.groupLabel[uiLocale] }}</span>
          </button>

          <!-- Sections list -->
          <div v-if="isExpanded(group.groupId)" class="ppt-sections">

            <!-- Static sections -->
            <template v-if="group.sections">
              <label
                v-for="sec in group.sections"
                :key="sec.id"
                class="ppt-sec"
                :class="{ 'ppt-sec--checked': isSelected(sec.id) }"
              >
                <input
                  type="checkbox"
                  class="ppt-chk"
                  :checked="isSelected(sec.id)"
                  @change="toggleSection(sec)"
                />
                <span class="ppt-sec-label">{{ sec.label[uiLocale] }}</span>
                <span class="ppt-sec-slides">{{ sec.slideCount }}s</span>
              </label>
            </template>

            <!-- Dynamic case sections -->
            <template v-else-if="group.type === 'cases'">
              <div v-if="caseData[group.dataFile] === null || caseData[group.dataFile] === undefined" class="ppt-loading">
                Loading…
              </div>
              <div v-else-if="caseData[group.dataFile].length === 0" class="ppt-empty-cases">
                No cases available
              </div>
              <label
                v-else
                v-for="c in caseData[group.dataFile]"
                :key="c.id"
                class="ppt-sec"
                :class="{ 'ppt-sec--checked': isSelected(`case:${c.id}`) }"
              >
                <input
                  type="checkbox"
                  class="ppt-chk"
                  :checked="isSelected(`case:${c.id}`)"
                  @change="toggleCase(c, group)"
                />
                <span class="ppt-sec-label">{{ c.title }}</span>
                <span class="ppt-case-flag">{{ c.flag }}</span>
              </label>
            </template>
          </div>
        </div>
      </div>

      <!-- ── Right: Options + selected list ── -->
      <div class="ppt-right">

        <!-- Selected slides -->
        <div class="ppt-block">
          <div class="ppt-block-title">
            {{ uiLocale === 'en' ? 'Selected Slides' : '已选幻灯片' }}
            <span class="ppt-count">{{ selectedItems.length }}</span>
          </div>
          <div class="ppt-slide-list">
            <div v-if="!selectedItems.length" class="ppt-slide-empty">
              {{ uiLocale === 'en' ? 'Check sections on the left to add slides' : '在左侧勾选章节以添加幻灯片' }}
            </div>
            <div
              v-for="(item, i) in selectedItems"
              :key="item.id"
              class="ppt-slide-row"
            >
              <span class="ppt-slide-num">{{ i + 1 }}</span>
              <span class="ppt-slide-name">{{ item.label }}</span>
              <span v-if="item.type === 'case'" class="ppt-slide-tag">case</span>
              <button class="ppt-slide-rm" @click="removeItem(item.id)" title="Remove">✕</button>
            </div>
          </div>
        </div>

        <!-- Client name -->
        <div class="ppt-block">
          <label class="ppt-block-title" for="ppt-client">
            {{ uiLocale === 'en' ? 'Client Name' : '客户名称' }}
          </label>
          <input
            id="ppt-client"
            v-model="clientName"
            class="ppt-input"
            :placeholder="uiLocale === 'en' ? 'e.g. Siinqee Bank' : '如：中非银行 CNEF'"
          />
        </div>

        <!-- Theme -->
        <div class="ppt-block">
          <div class="ppt-block-title">{{ uiLocale === 'en' ? 'Theme' : '主题风格' }}</div>
          <div class="ppt-radio-row">
            <label class="ppt-radio">
              <input type="radio" v-model="selTheme" value="light" />
              {{ uiLocale === 'en' ? '☀️ Warm Light' : '☀️ 暖白' }}
            </label>
            <label class="ppt-radio">
              <input type="radio" v-model="selTheme" value="tech-dark" />
              {{ uiLocale === 'en' ? '🌙 Tech Dark' : '🌙 暗黑科技' }}
            </label>
          </div>
        </div>

        <!-- Export Language -->
        <div class="ppt-block">
          <div class="ppt-block-title">{{ uiLocale === 'en' ? 'Export Language' : '导出语言' }}</div>
          <div class="ppt-radio-row">
            <label class="ppt-radio">
              <input type="radio" v-model="exportLocale" value="en" />
              English
            </label>
            <label class="ppt-radio">
              <input type="radio" v-model="exportLocale" value="zh" />
              中文
            </label>
          </div>
        </div>

        <!-- Generate button -->
        <button
          class="ppt-gen-btn"
          :disabled="generating || !selectedItems.length"
          @click="generate"
        >
          <span v-if="generating" class="ppt-spinner" />
          <span>{{ generating
            ? (uiLocale === 'en' ? 'Generating…' : '生成中…')
            : (uiLocale === 'en' ? 'Generate & Download' : '生成并下载')
          }}</span>
        </button>

        <div v-if="genError" class="ppt-error">⚠ {{ genError }}</div>

        <!-- Footer note -->
        <p class="ppt-note">
          {{ uiLocale === 'en'
            ? 'Cover + Closing slides are added automatically.'
            : '封面页与结束页自动添加。' }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ── Transitions ───────────────────────────────────────────────────────────── */
.ppt-fade-enter-active,
.ppt-fade-leave-active { transition: opacity 0.25s ease; }
.ppt-fade-enter-from,
.ppt-fade-leave-to    { opacity: 0; }

/* ── Backdrop ──────────────────────────────────────────────────────────────── */
.ppt-backdrop {
  position: fixed; inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 9998;
  backdrop-filter: blur(2px);
}

/* ── Drawer shell ──────────────────────────────────────────────────────────── */
.ppt-drawer {
  position: fixed; top: 0; right: 0; bottom: 0;
  width: min(960px, 92vw);
  background: #131929;
  color: #e2e8f0;
  display: flex; flex-direction: column;
  z-index: 9999;
  transform: translateX(105%);
  transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: -6px 0 48px rgba(0, 0, 0, 0.5);
  font-family: 'Calibri', 'Inter', system-ui, sans-serif;
}
.ppt-drawer--open { transform: translateX(0); }

/* ── Header ────────────────────────────────────────────────────────────────── */
.ppt-hd {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 20px;
  height: 52px; min-height: 52px;
  background: #0d1422;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  flex-shrink: 0;
}
.ppt-hd-title {
  font-size: 15px; font-weight: 700; letter-spacing: 0.02em;
  color: #f0f9ff;
}
.ppt-hd-actions { display: flex; align-items: center; gap: 8px; }

.ppt-lang-toggle {
  padding: 4px 12px; border-radius: 6px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.14);
  color: #94a3b8; font-size: 12px; font-weight: 600;
  cursor: pointer; transition: background 0.15s;
}
.ppt-lang-toggle:hover { background: rgba(255,255,255,0.14); color: #f0f9ff; }

.ppt-close {
  width: 32px; height: 32px; border-radius: 6px;
  background: transparent; border: none;
  color: #64748b; font-size: 16px;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: background 0.15s, color 0.15s;
}
.ppt-close:hover { background: rgba(255,255,255,0.08); color: #f0f9ff; }

/* ── Body (two columns) ────────────────────────────────────────────────────── */
.ppt-body {
  display: flex; flex: 1; overflow: hidden;
}

/* ── Left panel ─────────────────────────────────────────────────────────────── */
.ppt-left {
  width: 290px; min-width: 290px;
  overflow-y: auto; overflow-x: hidden;
  border-right: 1px solid rgba(255,255,255,0.07);
  padding: 8px 0 16px;
}
.ppt-left::-webkit-scrollbar { width: 5px; }
.ppt-left::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }

/* Group */
.ppt-group { border-bottom: 1px solid rgba(255,255,255,0.05); }
.ppt-group-hd {
  width: 100%; background: none; border: none; text-align: left;
  display: flex; align-items: center; gap: 8px;
  padding: 10px 16px;
  color: #cbd5e1; font-size: 12.5px; font-weight: 600;
  cursor: pointer; transition: background 0.12s;
  letter-spacing: 0.01em;
}
.ppt-group-hd:hover { background: rgba(255,255,255,0.05); }
.ppt-caret { font-size: 9px; color: #64748b; transition: color 0.12s; }
.ppt-group-hd:hover .ppt-caret { color: #94a3b8; }

/* Sections */
.ppt-sections { padding: 2px 0 6px; }
.ppt-sec {
  display: flex; align-items: center; gap: 8px;
  padding: 6px 16px 6px 30px;
  cursor: pointer; user-select: none;
  transition: background 0.1s;
  border-radius: 4px;
  margin: 0 4px;
}
.ppt-sec:hover { background: rgba(255,255,255,0.05); }
.ppt-sec--checked { background: rgba(56,189,248,0.07); }
.ppt-chk {
  width: 14px; height: 14px; flex-shrink: 0;
  accent-color: #38bdf8; cursor: pointer;
}
.ppt-sec-label { flex: 1; font-size: 12px; color: #94a3b8; }
.ppt-sec--checked .ppt-sec-label { color: #e2e8f0; }
.ppt-sec-slides { font-size: 10px; color: #475569; }
.ppt-case-flag { font-size: 14px; }

.ppt-loading, .ppt-empty-cases {
  padding: 8px 30px;
  font-size: 11px; color: #475569; font-style: italic;
}

/* ── Right panel ─────────────────────────────────────────────────────────────── */
.ppt-right {
  flex: 1; overflow-y: auto;
  padding: 16px 20px 24px;
  display: flex; flex-direction: column; gap: 18px;
}
.ppt-right::-webkit-scrollbar { width: 5px; }
.ppt-right::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }

/* Block */
.ppt-block { display: flex; flex-direction: column; gap: 8px; }
.ppt-block-title {
  font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
  text-transform: uppercase; color: #64748b;
  display: flex; align-items: center; gap: 6px;
}
.ppt-count {
  display: inline-flex; align-items: center; justify-content: center;
  width: 18px; height: 18px; border-radius: 9px;
  background: #38bdf8; color: #0d1422; font-size: 10px; font-weight: 800;
}

/* Selected slides list */
.ppt-slide-list {
  background: #0d1422; border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px; overflow: hidden; min-height: 72px;
}
.ppt-slide-empty {
  padding: 22px 14px; font-size: 12px; color: #475569; text-align: center;
}
.ppt-slide-row {
  display: flex; align-items: center; gap: 8px;
  padding: 8px 12px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  transition: background 0.1s;
}
.ppt-slide-row:last-child { border-bottom: none; }
.ppt-slide-row:hover { background: rgba(255,255,255,0.03); }
.ppt-slide-num {
  width: 20px; font-size: 11px; color: #475569; font-weight: 600; flex-shrink: 0;
}
.ppt-slide-name { flex: 1; font-size: 12.5px; color: #cbd5e1; }
.ppt-slide-tag {
  font-size: 9px; font-weight: 700; text-transform: uppercase;
  color: #38bdf8; border: 1px solid rgba(56,189,248,0.3);
  padding: 1px 5px; border-radius: 3px;
}
.ppt-slide-rm {
  width: 20px; height: 20px; border-radius: 4px; border: none;
  background: transparent; color: #475569; font-size: 12px;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: background 0.1s, color 0.1s;
}
.ppt-slide-rm:hover { background: rgba(239,68,68,0.15); color: #f87171; }

/* Input */
.ppt-input {
  width: 100%; padding: 9px 12px;
  background: #0d1422; border: 1px solid rgba(255,255,255,0.1);
  border-radius: 7px; color: #e2e8f0; font-size: 13px;
  outline: none; transition: border-color 0.15s;
}
.ppt-input::placeholder { color: #475569; }
.ppt-input:focus { border-color: #38bdf8; }

/* Radio */
.ppt-radio-row { display: flex; gap: 20px; }
.ppt-radio {
  display: flex; align-items: center; gap: 6px;
  font-size: 13px; color: #94a3b8; cursor: pointer;
}
.ppt-radio input { accent-color: #38bdf8; cursor: pointer; }

/* Generate button */
.ppt-gen-btn {
  padding: 13px 20px; border-radius: 8px; border: none;
  background: linear-gradient(135deg, #0284c7, #38bdf8);
  color: #fff; font-size: 14px; font-weight: 700;
  cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;
  transition: opacity 0.15s, transform 0.1s;
}
.ppt-gen-btn:hover:not(:disabled) { opacity: 0.88; transform: translateY(-1px); }
.ppt-gen-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }

/* Spinner */
.ppt-spinner {
  width: 14px; height: 14px; border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  animation: ppt-spin 0.7s linear infinite;
  flex-shrink: 0;
}
@keyframes ppt-spin { to { transform: rotate(360deg); } }

/* Error */
.ppt-error {
  padding: 10px 12px; border-radius: 7px;
  background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.25);
  color: #fca5a5; font-size: 12.5px;
}

/* Footer note */
.ppt-note {
  font-size: 11px; color: #334155; text-align: center; margin: 0;
}
</style>
