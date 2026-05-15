<script setup>
import { onMounted } from 'vue'
import NavBar from './NavBar.vue'

onMounted(() => {
  initReveal()
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

function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return
      const el = e.target
      const target = parseInt(el.dataset.target, 10)
      const suffix = el.dataset.suffix || ''
      let cur = 0; const step = Math.ceil(target / 60)
      const timer = setInterval(() => { cur = Math.min(cur + step, target); el.textContent = cur + suffix; if (cur >= target) clearInterval(timer) }, 16)
      obs.unobserve(el)
    })
  }, { threshold: 0.5 })
  document.querySelectorAll('.ms-counter').forEach(el => obs.observe(el))
}
</script>

<template>
<div class="ms-page">
<div class="ms-mesh-bg"></div>
<NavBar active="solutions" />

<!-- HERO -->
<section class="ms-hero">
  <div class="ms-hero-bg"></div>
  <div class="ms-hero-particles"><span></span><span></span><span></span><span></span><span></span></div>
  <div class="ms-hero-inner">
    <div class="ms-hero-badge">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      BSS 管理服务 · Managed Services
    </div>
    <h1>运营商<br><span class="ms-grad">管理服务解决方案</span></h1>
    <p class="ms-hero-sub">中软国际基于马来西亚 DIGI 项目成功实践，联合华为打造端到端 BSS 管理服务能力体系——服务质量好于华为、成本更低，帮助全球电信运营商实现运营效率提升与产品价值优化。</p>
    <div class="ms-hero-tags">
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> 中软 × 华为背靠背战略合作</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg> 90%+ 问题一线解决</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10z"/></svg> DIGI 成功验证</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> 成本低于华为直接交付</span>
    </div>
  </div>
  <div class="ms-hero-visual">
    <div class="ms-rings-wrap">
      <div class="ms-ring ms-ring1"></div>
      <div class="ms-ring ms-ring2"></div>
      <div class="ms-ring ms-ring3"></div>
      <div class="ms-center-badge">MS</div>
      <div class="ms-float-tag ms-tag1">体系</div>
      <div class="ms-float-tag ms-tag2">服务</div>
      <div class="ms-float-tag ms-tag3">人才</div>
      <div class="ms-float-tag ms-tag4">质量</div>
      <div class="ms-float-tag ms-tag5">工具</div>
    </div>
  </div>
</section>

<!-- STATS -->
<div class="ms-stats-strip">
  <div class="ms-stat"><div class="ms-stat-num">DIGI</div><div class="ms-stat-label">马来西亚标杆项目成功验证</div></div>
  <div class="ms-stat"><div class="ms-stat-num"><span class="ms-counter" data-target="90" data-suffix="%+">0%+</span></div><div class="ms-stat-label">问题一线解决率</div></div>
  <div class="ms-stat"><div class="ms-stat-num">2.3M<span style="font-size:1rem">→</span>10M+</div><div class="ms-stat-label">USD 合同额成长路线图</div></div>
  <div class="ms-stat"><div class="ms-stat-num">3 阶段</div><div class="ms-stat-label">CBS → 全 BSS → 企业级</div></div>
  <div class="ms-stat"><div class="ms-stat-num">CMMI 5</div><div class="ms-stat-label">最高级软件能力成熟度</div></div>
</div>

