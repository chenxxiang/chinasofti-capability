<script setup>
import { onMounted } from 'vue'
import NavBar from './NavBar.vue'

onMounted(() => {
  initReveal()
  initTabs()
  initCounters()
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
  document.querySelectorAll('.od-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const wrap = tab.closest('.od-tabs-wrap')
      wrap.querySelectorAll('.od-tab').forEach(t => t.classList.remove('active'))
      wrap.querySelectorAll('.od-panel').forEach(p => p.classList.remove('active'))
      tab.classList.add('active')
      const panel = wrap.querySelector('#' + tab.dataset.panel)
      if (panel) setTimeout(() => panel.classList.add('in'), 30)
    })
  })
  document.querySelectorAll('.od-panel').forEach((p, i) => {
    if (i === 0) setTimeout(() => p.classList.add('in'), 30)
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
  document.querySelectorAll('.od-counter').forEach(el => obs.observe(el))
}
</script>

<template>
<div class="od-page">
<div class="od-mesh-bg"></div>

<!-- NAV -->
<NavBar active="solutions" />

<!-- HERO -->
<section class="od-hero">
  <div class="od-hero-bg"></div>
  <div class="od-hero-particles">
    <span></span><span></span><span></span><span></span><span></span><span></span>
  </div>
  <div class="od-hero-inner">
    <div class="od-hero-badge">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      Offshore Development Center · 离岸开发中心
    </div>
    <h1>ODC <span class="od-grad">离岸开发中心</span><br>整体解决方案</h1>
    <p class="od-hero-sub">专属研发团队 · 全流程管控 · 信息安全保障 — 通过 ODC 的"贴近化"和"规模化"模式，助力客户实现综合成本降低 20~30%</p>
    <div class="od-hero-tags">
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> 专属研发团队</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> 信息安全管控</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> 端到端项目管理</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10z"/></svg> 全国 13 城布局</span>
    </div>
  </div>
  <div class="od-hero-img-wrap">
    <img src="/solutions/odc/images/odc-building.png" alt="中软国际ODC大楼" />
  </div>
</section>

<!-- STATS STRIP -->
<div class="od-stats-strip">
  <div class="od-stat-item">
    <div class="od-stat-num"><span class="od-counter" data-target="13" data-suffix="">0</span></div>
    <div class="od-stat-label">全国城市布局</div>
  </div>
  <div class="od-stat-item">
    <div class="od-stat-num"><span class="od-counter" data-target="40000" data-suffix="+">0+</span></div>
    <div class="od-stat-label">可用工位总数</div>
  </div>
  <div class="od-stat-item">
    <div class="od-stat-num"><span class="od-counter" data-target="100" data-suffix="+">0+</span></div>
    <div class="od-stat-label">人才渠道资源</div>
  </div>
  <div class="od-stat-item">
    <div class="od-stat-num"><span class="od-counter" data-target="25" data-suffix="天">0天</span></div>
    <div class="od-stat-label">平均招聘周期</div>
  </div>
  <div class="od-stat-item">
    <div class="od-stat-num"><span class="od-counter" data-target="30" data-suffix="%">0%</span></div>
    <div class="od-stat-label">综合成本降低</div>
  </div>
</div>

<!-- PAGE BODY -->
<div class="od-body">

  <!-- 核心价值：对比卡 -->
  <section class="od-sec reveal" id="value">
    <div class="od-sec-header">
      <div class="od-eyebrow">Core Value · 核心价值</div>
      <h2 class="od-sec-title">为什么选择 ODC 模式</h2>
    </div>
    <div class="od-compare-grid">
      <div class="od-compare-card od-compare-plain">
        <div class="od-compare-icon" style="background:linear-gradient(135deg,#475569,#64748b);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
        </div>
        <h3>传统外包模式</h3>
        <p>供应商提供服务，双方按项目结算</p>
        <div class="od-compare-divider"></div>
        <div class="od-compare-cons">
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> 产品规划、营销推广等由供应商承担，模糊边界</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> 员工与多客户绑定，团队不稳定、流失率高</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> 客户对原始需求与交付物之间的透明度低</span>
        </div>
      </div>
      <div class="od-compare-card od-compare-plain">
        <div class="od-compare-icon" style="background:linear-gradient(135deg,#475569,#64748b);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </div>
        <h3>自建团队</h3>
        <p>客户直接招募、管理全职员工</p>
        <div class="od-compare-divider"></div>
        <div class="od-compare-cons">
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> HR、招聘、培训成本高，管理链路长</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> 人员弹性差，业务波动时资源难以快速调配</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> 在海外市场缺乏本地供应链与人才渠道积累</span>
        </div>
      </div>
      <div class="od-compare-card od-compare-highlight">
        <div class="od-compare-icon" style="background:linear-gradient(135deg,#d97706,#f59e0b);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <h3>ODC 离岸开发中心</h3>
        <p>专属研发团队，全流程配套管理</p>
        <div class="od-compare-divider"></div>
        <div class="od-compare-pros">
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> 客户获得高质量、稳定的专属研发团队</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> 综合采购成本降低 30%，效率提升 2~3 倍</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> HRBP + 项目管理 + IT + 安全全配套，0 管理负担</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> 信息安全 0 事件 · EHS 0 事件 · 消防 0 事件</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 三大合作模式 -->
  <section class="od-sec reveal" id="models">
    <div class="od-sec-header">
      <div class="od-eyebrow">Cooperation Models · 合作模式</div>
      <h2 class="od-sec-title">三大灵活合作模式</h2>
    </div>
    <div class="od-tabs-wrap">
      <div class="od-tab-bar">
        <button class="od-tab active" data-panel="tab-onsite">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
          驻场模式
        </button>
        <button class="od-tab" data-panel="tab-embed">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          ODC 嵌入模式
        </button>
        <button class="od-tab" data-panel="tab-self">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
          ODC 自建模式
        </button>
      </div>
      <!-- 驻场模式 -->
      <div class="od-panel active" id="tab-onsite">
        <div class="od-panel-intro">客户分场地，中软提供专属研发团队并协助管理。适合初期小规模合作或对数据留存有严格要求的客户。</div>
        <div class="od-model-layout">
          <div class="od-model-cards">
            <div class="od-card od-card-amber">
              <div class="od-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></div>
              <h4>客户提供场地</h4>
              <p>研发团队在客户办公区工作，深度融入客户业务流程与企业文化，快速响应需求变化。</p>
            </div>
            <div class="od-card od-card-amber">
              <div class="od-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
              <h4>中软配套管理</h4>
              <p>中软提供 HRBP、招聘、培训、绩效管理全套人力支持，客户只需专注业务方向。</p>
            </div>
            <div class="od-card od-card-amber">
              <div class="od-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
              <h4>信息安全保障</h4>
              <p>驻场人员签署保密协议，执行与客方员工相同的信息安全规范，数据不出客户园区。</p>
            </div>
          </div>
          <div class="od-model-img">
            <img src="/solutions/odc/images/odc-office-1.png" alt="驻场办公环境" />
          </div>
        </div>
      </div>
      <!-- 嵌入模式 -->
      <div class="od-panel" id="tab-embed">
        <div class="od-panel-intro">客户提供场地，中软在 ODC 自建办公区，客户只需管理任务和结果。适合中大规模、追求成本优化的客户。</div>
        <div class="od-model-layout">
          <div class="od-model-cards">
            <div class="od-card od-card-blue">
              <div class="od-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
              <h4>独立 ODC 办公区</h4>
              <p>在客户园区内划定专属区域，中软独立建设和管理，实现物理隔离与信息安全双保障。</p>
            </div>
            <div class="od-card od-card-blue">
              <div class="od-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
              <h4>客户只管结果</h4>
              <p>客户负责任务分配与成果验收，中软全权负责团队组建、日常管理与交付质量保证。</p>
            </div>
            <div class="od-card od-card-blue">
              <div class="od-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
              <h4>成本显著降低</h4>
              <p>规模化运营摊薄管理成本，人力弹性扩缩，综合成本较传统模式降低 20~30%。</p>
            </div>
          </div>
          <div class="od-model-img">
            <img src="/solutions/odc/images/odc-office-2.png" alt="ODC嵌入办公环境" />
          </div>
        </div>
      </div>
      <!-- 自建模式 -->
      <div class="od-panel" id="tab-self">
        <div class="od-panel-intro">中软提供研发团队和全套场地管理。适合海外布局、无本地运营团队或追求零管理负担的大型客户。</div>
        <div class="od-model-layout">
          <div class="od-model-cards">
            <div class="od-card od-card-purple">
              <div class="od-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10z"/></svg></div>
              <h4>中软全程负责</h4>
              <p>从选址、装修、IT 设施到团队组建、日常运营，中软一站式承接，客户零启动负担。</p>
            </div>
            <div class="od-card od-card-purple">
              <div class="od-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg></div>
              <h4>数字化 IT 平台</h4>
              <p>围绕 ODC 业务全流程，覆盖业务支撑平台、项目业务管理平台、数字工具及 ODC 移动工作平台。</p>
            </div>
            <div class="od-card od-card-purple">
              <div class="od-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><rect x="9" y="13" width="6" height="8"/></svg></div>
              <h4>灵活扩缩容</h4>
              <p>凭借全国 13 城布局与 160 万+ 人才库，可快速响应客户规模变化，3 周内完成团队到位。</p>
            </div>
          </div>
          <div class="od-model-img">
            <img src="/solutions/odc/images/odc-campus.png" alt="ODC自建园区" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 六大能力支柱 -->
  <section class="od-sec reveal" id="capability">
    <div class="od-sec-header">
      <div class="od-eyebrow">Capabilities · 六大能力</div>
      <h2 class="od-sec-title">ODC 服务能力全景</h2>
    </div>
    <div class="od-pillars-grid">
      <div class="od-pillar od-pillar-blue">
        <div class="od-pillar-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <h4>人才供应链</h4>
        <p>100+ 渠道资源，160 万+ 人才库，智能自动匹配，平均招聘周期 25 天，录用率超 95%</p>
        <div class="od-pillar-tags"><span>结构化面试</span><span>上岗前培训</span><span>资源预测</span></div>
      </div>
      <div class="od-pillar od-pillar-purple">
        <div class="od-pillar-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
        <h4>项目管理</h4>
        <p>RDPM 体系、PMO 管控、CP1/CP2/CP3 全周期检查点，E2E 交付周期压缩 20%</p>
        <div class="od-pillar-tags"><span>里程碑管控</span><span>风险预警</span><span>交付看板</span></div>
      </div>
      <div class="od-pillar od-pillar-cyan">
        <div class="od-pillar-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></div>
        <h4>数字化 IT 平台</h4>
        <p>业务支撑平台、项目管理平台、数字工具链及 ODC 移动平台，覆盖 ODC 运营全链路</p>
        <div class="od-pillar-tags"><span>实时监控</span><span>BI 分析</span><span>自动化工具</span></div>
      </div>
      <div class="od-pillar od-pillar-amber">
        <div class="od-pillar-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></div>
        <h4>质量管理（QMS）</h4>
        <p>参考 ISO 9001 构建，组织级与项目级双轨质量保障，客户满意度 NPS 持续提升 20%</p>
        <div class="od-pillar-tags"><span>ISO 9001</span><span>持续改进</span><span>知识管理</span></div>
      </div>
      <div class="od-pillar od-pillar-red">
        <div class="od-pillar-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
        <h4>信息安全</h4>
        <p>双重门禁访问控制，全员签署保密协议，安全学习体系，信息安全 0 事件目标</p>
        <div class="od-pillar-tags"><span>物理隔离</span><span>数据防泄漏</span><span>合规审计</span></div>
      </div>
      <div class="od-pillar od-pillar-green">
        <div class="od-pillar-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
        <h4>硬件基础设施</h4>
        <p>ISP 双路冗余、UPS 保障、安全隔离办公区，配备专业网络与安防设施，支持生产环境接入</p>
        <div class="od-pillar-tags"><span>双路网络</span><span>安全隔离</span><span>EHS 管理</span></div>
      </div>
    </div>
  </section>

  <!-- 办公环境实拍 -->
  <section class="od-sec reveal" id="office">
    <div class="od-sec-header">
      <div class="od-eyebrow">Office Environment · 办公环境</div>
      <h2 class="od-sec-title">专业 ODC 办公环境</h2>
    </div>
    <div class="od-office-layout">
      <div class="od-office-main">
        <img src="/solutions/odc/images/odc-office-1.png" alt="ODC办公室内景" />
        <div class="od-office-caption">开放式研发工区 — 人体工学座椅 · 千兆局域网 · 独立安全门禁</div>
      </div>
      <div class="od-office-side">
        <img src="/solutions/odc/images/odc-office-2.png" alt="ODC走廊与协作区" />
        <div class="od-office-caption">协作走廊 — 可视化看板 · 小型会议角</div>
        <div class="od-office-tags">
          <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> 全 PC 统一管控</span>
          <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> USB 端口管控</span>
          <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> 禁止携带设备入场</span>
          <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> 24h 安全监控</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 全国布局 -->
  <section class="od-sec reveal" id="locations">
    <div class="od-sec-header">
      <div class="od-eyebrow">National Coverage · 全国布局</div>
      <h2 class="od-sec-title">13 城 · 40,000+ 工位</h2>
    </div>
    <div class="od-locations-layout">
      <div class="od-map-wrap">
        <img src="/solutions/odc/images/odc-map.png" alt="全国ODC布局地图" />
      </div>
      <div class="od-cities-wrap">
        <div class="od-cities-intro">覆盖东部、中部、西部三大区域，依托中软国际在全国的产业基地，为客户提供就近配置资源、灵活组建团队的离岸服务能力。</div>
        <div class="od-cities-grid">
          <div class="od-city-item"><span class="od-city-dot" style="background:#1d4ed8;"></span>北京</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#7c3aed;"></span>西安</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#0891b2;"></span>成都</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#d97706;"></span>武汉</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#059669;"></span>南京</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#dc2626;"></span>长沙</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#7c3aed;"></span>郑州</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#0891b2;"></span>重庆</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#d97706;"></span>大连</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#059669;"></span>福州</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#1d4ed8;"></span>贵阳</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#dc2626;"></span>兰州</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#475569;"></span>更多城市</div>
        </div>
        <div class="od-cities-collage">
          <img src="/solutions/odc/images/odc-cities.jpg" alt="多城市ODC办公楼" />
        </div>
      </div>
    </div>
  </section>

  <!-- 标杆案例 -->
  <section class="od-sec reveal" id="cases">
    <div class="od-sec-header">
      <div class="od-eyebrow">Success Cases · 标杆案例</div>
      <h2 class="od-sec-title">全球顶级客户选择中软 ODC</h2>
    </div>
    <div class="od-cases-grid">
      <div class="od-case-card od-case-featured">
        <div class="od-case-badge">标杆案例</div>
        <div class="od-case-header">
          <div class="od-case-icon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
          </div>
          <div>
            <div class="od-case-client">汇丰银行 HSBC</div>
            <div class="od-case-subtitle">西安离岸 ODC · Since 2012</div>
          </div>
        </div>
        <p class="od-case-desc">自 2012 年起，中软国际在西安为汇丰银行建立全球最大的离岸 ODC 交付中心，成为汇丰全球最大的移动应用服务商。</p>
        <div class="od-case-metrics">
          <div class="od-metric"><div class="od-metric-num">3000+</div><div class="od-metric-lbl">团队规模（人）</div></div>
          <div class="od-metric"><div class="od-metric-num">30%</div><div class="od-metric-lbl">综合成本节省</div></div>
          <div class="od-metric"><div class="od-metric-num">10%</div><div class="od-metric-lbl">流失率降低</div></div>
        </div>
        <div class="od-case-img">
          <img src="/solutions/odc/images/odc-building.png" alt="中软国际西安ODC" />
        </div>
      </div>
      <div class="od-case-card">
        <div class="od-case-header">
          <div class="od-case-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div>
            <div class="od-case-client">WeLab</div>
            <div class="od-case-subtitle">金融科技 · 香港</div>
          </div>
        </div>
        <p class="od-case-desc">为 WeLab 提供专属研发 ODC 团队，支撑其在香港及东南亚市场的数字银行业务快速扩张，实现 2 周内 25 人高效 Onboarding。</p>
        <div class="od-case-metrics">
          <div class="od-metric"><div class="od-metric-num">2周</div><div class="od-metric-lbl">25人完成Onboarding</div></div>
          <div class="od-metric"><div class="od-metric-num">3次</div><div class="od-metric-lbl">年均离职率下降</div></div>
        </div>
        <div class="od-case-img">
          <img src="/solutions/odc/images/odc-welab.png" alt="WeLab客户案例" />
        </div>
      </div>
    </div>
  </section>

  <!-- 量化收益 -->
  <section class="od-sec reveal" id="results">
    <div class="od-sec-header">
      <div class="od-eyebrow">Measurable Results · 量化收益</div>
      <h2 class="od-sec-title">可量化的交付成果</h2>
    </div>
    <div class="od-results-grid">
      <div class="od-result-card">
        <div class="od-result-icon" style="color:#1d4ed8;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div>
        <div class="od-result-num">↓30%</div>
        <div class="od-result-label">采购综合成本降低</div>
      </div>
      <div class="od-result-card">
        <div class="od-result-icon" style="color:#7c3aed;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
        <div class="od-result-num">2~3×</div>
        <div class="od-result-label">人均产出效率提升</div>
      </div>
      <div class="od-result-card">
        <div class="od-result-icon" style="color:#0891b2;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
        <div class="od-result-num">↓20%</div>
        <div class="od-result-label">E2E 交付周期压缩</div>
      </div>
      <div class="od-result-card">
        <div class="od-result-icon" style="color:#d97706;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="20 6 9 17 4 12"/></svg></div>
        <div class="od-result-num">95%+</div>
        <div class="od-result-label">人员正式录用率</div>
      </div>
      <div class="od-result-card">
        <div class="od-result-icon" style="color:#059669;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <div class="od-result-num">0</div>
        <div class="od-result-label">信息安全事件</div>
      </div>
      <div class="od-result-card">
        <div class="od-result-icon" style="color:#dc2626;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
        <div class="od-result-num">3周</div>
        <div class="od-result-label">资源到位最快周期</div>
      </div>
    </div>
  </section>

</div><!-- end od-body -->

<footer class="au-footer">
  <span class="footer-l">中软国际 · <span>ChinaSofti</span></span>
  <span class="footer-r">chinasofti-capability.vercel.app · © 2025</span>
</footer>

</div>
</template>

<style scoped>
/* ── PAGE SHELL ── */
.od-page { position: relative; min-height: 100vh; background: #fff; overflow-x: hidden; }
.od-mesh-bg {
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
  background:
    radial-gradient(ellipse 80% 60% at 20% -10%, rgba(217,119,6,0.06) 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 80% 110%, rgba(124,58,237,0.05) 0%, transparent 60%);
}

/* ── HERO ── */
.od-hero {
  position: relative; z-index: 1;
  background: linear-gradient(140deg, #08091a 0%, #0f0c2e 35%, #1a1060 60%, #0c2d6e 82%, #063a5a 100%);
  min-height: 520px; display: flex; align-items: center; justify-content: space-between;
  padding: 120px 72px 80px; gap: 40px; overflow: hidden;
}
.od-hero-bg {
  position: absolute; inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.od-hero-particles { position: absolute; inset: 0; pointer-events: none; }
.od-hero-particles span {
  position: absolute; border-radius: 50%;
  background: rgba(217,119,6,0.2);
  animation: odFloat 8s ease-in-out infinite;
}
.od-hero-particles span:nth-child(1){width:180px;height:180px;top:-40px;right:35%;animation-delay:0s;}
.od-hero-particles span:nth-child(2){width:120px;height:120px;bottom:20px;left:20%;animation-delay:2s;background:rgba(56,189,248,0.12);}
.od-hero-particles span:nth-child(3){width:80px;height:80px;top:30%;left:55%;animation-delay:4s;background:rgba(167,139,250,0.18);}
.od-hero-particles span:nth-child(4){width:200px;height:200px;bottom:-60px;left:-40px;animation-delay:1s;background:rgba(29,78,216,0.18);}
.od-hero-particles span:nth-child(5){width:60px;height:60px;top:20%;right:10%;animation-delay:3s;background:rgba(245,158,11,0.2);}
.od-hero-particles span:nth-child(6){width:100px;height:100px;top:60%;left:30%;animation-delay:5s;background:rgba(124,58,237,0.15);}
@keyframes odFloat {
  0%,100%{transform:translateY(0) scale(1);opacity:0.6;}
  50%{transform:translateY(-20px) scale(1.08);opacity:1;}
}
.od-hero-inner { position: relative; z-index: 2; max-width: 620px; flex: 1; }
.od-hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
  border-radius: 999px; padding: 7px 18px; margin-bottom: 24px;
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
  color: rgba(255,255,255,0.7); text-transform: uppercase;
}
.od-hero h1 {
  font-size: 2.8rem; font-weight: 900; line-height: 1.1;
  color: #fff; margin-bottom: 18px; letter-spacing: -0.03em;
}
.od-grad {
  background: linear-gradient(90deg, #fbbf24, #f59e0b, #d97706, #fbbf24);
  background-size: 300%;
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: odGrad 6s linear infinite;
}
@keyframes odGrad { 0%{background-position:0%} 100%{background-position:300%} }
.od-hero-sub {
  font-size: 1rem; color: rgba(255,255,255,0.72); margin-bottom: 28px; line-height: 1.7;
}
.od-hero-tags { display: flex; flex-wrap: wrap; gap: 10px; }
.od-hero-tags span {
  display: inline-flex; align-items: center; gap: 7px;
  background: rgba(255,255,255,0.09); border: 1px solid rgba(255,255,255,0.15);
  border-radius: 999px; padding: 7px 14px;
  font-size: 0.8rem; font-weight: 600; color: rgba(255,255,255,0.88);
}
.od-hero-img-wrap {
  position: relative; z-index: 2; flex: 0 0 400px;
  border-radius: 16px; overflow: hidden;
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
}
.od-hero-img-wrap img { width: 100%; height: 260px; object-fit: cover; display: block; }

/* ── STATS STRIP ── */
.od-stats-strip {
  position: relative; z-index: 1;
  background: linear-gradient(135deg, #92400e, #d97706, #f59e0b, #d97706);
  padding: 20px 72px; display: flex; justify-content: center; flex-wrap: wrap; gap: 0;
  overflow: hidden;
}
.od-stat-item {
  display: flex; flex-direction: column; align-items: center; gap: 4px;
  padding: 10px 36px; border-right: 1px solid rgba(255,255,255,0.2);
}
.od-stat-item:last-child { border-right: none; }
.od-stat-num { font-size: 1.9rem; font-weight: 900; color: #fff; line-height: 1; letter-spacing: -0.03em; }
.od-stat-label { font-size: 0.72rem; color: rgba(255,255,255,0.82); font-weight: 600; letter-spacing: 0.04em; white-space: nowrap; }

/* ── PAGE BODY ── */
.od-body { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 0 48px 80px; }

/* ── SECTION COMMON ── */
.od-sec { padding: 72px 0 0; }
.od-sec-header { margin-bottom: 40px; }
.od-eyebrow { font-size: 0.68rem; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; color: #d97706; margin-bottom: 10px; }
.od-sec-title { font-size: 2rem; font-weight: 900; color: #0f172a; letter-spacing: -0.02em; }

/* ── REVEAL ANIMATION ── */
.reveal { opacity: 0; transform: translateY(28px); transition: opacity .55s ease, transform .55s ease; }
.reveal.in { opacity: 1; transform: none; }

/* ── COMPARE GRID ── */
.od-compare-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; }
.od-compare-card {
  background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 20px;
  padding: 28px 24px;
}
.od-compare-highlight {
  background: linear-gradient(145deg, #fffbeb, #fef3c7);
  border-color: #f59e0b;
  box-shadow: 0 8px 32px rgba(245,158,11,0.15);
}
.od-compare-icon {
  width: 52px; height: 52px; border-radius: 14px; margin-bottom: 16px;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.od-compare-card h3 { font-size: 1.1rem; font-weight: 800; color: #1e293b; margin-bottom: 6px; }
.od-compare-card p { font-size: 0.84rem; color: #64748b; margin-bottom: 16px; }
.od-compare-divider { height: 1px; background: #e2e8f0; margin-bottom: 16px; }
.od-compare-cons, .od-compare-pros { display: flex; flex-direction: column; gap: 9px; }
.od-compare-cons span, .od-compare-pros span {
  display: flex; align-items: flex-start; gap: 8px;
  font-size: 0.82rem; color: #475569; line-height: 1.5;
}
.od-compare-cons svg, .od-compare-pros svg { flex-shrink: 0; margin-top: 2px; }

/* ── TABS ── */
.od-tabs-wrap { background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 20px; overflow: hidden; }
.od-tab-bar { display: flex; background: white; border-bottom: 1.5px solid #e2e8f0; }
.od-tab {
  display: flex; align-items: center; gap: 8px;
  padding: 14px 28px; font-size: 0.88rem; font-weight: 700; color: #64748b;
  background: none; border: none; cursor: pointer; border-bottom: 3px solid transparent;
  transition: color .18s, border-color .18s;
}
.od-tab.active { color: #d97706; border-bottom-color: #d97706; }
.od-tab:hover:not(.active) { color: #0f172a; }
.od-panel { display: none; padding: 32px; }
.od-panel.active { display: block; }
.od-panel.in { animation: odFadeUp .3s ease forwards; }
@keyframes odFadeUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }
.od-panel-intro { font-size: 0.92rem; color: #475569; line-height: 1.7; margin-bottom: 24px; padding: 14px 18px; background: white; border-radius: 12px; border-left: 4px solid #d97706; }
.od-model-layout { display: grid; grid-template-columns: 1fr 320px; gap: 24px; align-items: start; }
.od-model-cards { display: flex; flex-direction: column; gap: 14px; }
.od-model-img img { width: 100%; height: 200px; object-fit: cover; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.08); }

/* ── FEATURE CARDS ── */
.od-card {
  display: flex; align-items: flex-start; gap: 14px;
  background: white; border-radius: 14px; padding: 18px;
  border: 1.5px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.od-card-icon {
  width: 42px; height: 42px; border-radius: 11px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.od-card-blue .od-card-icon { background: linear-gradient(135deg,#1d4ed8,#3b82f6); }
.od-card-purple .od-card-icon { background: linear-gradient(135deg,#7c3aed,#a78bfa); }
.od-card-amber .od-card-icon { background: linear-gradient(135deg,#d97706,#f59e0b); }
.od-card h4 { font-size: 0.92rem; font-weight: 800; color: #1e293b; margin-bottom: 4px; }
.od-card p { font-size: 0.8rem; color: #64748b; line-height: 1.6; }

/* ── PILLARS GRID ── */
.od-pillars-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.od-pillar {
  border-radius: 18px; padding: 26px 22px; border: 1.5px solid;
  transition: transform .2s, box-shadow .2s;
}
.od-pillar:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.1); }
.od-pillar-blue { background: rgba(29,78,216,0.04); border-color: rgba(29,78,216,0.15); }
.od-pillar-purple { background: rgba(124,58,237,0.04); border-color: rgba(124,58,237,0.15); }
.od-pillar-cyan { background: rgba(8,145,178,0.04); border-color: rgba(8,145,178,0.15); }
.od-pillar-amber { background: rgba(217,119,6,0.04); border-color: rgba(217,119,6,0.15); }
.od-pillar-red { background: rgba(220,38,38,0.04); border-color: rgba(220,38,38,0.15); }
.od-pillar-green { background: rgba(5,150,105,0.04); border-color: rgba(5,150,105,0.15); }
.od-pillar-icon {
  width: 52px; height: 52px; border-radius: 14px; margin-bottom: 14px;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}
.od-pillar-blue .od-pillar-icon { background: linear-gradient(135deg,#1d4ed8,#3b82f6); }
.od-pillar-purple .od-pillar-icon { background: linear-gradient(135deg,#7c3aed,#a78bfa); }
.od-pillar-cyan .od-pillar-icon { background: linear-gradient(135deg,#0891b2,#06b6d4); }
.od-pillar-amber .od-pillar-icon { background: linear-gradient(135deg,#d97706,#f59e0b); }
.od-pillar-red .od-pillar-icon { background: linear-gradient(135deg,#dc2626,#f87171); }
.od-pillar-green .od-pillar-icon { background: linear-gradient(135deg,#059669,#10b981); }
.od-pillar h4 { font-size: 0.96rem; font-weight: 800; color: #1e293b; margin-bottom: 8px; }
.od-pillar p { font-size: 0.8rem; color: #475569; line-height: 1.6; margin-bottom: 12px; }
.od-pillar-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.od-pillar-tags span {
  font-size: 0.68rem; font-weight: 700; padding: 3px 9px; border-radius: 999px;
  background: rgba(255,255,255,0.7); color: #475569; border: 1px solid rgba(0,0,0,0.08);
}

/* ── OFFICE LAYOUT ── */
.od-office-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.od-office-main img, .od-office-side img {
  width: 100%; height: 240px; object-fit: cover; border-radius: 14px;
  border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}
.od-office-caption { font-size: 0.78rem; color: #64748b; margin-top: 10px; font-style: italic; }
.od-office-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
.od-office-tags span {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 0.74rem; font-weight: 600; color: #1e293b;
  background: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 999px;
  padding: 5px 12px;
}

/* ── LOCATIONS ── */
.od-locations-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: start; }
.od-map-wrap img { width: 100%; border-radius: 16px; border: 1.5px solid #e2e8f0; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
.od-cities-intro { font-size: 0.88rem; color: #475569; line-height: 1.7; margin-bottom: 20px; }
.od-cities-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 20px; }
.od-city-item { display: flex; align-items: center; gap: 7px; font-size: 0.84rem; font-weight: 600; color: #334155; }
.od-city-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.od-cities-collage img { width: 100%; height: 160px; object-fit: cover; border-radius: 12px; border: 1px solid #e2e8f0; }

/* ── CASES ── */
.od-cases-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.od-case-card {
  background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 20px;
  padding: 28px 24px; display: flex; flex-direction: column; gap: 14px;
}
.od-case-featured { background: linear-gradient(145deg,#eff6ff,#dbeafe); border-color: #93c5fd; }
.od-case-badge {
  display: inline-block; font-size: 0.65rem; font-weight: 800;
  letter-spacing: 0.08em; padding: 3px 10px; border-radius: 999px;
  background: #1d4ed8; color: white; align-self: flex-start;
}
.od-case-header { display: flex; align-items: center; gap: 14px; }
.od-case-icon { width: 48px; height: 48px; border-radius: 13px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.12); }
.od-case-client { font-size: 1.1rem; font-weight: 900; color: #1e293b; }
.od-case-subtitle { font-size: 0.76rem; color: #64748b; margin-top: 2px; }
.od-case-desc { font-size: 0.84rem; color: #475569; line-height: 1.65; }
.od-case-metrics { display: flex; gap: 20px; }
.od-metric { flex: 1; }
.od-metric-num { font-size: 1.5rem; font-weight: 900; color: #1d4ed8; letter-spacing: -0.03em; }
.od-case-featured .od-metric-num { color: #1d4ed8; }
.od-case-card:not(.od-case-featured) .od-metric-num { color: #7c3aed; }
.od-metric-lbl { font-size: 0.72rem; color: #64748b; margin-top: 2px; }
.od-case-img img { width: 100%; height: 160px; object-fit: cover; border-radius: 12px; border: 1px solid #e2e8f0; }

/* ── RESULTS GRID ── */
.od-results-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px; }
.od-result-card {
  background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 16px;
  padding: 22px 16px; text-align: center;
  transition: transform .2s, box-shadow .2s;
}
.od-result-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
.od-result-icon { display: flex; justify-content: center; margin-bottom: 10px; }
.od-result-num { font-size: 1.5rem; font-weight: 900; color: #0f172a; letter-spacing: -0.03em; }
.od-result-label { font-size: 0.7rem; color: #64748b; margin-top: 4px; line-height: 1.4; }

/* ── FOOTER ── */
.au-footer {
  position: relative; z-index: 1;
  display: flex; justify-content: space-between; align-items: center;
  padding: 20px 72px; background: #0f172a;
  font-size: 0.78rem; color: rgba(255,255,255,0.4);
}
.footer-l span { color: rgba(255,255,255,0.6); }

/* ── RESPONSIVE ── */
@media (max-width: 900px) {
  .od-hero { flex-direction: column; padding: 100px 24px 60px; min-height: auto; }
  .od-hero-img-wrap { flex: none; width: 100%; }
  .od-stats-strip { padding: 16px 20px; }
  .od-stat-item { padding: 8px 16px; }
  .od-body { padding: 0 20px 60px; }
  .od-compare-grid { grid-template-columns: 1fr; }
  .od-pillars-grid { grid-template-columns: 1fr 1fr; }
  .od-model-layout { grid-template-columns: 1fr; }
  .od-model-img { order: -1; }
  .od-office-layout { grid-template-columns: 1fr; }
  .od-locations-layout { grid-template-columns: 1fr; }
  .od-cases-grid { grid-template-columns: 1fr; }
  .od-results-grid { grid-template-columns: repeat(3, 1fr); }
  .au-footer { padding: 16px 20px; flex-direction: column; gap: 4px; text-align: center; }
}
@media (max-width: 480px) {
  .od-hero h1 { font-size: 2rem; }
  .od-pillars-grid { grid-template-columns: 1fr; }
  .od-cities-grid { grid-template-columns: repeat(3, 1fr); }
  .od-results-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
