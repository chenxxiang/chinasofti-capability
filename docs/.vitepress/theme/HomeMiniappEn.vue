<script setup>
import { onMounted } from 'vue'
import NavBar from './NavBar.vue'
import { architectureLayers, deliverySteps, pmCards, painPoints, valueFlywheel, flywheelCenter, buildPaths, evolutionPhases, evolutionEcosystem, evolutionFooter } from './data/miniapp.en.js'

onMounted(() => {
  initReveal()
  initTabs()
  initCounters()
  initIOCDashboard()
})

function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) }
    })
  }, { threshold: 0.06 })
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
}

function initTabs() {
  document.querySelectorAll('.mn-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const group = tab.closest('.mn-tabs-wrap')
      group.querySelectorAll('.mn-tab').forEach(t => t.classList.remove('active'))
      group.querySelectorAll('.mn-panel').forEach(p => p.classList.remove('active'))
      tab.classList.add('active')
      const target = document.getElementById(tab.dataset.panel)
      if (target) target.classList.add('active')
    })
  })
}


function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return
      const el = e.target
      const target = parseInt(el.dataset.target, 10)
      const suffix = el.dataset.suffix || ''
      let cur = 0
      const step = Math.ceil(target / 60)
      const timer = setInterval(() => {
        cur = Math.min(cur + step, target)
        el.textContent = cur + suffix
        if (cur >= target) clearInterval(timer)
      }, 16)
      obs.unobserve(el)
    })
  }, { threshold: 0.5 })
  document.querySelectorAll('.mn-counter').forEach(el => obs.observe(el))
}

function initIOCDashboard() {
  if (typeof document === 'undefined') return

  // Clock — always ticking
  function tick() {
    const el = document.getElementById('ioc-clock')
    if (el) el.textContent = new Date().toLocaleTimeString('en-GB', { hour12: false })
  }
  tick()
  setInterval(tick, 1000)

  // Last-updated counter
  let secs = 0
  setInterval(() => {
    secs++
    const el = document.getElementById('ioc-last-upd')
    if (el) el.textContent = secs < 60 ? `${secs}s ago` : `${Math.floor(secs / 60)}m ago`
    if (secs >= 30) secs = 0
  }, 1000)

  // Animate when frame enters viewport
  const frame = document.getElementById('ioc-frame')
  if (!frame) return
  let animated = false
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting || animated) return
      animated = true
      obs.unobserve(e.target)
      // Line-chart draw
      const path = document.getElementById('ioc-txn-path')
      if (path) {
        const len = path.getTotalLength ? path.getTotalLength() : 460
        path.style.strokeDasharray = `${len} ${len}`
        path.style.strokeDashoffset = len
        setTimeout(() => {
          path.style.transition = 'stroke-dashoffset 2.6s cubic-bezier(0.25,0.46,0.45,0.94)'
          path.style.strokeDashoffset = '0'
        }, 200)
      }
      // Bar chart
      setTimeout(() => {
        document.querySelectorAll('.ioc-bar-fill').forEach(b => {
          b.style.transition = 'height 0.9s cubic-bezier(0.34,1.56,0.64,1)'
          b.style.height = b.dataset.h || '0%'
        })
      }, 500)
    })
  }, { threshold: 0.1 })
  obs.observe(frame)

  // Live TXN counter (slow increment)
  let txn = 47283
  setInterval(() => {
    txn += Math.floor(Math.random() * 5) + 1
    const el = document.getElementById('ioc-txn-count')
    if (el) el.textContent = txn.toLocaleString()
  }, 2700)

  // Live transaction feed
  const feed = document.getElementById('ioc-feed-list')
  if (feed) {
    const items = [
      ['#439447', '↑', 'MTN → NeoS Wallet', '+8,500 XAF'],
      ['#2980B9', '↑', 'SCB Bank Transfer', '+22,000 XAF'],
      ['#E8C547', '⚡', 'AES Electricity Biller', '−6,000 XAF'],
      ['#33B466', '↑', 'GimacPay Intl Transfer', '+48,000 XAF'],
      ['#C0392B', '⚠', 'Risk Flag #R-0042', 'Review'],
      ['#439447', '↑', 'Orange OCS Top-Up', '+2,000 XAF'],
      ['#2980B9', '↑', 'UBA → NeoS Wallet', '+15,000 XAF'],
      ['#33B466', '↑', 'JiangRong Micro-Loan', '+50,000 XAF'],
    ]
    let i = 0
    setInterval(() => {
      const t = items[i % items.length]
      const row = document.createElement('div')
      row.className = 'mn-ioc-fr mn-ioc-feed-flash'
      row.innerHTML = `<span class="mn-ioc-fi" style="color:${t[0]}">${t[1]}</span><span class="mn-ioc-fd">${t[2]}</span><span class="mn-ioc-fa">${t[3]}</span><span class="mn-ioc-ft">0:00</span>`
      feed.insertBefore(row, feed.firstChild)
      if (feed.children.length > 5) feed.removeChild(feed.lastChild)
      setTimeout(() => row.classList.remove('mn-ioc-feed-flash'), 600)
      i++
    }, 3100)
  }
}
</script>

<template>
<div class="mn-page">
<div class="mn-mesh-bg"></div>

<!-- NAV -->
<NavBar active="solutions" />

<!-- HERO -->
<section class="mn-hero">
  <div class="mn-hero-bg"></div>
  <div class="mn-hero-particles">
    <span></span><span></span><span></span><span></span><span></span><span></span>
  </div>
  <div class="mn-hero-inner">
    <div class="mn-hero-badge">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
      Super App · Complete Mini-Program Solution
    </div>
    <h1>Super App <span class="mn-grad">Mini-Program</span><br>Full-Stack Solution</h1>
    <p class="mn-hero-sub">Financial · Lifestyle · Smart City — End-to-end mini-program delivery across industries, powered by the Super App platform</p>
    <div class="mn-hero-tags">
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg> Financial &amp; Mobile Payment</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg> Lifestyle Services</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10z"/></svg> Smart City</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> E2E Delivery</span>
    </div>
  </div>
</section>

<!-- STATS STRIP -->
<div class="mn-stats-strip">
  <div class="mn-stat-item">
    <div class="mn-stat-num"><span class="mn-counter" data-target="10" data-suffix="+">0+</span></div>
    <div class="mn-stat-label">Mini-App Business Types</div>
  </div>
  <div class="mn-stat-item">
    <div class="mn-stat-num"><span class="mn-counter" data-target="3" data-suffix="">0</span></div>
    <div class="mn-stat-label">Industry Verticals</div>
  </div>
  <div class="mn-stat-item">
    <div class="mn-stat-num"><span class="mn-counter" data-target="70" data-suffix="+">0+</span></div>
    <div class="mn-stat-label">Cities via Huawei</div>
  </div>
  <div class="mn-stat-item">
    <div class="mn-stat-num"><span class="mn-counter" data-target="23" data-suffix="">0</span></div>
    <div class="mn-stat-label">Operator Partners</div>
  </div>
  <div class="mn-stat-item">
    <div class="mn-stat-num"><span class="mn-counter" data-target="5" data-suffix="">0</span></div>
    <div class="mn-stat-label">Delivery Checkpoints</div>
  </div>
</div>

