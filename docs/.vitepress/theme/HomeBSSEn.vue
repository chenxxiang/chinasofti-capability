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
  document.querySelectorAll('.bss-counter').forEach(el => obs.observe(el))
}
</script>

<template>
<div class="bss-page">
<div class="bss-mesh-bg"></div>

<NavBar active="solutions" />

<!-- HERO -->
<section class="bss-hero">
  <div class="bss-hero-bg"></div>
  <div class="bss-hero-particles">
    <span></span><span></span><span></span><span></span><span></span>
  </div>
  <div class="bss-hero-inner">
    <div class="bss-hero-badge">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.75a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/></svg>
      Telecom BSS Service Solution
    </div>
    <h1>Telecom Operator<br><span class="bss-grad">BSS Professional Services</span></h1>
    <p class="bss-hero-sub">ChinaSofti and Huawei form a deep strategic alliance to deliver end-to-end BSS professional services for global telecom operators — covering requirements, customization, integration delivery, and O&amp;M support — helping operators reduce IT TCO, shorten TTM, and improve operational efficiency.</p>
    <div class="bss-hero-tags">
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> CSI × Huawei Strategic Alliance</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> End-to-End Delivery</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10z"/></svg> Multi-Country Case Studies</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> 1000+ Expert Engineers</span>
    </div>
  </div>
  <div class="bss-hero-visual">
    <div class="bss-orbit">
      <div class="bss-orbit-ring bss-ring1"></div>
      <div class="bss-orbit-ring bss-ring2"></div>
      <div class="bss-orbit-center">BSS</div>
      <div class="bss-orbit-node" style="--a:0deg"><span>CRM</span></div>
      <div class="bss-orbit-node" style="--a:72deg"><span>CBS</span></div>
      <div class="bss-orbit-node" style="--a:144deg"><span>OCS</span></div>
      <div class="bss-orbit-node" style="--a:216deg"><span>BES</span></div>
      <div class="bss-orbit-node" style="--a:288deg"><span>EPC</span></div>
    </div>
  </div>
</section>

<!-- STATS STRIP -->
<div class="bss-stats-strip">
  <div class="bss-stat-item">
    <div class="bss-stat-num"><span class="bss-counter" data-target="1000" data-suffix="+">0+</span></div>
    <div class="bss-stat-label">BSS Expert Engineers</div>
  </div>
  <div class="bss-stat-item">
    <div class="bss-stat-num"><span class="bss-counter" data-target="10" data-suffix="+">0+</span></div>
    <div class="bss-stat-label">Years of BSS Experience</div>
  </div>
  <div class="bss-stat-item">
    <div class="bss-stat-num">CMMI 5</div>
    <div class="bss-stat-label">Highest-Level SW Maturity Cert.</div>
  </div>
  <div class="bss-stat-item">
    <div class="bss-stat-num"><span class="bss-counter" data-target="30" data-suffix="%">0%</span></div>
    <div class="bss-stat-label">IT TCO Reduction Potential</div>
  </div>
  <div class="bss-stat-item">
    <div class="bss-stat-num">WIN³</div>
    <div class="bss-stat-label">Customer · Huawei · CSI All Win</div>
  </div>
</div>

