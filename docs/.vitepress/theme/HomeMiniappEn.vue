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
  const btn = document.getElementById('nav-hamburger-mn-en')
  const drawer = document.getElementById('nav-drawer-mn-en')
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
    ChinaSofti · Capability
  </div>
  <div class="nav-links">
    <a href="/en/">Home</a>
    <a href="/en/miniapp-solution" class="active">Mini-App</a>
    <a href="/en/overseas/">Overseas</a>
    <a href="/en/business/cms/">Solutions</a>
  </div>
  <button class="nav-cta" onclick="window.location.href='/zh/miniapp/'">中文</button>
  <button class="nav-hamburger" id="nav-hamburger-mn-en" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="nav-drawer" id="nav-drawer-mn-en">
  <a href="/en/">Home</a>
  <a href="/en/miniapp-solution">Mini-App</a>
  <a href="/en/overseas/">Overseas</a>
  <a href="/en/business/cms/">Solutions</a>
  <a href="/zh/miniapp/" class="nav-drawer-lang">中文</a>
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

  <!-- Core Value -->
  <section class="mn-sec reveal" id="value">
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Core Value · Our Advantage</div>
      <h2 class="mn-sec-title">Why Choose Super App Mini-Programs</h2>
    </div>
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

      <!-- Layer 1 -->
      <div class="mn-arch-card" style="--lc:#3b82f6;--lg:linear-gradient(135deg,#1d4ed8,#3b82f6);--lbg:rgba(59,130,246,0.06);--lbd:rgba(59,130,246,0.22);">
        <div class="mn-arch-card-left">
          <div class="mn-arch-num-badge">01</div>
          <div class="mn-arch-layer-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg></div>
          <div class="mn-arch-layer-text">
            <div class="mn-arch-layer-cn">Client Layer</div>
            <div class="mn-arch-layer-en">CLIENT LAYER</div>
          </div>
        </div>
        <div class="mn-arch-card-body">
          <div class="mn-arch-group">
            <div class="mn-arch-group-lbl" style="color:#3b82f6;">Mobile</div>
            <div class="mn-arch-chips"><span>Android SDK</span><span>iOS SDK</span><span>Mini-App Runtime</span><span>Native JS API</span></div>
          </div>
          <div class="mn-arch-group">
            <div class="mn-arch-group-lbl" style="color:#3b82f6;">Web</div>
            <div class="mn-arch-chips"><span>H5 Container</span><span>Responsive Layout</span><span>PWA Support</span></div>
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
            <div class="mn-arch-layer-cn">Platform Layer</div>
            <div class="mn-arch-layer-en">PLATFORM LAYER</div>
          </div>
        </div>
        <div class="mn-arch-card-body">
          <div class="mn-arch-group">
            <div class="mn-arch-group-lbl" style="color:#a78bfa;">Security &amp; Identity</div>
            <div class="mn-arch-chips"><span>Unified Auth</span><span>Biometrics</span><span>Security Hardening</span><span>Mini-App Sandbox</span></div>
          </div>
          <div class="mn-arch-group">
            <div class="mn-arch-group-lbl" style="color:#a78bfa;">Platform Services</div>
            <div class="mn-arch-chips"><span>Mobile Payment</span><span>LBS Location</span><span>Push Notifications</span><span>Analytics</span><span>Social Sharing</span></div>
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
            <div class="mn-arch-layer-cn">App Service Layer</div>
            <div class="mn-arch-layer-en">APPLICATION LAYER</div>
          </div>
        </div>
        <div class="mn-arch-card-body">
          <div class="mn-arch-group">
            <div class="mn-arch-group-lbl" style="color:#06b6d4;">Financial</div>
            <div class="mn-arch-chips"><span>E-Wallet</span><span>Investment</span><span>Wealth Mgmt</span><span>Crypto</span><span>Consumer Finance</span><span>Insurance</span></div>
          </div>
          <div class="mn-arch-group">
            <div class="mn-arch-group-lbl" style="color:#06b6d4;">Lifestyle &amp; City</div>
            <div class="mn-arch-chips"><span>Smart Fitness</span><span>Smart Tour</span><span>Digital Assets</span><span>Vehicle Mgmt</span><span>Smart City</span><span>Personalization</span></div>
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
            <div class="mn-arch-layer-cn">Infrastructure Layer</div>
            <div class="mn-arch-layer-en">INFRASTRUCTURE LAYER</div>
          </div>
        </div>
        <div class="mn-arch-card-body">
          <div class="mn-arch-group">
            <div class="mn-arch-group-lbl" style="color:#f59e0b;">Cloud Platform</div>
            <div class="mn-arch-chips"><span>Huawei Public Cloud</span><span>Huawei Hybrid Cloud</span><span>On-premise</span><span>Azure</span><span>AWS</span><span>Google Cloud</span></div>
          </div>
          <div class="mn-arch-group">
            <div class="mn-arch-group-lbl" style="color:#f59e0b;">Business Platform</div>
            <div class="mn-arch-chips"><span>APP Cube Platform</span><span>Banking / MM Backend</span><span>3rd-party API</span></div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- Scenarios Tabs -->
  <section class="mn-sec reveal" id="scenarios">
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Scenarios · Use Cases</div>
      <h2 class="mn-sec-title">3 Mini-App Categories</h2>
    </div>

    <div class="mn-tabs-wrap">
      <div class="mn-tab-bar">
        <button class="mn-tab active" data-panel="tab-fin">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
          Financial &amp; Payment
        </button>
        <button class="mn-tab" data-panel="tab-life">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
          Lifestyle Services
        </button>
        <button class="mn-tab" data-panel="tab-city">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10z"/></svg>
          Smart City
        </button>
      </div>

      <!-- Financial -->
      <div class="mn-panel active" id="tab-fin">
        <div class="mn-panel-intro">
          Built on the Mobile Money App baseline, covering e-wallets, investment products, personal wealth management, and crypto trading. Supports multi-language GUI customization with a complete compliance and security framework.
        </div>
        <div class="mn-cards-grid">
          <div class="mn-card mn-card-blue">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div>
            <h4>E-Wallet</h4>
            <p>Top-up, QR code payments, and transfers with multi-layer security (MPIN / biometrics) and full transaction history.</p>
          </div>
          <div class="mn-card mn-card-blue">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div>
            <h4>Investment</h4>
            <p>Diverse product catalog, online trading, real-time returns, portfolio management, and MPIN secondary confirmation.</p>
          </div>
          <div class="mn-card mn-card-blue">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg></div>
            <h4>Personal Wealth</h4>
            <p>Income &amp; expense tracking, budget management, and financial reports by category to help users master their finances.</p>
          </div>
          <div class="mn-card mn-card-blue">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
            <h4>Crypto Trading</h4>
            <p>Multi-currency assets, live candlestick charts, one-tap buy/sell, MPIN confirmation, and clear position records.</p>
          </div>
          <div class="mn-card mn-card-blue">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
            <h4>Consumer Finance</h4>
            <p>Credit limit management, installment repayment, bill queries, and personalized credit scoring with risk control.</p>
          </div>
          <div class="mn-card mn-card-blue">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
            <h4>Insurance</h4>
            <p>Insurance product showcase and purchase, claims filing, and policy management across health, property, and other types.</p>
          </div>
        </div>
        <div class="mn-screenshots-row">
          <div class="mn-ss-item">
            <img src="/solutions/miniapp/images/virtual-currency-list.jpg" alt="Coin List" />
            <div class="mn-ss-cap">Coin List</div>
          </div>
          <div class="mn-ss-item">
            <img src="/solutions/miniapp/images/virtual-currency-detail.jpg" alt="Market Trend" />
            <div class="mn-ss-cap">Market Trend</div>
          </div>
          <div class="mn-ss-item">
            <img src="/solutions/miniapp/images/virtual-currency-buy.jpg" alt="Buy Confirm" />
            <div class="mn-ss-cap">Buy Confirm</div>
          </div>
          <div class="mn-ss-item">
            <img src="/solutions/miniapp/images/virtual-currency-sell.jpg" alt="Sell Order" />
            <div class="mn-ss-cap">Sell Order</div>
          </div>
          <div class="mn-ss-item">
            <img src="/solutions/miniapp/images/wealth-mgmt.png" alt="Wealth Management" />
            <div class="mn-ss-cap">Wealth Management</div>
          </div>
        </div>
      </div>

      <!-- Lifestyle -->
      <div class="mn-panel" id="tab-life">
        <div class="mn-panel-intro">
          Covering high-frequency lifestyle scenarios including smart fitness, tour guides, bookings, digital collectibles, and e-commerce. Quick integration with the Super App ecosystem to reach a wider audience.
        </div>
        <div class="mn-cards-grid">
          <div class="mn-card mn-card-purple">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg></div>
            <h4>Smart Fitness</h4>
            <p>Workout plans, fitness tracking, class booking, and LBS-based nearby venue recommendations to keep users motivated.</p>
          </div>
          <div class="mn-card mn-card-purple">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10z"/></svg></div>
            <h4>Smart Tour Guide</h4>
            <p>Scenic/campus map navigation, POI recommendations, AR-assisted guide, and one-tap voice narration for a richer visitor experience.</p>
          </div>
          <div class="mn-card mn-card-purple">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
            <h4>Smart Booking</h4>
            <p>Hotel, restaurant, and venue booking with calendar seat selection, instant confirmation, loyalty point redemption, and closed-loop order management.</p>
          </div>
          <div class="mn-card mn-card-purple">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div>
            <h4>Digital Collectibles</h4>
            <p>NFT / digital collectible showcase, limited-edition issuance, purchase &amp; gifting, with blockchain provenance for copyright authenticity.</p>
          </div>
          <div class="mn-card mn-card-purple">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></div>
            <h4>E-Commerce</h4>
            <p>Product listings, cart, online payment, and social sharing virality to boost user activity and GMV conversion.</p>
          </div>
          <div class="mn-card mn-card-purple">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
            <h4>User Incentives</h4>
            <p>Points rewards, check-ins, mission systems, combined with social features (favorites, sharing, donations) to drive user stickiness and retention.</p>
          </div>
        </div>
        <div class="mn-screenshots-row">
          <div class="mn-ss-item">
            <img src="/solutions/miniapp/images/life-venue.png" alt="Venue Booking" />
            <div class="mn-ss-cap">Venue Booking</div>
          </div>
          <div class="mn-ss-item">
            <img src="/solutions/miniapp/images/life-ecommerce.png" alt="Online Mall" />
            <div class="mn-ss-cap">Online Mall</div>
          </div>
        </div>
      </div>

      <!-- Smart City -->
      <div class="mn-panel" id="tab-city">
        <div class="mn-panel-intro">
          Vehicle management, urban public services, user analytics, and personalized recommendations — empowering smart city governance and precision citizen services.
        </div>
        <div class="mn-cards-grid">
          <div class="mn-card mn-card-cyan">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></div>
            <h4>Vehicle Management</h4>
            <p>Vehicle registration, inspection reminders, violation queries, and LBS smart parking guidance integrated with city traffic data.</p>
          </div>
          <div class="mn-card mn-card-cyan">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><rect x="9" y="13" width="6" height="8"/></svg></div>
            <h4>Smart City Services</h4>
            <p>Online government services, utility payments, and city announcements — a one-stop service window to improve citizen satisfaction.</p>
          </div>
          <div class="mn-card mn-card-cyan">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <h4>Customer Analytics</h4>
            <p>Behavioral event tracking and user profiling to help operators deeply understand their audience and craft precise marketing strategies.</p>
          </div>
          <div class="mn-card mn-card-cyan">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
            <h4>Personalization</h4>
            <p>AI recommendation engine that precisely targets users based on their profile, boosting activity and conversion in a smart operations loop.</p>
          </div>
          <div class="mn-card mn-card-cyan">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg></div>
            <h4>Social Finance</h4>
            <p>Finance community for users to share returns, copy-trade, and co-invest — building a financial social ecosystem.</p>
          </div>
          <div class="mn-card mn-card-cyan">
            <div class="mn-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
            <h4>Smart Campus</h4>
            <p>Access control, meeting room booking, facility repair requests, and visitor management — elevating campus operation efficiency and tenant experience.</p>
          </div>
        </div>
        <div class="mn-screenshots-row">
          <div class="mn-ss-item">
            <img src="/solutions/miniapp/images/city-property.png" alt="Property Fee Management" />
            <div class="mn-ss-cap">Property Fee Mgmt</div>
          </div>
          <div class="mn-ss-item">
            <img src="/solutions/miniapp/images/city-qrcode.png" alt="QR Code Payment" />
            <div class="mn-ss-cap">QR Code Payment</div>
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
      <div class="mn-flow-step">
        <div class="mn-flow-num" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">01</div>
        <div class="mn-flow-content">
          <h4>M Platform Deploy</h4>
          <p>Cloud resource provisioning, project environment setup, M Platform installation, initialization, and one-click dev environment setup.</p>
        </div>
      </div>
      <div class="mn-flow-arrow">→</div>
      <div class="mn-flow-step">
        <div class="mn-flow-num" style="background:linear-gradient(135deg,#4f46e5,#818cf8);">02</div>
        <div class="mn-flow-content">
          <h4>SDK Integration</h4>
          <p>Android / iOS SDK retrieval and integration, host app initialization, simulator testing to ensure consistent runtime environment.</p>
        </div>
      </div>
      <div class="mn-flow-arrow">→</div>
      <div class="mn-flow-step">
        <div class="mn-flow-num" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">03</div>
        <div class="mn-flow-content">
          <h4>Mini-App Development</h4>
          <p>Online IDE, native JS API development, real-time simulator preview for rapid iteration of UI and business logic.</p>
        </div>
      </div>
      <div class="mn-flow-arrow">→</div>
      <div class="mn-flow-step">
        <div class="mn-flow-num" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">04</div>
        <div class="mn-flow-content">
          <h4>Testing &amp; Validation</h4>
          <p>5-dimension testing: compatibility / reliability / automation / security / performance. KCP3 exit evaluation with multi-scenario test coverage.</p>
        </div>
      </div>
      <div class="mn-flow-arrow">→</div>
      <div class="mn-flow-step">
        <div class="mn-flow-num" style="background:linear-gradient(135deg,#059669,#10b981);">05</div>
        <div class="mn-flow-content">
          <h4>Harden &amp; Release</h4>
          <p>Security hardening, publish &amp; go-live without app store gating — instant user reach with a delivery metrics dashboard.</p>
        </div>
      </div>
    </div>

    <div class="mn-flow-imgs">
      <div class="mn-flow-img-block">
        <div class="mn-flow-img-header">
          <div class="mn-flow-img-icon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          </div>
          <div>
            <div class="mn-flow-img-title">End-to-End Delivery Process</div>
            <div class="mn-flow-img-sub">M Platform Deploy · SDK Integration · Mini-App Launch</div>
          </div>
        </div>
        <div class="mn-flow-img-wrap">
          <img src="/solutions/miniapp/images/delivery-flow-new.png" alt="E2E Delivery Process" />
        </div>
      </div>
      <div class="mn-flow-img-block">
        <div class="mn-flow-img-header">
          <div class="mn-flow-img-icon" style="background:linear-gradient(135deg,#d97706,#f59e0b);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          </div>
          <div>
            <div class="mn-flow-img-title">Standardized Customization Process</div>
            <div class="mn-flow-img-sub">Based on MM App Baseline · Rapid Customization · Multi-language GUI</div>
          </div>
        </div>
        <div class="mn-flow-img-wrap">
          <img src="/solutions/miniapp/images/customization-flow-new.png" alt="Standardized Customization Process" />
        </div>
      </div>
    </div>
  </section>

  <!-- UCD Design -->
  <section class="mn-sec reveal" id="ucd">
    <div class="mn-sec-header">
      <div class="mn-eyebrow">UCD Design · Design Capabilities</div>
      <h2 class="mn-sec-title">User-Centered Design (UCD) Capabilities</h2>
    </div>

    <div class="mn-ucd-feat-grid">
      <div class="mn-ucd-feat-card">
        <div class="mn-ucd-feat-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </div>
        <h4>Full-Cycle UCD Design</h4>
        <p>Requirements → Interaction / Visual Design → Usability Testing → Design Review — a complete 6-phase closed loop ensuring user-centricity throughout</p>
      </div>
      <div class="mn-ucd-feat-card">
        <div class="mn-ucd-feat-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <h4>3D Visualization Dashboards</h4>
        <p>Immersive big-screen experiences using Unity3D / ThreeJS, with delivered projects in mining, smart campus, and power plant industries</p>
      </div>
      <div class="mn-ucd-feat-card">
        <div class="mn-ucd-feat-icon" style="background:linear-gradient(135deg,#d97706,#f59e0b);">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>
        </div>
        <h4>Virtual Digital Human</h4>
        <p>Co-developed Huawei's virtual digital human "Yun Sheng" — delivering 3D character modeling, rigging, and expression animation</p>
      </div>
      <div class="mn-ucd-feat-card">
        <div class="mn-ucd-feat-icon" style="background:linear-gradient(135deg,#059669,#10b981);">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        </div>
        <h4>Expert Evaluation &amp; UX Testing</h4>
        <p>AQ expert walkthrough + real user test reports — quantifying design improvement impact and systematically elevating product experience quality</p>
      </div>
    </div>

    <div class="mn-ucd-gallery">
      <div class="mn-ucd-gal-col">
        <div class="mn-ucd-gal-item">
          <img src="/solutions/miniapp/images/ucd-ecommerce-ui.jpg" alt="E-Commerce Platform UI" />
          <div class="mn-ucd-gal-cap">E-Commerce Platform UI</div>
        </div>
        <div class="mn-ucd-gal-item">
          <img src="/solutions/miniapp/images/ucd-wallet-ui.png" alt="Mobile Wallet App" />
          <div class="mn-ucd-gal-cap">Mobile Wallet App</div>
        </div>
      </div>
      <div class="mn-ucd-gal-col">
        <div class="mn-ucd-gal-item">
          <img src="/solutions/miniapp/images/ucd-digital-human.jpg" alt="Virtual Digital Human" style="object-position:center;" />
          <div class="mn-ucd-gal-cap">Virtual Digital Human</div>
        </div>
        <div class="mn-ucd-gal-item">
          <img src="/solutions/miniapp/images/ucd-ecommerce-detail.jpg" alt="UI Polish & Detail" />
          <div class="mn-ucd-gal-cap">UI Polish &amp; Detail</div>
        </div>
      </div>
      <div class="mn-ucd-gal-col mn-ucd-gal-wide">
        <div class="mn-ucd-gal-item mn-ucd-gal-full">
          <img src="/solutions/miniapp/images/ucd-dashboard.png" alt="3D Visualization Dashboard" style="object-position:center;" />
          <div class="mn-ucd-gal-cap">3D Visualization Dashboard</div>
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
      <div class="mn-pm-card" style="border-top-color:#1d4ed8;">
        <div class="mn-pm-card-icon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        </div>
        <h4>Schedule</h4>
        <p>Milestone definition, planning, and change review mechanisms to keep delivery on track</p>
      </div>
      <div class="mn-pm-card" style="border-top-color:#7c3aed;">
        <div class="mn-pm-card-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </div>
        <h4>Communication</h4>
        <p>Daily standups + reviews + topic meetings + quality sessions; AAR mechanism to capture lessons learned</p>
      </div>
      <div class="mn-pm-card" style="border-top-color:#0891b2;">
        <div class="mn-pm-card-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </div>
        <h4>Risk Management</h4>
        <p>Risk tracking matrix + weekly review + daily email follow-up — ensuring full lifecycle risk closure</p>
      </div>
      <div class="mn-pm-card" style="border-top-color:#d97706;">
        <div class="mn-pm-card-icon" style="background:linear-gradient(135deg,#d97706,#f59e0b);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
        </div>
        <h4>Quality Planning</h4>
        <p>Current state analysis → goal planning → process tailoring; outputs a project quality plan</p>
      </div>
      <div class="mn-pm-card" style="border-top-color:#059669;">
        <div class="mn-pm-card-icon" style="background:linear-gradient(135deg,#059669,#10b981);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <h4>Process Monitoring</h4>
        <p>CP1 / CP2 / CP3 full-cycle checkpoints with entry/exit criteria and measurement analysis</p>
      </div>
    </div>

    <div class="mn-cap-img reveal">
      <img src="/solutions/miniapp/images/process-monitoring.png" alt="Process Monitoring System" />
      <div class="mn-img-cap">Process Monitoring System</div>
    </div>
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
.mn-ucd-gal-col { flex: 1; display: flex; flex-direction: column; gap: 14px; }
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
}
</style>
