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
      Cloud Capability Center · CSI Cloud Native
    </div>
    <h1>Cloud Native <span class="cl-grad">Full-Stack Solutions</span></h1>
    <p class="cl-hero-sub">Consulting &amp; Planning · Migration &amp; Implementation · Cloud Operations · AI &amp; LLM — Backed by Huawei Cloud deep-partnership credentials, we deliver end-to-end cloud services to accelerate enterprise digital transformation.</p>
    <div class="cl-hero-tags">
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg> Huawei Cloud Deep Partner</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> Application Migration</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> ISO 27001 Certified</span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg> AI &amp; LLM Deployment</span>
    </div>
  </div>
  <div class="cl-hero-img-wrap">
    <img src="/solutions/cloud/images/cloud-building.png" alt="Cloud Native Capability Center" />
    <div class="cl-hero-globe">
      <img src="/solutions/cloud/images/cloud-globe.png" alt="" />
    </div>
  </div>
</section>

<!-- STATS -->
<div class="cl-stats-strip">
  <div class="cl-stat-item">
    <div class="cl-stat-num"><span class="cl-counter" data-target="2000" data-suffix="+">0+</span></div>
    <div class="cl-stat-label">Migration Consulting Cases</div>
  </div>
  <div class="cl-stat-item">
    <div class="cl-stat-num"><span class="cl-counter" data-target="1000" data-suffix="+">0+</span></div>
    <div class="cl-stat-label">Successful Industry Projects</div>
  </div>
  <div class="cl-stat-item">
    <div class="cl-stat-num"><span class="cl-counter" data-target="200" data-suffix="+">0+</span></div>
    <div class="cl-stat-label">Professional Migration Tools</div>
  </div>
  <div class="cl-stat-item">
    <div class="cl-stat-num"><span class="cl-counter" data-target="596" data-suffix="+">0+</span></div>
    <div class="cl-stat-label">IT Professional Certifications</div>
  </div>
  <div class="cl-stat-item">
    <div class="cl-stat-num">7×24</div>
    <div class="cl-stat-label">Round-the-Clock Support</div>
  </div>
</div>

