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
      BSS Managed Services
    </div>
    <h1>Telecom Operator<br><span class="ms-grad">Managed Services Solution</span></h1>
    <p class="ms-hero-sub">ChinaSofti International, proven by the DIGI Malaysia project, delivers end-to-end BSS Managed Services in partnership with Huawei — higher quality than Huawei direct delivery at lower cost, helping global telecom operators boost operational efficiency and product value.</p>
    <div class="ms-hero-tags">
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> ChinaSofti × Huawei Back-to-Back Partnership</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg> 90%+ First-Line Resolution</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10z"/></svg> DIGI Project Validated</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> Lower Cost than Huawei Direct Delivery</span>
    </div>
  </div>
  <div class="ms-hero-visual">
    <div class="ms-rings-wrap">
      <div class="ms-ring ms-ring1"></div>
      <div class="ms-ring ms-ring2"></div>
      <div class="ms-ring ms-ring3"></div>
      <div class="ms-center-badge">MS</div>
      <div class="ms-float-tag ms-tag1">Framework</div>
      <div class="ms-float-tag ms-tag2">Service</div>
      <div class="ms-float-tag ms-tag3">Talent</div>
      <div class="ms-float-tag ms-tag4">Quality</div>
      <div class="ms-float-tag ms-tag5">Tools</div>
    </div>
  </div>
</section>

<!-- STATS -->
<div class="ms-stats-strip">
  <div class="ms-stat"><div class="ms-stat-num">DIGI</div><div class="ms-stat-label">Malaysia Benchmark Project Validated</div></div>
  <div class="ms-stat"><div class="ms-stat-num"><span class="ms-counter" data-target="90" data-suffix="%+">0%+</span></div><div class="ms-stat-label">First-Line Issue Resolution Rate</div></div>
  <div class="ms-stat"><div class="ms-stat-num">2.3M<span style="font-size:1rem">→</span>10M+</div><div class="ms-stat-label">USD Contract Growth Roadmap</div></div>
  <div class="ms-stat"><div class="ms-stat-num">3 Phases</div><div class="ms-stat-label">CBS → Full BSS → Enterprise</div></div>
  <div class="ms-stat"><div class="ms-stat-num">CMMI 5</div><div class="ms-stat-label">Highest Software Capability Maturity</div></div>
</div>