<div class="ms-body">

  <!-- 什么是管理服务 -->
  <section class="ms-sec reveal" id="intro">
    <div class="ms-sec-hd">
      <div class="ms-eyebrow">Overview · 方案概述</div>
      <h2 class="ms-sec-title">什么是 BSS 管理服务？</h2>
    </div>
    <div class="ms-intro-grid">
      <div class="ms-intro-text">
        <p>管理服务（Managed Services）是指中软国际作为专业服务商，承接电信运营商 BSS 系统的长期运维管理工作，包括日常维保、故障处理、版本升级、性能优化等全周期服务。</p>
        <p>基于马来西亚 <strong>DIGI 项目</strong>的成功实践，中软已形成成熟的管理服务能力体系：<strong>质量好于华为、成本更低</strong>，并与华为保持背靠背战略合作关系，可迅速协调华为资源处理产品基线问题。</p>
        <div class="ms-value-tags">
          <span class="ms-vtag ms-vtag-blue">🎯 量化可持续收益</span>
          <span class="ms-vtag ms-vtag-purple">⚡ 快速响应</span>
          <span class="ms-vtag ms-vtag-indigo">🔧 自动化运维</span>
          <span class="ms-vtag ms-vtag-violet">🤝 华为直通</span>
        </div>
      </div>
      <div class="ms-intro-cards">
        <div class="ms-kv-card">
          <div class="ms-kv-num">90%+</div>
          <div class="ms-kv-desc">问题在一线中软环节解决，无需上升至华为，响应速度更快</div>
        </div>
        <div class="ms-kv-card">
          <div class="ms-kv-num">≤ 华为</div>
          <div class="ms-kv-desc">服务成本低于华为直接交付，同时客户感知质量好于华为</div>
        </div>
        <div class="ms-kv-card">
          <div class="ms-kv-num">100~150</div>
          <div class="ms-kv-desc">万美元/年，DIGI 预期年合同额（未来五年预测）</div>
        </div>
      </div>
    </div>
  </section>

  <!-- 适合哪类运营商 -->
  <section class="ms-sec ms-sec-alt reveal" id="target">
    <div class="ms-sec-hd">
      <div class="ms-eyebrow">Target Customers · 目标客户</div>
      <h2 class="ms-sec-title">什么样的运营商需要管理服务？</h2>
      <p class="ms-sec-sub">当运营商具备以下特征时，BSS 管理服务可以发挥最大价值</p>
    </div>
    <div class="ms-target-grid">
      <div class="ms-target-card">
        <div class="ms-target-icon" style="background:linear-gradient(135deg,#4f46e5,#6366f1)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        </div>
        <div class="ms-target-title">业务即将强劲增长</div>
        <div class="ms-target-desc">新拿到移动牌照、即将接入移动互联网络，业务量显著提高，需要运维能力同步跟上</div>
      </div>
      <div class="ms-target-card">
        <div class="ms-target-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
        </div>
        <div class="ms-target-title">融合云产品复杂度高</div>
        <div class="ms-target-desc">正在考虑与云服务、软件服务组成融合产品，产品复杂度提升，需要专业集成管理能力</div>
      </div>
      <div class="ms-target-card">
        <div class="ms-target-icon" style="background:linear-gradient(135deg,#dc2626,#f87171)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </div>
        <div class="ms-target-title">客户投诉合规风险高</div>
        <div class="ms-target-desc">国家法律严格，对客户投诉敏感，投诉导致运营商停牌或赔偿的风险较高</div>
      </div>
      <div class="ms-target-card">
        <div class="ms-target-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <div class="ms-target-title">新系统运营能力不足</div>
        <div class="ms-target-desc">面对未投入生产的系统，担心自身运营能力无法跟上，需要专业团队保驾护航</div>
      </div>
      <div class="ms-target-card">
        <div class="ms-target-icon" style="background:linear-gradient(135deg,#d97706,#fbbf24)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <div class="ms-target-title">ARPU 下降需降本</div>
        <div class="ms-target-desc">ARPU 值下降，TCO 成本控制需要更加精细；数字化转型减员增效，需要降低运维人力成本</div>
      </div>
      <div class="ms-target-card">
        <div class="ms-target-icon" style="background:linear-gradient(135deg,#059669,#10b981)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="2" width="9" height="9" rx="1"/><rect x="13" y="2" width="9" height="9" rx="1"/><rect x="2" y="13" width="9" height="9" rx="1"/><rect x="13" y="13" width="9" height="9" rx="1"/></svg>
        </div>
        <div class="ms-target-title">迫切需要自动化运维</div>
        <div class="ms-target-desc">对自动化运维能力有迫切需求，希望通过工具链和智能化平台替代人工重复操作</div>
      </div>
    </div>
    <div class="ms-geo-hint">
      <div class="ms-geo-title">📍 市场优先级</div>
      <div class="ms-geo-items">
        <div class="ms-geo-item"><span class="ms-geo-phase">短期</span><span class="ms-geo-area">东南亚 · 拉美</span><span class="ms-geo-note">CBS/BES 为主的运营商</span></div>
        <div class="ms-geo-sep">→</div>
        <div class="ms-geo-item"><span class="ms-geo-phase">中期</span><span class="ms-geo-area">中东 · 非洲</span><span class="ms-geo-note">Infra 和云运维运营商</span></div>
        <div class="ms-geo-sep">→</div>
        <div class="ms-geo-item"><span class="ms-geo-phase">长期</span><span class="ms-geo-area">欧洲 · 大型企业</span><span class="ms-geo-note">高 SLA 要求、产品多样化</span></div>
      </div>
    </div>
  </section>

  <!-- 五大能力支柱 -->
  <section class="ms-sec reveal" id="capability">
    <div class="ms-sec-hd">
      <div class="ms-eyebrow">Core Capability · 五大能力</div>
      <h2 class="ms-sec-title">管理服务五大核心能力</h2>
      <p class="ms-sec-sub">中软管理服务能力体系经 DIGI 项目验证，覆盖体系、服务、人才、质量、工具五个维度</p>
    </div>
    <div class="ms-cap-grid">
      <div class="ms-cap-card ms-cap-main">
        <div class="ms-cap-num">01</div>
        <div class="ms-cap-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
        <div class="ms-cap-title">体系</div>
        <div class="ms-cap-subtitle">完善稳健的管理模型</div>
        <div class="ms-cap-desc">建立完整的 BSS 管理服务治理模型，覆盖二线维保、解决方案提供、SLA/KPI 管理等职责分工，形成稳健的运营管理框架</div>
      </div>
      <div class="ms-cap-card">
        <div class="ms-cap-num">02</div>
        <div class="ms-cap-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
        <div class="ms-cap-title">服务</div>
        <div class="ms-cap-subtitle">快速响应需求和问题</div>
        <div class="ms-cap-desc">客户→中软→华为三层响应机制，<strong>90%+ 问题在中软环节解决</strong>，问题响应比华为更迅速，协调华为基线速度不变</div>
      </div>
      <div class="ms-cap-card">
        <div class="ms-cap-num">03</div>
        <div class="ms-cap-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <div class="ms-cap-title">人才</div>
        <div class="ms-cap-subtitle">优化的团队阵型</div>
        <div class="ms-cap-desc">稳定的 Offshore 资源池，一线在现场、二线在研发，二线复用至多项目，有效优化管理服务成本；关键角色 30%+，核心骨干 10 年以上经验</div>
      </div>
      <div class="ms-cap-card">
        <div class="ms-cap-num">04</div>
        <div class="ms-cap-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
        <div class="ms-cap-title">质量</div>
        <div class="ms-cap-subtitle">成熟完善的质量保证机制</div>
        <div class="ms-cap-desc">完整的质量保障体系和 QA 流程，覆盖质量度量数据报告与质量控制流程，适应各种复杂产品和高标准客户的 SLA 要求</div>
      </div>
      <div class="ms-cap-card">
        <div class="ms-cap-num">05</div>
        <div class="ms-cap-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="9" height="9" rx="1"/><rect x="13" y="2" width="9" height="9" rx="1"/><rect x="2" y="13" width="9" height="9" rx="1"/><rect x="13" y="13" width="9" height="9" rx="1"/></svg></div>
        <div class="ms-cap-title">工具</div>
        <div class="ms-cap-subtitle">自动化运维工具链</div>
        <div class="ms-cap-desc">承接华为工具平台基础上，中软自研运维工具，包括可视化任务管理、运维因子与权限管理等，<strong>实现自动化运维零出错率</strong></div>
      </div>
    </div>
  </section>

  <!-- 三阶段路线图 -->
  <section class="ms-sec ms-sec-dark reveal" id="roadmap">
    <div class="ms-sec-hd">
      <div class="ms-eyebrow">Roadmap · 发展路线图</div>
      <h2 class="ms-sec-title">From DIGI to More — 三阶段发展规划</h2>
      <p class="ms-sec-sub">基于 DIGI 项目成功实践，逐步扩展管理服务能力边界</p>
    </div>
    <div class="ms-roadmap">
      <div class="ms-rm-now">
        <div class="ms-rm-badge ms-rm-now-badge">现在</div>
        <div class="ms-rm-amount">2.3M USD</div>
        <div class="ms-rm-desc">DIGI 项目稳定运营</div>
      </div>
      <div class="ms-rm-line"></div>
      <div class="ms-rm-phase">
        <div class="ms-rm-badge">阶段一 · 2 年内</div>
        <div class="ms-rm-amount">500 万 USD</div>
        <div class="ms-rm-title">CBS 局点管理服务</div>
        <div class="ms-rm-items">
          <div class="ms-rm-item">✦ 面向华为 CBS 5.5/3.3 运营商</div>
          <div class="ms-rm-item">✦ 自研 CBS 运维工具链</div>
          <div class="ms-rm-item">✦ 优先拓展东南亚、拉美</div>
          <div class="ms-rm-item">✦ 投入约 200～500 人天</div>
        </div>
      </div>
      <div class="ms-rm-line"></div>
      <div class="ms-rm-phase">
        <div class="ms-rm-badge">阶段二 · 4 年内</div>
        <div class="ms-rm-amount">1,000 万 USD</div>
        <div class="ms-rm-title">全套 BSS 管理服务</div>
        <div class="ms-rm-items">
          <div class="ms-rm-item">✦ 扩展至 NGBOSS/PBOSS</div>
          <div class="ms-rm-item">✦ 切入中东、非洲市场</div>
          <div class="ms-rm-item">✦ Infra + 云运维能力引入</div>
          <div class="ms-rm-item">✦ 工具平台产品化</div>
        </div>
      </div>
      <div class="ms-rm-line"></div>
      <div class="ms-rm-phase ms-rm-future">
        <div class="ms-rm-badge ms-rm-future-badge">阶段三 · 5 年+</div>
        <div class="ms-rm-amount">1,000 万+ USD</div>
        <div class="ms-rm-title">企业级管理服务</div>
        <div class="ms-rm-items">
          <div class="ms-rm-item">✦ 面向欧洲高 SLA 运营商</div>
          <div class="ms-rm-item">✦ 中大型企业应用运维</div>
          <div class="ms-rm-item">✦ 智能化工具平台孵化</div>
          <div class="ms-rm-item">✦ 建立海外品牌影响力</div>
        </div>
      </div>
    </div>
  </section>

  <!-- DIGI 成功案例 -->
  <section class="ms-sec reveal" id="digi">
    <div class="ms-sec-hd">
      <div class="ms-eyebrow">Success Case · 标杆案例</div>
      <h2 class="ms-sec-title">DIGI 管理服务 · 马来西亚标杆项目</h2>
    </div>
    <div class="ms-case-wrap">
      <div class="ms-case-main">
        <div class="ms-case-tag">核心案例 · 已验证</div>
        <div class="ms-case-title">马来西亚 DIGI 电信 · CBS 管理服务</div>
        <div class="ms-case-timeline">
          <div class="ms-ct-item"><div class="ms-ct-year">2013</div><div class="ms-ct-text">中软以人力外包切入，参与华为 CBS 3.3 交付与管理服务</div></div>
          <div class="ms-ct-item"><div class="ms-ct-year">2014</div><div class="ms-ct-text">DIGI 正式商用华为 CBS 3.3 系统，1200 万+ 用户</div></div>
          <div class="ms-ct-item ms-ct-key"><div class="ms-ct-year">2018</div><div class="ms-ct-text">中软以<strong>客户成本刚需</strong>为切入点，与 DIGI 签订<strong>长期管理服务合同</strong></div></div>
          <div class="ms-ct-item"><div class="ms-ct-year">未来5年</div><div class="ms-ct-text">预计年合同额 <strong>100～150 万美元</strong>，持续稳定增长</div></div>
        </div>
        <div class="ms-case-bg">
          <div class="ms-case-bg-title">项目背景</div>
          <p>DIGI 为马来西亚前三大电信运营商，在 CBS 运维成本控制和服务质量提升方面有强烈需求。中软通过承接原管理服务项目组核心人员、并引入华为工具平台经验，快速建立竞争优势，最终以更低成本、更高质量的管理服务赢得长期合同。</p>
        </div>
      </div>
      <div class="ms-case-results">
        <div class="ms-result-title">项目成果</div>
        <div class="ms-result-item ms-result-green">
          <div class="ms-result-icon">✅</div>
          <div>
            <div class="ms-result-label">服务质量超越华为</div>
            <div class="ms-result-sub">客户感知服务质量好于华为直接管理</div>
          </div>
        </div>
        <div class="ms-result-item ms-result-blue">
          <div class="ms-result-icon">⚡</div>
          <div>
            <div class="ms-result-label">响应速度更快</div>
            <div class="ms-result-sub">问题响应比华为处理更迅速，90%+ 一线解决</div>
          </div>
        </div>
        <div class="ms-result-item ms-result-purple">
          <div class="ms-result-icon">💰</div>
          <div>
            <div class="ms-result-label">成本更低</div>
            <div class="ms-result-sub">交付成本低于华为，同等水平下更具竞争力</div>
          </div>
        </div>
        <div class="ms-result-item ms-result-indigo">
          <div class="ms-result-icon">🔧</div>
          <div>
            <div class="ms-result-label">自动化工具积累</div>
            <div class="ms-result-sub">独立完成各类自动化运维工具研发和积累</div>
          </div>
        </div>
        <div class="ms-digi-quote">"与华为管理服务同等水平，成本更低！"</div>
      </div>
    </div>
  </section>

  <!-- 竞争优势 -->
  <section class="ms-sec ms-sec-alt reveal" id="advantage">
    <div class="ms-sec-hd">
      <div class="ms-eyebrow">Competitive Edge · 核心优势</div>
      <h2 class="ms-sec-title">为什么选择中软管理服务？</h2>
    </div>
    <div class="ms-adv-grid">
      <div class="ms-adv-card">
        <div class="ms-adv-icon">🤝</div>
        <div class="ms-adv-title">华为背靠背合作</div>
        <div class="ms-adv-desc">与华为保持战略级背靠背合作关系，产品基线问题可迅速协调华为资源处理，协调速度不变</div>
      </div>
      <div class="ms-adv-card">
        <div class="ms-adv-icon">🔬</div>
        <div class="ms-adv-title">研发基因驱动</div>
        <div class="ms-adv-desc">项目组具备较高研发能力，可根据运维需求独立完成自动化工具研发，持续积累工具链资产</div>
      </div>
      <div class="ms-adv-card">
        <div class="ms-adv-icon">🌍</div>
        <div class="ms-adv-title">Offshore 成本优势</div>
        <div class="ms-adv-desc">完善的 Offshore 团队建设，一线现场+二线研发阵型，二线复用多项目，系统性降低管理服务成本</div>
      </div>
      <div class="ms-adv-card">
        <div class="ms-adv-icon">🏆</div>
        <div class="ms-adv-title">DIGI 成功验证</div>
        <div class="ms-adv-desc">马来西亚 DIGI 项目提供完整的管理服务 DNA，可快速复制到东南亚、拉美、中东等区域运营商</div>
      </div>
      <div class="ms-adv-card">
        <div class="ms-adv-icon">📊</div>
        <div class="ms-adv-title">成熟方法论</div>
        <div class="ms-adv-desc">结合华为工具平台与中软自研工具，成熟的服务流程与质量体系，支撑高标准 SLA 要求</div>
      </div>
      <div class="ms-adv-card">
        <div class="ms-adv-icon">📈</div>
        <div class="ms-adv-title">量化可持续收益</div>
        <div class="ms-adv-desc">BSS 管理服务为运营商带来可量化的持续性收益：降低运营成本、缩短 TTM、提升客户满意度</div>
      </div>
    </div>
  </section>