<!-- PAGE BODY -->
<div class="mn-body">

  <!-- Why Mini-Programs, Why Now -->
  <section class="mn-sec reveal" id="why-now">
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Why Now · Operator Challenges &amp; Value</div>
      <h2 class="mn-sec-title">Why Mini-Programs, Why Now</h2>
    </div>
    <div class="mn-why-grid">
      <div class="mn-why-col">
        <div class="mn-why-col-hd mn-why-hd-pain">Operator Pain Points</div>
        <div class="mn-pain-list">
          <div v-for="p in painPoints" :key="p.title" class="mn-pain-item">
            <div class="mn-pain-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
            </div>
            <div class="mn-pain-text">
              <h4>{{ p.title }}</h4>
              <p>{{ p.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mn-why-arrow">→</div>
      <div class="mn-why-col">
        <div class="mn-why-col-hd mn-why-hd-value">Mini-Program Operator Value Flywheel</div>
        <div class="mn-flywheel">
          <div class="mn-flywheel-center">
            <div class="mn-flywheel-phone">
              <div class="mn-flywheel-phone-label">Super App</div>
              <div class="mn-flywheel-phone-chips">
                <span v-for="m in flywheelCenter.miniPrograms" :key="m">{{ m }}</span>
              </div>
              <div class="mn-flywheel-phone-chips mn-flywheel-phone-caps">
                <span v-for="c in flywheelCenter.capabilities" :key="c">{{ c }}</span>
              </div>
            </div>
          </div>
          <div v-for="(f, i) in valueFlywheel" :key="f.num" class="mn-flywheel-node" :class="`mn-flywheel-node-${i+1}`">
            <div class="mn-flywheel-num">{{ f.num }}</div>
            <div class="mn-flywheel-text">
              <h5>{{ f.title }}</h5>
              <p>{{ f.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Two Build Paths -->
  <section class="mn-sec reveal" id="build-paths">
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Two Build Paths</div>
      <h2 class="mn-sec-title">Two Super App Build Paths</h2>
    </div>
    <div v-for="path in buildPaths" :key="path.key" class="mn-path-block">
      <h3 class="mn-path-title">{{ path.title }}</h3>
      <div class="mn-flow-steps">
        <template v-for="(step, i) in path.steps" :key="step.num">
          <div class="mn-flow-arrow" v-if="i > 0">→</div>
          <div class="mn-flow-step mn-path-step" :class="{ 'mn-path-step-silo': step.isSilo }">
            <div class="mn-flow-num" :style="`background:${path.grad};`">{{ step.num }}</div>
            <div class="mn-path-phone">
              <span v-for="c in step.chips" :key="c" class="mn-path-phone-chip">{{ c }}</span>
              <span v-if="!step.chips.length" class="mn-path-phone-empty"></span>
            </div>
            <div class="mn-flow-content"><h4>{{ step.title }}</h4></div>
          </div>
        </template>
      </div>
      <div class="mn-path-benefits">
        <span class="mn-path-benefits-label">Operator Benefits</span>
        <span v-for="b in path.benefits" :key="b" class="mn-path-benefit-chip">{{ b }}</span>
      </div>
    </div>
  </section>

  <!-- Three-Stage Evolution -->
  <section class="mn-sec reveal" id="evolution">
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Roadmap</div>
      <h2 class="mn-sec-title">Three-Stage Super App Evolution</h2>
    </div>
    <div class="mn-evo-wrap">
      <div
        v-for="(phase, i) in evolutionPhases"
        :key="phase.num"
        class="mn-evo-phase"
        :class="`mn-evo-phase-${i+1}`"
        :style="`--pc:${phase.lc};background:${phase.lbg};border-color:${phase.lbd};`"
      >
        <div class="mn-evo-phase-hd">
          <span class="mn-evo-phase-num">{{ phase.num }}</span>
          <h4>{{ phase.title }}</h4>
          <span class="mn-evo-phase-tag">{{ phase.tag }}</span>
        </div>
        <div class="mn-evo-chips">
          <span v-for="a in phase.apps" :key="a">{{ a }}</span>
        </div>
        <div class="mn-evo-note" v-if="phase.note">{{ phase.note }}</div>
      </div>
    </div>
    <div class="mn-evo-ecosystem">
      <div v-for="e in evolutionEcosystem" :key="e" class="mn-evo-eco-pill">{{ e }}</div>
    </div>
    <div class="mn-evo-footer">
      <div v-for="f in evolutionFooter" :key="f.title" class="mn-evo-footer-card">
        <h4>{{ f.title }}</h4>
        <p>{{ f.desc }}</p>
      </div>
    </div>
  </section>

  <!-- Core Value -->
  <section class="mn-sec reveal" id="value">
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Core Value · Our Advantage</div>
      <h2 class="mn-sec-title">Why Choose Super App Mini-Programs</h2>
    </div>
    <p class="mn-value-lead">Building on the operator challenges and three-stage roadmap above, Super App mini-programs are the technical foundation that carries each phase's capabilities to life — outperforming native apps and plain H5 in development efficiency, native capability access, and ecosystem integration:</p>
    <div class="mn-compare-grid">
      <div class="mn-compare-card mn-compare-plain">
        <div class="mn-compare-icon" style="background:linear-gradient(135deg,#475569,#64748b);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 7h6M9 11h6M9 15h4"/></svg>
        </div>
        <h3>Native App</h3>
        <p>Full-featured with excellent UX</p>
        <div class="mn-compare-divider"></div>
        <div class="mn-compare-cons">
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Separate iOS/Android builds — high development cost</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> App store review required, slow release cycle</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Users must install first — high acquisition cost</span>
        </div>
      </div>
      <div class="mn-compare-card mn-compare-plain">
        <div class="mn-compare-icon" style="background:linear-gradient(135deg,#475569,#64748b);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10z"/></svg>
        </div>
        <h3>Pure H5 / WebApp</h3>
        <p>Cross-platform, low maintenance cost</p>
        <div class="mn-compare-divider"></div>
        <div class="mn-compare-cons">
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> No access to biometrics, NFC, or native APIs</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Limited performance &amp; UX, poor user retention</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> No data integration with host app ecosystem</span>
        </div>
      </div>
      <div class="mn-compare-card mn-compare-highlight">
        <div class="mn-compare-icon" style="background:linear-gradient(135deg,#1d4ed8,#7c3aed);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        </div>
        <h3>Super App Mini-Program</h3>
        <p>No install needed — instant access</p>
        <div class="mn-compare-divider"></div>
        <div class="mn-compare-pros">
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Unified identity — one login for all services</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Instant release — no app store review required</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Direct native APIs: Biometrics / LBS / NFC</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Data integration: bridges host app user &amp; behavior data</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Architecture -->
  <section class="mn-sec reveal" id="arch">
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Architecture · Capability Layers</div>
      <h2 class="mn-sec-title">4-Layer Capability Architecture</h2>
    </div>
    <div class="mn-arch-wrap">

      <template v-for="(layer, i) in architectureLayers" :key="layer.num">
        <div class="mn-arch-conn" v-if="i > 0">
          <div class="mn-arch-conn-line" :style="`--cc:${architectureLayers[i-1].lc};`"></div>
          <div class="mn-arch-conn-dot" :style="`background:${architectureLayers[i-1].lc};`"></div>
          <div class="mn-arch-conn-line" :style="`--cc:${layer.lc};`"></div>
        </div>
        <div class="mn-arch-card" :style="`--lc:${layer.lc};--lg:${layer.grad};--lbg:${layer.lbg};--lbd:${layer.lbd};`">
          <div class="mn-arch-card-left">
            <div class="mn-arch-num-badge">{{ layer.num }}</div>
            <div class="mn-arch-layer-icon">
              <svg v-if="i === 0" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              <svg v-else-if="i === 1" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              <svg v-else-if="i === 2" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              <svg v-else width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
            </div>
            <div class="mn-arch-layer-text">
              <div class="mn-arch-layer-cn">{{ layer.label }}</div>
              <div class="mn-arch-layer-en">{{ layer.labelEn }}</div>
            </div>
          </div>
          <div class="mn-arch-card-body">
            <div v-for="g in layer.groups" :key="g.label" class="mn-arch-group">
              <div class="mn-arch-group-lbl" :style="`color:${layer.lc};`">{{ g.label }}</div>
              <div class="mn-arch-chips"><span v-for="c in g.chips" :key="c">{{ c }}</span></div>
            </div>
          </div>
        </div>
      </template>

    </div>
  </section>

  <!-- Solution Directory -->
  <section class="mn-sec reveal" id="directory">
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Directory · Solution Catalog</div>
      <div class="mn-sec-title-row">
        <h2 class="mn-sec-title">Four Categories of Mini-App Solutions</h2>
        <a href="/en/solutions/" class="mn-catalog-btn" target="_blank" rel="noopener">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          View Full Catalog
        </a>
      </div>
    </div>

    <div class="mn-tabs-wrap">
      <div class="mn-tab-bar">
        <button class="mn-tab active" data-panel="tab-biz-en">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
          Business Platform
        </button>
        <button class="mn-tab" data-panel="tab-life-en">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
          Lifestyle
        </button>
        <button class="mn-tab" data-panel="tab-fin-en">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
          Financial
        </button>
        <button class="mn-tab" data-panel="tab-social-en">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          Social & Entertainment
        </button>
        <button class="mn-tab" data-panel="tab-all-en">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
          All Solutions
        </button>
      </div>

      <!-- Business Platform -->
      <div class="mn-panel active" id="tab-biz-en">
        <div class="mn-panel-intro">
          Covering content distribution, loyalty programs, IoT onboarding, enterprise mini-app migration, AI Agent, and F&B aggregation — complete end-to-end solutions for core business scenarios.
        </div>
        <div class="mn-dir-grid">
          <a href="/en/business/cms/" class="mn-dir-card mn-dir-blue" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M15 10l4.553-2.069A1 1 0 0 1 21 8.87v6.26a1 1 0 0 1-1.447.894L15 14"/><rect x="2" y="6" width="13" height="12" rx="2"/></svg></div>
            <div class="mn-dir-info"><h4>Content Distribution Platform</h4><p>Multi-platform CMS · Livestream · Rights Management</p></div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href="/en/business/loyalty/" class="mn-dir-card mn-dir-blue" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
            <div class="mn-dir-info"><h4>Loyalty Platform</h4><p>Points System · Task Rewards · User Retention</p></div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href="/en/business/iot/" class="mn-dir-card mn-dir-blue" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg></div>
            <div class="mn-dir-info"><h4>IoT Platform</h4><p>Device Onboarding · Smart Monitoring · Data Collection</p></div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href="/en/business/ai-agent/" class="mn-dir-card mn-dir-blue" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg></div>
            <div class="mn-dir-info"><h4>AI Agent</h4><p>Smart Q&A · Automated Workflows · RAG Knowledge Base</p></div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
        </div>
      </div>

      <!-- Lifestyle -->
      <div class="mn-panel" id="tab-life-en">
        <div class="mn-panel-intro">
          Covering EV charging, transit, e-commerce, catering, and ticketing — high-frequency lifestyle scenarios with fast Super App ecosystem integration.
        </div>
        <div class="mn-dir-grid">
          <a href="/en/lifestyle/charging/" class="mn-dir-card mn-dir-purple" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"/><line x1="23" y1="13" x2="23" y2="11"/><polyline points="11 6 7 12 13 12 9 18"/></svg></div>
            <div class="mn-dir-info"><h4>EV Charging Platform</h4><p>Charging Network · Station Management · QR Payment</p></div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href="/en/lifestyle/transit/" class="mn-dir-card mn-dir-purple" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></div>
            <div class="mn-dir-info"><h4>Transit Card</h4><p>Bus/Metro · NFC Payment · Ride QR Code</p></div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href="/en/lifestyle/ecommerce/" class="mn-dir-card mn-dir-purple" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></div>
            <div class="mn-dir-info"><h4>E-Commerce Platform</h4><p>Product Management · Cart · Online Payment</p></div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href="/en/lifestyle/catering/" class="mn-dir-card mn-dir-purple" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg></div>
            <div class="mn-dir-info"><h4>F&B Ordering Platform</h4><p>Dine-in & Delivery · Multi-outlet Aggregation</p></div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href="/en/lifestyle/ticketing/" class="mn-dir-card mn-dir-purple" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z"/></svg></div>
            <div class="mn-dir-info"><h4>Ticketing System</h4><p>Events / Venues · Seat Selection · E-Ticket Validation</p></div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
        </div>
      </div>

      <!-- Financial -->
      <div class="mn-panel" id="tab-fin-en">
        <div class="mn-panel-intro">
          Built on a compliant security framework, covering blockchain notarization, wealth management, and E-KYC identity verification — with multi-language GUI customization support.
        </div>
        <div class="mn-dir-grid mn-dir-grid-3">
          <a href="/en/finance/blockchain/" class="mn-dir-card mn-dir-cyan" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="12" y1="16" x2="12.01" y2="16" stroke-width="3" stroke-linecap="round"/></svg></div>
            <div class="mn-dir-info"><h4>Blockchain Integration</h4><p>On-chain Notarization · Digital Assets · Smart Contracts</p></div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href="/en/finance/wealth/" class="mn-dir-card mn-dir-cyan" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div>
            <div class="mn-dir-info"><h4>Wealth Management</h4><p>Investment Products · Portfolio Management · Returns Tracking</p></div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href="/en/finance/ekyc/" class="mn-dir-card mn-dir-cyan" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
            <div class="mn-dir-info"><h4>E-KYC</h4><p>Identity Verification · Face Recognition · Compliance</p></div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
        </div>
      </div>

      <!-- Social & Entertainment -->
      <div class="mn-panel" id="tab-social-en">
        <div class="mn-panel-intro">
          Instant messaging and gaming integration — building a high-engagement social entertainment ecosystem with deep support for DMs, group chat, live interaction, and gaming.
        </div>
        <div class="mn-dir-grid mn-dir-grid-2">
          <a href="/en/social/im/" class="mn-dir-card mn-dir-amber" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
            <div class="mn-dir-info"><h4>Instant Messaging (IM)</h4><p>DMs & Groups · Red Packets · Live Interaction</p></div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href="/en/social/game/" class="mn-dir-card mn-dir-amber" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><circle cx="15" cy="11" r="1"/><circle cx="18" cy="13" r="1"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.556 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.444-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg></div>
            <div class="mn-dir-info"><h4>Gaming Platform</h4><p>Game Center · Leaderboards · Operations Dashboard</p></div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
        </div>
      </div>

      <!-- All Solutions -->
      <div class="mn-panel" id="tab-all-en">
        <div class="mn-panel-intro">
          14 mini-app solutions across Business Platform, Lifestyle, Finance, and Social &amp; Entertainment — full Super App ecosystem coverage.
        </div>
        <div class="mn-all-grid">
          <div class="mn-all-group mn-all-blue">
            <div class="mn-all-group-hd">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
              Business Platform
            </div>
            <div class="mn-all-items">
              <a href="/en/business/cms/" class="mn-all-item" target="_blank" rel="noopener">
                <span class="mn-all-name">Content Distribution</span>
                <span class="mn-all-desc">CMS · Livestream · Rights</span>
              </a>
              <a href="/en/business/loyalty/" class="mn-all-item" target="_blank" rel="noopener">
                <span class="mn-all-name">Loyalty Platform</span>
                <span class="mn-all-desc">Points · Tasks · Retention</span>
              </a>
              <a href="/en/business/iot/" class="mn-all-item" target="_blank" rel="noopener">
                <span class="mn-all-name">IoT Platform</span>
                <span class="mn-all-desc">Devices · Monitoring · Data</span>
              </a>
              <a href="/en/business/ai-agent/" class="mn-all-item" target="_blank" rel="noopener">
                <span class="mn-all-name">AI Agent</span>
                <span class="mn-all-desc">Q&amp;A · Automation · RAG</span>
              </a>
            </div>
          </div>
          <div class="mn-all-group mn-all-purple">
            <div class="mn-all-group-hd">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
              Lifestyle
            </div>
            <div class="mn-all-items">
              <a href="/en/lifestyle/charging/" class="mn-all-item" target="_blank" rel="noopener">
                <span class="mn-all-name">EV Charging Platform</span>
                <span class="mn-all-desc">Network · Stations · QR Pay</span>
              </a>
              <a href="/en/lifestyle/transit/" class="mn-all-item" target="_blank" rel="noopener">
                <span class="mn-all-name">Transit Card</span>
                <span class="mn-all-desc">NFC · Ride Code · Metro</span>
              </a>
              <a href="/en/lifestyle/ecommerce/" class="mn-all-item" target="_blank" rel="noopener">
                <span class="mn-all-name">E-Commerce Platform</span>
                <span class="mn-all-desc">Cart · Payment · Mall</span>
              </a>
              <a href="/en/lifestyle/catering/" class="mn-all-item" target="_blank" rel="noopener">
                <span class="mn-all-name">Catering Aggregator</span>
                <span class="mn-all-desc">Delivery · Dine-in · Multi-brand</span>
              </a>
              <a href="/en/lifestyle/ticketing/" class="mn-all-item" target="_blank" rel="noopener">
                <span class="mn-all-name">Ticketing System</span>
                <span class="mn-all-desc">Events · Seats · E-Ticket</span>
              </a>
            </div>
          </div>
          <div class="mn-all-group mn-all-cyan">
            <div class="mn-all-group-hd">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
              Finance
            </div>
            <div class="mn-all-items">
              <a href="/en/finance/blockchain/" class="mn-all-item" target="_blank" rel="noopener">
                <span class="mn-all-name">Blockchain Integration</span>
                <span class="mn-all-desc">Records · Assets · Contracts</span>
              </a>
              <a href="/en/finance/wealth/" class="mn-all-item" target="_blank" rel="noopener">
                <span class="mn-all-name">Wealth Management</span>
                <span class="mn-all-desc">Investment · Portfolio · Returns</span>
              </a>
              <a href="/en/finance/ekyc/" class="mn-all-item" target="_blank" rel="noopener">
                <span class="mn-all-name">E-KYC</span>
                <span class="mn-all-desc">Identity · Face Recognition</span>
              </a>
            </div>
          </div>
          <div class="mn-all-group mn-all-amber">
            <div class="mn-all-group-hd">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Social &amp; Entertainment
            </div>
            <div class="mn-all-items">
              <a href="/en/social/im/" class="mn-all-item" target="_blank" rel="noopener">
                <span class="mn-all-name">IM Platform</span>
                <span class="mn-all-desc">Chat · Red Packets · Live</span>
              </a>
              <a href="/en/social/game/" class="mn-all-item" target="_blank" rel="noopener">
                <span class="mn-all-name">Gaming Platform</span>
                <span class="mn-all-desc">Game Hub · Tournaments · Ops</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- End-to-End Delivery -->
  <section class="mn-sec reveal" id="delivery">
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Delivery · End-to-End Framework</div>
      <h2 class="mn-sec-title">End-to-End Delivery Framework</h2>
    </div>
    <div class="mn-delivery-intro">
      From M Platform deployment and SDK integration to mini-program release, covering the complete chain: Project → Requirements → Development → Testing → Integration → Launch, with multi-scenario testing and a delivery metrics dashboard.
    </div>

    <div class="mn-flow-steps">
      <template v-for="(step, i) in deliverySteps" :key="step.num">
        <div class="mn-flow-arrow" v-if="i > 0">→</div>
        <div class="mn-flow-step">
          <div class="mn-flow-num" :style="`background:${step.grad};`">{{ step.num }}</div>
          <div class="mn-flow-content">
            <h4>{{ step.title }}</h4>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </template>
    </div>

    <!-- CI/CD Pipeline -->
    <div class="mn-cicd-card">
      <div class="mn-flow-img-header">
        <div class="mn-flow-img-icon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        </div>
        <div>
          <div class="mn-flow-img-title">End-to-End Delivery Pipeline</div>
          <div class="mn-flow-img-sub">Code · Branch Build · Integration Test · Release — Full CI/CD Pipeline</div>
        </div>
      </div>

      <div class="mn-cicd-body">
        <div class="mn-cicd-meta">
          <div class="mn-cicd-inp-row">
            <span class="mn-cicd-inp">Requirements</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:#94a3b8;"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            <span class="mn-cicd-inp">Project | Features</span>
          </div>
          <div class="mn-cicd-dm-note">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
            Defect management spans branch &amp; integration phases
          </div>
        </div>

        <div class="mn-cicd-scroll">
          <div class="mn-cicd-grid">
            <div class="mn-cicd-dm1">Defect Mgmt</div>
            <div class="mn-cicd-dm2">Defect Mgmt</div>
            <div class="mn-cicd-conn"></div>
            <div class="mn-cicd-st" style="grid-column:1;">
              <div class="mn-cicd-dot" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);"></div>
              <div class="mn-cicd-sn">Write Code</div>
              <div class="mn-cicd-tools"><span>Xcode</span><span>Android Studio</span></div>
            </div>
            <div class="mn-cicd-st" style="grid-column:2;">
              <div class="mn-cicd-dot" style="background:linear-gradient(135deg,#4f46e5,#818cf8);"></div>
              <div class="mn-cicd-sn">Code Mgmt</div>
              <div class="mn-cicd-tools"><span>Git</span><span>Maven</span></div>
            </div>
            <div class="mn-cicd-st" style="grid-column:3;">
              <div class="mn-cicd-dot" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);"></div>
              <div class="mn-cicd-sn">Branch Build</div>
              <div class="mn-cicd-tools"><span>Jenkins</span></div>
            </div>
            <div class="mn-cicd-st" style="grid-column:4;">
              <div class="mn-cicd-dot" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);"></div>
              <div class="mn-cicd-sn">Branch Test</div>
              <div class="mn-cicd-tools"><span>Manual</span><span>Automated</span></div>
            </div>
            <div class="mn-cicd-st" style="grid-column:5;">
              <div class="mn-cicd-dot" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);"></div>
              <div class="mn-cicd-sn">Branch Merge</div>
              <div class="mn-cicd-tools"><span>Baseline Mgmt</span></div>
            </div>
            <div class="mn-cicd-st" style="grid-column:6;">
              <div class="mn-cicd-dot" style="background:linear-gradient(135deg,#0891b2,#06b6d4);"></div>
              <div class="mn-cicd-sn">Integ. Build</div>
              <div class="mn-cicd-tools"><span>Jenkins</span></div>
            </div>
            <div class="mn-cicd-st" style="grid-column:7;">
              <div class="mn-cicd-dot" style="background:linear-gradient(135deg,#0891b2,#06b6d4);"></div>
              <div class="mn-cicd-sn">Integ. Test</div>
              <div class="mn-cicd-tools"><span>Manual</span><span>Automated</span></div>
            </div>
            <div class="mn-cicd-st mn-cicd-st-last" style="grid-column:8;">
              <div class="mn-cicd-dot" style="background:linear-gradient(135deg,#059669,#10b981);"></div>
              <div class="mn-cicd-sn">Release</div>
              <div class="mn-cicd-tools"><span>Release Platform</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Page Complexity Standards -->
  <section class="mn-sec reveal" id="complexity">
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Page Complexity · Estimation Standards</div>
      <h2 class="mn-sec-title">Page Complexity Standards</h2>
    </div>

    <div class="mn-cpx-grid">
      <!-- Low -->
      <div class="mn-cpx-card cpx-low">
        <div class="mn-cpx-head">
          <span class="mn-cpx-badge badge-low">Low Complexity</span>
          <div class="mn-cpx-days-wrap"><span class="mn-cpx-num">3</span> Man-Days</div>
        </div>
        <div class="mn-cpx-screen">
          <img src="/solutions/miniapp/images/complexity-low.png" alt="Low complexity page example" />
        </div>
        <div class="mn-cpx-example">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
          Personal Profile Basic Info Page
        </div>
        <div class="mn-cpx-meta">
          <div class="mn-cpx-row">
            <span class="mn-cpx-label">Elements</span>
            <span class="mn-cpx-val">6 (1 avatar + 2 texts + 2 buttons + 1 divider)</span>
          </div>
          <div class="mn-cpx-row">
            <span class="mn-cpx-label">Interactions</span>
            <span class="mn-cpx-val">2 clicks (no animations)</span>
          </div>
          <div class="mn-cpx-row">
            <span class="mn-cpx-label">Data</span>
            <span class="mn-cpx-val">Static cached user info</span>
          </div>
        </div>
      </div>

      <!-- Medium -->
      <div class="mn-cpx-card cpx-medium">
        <div class="mn-cpx-head">
          <span class="mn-cpx-badge badge-medium">Medium Complexity</span>
          <div class="mn-cpx-days-wrap"><span class="mn-cpx-num">5</span> Man-Days</div>
        </div>
        <div class="mn-cpx-screen">
          <img src="/solutions/miniapp/images/complexity-medium.png" alt="Medium complexity page example" />
        </div>
        <div class="mn-cpx-example">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
          Account Statement Page
        </div>
        <div class="mn-cpx-meta">
          <div class="mn-cpx-row">
            <span class="mn-cpx-label">Elements</span>
            <span class="mn-cpx-val">12 (1 search + 2 tabs + 6 cards + 1 button + 2 dividers)</span>
          </div>
          <div class="mn-cpx-row">
            <span class="mn-cpx-label">Interactions</span>
            <span class="mn-cpx-val">4 (search / filter / load with simple fade)</span>
          </div>
          <div class="mn-cpx-row">
            <span class="mn-cpx-label">Data</span>
            <span class="mn-cpx-val">Cached 30-day transactions</span>
          </div>
        </div>
      </div>

      <!-- High -->
      <div class="mn-cpx-card cpx-high">
        <div class="mn-cpx-head">
          <span class="mn-cpx-badge badge-high">High Complexity</span>
          <div class="mn-cpx-days-wrap"><span class="mn-cpx-num">10</span> Man-Days</div>
        </div>
        <div class="mn-cpx-screen">
          <img src="/solutions/miniapp/images/complexity-high.png" alt="High complexity page example" />
        </div>
        <div class="mn-cpx-example">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
          Investment Asset Allocation Page
        </div>
        <div class="mn-cpx-meta">
          <div class="mn-cpx-row">
            <span class="mn-cpx-label">Elements</span>
            <span class="mn-cpx-val">28 (1 nav + 4 dashboards + 6 cards + 2 tabs + 3 buttons)</span>
          </div>
          <div class="mn-cpx-row">
            <span class="mn-cpx-label">Interactions</span>
            <span class="mn-cpx-val">7 (chart zoom / real-time refresh / export)</span>
          </div>
          <div class="mn-cpx-row">
            <span class="mn-cpx-label">Data</span>
            <span class="mn-cpx-val">Real-time API-synced NAV &amp; profit (30s update)</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Project Management -->
  <section class="mn-sec reveal" id="pm">
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Project Management · Capabilities</div>
      <h2 class="mn-sec-title">Project Management Capabilities</h2>
    </div>

    <div class="mn-pm-cards">
      <div v-for="(pm, i) in pmCards" :key="pm.title" class="mn-pm-card" :style="`border-top-color:${pm.color};`">
        <div class="mn-pm-card-icon" :style="`background:${pm.grad};`">
          <svg v-if="i === 0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <svg v-else-if="i === 1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <svg v-else-if="i === 2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <svg v-else-if="i === 3" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <h4>{{ pm.title }}</h4>
        <p>{{ pm.desc }}</p>
      </div>
    </div>

    <!-- Dual-Layer Timeline: Client Milestones ↔ Internal R&D -->
    <div class="mn-dual-tl reveal">

      <!-- ① Client Delivery Milestones -->
      <div class="mn-dtl-client">
        <div class="mn-dtl-head">
          <div class="mn-dtl-head-dot" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);"></div>
          <span>Client Delivery Milestones</span>
        </div>
        <div class="mn-dtl-ms-row">
          <div class="mn-dtl-ms">
            <div class="mn-dtl-ms-num" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">1</div>
            <div class="mn-dtl-ms-title">Delivery Prep</div>
            <div class="mn-dtl-ms-desc">FRS clarification · UE/UI design<br>Custom dev · System test</div>
          </div>
          <div class="mn-dtl-ms-arr">→</div>
          <div class="mn-dtl-ms">
            <div class="mn-dtl-ms-num" style="background:linear-gradient(135deg,#4f46e5,#818cf8);">2</div>
            <div class="mn-dtl-ms-title">Install &amp; Commission</div>
            <div class="mn-dtl-ms-desc">PR/DR review<br>IOT · Performance test</div>
          </div>
          <div class="mn-dtl-ms-arr">→</div>
          <div class="mn-dtl-ms">
            <div class="mn-dtl-ms-num" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">3</div>
            <div class="mn-dtl-ms-title">UAT</div>
            <div class="mn-dtl-ms-desc">User acceptance test<br>E2E scenarios · Report</div>
          </div>
          <div class="mn-dtl-ms-arr">→</div>
          <div class="mn-dtl-ms">
            <div class="mn-dtl-ms-num" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">4</div>
            <div class="mn-dtl-ms-title">Go-Live</div>
            <div class="mn-dtl-ms-desc">System check · Pilot run<br>PAC sign-off</div>
          </div>
          <div class="mn-dtl-ms-arr">→</div>
          <div class="mn-dtl-ms">
            <div class="mn-dtl-ms-num" style="background:linear-gradient(135deg,#059669,#10b981);">5</div>
            <div class="mn-dtl-ms-title">O&amp;M Support</div>
            <div class="mn-dtl-ms-desc">Ongoing operations<br>O&amp;M services</div>
          </div>
        </div>
      </div>

      <!-- Bridge -->
      <div class="mn-dtl-bridge">
        <div class="mn-dtl-br-l"></div>
        <div class="mn-dtl-br-center">
          <span class="mn-dtl-br-tag mn-dtl-br-tag-blue">Client View</span>
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none" style="color:#94a3b8;flex-shrink:0;">
            <path d="M7 0v18M2 13l5 5 5-5M2 5l5-5 5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="mn-dtl-br-tag mn-dtl-br-tag-purple">Internal R&amp;D</span>
        </div>
        <div class="mn-dtl-br-l"></div>
      </div>

      <!-- ② Internal R&D Phases -->
      <div class="mn-dtl-rd">
        <div class="mn-dtl-head">
          <div class="mn-dtl-head-dot" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);"></div>
          <span>Internal R&amp;D Phases &amp; CP Quality Gates</span>
        </div>
        <div class="mn-dtl-phases-outer">
          <div class="mn-dtl-phases">
            <div class="mn-dtl-ph">
              <div class="mn-dtl-cp-slot"></div>
              <div class="mn-dtl-ph-dot"></div>
              <div class="mn-dtl-ph-name">Kickoff</div>
              <div class="mn-dtl-ph-desc">Kickoff meeting<br>Project plan<br>Quality strategy</div>
            </div>
            <div class="mn-dtl-ph">
              <div class="mn-dtl-cp-slot"></div>
              <div class="mn-dtl-ph-dot"></div>
              <div class="mn-dtl-ph-name">Planning</div>
              <div class="mn-dtl-ph-desc">Req. roadmap<br>Arch. roadmap<br>Iteration plan</div>
            </div>
            <div class="mn-dtl-ph mn-dtl-ph-cp">
              <div class="mn-dtl-cp-badge">CP1</div>
              <div class="mn-dtl-ph-dot mn-dtl-ph-dot-cp"></div>
              <div class="mn-dtl-ph-name">Requirements</div>
              <div class="mn-dtl-ph-desc">PRD<br>Prototype<br>Work packages</div>
            </div>
            <div class="mn-dtl-ph">
              <div class="mn-dtl-cp-slot"></div>
              <div class="mn-dtl-ph-dot"></div>
              <div class="mn-dtl-ph-name">Design</div>
              <div class="mn-dtl-ph-desc">Visual design<br>HLD / LLD<br>Test plan design</div>
            </div>
            <div class="mn-dtl-ph">
              <div class="mn-dtl-cp-slot"></div>
              <div class="mn-dtl-ph-dot"></div>
              <div class="mn-dtl-ph-name">Development</div>
              <div class="mn-dtl-ph-desc">Static scan<br>Code review<br>Dev self-test</div>
            </div>
            <div class="mn-dtl-ph">
              <div class="mn-dtl-cp-slot"></div>
              <div class="mn-dtl-ph-dot"></div>
              <div class="mn-dtl-ph-name">Integration</div>
              <div class="mn-dtl-ph-desc">Integ. verification<br>Integ. debugging</div>
            </div>
            <div class="mn-dtl-ph mn-dtl-ph-cp">
              <div class="mn-dtl-cp-badge">CP2</div>
              <div class="mn-dtl-ph-dot mn-dtl-ph-dot-cp"></div>
              <div class="mn-dtl-ph-name">Testing</div>
              <div class="mn-dtl-ph-desc">Functional / Compat.<br>Integ. / Perf. test</div>
            </div>
            <div class="mn-dtl-ph mn-dtl-ph-cp">
              <div class="mn-dtl-cp-badge">CP3</div>
              <div class="mn-dtl-ph-dot mn-dtl-ph-dot-cp"></div>
              <div class="mn-dtl-ph-name">Release</div>
              <div class="mn-dtl-ph-desc">Launch<br>Online verification<br>Online patrol</div>
            </div>
            <div class="mn-dtl-ph">
              <div class="mn-dtl-cp-slot"></div>
              <div class="mn-dtl-ph-dot mn-dtl-ph-dot-end"></div>
              <div class="mn-dtl-ph-name">Acceptance</div>
              <div class="mn-dtl-ph-desc">Source code<br>Product / Tech docs<br>Other materials</div>
            </div>
          </div>
        </div>
        <div class="mn-dtl-qbars">
          <div class="mn-dtl-qbar" style="margin-left:0;width:100%;background:linear-gradient(90deg,rgba(29,78,216,0.1),rgba(29,78,216,0.04));">
            <span>Full-cycle project monitoring &amp; audit</span>
          </div>
          <div class="mn-dtl-qbar" style="margin-left:22%;width:78%;background:linear-gradient(90deg,rgba(124,58,237,0.1),rgba(124,58,237,0.04));">
            <span>R&amp;D process quality control — entry/exit criteria</span>
          </div>
          <div class="mn-dtl-qbar" style="margin-left:44%;width:34%;background:linear-gradient(90deg,rgba(8,145,178,0.1),rgba(8,145,178,0.04));">
            <span>Dev quality assurance &amp; metrics analysis</span>
          </div>
        </div>
      </div>

    </div>
  </section>