<!-- BODY -->
<div class="bss-body">

  <!-- Challenges -->
  <section class="bss-sec reveal" id="challenges">
    <div class="bss-sec-hd">
      <div class="bss-eyebrow">Pain Points · Common Challenges</div>
      <h2 class="bss-sec-title">Core BSS Challenges Facing Operators</h2>
      <p class="bss-sec-sub">When operators face these challenges, ChinaSofti's BSS service solution can deliver significant advantages</p>
    </div>
    <div class="bss-challenges-grid">
      <div class="bss-challenge-card">
        <div class="bss-challenge-icon" style="background:linear-gradient(135deg,#059669,#10b981)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <div class="bss-challenge-title">Legacy Systems Blocking Growth</div>
        <div class="bss-challenge-desc">Outdated BSS systems unable to support broadband, 5G, or converged billing; complex O&amp;M with spiraling costs</div>
      </div>
      <div class="bss-challenge-card">
        <div class="bss-challenge-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <div class="bss-challenge-title">Complex Billing Processes</div>
        <div class="bss-challenge-desc">Insufficient capabilities in billing, Burstable offerings, and converged charging; high technical complexity and maintenance cost</div>
      </div>
      <div class="bss-challenge-card">
        <div class="bss-challenge-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        </div>
        <div class="bss-challenge-title">Low Service Responsiveness</div>
        <div class="bss-challenge-desc">Lack of specialized BSS domain knowledge and local delivery capability; slow incident response impacts customer satisfaction</div>
      </div>
      <div class="bss-challenge-card">
        <div class="bss-challenge-icon" style="background:linear-gradient(135deg,#dc2626,#f87171)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
        </div>
        <div class="bss-challenge-title">High Operational Costs</div>
        <div class="bss-challenge-desc">IT TCO continues to rise; operators need precise cost control while maintaining and improving customer experience</div>
      </div>
      <div class="bss-challenge-card">
        <div class="bss-challenge-icon" style="background:linear-gradient(135deg,#d97706,#fbbf24)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </div>
        <div class="bss-challenge-title">Low ROI</div>
        <div class="bss-challenge-desc">Need more flexible delivery (agile, on-site) and mature joint solutions to accelerate project timelines and optimize costs</div>
      </div>
      <div class="bss-challenge-card">
        <div class="bss-challenge-icon" style="background:linear-gradient(135deg,#0f766e,#14b8a6)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div class="bss-challenge-title">Limited System Integration</div>
        <div class="bss-challenge-desc">Need more than just Huawei products — a full SI capability to integrate multiple vendors into a comprehensive end-to-end solution</div>
      </div>
    </div>
  </section>

  <!-- Four Pillars -->
  <section class="bss-sec bss-sec-dark reveal" id="capability">
    <div class="bss-sec-hd">
      <div class="bss-eyebrow">Service Capability · Four Pillars</div>
      <h2 class="bss-sec-title">Four Core Service Pillars</h2>
      <p class="bss-sec-sub">Professional · Quality · Efficient · High-Value — ChinaSofti BSS Co-Sell Professional Service Solution</p>
    </div>
    <div class="bss-pillars-grid">
      <div class="bss-pillar">
        <div class="bss-pillar-num">01</div>
        <div class="bss-pillar-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="9" height="9" rx="1"/><rect x="13" y="2" width="9" height="9" rx="1"/><rect x="2" y="13" width="9" height="9" rx="1"/><rect x="13" y="13" width="9" height="9" rx="1"/></svg>
        </div>
        <div class="bss-pillar-title">Tools</div>
        <div class="bss-pillar-desc">Automated toolchain for project maintenance and delivery management; O&amp;M automation achieving <strong>zero error rate</strong>, one-click deploy &amp; release</div>
      </div>
      <div class="bss-pillar">
        <div class="bss-pillar-num">02</div>
        <div class="bss-pillar-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        </div>
        <div class="bss-pillar-title">Process</div>
        <div class="bss-pillar-desc">Mature agile service process and quality management system; incident response <strong>faster than standard SLA</strong>, with 90%+ issues resolved at first line</div>
      </div>
      <div class="bss-pillar">
        <div class="bss-pillar-num">03</div>
        <div class="bss-pillar-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div class="bss-pillar-title">Experts</div>
        <div class="bss-pillar-desc">Complete E2E expert resource pool; 30% key roles, 30+ core senior engineers with <strong>10+ years</strong> of system integration experience</div>
      </div>
      <div class="bss-pillar">
        <div class="bss-pillar-num">04</div>
        <div class="bss-pillar-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3M6.343 6.343l-.707-.707"/></svg>
        </div>
        <div class="bss-pillar-title">Innovation</div>
        <div class="bss-pillar-desc">Compelling value proposition to drive <strong>network evolution</strong>, accelerate time-to-market, and maximize return on investment (ROI)</div>
      </div>
    </div>
  </section>

  <!-- E2E Scope -->
  <section class="bss-sec reveal" id="scope">
    <div class="bss-sec-hd">
      <div class="bss-eyebrow">Service Scope · End-to-End Coverage</div>
      <h2 class="bss-sec-title">Full E2E Service Coverage</h2>
      <p class="bss-sec-sub">ChinaSofti's BSS service scope covers the complete end-to-end scenario</p>
    </div>
    <div class="bss-scope-flow">
      <div class="bss-scope-step">
        <div class="bss-scope-step-num">01</div>
        <div class="bss-scope-step-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
        </div>
        <div class="bss-scope-step-title">Survey & Planning</div>
        <div class="bss-scope-step-tags"><span>Requirements</span><span>Infra Setup</span><span>Feasibility</span></div>
      </div>
      <div class="bss-scope-arrow">→</div>
      <div class="bss-scope-step">
        <div class="bss-scope-step-num">02</div>
        <div class="bss-scope-step-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        </div>
        <div class="bss-scope-step-title">Product Customization</div>
        <div class="bss-scope-step-tags"><span>BES</span><span>CRM</span><span>CBS</span><span>OCS</span></div>
      </div>
      <div class="bss-scope-arrow">→</div>
      <div class="bss-scope-step">
        <div class="bss-scope-step-num">03</div>
        <div class="bss-scope-step-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
        </div>
        <div class="bss-scope-step-title">Integration Delivery</div>
        <div class="bss-scope-step-tags"><span>Business Verify</span><span>Data Migration</span><span>BCT</span></div>
      </div>
      <div class="bss-scope-arrow">→</div>
      <div class="bss-scope-step">
        <div class="bss-scope-step-num">04</div>
        <div class="bss-scope-step-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <div class="bss-scope-step-title">O&amp;M Support</div>
        <div class="bss-scope-step-tags"><span>Go-Live</span><span>Maintenance</span><span>Monitoring</span></div>
      </div>
    </div>
  </section>

  <!-- Win-Win-Win -->
  <section class="bss-sec bss-sec-alt reveal" id="winwin">
    <div class="bss-sec-hd">
      <div class="bss-eyebrow">Partnership · Business Model</div>
      <h2 class="bss-sec-title">CSI × Huawei × Customer — Triple Win Alliance</h2>
      <p class="bss-sec-sub">Back-to-back strategic partnership — CSI can rapidly coordinate Huawei resources to resolve BSS product baseline issues</p>
    </div>
    <div class="bss-win-grid">
      <div class="bss-win-card bss-win-customer">
        <div class="bss-win-badge">Customer</div>
        <div class="bss-win-icon">🏢</div>
        <div class="bss-win-title">Telecom Operator</div>
        <ul class="bss-win-list">
          <li>Reduced IT Total Cost of Ownership</li>
          <li>Improved efficiency, shorter TTM</li>
          <li>More customized professional services</li>
          <li>Service quality on par with Huawei</li>
        </ul>
      </div>
      <div class="bss-win-center">
        <div class="bss-win-center-text">WIN<sup>3</sup></div>
      </div>
      <div class="bss-win-card bss-win-huawei">
        <div class="bss-win-badge">Huawei</div>
        <div class="bss-win-icon">🔶</div>
        <div class="bss-win-title">Huawei</div>
        <ul class="bss-win-list">
          <li>Enhanced software License value</li>
          <li>Accelerated annual renewal sales</li>
          <li>Focus on product evolution roadmap</li>
          <li>Open customization capability to SI partners</li>
        </ul>
      </div>
      <div class="bss-win-card bss-win-csi">
        <div class="bss-win-badge">ChinaSofti</div>
        <div class="bss-win-icon">💼</div>
        <div class="bss-win-title">ChinaSofti</div>
        <ul class="bss-win-list">
          <li>Customer-focused customization &amp; delivery</li>
          <li>End-to-end professional services</li>
          <li>Multi-vendor integration solutions</li>
          <li>Independent overseas presales capability</li>
        </ul>
      </div>
    </div>
    <div class="bss-biz-models">
      <div class="bss-sec-hd" style="margin-top:56px">
        <div class="bss-eyebrow">Business Model · Three Engagement Types</div>
        <h3 class="bss-sec-title" style="font-size:1.5rem">Flexible Partnership Models</h3>
      </div>
      <div class="bss-model-cards">
        <div class="bss-model-card">
          <div class="bss-model-label">Co-Sell Split-Sign</div>
          <div class="bss-model-desc">CSI and Huawei bid jointly but sign separate contracts. CSI acts as PSI for customization and delivery; Huawei provides product License and SNS services</div>
        </div>
        <div class="bss-model-card">
          <div class="bss-model-label">Co-Sell Unified-Sign</div>
          <div class="bss-model-desc">Joint brand, single contract — CSI and Huawei jointly deliver a one-stop BSS solution, with unified accountability for delivery quality</div>
        </div>
        <div class="bss-model-card">
          <div class="bss-model-label">Managed Services Direct</div>
          <div class="bss-model-desc">CSI signs directly with the operator for long-term BSS O&amp;M, optimization, and continuous delivery — billed on service outcomes</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Cases -->
  <section class="bss-sec reveal" id="cases">
    <div class="bss-sec-hd">
      <div class="bss-eyebrow">Success Cases · Reference Projects</div>
      <h2 class="bss-sec-title">Deployed Overseas Project Cases</h2>
    </div>
    <div class="bss-cases-grid">
      <div class="bss-case-card bss-case-main">
        <div class="bss-case-tag">Key Reference Case</div>
        <div class="bss-case-title">Country M · Operator T · BSS Replacement</div>
        <div class="bss-case-quote">"We made the science, you fly the rocket!"</div>
        <div class="bss-case-body">
          <div class="bss-case-section">
            <div class="bss-case-section-title">Customer Background</div>
            <p>Operator T is the second-largest fixed-line operator in Country M, primarily offering broadband services with rapid user growth. Aging billing systems lacked converged charging capabilities critical to business expansion.</p>
          </div>
          <div class="bss-case-section">
            <div class="bss-case-section-title">Customer Pain Points</div>
            <div class="bss-case-pain-points">
              <span>Legacy system can't support business growth</span>
              <span>Poor billing &amp; collection UX</span>
              <span>2B broadband leasing not supported</span>
              <span>Low O&amp;M efficiency</span>
            </div>
          </div>
          <div class="bss-case-section">
            <div class="bss-case-section-title">Partnership Model</div>
            <p>ChinaSofti acted as PSI. The CSI-Huawei Co-Sell solution <strong>won the bid in 2018 Q4</strong>. CSI handled CBS system integration, customization, and training; Huawei provided SNS services and product License.</p>
          </div>
        </div>
        <div class="bss-case-result">
          <span>✅ 2017 Q3: RFP issued</span>
          <span>✅ 2018 Q2: CSI engaged</span>
          <span>✅ 2018 Q4: Contract awarded</span>
        </div>
      </div>
      <div class="bss-case-side">
        <div class="bss-case-small">
          <div class="bss-case-small-icon">🌏</div>
          <div class="bss-case-small-title">Country B · Operator T</div>
          <div class="bss-case-small-desc">Deep customer engagement, advancing CSI-Huawei Co-Sell solution to expand overseas BSS footprint</div>
        </div>
        <div class="bss-case-small">
          <div class="bss-case-small-icon">🏆</div>
          <div class="bss-case-small-title">Huawei SEA Core Partner Award</div>
          <div class="bss-case-small-desc">ChinaSofti received the 2019 Huawei Southeast Asia Core Partner award, recognizing excellence in BSS domain expertise</div>
        </div>
        <div class="bss-case-small">
          <div class="bss-case-small-icon">📋</div>
          <div class="bss-case-small-title">Independent Presales Capability</div>
          <div class="bss-case-small-desc">CSI now has independent overseas BSS presales capability — identifying opportunities, developing solutions, and leading commercial negotiations</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Certs -->
  <section class="bss-sec bss-sec-dark reveal" id="certs">
    <div class="bss-sec-hd">
      <div class="bss-eyebrow">Certifications · Quality Assurance</div>
      <h2 class="bss-sec-title">International Top-Tier Certification Portfolio</h2>
    </div>
    <div class="bss-cert-grid">
      <div class="bss-cert-item">
        <div class="bss-cert-badge">CMMI 5</div>
        <div class="bss-cert-name">Highest SW Capability Maturity</div>
      </div>
      <div class="bss-cert-item">
        <div class="bss-cert-badge">ISO 9001</div>
        <div class="bss-cert-name">Quality Management System</div>
      </div>
      <div class="bss-cert-item">
        <div class="bss-cert-badge">ISO 27001</div>
        <div class="bss-cert-name">Information Security Mgmt</div>
      </div>
      <div class="bss-cert-item">
        <div class="bss-cert-badge">ISO 20000</div>
        <div class="bss-cert-name">IT Service Management</div>
      </div>
      <div class="bss-cert-item">
        <div class="bss-cert-badge">ITSS L2</div>
        <div class="bss-cert-name">IT Service Standard Cert.</div>
      </div>
      <div class="bss-cert-item">
        <div class="bss-cert-badge">CS4</div>
        <div class="bss-cert-name">IS Build &amp; Service Capability</div>
      </div>
    </div>
  </section>