<div class="cl-body">

  <!-- Four Core Capabilities -->
  <section class="cl-sec reveal" id="capabilities">
    <div class="cl-sec-header">
      <div class="cl-eyebrow">Core Capabilities · Service Directions</div>
      <h2 class="cl-sec-title">Four Professional Service Pillars of the Cloud Capability Center</h2>
    </div>
    <div class="cl-cap-grid">
      <a href="#migration" class="cl-cap-card cl-cap-blue">
        <div class="cl-cap-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        </div>
        <h4>Application Migration</h4>
        <p>Huawei Cloud &amp; Tencent Cloud migration with six flexible strategies and 200+ tools to accelerate delivery</p>
        <span class="cl-cap-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
      </a>
      <a href="#operations" class="cl-cap-card cl-cap-cyan">
        <div class="cl-cap-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
        </div>
        <h4>Standardized Cloud Operations</h4>
        <p>Daily O&amp;M · Inspection · Version Management · Alerting · Data Management — full-chain SLA assurance</p>
        <span class="cl-cap-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
      </a>
      <a href="#ai" class="cl-cap-card cl-cap-purple">
        <div class="cl-cap-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
        </div>
        <h4>AI &amp; LLM Deployment</h4>
        <p>Built on Huawei Ascend Cloud — full-service LLM app development, knowledge-base construction, and Prompt engineering</p>
        <span class="cl-cap-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
      </a>
      <a href="#certs" class="cl-cap-card cl-cap-amber">
        <div class="cl-cap-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
        </div>
        <h4>Certification Ecosystem</h4>
        <p>HCIE ×26 · HCIP ×102 · ACE ×7 · PMP ×345 — industry-leading expert team</p>
        <span class="cl-cap-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
      </a>
    </div>
  </section>

  <!-- Migration Strategies -->
  <section class="cl-sec reveal" id="migration">
    <div class="cl-sec-header">
      <div class="cl-eyebrow">Migration · Application Migration to Cloud</div>
      <h2 class="cl-sec-title">End-to-End Migration on Huawei Cloud &amp; Tencent Cloud</h2>
    </div>

    <!-- Six Migration Strategies -->
    <div class="cl-strategies-grid">
      <div class="cl-strategy cl-s-blue">
        <div class="cl-strategy-num">01</div>
        <div class="cl-strategy-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="5 9 2 12 5 15"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/></svg></div>
        <h4>Rehost (Lift &amp; Shift)</h4>
        <p>Migrate the entire application to the cloud with minimal changes — the fastest path to cloud adoption.</p>
      </div>
      <div class="cl-strategy cl-s-cyan">
        <div class="cl-strategy-num">02</div>
        <div class="cl-strategy-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
        <h4>Replatform</h4>
        <p>Apply targeted optimizations before migration — e.g., replacing RDBMS with a managed cloud database to improve elasticity.</p>
      </div>
      <div class="cl-strategy cl-s-purple">
        <div class="cl-strategy-num">03</div>
        <div class="cl-strategy-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></div>
        <h4>Repurchase</h4>
        <p>Shift to SaaS products to replace self-built systems, reduce O&amp;M burden, and rapidly gain cloud-native capabilities.</p>
      </div>
      <div class="cl-strategy cl-s-amber">
        <div class="cl-strategy-num">04</div>
        <div class="cl-strategy-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></div>
        <h4>Re-architect</h4>
        <p>Deep architectural transformation — evolving from SOA to microservices and cloud-native, unlocking full business elasticity.</p>
      </div>
      <div class="cl-strategy cl-s-slate">
        <div class="cl-strategy-num">05</div>
        <div class="cl-strategy-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg></div>
        <h4>Retire</h4>
        <p>Decommission systems with no remaining business value — focus resources on core applications and reduce total IT cost.</p>
      </div>
      <div class="cl-strategy cl-s-green">
        <div class="cl-strategy-num">06</div>
        <div class="cl-strategy-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <h4>Retain</h4>
        <p>Keep applications that are not yet ready for migration in place; incorporate them into the roadmap as business maturity grows.</p>
      </div>
    </div>

    <!-- Migration Flow Diagram -->
    <div class="cl-flow-img-block reveal">
      <div class="cl-flow-img-header">
        <div class="cl-flow-img-icon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        </div>
        <div>
          <div class="cl-flow-img-title">Standardized Project Implementation Process</div>
          <div class="cl-flow-img-sub">Huawei Recommendation &amp; Project Initiation → Research &amp; Review → POC Testing → Project Execution → Business Cutover → Acceptance &amp; Delivery</div>
        </div>
      </div>
      <div class="cl-flow-img-wrap">
        <img src="/solutions/cloud/images/cloud-migration-flow.png" alt="Migration Project Implementation Flow" />
      </div>
    </div>

    <!-- Migration Standards -->
    <div class="cl-standards-wrap reveal">
      <div class="cl-standards-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
        Multiple internationally recognized certifications ensuring security and compliance throughout the entire migration lifecycle
      </div>
      <div class="cl-certs-row">
        <span class="cl-cert-badge">ISO 27001</span>
        <span class="cl-cert-badge">ISO 27017</span>
        <span class="cl-cert-badge">ISO 27018</span>
        <span class="cl-cert-badge">ISO 20000</span>
        <span class="cl-cert-badge">CSA STAR</span>
        <span class="cl-cert-badge">PCI-DSS</span>
        <span class="cl-cert-badge">MLPS Level Protection</span>
        <span class="cl-cert-badge">Application Security</span>
      </div>
      <div class="cl-highlights-row">
        <div class="cl-highlight">
          <div class="cl-highlight-num">7×24h</div>
          <div class="cl-highlight-lbl">All-scenario consulting &amp; migration optimization</div>
        </div>
        <div class="cl-highlight">
          <div class="cl-highlight-num">200+</div>
          <div class="cl-highlight-lbl">Professional migration tools</div>
        </div>
        <div class="cl-highlight">
          <div class="cl-highlight-num">2000+</div>
          <div class="cl-highlight-lbl">Migration consultants &amp; experts</div>
        </div>
        <div class="cl-highlight">
          <div class="cl-highlight-num">1000+</div>
          <div class="cl-highlight-lbl">Successful industry delivery cases</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Cloud Operations -->
  <section class="cl-sec reveal" id="operations">
    <div class="cl-sec-header">
      <div class="cl-eyebrow">Cloud Operations · Managed Services</div>
      <h2 class="cl-sec-title">Standardized Full-Spectrum Operations Framework</h2>
    </div>
    <div class="cl-tabs-wrap">
      <div class="cl-tab-bar">
        <button class="cl-tab active" data-panel="tab-daily">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          Daily O&amp;M
        </button>
        <button class="cl-tab" data-panel="tab-inspect">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          Inspection &amp; Patrol
        </button>
        <button class="cl-tab" data-panel="tab-incident">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          Incident Management
        </button>
        <button class="cl-tab" data-panel="tab-ops">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          Cloud Ops Capabilities
        </button>
      </div>

      <div class="cl-panel" id="tab-daily">
        <div class="cl-panel-intro">Focused on Huawei Cloud and similar platforms, we provide comprehensive day-to-day operations covering service provisioning, system monitoring, resource management, and log processing to ensure platform SLA.</div>
        <div class="cl-ops-grid">
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
            <div>
            <h4>Service Provisioning</h4>
            <p>Full-catalog cloud resource provisioning, account creation, and permission notification</p>
            </div>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></div>
            <div>
            <h4>System Monitoring</h4>
            <p>Alert rule configuration, metric threshold management, capacity monitoring, and log usage alerts</p>
            </div>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
            <div>
            <h4>Version Maintenance</h4>
            <p>Upgrade planning, component identification and rollback, and change window management</p>
            </div>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#d97706,#f59e0b);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
            <div>
            <h4>Data Management</h4>
            <p>High-availability management of cloud resource and product data, backup strategy and data loss prevention</p>
            </div>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#059669,#10b981);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg></div>
            <div>
            <h4>Alert Configuration</h4>
            <p>Fine-grained alert rule configuration, tiered alert response, and rapid root-cause identification</p>
            </div>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#dc2626,#f87171);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
            <div>
            <h4>Security Operations</h4>
            <p>Comprehensive security monitoring, compliance auditing, vulnerability scanning and remediation — zero security incident goal</p>
            </div>
          </div>
        </div>
      </div>

      <div class="cl-panel" id="tab-inspect">
        <div class="cl-panel-intro">Daily routine inspections to identify potential platform risks, produce structured inspection summary reports, and drive remediation actions to closure.</div>
        <div class="cl-ops-grid">
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
            <div>
            <h4>Platform Inspection</h4>
            <p>On-demand daily routine inspection covering potential risk checks across all active platform modules</p>
            </div>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
            <div>
            <h4>Inspection Reports</h4>
            <p>Structured inspection summary reports with risk-level annotations and remediation recommendations</p>
            </div>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#059669,#10b981);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></div>
            <div>
            <h4>Remediation Tracking</h4>
            <p>Organize and implement remediation measures for identified issues; track and verify closure for closed-loop management</p>
            </div>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#d97706,#f59e0b);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
            <div>
            <h4>Periodic Reviews</h4>
            <p>Regular consolidation of O&amp;M metrics and health trend analysis to provide data support for architectural optimization</p>
            </div>
          </div>
        </div>
      </div>

      <div class="cl-panel" id="tab-incident">
        <div class="cl-panel-intro">Standardized incident classification and severity framework for rapid business restoration — 7×24 remote support with tiered escalation to ensure stability of critical workloads.</div>
        <div class="cl-ops-grid">
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#dc2626,#f87171);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg></div>
            <div>
            <h4>Incident Severity Classification</h4>
            <p>P1–P4 severity levels based on impact scope and business criticality, each mapped to differentiated response SLAs</p>
            </div>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/></svg></div>
            <div>
            <h4>7×24 Remote Support</h4>
            <p>Round-the-clock remote technical support with senior expert L1/L2/L3 tiered engagement for rapid incident closure</p>
            </div>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg></div>
            <div>
            <h4>Incident Escalation</h4>
            <p>Auto-escalate to L2/L3 when front-line resolution is not possible, with simultaneous notification to responsible parties</p>
            </div>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#059669,#10b981);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></div>
            <div>
            <h4>Post-Incident Review</h4>
            <p>Root-cause analysis reports after major incident closure, building a knowledge base to prevent recurrence</p>
            </div>
          </div>
        </div>
      </div>

      <div class="cl-panel" id="tab-ops">
        <div class="cl-panel-intro">Covering four dimensions — business operations, cloud resource operations, customer operations, and channel management — to build a complete cloud operations closed-loop capability.</div>
        <div class="cl-ops-grid">
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
            <div>
            <h4>Business Operations</h4>
            <p>Operations metric forecasting, architecture design consulting, technical enablement recommendations, unlocking latent business value</p>
            </div>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg></div>
            <div>
            <h4>Cloud Resource Operations</h4>
            <p>Routine O&amp;M, cloud resource management, database operations, network operations, and holistic optimization monitoring</p>
            </div>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
            <div>
            <h4>Customer Operations</h4>
            <p>Customer satisfaction management, customer health tracking, ecosystem building, and retention strategies</p>
            </div>
          </div>
          <div class="cl-ops-card">
            <div class="cl-ops-icon" style="background:linear-gradient(135deg,#d97706,#f59e0b);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg></div>
            <div>
            <h4>Channel Management</h4>
            <p>In-depth channel partner management, partner incentive programs, and joint operations capability enablement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- AI & LLM -->
  <section class="cl-sec reveal" id="ai">
    <div class="cl-sec-header">
      <div class="cl-eyebrow">AI &amp; LLM · Large Language Model Deployment</div>
      <h2 class="cl-sec-title">LLM Deployment Capabilities on Huawei Ascend Cloud</h2>
    </div>

    <div class="cl-ai-layout">
      <div class="cl-ai-cards">
        <div class="cl-ai-card" style="--ac:#7c3aed;">
          <div class="cl-ai-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></div>
          <div>
            <h4>LLM Application Development</h4>
            <p>Build customer-tailored LLM applications on large models with support for Prompt-driven flows, API calls, and external data store integration</p>
          </div>
        </div>
        <div class="cl-ai-card" style="--ac:#0891b2;">
          <div class="cl-ai-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div>
          <div>
            <h4>Domain Knowledge Base Construction</h4>
            <p>LLM-powered domain knowledge base building with full-pipeline support for data collection, processing, labeling, training, and evaluation</p>
          </div>
        </div>
        <div class="cl-ai-card" style="--ac:#d97706;">
          <div class="cl-ai-icon" style="background:linear-gradient(135deg,#d97706,#f59e0b);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></div>
          <div>
            <h4>Prompt Engineering &amp; Optimization</h4>
            <p>Professional prompt engineering services — designing high-efficiency prompts tailored to business scenarios to maximize model output quality</p>
          </div>
        </div>
        <div class="cl-ai-card" style="--ac:#059669;">
          <div class="cl-ai-icon" style="background:linear-gradient(135deg,#059669,#10b981);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
          <div>
            <h4>AI Workload Migration</h4>
            <p>Development support for upper-layer applications on Huawei platforms, covering API extension, conversational AI integration, and AI application embedding</p>
          </div>
        </div>
      </div>
      <div class="cl-ai-imgs">
        <div class="cl-ai-img-block">
          <div class="cl-ai-img-label">LLM Development &amp; Release Full Pipeline</div>
          <img src="/solutions/cloud/images/cloud-ai-pipeline.png" alt="AI LLM Development Pipeline" />
        </div>
        <div class="cl-ai-img-block" style="margin-top:16px;">
          <div class="cl-ai-img-label">SI Perspective · LLM Layered Capability Matrix</div>
          <img src="/solutions/cloud/images/cloud-ai-model.png" alt="AI LLM Layered Capability Matrix" />
        </div>
      </div>
    </div>
  </section>

  <!-- Certifications -->
  <section class="cl-sec reveal" id="certs">
    <div class="cl-sec-header">
      <div class="cl-eyebrow">Certifications · Expert Credentials</div>
      <h2 class="cl-sec-title">Industry-Leading Certified Expert Team</h2>
    </div>
    <div class="cl-certs-layout">
      <div class="cl-cert-stats">
        <div class="cl-cert-stat-card" style="--cc:#dc2626;">
          <div class="cl-cert-stat-num">26</div>
          <div class="cl-cert-stat-lbl">HCIE</div>
          <div class="cl-cert-stat-sub">Huawei Certified ICT Expert</div>
        </div>
        <div class="cl-cert-stat-card" style="--cc:#d97706;">
          <div class="cl-cert-stat-num">102</div>
          <div class="cl-cert-stat-lbl">HCIP</div>
          <div class="cl-cert-stat-sub">Huawei Certified ICT Professional</div>
        </div>
        <div class="cl-cert-stat-card" style="--cc:#7c3aed;">
          <div class="cl-cert-stat-num">7</div>
          <div class="cl-cert-stat-lbl">ACE</div>
          <div class="cl-cert-stat-sub">Alibaba Cloud Certified Expert</div>
        </div>
        <div class="cl-cert-stat-card" style="--cc:#1d4ed8;">
          <div class="cl-cert-stat-num">345</div>
          <div class="cl-cert-stat-lbl">PMP</div>
          <div class="cl-cert-stat-sub">Project Management Professional</div>
        </div>
        <div class="cl-cert-stat-card" style="--cc:#0891b2;">
          <div class="cl-cert-stat-num">11</div>
          <div class="cl-cert-stat-lbl">OCP</div>
          <div class="cl-cert-stat-sub">Oracle Certified Professional</div>
        </div>
        <div class="cl-cert-stat-card" style="--cc:#059669;">
          <div class="cl-cert-stat-num">199+</div>
          <div class="cl-cert-stat-lbl">IT Tech Certifications</div>
          <div class="cl-cert-stat-sub">Cloud · Database · Networking</div>
        </div>
      </div>
      <div class="cl-cert-imgs">
        <div class="cl-cert-img-wrap">
          <img src="/solutions/cloud/images/cloud-cert-ace.jpg" alt="ACE Alibaba Cloud Certified Expert Certificate" />
          <div class="cl-cert-img-cap">ACE · Alibaba Cloud Certified Expert</div>
        </div>
        <div class="cl-cert-img-wrap">
          <img src="/solutions/cloud/images/cloud-cert-acp.jpg" alt="ACP Alibaba Cloud Certified Professional Certificate" />
          <div class="cl-cert-img-cap">ACP · Alibaba Cloud Certified Professional</div>
        </div>
      </div>
    </div>
    <div class="cl-cert-list-wrap reveal">
      <div class="cl-cert-list-header">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
        Complete Certification List (partial view)
      </div>
      <img src="/solutions/cloud/images/cloud-cert-list.png" alt="Certification List" class="cl-cert-list-img" />
    </div>
  </section>

</div>

<footer class="au-footer">
  <span class="footer-l">Chinasoft International (CSI) · <span>ChinaSofti</span></span>
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