<!-- ── DESIGN SYSTEM ──────────────────────────── -->
<section class="mn-sec reveal" id="design-system">
  <div class="mn-sec-header">
    <div class="mn-eyebrow">Design System · Mobile App Visual Language</div>
    <h2 class="mn-sec-title">Design System</h2>
    <p class="mn-sec-sub">A unified visual language ensuring brand consistency across every screen, component, and platform of the NeoS Mobile Money App — built on industry-standard design methodology.</p>
  </div>

  <!-- ── 01 Brand-Aligned Design System ── -->
  <div class="mn-ds-block reveal">
    <div class="mn-ds-block-header">
      <div class="mn-ds-block-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
      </div>
      <div>
        <div class="mn-ds-block-tag">01 · Brand</div>
        <div class="mn-ds-block-name">Brand-Aligned Design System</div>
      </div>
    </div>

    <div class="mn-ds-row">
      <!-- Color Palette -->
      <div class="mn-ds-card mn-ds-palette-card">
        <div class="mn-ds-card-title">Color Palette</div>
        <div class="mn-ds-swatches">
          <div class="mn-ds-swatch">
            <div class="mn-ds-swatch-color" style="background:#439447;"></div>
            <div class="mn-ds-swatch-info">
              <span class="mn-ds-swatch-name">CNEF Green</span>
              <span class="mn-ds-swatch-hex">#439447</span>
              <span class="mn-ds-swatch-role">Primary</span>
            </div>
          </div>
          <div class="mn-ds-swatch">
            <div class="mn-ds-swatch-color" style="background:#2D6B31;"></div>
            <div class="mn-ds-swatch-info">
              <span class="mn-ds-swatch-name">Deep Green</span>
              <span class="mn-ds-swatch-hex">#2D6B31</span>
              <span class="mn-ds-swatch-role">Dark</span>
            </div>
          </div>
          <div class="mn-ds-swatch">
            <div class="mn-ds-swatch-color" style="background:#33B466;"></div>
            <div class="mn-ds-swatch-info">
              <span class="mn-ds-swatch-name">Light Green</span>
              <span class="mn-ds-swatch-hex">#33B466</span>
              <span class="mn-ds-swatch-role">Accent</span>
            </div>
          </div>
          <div class="mn-ds-swatch">
            <div class="mn-ds-swatch-color" style="background:#1A3557;"></div>
            <div class="mn-ds-swatch-info">
              <span class="mn-ds-swatch-name">Finance Navy</span>
              <span class="mn-ds-swatch-hex">#1A3557</span>
              <span class="mn-ds-swatch-role">Text / BG</span>
            </div>
          </div>
          <div class="mn-ds-swatch">
            <div class="mn-ds-swatch-color" style="background:#2980B9;"></div>
            <div class="mn-ds-swatch-info">
              <span class="mn-ds-swatch-name">Info Blue</span>
              <span class="mn-ds-swatch-hex">#2980B9</span>
              <span class="mn-ds-swatch-role">Info</span>
            </div>
          </div>
          <div class="mn-ds-swatch">
            <div class="mn-ds-swatch-color" style="background:#E8C547;"></div>
            <div class="mn-ds-swatch-info">
              <span class="mn-ds-swatch-name">Signal Gold</span>
              <span class="mn-ds-swatch-hex">#E8C547</span>
              <span class="mn-ds-swatch-role">Warning</span>
            </div>
          </div>
          <div class="mn-ds-swatch">
            <div class="mn-ds-swatch-color" style="background:#C0392B;"></div>
            <div class="mn-ds-swatch-info">
              <span class="mn-ds-swatch-name">Risk Red</span>
              <span class="mn-ds-swatch-hex">#C0392B</span>
              <span class="mn-ds-swatch-role">Error</span>
            </div>
          </div>
          <div class="mn-ds-swatch">
            <div class="mn-ds-swatch-color" style="background:#F5F5F0;border:1px solid #ddd;"></div>
            <div class="mn-ds-swatch-info">
              <span class="mn-ds-swatch-name">App Canvas</span>
              <span class="mn-ds-swatch-hex">#F5F5F0</span>
              <span class="mn-ds-swatch-role">Background</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Allocation + Status -->
      <div class="mn-ds-right-col">
        <div class="mn-ds-card">
          <div class="mn-ds-card-title">Brand Color Allocation</div>
          <div class="mn-ds-alloc-bars">
            <div class="mn-ds-alloc-row">
              <span class="mn-ds-alloc-label">Primary Actions</span>
              <div class="mn-ds-alloc-track"><div class="mn-ds-alloc-fill" style="width:65%;background:#439447;"></div></div>
              <span class="mn-ds-alloc-pct">65%</span>
            </div>
            <div class="mn-ds-alloc-row">
              <span class="mn-ds-alloc-label">Dark Surfaces</span>
              <div class="mn-ds-alloc-track"><div class="mn-ds-alloc-fill" style="width:20%;background:#1A3557;"></div></div>
              <span class="mn-ds-alloc-pct">20%</span>
            </div>
            <div class="mn-ds-alloc-row">
              <span class="mn-ds-alloc-label">Highlights</span>
              <div class="mn-ds-alloc-track"><div class="mn-ds-alloc-fill" style="width:10%;background:#33B466;"></div></div>
              <span class="mn-ds-alloc-pct">10%</span>
            </div>
            <div class="mn-ds-alloc-row">
              <span class="mn-ds-alloc-label">Status / Alert</span>
              <div class="mn-ds-alloc-track"><div class="mn-ds-alloc-fill" style="width:5%;background:#E8C547;"></div></div>
              <span class="mn-ds-alloc-pct">5%</span>
            </div>
          </div>
        </div>
        <div class="mn-ds-card">
          <div class="mn-ds-card-title">Status Semantics</div>
          <div class="mn-ds-status-grid">
            <div class="mn-ds-status-pill" style="background:#e8f5e9;color:#439447;border:1.5px solid #439447;"><span class="mn-ds-status-dot" style="background:#439447;"></span>Success</div>
            <div class="mn-ds-status-pill" style="background:#fff8e1;color:#b8921e;border:1.5px solid #E8C547;"><span class="mn-ds-status-dot" style="background:#E8C547;"></span>Warning</div>
            <div class="mn-ds-status-pill" style="background:#ffebee;color:#C0392B;border:1.5px solid #C0392B;"><span class="mn-ds-status-dot" style="background:#C0392B;"></span>Error</div>
            <div class="mn-ds-status-pill" style="background:#e3f2fd;color:#2980B9;border:1.5px solid #2980B9;"><span class="mn-ds-status-dot" style="background:#2980B9;"></span>Info</div>
            <div class="mn-ds-status-pill" style="background:#e8edf3;color:#1A3557;border:1.5px solid #1A3557;"><span class="mn-ds-status-dot" style="background:#1A3557;"></span>Neutral</div>
            <div class="mn-ds-status-pill" style="background:#f5f5f5;color:#9e9e9e;border:1.5px solid #e0e0e0;"><span class="mn-ds-status-dot" style="background:#bdbdbd;"></span>Disabled</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Typography Scale -->
    <div class="mn-ds-card mn-ds-typo-card reveal">
      <div class="mn-ds-card-title">Typography Scale · Roboto / Inter Family</div>
      <div class="mn-ds-typo-scale">
        <div class="mn-ds-typo-row">
          <span class="mn-ds-typo-label">H1 · 28sp Bold</span>
          <span class="mn-ds-typo-sample" style="font-size:1.75rem;font-weight:700;color:#1A3557;line-height:1.1;">NeoS Mobile</span>
        </div>
        <div class="mn-ds-typo-row">
          <span class="mn-ds-typo-label">H2 · 22sp SemiBold</span>
          <span class="mn-ds-typo-sample" style="font-size:1.375rem;font-weight:600;color:#1A3557;">Transfer &amp; Pay</span>
        </div>
        <div class="mn-ds-typo-row">
          <span class="mn-ds-typo-label">Body · 16sp Regular</span>
          <span class="mn-ds-typo-sample" style="font-size:1rem;font-weight:400;color:#424242;">Secure · Fast · Convenient</span>
        </div>
        <div class="mn-ds-typo-row">
          <span class="mn-ds-typo-label">Caption · 12sp Regular</span>
          <span class="mn-ds-typo-sample" style="font-size:0.75rem;font-weight:400;color:#757575;">Transaction ID: TXN-2024-001</span>
        </div>
        <div class="mn-ds-typo-row">
          <span class="mn-ds-typo-label">Label · 11sp SemiBold</span>
          <span class="mn-ds-typo-sample" style="font-size:0.69rem;font-weight:700;color:#439447;text-transform:uppercase;letter-spacing:.06em;">CONFIRMED</span>
        </div>
      </div>
    </div>
  </div>

  <!-- ── 02 Mobile App UI Kit ── -->
  <div class="mn-ds-block reveal">
    <div class="mn-ds-block-header">
      <div class="mn-ds-block-icon mn-ds-block-icon--kit">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1"/></svg>
      </div>
      <div>
        <div class="mn-ds-block-tag">02 · UI Kit</div>
        <div class="mn-ds-block-name">Mobile App UI Kit</div>
      </div>
    </div>

    <!-- Icons + Buttons -->
    <div class="mn-ds-row">
      <div class="mn-ds-card">
        <div class="mn-ds-card-title">Feature Icon Set</div>
        <div class="mn-ds-icon-grid">
          <div class="mn-ds-icon-item">
            <div class="mn-ds-icon-circle" style="background:#e8f5e9;">
              <svg viewBox="0 0 24 24" fill="none" stroke="#439447" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </div>
            <span>Transfer</span>
          </div>
          <div class="mn-ds-icon-item">
            <div class="mn-ds-icon-circle" style="background:#e8f5e9;">
              <svg viewBox="0 0 24 24" fill="none" stroke="#439447" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="15" y="15" width="2" height="2"/><rect x="19" y="15" width="2" height="2"/><rect x="15" y="19" width="2" height="2"/><rect x="19" y="19" width="2" height="2"/></svg>
            </div>
            <span>QR Scan</span>
          </div>
          <div class="mn-ds-icon-item">
            <div class="mn-ds-icon-circle" style="background:#e3f2fd;">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2980B9" stroke-width="2" stroke-linecap="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <span>Top Up</span>
          </div>
          <div class="mn-ds-icon-item">
            <div class="mn-ds-icon-circle" style="background:#e8f5e9;">
              <svg viewBox="0 0 24 24" fill="none" stroke="#439447" stroke-width="2" stroke-linecap="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
            </div>
            <span>Card</span>
          </div>
          <div class="mn-ds-icon-item">
            <div class="mn-ds-icon-circle" style="background:#fff8e1;">
              <svg viewBox="0 0 24 24" fill="none" stroke="#b8921e" stroke-width="2" stroke-linecap="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
            </div>
            <span>Biller</span>
          </div>
          <div class="mn-ds-icon-item">
            <div class="mn-ds-icon-circle" style="background:#fce4ec;">
              <svg viewBox="0 0 24 24" fill="none" stroke="#C0392B" stroke-width="2" stroke-linecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <span>Loan</span>
          </div>
          <div class="mn-ds-icon-item">
            <div class="mn-ds-icon-circle" style="background:#e8f5e9;">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2D6B31" stroke-width="2" stroke-linecap="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
            </div>
            <span>Report</span>
          </div>
          <div class="mn-ds-icon-item">
            <div class="mn-ds-icon-circle" style="background:#e8edf3;">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1A3557" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <span>Security</span>
          </div>
        </div>
      </div>

      <div class="mn-ds-card">
        <div class="mn-ds-card-title">Button Components</div>
        <div class="mn-ds-btn-list">
          <div class="mn-ds-btn-row">
            <span class="mn-ds-btn-label">Primary</span>
            <div class="mn-ds-btn-demo mn-ds-btn-primary">Confirm Payment</div>
          </div>
          <div class="mn-ds-btn-row">
            <span class="mn-ds-btn-label">Secondary</span>
            <div class="mn-ds-btn-demo mn-ds-btn-secondary">View Details</div>
          </div>
          <div class="mn-ds-btn-row">
            <span class="mn-ds-btn-label">Outline</span>
            <div class="mn-ds-btn-demo mn-ds-btn-outline">Cancel</div>
          </div>
          <div class="mn-ds-btn-row">
            <span class="mn-ds-btn-label">Disabled</span>
            <div class="mn-ds-btn-demo mn-ds-btn-disabled">Processing…</div>
          </div>
          <div class="mn-ds-btn-row">
            <span class="mn-ds-btn-label">Danger</span>
            <div class="mn-ds-btn-demo mn-ds-btn-danger">Delete Account</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Input Fields + Card Tiles -->
    <div class="mn-ds-row reveal">
      <div class="mn-ds-card">
        <div class="mn-ds-card-title">Input Components</div>
        <div class="mn-ds-inputs">
          <div class="mn-ds-field">
            <label class="mn-ds-field-label">Phone Number</label>
            <div class="mn-ds-field-input mn-ds-field-normal">
              <span class="mn-ds-field-prefix">+237</span>
              <span class="mn-ds-field-text">6XX XXX XXXX</span>
            </div>
          </div>
          <div class="mn-ds-field">
            <label class="mn-ds-field-label">Amount (XAF) <span style="color:#439447;">*</span></label>
            <div class="mn-ds-field-input mn-ds-field-active">
              <span class="mn-ds-field-text" style="color:#1A3557;font-weight:700;">5,000</span>
              <span class="mn-ds-field-suffix">XAF</span>
            </div>
          </div>
          <div class="mn-ds-field">
            <label class="mn-ds-field-label">PIN</label>
            <div class="mn-ds-field-input mn-ds-field-normal">
              <span class="mn-ds-field-text" style="letter-spacing:.4em;color:#1A3557;">● ● ● ● ● ●</span>
            </div>
          </div>
          <div class="mn-ds-field">
            <label class="mn-ds-field-label" style="color:#C0392B;">Account Number</label>
            <div class="mn-ds-field-input mn-ds-field-error">
              <span class="mn-ds-field-text" style="color:#C0392B;">Invalid IBAN format</span>
              <svg style="width:16px;height:16px;flex-shrink:0;" viewBox="0 0 24 24" fill="none" stroke="#C0392B" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <span class="mn-ds-field-hint" style="color:#C0392B;">Please enter a valid account number</span>
          </div>
        </div>
      </div>

      <div class="mn-ds-card">
        <div class="mn-ds-card-title">Card Components</div>
        <div class="mn-ds-card-tiles">
          <!-- Balance Card -->
          <div class="mn-ds-tile mn-ds-tile-balance">
            <div class="mn-ds-tile-balance-label">Available Balance</div>
            <div class="mn-ds-tile-balance-amount">128,500 <span>XAF</span></div>
            <div class="mn-ds-tile-balance-row">
              <span>Acc: ●●●● 4821</span>
              <span style="color:#33B466;">● Active</span>
            </div>
          </div>
          <!-- Transaction Card -->
          <div class="mn-ds-tile">
            <div class="mn-ds-tile-header">
              <div class="mn-ds-tile-icon-wrap" style="background:#e8f5e9;">
                <svg viewBox="0 0 24 24" fill="none" stroke="#439447" stroke-width="2" stroke-linecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </div>
              <div class="mn-ds-tile-meta">
                <span class="mn-ds-tile-title">Transfer to MTN</span>
                <span class="mn-ds-tile-sub">Today, 14:32</span>
              </div>
              <span class="mn-ds-tile-amount" style="color:#C0392B;">-5,000 XAF</span>
            </div>
            <div class="mn-ds-tile-badge" style="background:#e8f5e9;color:#439447;">Completed</div>
          </div>
          <!-- Biller Card -->
          <div class="mn-ds-tile">
            <div class="mn-ds-tile-header">
              <div class="mn-ds-tile-icon-wrap" style="background:#fff8e1;">
                <svg viewBox="0 0 24 24" fill="none" stroke="#b8921e" stroke-width="2" stroke-linecap="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
              </div>
              <div class="mn-ds-tile-meta">
                <span class="mn-ds-tile-title">Electricity Bill</span>
                <span class="mn-ds-tile-sub">AES · Due Jun 30</span>
              </div>
              <span class="mn-ds-tile-amount" style="color:#1A3557;">12,000 XAF</span>
            </div>
            <div class="mn-ds-tile-badge" style="background:#fff8e1;color:#b8921e;">Pending</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 5-Bank Theme Inheritance -->
    <div class="mn-ds-card mn-ds-bank-card reveal">
      <div class="mn-ds-card-title">Multi-Bank Theme Inheritance · 5 Partner Banks</div>
      <div class="mn-ds-banks">
        <div class="mn-ds-bank-item">
          <div class="mn-ds-bank-color" style="background:linear-gradient(135deg,#439447,#2D6B31);"></div>
          <div class="mn-ds-bank-info">
            <span class="mn-ds-bank-name">CNEF</span>
            <span class="mn-ds-bank-tag">NeoS Host</span>
          </div>
        </div>
        <div class="mn-ds-bank-item">
          <div class="mn-ds-bank-color" style="background:linear-gradient(135deg,#E2001A,#a8001a);"></div>
          <div class="mn-ds-bank-info">
            <span class="mn-ds-bank-name">Société Générale</span>
            <span class="mn-ds-bank-tag">Commercial Bank</span>
          </div>
        </div>
        <div class="mn-ds-bank-item">
          <div class="mn-ds-bank-color" style="background:linear-gradient(135deg,#003DA5,#002d7a);"></div>
          <div class="mn-ds-bank-info">
            <span class="mn-ds-bank-name">SCB Cameroun</span>
            <span class="mn-ds-bank-tag">Commercial Bank</span>
          </div>
        </div>
        <div class="mn-ds-bank-item">
          <div class="mn-ds-bank-color" style="background:linear-gradient(135deg,#006DB7,#004e85);"></div>
          <div class="mn-ds-bank-info">
            <span class="mn-ds-bank-name">UBA Cameroun</span>
            <span class="mn-ds-bank-tag">Commercial Bank</span>
          </div>
        </div>
        <div class="mn-ds-bank-item">
          <div class="mn-ds-bank-color" style="background:linear-gradient(135deg,#1B1464,#0d0a3d);"></div>
          <div class="mn-ds-bank-info">
            <span class="mn-ds-bank-name">CCA Bank</span>
            <span class="mn-ds-bank-tag">Commercial Bank</span>
          </div>
        </div>
      </div>
      <p class="mn-ds-bank-note">Each partner bank's brand colors and logo are injected as design tokens — the NeoS app looks native to each bank while sharing the same component library and UX patterns.</p>
    </div>
  </div>
</section>