</div>

<footer class="bss-footer">
  <div class="bss-footer-inner">
    <div class="bss-footer-brand">ChinaSofti · Telecom BSS Solution</div>
    <div class="bss-footer-copy">© 2025 ChinaSofti International. All rights reserved.</div>
  </div>
</footer>

</div>
</template>

<style scoped>
.bss-page { min-height: 100vh; background: #f8fafc; font-family: 'Inter', system-ui, sans-serif; color: #1e293b; }
.bss-mesh-bg { position: fixed; inset: 0; z-index: 0; pointer-events: none; background: radial-gradient(ellipse 80% 50% at 20% 0%, rgba(5,150,105,0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(16,185,129,0.05) 0%, transparent 60%); }
.bss-hero { position: relative; min-height: 540px; display: flex; align-items: center; padding: 100px 72px 60px; gap: 48px; overflow: hidden; }
.bss-hero-bg { position: absolute; inset: 0; background: linear-gradient(135deg, #064e3b 0%, #065f46 40%, #047857 70%, #059669 100%); }
.bss-hero-particles { position: absolute; inset: 0; overflow: hidden; }
.bss-hero-particles span { position: absolute; border-radius: 50%; background: rgba(255,255,255,0.06); animation: bss-float 8s infinite ease-in-out; }
.bss-hero-particles span:nth-child(1) { width: 300px; height: 300px; top: -80px; right: 10%; animation-delay: 0s; }
.bss-hero-particles span:nth-child(2) { width: 180px; height: 180px; top: 60%; left: 5%; animation-delay: 2s; }
.bss-hero-particles span:nth-child(3) { width: 120px; height: 120px; top: 20%; left: 30%; animation-delay: 4s; }
.bss-hero-particles span:nth-child(4) { width: 80px; height: 80px; bottom: 10%; right: 25%; animation-delay: 1s; }
.bss-hero-particles span:nth-child(5) { width: 200px; height: 200px; bottom: -60px; right: 35%; animation-delay: 3s; }
@keyframes bss-float { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-20px) scale(1.05)} }
.bss-hero-inner { position: relative; z-index: 2; flex: 1; max-width: 560px; }
.bss-hero-badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); border-radius: 100px; color: rgba(255,255,255,0.9); font-size: 0.82rem; font-weight: 600; margin-bottom: 20px; backdrop-filter: blur(8px); }
.bss-hero-inner h1 { font-size: 3rem; font-weight: 800; color: #fff; line-height: 1.15; margin: 0 0 20px; }
.bss-grad { background: linear-gradient(135deg, #6ee7b7, #34d399); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.bss-hero-sub { font-size: 1rem; color: rgba(255,255,255,0.82); line-height: 1.75; margin: 0 0 28px; }
.bss-hero-tags { display: flex; flex-wrap: wrap; gap: 10px; }
.bss-hero-tags span { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2); border-radius: 100px; color: rgba(255,255,255,0.9); font-size: 0.83rem; font-weight: 500; }
.bss-hero-visual { position: relative; z-index: 2; flex-shrink: 0; width: 320px; height: 320px; display: flex; align-items: center; justify-content: center; }
.bss-orbit { position: relative; width: 280px; height: 280px; }
.bss-orbit-ring { position: absolute; border-radius: 50%; border: 1px solid rgba(255,255,255,0.15); top: 50%; left: 50%; transform: translate(-50%, -50%); }
.bss-ring1 { width: 200px; height: 200px; animation: bss-spin 20s linear infinite; }
.bss-ring2 { width: 270px; height: 270px; animation: bss-spin 30s linear infinite reverse; border-style: dashed; }
@keyframes bss-spin { to { transform: translate(-50%,-50%) rotate(360deg); } }
.bss-orbit-center { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 80px; height: 80px; background: rgba(255,255,255,0.15); backdrop-filter: blur(12px); border: 2px solid rgba(255,255,255,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 1.1rem; font-weight: 800; z-index: 3; }
.bss-orbit-node { position: absolute; top: 50%; left: 50%; width: 48px; height: 48px; margin: -24px 0 0 -24px; transform: rotate(var(--a)) translateX(100px) rotate(calc(-1 * var(--a))); }
.bss-orbit-node span { display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; background: rgba(255,255,255,0.18); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.3); border-radius: 10px; color: #fff; font-size: 0.72rem; font-weight: 700; }
.bss-stats-strip { position: relative; z-index: 1; background: #fff; border-bottom: 1px solid #e2e8f0; padding: 28px 72px; display: flex; justify-content: center; gap: 0; box-shadow: 0 2px 20px rgba(0,0,0,0.06); }
.bss-stat-item { flex: 1; text-align: center; padding: 0 24px; border-right: 1px solid #e2e8f0; }
.bss-stat-item:last-child { border-right: none; }
.bss-stat-num { font-size: 2rem; font-weight: 800; color: #059669; line-height: 1.2; }
.bss-stat-label { font-size: 0.8rem; color: #64748b; margin-top: 4px; }
.bss-body { max-width: 1200px; margin: 0 auto; padding: 0 48px 80px; }
.bss-sec { padding: 72px 0; border-bottom: 1px solid #e2e8f0; }
.bss-sec:last-child { border-bottom: none; }
.bss-sec-dark { background: #f8fafc; margin: 0 -48px; padding: 72px 48px; }
.bss-sec-alt { background: linear-gradient(135deg, #ecfdf5, #f0fdf4); margin: 0 -48px; padding: 72px 48px; }
.bss-sec-hd { text-align: center; margin-bottom: 48px; }
.bss-eyebrow { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #059669; margin-bottom: 10px; }
.bss-sec-title { font-size: 2rem; font-weight: 800; color: #0f172a; margin: 0 0 12px; }
.bss-sec-sub { font-size: 1rem; color: #64748b; line-height: 1.7; max-width: 600px; margin: 0 auto; }
.reveal { opacity: 0; transform: translateY(28px); transition: opacity .6s ease, transform .6s ease; }
.reveal.in { opacity: 1; transform: none; }
.bss-challenges-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.bss-challenge-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 28px 24px; transition: transform .25s, box-shadow .25s; }
.bss-challenge-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.1); }
.bss-challenge-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
.bss-challenge-title { font-size: 1rem; font-weight: 700; color: #0f172a; margin-bottom: 8px; }
.bss-challenge-desc { font-size: 0.88rem; color: #64748b; line-height: 1.65; }
.bss-pillars-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.bss-pillar { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 32px 24px; text-align: center; transition: transform .25s, box-shadow .25s; }
.bss-pillar:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(5,150,105,0.12); border-color: #059669; }
.bss-pillar-num { font-size: 0.72rem; font-weight: 800; letter-spacing: 0.1em; color: #059669; margin-bottom: 12px; }
.bss-pillar-icon { color: #059669; margin-bottom: 12px; display: flex; justify-content: center; }
.bss-pillar-title { font-size: 1.2rem; font-weight: 800; color: #0f172a; margin-bottom: 12px; }
.bss-pillar-desc { font-size: 0.85rem; color: #64748b; line-height: 1.65; }
.bss-scope-flow { display: flex; align-items: center; gap: 12px; }
.bss-scope-step { flex: 1; background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 28px 20px; text-align: center; }
.bss-scope-step-num { font-size: 0.72rem; font-weight: 800; letter-spacing: 0.1em; color: #059669; margin-bottom: 12px; }
.bss-scope-step-icon { color: #059669; margin-bottom: 10px; display: flex; justify-content: center; }
.bss-scope-step-title { font-size: 1rem; font-weight: 700; color: #0f172a; margin-bottom: 12px; }
.bss-scope-step-tags { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; }
.bss-scope-step-tags span { padding: 3px 10px; background: #ecfdf5; border: 1px solid #a7f3d0; color: #059669; font-size: 0.75rem; font-weight: 600; border-radius: 100px; }
.bss-scope-arrow { font-size: 1.5rem; color: #059669; flex-shrink: 0; }
.bss-win-grid { display: grid; grid-template-columns: 1fr auto 1fr 1fr; gap: 20px; align-items: start; }
.bss-win-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 28px 24px; }
.bss-win-badge { display: inline-block; padding: 3px 12px; background: #059669; color: #fff; font-size: 0.75rem; font-weight: 700; border-radius: 100px; margin-bottom: 14px; }
.bss-win-icon { font-size: 2rem; margin-bottom: 10px; }
.bss-win-title { font-size: 1rem; font-weight: 700; color: #0f172a; margin-bottom: 14px; }
.bss-win-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
.bss-win-list li { font-size: 0.85rem; color: #64748b; padding-left: 16px; position: relative; line-height: 1.5; }
.bss-win-list li::before { content: '✓'; position: absolute; left: 0; color: #059669; font-weight: 700; }
.bss-win-center { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px 0; }
.bss-win-center-text { font-size: 2.5rem; font-weight: 900; background: linear-gradient(135deg, #059669, #10b981); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.bss-win-customer .bss-win-badge { background: #1d4ed8; }
.bss-win-huawei .bss-win-badge { background: #dc2626; }
.bss-biz-models { margin-top: 0; }
.bss-model-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.bss-model-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 28px 24px; border-top: 3px solid #059669; }
.bss-model-label { font-size: 1rem; font-weight: 700; color: #059669; margin-bottom: 12px; }
.bss-model-desc { font-size: 0.88rem; color: #64748b; line-height: 1.65; }
.bss-cases-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 24px; }
.bss-case-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 36px; border-top: 4px solid #059669; }
.bss-case-tag { display: inline-block; padding: 3px 12px; background: #ecfdf5; color: #059669; font-size: 0.75rem; font-weight: 700; border-radius: 100px; border: 1px solid #a7f3d0; margin-bottom: 14px; }
.bss-case-title { font-size: 1.3rem; font-weight: 800; color: #0f172a; margin-bottom: 10px; }
.bss-case-quote { font-size: 0.9rem; color: #059669; font-style: italic; font-weight: 600; margin-bottom: 20px; padding: 10px 16px; background: #ecfdf5; border-left: 3px solid #059669; border-radius: 4px; }
.bss-case-body { display: flex; flex-direction: column; gap: 16px; }
.bss-case-section-title { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #059669; margin-bottom: 6px; }
.bss-case-body p { font-size: 0.88rem; color: #64748b; line-height: 1.7; margin: 0; }
.bss-case-pain-points { display: flex; flex-wrap: wrap; gap: 8px; }
.bss-case-pain-points span { padding: 4px 12px; background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; font-size: 0.78rem; font-weight: 500; border-radius: 100px; }
.bss-case-result { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0; }
.bss-case-result span { font-size: 0.83rem; color: #059669; font-weight: 600; }
.bss-case-side { display: flex; flex-direction: column; gap: 16px; }
.bss-case-small { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px 20px; }
.bss-case-small-icon { font-size: 1.8rem; margin-bottom: 8px; }
.bss-case-small-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin-bottom: 8px; }
.bss-case-small-desc { font-size: 0.83rem; color: #64748b; line-height: 1.6; }
.bss-cert-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px; }
.bss-cert-item { text-align: center; padding: 24px 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; }
.bss-cert-badge { font-size: 1rem; font-weight: 800; color: #059669; background: #ecfdf5; border: 2px solid #a7f3d0; border-radius: 8px; padding: 8px 12px; display: inline-block; margin-bottom: 10px; }
.bss-cert-name { font-size: 0.75rem; color: #64748b; line-height: 1.4; }
.bss-footer { background: #0f172a; padding: 32px 72px; }
.bss-footer-inner { display: flex; justify-content: space-between; align-items: center; }
.bss-footer-brand { color: rgba(255,255,255,0.9); font-weight: 700; font-size: 0.95rem; }
.bss-footer-copy { color: rgba(255,255,255,0.4); font-size: 0.8rem; }
@media (max-width: 900px) {
  .bss-hero { flex-direction: column; padding: 80px 24px 40px; }
  .bss-hero-visual { display: none; }
  .bss-hero-inner h1 { font-size: 2.2rem; }
  .bss-stats-strip { flex-wrap: wrap; padding: 20px 24px; }
  .bss-stat-item { width: 45%; border-right: none; }
  .bss-body { padding: 0 20px 60px; }
  .bss-sec-dark, .bss-sec-alt { margin: 0 -20px; padding: 48px 20px; }
  .bss-challenges-grid { grid-template-columns: 1fr 1fr; }
  .bss-pillars-grid { grid-template-columns: 1fr 1fr; }
  .bss-scope-flow { flex-direction: column; }
  .bss-scope-arrow { transform: rotate(90deg); }
  .bss-win-grid { grid-template-columns: 1fr 1fr; }
  .bss-win-center { display: none; }
  .bss-model-cards { grid-template-columns: 1fr; }
  .bss-cases-grid { grid-template-columns: 1fr; }
  .bss-cert-grid { grid-template-columns: repeat(3, 1fr); }
  .bss-footer { padding: 24px 20px; }
  .bss-footer-inner { flex-direction: column; gap: 8px; text-align: center; }
}
@media (max-width: 600px) {
  .bss-challenges-grid { grid-template-columns: 1fr; }
  .bss-pillars-grid { grid-template-columns: 1fr; }
  .bss-win-grid { grid-template-columns: 1fr; }
  .bss-cert-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
