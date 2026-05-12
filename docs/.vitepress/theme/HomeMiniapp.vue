<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  initReveal()
  initTabs()
  initHamburger()
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

function initHamburger() {
  const btn = document.getElementById('nav-hamburger-mn')
  const drawer = document.getElementById('nav-drawer-mn')
  if (!btn || !drawer) return
  btn.addEventListener('click', (e) => {
    e.stopPropagation()
    drawer.classList.toggle('open')
    btn.classList.toggle('open')
  })
  document.addEventListener('click', () => {
    drawer.classList.remove('open')
    btn.classList.remove('open')
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
</script>

<template>
<div class="mn-page">
<div class="mn-mesh-bg"></div>

<!-- NAV -->
<nav class="au-nav">
  <div class="nav-logo">
    <span class="logo-chip">CSI</span>
    中软国际 · 能力库
  </div>
  <div class="nav-links">
    <a href="/zh/">首页</a>
    <a href="/zh/miniapp/" class="active">小程序方案</a>
    <a href="/zh/overseas/">海外布局</a>
    <a href="/zh/business/cms/">解决方案</a>
  </div>
  <button class="nav-cta" onclick="window.location.href='/en/'">English</button>
  <button class="nav-hamburger" id="nav-hamburger-mn" aria-label="菜单">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="nav-drawer" id="nav-drawer-mn">
  <a href="/zh/">首页</a>
  <a href="/zh/miniapp/">小程序方案</a>
  <a href="/zh/overseas/">海外布局</a>
  <a href="/zh/business/cms/">解决方案</a>
  <a href="/en/" class="nav-drawer-lang">English</a>
</div>

<!-- HERO -->
<section class="mn-hero">
  <div class="mn-hero-bg"></div>
  <div class="mn-hero-particles">
    <span></span><span></span><span></span><span></span><span></span><span></span>
  </div>
  <div class="mn-hero-inner">
    <div class="mn-hero-badge">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
      Super App · 小程序整体方案
    </div>
    <h1>小程序 <span class="mn-grad">Super App</span><br>全栈解决方案</h1>
    <p class="mn-hero-sub">金融支付 · 生活服务 · 智慧城市 — 基于 Super App 平台，覆盖多行业场景的端到端小程序定制交付体系</p>
    <div class="mn-hero-tags">
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg> 金融 &amp; 移动支付</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg> 生活服务类</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10z"/></svg> 智慧城市类</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> 端到端交付保障</span>
    </div>
  </div>
</section>

<!-- STATS STRIP -->
<div class="mn-stats-strip">
  <div class="mn-stat-item">
    <div class="mn-stat-num"><span class="mn-counter" data-target="10" data-suffix="+">0+</span></div>
    <div class="mn-stat-label">小程序业务类型</div>
  </div>
  <div class="mn-stat-item">
    <div class="mn-stat-num"><span class="mn-counter" data-target="3" data-suffix="">0</span></div>
    <div class="mn-stat-label">大行业场景覆盖</div>
  </div>
  <div class="mn-stat-item">
    <div class="mn-stat-num"><span class="mn-counter" data-target="70" data-suffix="+">0+</span></div>
    <div class="mn-stat-label">华为手机端覆盖城市</div>
  </div>
  <div class="mn-stat-item">
    <div class="mn-stat-num"><span class="mn-counter" data-target="23" data-suffix="">0</span></div>
    <div class="mn-stat-label">运营商合作签约数</div>
  </div>
  <div class="mn-stat-item">
    <div class="mn-stat-num"><span class="mn-counter" data-target="5" data-suffix="">0</span></div>
    <div class="mn-stat-label">端到端交付阶段检查点</div>
  </div>
</div>

<!-- PAGE BODY -->
<div class="mn-body">

  <!-- 核心价值 -->
  <section class="mn-sec reveal" id="value">
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Core Value · 核心价值</div>
      <h2 class="mn-sec-title">为什么选择 Super App 小程序</h2>
    </div>
    <div class="mn-compare-grid">
      <div class="mn-compare-card mn-compare-plain">
        <div class="mn-compare-icon" style="background:linear-gradient(135deg,#475569,#64748b);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 7h6M9 11h6M9 15h4"/></svg>
        </div>
        <h3>原生 App</h3>
        <p>功能完整、体验好</p>
        <div class="mn-compare-divider"></div>
        <div class="mn-compare-cons">
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> iOS/Android 双端独立开发，成本高</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> 发版须过应用商店审核，更新周期长</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> 用户需主动下载，获客成本高</span>
        </div>
      </div>
      <div class="mn-compare-card mn-compare-plain">
        <div class="mn-compare-icon" style="background:linear-gradient(135deg,#475569,#64748b);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10z"/></svg>
        </div>
        <h3>纯 H5 / WebApp</h3>
        <p>跨平台灵活，维护成本低</p>
        <div class="mn-compare-divider"></div>
        <div class="mn-compare-cons">
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> 无法调用生物识别、NFC 等原生能力</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> 性能与体验受限，用户留存差</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> 缺乏数据整合，无法打通宿主生态</span>
        </div>
      </div>
      <div class="mn-compare-card mn-compare-highlight">
        <div class="mn-compare-icon" style="background:linear-gradient(135deg,#1d4ed8,#7c3aed);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        </div>
        <h3>Super App 小程序</h3>
        <p>无需独立下载，即点即用</p>
        <div class="mn-compare-divider"></div>
        <div class="mn-compare-pros">
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> 统一身份认证，一次登录全服务</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> 即时发布，无须应用商店审核</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> 原生能力直调：生物识别 / LBS / NFC</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> 数据整合：打通宿主 App 用户与行为数据</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 架构总览 -->
  <section class="mn-sec reveal" id="arch">
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Architecture · 能力架构</div>
      <h2 class="mn-sec-title">四层能力架构全景</h2>
    </div>
    <div class="mn-arch-wrap">
      <div class="mn-arch-layer" style="--lc:#3b82f6;--lb:rgba(59,130,246,0.13);">
        <div class="mn-arch-label">
          <div class="mn-arch-cn">终端接入层</div>
          <div class="mn-arch-en">CLIENT</div>
        </div>
        <div class="mn-arch-tags">
          <span>Android SDK</span><span>iOS SDK</span><span>小程序运行时</span><span>原生 JS API</span><span>H5 容器</span><span>响应式布局</span>
        </div>
      </div>
      <div class="mn-arch-arrow">▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾</div>
      <div class="mn-arch-layer" style="--lc:#a78bfa;--lb:rgba(167,139,250,0.13);">
        <div class="mn-arch-label">
          <div class="mn-arch-cn">平台能力层</div>
          <div class="mn-arch-en">PLATFORM</div>
        </div>
        <div class="mn-arch-tags">
          <span>统一身份认证</span><span>移动支付</span><span>LBS 定位</span><span>推送通知</span><span>生物识别</span><span>小程序沙箱</span><span>数据分析</span><span>社交分享</span><span>安全加固</span>
        </div>
      </div>
      <div class="mn-arch-arrow">▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾</div>
      <div class="mn-arch-layer" style="--lc:#06b6d4;--lb:rgba(6,182,212,0.13);">
        <div class="mn-arch-label">
          <div class="mn-arch-cn">应用服务层</div>
          <div class="mn-arch-en">APPLICATION</div>
        </div>
        <div class="mn-arch-tags">
          <span>电子钱包</span><span>理财投资</span><span>财富管理</span><span>虚拟货币</span><span>消费金融</span><span>保险服务</span><span>智慧健身</span><span>智慧导览</span><span>数字藏品</span><span>车辆管理</span><span>智慧城市</span><span>个性化推荐</span>
        </div>
      </div>
      <div class="mn-arch-arrow">▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾</div>
      <div class="mn-arch-layer" style="--lc:#f59e0b;--lb:rgba(245,158,11,0.13);">
        <div class="mn-arch-label">
          <div class="mn-arch-cn">基础设施层</div>
          <div class="mn-arch-en">INFRA</div>
        </div>
        <div class="mn-arch-tags">
          <span>华为公有云</span><span>华为混合云</span><span>On-premise</span><span>Azure</span><span>AWS</span><span>Google Cloud</span><span>APP Cube 平台</span><span>银行 / MM 后台</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 三大类小程序 tabs -->
  <section class="mn-sec reveal" id="scenarios">
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Scenarios · 应用场景</div>
      <h2 class="mn-sec-title">三大类小程序场景</h2>
    </div>

    <div class="mn-tabs-wrap">
      <div class="mn-tab-bar">
        <button class="mn-tab active" data-panel="tab-fin">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
          金融 &amp; 支付类
        </button>
        <button class="mn-tab" data-panel="tab-life">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
          生活服务类
        </button>
        <button class="mn-tab" data-panel="tab-city">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10z"/></svg>
          智慧城市类
        </button>
      </div>

      <!-- 金融 -->
      <div class="mn-panel active" id="tab-fin">
        <div class="mn-panel-intro">
          基于 Mobile Money App 基线，覆盖电子钱包、理财投资、个人财富管理、虚拟货币等核心金融场景，支持多语言 GUI 定制，配套完整合规安全体系。
        </div>
        <div class="mn-cards-grid">
          <div class="mn-card mn-card-blue">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div>
            <h4>电子钱包</h4>
            <p>账户充值、二维码支付、转账，内置多重安全设置（MPIN / 生物识别），支持交易历史查看。</p>
          </div>
          <div class="mn-card mn-card-blue">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div>
            <h4>理财投资</h4>
            <p>多样化产品展示，在线交易操作，实时收益查看，投资组合管理，MPIN 二次确认保障安全。</p>
          </div>
          <div class="mn-card mn-card-blue">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg></div>
            <h4>个人财富管理</h4>
            <p>收支跟踪、预算管理、财务报告，按分类汇总支出/收入，帮助用户全面掌控财务状况。</p>
          </div>
          <div class="mn-card mn-card-blue">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
            <h4>虚拟货币交易</h4>
            <p>多币种资产管理，K 线实时行情，一键买卖，MPIN 安全确认，持仓记录清晰可查。</p>
          </div>
          <div class="mn-card mn-card-blue">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
            <h4>消费金融</h4>
            <p>信用额度管理、分期还款、账单查询，结合用户画像实现个性化授信与风控策略。</p>
          </div>
          <div class="mn-card mn-card-blue">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
            <h4>保险服务</h4>
            <p>保险产品展示与购买、理赔申请、保单管理，覆盖健康险、财产险等多险种场景。</p>
          </div>
        </div>
        <!-- 虚拟货币截图展示 -->
        <div class="mn-screenshots-row">
          <div class="mn-ss-item">
            <img src="/solutions/miniapp/images/virtual-currency-list.jpg" alt="虚拟货币列表" />
            <div class="mn-ss-cap">币种列表</div>
          </div>
          <div class="mn-ss-item">
            <img src="/solutions/miniapp/images/virtual-currency-detail.jpg" alt="行情走势" />
            <div class="mn-ss-cap">行情走势</div>
          </div>
          <div class="mn-ss-item">
            <img src="/solutions/miniapp/images/virtual-currency-buy.jpg" alt="购买确认" />
            <div class="mn-ss-cap">购买确认</div>
          </div>
          <div class="mn-ss-item">
            <img src="/solutions/miniapp/images/virtual-currency-sell.jpg" alt="售卖操作" />
            <div class="mn-ss-cap">售卖操作</div>
          </div>
          <div class="mn-ss-item">
            <img src="/solutions/miniapp/images/wealth-mgmt.png" alt="财富管理" />
            <div class="mn-ss-cap">财富管理</div>
          </div>
        </div>
      </div>

      <!-- 生活 -->
      <div class="mn-panel" id="tab-life">
        <div class="mn-panel-intro">
          覆盖智慧健身、导览、预订、数字藏品、电商交易等高频生活场景，快速接入 Super App 生态，触达更广用户群体。
        </div>
        <div class="mn-cards-grid">
          <div class="mn-card mn-card-purple">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg></div>
            <h4>智慧健身</h4>
            <p>运动计划、健身数据追踪、课程预约，LBS 推荐附近场馆，激励用户坚持健身目标。</p>
          </div>
          <div class="mn-card mn-card-purple">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10z"/></svg></div>
            <h4>智慧导览</h4>
            <p>景区/园区地图导航，兴趣点推荐，AR 导览辅助，语音讲解一键触发，提升游客体验。</p>
          </div>
          <div class="mn-card mn-card-purple">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
            <h4>智慧预订</h4>
            <p>酒店/餐厅/场馆在线预订，日历选座，即时确认，支持会员积分抵扣，闭环订单管理。</p>
          </div>
          <div class="mn-card mn-card-purple">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div>
            <h4>数字藏品</h4>
            <p>NFT/数字藏品展示、限量发行、购买与转赠，区块链存证保障版权真实性。</p>
          </div>
          <div class="mn-card mn-card-purple">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></div>
            <h4>电商交易</h4>
            <p>商品展示、购物车、在线支付，结合社交分享裂变传播，提升用户活跃与 GMV 转化。</p>
          </div>
          <div class="mn-card mn-card-purple">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
            <h4>用户激励</h4>
            <p>积分奖励、签到、任务系统，配合收藏、分享、捐款等社交化功能，提升用户黏性与留存。</p>
          </div>
        </div>
      </div>

      <!-- 城市 -->
      <div class="mn-panel" id="tab-city">
        <div class="mn-panel-intro">
          车辆管理、城市公共服务、用户行为分析与个性化推荐，赋能城市数字化治理与居民精细化服务。
        </div>
        <div class="mn-cards-grid">
          <div class="mn-card mn-card-cyan">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></div>
            <h4>车辆管理</h4>
            <p>车辆注册、年检提醒、违章查询，结合 LBS 实现智能停车引导，接入城市交通数据平台。</p>
          </div>
          <div class="mn-card mn-card-cyan">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><rect x="9" y="13" width="6" height="8"/></svg></div>
            <h4>智慧城市服务</h4>
            <p>政务事项在线办理、公用事业缴费、城市公告推送，实现一窗通办，提升居民服务满意度。</p>
          </div>
          <div class="mn-card mn-card-cyan">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <h4>客户分析</h4>
            <p>用户行为埋点、标签画像分析，帮助运营方深入理解用户，制定精准营销策略。</p>
          </div>
          <div class="mn-card mn-card-cyan">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
            <h4>个性化推荐</h4>
            <p>AI 推荐引擎，根据用户画像精准触达，提升活跃度与转化率，构建智慧运营闭环。</p>
          </div>
          <div class="mn-card mn-card-cyan">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg></div>
            <h4>社交理财</h4>
            <p>理财社区，用户分享收益心得，跟单投资，联合购买，构建金融社交生态。</p>
          </div>
          <div class="mn-card mn-card-cyan">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
            <h4>智慧园区</h4>
            <p>园区门禁、会议预约、设施报修、访客管理，提升园区运营效率与入驻企业体验。</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 端到端交付 -->
  <section class="mn-sec reveal" id="delivery">
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Delivery · 交付体系</div>
      <h2 class="mn-sec-title">端到端交付体系</h2>
    </div>
    <div class="mn-delivery-intro">
      从 M 平台部署、SDK 集成到小程序发布上架，完整覆盖「项目→需求→开发→测试→集成→发布」全链路，配套多场景测试平台与交付度量看板。
    </div>

    <!-- 流程步骤 -->
    <div class="mn-flow-steps">
      <div class="mn-flow-step">
        <div class="mn-flow-num" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">01</div>
        <div class="mn-flow-content">
          <h4>M 平台部署</h4>
          <p>公有云资源申请、项目资源开通，M 平台安装部署与初始化配置，一键拉通小程序开发环境。</p>
        </div>
      </div>
      <div class="mn-flow-arrow">→</div>
      <div class="mn-flow-step">
        <div class="mn-flow-num" style="background:linear-gradient(135deg,#4f46e5,#818cf8);">02</div>
        <div class="mn-flow-content">
          <h4>SDK 集成</h4>
          <p>Android / iOS SDK 获取与集成，宿主 App 初始化，仿真器模拟调测，确保运行环境一致。</p>
        </div>
      </div>
      <div class="mn-flow-arrow">→</div>
      <div class="mn-flow-step">
        <div class="mn-flow-num" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">03</div>
        <div class="mn-flow-content">
          <h4>小程序开发</h4>
          <p>在线开发环境，原生 JS API 开发调用，支持仿真器实时预览，快速迭代前端界面与业务逻辑。</p>
        </div>
      </div>
      <div class="mn-flow-arrow">→</div>
      <div class="mn-flow-step">
        <div class="mn-flow-num" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">04</div>
        <div class="mn-flow-content">
          <h4>测试验证</h4>
          <p>兼容性 / 可靠性 / 自动化 / 安全 / 性能五维测试，KCP3 出口评估，多场景测试平台覆盖。</p>
        </div>
      </div>
      <div class="mn-flow-arrow">→</div>
      <div class="mn-flow-step">
        <div class="mn-flow-num" style="background:linear-gradient(135deg,#059669,#10b981);">05</div>
        <div class="mn-flow-content">
          <h4>安全加固与发布</h4>
          <p>小程序安全加固，发布上架，无须经过应用商店，即时触达用户，交付度量看板可视化进度。</p>
        </div>
      </div>
    </div>

    <!-- 两图 -->
    <div class="mn-two-imgs">
      <div class="mn-img-card">
        <img src="/solutions/miniapp/images/delivery-flow.png" alt="端到端交付流程" />
        <div class="mn-img-cap">端到端交付流程</div>
      </div>
      <div class="mn-img-card">
        <img src="/solutions/miniapp/images/customization-flow.png" alt="标准化产品定制流程" />
        <div class="mn-img-cap">标准化产品定制流程</div>
      </div>
    </div>

    <!-- 运维模式 -->
    <div class="mn-ops-grid">
      <div class="mn-ops-card">
        <div class="mn-ops-icon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
        </div>
        <h4>Prime Contract</h4>
        <p>中软国际作为主承包商，提供端到端解决方案，包含软件 License、集成、管理、专业服务及带 SLA 的维保。</p>
      </div>
      <div class="mn-ops-card">
        <div class="mn-ops-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        </div>
        <h4>Sub Contract</h4>
        <p>作为子承包商配合客户体系，提供专项定制开发、系统集成及运维赋能，灵活嵌入客户现有合作框架。</p>
      </div>
      <div class="mn-ops-card">
        <div class="mn-ops-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/></svg>
        </div>
        <h4>运维赋能</h4>
        <p>外购件运维赋能流程，接收问题单 → 诊断 → 解决并验证，与客户及上游产品方三方联动关闭问题。</p>
      </div>
    </div>
  </section>

  <!-- UCD 设计 + 项目管理 -->
  <section class="mn-sec reveal" id="capability">
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Capability · 交付能力</div>
      <h2 class="mn-sec-title">设计与项目管理能力</h2>
    </div>

    <div class="mn-cap-grid">
      <!-- UCD -->
      <div class="mn-cap-block">
        <div class="mn-cap-title">
          <div class="mn-cap-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          UCD 设计能力
        </div>
        <div class="mn-cap-items">
          <div class="mn-cap-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span><strong>全流程 UCD 设计</strong>：需求分析 → 交互 / 视觉设计 → 可用性测试 → 设计复盘，六阶段闭环</span>
          </div>
          <div class="mn-cap-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span><strong>3D 可视化大屏</strong>：结合 Unity3D / ThreeJS，煤矿、智慧园区、电厂等项目均有交付案例</span>
          </div>
          <div class="mn-cap-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span><strong>数字人设计</strong>：参与华为虚拟数字人"云笙"研制，输出人物模型、骨骼绑定等 3D 技术</span>
          </div>
          <div class="mn-cap-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span><strong>专家评估 / 用户体验测评</strong>：AQ 测试 + 测试报告，量化设计改进效果</span>
          </div>
        </div>
      </div>

      <!-- 项目管理 -->
      <div class="mn-cap-block">
        <div class="mn-cap-title">
          <div class="mn-cap-icon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          </div>
          项目管理能力
        </div>
        <div class="mn-cap-items">
          <div class="mn-cap-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span><strong>进度管理</strong>：里程碑制定、计划排期、变更评审机制，保障计划可控</span>
          </div>
          <div class="mn-cap-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span><strong>沟通管理</strong>：晨会 + 评审 + 专题 + 总结 + 质量会议，AAR 机制沉淀经验</span>
          </div>
          <div class="mn-cap-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span><strong>风险管理</strong>：风险跟踪表 + 例会审视 + 邮件日追踪，确保风险全程闭环</span>
          </div>
          <div class="mn-cap-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span><strong>质量策划</strong>：现状分析 → 目标策划 → 过程裁剪，输出项目质量计划</span>
          </div>
          <div class="mn-cap-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span><strong>流程看护</strong>：CP1/CP2/CP3 全周期检查点，准出准入标准，度量分析</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 沟通管理截图 -->
    <div class="mn-cap-img reveal">
      <img src="/solutions/miniapp/images/communication-mgmt.png" alt="项目沟通管理体系" />
      <div class="mn-img-cap">项目沟通管理体系</div>
    </div>
  </section>

</div><!-- end mn-body -->

<footer class="au-footer">
  <span class="footer-l">中软国际 · <span>ChinaSofti</span></span>
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
.mn-hero-tags {
  display: flex; flex-wrap: wrap; gap: 10px;
}
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

/* ── REVEAL ANIMATION ── */
.reveal { opacity: 0; transform: translateY(28px); transition: opacity .6s ease, transform .6s ease; }
.reveal.in { opacity: 1; transform: translateY(0); }

/* ── COMPARE CARDS ── */
.mn-compare-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.mn-compare-card {
  background: var(--card-bg); border: 1px solid rgba(29,78,216,0.09);
  border-radius: var(--radius); padding: 32px 28px;
  box-shadow: var(--shadow); backdrop-filter: blur(8px);
  transition: all .3s;
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
.mn-arch-layer {
  display: flex; align-items: flex-start; gap: 20px; padding: 16px 24px;
  background: var(--lb); border-left: 4px solid var(--lc);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.mn-arch-wrap .mn-arch-layer:first-child { border-radius: 12px 12px 0 0; }
.mn-arch-wrap .mn-arch-layer:last-child { border-radius: 0 0 12px 12px; border-bottom: none; }
.mn-arch-label { min-width: 80px; }
.mn-arch-cn { font-size: 0.88rem; font-weight: 800; color: var(--text1); }
.mn-arch-en { font-size: 0.6rem; color: var(--text3); letter-spacing: 0.1em; text-transform: uppercase; margin-top: 3px; }
.mn-arch-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.mn-arch-tags span {
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12);
  border-radius: 8px; padding: 5px 14px; font-size: 0.8rem; color: var(--text2);
}
.dark .mn-arch-tags span { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.1); }
:root:not(.dark) .mn-arch-layer { background: var(--lb); }
:root:not(.dark) .mn-arch-tags span { background: rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.07); }
.mn-arch-arrow {
  text-align: center; color: #94a3b8; font-size: 0.8rem; letter-spacing: 3px;
  padding: 6px 0; background: var(--card-bg);
}

/* ── TABS ── */
.mn-tabs-wrap { }
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
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  display: block;
}
.mn-ss-cap {
  font-size: 0.78rem; color: var(--text3); text-align: center; margin-top: 8px; font-weight: 600;
}

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
.mn-flow-arrow {
  font-size: 1.4rem; color: #94a3b8; margin-top: 12px; padding: 0 4px; flex-shrink: 0;
}
.mn-two-imgs {
  display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 40px;
}
.mn-img-card img {
  width: 100%; border-radius: 12px; border: 1px solid var(--border);
  box-shadow: var(--shadow); display: block;
}
.mn-img-cap {
  font-size: 0.82rem; color: var(--text3); text-align: center;
  margin-top: 10px; font-weight: 600;
}
.mn-ops-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.mn-ops-card {
  background: var(--card-bg); border-radius: var(--radius); padding: 28px 24px;
  box-shadow: var(--shadow); border: 1px solid rgba(29,78,216,0.08);
  transition: all .3s; backdrop-filter: blur(8px);
}
.mn-ops-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }
.mn-ops-icon {
  width: 50px; height: 50px; border-radius: 13px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 16px; box-shadow: 0 6px 16px rgba(0,0,0,0.12);
}
.mn-ops-card h4 { font-size: 1rem; font-weight: 800; color: var(--text1); margin: 0 0 8px; }
.mn-ops-card p { font-size: 0.86rem; color: var(--text2); line-height: 1.7; margin: 0; }