<!-- ── IOC DASHBOARD ──────────────────────────── -->
<section class="mn-sec reveal" id="ioc-dashboard">
  <div class="mn-sec-header">
    <div class="mn-eyebrow">IOC Dashboard · Integrated Operations Center</div>
    <h2 class="mn-sec-title">Leadership Dashboard</h2>
    <p class="mn-sec-sub">A real-time command-and-control interface for CNEF leadership — aggregating Mobile Money, Risk Control, Settlement, and Biller operations into a single pane of glass.</p>
  </div>

  <!-- ── Technical Architecture Specs (outside dashboard) ── -->
  <div class="mn-ioc-specs reveal">
    <div class="mn-ioc-spec-grid">
      <div class="mn-ioc-spec-card">
        <div class="mn-ioc-spec-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93A10 10 0 1 0 4.93 19.07"/><path d="M15.54 8.46a5 5 0 1 0-7.07 7.07"/></svg></div>
        <div>
          <div class="mn-ioc-spec-label">Data Sources</div>
          <div class="mn-ioc-spec-val">6 Subsystems · 8 Bank APIs · 3 Billers</div>
          <div class="mn-ioc-spec-detail">Mobile Money Core · Risk Engine · Settlement · Biller · AML · Bank Layer</div>
        </div>
      </div>
      <div class="mn-ioc-spec-card">
        <div class="mn-ioc-spec-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
        <div>
          <div class="mn-ioc-spec-label">Data Elements</div>
          <div class="mn-ioc-spec-val">≤ 50 Core KPIs</div>
          <div class="mn-ioc-spec-detail">Transactions · Risk Alerts · Compliance · Operations · Finance · SLA</div>
        </div>
      </div>
      <div class="mn-ioc-spec-card">
        <div class="mn-ioc-spec-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
        <div>
          <div class="mn-ioc-spec-label">Refresh Frequency</div>
          <div class="mn-ioc-spec-val">≤ 1s alerts · ≤ 30s metrics</div>
          <div class="mn-ioc-spec-detail">WebSocket push for real-time events · RESTful polling for aggregated KPIs</div>
        </div>
      </div>
      <div class="mn-ioc-spec-card">
        <div class="mn-ioc-spec-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <div>
          <div class="mn-ioc-spec-label">API Architecture</div>
          <div class="mn-ioc-spec-val">RESTful + WebSocket Dual Channel</div>
          <div class="mn-ioc-spec-detail">OAuth 2.0 + JWT · TLS 1.3 · JSON/HTTPS · RBAC role-based access</div>
        </div>
      </div>
      <div class="mn-ioc-spec-card">
        <div class="mn-ioc-spec-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg></div>
        <div>
          <div class="mn-ioc-spec-label">Data Retention</div>
          <div class="mn-ioc-spec-val">Hot 90d · Warm 1yr · Cold Archive</div>
          <div class="mn-ioc-spec-detail">Redis hot cache · PostgreSQL warm store · Huawei OBS cold archive</div>
        </div>
      </div>
      <div class="mn-ioc-spec-card">
        <div class="mn-ioc-spec-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></div>
        <div>
          <div class="mn-ioc-spec-label">SLA &amp; Compliance</div>
          <div class="mn-ioc-spec-val">99.9% availability · P95 &lt; 500ms</div>
          <div class="mn-ioc-spec-detail">ISO 27001 ready · PCI-DSS aligned · RGPD compliant · role-based views</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── Dashboard Frame ── -->
  <div class="mn-ioc-frame reveal" id="ioc-frame">

    <!-- ═══ TOP BAR ═══ -->
    <div class="mn-ioc-tb">
      <div class="mn-ioc-tb-l">
        <div class="mn-ioc-brand-ring"></div>
        <span class="mn-ioc-brand-n">NeoS · IOC</span>
        <span class="mn-ioc-tb-sep">|</span>
        <span class="mn-ioc-tb-title">Integrated Operations Center</span>
      </div>
      <div class="mn-ioc-tb-r">
        <span id="ioc-last-upd" class="mn-ioc-upd">0s ago</span>
        <div class="mn-ioc-sysr">
          <span class="mn-ioc-sysd mn-ioc-sysd-ok" title="Mobile Money"></span>
          <span class="mn-ioc-sysd mn-ioc-sysd-ok" title="Risk Engine"></span>
          <span class="mn-ioc-sysd mn-ioc-sysd-ok" title="Settlement"></span>
          <span class="mn-ioc-sysd mn-ioc-sysd-warn" title="Bank API-6"></span>
          <span class="mn-ioc-sysd mn-ioc-sysd-ok" title="AML"></span>
        </div>
        <span id="ioc-clock" class="mn-ioc-clock">00:00:00</span>
      </div>
    </div>

    <!-- ═══ 6 KPI CARDS ═══ -->
    <div class="mn-ioc-kpis">
      <div class="mn-ioc-k" style="--kc:#439447">
        <span class="mn-ioc-kl">Transactions Today</span>
        <span class="mn-ioc-kv" id="ioc-txn-count">47,283</span>
        <div class="mn-ioc-kb"><span class="mn-ioc-up">↑ 12.4%</span><svg class="mn-ioc-sp" viewBox="0 0 60 18" preserveAspectRatio="none"><polyline points="0,15 8,13 16,10 24,8 32,6 40,4 48,6 60,2" fill="none" stroke="#439447" stroke-width="1.5"/></svg></div>
      </div>
      <div class="mn-ioc-k" style="--kc:#2980B9">
        <span class="mn-ioc-kl">Active Users</span>
        <span class="mn-ioc-kv">12,847</span>
        <div class="mn-ioc-kb"><span class="mn-ioc-up">↑ 8.1%</span><svg class="mn-ioc-sp" viewBox="0 0 60 18" preserveAspectRatio="none"><polyline points="0,14 8,12 16,10 24,12 32,8 40,6 48,9 60,7" fill="none" stroke="#2980B9" stroke-width="1.5"/></svg></div>
      </div>
      <div class="mn-ioc-k" style="--kc:#33B466">
        <span class="mn-ioc-kl">Success Rate</span>
        <span class="mn-ioc-kv">99.72%</span>
        <div class="mn-ioc-kb"><span class="mn-ioc-up">↑ 0.08%</span><svg class="mn-ioc-sp" viewBox="0 0 60 18" preserveAspectRatio="none"><polyline points="0,8 8,9 16,7 24,8 32,5 40,6 48,4 60,5" fill="none" stroke="#33B466" stroke-width="1.5"/></svg></div>
      </div>
      <div class="mn-ioc-k" style="--kc:#E8C547">
        <span class="mn-ioc-kl">Settlement Vol.</span>
        <span class="mn-ioc-kv">2.4B XAF</span>
        <div class="mn-ioc-kb"><span class="mn-ioc-up">↑ 18.3%</span><svg class="mn-ioc-sp" viewBox="0 0 60 18" preserveAspectRatio="none"><polyline points="0,16 8,14 16,12 24,10 32,11 40,8 48,7 60,5" fill="none" stroke="#E8C547" stroke-width="1.5"/></svg></div>
      </div>
      <div class="mn-ioc-k" style="--kc:#C0392B">
        <span class="mn-ioc-kl">Risk Alerts</span>
        <span class="mn-ioc-kv" style="color:#ff6b6b;">3 <span class="mn-ioc-pulse"></span></span>
        <div class="mn-ioc-kb"><span class="mn-ioc-dn">2 Pending</span> · 1 Resolved</div>
      </div>
      <div class="mn-ioc-k" style="--kc:#7c3aed">
        <span class="mn-ioc-kl">Avg TXN Size</span>
        <span class="mn-ioc-kv">5,281 XAF</span>
        <div class="mn-ioc-kb"><span class="mn-ioc-up">↑ 3.2%</span><svg class="mn-ioc-sp" viewBox="0 0 60 18" preserveAspectRatio="none"><polyline points="0,14 8,12 16,11 24,9 32,10 40,8 48,9 60,7" fill="none" stroke="#7c3aed" stroke-width="1.5"/></svg></div>
      </div>
    </div>

    <!-- ═══ MAIN CHARTS ROW ═══ -->
    <div class="mn-ioc-main">

      <!-- 24h Line Chart -->
      <div class="mn-ioc-lc">
        <div class="mn-ioc-ch"><span class="mn-ioc-ct">24h Transaction Volume</span><div class="mn-ioc-leg"><span class="mn-ioc-ld" style="background:#439447;"></span>Today <span class="mn-ioc-ld" style="background:#2D6B31;opacity:.5;margin-left:8px;"></span>Yesterday</div></div>
        <div class="mn-ioc-lc-inner">
          <div class="mn-ioc-ya"><span>100k</span><span>75k</span><span>50k</span><span>25k</span><span>0</span></div>
          <div class="mn-ioc-lsvg">
            <svg viewBox="0 0 440 98" preserveAspectRatio="none" style="width:100%;height:100%;display:block;overflow:visible;">
              <defs>
                <linearGradient id="ioc-ag" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#439447" stop-opacity="0.5"/>
                  <stop offset="100%" stop-color="#439447" stop-opacity="0.02"/>
                </linearGradient>
              </defs>
              <line x1="0" y1="24" x2="440" y2="24" stroke="#162d4a" stroke-width="0.8"/>
              <line x1="0" y1="49" x2="440" y2="49" stroke="#162d4a" stroke-width="0.8"/>
              <line x1="0" y1="73" x2="440" y2="73" stroke="#162d4a" stroke-width="0.8"/>
              <!-- Volume bars (subtle) -->
              <rect x="1"   y="83" width="9"  height="15" fill="rgba(67,148,71,0.08)" rx="1"/>
              <rect x="20"  y="85" width="9"  height="13" fill="rgba(67,148,71,0.07)" rx="1"/>
              <rect x="39"  y="87" width="9"  height="11" fill="rgba(67,148,71,0.07)" rx="1"/>
              <rect x="58"  y="87" width="9"  height="11" fill="rgba(67,148,71,0.07)" rx="1"/>
              <rect x="77"  y="88" width="9"  height="10" fill="rgba(67,148,71,0.08)" rx="1"/>
              <rect x="96"  y="84" width="9"  height="14" fill="rgba(67,148,71,0.10)" rx="1"/>
              <rect x="115" y="78" width="9"  height="20" fill="rgba(67,148,71,0.13)" rx="1"/>
              <rect x="134" y="65" width="9"  height="33" fill="rgba(67,148,71,0.18)" rx="1"/>
              <rect x="153" y="49" width="9"  height="49" fill="rgba(67,148,71,0.24)" rx="1"/>
              <rect x="172" y="30" width="9"  height="68" fill="rgba(67,148,71,0.30)" rx="1"/>
              <rect x="191" y="34" width="9"  height="64" fill="rgba(67,148,71,0.28)" rx="1"/>
              <rect x="210" y="38" width="9"  height="60" fill="rgba(67,148,71,0.25)" rx="1"/>
              <rect x="229" y="52" width="9"  height="46" fill="rgba(67,148,71,0.20)" rx="1"/>
              <rect x="248" y="56" width="9"  height="42" fill="rgba(67,148,71,0.18)" rx="1"/>
              <rect x="267" y="44" width="9"  height="54" fill="rgba(67,148,71,0.23)" rx="1"/>
              <rect x="286" y="31" width="9"  height="67" fill="rgba(67,148,71,0.30)" rx="1"/>
              <rect x="305" y="22" width="9"  height="76" fill="rgba(67,148,71,0.38)" rx="1"/>
              <rect x="324" y="27" width="9"  height="71" fill="rgba(67,148,71,0.32)" rx="1"/>
              <rect x="343" y="38" width="9"  height="60" fill="rgba(67,148,71,0.25)" rx="1"/>
              <rect x="362" y="52" width="9"  height="46" fill="rgba(67,148,71,0.20)" rx="1"/>
              <rect x="381" y="65" width="9"  height="33" fill="rgba(67,148,71,0.15)" rx="1"/>
              <rect x="400" y="74" width="9"  height="24" fill="rgba(67,148,71,0.11)" rx="1"/>
              <rect x="419" y="81" width="9"  height="17" fill="rgba(67,148,71,0.08)" rx="1"/>
              <!-- Area -->
              <path d="M0,86 L19,89 L38,91 L57,92 L76,93 L95,90 L114,80 L133,63 L152,46 L171,28 L190,32 L209,36 L228,50 L247,54 L266,44 L285,31 L304,23 L323,27 L342,36 L361,50 L380,63 L399,74 L418,81 L437,87 L437,98 L0,98 Z" fill="url(#ioc-ag)"/>
              <!-- Yesterday -->
              <polyline points="0,90 19,92 38,93 57,94 76,95 95,92 114,84 133,67 152,50 171,32 190,36 209,40 228,53 247,57 266,47 285,35 304,27 323,31 342,40 361,54 380,67 399,77 418,84 437,90" fill="none" stroke="#2D6B31" stroke-width="1.2" stroke-dasharray="4 2" opacity="0.5"/>
              <!-- Today line (animated) -->
              <path id="ioc-txn-path" d="M0,86 L19,89 L38,91 L57,92 L76,93 L95,90 L114,80 L133,63 L152,46 L171,28 L190,32 L209,36 L228,50 L247,54 L266,44 L285,31 L304,23 L323,27 L342,36 L361,50 L380,63 L399,74 L418,81 L437,87" fill="none" stroke="#439447" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
              <!-- Peak marker -->
              <line x1="304" y1="23" x2="304" y2="98" stroke="#439447" stroke-width="0.6" stroke-dasharray="2 2" opacity="0.35"/>
              <circle cx="304" cy="23" r="4.5" fill="#439447"/>
              <circle cx="304" cy="23" r="8" fill="none" stroke="#439447" stroke-width="1" class="mn-ioc-pr"/>
              <rect x="310" y="14" width="46" height="14" rx="3" fill="rgba(67,148,71,0.25)"/>
              <text x="333" y="24" text-anchor="middle" font-size="7.5" fill="#7ee89c" font-weight="700">Peak 16:00</text>
            </svg>
            <div class="mn-ioc-xa"><span>0</span><span>2</span><span>4</span><span>6</span><span>8</span><span>10</span><span>12</span><span>14</span><span>16</span><span>18</span><span>20</span><span>22</span></div>
          </div>
        </div>
      </div>

      <!-- Donut: Payment Mix -->
      <div class="mn-ioc-donut">
        <div class="mn-ioc-ch"><span class="mn-ioc-ct">Payment Mix</span></div>
        <div class="mn-ioc-dp">
          <!-- C = 2π×36 ≈ 226.2 | offset = (1−cumul)×C -->
          <svg viewBox="0 0 100 100" class="mn-ioc-dsv">
            <circle cx="50" cy="50" r="36" fill="none" stroke="#439447" stroke-width="10" stroke-dasharray="86.0 226.2" stroke-dashoffset="226.2" transform="rotate(-90 50 50)"/>
            <circle cx="50" cy="50" r="36" fill="none" stroke="#2980B9" stroke-width="10" stroke-dasharray="56.6 226.2" stroke-dashoffset="140.2" transform="rotate(-90 50 50)"/>
            <circle cx="50" cy="50" r="36" fill="none" stroke="#33B466" stroke-width="10" stroke-dasharray="49.8 226.2" stroke-dashoffset="83.7" transform="rotate(-90 50 50)"/>
            <circle cx="50" cy="50" r="36" fill="none" stroke="#E8C547" stroke-width="10" stroke-dasharray="22.6 226.2" stroke-dashoffset="33.9" transform="rotate(-90 50 50)"/>
            <circle cx="50" cy="50" r="36" fill="none" stroke="#C0392B" stroke-width="10" stroke-dasharray="11.3 226.2" stroke-dashoffset="11.3" transform="rotate(-90 50 50)"/>
            <text x="50" y="47" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">47.3K</text>
            <text x="50" y="58" text-anchor="middle" font-size="5" fill="#6b9cbf">TXN Today</text>
          </svg>
          <div class="mn-ioc-dl">
            <div class="mn-ioc-di"><span class="mn-ioc-dd" style="background:#439447"></span><span class="mn-ioc-dn2">QR Scan</span><div class="mn-ioc-dpb"><div style="width:38%;background:#439447"></div></div><span class="mn-ioc-dpct">38%</span></div>
            <div class="mn-ioc-di"><span class="mn-ioc-dd" style="background:#2980B9"></span><span class="mn-ioc-dn2">Bank Tfr</span><div class="mn-ioc-dpb"><div style="width:25%;background:#2980B9"></div></div><span class="mn-ioc-dpct">25%</span></div>
            <div class="mn-ioc-di"><span class="mn-ioc-dd" style="background:#33B466"></span><span class="mn-ioc-dn2">Wallet</span><div class="mn-ioc-dpb"><div style="width:22%;background:#33B466"></div></div><span class="mn-ioc-dpct">22%</span></div>
            <div class="mn-ioc-di"><span class="mn-ioc-dd" style="background:#E8C547"></span><span class="mn-ioc-dn2">Intl</span><div class="mn-ioc-dpb"><div style="width:10%;background:#E8C547"></div></div><span class="mn-ioc-dpct">10%</span></div>
            <div class="mn-ioc-di"><span class="mn-ioc-dd" style="background:#C0392B"></span><span class="mn-ioc-dn2">Biller</span><div class="mn-ioc-dpb"><div style="width:5%;background:#C0392B"></div></div><span class="mn-ioc-dpct">5%</span></div>
          </div>
        </div>
      </div>

      <!-- System Latency -->
      <div class="mn-ioc-ss">
        <div class="mn-ioc-ch"><span class="mn-ioc-ct">System Latency</span></div>
        <div class="mn-ioc-ssl">
          <div class="mn-ioc-sr"><span class="mn-ioc-so"></span><span class="mn-ioc-sn">Mobile Money</span><div class="mn-ioc-slb"><div style="width:12%;background:#439447"></div></div><span class="mn-ioc-sm">12ms</span></div>
          <div class="mn-ioc-sr"><span class="mn-ioc-so"></span><span class="mn-ioc-sn">Risk Engine</span><div class="mn-ioc-slb"><div style="width:28%;background:#439447"></div></div><span class="mn-ioc-sm">28ms</span></div>
          <div class="mn-ioc-sr"><span class="mn-ioc-so"></span><span class="mn-ioc-sn">Settlement GW</span><div class="mn-ioc-slb"><div style="width:18%;background:#439447"></div></div><span class="mn-ioc-sm">18ms</span></div>
          <div class="mn-ioc-sr"><span class="mn-ioc-so"></span><span class="mn-ioc-sn">Biller Platform</span><div class="mn-ioc-slb"><div style="width:22%;background:#439447"></div></div><span class="mn-ioc-sm">22ms</span></div>
          <div class="mn-ioc-sr"><span class="mn-ioc-so"></span><span class="mn-ioc-sn">AML Engine</span><div class="mn-ioc-slb"><div style="width:45%;background:#E8C547"></div></div><span class="mn-ioc-sm" style="color:#E8C547;">45ms</span></div>
          <div class="mn-ioc-sr"><span class="mn-ioc-sw"></span><span class="mn-ioc-sn">Bank APIs (8)</span><div class="mn-ioc-slb"><div style="width:72%;background:#E8C547"></div></div><span class="mn-ioc-sm" style="color:#E8C547;">7/8 OK</span></div>
          <div class="mn-ioc-sr"><span class="mn-ioc-so"></span><span class="mn-ioc-sn">GimacPay Intl</span><div class="mn-ioc-slb"><div style="width:89%;background:#d97706"></div></div><span class="mn-ioc-sm" style="color:#d97706;">89ms</span></div>
          <div class="mn-ioc-sr"><span class="mn-ioc-so"></span><span class="mn-ioc-sn">OCS Telecom</span><div class="mn-ioc-slb"><div style="width:31%;background:#439447"></div></div><span class="mn-ioc-sm">31ms</span></div>
        </div>
      </div>
    </div>

    <!-- ═══ BOTTOM ROW ═══ -->
    <div class="mn-ioc-bot">

      <!-- Bank Bar Chart -->
      <div class="mn-ioc-bc">
        <div class="mn-ioc-ch"><span class="mn-ioc-ct">Bank Volume</span><span class="mn-ioc-cs">Today</span></div>
        <div class="mn-ioc-bars">
          <div class="mn-ioc-bi"><div class="mn-ioc-bt"><div class="ioc-bar-fill" data-h="85%" style="height:0;background:linear-gradient(180deg,#52b256,#2D6B31)"></div></div><span class="mn-ioc-bn">CNEF</span><span class="mn-ioc-bv">21.4k</span></div>
          <div class="mn-ioc-bi"><div class="mn-ioc-bt"><div class="ioc-bar-fill" data-h="62%" style="height:0;background:linear-gradient(180deg,#4aa3d6,#1a6090)"></div></div><span class="mn-ioc-bn">SCB</span><span class="mn-ioc-bv">15.6k</span></div>
          <div class="mn-ioc-bi"><div class="mn-ioc-bt"><div class="ioc-bar-fill" data-h="54%" style="height:0;background:linear-gradient(180deg,#3ecf7a,#229950)"></div></div><span class="mn-ioc-bn">UBA</span><span class="mn-ioc-bv">13.6k</span></div>
          <div class="mn-ioc-bi"><div class="mn-ioc-bt"><div class="ioc-bar-fill" data-h="38%" style="height:0;background:linear-gradient(180deg,#a78bfa,#5b21b6)"></div></div><span class="mn-ioc-bn">SocGen</span><span class="mn-ioc-bv">9.6k</span></div>
          <div class="mn-ioc-bi"><div class="mn-ioc-bt"><div class="ioc-bar-fill" data-h="27%" style="height:0;background:linear-gradient(180deg,#fde68a,#c9a832)"></div></div><span class="mn-ioc-bn">CCA</span><span class="mn-ioc-bv">6.8k</span></div>
        </div>
      </div>

      <!-- Live Feed -->
      <div class="mn-ioc-feed">
        <div class="mn-ioc-ch"><span class="mn-ioc-ct">Live Transactions</span><span class="mn-ioc-lb">● LIVE</span></div>
        <div class="mn-ioc-fl" id="ioc-feed-list">
          <div class="mn-ioc-fr"><span class="mn-ioc-fi" style="color:#439447">↑</span><span class="mn-ioc-fd">MTN → NeoS Wallet</span><span class="mn-ioc-fa">+8,500 XAF</span><span class="mn-ioc-ft">0:12</span></div>
          <div class="mn-ioc-fr"><span class="mn-ioc-fi" style="color:#2980B9">↑</span><span class="mn-ioc-fd">SCB Bank Transfer</span><span class="mn-ioc-fa">+22,000 XAF</span><span class="mn-ioc-ft">0:34</span></div>
          <div class="mn-ioc-fr"><span class="mn-ioc-fi" style="color:#E8C547">⚡</span><span class="mn-ioc-fd">AES Electricity Biller</span><span class="mn-ioc-fa">−6,000 XAF</span><span class="mn-ioc-ft">1:02</span></div>
          <div class="mn-ioc-fr"><span class="mn-ioc-fi" style="color:#33B466">↑</span><span class="mn-ioc-fd">GimacPay Intl Transfer</span><span class="mn-ioc-fa">+48,000 XAF</span><span class="mn-ioc-ft">1:45</span></div>
          <div class="mn-ioc-fr"><span class="mn-ioc-fi" style="color:#C0392B">⚠</span><span class="mn-ioc-fd">Risk Flag #R-0042</span><span class="mn-ioc-fa" style="color:#ff6b6b">Review</span><span class="mn-ioc-ft">2:11</span></div>
        </div>
      </div>

      <!-- 7-Day Heatmap -->
      <div class="mn-ioc-hm">
        <div class="mn-ioc-ch"><span class="mn-ioc-ct">7-Day TXN Heatmap</span><span class="mn-ioc-cs">by Hour</span></div>
        <div class="mn-ioc-hm-wrap">
          <div class="mn-ioc-hm-yl"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
          <div class="mn-ioc-hm-r">
            <div class="mn-ioc-hm-g">
              <div class="mn-ioc-hc" style="--op:.03"></div><div class="mn-ioc-hc" style="--op:.02"></div><div class="mn-ioc-hc" style="--op:.02"></div><div class="mn-ioc-hc" style="--op:.01"></div><div class="mn-ioc-hc" style="--op:.03"></div><div class="mn-ioc-hc" style="--op:.08"></div><div class="mn-ioc-hc" style="--op:.18"></div><div class="mn-ioc-hc" style="--op:.42"></div><div class="mn-ioc-hc" style="--op:.75"></div><div class="mn-ioc-hc" style="--op:.90"></div><div class="mn-ioc-hc" style="--op:.82"></div><div class="mn-ioc-hc" style="--op:.76"></div><div class="mn-ioc-hc" style="--op:.65"></div><div class="mn-ioc-hc" style="--op:.60"></div><div class="mn-ioc-hc" style="--op:.70"></div><div class="mn-ioc-hc" style="--op:.85"></div><div class="mn-ioc-hc" style="--op:.95"></div><div class="mn-ioc-hc" style="--op:.82"></div><div class="mn-ioc-hc" style="--op:.70"></div><div class="mn-ioc-hc" style="--op:.55"></div><div class="mn-ioc-hc" style="--op:.38"></div><div class="mn-ioc-hc" style="--op:.28"></div><div class="mn-ioc-hc" style="--op:.18"></div><div class="mn-ioc-hc" style="--op:.10"></div>
              <div class="mn-ioc-hc" style="--op:.03"></div><div class="mn-ioc-hc" style="--op:.02"></div><div class="mn-ioc-hc" style="--op:.01"></div><div class="mn-ioc-hc" style="--op:.01"></div><div class="mn-ioc-hc" style="--op:.04"></div><div class="mn-ioc-hc" style="--op:.09"></div><div class="mn-ioc-hc" style="--op:.20"></div><div class="mn-ioc-hc" style="--op:.44"></div><div class="mn-ioc-hc" style="--op:.78"></div><div class="mn-ioc-hc" style="--op:.92"></div><div class="mn-ioc-hc" style="--op:.85"></div><div class="mn-ioc-hc" style="--op:.79"></div><div class="mn-ioc-hc" style="--op:.68"></div><div class="mn-ioc-hc" style="--op:.62"></div><div class="mn-ioc-hc" style="--op:.72"></div><div class="mn-ioc-hc" style="--op:.87"></div><div class="mn-ioc-hc" style="--op:.97"></div><div class="mn-ioc-hc" style="--op:.84"></div><div class="mn-ioc-hc" style="--op:.71"></div><div class="mn-ioc-hc" style="--op:.57"></div><div class="mn-ioc-hc" style="--op:.40"></div><div class="mn-ioc-hc" style="--op:.30"></div><div class="mn-ioc-hc" style="--op:.20"></div><div class="mn-ioc-hc" style="--op:.11"></div>
              <div class="mn-ioc-hc" style="--op:.04"></div><div class="mn-ioc-hc" style="--op:.02"></div><div class="mn-ioc-hc" style="--op:.02"></div><div class="mn-ioc-hc" style="--op:.02"></div><div class="mn-ioc-hc" style="--op:.03"></div><div class="mn-ioc-hc" style="--op:.07"></div><div class="mn-ioc-hc" style="--op:.17"></div><div class="mn-ioc-hc" style="--op:.40"></div><div class="mn-ioc-hc" style="--op:.72"></div><div class="mn-ioc-hc" style="--op:.88"></div><div class="mn-ioc-hc" style="--op:.80"></div><div class="mn-ioc-hc" style="--op:.74"></div><div class="mn-ioc-hc" style="--op:.63"></div><div class="mn-ioc-hc" style="--op:.58"></div><div class="mn-ioc-hc" style="--op:.68"></div><div class="mn-ioc-hc" style="--op:.83"></div><div class="mn-ioc-hc" style="--op:.92"></div><div class="mn-ioc-hc" style="--op:.80"></div><div class="mn-ioc-hc" style="--op:.67"></div><div class="mn-ioc-hc" style="--op:.52"></div><div class="mn-ioc-hc" style="--op:.36"></div><div class="mn-ioc-hc" style="--op:.27"></div><div class="mn-ioc-hc" style="--op:.17"></div><div class="mn-ioc-hc" style="--op:.08"></div>
              <div class="mn-ioc-hc" style="--op:.04"></div><div class="mn-ioc-hc" style="--op:.02"></div><div class="mn-ioc-hc" style="--op:.02"></div><div class="mn-ioc-hc" style="--op:.02"></div><div class="mn-ioc-hc" style="--op:.04"></div><div class="mn-ioc-hc" style="--op:.10"></div><div class="mn-ioc-hc" style="--op:.21"></div><div class="mn-ioc-hc" style="--op:.46"></div><div class="mn-ioc-hc" style="--op:.80"></div><div class="mn-ioc-hc" style="--op:.94"></div><div class="mn-ioc-hc" style="--op:.87"></div><div class="mn-ioc-hc" style="--op:.81"></div><div class="mn-ioc-hc" style="--op:.70"></div><div class="mn-ioc-hc" style="--op:.65"></div><div class="mn-ioc-hc" style="--op:.75"></div><div class="mn-ioc-hc" style="--op:.90"></div><div class="mn-ioc-hc" style="--op:1.0"></div><div class="mn-ioc-hc" style="--op:.88"></div><div class="mn-ioc-hc" style="--op:.74"></div><div class="mn-ioc-hc" style="--op:.60"></div><div class="mn-ioc-hc" style="--op:.43"></div><div class="mn-ioc-hc" style="--op:.32"></div><div class="mn-ioc-hc" style="--op:.22"></div><div class="mn-ioc-hc" style="--op:.12"></div>
              <div class="mn-ioc-hc" style="--op:.05"></div><div class="mn-ioc-hc" style="--op:.03"></div><div class="mn-ioc-hc" style="--op:.02"></div><div class="mn-ioc-hc" style="--op:.02"></div><div class="mn-ioc-hc" style="--op:.05"></div><div class="mn-ioc-hc" style="--op:.12"></div><div class="mn-ioc-hc" style="--op:.25"></div><div class="mn-ioc-hc" style="--op:.52"></div><div class="mn-ioc-hc" style="--op:.85"></div><div class="mn-ioc-hc" style="--op:.98"></div><div class="mn-ioc-hc" style="--op:.94"></div><div class="mn-ioc-hc" style="--op:.88"></div><div class="mn-ioc-hc" style="--op:.78"></div><div class="mn-ioc-hc" style="--op:.73"></div><div class="mn-ioc-hc" style="--op:.83"></div><div class="mn-ioc-hc" style="--op:.96"></div><div class="mn-ioc-hc" style="--op:1.0"></div><div class="mn-ioc-hc" style="--op:.94"></div><div class="mn-ioc-hc" style="--op:.82"></div><div class="mn-ioc-hc" style="--op:.68"></div><div class="mn-ioc-hc" style="--op:.50"></div><div class="mn-ioc-hc" style="--op:.38"></div><div class="mn-ioc-hc" style="--op:.26"></div><div class="mn-ioc-hc" style="--op:.14"></div>
              <div class="mn-ioc-hc" style="--op:.03"></div><div class="mn-ioc-hc" style="--op:.02"></div><div class="mn-ioc-hc" style="--op:.01"></div><div class="mn-ioc-hc" style="--op:.01"></div><div class="mn-ioc-hc" style="--op:.02"></div><div class="mn-ioc-hc" style="--op:.06"></div><div class="mn-ioc-hc" style="--op:.14"></div><div class="mn-ioc-hc" style="--op:.32"></div><div class="mn-ioc-hc" style="--op:.55"></div><div class="mn-ioc-hc" style="--op:.66"></div><div class="mn-ioc-hc" style="--op:.64"></div><div class="mn-ioc-hc" style="--op:.60"></div><div class="mn-ioc-hc" style="--op:.67"></div><div class="mn-ioc-hc" style="--op:.70"></div><div class="mn-ioc-hc" style="--op:.64"></div><div class="mn-ioc-hc" style="--op:.60"></div><div class="mn-ioc-hc" style="--op:.65"></div><div class="mn-ioc-hc" style="--op:.58"></div><div class="mn-ioc-hc" style="--op:.50"></div><div class="mn-ioc-hc" style="--op:.43"></div><div class="mn-ioc-hc" style="--op:.33"></div><div class="mn-ioc-hc" style="--op:.25"></div><div class="mn-ioc-hc" style="--op:.17"></div><div class="mn-ioc-hc" style="--op:.10"></div>
              <div class="mn-ioc-hc" style="--op:.04"></div><div class="mn-ioc-hc" style="--op:.02"></div><div class="mn-ioc-hc" style="--op:.01"></div><div class="mn-ioc-hc" style="--op:.01"></div><div class="mn-ioc-hc" style="--op:.03"></div><div class="mn-ioc-hc" style="--op:.08"></div><div class="mn-ioc-hc" style="--op:.20"></div><div class="mn-ioc-hc" style="--op:.42"></div><div class="mn-ioc-hc" style="--op:.75"></div><div class="mn-ioc-hc" style="--op:.90"></div><div class="mn-ioc-hc" style="--op:.85"></div><div class="mn-ioc-hc" style="--op:.78"></div><div class="mn-ioc-hc" style="--op:.67"></div><div class="mn-ioc-hc" style="--op:.62"></div><div class="mn-ioc-hc" style="--op:.72"></div><div class="mn-ioc-hc" style="--op:.87"></div><div class="mn-ioc-hc mn-ioc-hca" style="--op:.95"></div><div class="mn-ioc-hc mn-ioc-hco" style="--op:.04"></div><div class="mn-ioc-hc mn-ioc-hco" style="--op:.04"></div><div class="mn-ioc-hc mn-ioc-hco" style="--op:.04"></div><div class="mn-ioc-hc mn-ioc-hco" style="--op:.04"></div><div class="mn-ioc-hc mn-ioc-hco" style="--op:.04"></div><div class="mn-ioc-hc mn-ioc-hco" style="--op:.04"></div><div class="mn-ioc-hc mn-ioc-hco" style="--op:.04"></div>
            </div>
            <div class="mn-ioc-hm-xl"><span>0</span><span>2</span><span>4</span><span>6</span><span>8</span><span>10</span><span>12</span><span>14</span><span>16</span><span>18</span><span>20</span><span>22</span></div>
          </div>
        </div>
      </div>

    </div><!-- end bottom row -->


  </div><!-- end ioc-frame -->