<div class="ms-body">

  <!-- What is Managed Services -->
  <section class="ms-sec reveal" id="intro">
    <div class="ms-sec-hd">
      <div class="ms-eyebrow">Overview · Solution Introduction</div>
      <h2 class="ms-sec-title">What is BSS Managed Services?</h2>
    </div>
    <div class="ms-intro-grid">
      <div class="ms-intro-text">
        <p>Managed Services means ChinaSofti International acts as a professional service provider, taking over the long-term operation and maintenance of telecom operators' BSS systems — including daily maintenance, fault handling, version upgrades, and performance optimization throughout the full lifecycle.</p>
        <p>Based on the success of the <strong>DIGI Malaysia project</strong>, ChinaSofti has built a mature managed services capability framework: <strong>better quality than Huawei, lower cost</strong>, and maintains a back-to-back strategic partnership with Huawei for rapid resolution of product baseline issues.</p>
        <div class="ms-value-tags">
          <span class="ms-vtag ms-vtag-blue">🎯 Quantifiable Continuous ROI</span>
          <span class="ms-vtag ms-vtag-purple">⚡ Fast Response</span>
          <span class="ms-vtag ms-vtag-indigo">🔧 Automation-First Ops</span>
          <span class="ms-vtag ms-vtag-violet">🤝 Direct Huawei Channel</span>
        </div>
      </div>
      <div class="ms-intro-cards">
        <div class="ms-kv-card">
          <div class="ms-kv-num">90%+</div>
          <div class="ms-kv-desc">Issues resolved at ChinaSofti first line without escalating to Huawei, with faster response times</div>
        </div>
        <div class="ms-kv-card">
          <div class="ms-kv-num">≤ Huawei</div>
          <div class="ms-kv-desc">Service cost below Huawei direct delivery while customer-perceived quality surpasses Huawei</div>
        </div>
        <div class="ms-kv-card">
          <div class="ms-kv-num">100~150</div>
          <div class="ms-kv-desc">USD K/year — DIGI projected annual contract value (5-year forecast)</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Who Needs Managed Services -->
  <section class="ms-sec ms-sec-alt reveal" id="target">
    <div class="ms-sec-hd">
      <div class="ms-eyebrow">Target Customers · Ideal Profile</div>
      <h2 class="ms-sec-title">Which Operators Need Managed Services?</h2>
      <p class="ms-sec-sub">BSS Managed Services delivers maximum value when operators exhibit the following characteristics</p>
    </div>
    <div class="ms-target-grid">
      <div class="ms-target-card">
        <div class="ms-target-icon" style="background:linear-gradient(135deg,#4f46e5,#6366f1)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        </div>
        <div class="ms-target-title">Rapid Business Growth</div>
        <div class="ms-target-desc">Newly obtained mobile licenses, about to connect to mobile internet networks, with significantly increasing business volumes requiring O&M capabilities to keep pace</div>
      </div>
      <div class="ms-target-card">
        <div class="ms-target-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
        </div>
        <div class="ms-target-title">High Product Complexity</div>
        <div class="ms-target-desc">Considering converged products with cloud services and software services, increasing product complexity requires professional integrated management capabilities</div>
      </div>
      <div class="ms-target-card">
        <div class="ms-target-icon" style="background:linear-gradient(135deg,#dc2626,#f87171)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </div>
        <div class="ms-target-title">High Regulatory Compliance Risk</div>
        <div class="ms-target-desc">Strict national regulations, sensitive to customer complaints, with significant risk of license suspension or compensation penalties from service issues</div>
      </div>
      <div class="ms-target-card">
        <div class="ms-target-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <div class="ms-target-title">Insufficient Ops Capability</div>
        <div class="ms-target-desc">Concerned that internal operations team cannot keep up with newly deployed production systems; needs professional support team to ensure stability</div>
      </div>
      <div class="ms-target-card">
        <div class="ms-target-icon" style="background:linear-gradient(135deg,#d97706,#fbbf24)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <div class="ms-target-title">ARPU Decline, Cost Pressure</div>
        <div class="ms-target-desc">Declining ARPU values requiring more precise TCO control; digital transformation efficiency drive needs to reduce operational labor costs</div>
      </div>
      <div class="ms-target-card">
        <div class="ms-target-icon" style="background:linear-gradient(135deg,#059669,#10b981)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="2" width="9" height="9" rx="1"/><rect x="13" y="2" width="9" height="9" rx="1"/><rect x="2" y="13" width="9" height="9" rx="1"/><rect x="13" y="13" width="9" height="9" rx="1"/></svg>
        </div>
        <div class="ms-target-title">Urgent Need for Automation</div>
        <div class="ms-target-desc">Urgent demand for automated O&M capabilities, seeking to replace manual repetitive operations through toolchains and intelligent platforms</div>
      </div>
    </div>
    <div class="ms-geo-hint">
      <div class="ms-geo-title">📍 Market Priority</div>
      <div class="ms-geo-items">
        <div class="ms-geo-item"><span class="ms-geo-phase">Near-Term</span><span class="ms-geo-area">SE Asia · Latin America</span><span class="ms-geo-note">CBS/BES-based operators</span></div>
        <div class="ms-geo-sep">→</div>
        <div class="ms-geo-item"><span class="ms-geo-phase">Mid-Term</span><span class="ms-geo-area">Middle East · Africa</span><span class="ms-geo-note">Infra and Cloud Ops operators</span></div>
        <div class="ms-geo-sep">→</div>
        <div class="ms-geo-item"><span class="ms-geo-phase">Long-Term</span><span class="ms-geo-area">Europe · Enterprise</span><span class="ms-geo-note">High SLA requirements, diverse products</span></div>
      </div>
    </div>
  </section>

  <!-- Five Core Capabilities -->
  <section class="ms-sec reveal" id="capability">
    <div class="ms-sec-hd">
      <div class="ms-eyebrow">Core Capability · Five Pillars</div>
      <h2 class="ms-sec-title">Five Core Managed Services Capabilities</h2>
      <p class="ms-sec-sub">ChinaSofti's managed services framework, validated by the DIGI project, covers five dimensions: Framework, Service, Talent, Quality, and Tools</p>
    </div>
    <div class="ms-cap-grid">
      <div class="ms-cap-card ms-cap-main">
        <div class="ms-cap-num">01</div>
        <div class="ms-cap-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
        <div class="ms-cap-title">Framework</div>
        <div class="ms-cap-subtitle">Robust Governance Model</div>
        <div class="ms-cap-desc">Comprehensive BSS Managed Services governance model covering second-line maintenance, solution delivery, SLA/KPI management responsibilities, forming a robust operational management framework</div>
      </div>
      <div class="ms-cap-card">
        <div class="ms-cap-num">02</div>
        <div class="ms-cap-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
        <div class="ms-cap-title">Service</div>
        <div class="ms-cap-subtitle">Rapid Response Mechanism</div>
        <div class="ms-cap-desc">Three-tier response: Customer→ChinaSofti→Huawei. <strong>90%+ of issues resolved at the ChinaSofti tier</strong>, faster response than Huawei, with unchanged speed for baseline coordination</div>
      </div>
      <div class="ms-cap-card">
        <div class="ms-cap-num">03</div>
        <div class="ms-cap-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <div class="ms-cap-title">Talent</div>
        <div class="ms-cap-subtitle">Optimized Team Formation</div>
        <div class="ms-cap-desc">Stable Offshore resource pool with front-line on-site and second-line in R&D; second-line team reused across multiple projects to systematically reduce managed services costs; 30%+ key roles with 10+ years experience</div>
      </div>
      <div class="ms-cap-card">
        <div class="ms-cap-num">04</div>
        <div class="ms-cap-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
        <div class="ms-cap-title">Quality</div>
        <div class="ms-cap-subtitle">Mature Quality Assurance</div>
        <div class="ms-cap-desc">Complete quality assurance system and QA process covering quality measurement reporting and quality control workflows, meeting SLA requirements of complex products and demanding customers</div>
      </div>
      <div class="ms-cap-card">
        <div class="ms-cap-num">05</div>
        <div class="ms-cap-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="9" height="9" rx="1"/><rect x="13" y="2" width="9" height="9" rx="1"/><rect x="2" y="13" width="9" height="9" rx="1"/><rect x="13" y="13" width="9" height="9" rx="1"/></svg></div>
        <div class="ms-cap-title">Tools</div>
        <div class="ms-cap-subtitle">Automation Toolchain</div>
        <div class="ms-cap-desc">Building on Huawei's tool platform, ChinaSofti develops proprietary O&M tools including visual task management and operations factor/permission management, <strong>achieving zero-error automated operations</strong></div>
      </div>
    </div>
  </section>

  <!-- Three-Phase Roadmap -->
  <section class="ms-sec ms-sec-dark reveal" id="roadmap">
    <div class="ms-sec-hd">
      <div class="ms-eyebrow">Roadmap · Growth Plan</div>
      <h2 class="ms-sec-title">From DIGI to More — Three-Phase Expansion</h2>
      <p class="ms-sec-sub">Building on the DIGI project success, progressively expanding managed services capability boundaries</p>
    </div>
    <div class="ms-roadmap">
      <div class="ms-rm-now">
        <div class="ms-rm-badge ms-rm-now-badge">Now</div>
        <div class="ms-rm-amount">2.3M USD</div>
        <div class="ms-rm-desc">DIGI project stable operations</div>
      </div>
      <div class="ms-rm-line"></div>
      <div class="ms-rm-phase">
        <div class="ms-rm-badge">Phase 1 · Within 2 Years</div>
        <div class="ms-rm-amount">5M USD</div>
        <div class="ms-rm-title">CBS Site Managed Services</div>
        <div class="ms-rm-items">
          <div class="ms-rm-item">✦ Target Huawei CBS 5.5/3.3 operators</div>
          <div class="ms-rm-item">✦ Develop CBS O&M toolchain</div>
          <div class="ms-rm-item">✦ Prioritize SE Asia, Latin America</div>
          <div class="ms-rm-item">✦ ~200–500 person-days investment</div>
        </div>
      </div>
      <div class="ms-rm-line"></div>
      <div class="ms-rm-phase">
        <div class="ms-rm-badge">Phase 2 · Within 4 Years</div>
        <div class="ms-rm-amount">10M USD</div>
        <div class="ms-rm-title">Full BSS Managed Services</div>
        <div class="ms-rm-items">
          <div class="ms-rm-item">✦ Expand to NGBOSS/PBOSS</div>
          <div class="ms-rm-item">✦ Enter Middle East, Africa markets</div>
          <div class="ms-rm-item">✦ Infra + Cloud Ops capabilities</div>
          <div class="ms-rm-item">✦ Productize tool platform</div>
        </div>
      </div>
      <div class="ms-rm-line"></div>
      <div class="ms-rm-phase ms-rm-future">
        <div class="ms-rm-badge ms-rm-future-badge">Phase 3 · 5+ Years</div>
        <div class="ms-rm-amount">10M+ USD</div>
        <div class="ms-rm-title">Enterprise Managed Services</div>
        <div class="ms-rm-items">
          <div class="ms-rm-item">✦ High SLA European operators</div>
          <div class="ms-rm-item">✦ Mid-to-large enterprise app ops</div>
          <div class="ms-rm-item">✦ Intelligent platform incubation</div>
          <div class="ms-rm-item">✦ Build overseas brand presence</div>
        </div>
      </div>
    </div>
  </section>

  <!-- DIGI Success Case -->
  <section class="ms-sec reveal" id="digi">
    <div class="ms-sec-hd">
      <div class="ms-eyebrow">Success Case · Benchmark Project</div>
      <h2 class="ms-sec-title">DIGI Managed Services · Malaysia Benchmark Project</h2>
    </div>
    <div class="ms-case-wrap">
      <div class="ms-case-main">
        <div class="ms-case-tag">Core Case · Validated</div>
        <div class="ms-case-title">DIGI Malaysia Telecom · CBS Managed Services</div>
        <div class="ms-case-timeline">
          <div class="ms-ct-item"><div class="ms-ct-year">2013</div><div class="ms-ct-text">ChinaSofti enters via staff outsourcing, participating in Huawei CBS 3.3 delivery and managed services</div></div>
          <div class="ms-ct-item"><div class="ms-ct-year">2014</div><div class="ms-ct-text">DIGI officially launches Huawei CBS 3.3 commercial service with 12M+ subscribers</div></div>
          <div class="ms-ct-item ms-ct-key"><div class="ms-ct-year">2018</div><div class="ms-ct-text">ChinaSofti leverages <strong>customer cost pressure</strong> as entry point, signing a <strong>long-term managed services contract</strong> with DIGI</div></div>
          <div class="ms-ct-item"><div class="ms-ct-year">Next 5Y</div><div class="ms-ct-text">Projected annual contract value of <strong>USD 1–1.5M</strong>, with steady continuous growth</div></div>
        </div>
        <div class="ms-case-bg">
          <div class="ms-case-bg-title">Project Background</div>
          <p>DIGI is one of Malaysia's top-3 telecom operators with strong demand to control CBS O&M costs while improving service quality. ChinaSofti absorbed the core members of the existing managed services team, inherited Huawei's tool platform experience, and quickly established competitive advantages — ultimately winning the long-term contract with lower cost and higher quality managed services.</p>
        </div>
      </div>
      <div class="ms-case-results">
        <div class="ms-result-title">Project Outcomes</div>
        <div class="ms-result-item ms-result-green">
          <div class="ms-result-icon">✅</div>
          <div>
            <div class="ms-result-label">Quality Surpasses Huawei</div>
            <div class="ms-result-sub">Customer-perceived service quality exceeds Huawei's direct management</div>
          </div>
        </div>
        <div class="ms-result-item ms-result-blue">
          <div class="ms-result-icon">⚡</div>
          <div>
            <div class="ms-result-label">Faster Response</div>
            <div class="ms-result-sub">Faster issue response than Huawei, 90%+ resolved at first line</div>
          </div>
        </div>
        <div class="ms-result-item ms-result-purple">
          <div class="ms-result-icon">💰</div>
          <div>
            <div class="ms-result-label">Lower Cost</div>
            <div class="ms-result-sub">Delivery cost below Huawei at equivalent service levels</div>
          </div>
        </div>
        <div class="ms-result-item ms-result-indigo">
          <div class="ms-result-icon">🔧</div>
          <div>
            <div class="ms-result-label">Automation Tool Assets</div>
            <div class="ms-result-sub">Independently developed and accumulated proprietary automated O&M tools</div>
          </div>
        </div>
        <div class="ms-digi-quote">"Equivalent quality to Huawei Managed Services — at lower cost!"</div>
      </div>
    </div>
  </section>

  <!-- Competitive Advantages -->
  <section class="ms-sec ms-sec-alt reveal" id="advantage">
    <div class="ms-sec-hd">
      <div class="ms-eyebrow">Competitive Edge · Why Choose Us</div>
      <h2 class="ms-sec-title">Why Choose ChinaSofti Managed Services?</h2>
    </div>
    <div class="ms-adv-grid">
      <div class="ms-adv-card">
        <div class="ms-adv-icon">🤝</div>
        <div class="ms-adv-title">Huawei Back-to-Back Partner</div>
        <div class="ms-adv-desc">Strategic back-to-back partnership with Huawei; product baseline issues rapidly coordinated with Huawei resources with no delay in coordination speed</div>
      </div>
      <div class="ms-adv-card">
        <div class="ms-adv-icon">🔬</div>
        <div class="ms-adv-title">R&D DNA</div>
        <div class="ms-adv-desc">Project team with strong R&D capabilities can independently develop automation tools based on O&M requirements, continuously building proprietary toolchain assets</div>
      </div>
      <div class="ms-adv-card">
        <div class="ms-adv-icon">🌍</div>
        <div class="ms-adv-title">Offshore Cost Advantage</div>
        <div class="ms-adv-desc">Mature Offshore team model with on-site front-line and R&D second-line; second-line team reused across multiple projects to systematically reduce managed services costs</div>
      </div>
      <div class="ms-adv-card">
        <div class="ms-adv-icon">🏆</div>
        <div class="ms-adv-title">DIGI Validated DNA</div>
        <div class="ms-adv-desc">Complete managed services DNA from the DIGI Malaysia project, rapidly replicable to operators in SE Asia, Latin America, and the Middle East</div>
      </div>
      <div class="ms-adv-card">
        <div class="ms-adv-icon">📊</div>
        <div class="ms-adv-title">Mature Methodology</div>
        <div class="ms-adv-desc">Combining Huawei's tool platform with ChinaSofti's proprietary tools, mature service processes and quality systems supporting high-standard SLA requirements</div>
      </div>
      <div class="ms-adv-card">
        <div class="ms-adv-icon">📈</div>
        <div class="ms-adv-title">Quantifiable ROI</div>
        <div class="ms-adv-desc">BSS Managed Services delivers quantifiable, continuous ROI for operators: lower operational costs, shorter TTM, and improved customer satisfaction scores</div>
      </div>
    </div>
  </section>

</div>

<footer class="ms-footer">
  <div class="ms-footer-inner">
    <div class="ms-footer-brand">ChinaSofti International · Managed Services Solution</div>
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