/* ── CAPABILITY ── */
.mn-cap-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-bottom: 36px; }
.mn-cap-block {
  background: var(--card-bg); border-radius: var(--radius); padding: 32px 28px;
  box-shadow: var(--shadow); border: 1px solid rgba(29,78,216,0.08); backdrop-filter: blur(8px);
}
.mn-cap-title {
  display: flex; align-items: center; gap: 14px;
  font-size: 1.05rem; font-weight: 800; color: var(--text1); margin-bottom: 22px;
}
.mn-cap-icon {
  width: 40px; height: 40px; border-radius: 10px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}
.mn-cap-items { display: flex; flex-direction: column; gap: 14px; }
.mn-cap-item {
  display: flex; align-items: flex-start; gap: 10px;
  font-size: 0.87rem; color: var(--text2); line-height: 1.6;
}
.mn-cap-item svg { flex-shrink: 0; margin-top: 3px; }
.mn-cap-img { margin-top: 4px; }
.mn-cap-img img {
  width: 100%; border-radius: 12px; border: 1px solid var(--border);
  box-shadow: var(--shadow); display: block;
}

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
  .mn-two-imgs { grid-template-columns: 1fr; }
  .mn-ops-grid { grid-template-columns: 1fr; }
  .mn-cap-grid { grid-template-columns: 1fr; }
  .mn-tab-bar { flex-direction: column; width: 100%; }
  .mn-tab-bar .mn-tab { justify-content: center; }
}
@media (max-width: 560px) {
  .mn-cards-grid { grid-template-columns: 1fr; }
  .mn-sec-title { font-size: 1.4rem; }
}
</style>
