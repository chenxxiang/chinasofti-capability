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

      <!-- Layer 1 -->
      <div class="mn-arch-card" style="--lc:#3b82f6;--lg:linear-gradient(135deg,#1d4ed8,#3b82f6);--lbg:rgba(59,130,246,0.06);--lbd:rgba(59,130,246,0.22);">
        <div class="mn-arch-card-left">
          <div class="mn-arch-num-badge">01</div>
          <div class="mn-arch-layer-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg></div>
          <div class="mn-arch-layer-text">
            <div class="mn-arch-layer-cn">终端接入层</div>
            <div class="mn-arch-layer-en">CLIENT LAYER</div>
          </div>
        </div>
        <div class="mn-arch-card-body">
          <div class="mn-arch-group">
            <div class="mn-arch-group-lbl" style="color:#3b82f6;">移动端</div>
            <div class="mn-arch-chips"><span>Android SDK</span><span>iOS SDK</span><span>小程序运行时</span><span>原生 JS API</span></div>
          </div>
          <div class="mn-arch-group">
            <div class="mn-arch-group-lbl" style="color:#3b82f6;">Web 端</div>
            <div class="mn-arch-chips"><span>H5 容器</span><span>响应式布局</span><span>PWA 支持</span></div>
          </div>
        </div>
      </div>

      <div class="mn-arch-conn">
        <div class="mn-arch-conn-line" style="--cc:#3b82f6;"></div>
        <div class="mn-arch-conn-dot" style="background:#3b82f6;"></div>
        <div class="mn-arch-conn-line" style="--cc:#a78bfa;"></div>
      </div>

      <!-- Layer 2 -->
      <div class="mn-arch-card" style="--lc:#a78bfa;--lg:linear-gradient(135deg,#7c3aed,#a78bfa);--lbg:rgba(167,139,250,0.06);--lbd:rgba(167,139,250,0.22);">
        <div class="mn-arch-card-left">
          <div class="mn-arch-num-badge">02</div>
          <div class="mn-arch-layer-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
          <div class="mn-arch-layer-text">
            <div class="mn-arch-layer-cn">平台能力层</div>
            <div class="mn-arch-layer-en">PLATFORM LAYER</div>
          </div>
        </div>
        <div class="mn-arch-card-body">
          <div class="mn-arch-group">
            <div class="mn-arch-group-lbl" style="color:#a78bfa;">安全 &amp; 身份</div>
            <div class="mn-arch-chips"><span>统一身份认证</span><span>生物识别</span><span>安全加固</span><span>小程序沙箱</span></div>
          </div>
          <div class="mn-arch-group">
            <div class="mn-arch-group-lbl" style="color:#a78bfa;">服务能力</div>
            <div class="mn-arch-chips"><span>移动支付</span><span>LBS 定位</span><span>推送通知</span><span>数据分析</span><span>社交分享</span></div>
          </div>
        </div>
      </div>

      <div class="mn-arch-conn">
        <div class="mn-arch-conn-line" style="--cc:#a78bfa;"></div>
        <div class="mn-arch-conn-dot" style="background:#a78bfa;"></div>
        <div class="mn-arch-conn-line" style="--cc:#06b6d4;"></div>
      </div>

      <!-- Layer 3 -->
      <div class="mn-arch-card" style="--lc:#06b6d4;--lg:linear-gradient(135deg,#0891b2,#06b6d4);--lbg:rgba(6,182,212,0.06);--lbd:rgba(6,182,212,0.22);">
        <div class="mn-arch-card-left">
          <div class="mn-arch-num-badge">03</div>
          <div class="mn-arch-layer-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>
          <div class="mn-arch-layer-text">
            <div class="mn-arch-layer-cn">应用服务层</div>
            <div class="mn-arch-layer-en">APPLICATION LAYER</div>
          </div>
        </div>
        <div class="mn-arch-card-body">
          <div class="mn-arch-group">
            <div class="mn-arch-group-lbl" style="color:#06b6d4;">金融类</div>
            <div class="mn-arch-chips"><span>电子钱包</span><span>理财投资</span><span>财富管理</span><span>虚拟货币</span><span>消费金融</span><span>保险服务</span></div>
          </div>
          <div class="mn-arch-group">
            <div class="mn-arch-group-lbl" style="color:#06b6d4;">生活 &amp; 城市类</div>
            <div class="mn-arch-chips"><span>智慧健身</span><span>智慧导览</span><span>数字藏品</span><span>车辆管理</span><span>智慧城市</span><span>个性化推荐</span></div>
          </div>
        </div>
      </div>

      <div class="mn-arch-conn">
        <div class="mn-arch-conn-line" style="--cc:#06b6d4;"></div>
        <div class="mn-arch-conn-dot" style="background:#06b6d4;"></div>
        <div class="mn-arch-conn-line" style="--cc:#f59e0b;"></div>
      </div>

      <!-- Layer 4 -->
      <div class="mn-arch-card" style="--lc:#f59e0b;--lg:linear-gradient(135deg,#d97706,#f59e0b);--lbg:rgba(245,158,11,0.06);--lbd:rgba(245,158,11,0.22);">
        <div class="mn-arch-card-left">
          <div class="mn-arch-num-badge">04</div>
          <div class="mn-arch-layer-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></div>
          <div class="mn-arch-layer-text">
            <div class="mn-arch-layer-cn">基础设施层</div>
            <div class="mn-arch-layer-en">INFRASTRUCTURE LAYER</div>
          </div>
        </div>
        <div class="mn-arch-card-body">
          <div class="mn-arch-group">
            <div class="mn-arch-group-lbl" style="color:#f59e0b;">云平台</div>
            <div class="mn-arch-chips"><span>华为公有云</span><span>华为混合云</span><span>On-premise</span><span>Azure</span><span>AWS</span><span>Google Cloud</span></div>
          </div>
          <div class="mn-arch-group">
            <div class="mn-arch-group-lbl" style="color:#f59e0b;">业务平台</div>
            <div class="mn-arch-chips"><span>APP Cube 平台</span><span>银行 / MM 后台</span><span>第三方 API</span></div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- 四大类小程序方案目录 -->
  <section class="mn-sec reveal" id="scenarios">
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Directory · 方案目录</div>
      <h2 class="mn-sec-title">四大类小程序方案</h2>
    </div>

    <!-- 目录跳转横幅 -->
    <a href="/zh/business/cms/" class="mn-dir-banner" target="_blank" rel="noopener">
      <div class="mn-dir-banner-left">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
        <div>
          <div class="mn-dir-banner-title">浏览完整解决方案目录</div>
          <div class="mn-dir-banner-sub">16 个模块方案 · 含概览、方案、报价、DEMO</div>
        </div>
      </div>
      <div class="mn-dir-banner-arrow">
        前往目录
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    </a>

    <div class="mn-tabs-wrap">
      <div class="mn-tab-bar">
        <button class="mn-tab active" data-panel="tab-biz">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
          业务平台
        </button>
        <button class="mn-tab" data-panel="tab-life">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
          生活类
        </button>
        <button class="mn-tab" data-panel="tab-fin">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
          金融类
        </button>
        <button class="mn-tab" data-panel="tab-social">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          社交娱乐类
        </button>
      </div>

      <!-- 业务平台 -->
      <div class="mn-panel active" id="tab-biz">
        <div class="mn-panel-intro">
          覆盖内容分发、积分激励、IoT 接入、小程序迁移、AI 智能体、餐饮聚合等企业核心业务场景，提供完整端到端方案。
        </div>
        <div class="mn-dir-grid">
          <a href="/zh/business/cms/" class="mn-dir-card mn-dir-blue" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M15 10l4.553-2.069A1 1 0 0 1 21 8.87v6.26a1 1 0 0 1-1.447.894L15 14"/><rect x="2" y="6" width="13" height="12" rx="2"/></svg></div>
            <div class="mn-dir-info">
              <h4>内容分发平台</h4>
              <p>多端 CMS · 直播 · 版权管理</p>
            </div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href="/zh/business/loyalty/" class="mn-dir-card mn-dir-blue" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
            <div class="mn-dir-info">
              <h4>积分激励平台</h4>
              <p>积分体系 · 任务激励 · 用户忠诚度</p>
            </div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href="/zh/business/iot/" class="mn-dir-card mn-dir-blue" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg></div>
            <div class="mn-dir-info">
              <h4>物联网平台</h4>
              <p>IoT 设备接入 · 智能监控 · 数据采集</p>
            </div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href="/zh/business/migration/" class="mn-dir-card mn-dir-blue" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18" stroke-width="2.5" stroke-linecap="round"/></svg></div>
            <div class="mn-dir-info">
              <h4>企业小程序方案</h4>
              <p>华为/蚂蚁平台 · 迁移交付 · 全流程</p>
            </div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href="/zh/business/ai-agent/" class="mn-dir-card mn-dir-blue" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg></div>
            <div class="mn-dir-info">
              <h4>AI 智能体</h4>
              <p>智能问答 · 自动化流程 · RAG 知识库</p>
            </div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href="/zh/business/ordering/" class="mn-dir-card mn-dir-blue" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg></div>
            <div class="mn-dir-info">
              <h4>餐饮点餐聚合平台</h4>
              <p>多品牌聚合 · 堂食外卖 · 订单管理</p>
            </div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
        </div>
      </div>

      <!-- 生活类 -->
      <div class="mn-panel" id="tab-life">
        <div class="mn-panel-intro">
          覆盖 EV 充电、交通出行、电商购物、餐饮、票务等高频生活场景，快速接入 Super App 生态，触达更广用户群体。
        </div>
        <div class="mn-dir-grid">
          <a href="/zh/lifestyle/charging/" class="mn-dir-card mn-dir-purple" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"/><line x1="23" y1="13" x2="23" y2="11"/><polyline points="11 6 7 12 13 12 9 18"/></svg></div>
            <div class="mn-dir-info">
              <h4>充电平台</h4>
              <p>EV 充电网络 · 桩管理 · 扫码支付</p>
            </div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href="/zh/lifestyle/transit/" class="mn-dir-card mn-dir-purple" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></div>
            <div class="mn-dir-info">
              <h4>交通卡</h4>
              <p>公交/地铁 · NFC 支付 · 乘车码</p>
            </div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href="/zh/lifestyle/ecommerce/" class="mn-dir-card mn-dir-purple" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></div>
            <div class="mn-dir-info">
              <h4>电商交易平台</h4>
              <p>商品管理 · 购物车 · 在线支付</p>
            </div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href="/zh/lifestyle/catering/" class="mn-dir-card mn-dir-purple" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg></div>
            <div class="mn-dir-info">
              <h4>餐饮点餐聚合平台</h4>
              <p>外卖堂食一体 · 多门店聚合</p>
            </div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href="/zh/lifestyle/ticketing/" class="mn-dir-card mn-dir-purple" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z"/></svg></div>
            <div class="mn-dir-info">
              <h4>票务系统</h4>
              <p>演出/景区 · 选座 · 电子票核验</p>
            </div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
        </div>
      </div>

      <!-- 金融类 -->
      <div class="mn-panel" id="tab-fin">
        <div class="mn-panel-intro">
          基于合规安全体系，覆盖区块链存证、财富管理投资、E-KYC 身份核验等核心金融场景，支持多语言 GUI 定制。
        </div>
        <div class="mn-dir-grid mn-dir-grid-3">
          <a href="/zh/finance/blockchain/" class="mn-dir-card mn-dir-cyan" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="12" y1="16" x2="12.01" y2="16" stroke-width="3" stroke-linecap="round"/></svg></div>
            <div class="mn-dir-info">
              <h4>区块链平台集成</h4>
              <p>链上存证 · 数字资产 · 智能合约</p>
            </div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href="/zh/finance/wealth/" class="mn-dir-card mn-dir-cyan" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div>
            <div class="mn-dir-info">
              <h4>财富管理</h4>
              <p>投资理财 · 组合管理 · 收益追踪</p>
            </div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href="/zh/finance/ekyc/" class="mn-dir-card mn-dir-cyan" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
            <div class="mn-dir-info">
              <h4>E-KYC</h4>
              <p>身份核验 · 人脸识别 · 合规认证</p>
            </div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
        </div>
      </div>

      <!-- 社交娱乐类 -->
      <div class="mn-panel" id="tab-social">
        <div class="mn-panel-intro">
          即时通讯与游戏接入，打造高互动社交娱乐生态，支持私信、群聊、直播互动、游戏竞技等场景深度集成。
        </div>
        <div class="mn-dir-grid mn-dir-grid-2">
          <a href="/zh/social/im/" class="mn-dir-card mn-dir-amber" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
            <div class="mn-dir-info">
              <h4>即时通讯平台 IM</h4>
              <p>私信群聊 · 红包 · 直播互动</p>
            </div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href="/zh/social/game/" class="mn-dir-card mn-dir-amber" target="_blank" rel="noopener">
            <div class="mn-dir-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><circle cx="15" cy="11" r="1"/><circle cx="18" cy="13" r="1"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.556 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.444-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg></div>
            <div class="mn-dir-info">
              <h4>游戏接入与管理平台</h4>
              <p>游戏中心 · 积分竞技 · 运营后台</p>
            </div>
            <svg class="mn-dir-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
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

    <!-- CI/CD 流水线 -->
    <div class="mn-cicd-card">
      <div class="mn-flow-img-header">
        <div class="mn-flow-img-icon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        </div>
        <div>
          <div class="mn-flow-img-title">端到端交付流程</div>
          <div class="mn-flow-img-sub">编码 · 分支构建 · 集成测试 · 发布 — 全链路 CI/CD 流水线</div>
        </div>
      </div>

      <div class="mn-cicd-body">
        <!-- 上下文 & 缺陷管理提示 -->
        <div class="mn-cicd-meta">
          <div class="mn-cicd-inp-row">
            <span class="mn-cicd-inp">需求</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:#94a3b8;"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            <span class="mn-cicd-inp">项目 | 特性</span>
          </div>
          <div class="mn-cicd-dm-note">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
            缺陷管理贯穿分支 &amp; 集成阶段
          </div>
        </div>

        <!-- 流水线网格 -->
        <div class="mn-cicd-scroll">
          <div class="mn-cicd-grid">
            <!-- DM 标签带 (row 1) -->
            <div class="mn-cicd-dm1">缺陷管理</div>
            <div class="mn-cicd-dm2">缺陷管理</div>
            <!-- 连接线 (row 2, 全宽) -->
            <div class="mn-cicd-conn"></div>
            <!-- Stage 1 -->
            <div class="mn-cicd-st" style="grid-column:1;">
              <div class="mn-cicd-dot" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);"></div>
              <div class="mn-cicd-sn">编写代码</div>
              <div class="mn-cicd-tools"><span>Xcode</span><span>Android Studio</span></div>
            </div>
            <!-- Stage 2 -->
            <div class="mn-cicd-st" style="grid-column:2;">
              <div class="mn-cicd-dot" style="background:linear-gradient(135deg,#4f46e5,#818cf8);"></div>
              <div class="mn-cicd-sn">代码管理</div>
              <div class="mn-cicd-tools"><span>Git</span><span>Maven</span></div>
            </div>
            <!-- Stage 3 (DM1) -->
            <div class="mn-cicd-st" style="grid-column:3;">
              <div class="mn-cicd-dot" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);"></div>
              <div class="mn-cicd-sn">分支构建</div>
              <div class="mn-cicd-tools"><span>Jenkins</span></div>
            </div>
            <!-- Stage 4 (DM1) -->
            <div class="mn-cicd-st" style="grid-column:4;">
              <div class="mn-cicd-dot" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);"></div>
              <div class="mn-cicd-sn">分支测试</div>
              <div class="mn-cicd-tools"><span>手动</span><span>自动化</span></div>
            </div>
            <!-- Stage 5 (DM1) -->
            <div class="mn-cicd-st" style="grid-column:5;">
              <div class="mn-cicd-dot" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);"></div>
              <div class="mn-cicd-sn">分支集成</div>
              <div class="mn-cicd-tools"><span>基线管理</span></div>
            </div>
            <!-- Stage 6 (DM2) -->
            <div class="mn-cicd-st" style="grid-column:6;">
              <div class="mn-cicd-dot" style="background:linear-gradient(135deg,#0891b2,#06b6d4);"></div>
              <div class="mn-cicd-sn">集成构建</div>
              <div class="mn-cicd-tools"><span>Jenkins</span></div>
            </div>
            <!-- Stage 7 (DM2) -->
            <div class="mn-cicd-st" style="grid-column:7;">
              <div class="mn-cicd-dot" style="background:linear-gradient(135deg,#0891b2,#06b6d4);"></div>
              <div class="mn-cicd-sn">集成测试</div>
              <div class="mn-cicd-tools"><span>手动</span><span>自动化</span></div>
            </div>
            <!-- Stage 8 -->
            <div class="mn-cicd-st mn-cicd-st-last" style="grid-column:8;">
              <div class="mn-cicd-dot" style="background:linear-gradient(135deg,#059669,#10b981);"></div>
              <div class="mn-cicd-sn">发布</div>
              <div class="mn-cicd-tools"><span>发布平台</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>

  <!-- UCD 设计能力 -->
  <section class="mn-sec reveal" id="ucd">
    <div class="mn-sec-header">
      <div class="mn-eyebrow">UCD Design · 设计能力</div>
      <h2 class="mn-sec-title">用户中心设计（UCD）能力</h2>
    </div>

    <div class="mn-ucd-feat-grid">
      <div class="mn-ucd-feat-card">
        <div class="mn-ucd-feat-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </div>
        <h4>全流程 UCD 设计</h4>
        <p>需求分析 → 交互 / 视觉设计 → 可用性测试 → 设计复盘，六阶段完整闭环，确保以用户为中心贯穿全程</p>
      </div>
      <div class="mn-ucd-feat-card">
        <div class="mn-ucd-feat-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <h4>3D 可视化大屏</h4>
        <p>结合 Unity3D / ThreeJS 构建沉浸式大屏，煤矿、智慧园区、电厂等多个行业均有实际交付案例</p>
      </div>
      <div class="mn-ucd-feat-card">
        <div class="mn-ucd-feat-icon" style="background:linear-gradient(135deg,#d97706,#f59e0b);">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>
        </div>
        <h4>数字人设计</h4>
        <p>参与华为虚拟数字人"云笙"研制，输出人物建模、骨骼绑定、表情驱动等完整 3D 角色技术</p>
      </div>
      <div class="mn-ucd-feat-card">
        <div class="mn-ucd-feat-icon" style="background:linear-gradient(135deg,#059669,#10b981);">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        </div>
        <h4>专家评估 &amp; 用户测评</h4>
        <p>AQ 专家走查 + 真实用户测试报告，量化设计改进效果，系统性提升产品体验质量</p>
      </div>
    </div>

    <!-- 设计作品展示 -->
    <div class="mn-ucd-gallery">
      <div class="mn-ucd-gal-col">
        <div class="mn-ucd-gal-item">
          <img src="/solutions/miniapp/images/ucd-ecommerce-ui.jpg" alt="电商 UI 设计" />
          <div class="mn-ucd-gal-cap">电商平台 UI</div>
        </div>
        <div class="mn-ucd-gal-item">
          <img src="/solutions/miniapp/images/ucd-wallet-ui.png" alt="钱包 App 设计" />
          <div class="mn-ucd-gal-cap">移动钱包 App</div>
        </div>
      </div>
      <div class="mn-ucd-gal-col">
        <div class="mn-ucd-gal-item">
          <img src="/solutions/miniapp/images/ucd-digital-human.jpg" alt="虚拟数字人" style="object-position:center;" />
          <div class="mn-ucd-gal-cap">虚拟数字人</div>
        </div>
        <div class="mn-ucd-gal-item">
          <img src="/solutions/miniapp/images/ucd-ecommerce-detail.jpg" alt="界面精细化" />
          <div class="mn-ucd-gal-cap">界面精细化</div>
        </div>
      </div>
      <div class="mn-ucd-gal-col mn-ucd-gal-wide">
        <div class="mn-ucd-gal-item mn-ucd-gal-full">
          <img src="/solutions/miniapp/images/ucd-dashboard.png" alt="3D 可视化大屏" style="object-position:center;" />
          <div class="mn-ucd-gal-cap">3D 可视化大屏</div>
        </div>
      </div>
    </div>
  </section>

  <!-- 项目管理能力 -->
  <section class="mn-sec reveal" id="pm">
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Project Management · 项目管理</div>
      <h2 class="mn-sec-title">项目管理能力</h2>
    </div>

    <div class="mn-pm-cards">
      <div class="mn-pm-card" style="border-top-color:#1d4ed8;">
        <div class="mn-pm-card-icon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        </div>
        <h4>进度管理</h4>
        <p>里程碑制定、计划排期、变更评审机制，保障计划可控</p>
      </div>
      <div class="mn-pm-card" style="border-top-color:#7c3aed;">
        <div class="mn-pm-card-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </div>
        <h4>沟通管理</h4>
        <p>晨会 + 评审 + 专题 + 质量会议，AAR 机制沉淀经验</p>
      </div>
      <div class="mn-pm-card" style="border-top-color:#0891b2;">
        <div class="mn-pm-card-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </div>
        <h4>风险管理</h4>
        <p>风险跟踪表 + 例会审视 + 邮件日追踪，确保风险全程闭环</p>
      </div>
      <div class="mn-pm-card" style="border-top-color:#d97706;">
        <div class="mn-pm-card-icon" style="background:linear-gradient(135deg,#d97706,#f59e0b);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
        </div>
        <h4>质量策划</h4>
        <p>现状分析 → 目标策划 → 过程裁剪，输出项目质量计划</p>
      </div>
      <div class="mn-pm-card" style="border-top-color:#059669;">
        <div class="mn-pm-card-icon" style="background:linear-gradient(135deg,#059669,#10b981);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <h4>流程看护</h4>
        <p>CP1/CP2/CP3 全周期检查点，准出准入标准，度量分析</p>
      </div>
    </div>

    <!-- 双层时间轴：客户交付里程碑 ↔ 内部研发阶段 -->
    <div class="mn-dual-tl reveal">

      <!-- ① 客户交付里程碑 -->
      <div class="mn-dtl-client">
        <div class="mn-dtl-head">
          <div class="mn-dtl-head-dot" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);"></div>
          <span>客户交付里程碑</span>
        </div>
        <div class="mn-dtl-ms-row">
          <div class="mn-dtl-ms">
            <div class="mn-dtl-ms-num" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">1</div>
            <div class="mn-dtl-ms-title">交付准备</div>
            <div class="mn-dtl-ms-desc">需求澄清 · UE/UI 设计<br>定制开发 · 系统测试</div>
          </div>
          <div class="mn-dtl-ms-arr">→</div>
          <div class="mn-dtl-ms">
            <div class="mn-dtl-ms-num" style="background:linear-gradient(135deg,#4f46e5,#818cf8);">2</div>
            <div class="mn-dtl-ms-title">安装调试</div>
            <div class="mn-dtl-ms-desc">PR/DR 评审<br>IOT · 性能测试</div>
          </div>
          <div class="mn-dtl-ms-arr">→</div>
          <div class="mn-dtl-ms">
            <div class="mn-dtl-ms-num" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">3</div>
            <div class="mn-dtl-ms-title">UAT 验收</div>
            <div class="mn-dtl-ms-desc">用户验收测试<br>E2E 场景 · 报告</div>
          </div>
          <div class="mn-dtl-ms-arr">→</div>
          <div class="mn-dtl-ms">
            <div class="mn-dtl-ms-num" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">4</div>
            <div class="mn-dtl-ms-title">正式上线</div>
            <div class="mn-dtl-ms-desc">系统核查 · 试运行<br>PAC 签署</div>
          </div>
          <div class="mn-dtl-ms-arr">→</div>
          <div class="mn-dtl-ms">
            <div class="mn-dtl-ms-num" style="background:linear-gradient(135deg,#059669,#10b981);">5</div>
            <div class="mn-dtl-ms-title">运维保障</div>
            <div class="mn-dtl-ms-desc">持续运营<br>O&amp;M 支持</div>
          </div>
        </div>
      </div>

      <!-- 连接桥 -->
      <div class="mn-dtl-bridge">
        <div class="mn-dtl-br-l"></div>
        <div class="mn-dtl-br-center">
          <span class="mn-dtl-br-tag mn-dtl-br-tag-blue">客户视角</span>
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none" style="color:#94a3b8;flex-shrink:0;">
            <path d="M7 0v18M2 13l5 5 5-5M2 5l5-5 5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="mn-dtl-br-tag mn-dtl-br-tag-purple">内部研发</span>
        </div>
        <div class="mn-dtl-br-l"></div>
      </div>

      <!-- ② 内部研发阶段 -->
      <div class="mn-dtl-rd">
        <div class="mn-dtl-head">
          <div class="mn-dtl-head-dot" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);"></div>
          <span>内部研发阶段 &amp; CP 质量门控</span>
        </div>
        <div class="mn-dtl-phases-outer">
          <div class="mn-dtl-phases">
            <div class="mn-dtl-ph">
              <div class="mn-dtl-cp-slot"></div>
              <div class="mn-dtl-ph-dot"></div>
              <div class="mn-dtl-ph-name">项目启动</div>
              <div class="mn-dtl-ph-desc">启动会<br>项目计划<br>质量策划</div>
            </div>
            <div class="mn-dtl-ph">
              <div class="mn-dtl-cp-slot"></div>
              <div class="mn-dtl-ph-dot"></div>
              <div class="mn-dtl-ph-name">规划阶段</div>
              <div class="mn-dtl-ph-desc">需求规划方案<br>架构规划方案<br>迭代计划</div>
            </div>
            <div class="mn-dtl-ph mn-dtl-ph-cp">
              <div class="mn-dtl-cp-badge">CP1</div>
              <div class="mn-dtl-ph-dot mn-dtl-ph-dot-cp"></div>
              <div class="mn-dtl-ph-name">需求阶段</div>
              <div class="mn-dtl-ph-desc">需求 PRD<br>原型<br>拆分工作包</div>
            </div>
            <div class="mn-dtl-ph">
              <div class="mn-dtl-cp-slot"></div>
              <div class="mn-dtl-ph-dot"></div>
              <div class="mn-dtl-ph-name">设计阶段</div>
              <div class="mn-dtl-ph-desc">视觉设计<br>概要 / 详细设计<br>测试方案设计</div>
            </div>
            <div class="mn-dtl-ph">
              <div class="mn-dtl-cp-slot"></div>
              <div class="mn-dtl-ph-dot"></div>
              <div class="mn-dtl-ph-name">开发阶段</div>
              <div class="mn-dtl-ph-desc">静态代码扫描<br>Code Review<br>开发自测</div>
            </div>
            <div class="mn-dtl-ph">
              <div class="mn-dtl-cp-slot"></div>
              <div class="mn-dtl-ph-dot"></div>
              <div class="mn-dtl-ph-name">集成阶段</div>
              <div class="mn-dtl-ph-desc">集成验证<br>集成联调</div>
            </div>
            <div class="mn-dtl-ph mn-dtl-ph-cp">
              <div class="mn-dtl-cp-badge">CP2</div>
              <div class="mn-dtl-ph-dot mn-dtl-ph-dot-cp"></div>
              <div class="mn-dtl-ph-name">测试阶段</div>
              <div class="mn-dtl-ph-desc">功能 / 兼容性<br>集成 / 性能测试</div>
            </div>
            <div class="mn-dtl-ph mn-dtl-ph-cp">
              <div class="mn-dtl-cp-badge">CP3</div>
              <div class="mn-dtl-ph-dot mn-dtl-ph-dot-cp"></div>
              <div class="mn-dtl-ph-name">发布阶段</div>
              <div class="mn-dtl-ph-desc">上线发布<br>线上验证<br>线上巡检</div>
            </div>
            <div class="mn-dtl-ph">
              <div class="mn-dtl-cp-slot"></div>
              <div class="mn-dtl-ph-dot mn-dtl-ph-dot-end"></div>
              <div class="mn-dtl-ph-name">验收阶段</div>
              <div class="mn-dtl-ph-desc">源代码<br>产品 / 技术文档<br>其他材料</div>
            </div>
          </div>
        </div>
        <!-- 质量覆盖横条 -->
        <div class="mn-dtl-qbars">
          <div class="mn-dtl-qbar" style="margin-left:0;width:100%;background:linear-gradient(90deg,rgba(29,78,216,0.1),rgba(29,78,216,0.04));">
            <span>项目全周期监控、审计</span>
          </div>
          <div class="mn-dtl-qbar" style="margin-left:22%;width:78%;background:linear-gradient(90deg,rgba(124,58,237,0.1),rgba(124,58,237,0.04));">
            <span>研发过程质量把控，准出准入标准</span>
          </div>
          <div class="mn-dtl-qbar" style="margin-left:44%;width:34%;background:linear-gradient(90deg,rgba(8,145,178,0.1),rgba(8,145,178,0.04));">
            <span>开发过程质量保证，度量分析</span>
          </div>
        </div>
      </div>

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