</div>

<footer class="ms-footer">
  <div class="ms-footer-inner">
    <div class="ms-footer-brand">中软国际 · 管理服务解决方案</div>
    <div class="ms-footer-copy">© 2025 ChinaSofti International. All rights reserved.</div>
  </div>
</footer>

</div>
</template>

<style scoped>
.ms-page { min-height: 100vh; background: #f8fafc; font-family: 'Inter', 'PingFang SC', system-ui, sans-serif; color: #1e293b; }
.ms-mesh-bg { position: fixed; inset: 0; z-index: 0; pointer-events: none; background: radial-gradient(ellipse 80% 50% at 20% 0%, rgba(79,70,229,0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(99,102,241,0.05) 0%, transparent 60%); }

/* HERO */
.ms-hero { position: relative; min-height: 540px; display: flex; align-items: center; padding: 100px 72px 60px; gap: 48px; overflow: hidden; }
.ms-hero-bg { position: absolute; inset: 0; background: linear-gradient(135deg, #1e1b4b 0%, #312e81 35%, #4338ca 70%, #4f46e5 100%); }
.ms-hero-particles { position: absolute; inset: 0; overflow: hidden; }
.ms-hero-particles span { position: absolute; border-radius: 50%; background: rgba(255,255,255,0.05); animation: ms-float 9s infinite ease-in-out; }
.ms-hero-particles span:nth-child(1) { width: 320px; height: 320px; top: -100px; right: 8%; }
.ms-hero-particles span:nth-child(2) { width: 160px; height: 160px; top: 65%; left: 4%; animation-delay: 2s; }
.ms-hero-particles span:nth-child(3) { width: 100px; height: 100px; top: 25%; left: 32%; animation-delay: 4s; }
.ms-hero-particles span:nth-child(4) { width: 70px; height: 70px; bottom: 15%; right: 22%; animation-delay: 1s; }
.ms-hero-particles span:nth-child(5) { width: 220px; height: 220px; bottom: -70px; right: 38%; animation-delay: 3s; }
@keyframes ms-float { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-18px) scale(1.04)} }
.ms-hero-inner { position: relative; z-index: 2; flex: 1; max-width: 560px; }
.ms-hero-badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); border-radius: 100px; color: rgba(255,255,255,0.9); font-size: 0.82rem; font-weight: 600; margin-bottom: 20px; backdrop-filter: blur(8px); }
.ms-hero-inner h1 { font-size: 3rem; font-weight: 800; color: #fff; line-height: 1.15; margin: 0 0 20px; }
.ms-grad { background: linear-gradient(135deg, #a5b4fc, #818cf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.ms-hero-sub { font-size: 1rem; color: rgba(255,255,255,0.82); line-height: 1.75; margin: 0 0 28px; }
.ms-hero-tags { display: flex; flex-wrap: wrap; gap: 10px; }
.ms-hero-tags span { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2); border-radius: 100px; color: rgba(255,255,255,0.9); font-size: 0.83rem; font-weight: 500; }

/* HERO VISUAL - Rings */
.ms-hero-visual { position: relative; z-index: 2; flex-shrink: 0; width: 300px; height: 300px; }
.ms-rings-wrap { position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
.ms-ring { position: absolute; border-radius: 50%; border: 1px solid rgba(255,255,255,0.12); top: 50%; left: 50%; transform: translate(-50%,-50%); }
.ms-ring1 { width: 120px; height: 120px; }
.ms-ring2 { width: 200px; height: 200px; border-style: dashed; animation: ms-spin 25s linear infinite; }
.ms-ring3 { width: 280px; height: 280px; animation: ms-spin 40s linear infinite reverse; }
@keyframes ms-spin { to { transform: translate(-50%,-50%) rotate(360deg); } }
.ms-center-badge { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 72px; height: 72px; background: rgba(255,255,255,0.15); backdrop-filter: blur(12px); border: 2px solid rgba(255,255,255,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 1rem; font-weight: 800; z-index: 3; }
.ms-float-tag { position: absolute; padding: 5px 12px; background: rgba(255,255,255,0.16); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.25); border-radius: 100px; color: #fff; font-size: 0.75rem; font-weight: 700; }
.ms-tag1 { top: 10%; left: 55%; }
.ms-tag2 { top: 30%; left: 80%; }
.ms-tag3 { top: 60%; left: 78%; }
.ms-tag4 { top: 75%; left: 50%; }
.ms-tag5 { top: 50%; left: 10%; }

/* STATS */
.ms-stats-strip { position: relative; z-index: 1; background: #fff; border-bottom: 1px solid #e2e8f0; padding: 28px 72px; display: flex; justify-content: center; box-shadow: 0 2px 20px rgba(0,0,0,0.06); }
.ms-stat { flex: 1; text-align: center; padding: 0 24px; border-right: 1px solid #e2e8f0; }
.ms-stat:last-child { border-right: none; }
.ms-stat-num { font-size: 1.8rem; font-weight: 800; color: #4f46e5; line-height: 1.2; }
.ms-stat-label { font-size: 0.8rem; color: #64748b; margin-top: 4px; }

/* BODY */
.ms-body { max-width: 1200px; margin: 0 auto; padding: 0 48px 80px; }
.ms-sec { padding: 72px 0; border-bottom: 1px solid #e2e8f0; }
.ms-sec:last-child { border-bottom: none; }
.ms-sec-dark { background: #f1f5f9; margin: 0 -48px; padding: 72px 48px; }
.ms-sec-alt { background: linear-gradient(135deg, #eef2ff, #f0f4ff); margin: 0 -48px; padding: 72px 48px; }
.ms-sec-hd { text-align: center; margin-bottom: 48px; }
.ms-eyebrow { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #4f46e5; margin-bottom: 10px; }
.ms-sec-title { font-size: 2rem; font-weight: 800; color: #0f172a; margin: 0 0 12px; }
.ms-sec-sub { font-size: 1rem; color: #64748b; line-height: 1.7; max-width: 600px; margin: 0 auto; }
.reveal { opacity: 0; transform: translateY(28px); transition: opacity .6s ease, transform .6s ease; }
.reveal.in { opacity: 1; transform: none; }

/* INTRO */
.ms-intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
.ms-intro-text p { font-size: 0.95rem; color: #475569; line-height: 1.8; margin: 0 0 16px; }
.ms-value-tags { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 20px; }
.ms-vtag { padding: 6px 16px; border-radius: 100px; font-size: 0.83rem; font-weight: 600; }
.ms-vtag-blue { background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe; }
.ms-vtag-purple { background: #faf5ff; color: #7c3aed; border: 1px solid #ddd6fe; }
.ms-vtag-indigo { background: #eef2ff; color: #4f46e5; border: 1px solid #c7d2fe; }
.ms-vtag-violet { background: #f5f3ff; color: #6d28d9; border: 1px solid #ddd6fe; }
.ms-intro-cards { display: flex; flex-direction: column; gap: 16px; }
.ms-kv-card { background: #fff; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; border-radius: 12px; padding: 20px 24px; }
.ms-kv-num { font-size: 1.6rem; font-weight: 800; color: #4f46e5; margin-bottom: 6px; }
.ms-kv-desc { font-size: 0.85rem; color: #64748b; line-height: 1.5; }

/* TARGET */
.ms-target-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 36px; }
.ms-target-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 28px 24px; transition: transform .25s, box-shadow .25s; }
.ms-target-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.1); }
.ms-target-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
.ms-target-title { font-size: 1rem; font-weight: 700; color: #0f172a; margin-bottom: 8px; }
.ms-target-desc { font-size: 0.88rem; color: #64748b; line-height: 1.65; }
.ms-geo-hint { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 28px 32px; }
.ms-geo-title { font-size: 0.9rem; font-weight: 700; color: #0f172a; margin-bottom: 20px; }
.ms-geo-items { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.ms-geo-item { display: flex; flex-direction: column; gap: 4px; flex: 1; min-width: 160px; }
.ms-geo-phase { font-size: 0.72rem; font-weight: 700; color: #4f46e5; text-transform: uppercase; letter-spacing: 0.08em; }
.ms-geo-area { font-size: 1rem; font-weight: 700; color: #0f172a; }
.ms-geo-note { font-size: 0.8rem; color: #64748b; }
.ms-geo-sep { font-size: 1.5rem; color: #4f46e5; flex-shrink: 0; }

/* CAPABILITY */
.ms-cap-grid { display: grid; grid-template-columns: 1.2fr 1fr 1fr; grid-template-rows: auto auto; gap: 20px; }
.ms-cap-main { grid-row: 1 / 3; }
.ms-cap-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 28px 24px; transition: transform .25s, box-shadow .25s; }
.ms-cap-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(79,70,229,0.1); border-color: #a5b4fc; }
.ms-cap-main { border-top: 4px solid #4f46e5; }
.ms-cap-num { font-size: 0.72rem; font-weight: 800; letter-spacing: 0.1em; color: #4f46e5; margin-bottom: 12px; }
.ms-cap-icon { color: #4f46e5; margin-bottom: 12px; }
.ms-cap-title { font-size: 1.2rem; font-weight: 800; color: #0f172a; margin-bottom: 4px; }
.ms-cap-subtitle { font-size: 0.8rem; color: #4f46e5; font-weight: 600; margin-bottom: 12px; }
.ms-cap-desc { font-size: 0.85rem; color: #64748b; line-height: 1.65; }

/* ROADMAP */
.ms-roadmap { display: flex; align-items: stretch; gap: 0; }
.ms-rm-now, .ms-rm-phase { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 28px 24px; flex: 1; display: flex; flex-direction: column; gap: 10px; }
.ms-rm-future { border-top: 3px solid #4f46e5; }
.ms-rm-line { width: 32px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; position: relative; }
.ms-rm-line::after { content: '→'; color: #4f46e5; font-size: 1.2rem; font-weight: 700; }
.ms-rm-badge { display: inline-block; padding: 3px 12px; border-radius: 100px; font-size: 0.75rem; font-weight: 700; background: #eef2ff; color: #4f46e5; border: 1px solid #c7d2fe; align-self: flex-start; }
.ms-rm-now-badge { background: #f0fdf4; color: #059669; border-color: #a7f3d0; }
.ms-rm-future-badge { background: #4f46e5; color: #fff; border-color: #4f46e5; }
.ms-rm-amount { font-size: 1.6rem; font-weight: 800; color: #0f172a; }
.ms-rm-title { font-size: 0.95rem; font-weight: 700; color: #4f46e5; }
.ms-rm-desc { font-size: 0.85rem; color: #64748b; }
.ms-rm-items { display: flex; flex-direction: column; gap: 6px; }
.ms-rm-item { font-size: 0.82rem; color: #64748b; padding-left: 4px; }

/* DIGI CASE */
.ms-case-wrap { display: grid; grid-template-columns: 1.5fr 1fr; gap: 24px; }
.ms-case-main { background: #fff; border: 1px solid #e2e8f0; border-top: 4px solid #4f46e5; border-radius: 20px; padding: 36px; }
.ms-case-tag { display: inline-block; padding: 3px 12px; background: #eef2ff; color: #4f46e5; font-size: 0.75rem; font-weight: 700; border-radius: 100px; border: 1px solid #c7d2fe; margin-bottom: 14px; }
.ms-case-title { font-size: 1.3rem; font-weight: 800; color: #0f172a; margin-bottom: 24px; }
.ms-case-timeline { display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px; }
.ms-ct-item { display: flex; gap: 16px; align-items: flex-start; }
.ms-ct-year { font-size: 0.8rem; font-weight: 800; color: #4f46e5; min-width: 60px; padding-top: 2px; }
.ms-ct-text { font-size: 0.88rem; color: #64748b; line-height: 1.6; }
.ms-ct-key .ms-ct-year { color: #0f172a; }
.ms-ct-key .ms-ct-text { color: #0f172a; }
.ms-case-bg { background: #f8fafc; border-radius: 12px; padding: 20px; }
.ms-case-bg-title { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #4f46e5; margin-bottom: 8px; }
.ms-case-bg p { font-size: 0.88rem; color: #64748b; line-height: 1.7; margin: 0; }
.ms-case-results { background: #fff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 28px; display: flex; flex-direction: column; gap: 16px; }
.ms-result-title { font-size: 0.9rem; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
.ms-result-item { display: flex; align-items: flex-start; gap: 14px; padding: 14px; border-radius: 12px; }
.ms-result-green { background: #f0fdf4; }
.ms-result-blue { background: #eff6ff; }
.ms-result-purple { background: #faf5ff; }
.ms-result-indigo { background: #eef2ff; }
.ms-result-icon { font-size: 1.2rem; flex-shrink: 0; margin-top: 2px; }
.ms-result-label { font-size: 0.9rem; font-weight: 700; color: #0f172a; margin-bottom: 3px; }
.ms-result-sub { font-size: 0.8rem; color: #64748b; }
.ms-digi-quote { background: linear-gradient(135deg, #4f46e5, #6366f1); color: #fff; border-radius: 12px; padding: 16px 20px; font-size: 0.9rem; font-weight: 700; font-style: italic; text-align: center; margin-top: 8px; }

/* ADVANTAGE */
.ms-adv-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.ms-adv-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 28px 24px; transition: transform .25s, box-shadow .25s; }
.ms-adv-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(79,70,229,0.1); border-color: #a5b4fc; }
.ms-adv-icon { font-size: 2rem; margin-bottom: 12px; }
.ms-adv-title { font-size: 1rem; font-weight: 700; color: #0f172a; margin-bottom: 10px; }
.ms-adv-desc { font-size: 0.88rem; color: #64748b; line-height: 1.65; }

/* FOOTER */
.ms-footer { background: #0f172a; padding: 32px 72px; }
.ms-footer-inner { display: flex; justify-content: space-between; align-items: center; }
.ms-footer-brand { color: rgba(255,255,255,0.9); font-weight: 700; font-size: 0.95rem; }
.ms-footer-copy { color: rgba(255,255,255,0.4); font-size: 0.8rem; }

/* RESPONSIVE */
@media (max-width: 900px) {
  .ms-hero { flex-direction: column; padding: 80px 24px 40px; }
  .ms-hero-visual { display: none; }
  .ms-hero-inner h1 { font-size: 2.2rem; }
  .ms-stats-strip { flex-wrap: wrap; padding: 20px 24px; }
  .ms-stat { width: 45%; border-right: none; }
  .ms-body { padding: 0 20px 60px; }
  .ms-sec-dark, .ms-sec-alt { margin: 0 -20px; padding: 48px 20px; }
  .ms-intro-grid { grid-template-columns: 1fr; }
  .ms-target-grid { grid-template-columns: 1fr 1fr; }
  .ms-cap-grid { grid-template-columns: 1fr 1fr; }
  .ms-cap-main { grid-row: auto; }
  .ms-roadmap { flex-direction: column; }
  .ms-rm-line::after { content: '↓'; }
  .ms-case-wrap { grid-template-columns: 1fr; }
  .ms-adv-grid { grid-template-columns: 1fr 1fr; }
  .ms-footer { padding: 24px 20px; }
  .ms-footer-inner { flex-direction: column; gap: 8px; text-align: center; }
}
@media (max-width: 600px) {
  .ms-target-grid, .ms-adv-grid { grid-template-columns: 1fr; }
  .ms-cap-grid { grid-template-columns: 1fr; }
  .ms-geo-items { flex-direction: column; }
}
</style>
