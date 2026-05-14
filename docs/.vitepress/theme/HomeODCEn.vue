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
      Offshore Development Center · ODC
    </div>
    <h1>ODC <span class="od-grad">Offshore Development</span><br>End-to-End Solution</h1>
    <p class="od-hero-sub">Dedicated R&amp;D Teams · Full-Lifecycle Management · Information Security Assurance — Through the ODC "proximity" and "scale" model, CSI helps clients reduce total cost by 20~30%</p>
    <div class="od-hero-tags">
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> Dedicated R&amp;D Teams</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Information Security Control</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> End-to-End Project Management</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10z"/></svg> 13 Cities Nationwide</span>
    </div>
  </div>
  <div class="od-hero-img-wrap">
    <img src="/solutions/odc/images/odc-building.png" alt="Chinasoft International (CSI) ODC Building" />
  </div>
</section>

<!-- STATS STRIP -->
<div class="od-stats-strip">
  <div class="od-stat-item">
    <div class="od-stat-num"><span class="od-counter" data-target="13" data-suffix="">0</span></div>
    <div class="od-stat-label">Cities Nationwide</div>
  </div>
  <div class="od-stat-item">
    <div class="od-stat-num"><span class="od-counter" data-target="40000" data-suffix="+">0+</span></div>
    <div class="od-stat-label">Available Workstations</div>
  </div>
  <div class="od-stat-item">
    <div class="od-stat-num"><span class="od-counter" data-target="100" data-suffix="+">0+</span></div>
    <div class="od-stat-label">Talent Channel Resources</div>
  </div>
  <div class="od-stat-item">
    <div class="od-stat-num"><span class="od-counter" data-target="25" data-suffix=" days">0 days</span></div>
    <div class="od-stat-label">Avg. Recruitment Cycle</div>
  </div>
  <div class="od-stat-item">
    <div class="od-stat-num"><span class="od-counter" data-target="30" data-suffix="%">0%</span></div>
    <div class="od-stat-label">Total Cost Reduction</div>
  </div>
</div>