.mn-arch-card {
  display: flex; align-items: stretch; gap: 0;
  background: var(--lbg);
  border: 1px solid var(--lbd);
  border-radius: 16px;
  overflow: hidden;
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
  background: var(--lg);
  position: relative; overflow: hidden;
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
.mn-arch-layer-cn { font-size: 0.95rem; font-weight: 900; color: #fff; letter-spacing: 0.02em; }
.mn-arch-layer-en { font-size: 0.55rem; color: rgba(255,255,255,0.6); letter-spacing: 0.12em; text-transform: uppercase; margin-top: 4px; }

.mn-arch-card-body {
  flex: 1; padding: 16px 24px; display: flex; flex-direction: column; gap: 10px; justify-content: center;
}
.mn-arch-group { display: flex; align-items: flex-start; gap: 12px; }
.mn-arch-group-lbl {
  font-size: 0.74rem; font-weight: 800; min-width: 68px;
  letter-spacing: 0.04em; padding-top: 4px; text-transform: uppercase;
  white-space: nowrap;
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
  width: 2px; flex: 1;
  background: linear-gradient(to bottom, var(--cc), transparent);
}
.mn-arch-conn-line:last-child {
  background: linear-gradient(to bottom, transparent, var(--cc));
}
.mn-arch-conn-dot {
  width: 10px; height: 10px; border-radius: 50%;
  border: 2px solid white; box-shadow: 0 0 6px currentColor;
  flex-shrink: 0;
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

/* ── DIRECTORY BANNER ── */
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

/* ── DIRECTORY CARDS ── */
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
.mn-flow-arrow {
  font-size: 1.4rem; color: #94a3b8; margin-top: 12px; padding: 0 4px; flex-shrink: 0;
}
/* ── FLOW IMAGES (stacked, one per row) ── */
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
  width: 100%; display: block;
  border-radius: 10px; border: 1px solid var(--border);
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
}

/* wide screenshot items */
.mn-ss-wide { width: 340px; }
.mn-ss-wide img { height: 220px !important; object-position: center !important; }
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

/* ── UCD DESIGN ── */
.mn-ucd-feat-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-bottom: 28px;
}
.mn-ucd-feat-card {
  background: var(--card-bg); border-radius: var(--radius); padding: 26px 22px;
  box-shadow: var(--shadow); border: 1px solid rgba(124,58,237,0.1);
  backdrop-filter: blur(8px); transition: all .3s;
}
.mn-ucd-feat-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }
.mn-ucd-feat-icon {
  width: 48px; height: 48px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 14px; box-shadow: 0 6px 16px rgba(0,0,0,0.12);
}
.mn-ucd-feat-card h4 { font-size: 0.96rem; font-weight: 800; color: var(--text1); margin: 0 0 8px; }
.mn-ucd-feat-card p { font-size: 0.83rem; color: var(--text2); line-height: 1.7; margin: 0; }

