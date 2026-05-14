<script setup>
import NavBar from './NavBar.vue'
import { onMounted } from 'vue'

onMounted(() => {
  // Counter animation
  const counters = document.querySelectorAll('.sc-counter')
  const obsCounter = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      const el = entry.target
      const target = parseInt(el.dataset.target)
      let cur = 0
      const step = Math.ceil(target / 60)
      const timer = setInterval(() => {
        cur = Math.min(cur + step, target)
        el.textContent = cur
        if (cur >= target) clearInterval(timer)
      }, 22)
      obsCounter.unobserve(el)
    })
  }, { threshold: 0.3 })
  counters.forEach(c => obsCounter.observe(c))

  // Lightbox
  const lb = document.getElementById('sc-lightbox')
  const lbImg = document.getElementById('sc-lightbox-img')
  if (lb && lbImg) {
    document.querySelectorAll('.sc-screenshot-wrap img').forEach(img => {
      img.style.cursor = 'zoom-in'
      img.addEventListener('click', () => {
        lbImg.src = img.src
        lbImg.alt = img.alt
        lb.classList.add('sc-lb-active')
      })
    })
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') lb.classList.remove('sc-lb-active')
    })
  }
})
</script>

<template>
<div class="sc-page">
<div class="sc-mesh-bg"></div>
  <NavBar active="solutions" />

  <!-- ══════════════════════ HERO ══════════════════════ -->
  <section class="sc-hero">
    <div class="sc-hero-bg"></div>
    <div class="sc-hero-particles">
      <span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
    <div class="sc-hero-inner">
      <div class="sc-hero-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        Smart Campus · Smart Park Digital Platform
      </div>
      <h1>Smart Campus <span class="sc-grad">Digital Platform</span></h1>
      <p class="sc-hero-sub">Access Control · Parking Management · Integrated Security · IOC Command Screen — AI + IoT full-stack integration delivers a safe, efficient digital campus, boosting personnel management efficiency by 60%.</p>
      <div class="sc-hero-tags">
        <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 15s1-1 5-1 5 1 5 1"/><circle cx="12" cy="10" r="3"/></svg> Facial Recognition Access</span>
        <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="17 2 12 7 7 2"/></svg> AI Video Analytics</span>
        <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10z"/></svg> GIS Indoor Positioning</span>
        <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> IOC Command Dashboard</span>
      </div>
    </div>
    <div class="sc-hero-img-wrap">
      <img src="/solutions/campus/images/sc-campus-aerial.png" alt="Smart Campus" />
    </div>
  </section>

  <!-- ══════════════════════ STATS ══════════════════════ -->
  <section class="sc-stats-bar">
    <div class="sc-stats-inner">
      <div class="sc-stat-item">
        <div class="sc-stat-val"><span class="sc-counter" data-target="22">0</span><span class="sc-stat-plus">+</span></div>
        <div class="sc-stat-desc">Years of Campus Expertise</div>
      </div>
      <div class="sc-stat-sep"></div>
      <div class="sc-stat-item">
        <div class="sc-stat-val"><span class="sc-counter" data-target="100">0</span><span class="sc-stat-plus">+</span></div>
        <div class="sc-stat-desc">Successful Campus Projects</div>
      </div>
      <div class="sc-stat-sep"></div>
      <div class="sc-stat-item">
        <div class="sc-stat-val">8<span class="sc-stat-unit"> Core</span></div>
        <div class="sc-stat-desc">Subsystems</div>
      </div>
      <div class="sc-stat-sep"></div>
      <div class="sc-stat-item">
        <div class="sc-stat-val"><span class="sc-counter" data-target="30">0</span><span class="sc-stat-plus">+</span></div>
        <div class="sc-stat-desc">Cities Covered</div>
      </div>
      <div class="sc-stat-sep"></div>
      <div class="sc-stat-item">
        <div class="sc-stat-val">7×24<span class="sc-stat-unit">h</span></div>
        <div class="sc-stat-desc">O&amp;M Support</div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════ POSITIONING ══════════════════════ -->
  <section class="sc-section sc-bg-light">
    <div class="sc-container">
      <div class="sc-sec-head">
        <h2 class="sc-sec-title">Product Positioning</h2>
        <p class="sc-sec-sub">Traditional Campus Management Pain Points · CSI Smart Campus Full-Stack Solution</p>
      </div>
      <div class="sc-pos-grid">
        <div class="sc-pos-card">
          <div class="sc-pos-icon" style="background:linear-gradient(135deg,#64748b,#94a3b8);">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
          <h3>Industrial / Technology Parks</h3>
          <p>High personnel turnover, elevated safety risks, and slow management response</p>
          <div class="sc-pos-sep"></div>
          <div class="sc-pos-pain"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg><span>Identity verification relies on physical credentials — slow and error-prone</span></div>
          <div class="sc-pos-pain"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg><span>Slow alert response; security incidents are handled reactively</span></div>
          <div class="sc-pos-pain"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg><span>Siloed subsystems with no cross-system data interoperability</span></div>
        </div>
        <div class="sc-pos-card">
          <div class="sc-pos-icon" style="background:linear-gradient(135deg,#64748b,#94a3b8);">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          </div>
          <h3>Commercial / Office Parks</h3>
          <p>Cumbersome visitor management, disordered parking, and limited operational efficiency</p>
          <div class="sc-pos-sep"></div>
          <div class="sc-pos-pain"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg><span>Manual visitor registration is time-consuming and creates poor experience</span></div>
          <div class="sc-pos-pain"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg><span>Chaotic parking, long search times, and vehicle congestion</span></div>
          <div class="sc-pos-pain"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg><span>No unified data view — decisions still rely on manual reports</span></div>
        </div>
        <div class="sc-pos-card sc-pos-highlight">
          <div class="sc-pos-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
          </div>
          <h3>CSI Smart Campus Solution</h3>
          <p>AI + IoT full-stack integration covering all scenarios with unified operational management</p>
          <div class="sc-pos-sep"></div>
          <div class="sc-pos-checks">
            <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Facial recognition in seconds, accuracy 99.9%+</span>
            <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> AI video analytics with auto-linkage alerts in &lt;30 seconds</span>
            <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> IOC single-screen real-time campus situational awareness</span>
            <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Welink / App / WeChat — tri-channel full integration</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════ ARCHITECTURE ══════════════════════ -->
  <section class="sc-section">
    <div class="sc-container">
      <div class="sc-sec-head">
        <h2 class="sc-sec-title">System Architecture Overview</h2>
        <p class="sc-sec-sub">Four-Layer Linkage · Perception / Network / Platform / Application Full-Stack Architecture</p>
      </div>
      <div class="sc-arch">
        <div class="sc-arch-title-bar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/></svg>
          Four-Layer Architecture — Perception / Network / Platform / Application
        </div>

        <!-- Application Layer -->
        <div class="sc-arch-layer sc-alayer-app">
          <div class="sc-arch-label">Application<br><em>APPLICATION</em></div>
          <div class="sc-arch-body">
            <div class="sc-arch-group">
              <div class="sc-arch-ghead" style="color:#0891b2;border-color:#0891b2;">Campus Operations</div>
              <div class="sc-arch-tags"><span class="sc-arch-tag">IOC Dashboard</span><span class="sc-arch-tag">Admin Console</span><span class="sc-arch-tag">BI Reports</span></div>
            </div>
            <div class="sc-arch-group">
              <div class="sc-arch-ghead" style="color:#0891b2;border-color:#0891b2;">Mobile Clients</div>
              <div class="sc-arch-tags"><span class="sc-arch-tag">Campus App</span><span class="sc-arch-tag">WeChat Official Account</span><span class="sc-arch-tag">Welink</span></div>
            </div>
            <div class="sc-arch-group">
              <div class="sc-arch-ghead" style="color:#0891b2;border-color:#0891b2;">Business Functions</div>
              <div class="sc-arch-tags"><span class="sc-arch-tag">Access Control</span><span class="sc-arch-tag">Visitor Management</span><span class="sc-arch-tag">Parking Management</span><span class="sc-arch-tag">Patrol Management</span><span class="sc-arch-tag">Alert Handling</span></div>
            </div>
          </div>
        </div>
        <div class="sc-arch-conn">▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾</div>

        <!-- Platform Layer -->
        <div class="sc-arch-layer sc-alayer-plat">
          <div class="sc-arch-label">Platform<br><em>PLATFORM</em></div>
          <div class="sc-arch-body">
            <div class="sc-arch-plat-grid">
              <span class="sc-ptag">AI Video Platform</span>
              <span class="sc-ptag">GIS Spatial Platform</span>
              <span class="sc-ptag">IoT Platform</span>
              <span class="sc-ptag">Communication Platform</span>
              <span class="sc-ptag">Data Warehouse</span>
              <span class="sc-ptag">API Gateway</span>
              <span class="sc-ptag">Kafka Message Queue</span>
              <span class="sc-ptag">Edge MEC Node</span>
              <span class="sc-ptag">Data Analytics Engine</span>
            </div>
          </div>
        </div>
        <div class="sc-arch-conn">▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾</div>

        <!-- Network Layer -->
        <div class="sc-arch-layer sc-alayer-net">
          <div class="sc-arch-label">Network<br><em>NETWORK</em></div>
          <div class="sc-arch-body">
            <div class="sc-arch-plat-grid">
              <span class="sc-ntag">HTTP / HTTPS</span>
              <span class="sc-ntag">MQTT</span>
              <span class="sc-ntag">CoAP</span>
              <span class="sc-ntag">RTSP</span>
              <span class="sc-ntag">Restful API</span>
              <span class="sc-ntag">Kafka MQ</span>
              <span class="sc-ntag">5G</span>
              <span class="sc-ntag">WiFi</span>
              <span class="sc-ntag">Internet</span>
            </div>
          </div>
        </div>
        <div class="sc-arch-conn">▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾</div>

        <!-- Perception Layer -->
        <div class="sc-arch-layer sc-alayer-sense">
          <div class="sc-arch-label">Perception<br><em>PERCEPTION</em></div>
          <div class="sc-arch-body">
            <div class="sc-arch-group">
              <div class="sc-arch-ghead" style="color:#d97706;border-color:#d97706;">Security Sensing</div>
              <div class="sc-arch-tags"><span class="sc-arch-tag">Cameras / NVR</span><span class="sc-arch-tag">Alarm Sensors</span><span class="sc-arch-tag">Dual-Detection Detectors</span></div>
            </div>
            <div class="sc-arch-group">
              <div class="sc-arch-ghead" style="color:#d97706;border-color:#d97706;">Access Facilities</div>
              <div class="sc-arch-tags"><span class="sc-arch-tag">Face Recognition Gates</span><span class="sc-arch-tag">Card Readers</span><span class="sc-arch-tag">License Plate Recognition</span></div>
            </div>
            <div class="sc-arch-group">
              <div class="sc-arch-ghead" style="color:#d97706;border-color:#d97706;">Environmental Sensing</div>
              <div class="sc-arch-tags"><span class="sc-arch-tag">Parking Detectors</span><span class="sc-arch-tag">Fire Sensors</span><span class="sc-arch-tag">IoT Devices</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════ SUBSYSTEM NAV ══════════════════════ -->
  <section class="sc-section sc-bg-light">
    <div class="sc-container">
      <div class="sc-sec-head">
        <h2 class="sc-sec-title">Four Core Systems</h2>
        <p class="sc-sec-sub">All-Scenario Coverage · Unified Platform Management</p>
      </div>
      <div class="sc-sub-grid">
        <a href="#access" class="sc-sub-card sc-sub-teal">
          <div class="sc-sub-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
          <h4>Access &amp; Personnel Management</h4>
          <p>AI Facial Recognition · End-to-End Visitor Flow · Attendance Statistics</p>
          <span class="sc-sub-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
        </a>
        <a href="#parking" class="sc-sub-card sc-sub-cyan">
          <div class="sc-sub-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="1" y="3" width="15" height="13" rx="1"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></div>
          <h4>Parking &amp; Location Services</h4>
          <p>Smart Guidance · GIS Indoor Navigation · 3D Mapping</p>
          <span class="sc-sub-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
        </a>
        <a href="#security" class="sc-sub-card sc-sub-blue">
          <div class="sc-sub-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
          <h4>Integrated Security System</h4>
          <p>Intelligent Video Analytics · Patrol Management · Alert Linkage</p>
          <span class="sc-sub-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
        </a>
        <a href="#ioc" class="sc-sub-card sc-sub-amber">
          <div class="sc-sub-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
          <h4>IOC Situational Awareness</h4>
          <p>Campus Command Screen · Real-Time Monitoring · Data Insights</p>
          <span class="sc-sub-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
        </a>
      </div>
    </div>
  </section>

  <!-- ══════════════════════ SECTION: Access & Personnel ══════════════════════ -->
  <section id="access" class="sc-section">
    <div class="sc-container">
      <div class="sc-sec-intro sc-intro-teal">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
        Access &amp; Personnel Management — AI-driven full-process access control, with unified management of staff, visitors, and VIPs on a single platform
      </div>
      <!-- Screenshot card group -->
      <div class="sc-feat-grid">
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 15s1-1 5-1 5 1 5 1"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <span>Facial Recognition · Frictionless Throughput</span>
          </div>
          <div class="sc-feat-body">
            Deep-learning facial recognition delivers an accuracy rate of <strong>99.9%+</strong> with a single recognition latency of <strong>≤300ms</strong>. Employees pass through without swiping a card — truly frictionless access even during peak hours.
          </div>
          <div class="sc-screenshot-wrap">
            <img src="/solutions/campus/images/sc-face-gate.png" alt="Face Recognition Gate Turnstile" style="height:230px;object-fit:cover;object-position:center;" />
          </div>
        </div>
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <span>Visitor Appointment · QR Code Verification</span>
          </div>
          <div class="sc-feat-body">
            WeChat online appointment → QR code verification → automatic authorization → trajectory logging — entirely paperless. VIP visitors receive one-tap special access authorization for a fully upgraded experience.
          </div>
          <div class="sc-screenshot-wrap">
            <img src="/solutions/campus/images/sc-face-device.png" alt="Face Recognition Terminal Device" style="height:230px;object-fit:cover;object-position:center;" />
          </div>
        </div>
      </div>
      <!-- Text card group -->
      <div class="sc-feat-grid" style="margin-top:18px;">
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#059669,#10b981);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <span>VIP Granular Permission Management</span>
          </div>
          <div class="sc-feat-body">
            Tiered permission configuration enables VIPs to enjoy dedicated, uninterrupted access corridors in specific areas during designated time windows. Permissions are fine-tuned by <strong>date / time / zone</strong>, with support for temporary grants and instant revocation.
          </div>
        </div>
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#059669,#10b981);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <span>Attendance &amp; Real-Time Headcount</span>
          </div>
          <div class="sc-feat-body">
            Access data automatically generates attendance reports and provides real-time statistics on on-site headcount and zone distribution. Welink pushes anomalous departure notifications instantly — <strong>improving staff management efficiency by 60%</strong>.
          </div>
        </div>
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#059669,#10b981);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <span>Multi-Building Coordination · Gate Linkage</span>
          </div>
          <div class="sc-feat-body">
            Supports unified management across multiple buildings with the IOC command screen displaying real-time access status per building. Anomalous personnel immediately trigger alerts, linking gates to <strong>auto-close and intercept</strong>, protecting the security perimeter.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════ SECTION: Parking & Location ══════════════════════ -->
  <section id="parking" class="sc-section sc-bg-light">
    <div class="sc-container">
      <div class="sc-sec-intro sc-intro-cyan">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="1"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
        Parking &amp; Location Services — AI parking guidance + GIS 3D positioning, completely solving the parking difficulty and slow-spot-finding problem
      </div>
      <div class="sc-feat-grid">
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#06b6d4,#0891b2);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <span>AI Smart Parking Guidance</span>
          </div>
          <div class="sc-feat-body">
            Real-time detection of parking spot occupancy, with AI algorithms recommending optimal parking routes. Available spot counts update in real time, <strong>significantly reducing search time</strong> and effectively alleviating vehicle congestion on campus.
          </div>
          <div class="sc-screenshot-wrap">
            <img src="/solutions/campus/images/sc-parking.png" alt="Smart Parking Facility" style="height:230px;object-fit:cover;object-position:center;" />
          </div>
        </div>
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#06b6d4,#0891b2);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <span>Indoor Precision Navigation · Real-Time Spot Location</span>
          </div>
          <div class="sc-feat-body">
            After vehicle entry, the app automatically pushes spot coordinates with indoor walking navigation for precise guidance. A GIS-engine-powered 3D campus map supports floor switching and <strong>one-tap find-my-car</strong>.
          </div>
          <div class="sc-screenshot-wrap">
            <img src="/solutions/campus/images/sc-parking-nav.png" alt="Indoor Parking Navigation System" style="height:230px;object-fit:cover;object-position:top;" />
          </div>
        </div>
      </div>
      <!-- GIS Map Display -->
      <div class="sc-gis-row">
        <div class="sc-gis-img-wrap">
          <img src="/solutions/campus/images/sc-gis-map.png" alt="3D GIS Campus Map" class="sc-gis-img" />
          <div class="sc-gis-badge">3D GIS Spatial Map</div>
        </div>
        <div class="sc-gis-features">
          <div class="sc-gis-feat">
            <div class="sc-gis-ficon" style="background:linear-gradient(135deg,#0891b2,#1d4ed8);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <div>
              <div class="sc-gis-ft">Spot Reservation · App Pre-Booking</div>
              <div class="sc-gis-fd">Employees book designated spots in advance to avoid peak-hour unavailability; auto-released upon timeout</div>
            </div>
          </div>
          <div class="sc-gis-feat">
            <div class="sc-gis-ficon" style="background:linear-gradient(135deg,#0891b2,#1d4ed8);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            </div>
            <div>
              <div class="sc-gis-ft">Frictionless Payment · Exit Efficiency +50%</div>
              <div class="sc-gis-fd">License-plate recognition auto-billing with WeChat/Alipay one-tap payment — no queuing at the toll booth</div>
            </div>
          </div>
          <div class="sc-gis-feat">
            <div class="sc-gis-ficon" style="background:linear-gradient(135deg,#059669,#10b981);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <div class="sc-gis-ft">Personnel Trajectory · GIS Location Visualization</div>
              <div class="sc-gis-fd">Security staff check in via handheld terminals; the GIS map displays real-time patrol coverage and distribution</div>
            </div>
          </div>
          <div class="sc-gis-feat">
            <div class="sc-gis-ficon" style="background:linear-gradient(135deg,#059669,#10b981);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <div>
              <div class="sc-gis-ft">Floor Switching · 3D Spatial Awareness</div>
              <div class="sc-gis-fd">Multi-floor 3D spatial visualization with at-a-glance view of crowd density and facility status per zone</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════ SECTION: Integrated Security ══════════════════════ -->
  <section id="security" class="sc-section">
    <div class="sc-container">
      <div class="sc-sec-intro sc-intro-blue">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Integrated Security System — AI video analytics + intelligent patrol + multi-level alert linkage for comprehensive campus security protection
      </div>
      <div class="sc-feat-grid">
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="17 2 12 7 7 2"/></svg>
            </div>
            <span>AI Intelligent Video Surveillance Center</span>
          </div>
          <div class="sc-feat-body">
            Deploys AI video analytics algorithms to detect anomalies such as <strong>perimeter intrusion, crowd gathering, and abandoned items</strong> in real time, automatically pushing alerts and significantly reducing the cost of manual monitoring.
          </div>
          <div class="sc-screenshot-wrap">
            <img src="/solutions/campus/images/sc-monitor.png" alt="Security Monitoring Center" style="height:230px;object-fit:cover;object-position:center;" />
          </div>
        </div>
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <span>Smart Patrol · Route Control</span>
          </div>
          <div class="sc-feat-body">
            GIS-planned patrol routes with QR-code check-in confirmation. <strong>One operator manages multiple patrol routes</strong>, replacing the traditional labor-intensive inspection model and reducing O&amp;M costs by 40%.
          </div>
          <div class="sc-screenshot-wrap">
            <img src="/solutions/campus/images/sc-patrol-ui.png" alt="Intelligent Patrol Management System" style="height:230px;object-fit:cover;object-position:top;" />
          </div>
        </div>
      </div>
      <div class="sc-feat-grid" style="margin-top:18px;">
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            </div>
            <span>Multi-Level Alert Linkage · Closed-Loop Response</span>
          </div>
          <div class="sc-feat-body">
            Alerts auto-trigger a five-way linkage: Welink notification + PA broadcast + gate control + video recording. Critical alerts reach the responsible party in <strong>&lt;30 seconds</strong>, with full audit trail throughout incident handling.
          </div>
        </div>
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M8.56 2.9A7 7 0 0 1 19 9v4l2 2H3l2-2V9a7 7 0 0 1 3.56-6.1"/><path d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2z"/></svg>
            </div>
            <span>Fire Safety · Intelligent Early Warning Linkage</span>
          </div>
          <div class="sc-feat-body">
            Dual-detection (IR + smoke sensor) smart linkage automatically <strong>cross-references nearby cameras</strong> to confirm fire threats, activates evacuation broadcasts with one tap, and simultaneously locks down access gates to protect life safety.
          </div>
        </div>
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="23 11 17 11 19.5 8.5"/><polyline points="17 14 23 14 20.5 16.5"/></svg>
            </div>
            <span>Personnel / Vehicle Trajectory Tracing</span>
          </div>
          <div class="sc-feat-body">
            AI facial recognition logs complete personnel movement paths; license-plate recognition tracks vehicle trajectories. Combined with GIS mapping, enables historical trajectory playback and <strong>rapid traceability of anomalous individuals</strong>.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════ SECTION: IOC ══════════════════════ -->
  <section id="ioc" class="sc-section sc-bg-dark">
    <div class="sc-container">
      <div class="sc-sec-head">
        <h2 class="sc-sec-title" style="color:#f1f5f9;">IOC Integrated Situational Awareness Dashboard</h2>
        <p class="sc-sec-sub" style="color:#94a3b8;">Campus-Wide Single-Screen Overview · Real-Time Awareness of Space / Personnel / Alerts / Devices</p>
      </div>
      <div class="sc-ioc-showcase">
        <img src="/solutions/campus/images/sc-ioc-dashboard.png" alt="IOC Smart Campus Operations Command Dashboard" class="sc-ioc-img" />
      </div>
      <div class="sc-ioc-cards">
        <div class="sc-ioc-card">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <div>
            <div class="sc-ioc-ct">Spatial Awareness</div>
            <div class="sc-ioc-cd">Real-time display of crowd density and space utilization rate per zone</div>
          </div>
        </div>
        <div class="sc-ioc-card">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
          <div>
            <div class="sc-ioc-ct">Personnel Awareness</div>
            <div class="sc-ioc-cd">At-a-glance view of on-site headcount, access records, and visitor status</div>
          </div>
        </div>
        <div class="sc-ioc-card">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/></svg>
          <div>
            <div class="sc-ioc-ct">Alert Awareness</div>
            <div class="sc-ioc-cd">Real-time alert events, response progress, and historical trend analysis</div>
          </div>
        </div>
        <div class="sc-ioc-card">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          <div>
            <div class="sc-ioc-ct">Device Awareness</div>
            <div class="sc-ioc-cd">IoT device online status, fault alerts, and maintenance work orders</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════ RESULTS ══════════════════════ -->
  <section class="sc-section sc-bg-light">
    <div class="sc-container">
      <div class="sc-sec-head">
        <h2 class="sc-sec-title">Quantified Outcomes</h2>
        <p class="sc-sec-sub">Real Deployment Case Data · Measurable Digital Transformation Value</p>
      </div>
      <div class="sc-result-grid">
        <div class="sc-result-card">
          <div class="sc-result-num">60<span class="sc-ru">%</span></div>
          <div class="sc-result-label">Throughput Efficiency Gain</div>
          <div class="sc-result-sub">Facial recognition replaces credential swiping</div>
        </div>
        <div class="sc-result-card">
          <div class="sc-result-num">75<span class="sc-ru">%</span></div>
          <div class="sc-result-label">Reduction in Violations</div>
          <div class="sc-result-sub">AI proactive alerting with precise intervention</div>
        </div>
        <div class="sc-result-card">
          <div class="sc-result-num">50<span class="sc-ru">%</span></div>
          <div class="sc-result-label">Parking Time Reduction</div>
          <div class="sc-result-sub">AI guidance + spot reservation</div>
        </div>
        <div class="sc-result-card">
          <div class="sc-result-num">40<span class="sc-ru">%</span></div>
          <div class="sc-result-label">O&amp;M Labor Savings</div>
          <div class="sc-result-sub">Unified platform replaces fragmented operations</div>
        </div>
        <div class="sc-result-card">
          <div class="sc-result-num">&lt;30<span class="sc-ru">s</span></div>
          <div class="sc-result-label">Alert Response Time</div>
          <div class="sc-result-sub">Multi-level auto-push linkage</div>
        </div>
        <div class="sc-result-card">
          <div class="sc-result-num">99.9<span class="sc-ru">%</span></div>
          <div class="sc-result-label">Facial Recognition Accuracy</div>
          <div class="sc-result-sub">Continuously optimized deep-learning model</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Lightbox -->
  <div id="sc-lightbox" class="sc-lightbox" @click="$event.currentTarget.classList.remove('sc-lb-active')">
    <div class="sc-lb-close">&times;</div>
    <img id="sc-lightbox-img" src="" alt="" />
  </div>