<!-- PAGE BODY -->
<div class="od-body">

  <!-- Core Value: Comparison Cards -->
  <section class="od-sec reveal" id="value">
    <div class="od-sec-header">
      <div class="od-eyebrow">Core Value · Why ODC</div>
      <h2 class="od-sec-title">Why Choose the ODC Model</h2>
    </div>
    <div class="od-compare-grid">
      <div class="od-compare-card od-compare-plain">
        <div class="od-compare-icon" style="background:linear-gradient(135deg,#475569,#64748b);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
        </div>
        <h3>Traditional Outsourcing</h3>
        <p>Vendor provides services; parties settle by project</p>
        <div class="od-compare-divider"></div>
        <div class="od-compare-cons">
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Product planning and marketing are vendor-handled, blurring accountability boundaries</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Staff shared across multiple clients, leading to team instability and high attrition</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Low transparency between original requirements and final deliverables for the client</span>
        </div>
      </div>
      <div class="od-compare-card od-compare-plain">
        <div class="od-compare-icon" style="background:linear-gradient(135deg,#475569,#64748b);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </div>
        <h3>In-House Team</h3>
        <p>Client directly recruits and manages full-time employees</p>
        <div class="od-compare-divider"></div>
        <div class="od-compare-cons">
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> High HR, recruitment, and training costs with long management chains</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Poor staffing elasticity; difficult to rapidly scale resources during business fluctuations</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Lacks local supply chain and talent channel depth in overseas markets</span>
        </div>
      </div>
      <div class="od-compare-card od-compare-highlight">
        <div class="od-compare-icon" style="background:linear-gradient(135deg,#d97706,#f59e0b);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <h3>ODC Offshore Development Center</h3>
        <p>Dedicated R&amp;D team with full-lifecycle management support</p>
        <div class="od-compare-divider"></div>
        <div class="od-compare-pros">
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Client receives a high-quality, stable, dedicated development team</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Total procurement cost reduced by 30%; efficiency improved 2~3×</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> HRBP + Project Management + IT + Security fully bundled — zero management overhead</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Zero security incidents · Zero EHS incidents · Zero fire incidents</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Three Cooperation Models -->
  <section class="od-sec reveal" id="models">
    <div class="od-sec-header">
      <div class="od-eyebrow">Cooperation Models · Three Flexible Options</div>
      <h2 class="od-sec-title">Three Flexible Cooperation Models</h2>
    </div>
    <div class="od-tabs-wrap">
      <div class="od-tab-bar">
        <button class="od-tab active" data-panel="tab-onsite">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
          On-Site Model
        </button>
        <button class="od-tab" data-panel="tab-embed">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          ODC Embedded Model
        </button>
        <button class="od-tab" data-panel="tab-self">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
          ODC Self-Build Model
        </button>
      </div>
      <!-- On-Site Model -->
      <div class="od-panel active" id="tab-onsite">
        <div class="od-panel-intro">Client provides the premises; CSI supplies a dedicated R&amp;D team and assists with management. Ideal for early-stage small-scale collaboration or clients with strict data residency requirements.</div>
        <div class="od-model-layout">
          <div class="od-model-cards">
            <div class="od-card od-card-amber">
              <div class="od-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></div>
              <h4>Client-Provided Premises</h4>
              <p>The R&amp;D team works within the client's office, deeply integrated into the client's business processes and culture for rapid response to changing requirements.</p>
            </div>
            <div class="od-card od-card-amber">
              <div class="od-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
              <h4>CSI Full HR Support</h4>
              <p>CSI provides a complete HR package including HRBP, recruitment, training, and performance management — clients focus exclusively on business direction.</p>
            </div>
            <div class="od-card od-card-amber">
              <div class="od-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
              <h4>Information Security Assurance</h4>
              <p>On-site personnel sign NDAs and follow the same information security protocols as the client's own staff; data never leaves the client's premises.</p>
            </div>
          </div>
          <div class="od-model-img">
            <img src="/solutions/odc/images/odc-office-1.png" alt="On-Site Office Environment" />
          </div>
        </div>
      </div>
      <!-- Embedded Model -->
      <div class="od-panel" id="tab-embed">
        <div class="od-panel-intro">Client provides premises; CSI builds a self-managed ODC office zone within the client's campus. The client only manages tasks and outcomes. Ideal for mid-to-large scale engagements focused on cost optimization.</div>
        <div class="od-model-layout">
          <div class="od-model-cards">
            <div class="od-card od-card-blue">
              <div class="od-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
              <h4>Dedicated ODC Zone</h4>
              <p>A designated area within the client's campus is independently built and managed by CSI, providing both physical isolation and information security guarantees.</p>
            </div>
            <div class="od-card od-card-blue">
              <div class="od-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
              <h4>Client Manages Outcomes Only</h4>
              <p>The client is responsible for task assignment and deliverable acceptance; CSI takes full ownership of team building, day-to-day management, and delivery quality.</p>
            </div>
            <div class="od-card od-card-blue">
              <div class="od-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
              <h4>Significant Cost Reduction</h4>
              <p>Scaled operations spread management costs; elastic staffing allows flexible scale-up/down — total cost reduced by 20~30% compared to traditional models.</p>
            </div>
          </div>
          <div class="od-model-img">
            <img src="/solutions/odc/images/odc-office-2.png" alt="ODC Embedded Office Environment" />
          </div>
        </div>
      </div>
      <!-- Self-Build Model -->
      <div class="od-panel" id="tab-self">
        <div class="od-panel-intro">CSI provides the R&amp;D team and full premises management. Ideal for large enterprises expanding overseas, those without a local operations team, or clients seeking zero management overhead.</div>
        <div class="od-model-layout">
          <div class="od-model-cards">
            <div class="od-card od-card-purple">
              <div class="od-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10z"/></svg></div>
              <h4>CSI Fully Accountable</h4>
              <p>From site selection, fit-out, and IT infrastructure to team assembly and daily operations — CSI handles everything end-to-end; zero start-up burden for the client.</p>
            </div>
            <div class="od-card od-card-purple">
              <div class="od-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg></div>
              <h4>Digital IT Platform</h4>
              <p>Covering the full ODC business lifecycle: business support platform, project management platform, digital toolchain, and the ODC mobile work platform.</p>
            </div>
            <div class="od-card od-card-purple">
              <div class="od-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><rect x="9" y="13" width="6" height="8"/></svg></div>
              <h4>Elastic Scalability</h4>
              <p>With 13 city coverage and a talent pool of 1.6M+, CSI can rapidly respond to client headcount changes and complete team onboarding within 3 weeks.</p>
            </div>
          </div>
          <div class="od-model-img">
            <img src="/solutions/odc/images/odc-campus.png" alt="ODC Self-Build Campus" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Six Capability Pillars -->
  <section class="od-sec reveal" id="capability">
    <div class="od-sec-header">
      <div class="od-eyebrow">Capabilities · Six Pillars</div>
      <h2 class="od-sec-title">ODC Service Capability Overview</h2>
    </div>
    <div class="od-pillars-grid">
      <div class="od-pillar od-pillar-blue">
        <div class="od-pillar-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <h4>Talent Supply Chain</h4>
        <p>100+ sourcing channels, 1.6M+ talent pool, intelligent matching — average recruitment cycle of 25 days with an offer acceptance rate above 95%</p>
        <div class="od-pillar-tags"><span>Structured Interviews</span><span>Pre-Boarding Training</span><span>Resource Forecasting</span></div>
      </div>
      <div class="od-pillar od-pillar-purple">
        <div class="od-pillar-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
        <h4>Project Management</h4>
        <p>RDPM framework, PMO governance, CP1/CP2/CP3 lifecycle checkpoints — E2E delivery cycle compressed by 20%</p>
        <div class="od-pillar-tags"><span>Milestone Control</span><span>Risk Early Warning</span><span>Delivery Dashboard</span></div>
      </div>
      <div class="od-pillar od-pillar-cyan">
        <div class="od-pillar-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></div>
        <h4>Digital IT Platform</h4>
        <p>Business support platform, project management platform, digital toolchain, and ODC mobile platform — covering the full ODC operations lifecycle</p>
        <div class="od-pillar-tags"><span>Real-Time Monitoring</span><span>BI Analytics</span><span>Automation Tools</span></div>
      </div>
      <div class="od-pillar od-pillar-amber">
        <div class="od-pillar-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></div>
        <h4>Quality Management (QMS)</h4>
        <p>Built on ISO 9001 principles with dual-track organizational and project-level quality assurance; client NPS continuously improving by 20%</p>
        <div class="od-pillar-tags"><span>ISO 9001</span><span>Continuous Improvement</span><span>Knowledge Management</span></div>
      </div>
      <div class="od-pillar od-pillar-red">
        <div class="od-pillar-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
        <h4>Information Security</h4>
        <p>Dual-layer access control, company-wide NDA signing, structured security training — targeting zero information security incidents</p>
        <div class="od-pillar-tags"><span>Physical Isolation</span><span>Data Leakage Prevention</span><span>Compliance Audit</span></div>
      </div>
      <div class="od-pillar od-pillar-green">
        <div class="od-pillar-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
        <h4>Hardware Infrastructure</h4>
        <p>Dual-ISP redundancy, UPS power backup, secure isolated office zones with professional network and security systems — production-environment ready</p>
        <div class="od-pillar-tags"><span>Dual-Link Network</span><span>Secure Isolation</span><span>EHS Management</span></div>
      </div>
    </div>
  </section>

  <!-- Office Environment -->
  <section class="od-sec reveal" id="office">
    <div class="od-sec-header">
      <div class="od-eyebrow">Office Environment · Facilities</div>
      <h2 class="od-sec-title">Professional ODC Office Environment</h2>
    </div>
    <div class="od-office-layout">
      <div class="od-office-main">
        <img src="/solutions/odc/images/odc-office-1.png" alt="ODC Office Interior" />
        <div class="od-office-caption">Open R&amp;D Workspace — Ergonomic Chairs · Gigabit LAN · Dedicated Secure Access Control</div>
      </div>
      <div class="od-office-side">
        <img src="/solutions/odc/images/odc-office-2.png" alt="ODC Corridor and Collaboration Area" />
        <div class="od-office-caption">Collaboration Corridor — Visual Kanban Board · Small Meeting Nook</div>
        <div class="od-office-tags">
          <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Unified PC Management</span>
          <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> USB Port Control</span>
          <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> No Personal Devices Allowed</span>
          <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> 24h Security Surveillance</span>
        </div>
      </div>
    </div>
  </section>

  <!-- National Coverage -->
  <section class="od-sec reveal" id="locations">
    <div class="od-sec-header">
      <div class="od-eyebrow">National Coverage · Locations</div>
      <h2 class="od-sec-title">13 Cities · 40,000+ Workstations</h2>
    </div>
    <div class="od-locations-layout">
      <div class="od-map-wrap">
        <img src="/solutions/odc/images/odc-map.png" alt="Nationwide ODC Coverage Map" />
      </div>
      <div class="od-cities-wrap">
        <div class="od-cities-intro">Spanning eastern, central, and western China through Chinasoft International's (CSI) national industrial bases — enabling clients to source talent nearby and assemble flexible offshore teams with ease.</div>
        <div class="od-cities-grid">
          <div class="od-city-item"><span class="od-city-dot" style="background:#1d4ed8;"></span>Beijing</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#7c3aed;"></span>Xi'an</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#0891b2;"></span>Chengdu</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#d97706;"></span>Wuhan</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#059669;"></span>Nanjing</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#dc2626;"></span>Changsha</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#7c3aed;"></span>Zhengzhou</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#0891b2;"></span>Chongqing</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#d97706;"></span>Dalian</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#059669;"></span>Fuzhou</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#1d4ed8;"></span>Guiyang</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#dc2626;"></span>Lanzhou</div>
          <div class="od-city-item"><span class="od-city-dot" style="background:#475569;"></span>More Cities</div>
        </div>
        <div class="od-cities-collage">
          <img src="/solutions/odc/images/odc-cities.jpg" alt="ODC Office Buildings Across Multiple Cities" />
        </div>
      </div>
    </div>
  </section>

  <!-- Success Cases -->
  <section class="od-sec reveal" id="cases">
    <div class="od-sec-header">
      <div class="od-eyebrow">Success Cases · Flagship References</div>
      <h2 class="od-sec-title">World-Class Clients Choose CSI ODC</h2>
    </div>
    <div class="od-cases-grid">
      <div class="od-case-card od-case-featured">
        <div class="od-case-badge">Flagship Case</div>
        <div class="od-case-header">
          <div class="od-case-icon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
          </div>
          <div>
            <div class="od-case-client">HSBC</div>
            <div class="od-case-subtitle">Xi'an Offshore ODC · Since 2012</div>
          </div>
        </div>
        <p class="od-case-desc">Since 2012, Chinasoft International (CSI) has established HSBC's largest global offshore ODC delivery center in Xi'an, becoming HSBC's largest global mobile application services provider.</p>
        <div class="od-case-metrics">
          <div class="od-metric"><div class="od-metric-num">3,000+</div><div class="od-metric-lbl">Team Size (Headcount)</div></div>
          <div class="od-metric"><div class="od-metric-num">30%</div><div class="od-metric-lbl">Total Cost Savings</div></div>
          <div class="od-metric"><div class="od-metric-num">10%</div><div class="od-metric-lbl">Attrition Rate Reduction</div></div>
        </div>
        <div class="od-case-img">
          <img src="/solutions/odc/images/odc-building.png" alt="CSI Xi'an ODC" />
        </div>
      </div>
      <div class="od-case-card">
        <div class="od-case-header">
          <div class="od-case-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div>
            <div class="od-case-client">WeLab</div>
            <div class="od-case-subtitle">Fintech · Hong Kong</div>
          </div>
        </div>
        <p class="od-case-desc">CSI provides a dedicated ODC R&amp;D team for WeLab, supporting its rapid expansion of digital banking operations in Hong Kong and Southeast Asia — achieving efficient onboarding of 25 engineers within 2 weeks.</p>
        <div class="od-case-metrics">
          <div class="od-metric"><div class="od-metric-num">2 weeks</div><div class="od-metric-lbl">25-Person Onboarding</div></div>
          <div class="od-metric"><div class="od-metric-num">3×</div><div class="od-metric-lbl">Annual Attrition Reduction</div></div>
        </div>
        <div class="od-case-img">
          <img src="/solutions/odc/images/odc-welab.png" alt="WeLab Client Case" />
        </div>
      </div>
    </div>
  </section>

  <!-- Measurable Results -->
  <section class="od-sec reveal" id="results">
    <div class="od-sec-header">
      <div class="od-eyebrow">Measurable Results · Quantified Outcomes</div>
      <h2 class="od-sec-title">Quantified Delivery Outcomes</h2>
    </div>
    <div class="od-results-grid">
      <div class="od-result-card">
        <div class="od-result-icon" style="color:#1d4ed8;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div>
        <div class="od-result-num">↓30%</div>
        <div class="od-result-label">Total Procurement Cost Reduction</div>
      </div>
      <div class="od-result-card">
        <div class="od-result-icon" style="color:#7c3aed;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
        <div class="od-result-num">2~3×</div>
        <div class="od-result-label">Per-Capita Output Improvement</div>
      </div>
      <div class="od-result-card">
        <div class="od-result-icon" style="color:#0891b2;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
        <div class="od-result-num">↓20%</div>
        <div class="od-result-label">E2E Delivery Cycle Compression</div>
      </div>
      <div class="od-result-card">
        <div class="od-result-icon" style="color:#d97706;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="20 6 9 17 4 12"/></svg></div>
        <div class="od-result-num">95%+</div>
        <div class="od-result-label">Formal Offer Acceptance Rate</div>
      </div>
      <div class="od-result-card">
        <div class="od-result-icon" style="color:#059669;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <div class="od-result-num">0</div>
        <div class="od-result-label">Information Security Incidents</div>
      </div>
      <div class="od-result-card">
        <div class="od-result-icon" style="color:#dc2626;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
        <div class="od-result-num">3 weeks</div>
        <div class="od-result-label">Fastest Resource Deployment</div>
      </div>
    </div>
  </section>

</div><!-- end od-body -->

<footer class="au-footer">
  <span class="footer-l">Chinasoft International · <span>CSI</span></span>
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