.mn-ucd-gallery {
  display: flex; gap: 14px; height: 420px; border-radius: 16px; overflow: hidden;
}
.mn-ucd-gal-col {
  flex: 1; display: flex; flex-direction: column; gap: 14px;
}
.mn-ucd-gal-wide { flex: 1.7; }
.mn-ucd-gal-item {
  flex: 1; position: relative; overflow: hidden; border-radius: 12px;
  border: 1px solid var(--border); box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}
.mn-ucd-gal-full { flex: 1; height: 100%; }
.mn-ucd-gal-item img {
  width: 100%; height: 100%; object-fit: cover; object-position: top; display: block;
  transition: transform .4s ease;
}
.mn-ucd-gal-item:hover img { transform: scale(1.03); }
.mn-ucd-gal-cap {
  position: absolute; bottom: 0; left: 0; right: 0; padding: 10px 14px;
  background: linear-gradient(to top, rgba(0,0,0,0.72), transparent);
  font-size: 0.76rem; color: #fff; font-weight: 700; letter-spacing: 0.02em;
}

/* ── PROJECT MANAGEMENT ── */
.mn-pm-cards {
  display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; margin-bottom: 36px;
}
.mn-pm-card {
  background: var(--card-bg); border-radius: var(--radius); padding: 22px 18px;
  border-top: 3px solid; box-shadow: var(--shadow);
  border-left: 1px solid rgba(29,78,216,0.08);
  border-right: 1px solid rgba(29,78,216,0.08);
  border-bottom: 1px solid rgba(29,78,216,0.08);
  transition: all .3s; backdrop-filter: blur(8px);
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
  .mn-dir-grid { grid-template-columns: 1fr 1fr; }
  .mn-dir-grid-2 { grid-template-columns: 1fr; }
  .mn-dir-grid-3 { grid-template-columns: 1fr 1fr; }
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
  .mn-dir-grid, .mn-dir-grid-3 { grid-template-columns: 1fr; }
  .mn-dir-banner { flex-direction: column; align-items: flex-start; gap: 12px; }
  .mn-sec-title { font-size: 1.4rem; }
  .mn-ucd-feat-grid { grid-template-columns: 1fr; }
  .mn-pm-cards { grid-template-columns: 1fr; }
}