</div>
</template>

<style scoped>
/* ── Base ── */
.sc-page {
  font-family: 'PingFang SC','Microsoft YaHei','Segoe UI',sans-serif;
  background: #fff;
  color: #1e293b;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}
.sc-mesh-bg {
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
  background:
    radial-gradient(ellipse 80% 60% at 20% -10%, rgba(8,145,178,0.05) 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 80% 110%, rgba(5,150,105,0.04) 0%, transparent 60%);
}
.sc-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;
}
.sc-section { padding: 72px 0; }
.sc-bg-light { background: #f8fafc; }
.sc-bg-dark  { background: #0c1f3a; }

/* ── Hero ── */
.sc-hero {
  position: relative; z-index: 1;
  background: linear-gradient(140deg, #071520 0%, #0b2940 35%, #0d3a58 60%, #082240 82%, #051828 100%);
  min-height: 520px;
  display: flex; align-items: center; justify-content: space-between;
  padding: 120px 72px 80px; gap: 40px; overflow: hidden;
}
.sc-hero-bg {
  position: absolute; inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230891b2' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.sc-hero-particles { position: absolute; inset: 0; pointer-events: none; }
.sc-hero-particles span {
  position: absolute; border-radius: 50%;
  background: rgba(8,145,178,0.18);
  animation: scFloat 8s ease-in-out infinite;
}
.sc-hero-particles span:nth-child(1){width:180px;height:180px;top:-40px;right:35%;animation-delay:0s;}
.sc-hero-particles span:nth-child(2){width:120px;height:120px;bottom:20px;left:20%;animation-delay:2s;background:rgba(6,182,212,0.12);}
.sc-hero-particles span:nth-child(3){width:80px;height:80px;top:30%;left:55%;animation-delay:4s;background:rgba(14,165,233,0.15);}
.sc-hero-particles span:nth-child(4){width:200px;height:200px;bottom:-60px;left:-40px;animation-delay:1s;background:rgba(29,78,216,0.15);}
.sc-hero-particles span:nth-child(5){width:60px;height:60px;top:20%;right:10%;animation-delay:3s;background:rgba(8,145,178,0.2);}
.sc-hero-particles span:nth-child(6){width:100px;height:100px;top:60%;left:30%;animation-delay:5s;background:rgba(5,150,105,0.12);}
@keyframes scFloat {
  0%,100%{transform:translateY(0) scale(1);opacity:0.6;}
  50%{transform:translateY(-20px) scale(1.08);opacity:1;}
}
.sc-hero-inner { position: relative; z-index: 2; max-width: 620px; flex: 1; }
.sc-hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
  border-radius: 999px; padding: 7px 18px; margin-bottom: 24px;
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
  color: rgba(255,255,255,0.7); text-transform: uppercase;
}
.sc-hero h1 {
  font-size: 2.8rem; font-weight: 900; line-height: 1.1;
  color: #fff; margin-bottom: 18px; letter-spacing: -0.03em;
}
.sc-grad {
  background: linear-gradient(90deg, #38bdf8, #06b6d4, #0891b2, #38bdf8);
  background-size: 300%;
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: scGrad 6s linear infinite;
}
@keyframes scGrad { 0%{background-position:0%} 100%{background-position:300%} }
.sc-hero-sub {
  font-size: 1rem; color: rgba(255,255,255,0.72); margin-bottom: 28px; line-height: 1.7;
}
.sc-hero-tags { display: flex; flex-wrap: wrap; gap: 10px; }
.sc-hero-tags span {
  display: inline-flex; align-items: center; gap: 7px;
  background: rgba(255,255,255,0.09); border: 1px solid rgba(255,255,255,0.15);
  border-radius: 999px; padding: 7px 14px;
  font-size: 0.8rem; font-weight: 600; color: rgba(255,255,255,0.88);
}
.sc-hero-img-wrap {
  position: relative; z-index: 2; flex: 0 0 420px;
  border-radius: 16px; overflow: hidden;
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 20px 60px rgba(0,0,0,0.45);
}
.sc-hero-img-wrap img { width: 100%; height: 280px; object-fit: cover; display: block; }

/* ── Stats ── */
.sc-stats-bar {
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
  padding: 0;
}
.sc-stats-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.sc-stat-item { text-align: center; padding: 28px 24px; }
.sc-stat-val {
  font-size: 2rem;
  font-weight: 900;
  color: #0891b2;
  line-height: 1;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 2px;
}
.sc-stat-plus { font-size: 1.3rem; font-weight: 900; color: #0891b2; }
.sc-stat-unit { font-size: 1rem; font-weight: 700; margin-left: 2px; }
.sc-stat-desc { font-size: 0.78rem; color: #64748b; margin-top: 6px; font-weight: 500; }
.sc-stat-sep { width: 1px; height: 40px; background: #e2e8f0; flex-shrink: 0; }

/* ── Section head ── */
.sc-sec-head { text-align: center; margin-bottom: 48px; }
.sc-sec-title {
  font-size: 1.75rem;
  font-weight: 900;
  color: #0f172a;
  margin: 0 0 10px;
}
.sc-sec-sub { font-size: 0.9rem; color: #64748b; margin: 0; }

/* ── Section intro bar ── */
.sc-sec-intro {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 18px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 32px;
  line-height: 1.5;
}
.sc-intro-teal { background: rgba(8,145,178,0.07); color: #0c4a6e; border-left: 3px solid #0891b2; }
.sc-intro-cyan  { background: rgba(6,182,212,0.07); color: #164e63; border-left: 3px solid #06b6d4; }
.sc-intro-blue  { background: rgba(29,78,216,0.07); color: #1e3a8a; border-left: 3px solid #1d4ed8; }

/* ── Positioning ── */
.sc-pos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.sc-pos-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}
.sc-pos-card h3 { font-size: 1.05rem; font-weight: 800; color: #0f172a; margin: 14px 0 6px; }
.sc-pos-card p  { font-size: 0.83rem; color: #64748b; margin: 0 0 16px; line-height: 1.5; }
.sc-pos-highlight {
  background: linear-gradient(145deg, #f0f9ff, #e0f2fe);
  border-color: #bae6fd;
  box-shadow: 0 4px 20px rgba(8,145,178,0.12);
}
.sc-pos-icon {
  width: 52px; height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}
.sc-pos-sep { height: 1px; background: #e2e8f0; margin: 14px 0; }
.sc-pos-pain {
  display: flex; align-items: flex-start; gap: 8px;
  font-size: 0.8rem; color: #475569;
  margin-bottom: 8px; line-height: 1.4;
}
.sc-pos-pain svg { flex-shrink: 0; margin-top: 1px; }
.sc-pos-checks { display: flex; flex-direction: column; gap: 9px; }
.sc-pos-checks span {
  display: flex; align-items: flex-start; gap: 8px;
  font-size: 0.82rem; font-weight: 600; color: #0c4a6e;
  line-height: 1.4;
}
.sc-pos-checks svg { flex-shrink: 0; margin-top: 1px; }

/* ── Architecture ── */
.sc-arch {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}
.sc-arch-title-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 20px;
  background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
  font-size: 0.82rem;
  font-weight: 700;
  color: #0c4a6e;
  border-bottom: 1px solid #bae6fd;
}
.sc-arch-layer {
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.sc-alayer-app  { background: linear-gradient(135deg, rgba(8,145,178,0.12), transparent); border-left: 4px solid #0891b2; }
.sc-alayer-plat { background: linear-gradient(135deg, rgba(124,58,237,0.12), transparent); border-left: 4px solid #7c3aed; }
.sc-alayer-net  { background: linear-gradient(135deg, rgba(6,182,212,0.12), transparent); border-left: 4px solid #06b6d4; }
.sc-alayer-sense { background: linear-gradient(135deg, rgba(217,119,6,0.12), transparent); border-left: 4px solid #d97706; }
.sc-arch-label {
  min-width: 80px;
  padding: 18px 14px;
  font-size: 0.78rem;
  font-weight: 800;
  color: #1e293b;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid rgba(0,0,0,0.06);
  line-height: 1.5;
}
.sc-arch-label em { font-style: normal; font-size: 0.6rem; color: #94a3b8; letter-spacing: 0.06em; text-transform: uppercase; }
.sc-arch-body { flex: 1; padding: 16px 20px; display: flex; align-items: center; flex-wrap: wrap; gap: 16px; }
.sc-arch-group { display: flex; flex-direction: column; gap: 8px; }
.sc-arch-ghead {
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 0;
  border-bottom: 1.5px solid currentColor;
  white-space: nowrap;
}
.sc-arch-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.sc-arch-tag {
  background: rgba(255,255,255,0.7);
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 6px;
  padding: 3px 10px;
  font-size: 0.72rem;
  color: #334155;
}
.sc-arch-plat-grid { display: flex; flex-wrap: wrap; gap: 7px; }
.sc-ptag {
  background: rgba(124,58,237,0.08);
  border: 1px solid rgba(124,58,237,0.18);
  border-radius: 6px;
  padding: 4px 11px;
  font-size: 0.72rem;
  color: #5b21b6;
  font-weight: 500;
}
.sc-ntag {
  background: rgba(6,182,212,0.08);
  border: 1px solid rgba(6,182,212,0.2);
  border-radius: 6px;
  padding: 4px 11px;
  font-size: 0.72rem;
  color: #164e63;
  font-weight: 500;
}
.sc-arch-conn {
  text-align: center;
  padding: 5px;
  font-size: 0.7rem;
  letter-spacing: 3px;
  color: #94a3b8;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

/* ── Subsystem nav ── */
.sc-sub-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}
.sc-sub-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 26px 22px;
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
}
.sc-sub-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.12); }
.sc-sub-teal  { background: linear-gradient(145deg, #ecfeff, #cffafe); border: 1px solid #a5f3fc; }
.sc-sub-cyan  { background: linear-gradient(145deg, #f0f9ff, #e0f2fe); border: 1px solid #bae6fd; }
.sc-sub-blue  { background: linear-gradient(145deg, #eff6ff, #dbeafe); border: 1px solid #bfdbfe; }
.sc-sub-amber { background: linear-gradient(145deg, #fffbeb, #fef3c7); border: 1px solid #fde68a; }
.sc-sub-icon {
  width: 56px; height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sc-sub-teal  .sc-sub-icon { background: linear-gradient(135deg,#0891b2,#06b6d4); box-shadow: 0 4px 14px rgba(8,145,178,0.35); }
.sc-sub-cyan  .sc-sub-icon { background: linear-gradient(135deg,#0891b2,#1d4ed8); box-shadow: 0 4px 14px rgba(29,78,216,0.3); }
.sc-sub-blue  .sc-sub-icon { background: linear-gradient(135deg,#1d4ed8,#3b82f6); box-shadow: 0 4px 14px rgba(29,78,216,0.35); }
.sc-sub-amber .sc-sub-icon { background: linear-gradient(135deg,#d97706,#f59e0b); box-shadow: 0 4px 14px rgba(217,119,6,0.35); }
.sc-sub-card h4 { font-size: 0.96rem; font-weight: 800; color: #0f172a; margin: 0; }
.sc-sub-card p  { font-size: 0.76rem; color: #475569; margin: 0; line-height: 1.5; }
.sc-sub-arrow { margin-top: auto; color: #94a3b8; }

/* ── Feature cards ── */
.sc-feat-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.sc-feat-grid:has(.sc-feat-card:nth-child(3)) {
  grid-template-columns: repeat(3, 1fr);
}
.sc-feat-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  transition: box-shadow 0.2s;
}
.sc-feat-card:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.1); }
.sc-feat-hd {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 18px 20px 0;
  font-size: 0.9rem;
  font-weight: 700;
  color: #0f172a;
}
.sc-feat-hicon {
  width: 36px; height: 36px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.sc-feat-body {
  padding: 12px 20px 18px;
  font-size: 0.83rem;
  color: #475569;
  line-height: 1.65;
}
.sc-screenshot-wrap { overflow: hidden; }
.sc-screenshot-wrap img { width: 100%; display: block; }

/* ── GIS row ── */
.sc-gis-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  margin-top: 28px;
  align-items: start;
}
.sc-gis-img-wrap {
  position: relative;
  border-radius: 14px;
  overflow: visible;
}
.sc-gis-img {
  width: 100%;
  border-radius: 14px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 6px 24px rgba(0,0,0,0.1);
  display: block;
}
.sc-gis-badge {
  position: absolute;
  top: -12px;
  left: 16px;
  background: linear-gradient(135deg, #0891b2, #06b6d4);
  color: white;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 999px;
  box-shadow: 0 3px 10px rgba(8,145,178,0.35);
}
.sc-gis-features { display: flex; flex-direction: column; gap: 16px; }
.sc-gis-feat { display: flex; align-items: flex-start; gap: 12px; }
.sc-gis-ficon {
  width: 34px; height: 34px;
  border-radius: 8px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sc-gis-ft { font-size: 0.86rem; font-weight: 700; color: #0f172a; margin-bottom: 3px; }
.sc-gis-fd { font-size: 0.76rem; color: #64748b; line-height: 1.5; }

/* ── IOC section ── */
.sc-ioc-showcase {
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0,0,0,0.4);
  margin-bottom: 28px;
}
.sc-ioc-img { width: 100%; display: block; }
.sc-ioc-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.sc-ioc-card {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 20px 16px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.sc-ioc-card svg { flex-shrink: 0; margin-top: 2px; }
.sc-ioc-ct { font-size: 0.88rem; font-weight: 700; color: #e0f2fe; margin-bottom: 4px; }
.sc-ioc-cd { font-size: 0.75rem; color: #94a3b8; line-height: 1.5; }

/* ── Results ── */
.sc-result-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.sc-result-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 30px 24px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  transition: transform 0.2s;
}
.sc-result-card:hover { transform: translateY(-3px); }
.sc-result-num {
  font-size: 2.4rem;
  font-weight: 900;
  color: #0891b2;
  line-height: 1;
  margin-bottom: 10px;
}
.sc-ru { font-size: 1.2rem; font-weight: 900; margin-left: 2px; }
.sc-result-label { font-size: 0.88rem; font-weight: 700; color: #0f172a; margin-bottom: 5px; }
.sc-result-sub { font-size: 0.75rem; color: #94a3b8; }

/* ── Lightbox ── */
.sc-lightbox {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(0,0,0,0.88);
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
}
.sc-lightbox.sc-lb-active { display: flex; }
.sc-lb-close {
  position: absolute;
  top: 20px; right: 28px;
  font-size: 2.2rem;
  color: rgba(255,255,255,0.7);
  cursor: pointer;
  line-height: 1;
}
.sc-lightbox img {
  max-width: 88vw;
  max-height: 88vh;
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.6);
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .sc-hero { padding: 60px 24px; }
  .sc-hero-inner { grid-template-columns: 1fr; gap: 32px; }
  .sc-hero-right { display: none; }
  .sc-hero-title { font-size: 2rem; }
  .sc-pos-grid { grid-template-columns: 1fr; }
  .sc-sub-grid { grid-template-columns: repeat(2,1fr); }
  .sc-feat-grid { grid-template-columns: 1fr; }
  .sc-feat-grid:has(.sc-feat-card:nth-child(3)) { grid-template-columns: 1fr; }
  .sc-gis-row { grid-template-columns: 1fr; }
  .sc-ioc-cards { grid-template-columns: repeat(2,1fr); }
  .sc-result-grid { grid-template-columns: repeat(2,1fr); }
  .sc-stats-inner { flex-wrap: wrap; }
  .sc-stat-sep { display: none; }
  .sc-container { padding: 0 20px; }
  .sc-arch-label { min-width: 60px; font-size: 0.7rem; }
}
@media (max-width: 600px) {
  .sc-sub-grid { grid-template-columns: 1fr; }
  .sc-ioc-cards { grid-template-columns: 1fr; }
  .sc-result-grid { grid-template-columns: 1fr; }
  .sc-pos-grid { grid-template-columns: 1fr; }
}
</style>