</section>

</div><!-- end mn-body -->

<footer class="au-footer">
  <span class="footer-l">ChinaSofti · <span>中软国际</span></span>
  <span class="footer-r">chinasofti-capability.vercel.app · © 2025</span>
</footer>

</div>
</template>

<style scoped>
/* ── PAGE SHELL ── */
.mn-page { position: relative; min-height: 100vh; background: var(--bg); overflow-x: hidden; }
.mn-mesh-bg {
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
  background:
    radial-gradient(ellipse 80% 60% at 20% -10%, rgba(29,78,216,0.07) 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 80% 110%, rgba(124,58,237,0.06) 0%, transparent 60%);
}

/* ── HERO ── */
.mn-hero {
  position: relative; z-index: 1;
  background: linear-gradient(140deg, #08091a 0%, #0f0c2e 35%, #1a1060 60%, #0c2d6e 82%, #063a5a 100%);
  min-height: 540px; display: flex; align-items: center;
  padding: 120px 72px 80px; overflow: hidden;
}
.mn-hero-bg {
  position: absolute; inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231d4ed8' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.mn-hero-particles { position: absolute; inset: 0; pointer-events: none; }
.mn-hero-particles span {
  position: absolute; border-radius: 50%;
  background: rgba(99,102,241,0.25);
  animation: mnFloat 8s ease-in-out infinite;
}
.mn-hero-particles span:nth-child(1){width:180px;height:180px;top:-40px;right:-30px;animation-delay:0s;}
.mn-hero-particles span:nth-child(2){width:120px;height:120px;bottom:20px;right:20%;animation-delay:2s;background:rgba(56,189,248,0.15);}
.mn-hero-particles span:nth-child(3){width:80px;height:80px;top:30%;left:60%;animation-delay:4s;background:rgba(167,139,250,0.2);}
.mn-hero-particles span:nth-child(4){width:200px;height:200px;bottom:-60px;left:-40px;animation-delay:1s;background:rgba(29,78,216,0.2);}
.mn-hero-particles span:nth-child(5){width:60px;height:60px;top:20%;right:30%;animation-delay:3s;background:rgba(6,182,212,0.25);}
.mn-hero-particles span:nth-child(6){width:100px;height:100px;top:60%;left:35%;animation-delay:5s;background:rgba(124,58,237,0.18);}
@keyframes mnFloat {
  0%,100%{transform:translateY(0) scale(1);opacity:0.6;}
  50%{transform:translateY(-20px) scale(1.08);opacity:1;}
}
.mn-hero-inner { position: relative; z-index: 2; max-width: 700px; }
.mn-hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
  border-radius: 999px; padding: 7px 18px; margin-bottom: 24px;
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
  color: rgba(255,255,255,0.7); text-transform: uppercase;
}
.mn-hero h1 {
  font-size: 3rem; font-weight: 900; line-height: 1.1;
  color: #fff; margin-bottom: 18px; letter-spacing: -0.03em;
}
.mn-grad {
  background: linear-gradient(90deg, #818cf8, #67e8f9, #a78bfa, #38bdf8);
  background-size: 300%;
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: mnGrad 6s linear infinite;
}
@keyframes mnGrad { 0%{background-position:0%} 100%{background-position:300%} }
.mn-hero-sub {
  font-size: 1.05rem; color: rgba(255,255,255,0.72); margin-bottom: 30px; line-height: 1.7;
}
.mn-hero-tags { display: flex; flex-wrap: wrap; gap: 10px; }
.mn-hero-tags span {
  display: inline-flex; align-items: center; gap: 7px;
  background: rgba(255,255,255,0.09); border: 1px solid rgba(255,255,255,0.15);
  border-radius: 999px; padding: 7px 16px;
  font-size: 0.82rem; font-weight: 600; color: rgba(255,255,255,0.88);
}

/* ── STATS STRIP ── */
.mn-stats-strip {
  position: relative; z-index: 1;
  background: linear-gradient(135deg, #1d4ed8, #4f46e5, #7c3aed);
  padding: 20px 72px; display: flex; justify-content: center; flex-wrap: wrap; gap: 0;
  overflow: hidden;
}
.mn-stats-strip::before {
  content: ''; position: absolute; inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.04'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
}
.mn-stat-item {
  position: relative; z-index: 1;
  display: flex; flex-direction: column; align-items: center;
  padding: 12px 36px; border-right: 1px solid rgba(255,255,255,0.15);
}
.mn-stat-item:last-child { border-right: none; }
.mn-stat-num { font-size: 2rem; font-weight: 900; color: #fff; line-height: 1; }
.mn-stat-label { font-size: 0.78rem; color: rgba(255,255,255,0.75); margin-top: 5px; white-space: nowrap; }

/* ── BODY ── */
.mn-body { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 0 48px 80px; }
.mn-sec { padding: 72px 0 0; }
.mn-sec-header { margin-bottom: 40px; }
.mn-eyebrow {
  font-size: 0.7rem; font-weight: 800; letter-spacing: 0.18em;
  text-transform: uppercase; color: var(--blue); margin-bottom: 10px;
}
.mn-sec-title {
  font-size: 1.85rem; font-weight: 900; color: var(--text1);
  letter-spacing: -0.025em; margin: 0; line-height: 1.15;
}

/* ── REVEAL ── */
.reveal { opacity: 0; transform: translateY(28px); transition: opacity .6s ease, transform .6s ease; }
.reveal.in { opacity: 1; transform: translateY(0); }

/* ── COMPARE CARDS ── */
.mn-compare-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.mn-compare-card {
  background: var(--card-bg); border: 1px solid rgba(29,78,216,0.09);
  border-radius: var(--radius); padding: 32px 28px;
  box-shadow: var(--shadow); backdrop-filter: blur(8px); transition: all .3s;
}
.mn-compare-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.mn-compare-icon {
  width: 56px; height: 56px; border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 18px; box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}
.mn-compare-card h3 { font-size: 1.1rem; font-weight: 800; color: var(--text1); margin: 0 0 6px; }
.mn-compare-card > p { font-size: 0.88rem; color: var(--text3); margin: 0 0 18px; }
.mn-compare-divider { height: 1px; background: var(--border); margin-bottom: 16px; }
.mn-compare-cons, .mn-compare-pros { display: flex; flex-direction: column; gap: 10px; }
.mn-compare-cons span, .mn-compare-pros span {
  display: flex; align-items: flex-start; gap: 8px;
  font-size: 0.84rem; color: var(--text2); line-height: 1.5;
}
.mn-compare-cons span svg, .mn-compare-pros span svg { flex-shrink: 0; margin-top: 2px; }
.mn-compare-highlight {
  border-color: rgba(29,78,216,0.25);
  background: linear-gradient(135deg, rgba(29,78,216,0.04) 0%, rgba(124,58,237,0.04) 100%);
  box-shadow: 0 4px 24px rgba(29,78,216,0.12);
}

/* ── ARCH ── */
.mn-arch-wrap { display: flex; flex-direction: column; gap: 0; }
.mn-arch-card {
  display: flex; align-items: stretch; gap: 0;
  background: var(--lbg); border: 1px solid var(--lbd);
  border-radius: 16px; overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07), 0 0 0 1px var(--lbd);
  transition: box-shadow .3s, transform .3s;
}
.mn-arch-card:hover {
  box-shadow: 0 8px 40px rgba(0,0,0,0.1), 0 0 0 1px var(--lbd);
  transform: translateY(-2px);
}
.mn-arch-card-left {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 8px; padding: 18px 20px; min-width: 118px;
  background: var(--lg); position: relative; overflow: hidden;
}
.mn-arch-card-left::after {
  content: ''; position: absolute; inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.06'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
}
.mn-arch-num-badge {
  font-size: 2rem; font-weight: 900; color: rgba(255,255,255,0.2);
  line-height: 1; position: absolute; top: 12px; right: 14px;
  letter-spacing: -0.05em;
}
.mn-arch-layer-icon {
  width: 44px; height: 44px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.18);
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  position: relative; z-index: 1;
}
.mn-arch-layer-text { text-align: center; position: relative; z-index: 1; }
.mn-arch-layer-cn { font-size: 0.88rem; font-weight: 900; color: #fff; letter-spacing: 0.02em; }
.mn-arch-layer-en { font-size: 0.55rem; color: rgba(255,255,255,0.6); letter-spacing: 0.12em; text-transform: uppercase; margin-top: 4px; }
.mn-arch-card-body {
  flex: 1; padding: 16px 24px; display: flex; flex-direction: column; gap: 10px; justify-content: center;
}
.mn-arch-group { display: flex; align-items: flex-start; gap: 12px; }
.mn-arch-group-lbl {
  font-size: 0.74rem; font-weight: 800; min-width: 68px;
  letter-spacing: 0.04em; padding-top: 4px; text-transform: uppercase; white-space: nowrap;
}
.mn-arch-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.mn-arch-chips span {
  padding: 4px 13px; border-radius: 999px; font-size: 0.86rem; font-weight: 500;
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.14); color: var(--text2);
  transition: background .2s;
}
.mn-arch-chips span:hover { background: rgba(255,255,255,0.14); }
:root:not(.dark) .mn-arch-chips span {
  background: rgba(0,0,0,0.04); border-color: rgba(0,0,0,0.08); color: var(--text2);
}
:root:not(.dark) .mn-arch-chips span:hover { background: rgba(0,0,0,0.08); }
.mn-arch-conn {
  display: flex; align-items: center; justify-content: center; padding: 2px 0;
  gap: 0; flex-direction: column; height: 24px;
}
.mn-arch-conn-line {
  width: 2px; flex: 1; background: linear-gradient(to bottom, var(--cc), transparent);
}
.mn-arch-conn-line:last-child { background: linear-gradient(to bottom, transparent, var(--cc)); }
.mn-arch-conn-dot {
  width: 10px; height: 10px; border-radius: 50%;
  border: 2px solid white; box-shadow: 0 0 6px currentColor; flex-shrink: 0;
}

/* ── TABS ── */
.mn-tab-bar {
  display: flex; gap: 6px; background: var(--vp-c-bg-soft, #f1f5f9);
  border-radius: 12px; padding: 5px; margin-bottom: 28px;
  border: 1px solid var(--border); width: fit-content;
}
.mn-tab {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 9px 22px; border-radius: 8px; border: none; cursor: pointer;
  font-size: 0.88rem; font-weight: 700; transition: all .2s;
  background: transparent; color: #64748b;
}
.mn-tab.active {
  background: linear-gradient(135deg, #1d4ed8, #4f46e5);
  color: #fff; box-shadow: 0 3px 12px rgba(29,78,216,0.3);
}
.mn-tab:hover:not(.active) { background: rgba(29,78,216,0.08); color: #1d4ed8; }
.mn-panel { display: none; }
.mn-panel.active { display: block; }
.mn-panel-intro {
  font-size: 0.95rem; color: var(--text2); line-height: 1.8;
  background: var(--card-bg); border-left: 3px solid var(--blue);
  padding: 14px 20px; border-radius: 0 8px 8px 0;
  margin-bottom: 28px; border: 1px solid var(--border); border-left-width: 3px;
}

/* ── CARDS GRID ── */
.mn-cards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 36px; }
.mn-card {
  background: var(--card-bg); border-radius: var(--radius);
  padding: 26px 22px; box-shadow: var(--shadow); border: 1px solid transparent;
  transition: all .3s; backdrop-filter: blur(8px);
}
.mn-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }
.mn-card-icon {
  width: 48px; height: 48px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 14px; box-shadow: 0 6px 16px rgba(0,0,0,0.1);
}
.mn-card h4 { font-size: 1rem; font-weight: 800; color: var(--text1); margin: 0 0 8px; }
.mn-card p { font-size: 0.86rem; color: var(--text2); line-height: 1.7; margin: 0; }
.mn-card-blue { border-color: rgba(29,78,216,0.1); }
.mn-card-blue .mn-card-icon { background: linear-gradient(135deg,#1d4ed8,#3b82f6); }
.mn-card-purple { border-color: rgba(124,58,237,0.1); }
.mn-card-purple .mn-card-icon { background: linear-gradient(135deg,#7c3aed,#a78bfa); }
.mn-card-cyan { border-color: rgba(8,145,178,0.1); }
.mn-card-cyan .mn-card-icon { background: linear-gradient(135deg,#0891b2,#06b6d4); }

/* ── SCREENSHOTS ROW ── */
.mn-screenshots-row {
  display: flex; gap: 14px; overflow-x: auto;
  padding-bottom: 8px; -webkit-overflow-scrolling: touch;
}
.mn-ss-item { flex-shrink: 0; width: 200px; }
.mn-ss-item img {
  width: 100%; height: 360px; object-fit: cover; object-position: top;
  border-radius: 12px; border: 1px solid rgba(29,78,216,0.12);
  box-shadow: 0 4px 20px rgba(0,0,0,0.1); display: block;
}
.mn-ss-cap { font-size: 0.78rem; color: var(--text3); text-align: center; margin-top: 8px; font-weight: 600; }

/* ── DIRECTORY ── */
.mn-dir-banner {
  display: flex; align-items: center; justify-content: space-between;
  background: linear-gradient(135deg, #1d4ed8, #4f46e5, #7c3aed);
  border-radius: 14px; padding: 18px 24px; margin-bottom: 28px;
  text-decoration: none; color: #fff;
  box-shadow: 0 6px 24px rgba(29,78,216,0.3);
  transition: transform .2s, box-shadow .2s;
}
.mn-dir-banner:hover { transform: translateY(-2px); box-shadow: 0 10px 32px rgba(29,78,216,0.4); }
.mn-dir-banner-left { display: flex; align-items: center; gap: 16px; }
.mn-dir-banner-left svg { flex-shrink: 0; opacity: 0.9; }
.mn-dir-banner-title { font-size: 1.02rem; font-weight: 800; margin-bottom: 4px; }
.mn-dir-banner-sub { font-size: 0.78rem; opacity: 0.8; }
.mn-dir-banner-arrow {
  display: flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.18); border: 1px solid rgba(255,255,255,0.3);
  border-radius: 8px; padding: 9px 18px;
  font-size: 0.86rem; font-weight: 700; white-space: nowrap; flex-shrink: 0;
  transition: background .2s;
}
.mn-dir-banner:hover .mn-dir-banner-arrow { background: rgba(255,255,255,0.28); }

.mn-dir-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 8px; }
.mn-dir-grid-2 { grid-template-columns: repeat(2, 1fr); }
.mn-dir-grid-3 { grid-template-columns: repeat(3, 1fr); }
.mn-dir-card {
  display: flex; align-items: center; gap: 14px;
  padding: 16px 18px; border-radius: 12px; text-decoration: none; color: inherit;
  background: var(--card-bg); border: 1px solid var(--border);
  box-shadow: var(--shadow); transition: all .2s; backdrop-filter: blur(8px);
}
.mn-dir-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-lg); }
.mn-dir-icon {
  width: 44px; height: 44px; border-radius: 11px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}
.mn-dir-info { flex: 1; min-width: 0; }
.mn-dir-info h4 { font-size: 0.9rem; font-weight: 800; color: var(--text1); margin: 0 0 4px; }
.mn-dir-info p { font-size: 0.75rem; color: var(--text2); margin: 0; line-height: 1.5; }
.mn-dir-arrow { color: #94a3b8; flex-shrink: 0; transition: transform .15s, color .15s; }
.mn-dir-card:hover .mn-dir-arrow { transform: translate(2px,-2px); color: #1d4ed8; }
.mn-dir-blue .mn-dir-icon { background: linear-gradient(135deg,#1d4ed8,#3b82f6); }
.mn-dir-blue:hover { border-color: rgba(29,78,216,0.2); }
.mn-dir-purple .mn-dir-icon { background: linear-gradient(135deg,#7c3aed,#a78bfa); }
.mn-dir-purple:hover { border-color: rgba(124,58,237,0.2); }
.mn-dir-cyan .mn-dir-icon { background: linear-gradient(135deg,#0891b2,#06b6d4); }
.mn-dir-cyan:hover { border-color: rgba(8,145,178,0.2); }
.mn-dir-amber .mn-dir-icon { background: linear-gradient(135deg,#d97706,#f59e0b); }
.mn-dir-amber:hover { border-color: rgba(217,119,6,0.2); }

/* ── DELIVERY ── */
.mn-delivery-intro {
  font-size: 0.95rem; color: var(--text2); line-height: 1.8;
  background: var(--card-bg); border-left: 3px solid var(--blue);
  padding: 14px 20px; border-radius: 0 8px 8px 0;
  margin-bottom: 40px; border: 1px solid var(--border); border-left-width: 3px;
}
.mn-flow-steps {
  display: flex; align-items: flex-start; gap: 0;
  margin-bottom: 40px; flex-wrap: wrap;
}
.mn-flow-step {
  flex: 1; min-width: 160px; display: flex; flex-direction: column; align-items: center;
  text-align: center; padding: 0 12px;
}
.mn-flow-num {
  width: 48px; height: 48px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.95rem; font-weight: 900; color: #fff;
  margin-bottom: 14px; box-shadow: 0 6px 18px rgba(0,0,0,0.15);
}
.mn-flow-content h4 { font-size: 0.92rem; font-weight: 800; color: var(--text1); margin: 0 0 6px; }
.mn-flow-content p { font-size: 0.8rem; color: var(--text2); line-height: 1.6; margin: 0; }
.mn-flow-arrow { font-size: 1.4rem; color: #94a3b8; margin-top: 12px; padding: 0 4px; flex-shrink: 0; }
.mn-flow-imgs {
  display: grid; grid-template-columns: 1fr; gap: 28px; margin-bottom: 44px;
}
.mn-flow-img-block {
  background: var(--card-bg); border-radius: 16px;
  border: 1px solid rgba(29,78,216,0.09);
  box-shadow: var(--shadow-lg); overflow: hidden;
  transition: transform .3s, box-shadow .3s;
}
.mn-flow-img-block:hover { transform: translateY(-4px); box-shadow: 0 20px 50px rgba(29,78,216,0.12); }
.mn-flow-img-header {
  display: flex; align-items: center; gap: 14px;
  padding: 18px 22px; border-bottom: 1px solid var(--border);
  background: var(--vp-c-bg-soft, #f8fafc);
}
.mn-flow-img-icon {
  width: 40px; height: 40px; border-radius: 10px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}
.mn-flow-img-title { font-size: 1rem; font-weight: 800; color: var(--text1); }
.mn-flow-img-sub { font-size: 0.76rem; color: var(--text3); margin-top: 3px; }
.mn-flow-img-wrap { padding: 16px; }
.mn-flow-img-wrap img {
  width: 100%; display: block; border-radius: 10px;
  border: 1px solid var(--border); box-shadow: 0 2px 12px rgba(0,0,0,0.07);
}

/* ── PAGE COMPLEXITY ── */
.mn-cpx-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
}
.mn-cpx-card {
  background: var(--card-bg); border-radius: var(--radius);
  border: 1px solid var(--border); box-shadow: var(--shadow);
  overflow: hidden; transition: all .3s; backdrop-filter: blur(8px);
}
.mn-cpx-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.cpx-low { border-top: 3px solid #10b981; }
.cpx-medium { border-top: 3px solid #f59e0b; }
.cpx-high { border-top: 3px solid #ef4444; }
.mn-cpx-head {
  padding: 18px 20px 14px; display: flex; align-items: center; justify-content: space-between;
  border-bottom: 1px solid var(--border);
}
.mn-cpx-badge {
  font-size: 0.72rem; font-weight: 800; border-radius: 20px; padding: 4px 12px;
  letter-spacing: 0.04em;
}
.badge-low    { background: rgba(16,185,129,0.12); color: #059669; }
.badge-medium { background: rgba(245,158,11,0.12); color: #d97706; }
.badge-high   { background: rgba(239,68,68,0.12);  color: #dc2626; }
.mn-cpx-days-wrap {
  font-size: 0.78rem; font-weight: 600; color: var(--text2);
  display: flex; align-items: baseline; gap: 4px;
}
.mn-cpx-num {
  font-size: 1.9rem; font-weight: 900; line-height: 1; color: var(--text1);
}
.mn-cpx-screen {
  margin: 16px 20px; border-radius: 12px; overflow: hidden;
  border: 1px solid var(--border); height: 300px;
}
.mn-cpx-screen img {
  width: 100%; height: 100%; object-fit: cover; object-position: top; display: block;
}
.mn-cpx-example {
  display: flex; align-items: center; gap: 7px; padding: 0 20px 14px;
  font-size: 0.83rem; font-weight: 700; color: var(--text1);
}
.mn-cpx-meta {
  padding: 12px 20px 20px; border-top: 1px solid var(--border);
  display: flex; flex-direction: column; gap: 9px;
}
.mn-cpx-row { display: flex; align-items: flex-start; gap: 10px; font-size: 0.79rem; }
.mn-cpx-label {
  font-weight: 700; color: var(--text2); min-width: 80px; flex-shrink: 0;
}
.mn-cpx-val { color: var(--text2); line-height: 1.55; }

/* ── PROJECT MANAGEMENT ── */
.mn-pm-cards {
  display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; margin-bottom: 36px;
}
.mn-pm-card {
  background: var(--card-bg); border-radius: var(--radius); padding: 22px 18px;
  border-top: 3px solid;
  border-left: 1px solid rgba(29,78,216,0.08);
  border-right: 1px solid rgba(29,78,216,0.08);
  border-bottom: 1px solid rgba(29,78,216,0.08);
  box-shadow: var(--shadow); transition: all .3s; backdrop-filter: blur(8px);
}
.mn-pm-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }
.mn-pm-card-icon {
  width: 40px; height: 40px; border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}
.mn-pm-card h4 { font-size: 0.92rem; font-weight: 800; color: var(--text1); margin: 0 0 8px; }
.mn-pm-card p { font-size: 0.81rem; color: var(--text2); line-height: 1.65; margin: 0; }
.mn-cap-img { margin-top: 4px; }
.mn-cap-img img {
  width: 100%; border-radius: 12px; border: 1px solid var(--border);
  box-shadow: var(--shadow); display: block;
}
.mn-img-cap { font-size: 0.78rem; color: var(--text3); text-align: center; margin-top: 8px; font-weight: 600; }

/* ── RESPONSIVE ── */
@media (max-width: 1024px) {
  .mn-hero { padding: 100px 40px 60px; }
  .mn-body { padding: 0 32px 64px; }
  .mn-stats-strip { padding: 18px 32px; }
  .mn-compare-grid { grid-template-columns: 1fr; max-width: 480px; }
}
@media (max-width: 768px) {
  .mn-hero { padding: 80px 24px 48px; min-height: auto; }
  .mn-hero h1 { font-size: 2rem; }
  .mn-body { padding: 0 20px 48px; }
  .mn-stats-strip { padding: 14px 20px; }
  .mn-stat-item { padding: 8px 16px; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.12); width: 50%; }
  .mn-stat-item:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.15); }
  .mn-stat-item:last-child { border-bottom: none; }
  .mn-compare-grid { grid-template-columns: 1fr; }
  .mn-cards-grid { grid-template-columns: 1fr 1fr; }
  .mn-flow-steps { flex-direction: column; align-items: stretch; }
  .mn-flow-step { flex-direction: row; text-align: left; gap: 16px; align-items: flex-start; }
  .mn-flow-num { flex-shrink: 0; margin-bottom: 0; }
  .mn-flow-arrow { display: none; }
  .mn-flow-imgs { grid-template-columns: 1fr; }
  .mn-arch-card { flex-direction: column; }
  .mn-arch-card-left { flex-direction: row; min-width: unset; padding: 16px 20px; }
  .mn-arch-num-badge { display: none; }
  .mn-ucd-feat-grid { grid-template-columns: 1fr 1fr; }
  .mn-ucd-gallery { flex-direction: column; height: auto; }
  .mn-ucd-gal-col { height: 260px; }
  .mn-ucd-gal-wide { flex: unset; height: 220px; }
  .mn-pm-cards { grid-template-columns: 1fr 1fr; }
  .mn-tab-bar { flex-direction: column; width: 100%; }
  .mn-tab-bar .mn-tab { justify-content: center; }
}
@media (max-width: 560px) {
  .mn-cards-grid { grid-template-columns: 1fr; }
  .mn-sec-title { font-size: 1.4rem; }
  .mn-ucd-feat-grid { grid-template-columns: 1fr; }
  .mn-pm-cards { grid-template-columns: 1fr; }
  .mn-dtl-ms { min-width: 100%; flex: none; }
}

/* ── CI/CD PIPELINE CARD ── */
.mn-cicd-card {
  background: var(--card-bg); border: 1px solid rgba(29,78,216,0.09);
  border-radius: 16px; box-shadow: var(--shadow-lg); overflow: hidden; margin-bottom: 44px;
}
.mn-cicd-body { padding: 20px 24px 28px; }
.mn-cicd-meta {
  display: flex; align-items: center; justify-content: space-between;
  gap: 12px; margin-bottom: 14px; flex-wrap: wrap;
}
.mn-cicd-inp-row { display: flex; align-items: center; gap: 8px; }
.mn-cicd-inp {
  background: rgba(29,78,216,0.07); color: #1d4ed8;
  font-size: 0.72rem; font-weight: 700;
  border: 1px solid rgba(29,78,216,0.14); border-radius: 6px; padding: 3px 9px;
}
.mn-cicd-dm-note { display: flex; align-items: center; gap: 5px; font-size: 0.68rem; font-weight: 600; color: var(--text3); }
.mn-cicd-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; }
.mn-cicd-grid {
  display: grid; grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 22px 1fr; min-width: 580px;
  position: relative; padding-bottom: 8px;
}
.mn-cicd-dm1 {
  grid-column: 3 / 6; grid-row: 1;
  background: rgba(124,58,237,0.07); border: 1px solid rgba(124,58,237,0.18);
  border-radius: 4px; margin: 0 4px;
  font-size: 0.6rem; font-weight: 700; color: #7c3aed;
  display: flex; align-items: center; justify-content: center; letter-spacing: 0.05em;
}
.mn-cicd-dm2 {
  grid-column: 6 / 8; grid-row: 1;
  background: rgba(8,145,178,0.07); border: 1px solid rgba(8,145,178,0.18);
  border-radius: 4px; margin: 0 4px;
  font-size: 0.6rem; font-weight: 700; color: #0891b2;
  display: flex; align-items: center; justify-content: center; letter-spacing: 0.05em;
}
.mn-cicd-conn {
  grid-column: 1 / 9; grid-row: 2;
  align-self: start; margin-top: 21px; height: 2px; pointer-events: none; z-index: 0;
  background: linear-gradient(90deg, #3b82f6, #7c3aed, #06b6d4, #10b981);
}
.mn-cicd-st {
  grid-row: 2; display: flex; flex-direction: column; align-items: center;
  text-align: center; gap: 6px; padding: 8px 4px 0; position: relative; z-index: 1;
}
.mn-cicd-st:not(.mn-cicd-st-last)::after {
  content: '›'; font-size: 1.2rem; color: #94a3b8;
  position: absolute; right: -9px; top: 14px; z-index: 3; line-height: 1;
}
.mn-cicd-dot {
  width: 26px; height: 26px; border-radius: 50%; flex-shrink: 0;
  border: 2.5px solid var(--card-bg); box-shadow: 0 0 0 2px rgba(99,102,241,0.2);
}
.mn-cicd-sn { font-size: 0.72rem; font-weight: 800; color: var(--text1); white-space: nowrap; }
.mn-cicd-tools { display: flex; flex-wrap: wrap; justify-content: center; gap: 3px; }
.mn-cicd-tools span {
  font-size: 0.58rem; font-weight: 600; color: var(--text3);
  background: var(--vp-c-bg-soft, #f8fafc); border: 1px solid var(--border);
  border-radius: 4px; padding: 1px 5px; white-space: nowrap;
}

/* ── DUAL-LAYER TIMELINE ── */
.mn-dual-tl {
  margin-top: 32px; background: var(--card-bg);
  border: 1px solid rgba(29,78,216,0.09); border-radius: 20px;
  overflow: hidden; box-shadow: var(--shadow-lg);
}
.mn-dtl-client {
  padding: 28px 32px 24px;
  background: linear-gradient(180deg, rgba(29,78,216,0.03) 0%, transparent 100%);
}
.mn-dtl-head {
  display: flex; align-items: center; gap: 10px; margin-bottom: 18px;
  font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.1em; color: var(--text3);
}
.mn-dtl-head-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.mn-dtl-ms-row { display: flex; align-items: flex-start; gap: 6px; }
.mn-dtl-ms {
  flex: 1; background: var(--vp-c-bg-soft, #f8fafc);
  border: 1px solid rgba(29,78,216,0.08); border-radius: 12px; padding: 14px 14px 12px;
  transition: box-shadow .2s, transform .2s;
}
.mn-dtl-ms:hover { box-shadow: 0 6px 24px rgba(29,78,216,0.1); transform: translateY(-2px); }
.mn-dtl-ms-num {
  width: 26px; height: 26px; border-radius: 7px;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 0.75rem; font-weight: 900; margin-bottom: 8px;
}
.mn-dtl-ms-title { font-size: 0.85rem; font-weight: 800; color: var(--text1); margin-bottom: 4px; }
.mn-dtl-ms-desc { font-size: 0.7rem; color: var(--text3); line-height: 1.55; }
.mn-dtl-ms-arr {
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; font-size: 1.2rem; color: #cbd5e1; padding-top: 22px; min-width: 18px;
}
.mn-dtl-bridge {
  display: flex; align-items: center; gap: 16px; padding: 0 32px;
  border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
  background: linear-gradient(180deg, rgba(29,78,216,0.02) 0%, rgba(124,58,237,0.02) 100%);
}
.mn-dtl-br-l { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(99,102,241,0.25), transparent); }
.mn-dtl-br-center { display: flex; align-items: center; gap: 10px; padding: 10px 0; }
.mn-dtl-br-tag { font-size: 0.66rem; font-weight: 700; padding: 3px 10px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.07em; white-space: nowrap; }
.mn-dtl-br-tag-blue  { background: rgba(29,78,216,0.08);  color: #1d4ed8; }
.mn-dtl-br-tag-purple{ background: rgba(124,58,237,0.08); color: #7c3aed; }
.mn-dtl-rd {
  padding: 24px 32px 28px;
  background: linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.03) 100%);
}
.mn-dtl-phases-outer { overflow-x: auto; margin-bottom: 20px; -webkit-overflow-scrolling: touch; padding-bottom: 4px; }
.mn-dtl-phases { display: flex; position: relative; min-width: 600px; }
.mn-dtl-phases::before {
  content: ''; position: absolute; top: 31px;
  left: calc(100% / 18); right: calc(100% / 18);
  height: 2px; background: linear-gradient(90deg, #3b82f6, #7c3aed, #06b6d4); z-index: 0;
}
.mn-dtl-ph { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 5px; text-align: center; padding: 0 2px; }
.mn-dtl-cp-slot  { height: 24px; }
.mn-dtl-cp-badge {
  height: 22px; display: inline-flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, #d97706, #f59e0b); color: #fff;
  font-size: 0.62rem; font-weight: 900; border-radius: 6px; padding: 0 7px;
  box-shadow: 0 2px 8px rgba(217,119,6,0.3); white-space: nowrap;
}
.mn-dtl-ph-dot {
  width: 14px; height: 14px; border-radius: 50%; flex-shrink: 0;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  border: 2.5px solid var(--card-bg); box-shadow: 0 0 0 2px rgba(59,130,246,0.3); z-index: 2;
}
.mn-dtl-ph-dot-cp { width: 16px; height: 16px; background: linear-gradient(135deg, #d97706, #f59e0b); box-shadow: 0 0 0 2px rgba(217,119,6,0.3); }
.mn-dtl-ph-dot-end { background: linear-gradient(135deg, #059669, #10b981); box-shadow: 0 0 0 2px rgba(5,150,105,0.3); }
.mn-dtl-ph-name { font-size: 0.78rem; font-weight: 800; color: var(--text1); }
.mn-dtl-ph-desc { font-size: 0.65rem; color: var(--text3); line-height: 1.5; }
.mn-dtl-qbars { display: flex; flex-direction: column; gap: 5px; margin-top: 8px; }
.mn-dtl-qbar { height: 26px; border-radius: 6px; display: flex; align-items: center; padding: 0 12px; }
.mn-dtl-qbar span { font-size: 0.69rem; font-weight: 600; color: var(--text2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
@media (max-width: 1024px) {
  .mn-dtl-client { padding: 22px 24px 20px; }
  .mn-dtl-rd     { padding: 20px 24px 24px; }
  .mn-dtl-bridge { padding: 0 24px; }
}
@media (max-width: 768px) {
  .mn-dtl-client { padding: 20px; }
  .mn-dtl-rd     { padding: 18px 20px 22px; }
  .mn-dtl-bridge { padding: 0 20px; }
  .mn-dtl-ms-arr { display: none; }
  .mn-dtl-ms-row { flex-wrap: wrap; gap: 8px; }
  .mn-dtl-ms     { min-width: calc(50% - 4px); flex: none; }
  .mn-dtl-qbar span { font-size: 0.62rem; }
  .mn-cicd-body  { padding: 16px 16px 20px; }
  .mn-ds-row     { grid-template-columns: 1fr; }
  .mn-ds-swatches { grid-template-columns: repeat(2, 1fr); }
  .mn-ds-icon-grid { grid-template-columns: repeat(4, 1fr); }
  .mn-ds-banks   { grid-template-columns: repeat(3, 1fr); }
  .mn-ds-block   { padding: 20px 16px 24px; }
  .mn-ds-typo-label { width: 120px; }
}

/* ── DESIGN SYSTEM ──────────────────────────────────── */
.mn-ds-block {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: calc(var(--radius) + 4px);
  padding: 28px 32px 32px;
  margin-bottom: 24px;
  box-shadow: var(--shadow);
}
.mn-ds-block-header {
  display: flex; align-items: center; gap: 16px;
  margin-bottom: 24px; padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}
.mn-ds-block-icon {
  width: 44px; height: 44px;
  background: #e8f5e9; border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; color: #439447;
}
.mn-ds-block-icon svg { width: 22px; height: 22px; }
.mn-ds-block-icon--kit { background: #e8edf3; color: #1A3557; }
.mn-ds-block-tag {
  font-size: 0.7rem; font-weight: 700; color: #439447;
  text-transform: uppercase; letter-spacing: .07em; margin-bottom: 2px;
}
.mn-ds-block-name { font-size: 1.1rem; font-weight: 700; color: var(--text1); }

.mn-ds-row {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 16px; margin-bottom: 16px;
}
.mn-ds-card {
  background: var(--bg); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 18px 20px;
}
.mn-ds-card-title {
  font-size: 0.72rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: .05em;
  color: var(--text3); margin-bottom: 14px;
}

/* Swatches */
.mn-ds-swatches { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.mn-ds-swatch { display: flex; flex-direction: column; gap: 5px; }
.mn-ds-swatch-color { height: 50px; border-radius: 8px; }
.mn-ds-swatch-info { display: flex; flex-direction: column; gap: 1px; }
.mn-ds-swatch-name { font-size: 0.68rem; font-weight: 600; color: var(--text1); }
.mn-ds-swatch-hex  { font-size: 0.62rem; font-family: monospace; color: var(--text3); }
.mn-ds-swatch-role { font-size: 0.58rem; font-weight: 700; color: #439447; text-transform: uppercase; letter-spacing: .04em; }

/* Right column */
.mn-ds-right-col { display: flex; flex-direction: column; gap: 14px; }

/* Allocation bars */
.mn-ds-alloc-bars { display: flex; flex-direction: column; gap: 10px; }
.mn-ds-alloc-row  { display: flex; align-items: center; gap: 10px; }
.mn-ds-alloc-label { font-size: 0.7rem; color: var(--text2); width: 108px; flex-shrink: 0; }
.mn-ds-alloc-track { flex: 1; height: 9px; background: var(--border); border-radius: 5px; overflow: hidden; }
.mn-ds-alloc-fill  { height: 100%; border-radius: 5px; }
.mn-ds-alloc-pct   { font-size: 0.68rem; font-weight: 700; color: var(--text2); width: 32px; text-align: right; }

/* Status pills */
.mn-ds-status-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; }
.mn-ds-status-pill {
  display: flex; align-items: center; gap: 6px;
  padding: 5px 11px; border-radius: 20px;
  font-size: 0.7rem; font-weight: 600;
}
.mn-ds-status-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }

/* Typography */
.mn-ds-typo-card  { margin-bottom: 0; }
.mn-ds-typo-scale { display: flex; flex-direction: column; }
.mn-ds-typo-row   {
  display: flex; align-items: baseline; gap: 20px;
  padding: 9px 0; border-bottom: 1px solid var(--border);
}
.mn-ds-typo-row:last-child { border-bottom: none; }
.mn-ds-typo-label  { font-size: 0.64rem; color: var(--text3); width: 148px; flex-shrink: 0; font-family: monospace; }
.mn-ds-typo-sample { flex: 1; }

/* Icon grid */
.mn-ds-icon-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.mn-ds-icon-item  { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.mn-ds-icon-circle {
  width: 48px; height: 48px; border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
}
.mn-ds-icon-circle svg { width: 24px; height: 24px; }
.mn-ds-icon-item span  { font-size: 0.64rem; color: var(--text2); text-align: center; font-weight: 500; }

/* Buttons */
.mn-ds-btn-list { display: flex; flex-direction: column; gap: 9px; }
.mn-ds-btn-row  { display: flex; align-items: center; gap: 14px; }
.mn-ds-btn-label { font-size: 0.67rem; color: var(--text3); width: 68px; flex-shrink: 0; }
.mn-ds-btn-demo {
  padding: 8px 18px; border-radius: 8px;
  font-size: 0.78rem; font-weight: 600; text-align: center;
  user-select: none;
}
.mn-ds-btn-primary  { background: #439447; color: #fff; }
.mn-ds-btn-secondary { background: #1A3557; color: #fff; }
.mn-ds-btn-outline  { background: transparent; color: #439447; border: 1.5px solid #439447; }
.mn-ds-btn-disabled { background: #e8e8e8; color: #9e9e9e; }
.mn-ds-btn-danger   { background: #C0392B; color: #fff; }

/* Input fields */
.mn-ds-inputs  { display: flex; flex-direction: column; gap: 11px; }
.mn-ds-field   { display: flex; flex-direction: column; gap: 4px; }
.mn-ds-field-label { font-size: 0.7rem; color: var(--text2); font-weight: 600; }
.mn-ds-field-input {
  display: flex; align-items: center; gap: 8px;
  padding: 8px 12px; border-radius: 8px;
  background: var(--bg); border: 1.5px solid var(--border);
}
.mn-ds-field-normal { border-color: var(--border); }
.mn-ds-field-active { border-color: #439447; box-shadow: 0 0 0 2px rgba(67,148,71,.12); }
.mn-ds-field-error  { border-color: #C0392B; background: #fff8f7; }
.mn-ds-field-prefix, .mn-ds-field-suffix { font-size: 0.72rem; color: var(--text3); flex-shrink: 0; }
.mn-ds-field-text  { flex: 1; font-size: 0.78rem; color: var(--text2); }
.mn-ds-field-hint  { font-size: 0.63rem; color: var(--text3); }

/* Card tiles */
.mn-ds-card-tiles { display: flex; flex-direction: column; gap: 9px; }
.mn-ds-tile {
  background: var(--bg); border: 1px solid var(--border);
  border-radius: 10px; padding: 11px 13px;
}
.mn-ds-tile-header    { display: flex; align-items: center; gap: 9px; margin-bottom: 7px; }
.mn-ds-tile-icon-wrap {
  width: 34px; height: 34px; border-radius: 9px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.mn-ds-tile-icon-wrap svg { width: 17px; height: 17px; }
.mn-ds-tile-meta   { flex: 1; display: flex; flex-direction: column; gap: 2px; }
.mn-ds-tile-title  { font-size: 0.76rem; font-weight: 700; color: var(--text1); }
.mn-ds-tile-sub    { font-size: 0.62rem; color: var(--text3); }
.mn-ds-tile-amount { font-size: 0.8rem; font-weight: 700; flex-shrink: 0; }
.mn-ds-tile-badge  {
  display: inline-block; padding: 2px 9px; border-radius: 12px;
  font-size: 0.6rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: .04em;
}
.mn-ds-tile-balance {
  background: linear-gradient(135deg, #1A3557 0%, #2D6B31 100%);
  border-color: transparent;
}
.mn-ds-tile-balance-label  { font-size: 0.66rem; color: rgba(255,255,255,.7); margin-bottom: 4px; }
.mn-ds-tile-balance-amount { font-size: 1.45rem; font-weight: 700; color: #fff; margin-bottom: 7px; line-height: 1.1; }
.mn-ds-tile-balance-amount span { font-size: 0.82rem; font-weight: 400; }
.mn-ds-tile-balance-row { display: flex; justify-content: space-between; font-size: 0.66rem; color: rgba(255,255,255,.7); }

/* Bank theme */
.mn-ds-banks { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; margin-bottom: 16px; }
.mn-ds-bank-item  { display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; }
.mn-ds-bank-color { width: 50px; height: 50px; border-radius: 12px; }
.mn-ds-bank-info  { display: flex; flex-direction: column; gap: 2px; }
.mn-ds-bank-name  { font-size: 0.68rem; font-weight: 700; color: var(--text1); line-height: 1.2; }
.mn-ds-bank-tag   { font-size: 0.58rem; color: var(--text3); }
.mn-ds-bank-note  {
  font-size: 0.74rem; color: var(--text2); line-height: 1.55;
  border-top: 1px solid var(--border); padding-top: 12px; margin: 0;
}

/* ── IOC DASHBOARD ───────────────────────────────────── */

/* Tech specs grid */
.mn-ioc-specs { margin-bottom: 28px; }
.mn-ioc-spec-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px;
}
.mn-ioc-spec-card {
  background: var(--card-bg); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 16px 18px;
  display: flex; gap: 14px; align-items: flex-start;
  box-shadow: var(--shadow);
}
.mn-ioc-spec-icon {
  width: 36px; height: 36px; flex-shrink: 0; border-radius: 8px;
  background: rgba(67,148,71,.1); display: flex; align-items: center;
  justify-content: center; color: #439447;
}
.mn-ioc-spec-icon svg { width: 18px; height: 18px; }
.mn-ioc-spec-label  { font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: var(--text3); margin-bottom: 3px; }
.mn-ioc-spec-val    { font-size: 0.82rem; font-weight: 700; color: var(--text1); margin-bottom: 3px; }
.mn-ioc-spec-detail { font-size: 0.67rem; color: var(--text3); line-height: 1.4; }

/* ═══════════════════════════════════════════════════
   IOC DASHBOARD — redesigned dark theme
   All mn-ioc-* classes for new compact layout
═══════════════════════════════════════════════════ */

/* Frame */
.mn-ioc-frame {
  background: #050e1a;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 28px 80px rgba(0,0,0,.65), 0 0 0 1px rgba(67,148,71,.22);
}

/* ── Top bar ── */
.mn-ioc-tb {
  display: flex; align-items: center; justify-content: space-between;
  padding: 7px 16px; background: #02060e;
  border-bottom: 1px solid rgba(67,148,71,.18);
  gap: 12px; min-height: 36px;
}
.mn-ioc-tb-l { display: flex; align-items: center; gap: 8px; min-width: 0; }
.mn-ioc-tb-r { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
.mn-ioc-brand-ring {
  width: 16px; height: 16px; border-radius: 50%; flex-shrink: 0;
  border: 2px solid #439447;
  animation: ioc-ring 2s ease-in-out infinite;
}
@keyframes ioc-ring {
  0%,100% { box-shadow: 0 0 5px rgba(67,148,71,.4); }
  50%      { box-shadow: 0 0 14px rgba(67,148,71,.95); }
}
.mn-ioc-brand-n  { font-size: 0.75rem; font-weight: 800; color: #439447; letter-spacing: .08em; white-space: nowrap; }
.mn-ioc-tb-sep   { color: rgba(255,255,255,.18); font-size: 0.85rem; }
.mn-ioc-tb-title {
  font-size: 0.62rem; color: rgba(255,255,255,.38); letter-spacing: .05em;
  text-transform: uppercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.mn-ioc-upd   { font-size: 0.58rem; color: rgba(255,255,255,.28); white-space: nowrap; }
.mn-ioc-sysr  { display: flex; gap: 4px; align-items: center; }
.mn-ioc-sysd  { width: 7px; height: 7px; border-radius: 50%; }
.mn-ioc-sysd-ok   { background: #439447; animation: ioc-sysd 3s ease-in-out infinite; }
.mn-ioc-sysd-warn { background: #E8C547; animation: ioc-sysd-warn 1.2s ease-in-out infinite; }
@keyframes ioc-sysd      { 0%,100%{opacity:1} 50%{opacity:.3}  }
@keyframes ioc-sysd-warn { 0%,100%{opacity:1} 50%{opacity:.12} }
.mn-ioc-clock {
  font-family: 'Courier New', monospace; font-size: 0.78rem;
  font-weight: 700; color: #439447; letter-spacing: .1em; white-space: nowrap;
}

/* ── 6 KPI cards ── */
.mn-ioc-kpis {
  display: grid; grid-template-columns: repeat(6, 1fr);
  gap: 1px; background: rgba(255,255,255,.05);
}
.mn-ioc-k {
  background: #0c1d32; padding: 10px 12px 8px;
  border-top: 2px solid var(--kc, #439447);
  display: flex; flex-direction: column; gap: 2px;
  min-width: 0; transition: background .18s;
}
.mn-ioc-k:hover { background: #102444; }
.mn-ioc-kl {
  font-size: 0.57rem; text-transform: uppercase; letter-spacing: .055em;
  color: rgba(255,255,255,.38); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.mn-ioc-kv {
  font-size: 1.42rem; font-weight: 900; color: #fff; line-height: 1.05;
  font-family: 'Courier New', monospace; white-space: nowrap; overflow: hidden;
  text-overflow: ellipsis; letter-spacing: -.01em;
}
.mn-ioc-kb {
  display: flex; align-items: center; gap: 6px;
  font-size: 0.59rem; color: rgba(255,255,255,.32); margin-top: 1px;
}
.mn-ioc-sp { width: 60px; height: 16px; flex-shrink: 0; }
.mn-ioc-up { color: #33B466; font-weight: 700; }
.mn-ioc-dn { color: #E8C547; font-weight: 700; }
.mn-ioc-pulse {
  display: inline-block; width: 7px; height: 7px; border-radius: 50%;
  background: #C0392B; vertical-align: middle; margin-left: 2px;
  animation: ioc-pulse 1s ease-in-out infinite;
}
@keyframes ioc-pulse {
  0%,100% { transform: scale(1);   opacity: 1; }
  50%     { transform: scale(1.8); opacity: .35; }
}

/* ── Shared card header ── */
.mn-ioc-ch {
  display: flex; align-items: center; justify-content: space-between;
  padding: 7px 12px 5px; border-bottom: 1px solid rgba(255,255,255,.06);
  flex-shrink: 0;
}
.mn-ioc-ct { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: rgba(255,255,255,.52); }
.mn-ioc-cs { font-size: 0.57rem; color: rgba(255,255,255,.28); }
.mn-ioc-lb { font-size: 0.59rem; font-weight: 700; color: #33B466; animation: ioc-sysd 1.5s infinite; }
.mn-ioc-leg { display: flex; align-items: center; gap: 5px; font-size: 0.58rem; color: rgba(255,255,255,.42); }
.mn-ioc-ld  { width: 7px; height: 7px; border-radius: 50%; display: inline-block; flex-shrink: 0; }

/* ── Main 3-col layout ── */
.mn-ioc-main {
  display: grid; grid-template-columns: 1fr 196px 208px;
  gap: 1px; background: rgba(255,255,255,.04);
}

/* Line chart card */
.mn-ioc-lc { background: #0c1d32; display: flex; flex-direction: column; }
.mn-ioc-lc-inner {
  display: flex; padding: 8px 10px 4px; flex: 1; gap: 6px; min-height: 138px;
}
.mn-ioc-ya {
  display: flex; flex-direction: column; justify-content: space-between;
  font-size: 0.53rem; color: rgba(255,255,255,.26); text-align: right;
  padding-bottom: 18px; min-width: 26px; flex-shrink: 0;
}
.mn-ioc-lsvg { flex: 1; display: flex; flex-direction: column; min-width: 0; }
.mn-ioc-lsvg svg { flex: 1; min-height: 90px; display: block; }
.mn-ioc-xa {
  display: flex; justify-content: space-between;
  font-size: 0.52rem; color: rgba(255,255,255,.26); padding-top: 3px;
}
.mn-ioc-pr { animation: ioc-peak 2.2s ease-out infinite; }
@keyframes ioc-peak { 0%{r:5;opacity:.5} 100%{r:13;opacity:0} }

/* Donut card */
.mn-ioc-donut { background: #0c1d32; display: flex; flex-direction: column; }
.mn-ioc-dp {
  display: flex; flex-direction: column; align-items: center;
  padding: 8px 10px 10px; gap: 7px; flex: 1;
}
.mn-ioc-dsv { width: 88px; height: 88px; flex-shrink: 0; }
.mn-ioc-dl  { width: 100%; display: flex; flex-direction: column; gap: 3px; }
.mn-ioc-di  { display: flex; align-items: center; gap: 5px; font-size: 0.61rem; }
.mn-ioc-dd  { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
.mn-ioc-dn2 { color: rgba(255,255,255,.58); flex: 1; white-space: nowrap; overflow: hidden; }
.mn-ioc-dpb {
  width: 48px; height: 4px; background: rgba(255,255,255,.1);
  border-radius: 2px; overflow: hidden; flex-shrink: 0;
}
.mn-ioc-dpb > div { height: 100%; border-radius: 2px; }
.mn-ioc-dpct { font-size: 0.59rem; font-weight: 700; color: rgba(255,255,255,.82); min-width: 24px; text-align: right; }

/* System latency card */
.mn-ioc-ss  { background: #0c1d32; display: flex; flex-direction: column; }
.mn-ioc-ssl { display: flex; flex-direction: column; padding: 2px 0; flex: 1; justify-content: space-around; }
.mn-ioc-sr  { display: flex; align-items: center; gap: 5px; padding: 4px 10px; }
.mn-ioc-so  { width: 6px; height: 6px; border-radius: 50%; background: #439447; flex-shrink: 0; animation: ioc-sysd 3s infinite; }
.mn-ioc-sw  { width: 6px; height: 6px; border-radius: 50%; background: #E8C547; flex-shrink: 0; animation: ioc-sysd-warn 1.2s infinite; }
.mn-ioc-sn  { flex: 1; color: rgba(255,255,255,.58); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 0.6rem; }
.mn-ioc-slb {
  width: 54px; height: 4px; background: rgba(255,255,255,.1);
  border-radius: 2px; overflow: hidden; flex-shrink: 0;
}
.mn-ioc-slb > div { height: 100%; border-radius: 2px; }
.mn-ioc-sm  { font-size: 0.57rem; color: rgba(255,255,255,.32); min-width: 32px; text-align: right; flex-shrink: 0; }

/* ── Bottom 3-col row ── */
.mn-ioc-bot {
  display: grid; grid-template-columns: 216px 1fr 276px;
  gap: 1px; background: rgba(255,255,255,.04);
}

/* Bank bar chart */
.mn-ioc-bc   { background: #0c1d32; display: flex; flex-direction: column; }
.mn-ioc-bars { display: flex; align-items: flex-end; gap: 7px; padding: 5px 12px 7px; flex: 1; min-height: 100px; }
.mn-ioc-bi   { display: flex; flex-direction: column; align-items: center; gap: 3px; flex: 1; justify-content: flex-end; height: 100%; }
.mn-ioc-bt   { width: 100%; flex: 1; display: flex; align-items: flex-end; background: rgba(255,255,255,.05); border-radius: 3px 3px 0 0; overflow: hidden; }
.ioc-bar-fill { width: 100%; min-height: 2px; border-radius: 2px 2px 0 0; height: 0; }
.mn-ioc-bn   { font-size: 0.56rem; color: rgba(255,255,255,.38); white-space: nowrap; }
.mn-ioc-bv   { font-size: 0.59rem; font-weight: 700; color: rgba(255,255,255,.68); }

/* Live feed */
.mn-ioc-feed { background: #0c1d32; display: flex; flex-direction: column; }
.mn-ioc-fl   { display: flex; flex-direction: column; flex: 1; overflow: hidden; }
.mn-ioc-fr   {
  display: flex; align-items: center; gap: 6px;
  padding: 6px 12px; font-size: 0.65rem;
  border-bottom: 1px solid rgba(255,255,255,.04);
  transition: background .3s;
}
.mn-ioc-fi   { width: 15px; text-align: center; flex-shrink: 0; font-size: 0.72rem; }
.mn-ioc-fd   { flex: 1; color: rgba(255,255,255,.62); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mn-ioc-fa   { font-weight: 700; color: rgba(255,255,255,.88); font-size: 0.63rem; white-space: nowrap; flex-shrink: 0; }
.mn-ioc-ft   { font-size: 0.56rem; color: rgba(255,255,255,.26); min-width: 28px; text-align: right; flex-shrink: 0; }
.mn-ioc-feed-flash { background: rgba(67,148,71,.16) !important; }

/* 7-day heatmap */
.mn-ioc-hm      { background: #0c1d32; display: flex; flex-direction: column; }
.mn-ioc-hm-wrap { display: flex; gap: 5px; padding: 5px 10px 7px; flex: 1; align-items: flex-start; }
.mn-ioc-hm-yl   {
  display: flex; flex-direction: column; justify-content: space-between;
  font-size: 0.52rem; color: rgba(255,255,255,.3); text-align: right;
  flex-shrink: 0; min-width: 20px; padding-bottom: 15px; align-self: stretch;
}
.mn-ioc-hm-r    { flex: 1; display: flex; flex-direction: column; gap: 1px; min-width: 0; }
.mn-ioc-hm-g    {
  display: grid; grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(7, 9px);
  gap: 2px;
}
.mn-ioc-hc  {
  border-radius: 2px;
  background: rgba(67,148,71, var(--op, 0.04));
}
.mn-ioc-hca {
  background: rgba(67,148,71, .95) !important;
  animation: ioc-hm-blink .9s ease-in-out infinite;
  box-shadow: 0 0 4px rgba(67,148,71,.7);
}
.mn-ioc-hco { background: rgba(255,255,255,.04) !important; }
@keyframes ioc-hm-blink { 0%,100%{opacity:1} 50%{opacity:.38} }
.mn-ioc-hm-xl {
  display: flex; justify-content: space-between;
  font-size: 0.5rem; color: rgba(255,255,255,.22); padding: 2px 1px 0;
}

/* ── Responsive ── */
@media (max-width: 1200px) {
  .mn-ioc-kpis { grid-template-columns: repeat(3, 1fr); }
  .mn-ioc-main { grid-template-columns: 1fr 190px; }
  .mn-ioc-ss   { display: none; }
}
@media (max-width: 1024px) {
  .mn-ioc-spec-grid { grid-template-columns: repeat(2, 1fr); }
  .mn-ioc-main { grid-template-columns: 1fr; }
  .mn-ioc-bot  { grid-template-columns: 1fr; }
  .mn-ioc-tb-title { display: none; }
}
@media (max-width: 640px) {
  .mn-ioc-spec-grid { grid-template-columns: 1fr; }
  .mn-ioc-kpis { grid-template-columns: repeat(2, 1fr); }
  .mn-ioc-hm   { display: none; }
}

/* ── CATALOG BUTTON ── */
.mn-sec-title-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
.mn-sec-title-row .mn-sec-title { margin: 0; }
.mn-catalog-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 9px 18px; border-radius: 8px; text-decoration: none;
  font-size: 0.84rem; font-weight: 700; white-space: nowrap;
  background: linear-gradient(135deg, #1d4ed8, #4f46e5);
  color: #fff; box-shadow: 0 3px 12px rgba(29,78,216,0.25);
  transition: transform .2s, box-shadow .2s;
}
.mn-catalog-btn:hover { transform: translateY(-1px); box-shadow: 0 5px 18px rgba(29,78,216,0.35); color: #fff; }

/* ── ALL SOLUTIONS GRID ── */
.mn-all-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.mn-all-group { border-radius: 10px; overflow: hidden; border: 1px solid; }
.mn-all-blue   { border-color: rgba(59,130,246,0.25); }
.mn-all-purple { border-color: rgba(124,58,237,0.25); }
.mn-all-cyan   { border-color: rgba(8,145,178,0.25); }
.mn-all-amber  { border-color: rgba(217,119,6,0.25); }
.mn-all-group-hd {
  display: flex; align-items: center; gap: 7px;
  padding: 10px 14px; font-size: 0.74rem; font-weight: 700; letter-spacing: 0.05em;
}
.mn-all-blue   .mn-all-group-hd { background: rgba(59,130,246,0.1);  color: #2563eb; }
.mn-all-purple .mn-all-group-hd { background: rgba(124,58,237,0.1);  color: #7c3aed; }
.mn-all-cyan   .mn-all-group-hd { background: rgba(8,145,178,0.1);   color: #0891b2; }
.mn-all-amber  .mn-all-group-hd { background: rgba(217,119,6,0.1);   color: #d97706; }
.mn-all-items { padding: 6px 8px; }
.mn-all-item {
  display: flex; justify-content: space-between; align-items: center;
  padding: 8px 10px; border-radius: 7px; text-decoration: none; color: inherit;
  transition: background .15s;
}
.mn-all-item:hover { background: var(--vp-c-bg-soft, rgba(0,0,0,0.04)); }
.mn-all-name { font-size: 0.83rem; font-weight: 600; color: var(--vp-c-text-1); }
.mn-all-desc { font-size: 0.7rem; color: var(--vp-c-text-2); text-align: right; }
@media (max-width: 900px) { .mn-all-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .mn-all-grid { grid-template-columns: 1fr; } }

/* ── WHY NOW ── */
.mn-why-grid { display: grid; grid-template-columns: 1fr auto 1fr; gap: 32px; align-items: start; }
.mn-why-arrow { font-size: 1.6rem; color: #94a3b8; align-self: center; }
.mn-why-col-hd {
  font-size: 0.85rem; font-weight: 800; color: #fff; padding: 10px 18px;
  border-radius: 10px; margin-bottom: 18px; text-align: center;
}
.mn-why-hd-pain { background: linear-gradient(135deg,#1d4ed8,#3b82f6); }
.mn-why-hd-value { background: linear-gradient(135deg,#0891b2,#06b6d4); }
.mn-pain-list { display: flex; flex-direction: column; gap: 14px; }
.mn-pain-item {
  display: flex; gap: 14px; align-items: flex-start;
  background: var(--card-bg); border: 1px solid var(--border); border-radius: var(--radius);
  padding: 16px 18px; box-shadow: var(--shadow);
}
.mn-pain-icon {
  width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
  background: linear-gradient(135deg,#ef4444,#f87171);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 12px rgba(239,68,68,0.25);
}
.mn-pain-text h4 { font-size: 0.9rem; font-weight: 800; color: var(--text1); margin: 0 0 4px; }
.mn-pain-text p { font-size: 0.8rem; color: var(--text2); line-height: 1.55; margin: 0; }

.mn-flywheel { position: relative; width: 100%; max-width: 420px; aspect-ratio: 1 / 1; margin: 0 auto; }
.mn-flywheel::before {
  content: ''; position: absolute; inset: 16%;
  border: 2px dashed rgba(124,58,237,0.35); border-radius: 50%;
}
.mn-flywheel-center { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); z-index: 2; }
.mn-flywheel-phone {
  width: 110px; min-height: 90px; border-radius: 14px; border: 2px solid var(--border);
  background: var(--card-bg); box-shadow: var(--shadow-lg);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 6px; padding: 10px 8px;
}
.mn-flywheel-phone-label { font-size: 0.68rem; font-weight: 900; color: var(--text1); }
.mn-flywheel-phone-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 3px; }
.mn-flywheel-phone-chips span {
  font-size: 0.52rem; font-weight: 700; padding: 2px 5px; border-radius: 999px;
  background: rgba(124,58,237,0.12); color: var(--text2);
}
.mn-flywheel-phone-caps span { background: rgba(6,182,212,0.12); }
.mn-flywheel-node { position: absolute; width: 130px; text-align: center; transform: translate(-50%,-50%); }
.mn-flywheel-node-1 { left: 50%; top: 14%; }
.mn-flywheel-node-2 { left: 84%; top: 39%; }
.mn-flywheel-node-3 { left: 71%; top: 79%; }
.mn-flywheel-node-4 { left: 29%; top: 79%; }
.mn-flywheel-node-5 { left: 16%; top: 39%; }
.mn-flywheel-num {
  width: 26px; height: 26px; border-radius: 50%; margin: 0 auto 6px;
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg,#7c3aed,#a78bfa); color: #fff; font-weight: 900; font-size: 0.78rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.18);
}
.mn-flywheel-text h5 { font-size: 0.8rem; font-weight: 800; color: var(--text1); margin: 0 0 3px; }
.mn-flywheel-text p { font-size: 0.7rem; color: var(--text3); line-height: 1.4; margin: 0; }

@media (max-width: 900px) {
  .mn-why-grid { grid-template-columns: 1fr; }
  .mn-why-arrow { display: none; }
}
@media (max-width: 640px) {
  .mn-flywheel { position: static; aspect-ratio: auto; max-width: 100%; display: flex; flex-direction: column; gap: 14px; }
  .mn-flywheel::before { display: none; }
  .mn-flywheel-center { position: static; order: -1; }
  .mn-flywheel-node {
    position: static; width: auto; transform: none;
    display: flex; align-items: center; gap: 12px; text-align: left;
  }
  .mn-flywheel-num { margin: 0; flex-shrink: 0; }
}

/* ── BUILD PATHS ── */
.mn-path-block { margin-bottom: 48px; }
.mn-path-block:last-child { margin-bottom: 0; }
.mn-path-title { font-size: 1.05rem; font-weight: 800; color: var(--text1); margin: 0 0 22px; }
.mn-path-phone {
  width: 84px; min-height: 64px; margin: 10px auto 12px;
  border: 2px solid var(--border); border-radius: 10px; background: var(--card-bg);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  flex-wrap: wrap; gap: 3px; padding: 6px 5px; position: relative;
}
.mn-path-phone::after {
  content: ''; position: absolute; bottom: 4px; left: 50%; transform: translateX(-50%);
  width: 20px; height: 2px; border-radius: 2px; background: var(--border);
}
.mn-path-phone-chip {
  font-size: 0.58rem; font-weight: 700; line-height: 1.2;
  padding: 2px 6px; border-radius: 999px;
  background: rgba(29,78,216,0.08); color: var(--text2); white-space: nowrap;
}
.mn-path-phone-empty { width: 30px; height: 30px; border-radius: 6px; border: 1.5px dashed var(--border); }
.mn-path-step-silo .mn-path-phone { border-style: dashed; }
.mn-path-benefits {
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
  margin-top: 8px; padding-top: 16px; border-top: 1px dashed var(--border);
}
.mn-path-benefits-label {
  font-size: 0.72rem; font-weight: 800; color: var(--text3);
  text-transform: uppercase; letter-spacing: 0.06em;
}
.mn-path-benefit-chip {
  font-size: 0.78rem; font-weight: 600; color: var(--text2);
  background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.25);
  padding: 4px 12px; border-radius: 999px;
}

/* ── EVOLUTION ROADMAP ── */
.mn-evo-wrap { display: flex; align-items: stretch; justify-content: center; margin: 0 auto 32px; max-width: 1100px; }
.mn-evo-phase {
  flex: 1; position: relative; border: 1px solid; border-radius: 50% / 42%;
  padding: 40px 30px 30px; min-height: 320px;
  display: flex; flex-direction: column; align-items: center; text-align: center; gap: 14px;
}
.mn-evo-phase-1 { z-index: 1; margin-right: -46px; }
.mn-evo-phase-2 { z-index: 2; margin: -18px -46px 0; }
.mn-evo-phase-3 { z-index: 1; margin-left: -46px; }
.mn-evo-phase-hd { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.mn-evo-phase-num {
  font-size: 0.72rem; font-weight: 900; color: #fff; background: var(--pc);
  padding: 3px 10px; border-radius: 999px; letter-spacing: 0.05em;
}
.mn-evo-phase-hd h4 { font-size: 1.05rem; font-weight: 900; color: var(--text1); margin: 2px 0 0; }
.mn-evo-phase-tag { font-size: 0.76rem; font-weight: 600; color: var(--text2); }
.mn-evo-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; margin-top: 6px; }
.mn-evo-chips span {
  font-size: 0.78rem; font-weight: 600; padding: 4px 12px; border-radius: 999px;
  background: var(--card-bg); border: 1px solid var(--border); color: var(--text2);
}
.mn-evo-note { font-size: 0.72rem; color: var(--text3); font-style: italic; margin-top: auto; padding-top: 10px; }

.mn-evo-ecosystem { display: flex; flex-wrap: wrap; justify-content: center; gap: 14px; margin: 8px 0 32px; }
.mn-evo-eco-pill {
  background: var(--card-bg); border: 1px solid var(--border); border-radius: 999px;
  padding: 10px 22px; font-size: 0.82rem; font-weight: 600; color: var(--text2); box-shadow: var(--shadow);
}

.mn-evo-footer { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
.mn-evo-footer-card {
  background: var(--card-bg); border: 1px solid var(--border); border-radius: var(--radius);
  padding: 20px 18px; box-shadow: var(--shadow);
}
.mn-evo-footer-card h4 { font-size: 0.92rem; font-weight: 800; color: var(--text1); margin: 0 0 8px; }
.mn-evo-footer-card p { font-size: 0.81rem; color: var(--text2); line-height: 1.6; margin: 0; }

@media (max-width: 768px) {
  .mn-evo-wrap { flex-direction: column; max-width: 480px; }
  .mn-evo-phase-1, .mn-evo-phase-2, .mn-evo-phase-3 {
    margin: 0 0 20px; border-radius: var(--radius); min-height: auto;
  }
  .mn-evo-footer { grid-template-columns: repeat(2,1fr); }
}
@media (max-width: 480px) {
  .mn-evo-footer { grid-template-columns: 1fr; }
}
.mn-value-lead { font-size: 0.92rem; color: var(--text2); line-height: 1.75; max-width: 820px; margin: -16px 0 28px; }
</style>