/* ── CI/CD PIPELINE CARD ── */
.mn-cicd-card {
  background: var(--card-bg);
  border: 1px solid rgba(29,78,216,0.09);
  border-radius: 16px;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  margin-bottom: 44px;
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
.mn-cicd-dm-note {
  display: flex; align-items: center; gap: 5px;
  font-size: 0.68rem; font-weight: 600; color: var(--text3);
}
.mn-cicd-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; }
.mn-cicd-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 22px 1fr;
  min-width: 580px;
  position: relative;
  padding-bottom: 8px;
}
/* DM label 1: stages 3–5 */
.mn-cicd-dm1 {
  grid-column: 3 / 6; grid-row: 1;
  background: rgba(124,58,237,0.07); border: 1px solid rgba(124,58,237,0.18);
  border-radius: 4px; margin: 0 4px;
  font-size: 0.6rem; font-weight: 700; color: #7c3aed;
  display: flex; align-items: center; justify-content: center; letter-spacing: 0.05em;
}
/* DM label 2: stages 6–7 */
.mn-cicd-dm2 {
  grid-column: 6 / 8; grid-row: 1;
  background: rgba(8,145,178,0.07); border: 1px solid rgba(8,145,178,0.18);
  border-radius: 4px; margin: 0 4px;
  font-size: 0.6rem; font-weight: 700; color: #0891b2;
  display: flex; align-items: center; justify-content: center; letter-spacing: 0.05em;
}
/* Connecting line */
.mn-cicd-conn {
  grid-column: 1 / 9; grid-row: 2;
  align-self: start; margin-top: 21px; /* padding-top(8) + half-dot(13) */
  height: 2px; pointer-events: none; z-index: 0;
  background: linear-gradient(90deg, #3b82f6, #7c3aed, #06b6d4, #10b981);
}
/* Stage cells */
.mn-cicd-st {
  grid-row: 2;
  display: flex; flex-direction: column; align-items: center; text-align: center;
  gap: 6px; padding: 8px 4px 0;
  position: relative; z-index: 1;
}
/* Arrow between stages via ::after */
.mn-cicd-st:not(.mn-cicd-st-last)::after {
  content: '›'; font-size: 1.2rem; color: #94a3b8;
  position: absolute; right: -9px; top: 14px; z-index: 3; line-height: 1;
}
.mn-cicd-dot {
  width: 26px; height: 26px; border-radius: 50%; flex-shrink: 0;
  border: 2.5px solid var(--card-bg);
  box-shadow: 0 0 0 2px rgba(99,102,241,0.2);
}
.mn-cicd-sn { font-size: 0.72rem; font-weight: 800; color: var(--text1); white-space: nowrap; }
.mn-cicd-tools { display: flex; flex-wrap: wrap; justify-content: center; gap: 3px; }
.mn-cicd-tools span {
  font-size: 0.58rem; font-weight: 600; color: var(--text3);
  background: var(--vp-c-bg-soft, #f8fafc);
  border: 1px solid var(--border); border-radius: 4px; padding: 1px 5px; white-space: nowrap;
}

/* ── DUAL-LAYER TIMELINE ── */
.mn-dual-tl {
  margin-top: 32px;
  background: var(--card-bg);
  border: 1px solid rgba(29,78,216,0.09);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

/* 客户里程碑区 */
.mn-dtl-client {
  padding: 28px 32px 24px;
  background: linear-gradient(180deg, rgba(29,78,216,0.03) 0%, transparent 100%);
}
.mn-dtl-head {
  display: flex; align-items: center; gap: 10px;
  margin-bottom: 18px;
  font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.1em; color: var(--text3);
}
.mn-dtl-head-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.mn-dtl-ms-row { display: flex; align-items: flex-start; gap: 6px; }
.mn-dtl-ms {
  flex: 1;
  background: var(--vp-c-bg-soft, #f8fafc);
  border: 1px solid rgba(29,78,216,0.08);
  border-radius: 12px; padding: 14px 14px 12px;
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
  flex-shrink: 0; font-size: 1.2rem; color: #cbd5e1;
  padding-top: 22px; min-width: 18px;
}

/* 连接桥 */
.mn-dtl-bridge {
  display: flex; align-items: center; gap: 16px;
  padding: 0 32px;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: linear-gradient(180deg, rgba(29,78,216,0.02) 0%, rgba(124,58,237,0.02) 100%);
}
.mn-dtl-br-l {
  flex: 1; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(99,102,241,0.25), transparent);
}
.mn-dtl-br-center {
  display: flex; align-items: center; gap: 10px; padding: 10px 0;
}
.mn-dtl-br-tag {
  font-size: 0.66rem; font-weight: 700; padding: 3px 10px;
  border-radius: 999px; text-transform: uppercase; letter-spacing: 0.07em; white-space: nowrap;
}
.mn-dtl-br-tag-blue  { background: rgba(29,78,216,0.08);  color: #1d4ed8; }
.mn-dtl-br-tag-purple{ background: rgba(124,58,237,0.08); color: #7c3aed; }

/* 内部研发区 */
.mn-dtl-rd {
  padding: 24px 32px 28px;
  background: linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.03) 100%);
}

/* 阶段时间轴 */
.mn-dtl-phases-outer {
  overflow-x: auto; margin-bottom: 20px;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 4px;
}
.mn-dtl-phases {
  display: flex; position: relative; min-width: 600px;
}
.mn-dtl-phases::before {
  content: ''; position: absolute;
  top: 31px; /* 24px cp-slot + half of 14px dot */
  left: calc(100% / 18); right: calc(100% / 18);
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #7c3aed, #06b6d4);
  z-index: 0;
}
.mn-dtl-ph {
  flex: 1; display: flex; flex-direction: column; align-items: center;
  gap: 5px; text-align: center; padding: 0 2px;
}
.mn-dtl-cp-slot  { height: 24px; }
.mn-dtl-cp-badge {
  height: 22px; display: inline-flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, #d97706, #f59e0b);
  color: #fff; font-size: 0.62rem; font-weight: 900;
  border-radius: 6px; padding: 0 7px;
  box-shadow: 0 2px 8px rgba(217,119,6,0.3); white-space: nowrap;
}
.mn-dtl-ph-dot {
  width: 14px; height: 14px; border-radius: 50%; flex-shrink: 0;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  border: 2.5px solid var(--card-bg);
  box-shadow: 0 0 0 2px rgba(59,130,246,0.3);
  z-index: 2;
}
.mn-dtl-ph-dot-cp {
  width: 16px; height: 16px;
  background: linear-gradient(135deg, #d97706, #f59e0b);
  box-shadow: 0 0 0 2px rgba(217,119,6,0.3);
}
.mn-dtl-ph-dot-end {
  background: linear-gradient(135deg, #059669, #10b981);
  box-shadow: 0 0 0 2px rgba(5,150,105,0.3);
}
.mn-dtl-ph-name { font-size: 0.78rem; font-weight: 800; color: var(--text1); }
.mn-dtl-ph-desc { font-size: 0.65rem; color: var(--text3); line-height: 1.5; }

/* 质量覆盖横条 */
.mn-dtl-qbars { display: flex; flex-direction: column; gap: 5px; margin-top: 8px; }
.mn-dtl-qbar {
  height: 26px; border-radius: 6px;
  display: flex; align-items: center; padding: 0 12px;
  transition: opacity .2s;
}
.mn-dtl-qbar:hover { opacity: 0.8; }
.mn-dtl-qbar span {
  font-size: 0.69rem; font-weight: 600; color: var(--text2);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* 响应式 */
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
}
@media (max-width: 480px) {
  .mn-dtl-ms { min-width: 100%; flex: none; }
}
</style>
