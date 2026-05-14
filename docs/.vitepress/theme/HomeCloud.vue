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
  document.querySelectorAll('.cl-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const wrap = tab.closest('.cl-tabs-wrap')
      wrap.querySelectorAll('.cl-tab').forEach(t => t.classList.remove('active'))
      wrap.querySelectorAll('.cl-panel').forEach(p => { p.classList.remove('active'); p.classList.remove('in') })
      tab.classList.add('active')
      const panel = wrap.querySelector('#' + tab.dataset.panel)
      if (panel) { panel.classList.add('active'); setTimeout(() => panel.classList.add('in'), 30) }
    })
  })
  document.querySelectorAll('.cl-panel').forEach((p, i) => {
    if (i === 0) { p.classList.add('active'); setTimeout(() => p.classList.add('in'), 30) }
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
  document.querySelectorAll('.cl-counter').forEach(el => obs.observe(el))
}
</script>

<template>
<div class="cl-page">
<div class="cl-mesh-bg"></div>

<NavBar active="solutions" />

<!-- HERO -->
<section class="cl-hero">
  <div class="cl-hero-bg"></div>
  <div class="cl-hero-particles">
    <span></span><span></span><span></span><span></span><span></span><span></span>
  </div>
  <div class="cl-hero-inner">
    <div class="cl-hero-badge">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
      Cloud Capability Center · 云能力中心
    </div>
    <h1>云能力中心 <span class="cl-grad">全栈解决方案</span></h1>
    <p class="cl-hero-sub">咨询规划 · 迁移实施 · 云运营 · AI 大模型 — 依托华为云深度合作伙伴资质，提供端到端云上服务，助力企业数字化转型</p>
    <div class="cl-hero-tags">
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg> 华为云深度合作</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> 应用迁移上云</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> ISO 27001 认证</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg> AI 大模型落地</span>
    </div>
  </div>
  <div class="cl-hero-img-wrap">
    <img src="/solutions/cloud/images/cloud-building.png" alt="云能力中心" />
    <div class="cl-hero-globe">
      <img src="/solutions/cloud/images/cloud-globe.png" alt="" />
    </div>
  </div>
</section>

<!-- STATS -->
<div class="cl-stats-strip">
  <div class="cl-stat-item">
    <div class="cl-stat-num"><span class="cl-counter" data-target="2000" data-suffix="+">0+</span></div>
    <div class="cl-stat-label">迁移咨询案例</div>
  </div>
  <div class="cl-stat-item">
    <div class="cl-stat-num"><span class="cl-counter" data-target="1000" data-suffix="+">0+</span></div>
    <div class="cl-stat-label">行业成功项目</div>
  </div>
  <div class="cl-stat-item">
    <div class="cl-stat-num"><span class="cl-counter" data-target="200" data-suffix="+">0+</span></div>
    <div class="cl-stat-label">专业迁移工具</div>
  </div>
  <div class="cl-stat-item">
    <div class="cl-stat-num"><span class="cl-counter" data-target="596" data-suffix="+">0+</span></div>
    <div class="cl-stat-label">IT 专业认证数</div>
  </div>
  <div class="cl-stat-item">
    <div class="cl-stat-num">7×24</div>
    <div class="cl-stat-label">全天候服务保障</div>
  </div>
</div>

<div class="cl-body">

  <!-- 四大核心能力 -->
  <section class="cl-sec reveal" id="capabilities">
    <div class="cl-sec-header">
      <div class="cl-eyebrow">Core Capabilities · 核心能力</div>
      <h2 class="cl-sec-title">云能力中心四大专业服务方向</h2>
    </div>
    <div class="cl-cap-grid">
      <a href="#migration" class="cl-cap-card cl-cap-blue">
        <div class="cl-cap-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        </div>
        <h4>应用迁移上云</h4>
        <p>华为云 · 腾讯云平台迁移，六大策略灵活应对，200+ 工具加速迁移</p>
        <span class="cl-cap-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
      </a>
      <a href="#operations" class="cl-cap-card cl-cap-cyan">
        <div class="cl-cap-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
        </div>
        <h4>标准化云运营</h4>
        <p>日常运维 · 巡检 · 版本管理 · 告警 · 数据管理全链路 SLA 保障</p>
        <span class="cl-cap-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
      </a>
      <a href="#ai" class="cl-cap-card cl-cap-purple">
        <div class="cl-cap-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
        </div>
        <h4>AI 大模型落地</h4>
        <p>基于华为昇腾云，提供 LLM 应用开发、知识库构建、Prompt 优化全套服务</p>
        <span class="cl-cap-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
      </a>
      <a href="#certs" class="cl-cap-card cl-cap-amber">
        <div class="cl-cap-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
        </div>
        <h4>资质认证体系</h4>
        <p>HCIE 26人 · HCIP 102人 · ACE 7人 · PMP 345人，行业顶级专家团队</p>
        <span class="cl-cap-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
      </a>
    </div>
  </section>

  <!-- 迁移策略 -->
  <section class="cl-sec reveal" id="migration">
    <div class="cl-sec-header">
      <div class="cl-eyebrow">Migration · 应用迁移</div>
      <h2 class="cl-sec-title">华为云 · 腾讯云迁移全流程</h2>
    </div>

    <!-- 六大迁移策略 -->
    <div class="cl-strategies-grid">
      <div class="cl-strategy cl-s-blue">
        <div class="cl-strategy-num">01</div>
        <div class="cl-strategy-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="5 9 2 12 5 15"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/></svg></div>
        <h4>直接迁移（Rehost）</h4>
        <p>传统 Lift &amp; Shift，将应用整体搬迁至云端，最快完成迁移，改动最小</p>
      </div>
      <div class="cl-strategy cl-s-cyan">
        <div class="cl-strategy-num">02</div>
        <div class="cl-strategy-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
        <h4>平台迁移（Replatform）</h4>
        <p>局部优化后再迁移，如将关系型数据库替换为云托管数据库，提升弹性</p>
      </div>
      <div class="cl-strategy cl-s-purple">
        <div class="cl-strategy-num">03</div>
        <div class="cl-strategy-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></div>
        <h4>重新购买（Repurchase）</h4>
        <p>切换至 SaaS 产品，替换自建系统，降低运维负担，快速获得云原生能力</p>
      </div>
      <div class="cl-strategy cl-s-amber">
        <div class="cl-strategy-num">04</div>
        <div class="cl-strategy-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></div>
        <h4>重构（Re-architect）</h4>
        <p>深度改造应用架构，从 SOA 向微服务/云原生演进，释放业务弹性潜能</p>
      </div>
      <div class="cl-strategy cl-s-slate">
        <div class="cl-strategy-num">05</div>
        <div class="cl-strategy-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg></div>
        <h4>停用（Retire）</h4>
        <p>下线已无业务价值的系统，集中资源专注于核心应用，降低总体 IT 成本</p>
      </div>
      <div class="cl-strategy cl-s-green">
        <div class="cl-strategy-num">06</div>
        <div class="cl-strategy-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <h4>保留（Retain）</h4>
        <p>暂未准备好迁移的应用维持现状，后续随业务成熟度提升再纳入计划</p>
      </div>
    </div>

    <!-- 迁移流程图 -->
    <div class="cl-flow-img-block reveal">
      <div class="cl-flow-img-header">
        <div class="cl-flow-img-icon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        </div>
        <div>
          <div class="cl-flow-img-title">标准化项目实施流程</div>
          <div class="cl-flow-img-sub">从华为推荐立项 → 调研评审 → POC 测试 → 项目实施 → 业务割接 → 验收交付</div>
        </div>
      </div>
      <div class="cl-flow-img-wrap">
        <img src="/solutions/cloud/images/cloud-migration-flow.png" alt="迁移项目实施流程图" />
      </div>
    </div>

    <!-- 迁移规范标准 -->
    <div class="cl-standards-wrap reveal">
      <div class="cl-standards-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
        通过多项国际权威认证，保障迁移全程安全合规
      </div>
      <div class="cl-certs-row">
        <span class="cl-cert-badge">ISO 27001</span>
        <span class="cl-cert-badge">ISO 27017</span>
        <span class="cl-cert-badge">ISO 27018</span>
        <span class="cl-cert-badge">ISO 20000</span>
        <span class="cl-cert-badge">CSA STAR</span>
        <span class="cl-cert-badge">PCI-DSS</span>
        <span class="cl-cert-badge">等级保护</span>
        <span class="cl-cert-badge">信息安全应用安全</span>
      </div>
      <div class="cl-highlights-row">
        <div class="cl-highlight">
          <div class="cl-highlight-num">7×24h</div>
          <div class="cl-highlight-lbl">全场景咨询与迁移优化</div>
        </div>
        <div class="cl-highlight">
          <div class="cl-highlight-num">200+</div>
          <div class="cl-highlight-lbl">专业迁移工具覆盖</div>
        </div>
        <div class="cl-highlight">
          <div class="cl-highlight-num">2000+</div>
          <div class="cl-highlight-lbl">迁移咨询与迁移专家</div>
        </div>
        <div class="cl-highlight">
          <div class="cl-highlight-num">1000+</div>
          <div class="cl-highlight-lbl">成功行业落地案例</div>
        </div>
      </div>
    </div>
  </section>

  <!-- 云运营 -->
  <section class="cl-sec reveal" id="operations">
    <div class="cl-sec-header">
      <div class="cl-eyebrow">Cloud Operations · 云运营</div>
      <h2 class="cl-sec-title">标准化全项运营体系</h2>
    </div>
    <div class="cl-tabs-wrap">
      <div class="cl-tab-bar">
        <button class="cl-tab active" data-panel="tab-daily">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          日常运维
        </button>
        <button class="cl-tab" data-panel="tab-inspect">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          巡检运维
        </button>
        <button class="cl-tab" data-panel="tab-incident">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          故障管理
        </button>
        <button class="cl-tab" data-panel="tab-ops">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          云运营能力
        </button>
      </div>

      <div class="cl-panel" id="tab-daily">
        <div class="cl-panel-intro">围绕华为云等平台，提供业务发放、系统监控、资源管理、日志处理的日常全项运维服务，保障平台 SLA。</div>
        <div class="cl-ops-grid">
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
            <h4>业务发放</h4>
            <p>云运营平台全量产品业务发放、账号与权限通知</p>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></div>
            <h4>系统监控</h4>
            <p>告警规则配置、监控指标阈值、资源容量监控、日志占用预警</p>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
            <h4>版本维护</h4>
            <p>版本升级计划制定，组件识别与回滚，变更窗口管理</p>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#d97706,#f59e0b);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
            <h4>数据管理</h4>
            <p>云资源数据与产品数据高可用性管理，备份策略与数据防丢</p>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#059669,#10b981);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg></div>
            <h4>告警配置</h4>
            <p>告警规则精细化配置，分级告警响应，快速定位根因</p>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#dc2626,#f87171);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
            <h4>安全运维</h4>
            <p>全面安全监控、合规审计、漏洞扫描与修复，零安全事件目标</p>
          </div>
        </div>
      </div>

      <div class="cl-panel" id="tab-inspect">
        <div class="cl-panel-intro">每日例行巡检，发现平台潜在风险，出具巡检汇总报告并组织整改措施落实。</div>
        <div class="cl-ops-grid">
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
            <h4>平台巡检</h4>
            <p>按需每日例行巡检，覆盖平台内所有在用模块的潜在风险检查</p>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
            <h4>巡检报告</h4>
            <p>输出结构化巡检汇总报告，标注风险等级，提出整改建议</p>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#059669,#10b981);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></div>
            <h4>整改跟踪</h4>
            <p>针对发现问题，组织实施整改措施并跟踪验证，闭环管理</p>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#d97706,#f59e0b);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
            <h4>周期总结</h4>
            <p>定期汇总运维指标与健康度趋势，为架构优化提供数据支撑</p>
          </div>
        </div>
      </div>

      <div class="cl-panel" id="tab-incident">
        <div class="cl-panel-intro">标准化故障分类分级规范，快速恢复业务，通过 7×24 远程支持与分级响应保障关键业务稳定性。</div>
        <div class="cl-ops-grid">
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#dc2626,#f87171);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg></div>
            <h4>故障分级</h4>
            <p>按影响范围与业务关键度划分 P1~P4 级别，对应差异化响应 SLA</p>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/></svg></div>
            <h4>7×24 远程支持</h4>
            <p>全天候远程技术支持，高级专家 1/2/3 线分级介入，快速闭环故障</p>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg></div>
            <h4>故障转派</h4>
            <p>无法前台独立解决时自动升级至二线/三线，并同步通知相关责任人</p>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#059669,#10b981);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></div>
            <h4>故障复盘</h4>
            <p>重大故障结案后输出根因分析报告，沉淀知识库，防止同类问题复发</p>
          </div>
        </div>
      </div>

      <div class="cl-panel" id="tab-ops">
        <div class="cl-panel-intro">覆盖商务运营、云资源运营、客户运营、渠道经营四大方向，构建完整云运营闭环能力。</div>
        <div class="cl-ops-grid">
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
            <h4>商务运营</h4>
            <p>运营指标预测、架构设计咨询、技术赋能推荐，挖掘潜在业务价值</p>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg></div>
            <h4>云资源运营</h4>
            <p>常规运维、云资源运维、数据库运维、网络运维及整体优化监控</p>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
            <h4>客户运营</h4>
            <p>客户满意度管理、客户健康度跟踪、生态圈构建与留存策略</p>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#d97706,#f59e0b);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg></div>
            <h4>渠道经营</h4>
            <p>渠道伙伴深耕管理，渠道激励计划，联合运营能力输出</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- AI 大模型 -->
  <section class="cl-sec reveal" id="ai">
    <div class="cl-sec-header">
      <div class="cl-eyebrow">AI & LLM · AI 大模型</div>
      <h2 class="cl-sec-title">基于华为昇腾云的大模型落地能力</h2>
    </div>

    <div class="cl-ai-layout">
      <div class="cl-ai-cards">
        <div class="cl-ai-card" style="--ac:#7c3aed;">
          <div class="cl-ai-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></div>
          <div>
            <h4>LLM 应用开发</h4>
            <p>基于大模型构建客户专属 LLM 应用，支持 Prompts 驱动、APIs 调用、外部存储接入</p>
          </div>
        </div>
        <div class="cl-ai-card" style="--ac:#0891b2;">
          <div class="cl-ai-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div>
          <div>
            <h4>领域知识库构建</h4>
            <p>基于大模型的领域知识库构建，数据采集加工、标注、训练、评测全流程支持</p>
          </div>
        </div>
        <div class="cl-ai-card" style="--ac:#d97706;">
          <div class="cl-ai-icon" style="background:linear-gradient(135deg,#d97706,#f59e0b);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></div>
          <div>
            <h4>Prompt 撰写与优化</h4>
            <p>专业 Prompt 工程服务，针对业务场景设计高效提示词，提升模型输出质量</p>
          </div>
        </div>
        <div class="cl-ai-card" style="--ac:#059669;">
          <div class="cl-ai-icon" style="background:linear-gradient(135deg,#059669,#10b981);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
          <div>
            <h4>AI 业务迁移</h4>
            <p>为华为平台上层应用提供开发支持，覆盖接口扩展、聊天支持、AI 应用集成</p>
          </div>
        </div>
      </div>
      <div class="cl-ai-imgs">
        <div class="cl-ai-img-block">
          <div class="cl-ai-img-label">大模型开发与发布全流程</div>
          <img src="/solutions/cloud/images/cloud-ai-pipeline.png" alt="AI大模型开发管线" />
        </div>
        <div class="cl-ai-img-block" style="margin-top:16px;">
          <div class="cl-ai-img-label">软件集成商 · 大模型分层能力矩阵</div>
          <img src="/solutions/cloud/images/cloud-ai-model.png" alt="AI大模型分层能力" />
        </div>
      </div>
    </div>
  </section>

  <!-- 资质认证 -->
  <section class="cl-sec reveal" id="certs">
    <div class="cl-sec-header">
      <div class="cl-eyebrow">Certifications · 资质认证</div>
      <h2 class="cl-sec-title">行业顶级专家认证团队</h2>
    </div>
    <div class="cl-certs-layout">
      <div class="cl-cert-stats">
        <div class="cl-cert-stat-card" style="--cc:#dc2626;">
          <div class="cl-cert-stat-num">26</div>
          <div class="cl-cert-stat-lbl">HCIE</div>
          <div class="cl-cert-stat-sub">华为认证专家工程师</div>
        </div>
        <div class="cl-cert-stat-card" style="--cc:#d97706;">
          <div class="cl-cert-stat-num">102</div>
          <div class="cl-cert-stat-lbl">HCIP</div>
          <div class="cl-cert-stat-sub">华为认证高级工程师</div>
        </div>
        <div class="cl-cert-stat-card" style="--cc:#7c3aed;">
          <div class="cl-cert-stat-num">7</div>
          <div class="cl-cert-stat-lbl">ACE</div>
          <div class="cl-cert-stat-sub">阿里云认证专家</div>
        </div>
        <div class="cl-cert-stat-card" style="--cc:#1d4ed8;">
          <div class="cl-cert-stat-num">345</div>
          <div class="cl-cert-stat-lbl">PMP</div>
          <div class="cl-cert-stat-sub">项目管理专业认证</div>
        </div>
        <div class="cl-cert-stat-card" style="--cc:#0891b2;">
          <div class="cl-cert-stat-num">11</div>
          <div class="cl-cert-stat-lbl">OCP</div>
          <div class="cl-cert-stat-sub">Oracle 认证专家</div>
        </div>
        <div class="cl-cert-stat-card" style="--cc:#059669;">
          <div class="cl-cert-stat-num">199+</div>
          <div class="cl-cert-stat-lbl">IT 技术认证</div>
          <div class="cl-cert-stat-sub">云计算 · 数据库 · 网络</div>
        </div>
      </div>
      <div class="cl-cert-imgs">
        <div class="cl-cert-img-wrap">
          <img src="/solutions/cloud/images/cloud-cert-ace.jpg" alt="ACE阿里云认证专家证书" />
          <div class="cl-cert-img-cap">ACE · Alibaba Cloud Certified Expert</div>
        </div>
        <div class="cl-cert-img-wrap">
          <img src="/solutions/cloud/images/cloud-cert-acp.jpg" alt="ACP阿里云认证专业证书" />
          <div class="cl-cert-img-cap">ACP · Alibaba Cloud Certified Professional</div>
        </div>
      </div>
    </div>
    <div class="cl-cert-list-wrap reveal">
      <div class="cl-cert-list-header">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
        完整认证清单（部分展示）
      </div>
      <img src="/solutions/cloud/images/cloud-cert-list.png" alt="认证清单" class="cl-cert-list-img" />
    </div>
  </section>

</div>

<footer class="au-footer">
  <span class="footer-l">中软国际 · <span>ChinaSofti</span></span>
  <span class="footer-r">chinasofti-capability.vercel.app · © 2025</span>
</footer>

</div>
</template>

<style scoped>
.cl-page { position: relative; min-height: 100vh; background: #fff; overflow-x: hidden; }
.cl-mesh-bg {
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
  background:
    radial-gradient(ellipse 80% 60% at 20% -10%, rgba(29,78,216,0.07) 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 80% 110%, rgba(8,145,178,0.06) 0%, transparent 60%);
}

/* ── HERO ── */
.cl-hero {
  position: relative; z-index: 1;
  background: linear-gradient(140deg, #040d1f 0%, #071a3e 35%, #0a2560 60%, #063a6e 82%, #032d52 100%);
  min-height: 520px; display: flex; align-items: center; justify-content: space-between;
  padding: 120px 72px 80px; gap: 40px; overflow: hidden;
}
.cl-hero-bg {
  position: absolute; inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231d4ed8' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.cl-hero-particles { position: absolute; inset: 0; pointer-events: none; }
.cl-hero-particles span {
  position: absolute; border-radius: 50%; background: rgba(56,189,248,0.15);
  animation: clFloat 8s ease-in-out infinite;
}
.cl-hero-particles span:nth-child(1){width:200px;height:200px;top:-60px;right:30%;animation-delay:0s;background:rgba(29,78,216,0.2);}
.cl-hero-particles span:nth-child(2){width:120px;height:120px;bottom:20px;left:15%;animation-delay:2s;background:rgba(56,189,248,0.15);}
.cl-hero-particles span:nth-child(3){width:80px;height:80px;top:30%;left:50%;animation-delay:4s;background:rgba(99,102,241,0.2);}
.cl-hero-particles span:nth-child(4){width:160px;height:160px;bottom:-40px;left:-30px;animation-delay:1s;background:rgba(8,145,178,0.18);}
.cl-hero-particles span:nth-child(5){width:60px;height:60px;top:20%;right:8%;animation-delay:3s;}
.cl-hero-particles span:nth-child(6){width:100px;height:100px;top:55%;left:28%;animation-delay:5s;background:rgba(124,58,237,0.15);}
@keyframes clFloat { 0%,100%{transform:translateY(0) scale(1);opacity:0.5;} 50%{transform:translateY(-18px) scale(1.06);opacity:1;} }

.cl-hero-inner { position: relative; z-index: 2; max-width: 580px; flex: 1; }
.cl-hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
  border-radius: 999px; padding: 7px 18px; margin-bottom: 24px;
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
  color: rgba(255,255,255,0.7); text-transform: uppercase;
}
.cl-hero h1 { font-size: 2.7rem; font-weight: 900; line-height: 1.12; color: #fff; margin-bottom: 18px; letter-spacing: -0.03em; }
.cl-grad {
  background: linear-gradient(90deg,#38bdf8,#818cf8,#06b6d4,#38bdf8);
  background-size: 300%; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text; animation: clGrad 6s linear infinite;
}
@keyframes clGrad { 0%{background-position:0%} 100%{background-position:300%} }
.cl-hero-sub { font-size: 0.98rem; color: rgba(255,255,255,0.72); margin-bottom: 28px; line-height: 1.7; }
.cl-hero-tags { display: flex; flex-wrap: wrap; gap: 10px; }
.cl-hero-tags span {
  display: inline-flex; align-items: center; gap: 7px;
  background: rgba(255,255,255,0.09); border: 1px solid rgba(255,255,255,0.15);
  border-radius: 999px; padding: 7px 14px; font-size: 0.8rem; font-weight: 600; color: rgba(255,255,255,0.88);
}
.cl-hero-img-wrap {
  position: relative; z-index: 2; flex: 0 0 400px;
  border-radius: 16px; overflow: hidden;
  border: 1px solid rgba(255,255,255,0.12); box-shadow: 0 20px 60px rgba(0,0,0,0.4);
}
.cl-hero-img-wrap > img { width: 100%; height: 240px; object-fit: cover; display: block; }
.cl-hero-globe {
  position: absolute; top: -30px; right: -30px; width: 140px; height: 140px; opacity: 0.4;
  pointer-events: none;
}
.cl-hero-globe img { width: 100%; height: 100%; object-fit: contain; }

/* ── STATS ── */
.cl-stats-strip {
  position: relative; z-index: 1;
  background: linear-gradient(135deg,#1e3a8a,#1d4ed8,#0891b2);
  padding: 20px 72px; display: flex; justify-content: center; flex-wrap: wrap;
}
.cl-stat-item {
  display: flex; flex-direction: column; align-items: center; gap: 4px;
  padding: 10px 36px; border-right: 1px solid rgba(255,255,255,0.2);
}
.cl-stat-item:last-child { border-right: none; }
.cl-stat-num { font-size: 1.9rem; font-weight: 900; color: #fff; line-height: 1; letter-spacing: -0.03em; }
.cl-stat-label { font-size: 0.72rem; color: rgba(255,255,255,0.82); font-weight: 600; white-space: nowrap; }

/* ── BODY ── */
.cl-body { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 0 48px 80px; }
.cl-sec { padding: 72px 0 0; }
.cl-sec-header { margin-bottom: 40px; }
.cl-eyebrow { font-size: 0.68rem; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; color: #1d4ed8; margin-bottom: 10px; }
.cl-sec-title { font-size: 2rem; font-weight: 900; color: #0f172a; letter-spacing: -0.02em; }
.reveal { opacity: 0; transform: translateY(28px); transition: opacity .55s ease, transform .55s ease; }
.reveal.in { opacity: 1; transform: none; }

/* ── CAPABILITY CARDS ── */
.cl-cap-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
.cl-cap-card {
  border-radius: 18px; padding: 28px 22px; text-decoration: none; color: inherit;
  display: flex; flex-direction: column; gap: 10px; border: 1.5px solid;
  transition: transform .2s, box-shadow .2s; position: relative; overflow: hidden;
}
.cl-cap-card:hover { transform: translateY(-5px); box-shadow: 0 14px 36px rgba(0,0,0,0.12); }
.cl-cap-blue { background: rgba(29,78,216,0.04); border-color: rgba(29,78,216,0.18); }
.cl-cap-cyan { background: rgba(8,145,178,0.04); border-color: rgba(8,145,178,0.18); }
.cl-cap-purple { background: rgba(124,58,237,0.04); border-color: rgba(124,58,237,0.18); }
.cl-cap-amber { background: rgba(217,119,6,0.04); border-color: rgba(217,119,6,0.18); }
.cl-cap-icon {
  width: 56px; height: 56px; border-radius: 15px;
  display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(0,0,0,0.15);
}
.cl-cap-blue .cl-cap-icon { background: linear-gradient(135deg,#1d4ed8,#3b82f6); }
.cl-cap-cyan .cl-cap-icon { background: linear-gradient(135deg,#0891b2,#06b6d4); }
.cl-cap-purple .cl-cap-icon { background: linear-gradient(135deg,#7c3aed,#a78bfa); }
.cl-cap-amber .cl-cap-icon { background: linear-gradient(135deg,#d97706,#f59e0b); }
.cl-cap-card h4 { font-size: 1rem; font-weight: 800; color: #1e293b; }
.cl-cap-card p { font-size: 0.8rem; color: #64748b; line-height: 1.6; flex: 1; }
.cl-cap-arrow { color: #94a3b8; align-self: flex-end; transition: transform .15s, color .15s; }
.cl-cap-card:hover .cl-cap-arrow { transform: translate(3px,-3px); color: #1d4ed8; }

/* ── MIGRATION STRATEGIES ── */
.cl-strategies-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 32px; }
.cl-strategy {
  border-radius: 16px; padding: 22px 20px; border: 1.5px solid;
  position: relative; overflow: hidden;
}
.cl-strategy-num {
  position: absolute; top: 14px; right: 16px;
  font-size: 1.8rem; font-weight: 900; opacity: 0.08; letter-spacing: -0.04em; color: #0f172a;
}
.cl-strategy-icon {
  width: 42px; height: 42px; border-radius: 11px; margin-bottom: 12px;
  display: flex; align-items: center; justify-content: center; box-shadow: 0 3px 10px rgba(0,0,0,0.12);
}
.cl-strategy h4 { font-size: 0.92rem; font-weight: 800; color: #1e293b; margin-bottom: 6px; }
.cl-strategy p { font-size: 0.78rem; color: #475569; line-height: 1.6; }
.cl-s-blue { background: rgba(29,78,216,0.04); border-color: rgba(29,78,216,0.15); }
.cl-s-blue .cl-strategy-icon { background: linear-gradient(135deg,#1d4ed8,#3b82f6); }
.cl-s-cyan { background: rgba(8,145,178,0.04); border-color: rgba(8,145,178,0.15); }
.cl-s-cyan .cl-strategy-icon { background: linear-gradient(135deg,#0891b2,#06b6d4); }
.cl-s-purple { background: rgba(124,58,237,0.04); border-color: rgba(124,58,237,0.15); }
.cl-s-purple .cl-strategy-icon { background: linear-gradient(135deg,#7c3aed,#a78bfa); }
.cl-s-amber { background: rgba(217,119,6,0.04); border-color: rgba(217,119,6,0.15); }
.cl-s-amber .cl-strategy-icon { background: linear-gradient(135deg,#d97706,#f59e0b); }
.cl-s-slate { background: rgba(71,85,105,0.04); border-color: rgba(71,85,105,0.15); }
.cl-s-slate .cl-strategy-icon { background: linear-gradient(135deg,#475569,#64748b); }
.cl-s-green { background: rgba(5,150,105,0.04); border-color: rgba(5,150,105,0.15); }
.cl-s-green .cl-strategy-icon { background: linear-gradient(135deg,#059669,#10b981); }

/* ── FLOW IMAGE ── */
.cl-flow-img-block { background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 18px; padding: 24px; margin-bottom: 24px; }
.cl-flow-img-header { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
.cl-flow-img-icon { width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.cl-flow-img-title { font-size: 0.96rem; font-weight: 800; color: #1e293b; }
.cl-flow-img-sub { font-size: 0.76rem; color: #64748b; margin-top: 2px; }
.cl-flow-img-wrap img { width: 100%; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }

/* ── STANDARDS ── */
.cl-standards-wrap { background: linear-gradient(135deg,#eff6ff,#dbeafe); border: 1.5px solid #93c5fd; border-radius: 18px; padding: 28px; }
.cl-standards-header { display: flex; align-items: center; gap: 10px; font-size: 0.88rem; font-weight: 700; color: #1d4ed8; margin-bottom: 16px; }
.cl-certs-row { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 24px; }
.cl-cert-badge {
  font-size: 0.76rem; font-weight: 700; padding: 5px 14px; border-radius: 999px;
  background: white; color: #1d4ed8; border: 1.5px solid #93c5fd;
  box-shadow: 0 2px 6px rgba(29,78,216,0.1);
}
.cl-highlights-row { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
.cl-highlight { text-align: center; }
.cl-highlight-num { font-size: 1.6rem; font-weight: 900; color: #1d4ed8; letter-spacing: -0.03em; }
.cl-highlight-lbl { font-size: 0.74rem; color: #475569; margin-top: 4px; }

/* ── TABS ── */
.cl-tabs-wrap { background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 20px; overflow: hidden; }
.cl-tab-bar { display: flex; background: white; border-bottom: 1.5px solid #e2e8f0; flex-wrap: wrap; }
.cl-tab {
  display: flex; align-items: center; gap: 7px;
  padding: 14px 24px; font-size: 0.86rem; font-weight: 700; color: #64748b;
  background: none; border: none; cursor: pointer; border-bottom: 3px solid transparent;
  transition: color .18s, border-color .18s;
}
.cl-tab.active { color: #1d4ed8; border-bottom-color: #1d4ed8; }
.cl-tab:hover:not(.active) { color: #0f172a; }
.cl-panel { display: none; padding: 28px; }
.cl-panel.active { display: block; }
.cl-panel.in { animation: clFadeUp .3s ease forwards; }
@keyframes clFadeUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }
.cl-panel-intro { font-size: 0.9rem; color: #475569; line-height: 1.7; margin-bottom: 22px; padding: 13px 16px; background: white; border-radius: 12px; border-left: 4px solid #1d4ed8; }

/* ── OPS GRID ── */
.cl-ops-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.cl-ops-card {
  display: flex; align-items: flex-start; gap: 13px;
  background: white; border-radius: 14px; padding: 16px;
  border: 1.5px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.cl-ops-icon {
  width: 40px; height: 40px; border-radius: 10px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.cl-ops-card h4 { font-size: 0.9rem; font-weight: 800; color: #1e293b; margin-bottom: 4px; }
.cl-ops-card p { font-size: 0.78rem; color: #64748b; line-height: 1.6; }

/* ── AI SECTION ── */
.cl-ai-layout { display: grid; grid-template-columns: 1fr 1.4fr; gap: 28px; }
.cl-ai-cards { display: flex; flex-direction: column; gap: 14px; }
.cl-ai-card {
  display: flex; align-items: flex-start; gap: 14px;
  background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 14px; padding: 18px;
  border-left: 4px solid var(--ac);
}
.cl-ai-icon {
  width: 42px; height: 42px; border-radius: 11px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center; box-shadow: 0 3px 10px rgba(0,0,0,0.12);
}
.cl-ai-card h4 { font-size: 0.92rem; font-weight: 800; color: #1e293b; margin-bottom: 5px; }
.cl-ai-card p { font-size: 0.8rem; color: #64748b; line-height: 1.6; }
.cl-ai-img-block { background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 14px; overflow: hidden; }
.cl-ai-img-label { font-size: 0.74rem; font-weight: 700; color: #475569; padding: 10px 14px; background: white; border-bottom: 1px solid #e2e8f0; }
.cl-ai-img-block img { width: 100%; display: block; }

/* ── CERTS ── */
.cl-certs-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-bottom: 24px; }
.cl-cert-stats { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; }
.cl-cert-stat-card {
  background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 16px;
  padding: 20px 16px; text-align: center; border-top: 4px solid var(--cc);
}
.cl-cert-stat-num { font-size: 2rem; font-weight: 900; color: var(--cc); letter-spacing: -0.03em; }
.cl-cert-stat-lbl { font-size: 0.88rem; font-weight: 800; color: #1e293b; margin-top: 4px; }
.cl-cert-stat-sub { font-size: 0.7rem; color: #64748b; margin-top: 3px; }
.cl-cert-imgs { display: flex; flex-direction: column; gap: 14px; }
.cl-cert-img-wrap { border-radius: 14px; overflow: hidden; border: 1.5px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
.cl-cert-img-wrap img { width: 100%; height: 170px; object-fit: cover; display: block; }
.cl-cert-img-cap { font-size: 0.72rem; color: #64748b; padding: 8px 12px; background: #f8fafc; border-top: 1px solid #e2e8f0; }
.cl-cert-list-wrap { background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 18px; overflow: hidden; }
.cl-cert-list-header { display: flex; align-items: center; gap: 9px; font-size: 0.88rem; font-weight: 700; color: #1d4ed8; padding: 16px 20px; background: white; border-bottom: 1px solid #e2e8f0; }
.cl-cert-list-img { width: 100%; display: block; }

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
  .cl-hero { flex-direction: column; padding: 100px 24px 60px; min-height: auto; }
  .cl-hero-img-wrap { flex: none; width: 100%; }
  .cl-stats-strip { padding: 16px 20px; }
  .cl-stat-item { padding: 8px 14px; }
  .cl-body { padding: 0 20px 60px; }
  .cl-cap-grid { grid-template-columns: repeat(2,1fr); }
  .cl-strategies-grid { grid-template-columns: repeat(2,1fr); }
  .cl-ops-grid { grid-template-columns: repeat(2,1fr); }
  .cl-ai-layout { grid-template-columns: 1fr; }
  .cl-certs-layout { grid-template-columns: 1fr; }
  .cl-highlights-row { grid-template-columns: repeat(2,1fr); }
  .au-footer { padding: 16px 20px; flex-direction: column; gap: 4px; text-align: center; }
}
@media (max-width: 480px) {
  .cl-hero h1 { font-size: 2rem; }
  .cl-cap-grid { grid-template-columns: 1fr; }
  .cl-strategies-grid { grid-template-columns: 1fr; }
  .cl-ops-grid { grid-template-columns: 1fr; }
  .cl-cert-stats { grid-template-columns: repeat(2,1fr); }
}
</style>
