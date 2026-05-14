<template>
<div class="cc-page">
<div class="mesh-bg"></div>

<NavBar active="cases" />

<!-- HERO -->
<div class="cc-hero">
  <div class="hero-orb orb-a"></div>
  <div class="hero-orb orb-b"></div>
  <div class="hero-orb orb-c"></div>
  <div class="hero-inner">
    <div class="hero-pill"><span class="pill-dot"></span>Cloud Cases · Enterprise Cloud Migration Proof</div>
    <h1>Cloud-Native Migration<br><span class="shine">Enterprise Cloud Delivery Evidence</span></h1>
    <p class="hero-sub">From Digital Chongqing GaussDB multi-database migration to a full-stack airport group cloud move, from GAC Toyota HCSO cloud operations to Sichuan Changhong Kunpeng big data — Chinasoft International (CSI) partners with Huawei Cloud to deliver end-to-end enterprise cloud services.</p>
    <div class="hero-badges">
      <span class="h-badge"><span class="flag">🏛</span> Government · Digital Chongqing GaussDB</span>
      <span class="h-badge"><span class="flag">✈</span> Transport · Full-Stack Airport Migration</span>
      <span class="h-badge"><span class="flag">🚗</span> Manufacturing · GAC Toyota Operations</span>
      <span class="h-badge"><span class="flag">📡</span> Manufacturing · Changhong Big Data</span>
      <span class="h-badge"><span class="flag">🌐</span> Internet · Taihe IoT</span>
    </div>
  </div>
</div>

<!-- CASES BODY -->
<div class="cc-body">

  <!-- ① Digital Chongqing GaussDB Migration -->
  <div class="case-block reveal" id="chongqing">
    <div class="case-card" style="--accent:#1d4ed8;--accent-rgb:29,78,216;">
      <div class="case-top">
        <div class="case-info">
          <div class="case-eyebrow">
            <span class="flag-tag">🏛 Chongqing · Digital Government</span>
            <span class="status-tag" style="background:rgba(29,78,216,0.10);color:#1e40af;border-color:rgba(29,78,216,0.28);">
              <i class="dot" style="background:#1d4ed8;"></i>Delivered · Big Data Migration
            </span>
          </div>
          <h2>Digital Chongqing<br><em>GaussDB Multi-Database Migration</em></h2>
          <div class="tag-row">
            <span class="ctag blue">GaussDB</span>
            <span class="ctag blue">Big Data Migration</span>
            <span class="ctag blue">Data Governance</span>
          </div>
          <p class="case-desc">Addressing the database migration requirements of Chongqing-based cloud customers, CSI developed GaussDB migration plugins based on <strong>open-source Flink-CDC and DataX</strong>, enabling real-time read/write interoperability with PG, MySQL, Oracle, DM, KingBase and other heterogeneous databases. Total data volume reached <strong>1–2 TB scale</strong>, aggregating from multiple government bureaus and the Digital High-Speed Rail project.</p>
          <div class="feat-list">
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>GaussDB supports primary/standby mode as source and distributed mode as target</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>Dual-track: full bulk sync + real-time incremental migration in parallel</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>Dedicated performance engineering for large-scale heterogeneous migration bottlenecks</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>Plugins contributed back to upstream open-source communities: Flink-CDC / DataX</div>
          </div>
          <div class="metrics-row">
            <div class="metric">
              <div class="mval" style="color:#1d4ed8;">5+</div>
              <div class="mlab">Heterogeneous DBs<br>Full-Chain Support</div>
            </div>
            <div class="metric">
              <div class="mval" style="color:#1d4ed8;">1-2TB</div>
              <div class="mlab">Data Migrated<br>Multi-Source Aggregation</div>
            </div>
            <div class="metric">
              <div class="mval" style="color:#1d4ed8;">Real-Time</div>
              <div class="mlab">Incremental Sync<br>CDC Mechanism</div>
            </div>
          </div>
          <div class="partner-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            Partner: Huawei Cloud · GaussDB
          </div>
        </div>
        <div class="case-screens arch-screens">
          <div class="arch-frame">
            <div class="arch-caption">Data Migration Architecture</div>
            <img src="/cases/cloud-chongqing-arch.png" alt="GaussDB Migration Architecture" class="arch-img" />
          </div>
          <div class="arch-frame" style="margin-top:12px;">
            <div class="arch-caption">Data Flow Overview</div>
            <img src="/cases/cloud-chongqing-arch2.png" alt="GaussDB Data Flow" class="arch-img" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ② Airport Group Full-Stack Cloud Migration -->
  <div class="case-block reveal" id="airport">
    <div class="case-card" style="--accent:#0891b2;--accent-rgb:8,145,178;">
      <div class="case-top reverse">
        <div class="case-screens arch-screens">
          <div class="arch-frame">
            <div class="arch-caption">Cloud Network Architecture Design</div>
            <img src="/cases/cloud-airport-arch.png" alt="Airport Cloud Network Architecture" class="arch-img" />
          </div>
        </div>
        <div class="case-info">
          <div class="case-eyebrow">
            <span class="flag-tag">✈ Western Airport Group · Transportation</span>
            <span class="status-tag" style="background:rgba(8,145,178,0.10);color:#0369a1;border-color:rgba(8,145,178,0.28);">
              <i class="dot" style="background:#0891b2;"></i>Delivered · Full-Stack Migration
            </span>
          </div>
          <h2>Airport Group<br><em>Full-Stack Business Cloud Migration</em></h2>
          <div class="tag-row">
            <span class="ctag cyan">Full-Stack Migration</span>
            <span class="ctag cyan">Network Security</span>
            <span class="ctag cyan">Huawei Public Cloud</span>
          </div>
          <p class="case-desc">CSI helped a Western Airport Group migrate all production workloads from on-premises IDC to <strong>Huawei Public Cloud</strong>, connecting internet access, security protection, and business production zones in an end-to-end network architecture with multi-AZ high-availability deployment, achieving <strong>Level-3 Security Compliance</strong> certification.</p>
          <div class="feat-list">
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>Full security stack: DDoS protection + WAF + Cloud Firewall</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>Multi-subnet VPC isolation: Internet Zone / Security Management Zone / Business Production Zone</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>EIP elastic public IP + Cloud Bastion Host for unified O&amp;M control</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>Dedicated line to on-premises IDC, enabling smooth zero-downtime cutover</div>
          </div>
          <div class="tech-row">
            <span>Huawei Cloud ECS</span><span>VPC</span><span>DDoS</span><span>WAF</span><span>Bastion Host</span><span>EIP</span>
          </div>
          <div class="partner-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            Partner: Huawei Cloud
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ③ GAC Toyota HCSO Operations -->
  <div class="case-block reveal" id="toyota">
    <div class="case-card" style="--accent:#059669;--accent-rgb:5,150,105;">
      <div class="case-top">
        <div class="case-info">
          <div class="case-eyebrow">
            <span class="flag-tag">🚗 GAC Toyota · Manufacturing</span>
            <span class="status-tag" style="background:rgba(5,150,105,0.10);color:#047857;border-color:rgba(5,150,105,0.28);">
              <i class="dot" style="background:#059669;"></i>Ongoing Operations
            </span>
          </div>
          <h2>GAC Toyota<br><em>HCSO Cloud Platform O&amp;M Services</em></h2>
          <div class="tag-row">
            <span class="ctag green">Cloud O&amp;M</span>
            <span class="ctag green">HCSO</span>
            <span class="ctag green">Hybrid Cloud</span>
          </div>
          <p class="case-desc">GAC Toyota built a hybrid cloud platform on Huawei HCSO, with CSI providing <strong>24/7 professional O&amp;M assurance</strong> covering daily monitoring, periodic health checks, and rapid incident response — keeping core manufacturing production systems stable while delivering middleware architecture selection and standardized O&amp;M services.</p>
          <div class="feat-list">
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>Daily monitoring: configuration management, alert handling, health checks, node management, performance tuning</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>Periodic health inspections: proactive risk identification with inspection reports and improvement recommendations</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>Unified middleware management: architecture selection, version unification, configuration standards to eliminate environment drift</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>50% improvement in O&amp;M efficiency with significantly reduced collaboration overhead</div>
          </div>
          <div class="metrics-row">
            <div class="metric">
              <div class="mval" style="color:#059669;">50%</div>
              <div class="mlab">O&amp;M Efficiency Gain<br>Automation-Enabled</div>
            </div>
            <div class="metric">
              <div class="mval" style="color:#059669;">24/7</div>
              <div class="mlab">Continuous Coverage<br>Rapid Response</div>
            </div>
            <div class="metric">
              <div class="mval" style="color:#059669;">Unified</div>
              <div class="mlab">Middleware Control<br>Version &amp; Config</div>
            </div>
          </div>
          <div class="partner-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            Partner: Huawei Cloud HCSO
          </div>
        </div>
        <div class="case-screens arch-screens">
          <div class="arch-frame">
            <div class="arch-caption">O&amp;M Monitoring Dashboard</div>
            <img src="/cases/cloud-toyota-monitor.png" alt="GAC Toyota O&M Monitoring" class="arch-img" />
          </div>
          <div class="arch-frame" style="margin-top:12px;">
            <div class="arch-caption">HCSO Platform View</div>
            <img src="/cases/cloud-toyota-ops.png" alt="HCSO Cloud Platform" class="arch-img" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ④ Sichuan Changhong Big Data Cloud -->
  <div class="case-block reveal" id="changhong">
    <div class="case-card" style="--accent:#7c3aed;--accent-rgb:124,58,237;">
      <div class="case-top reverse">
        <div class="case-screens arch-screens">
          <div class="arch-frame">
            <div class="arch-caption">Big Data Platform Architecture</div>
            <img src="/cases/cloud-changhong-bigdata.png" alt="Sichuan Changhong Big Data Architecture" class="arch-img" />
          </div>
          <div class="kp-cards">
            <div class="kp-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>
              <div><div class="kp-title">Detailed Performance Testing</div><div class="kp-sub">X86 vs ARM Full-Component Benchmark</div></div>
            </div>
            <div class="kp-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              <div><div class="kp-title">Dozens of Components Ported</div><div class="kp-sub">Kunpeng ARM Architecture Adaptation</div></div>
            </div>
            <div class="kp-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <div><div class="kp-title">Full + Incremental Migration</div><div class="kp-sub">VPN + DES Dual-Channel Assurance</div></div>
            </div>
          </div>
        </div>
        <div class="case-info">
          <div class="case-eyebrow">
            <span class="flag-tag">📡 Sichuan Changhong · Manufacturing</span>
            <span class="status-tag" style="background:rgba(124,58,237,0.10);color:#6d28d9;border-color:rgba(124,58,237,0.28);">
              <i class="dot" style="background:#7c3aed;"></i>Delivered · Big Data Cloud Migration
            </span>
          </div>
          <h2>Sichuan Changhong<br><em>Big Data Platform Cloud Migration · Kunpeng Porting</em></h2>
          <div class="tag-row">
            <span class="ctag purple">Big Data</span>
            <span class="ctag purple">Kunpeng Porting</span>
            <span class="ctag purple">ARM Adaptation</span>
          </div>
          <p class="case-desc">CSI helped Sichuan Changhong migrate its entire big data platform to Huawei Cloud, completing <strong>ARM architecture porting of dozens of big data components for Kunpeng</strong>, and providing detailed X86 vs ARM performance benchmarks to ensure post-migration performance improvements. Data was synchronized via VPN + DES in dual full+incremental tracks.</p>
          <div class="feat-list">
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>Full-component performance benchmarking across X86 / ARM architectures with detailed reports</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>Kunpeng ARM porting and adaptation for dozens of big data components</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>VPN + DES for parallel full migration + incremental synchronization</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>Storage-compute separation architecture with significantly enhanced dynamic storage scaling</div>
          </div>
          <div class="tech-row">
            <span>Huawei Kunpeng</span><span>HDFS</span><span>Hive</span><span>Spark</span><span>VPN</span><span>DES</span>
          </div>
          <div class="partner-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            Partner: Huawei Cloud · Kunpeng Ecosystem
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ⑤ Taihe IoT Containerization Migration -->
  <div class="case-block reveal" id="taihe">
    <div class="case-card" style="--accent:#d97706;--accent-rgb:217,119,6;">
      <div class="case-top">
        <div class="case-info">
          <div class="case-eyebrow">
            <span class="flag-tag">🌐 Taihe IoT · Internet</span>
            <span class="status-tag" style="background:rgba(217,119,6,0.10);color:#b45309;border-color:rgba(217,119,6,0.28);">
              <i class="dot" style="background:#d97706;"></i>Delivered · Cloud Advisory &amp; Migration
            </span>
          </div>
          <h2>Taihe IoT<br><em>Containerized Cloud Advisory &amp; Migration</em></h2>
          <div class="tag-row">
            <span class="ctag amber">Cloud Advisory</span>
            <span class="ctag amber">Containerization</span>
            <span class="ctag amber">Cost Optimization</span>
          </div>
          <p class="case-desc">CSI provided <strong>cloud advisory and architecture optimization</strong> for Taihe IoT, transforming the existing bare-metal deployment into a container-based architecture on Huawei Cloud CCE. Through deep POC evaluation and resource consolidation planning, the server footprint was reduced from <strong>30 physical machines to 17 virtual machines</strong>, significantly cutting costs while substantially improving reliability.</p>
          <div class="feat-list">
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>Architecture transformation: bare-metal to CCE containerized solution with auto-scaling</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>Cost optimization: resources reduced from 30 servers to 17 VMs, saving 43%</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>Reliability assurance: cloud high-availability deployment with automatic failover</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>Full-cycle engagement: advisory → solution design → migration → acceptance delivery</div>
          </div>
          <div class="metrics-row">
            <div class="metric">
              <div class="mval" style="color:#d97706;">43%</div>
              <div class="mlab">Resource Cost Reduction<br>Server Consolidation</div>
            </div>
            <div class="metric">
              <div class="mval" style="color:#d97706;">30→17</div>
              <div class="mlab">Server Count<br>Physical → Virtual</div>
            </div>
            <div class="metric">
              <div class="mval" style="color:#d97706;">End-to-End</div>
              <div class="mlab">Advisory to Delivery<br>Full-Cycle Service</div>
            </div>
          </div>
          <div class="partner-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            Partner: Huawei Cloud CCE
          </div>
        </div>
        <div class="case-screens arch-screens">
          <div class="arch-frame">
            <div class="arch-caption">Containerized Migration Solution</div>
            <img src="/cases/cloud-taihe-iot.png" alt="Taihe IoT Containerized Architecture" class="arch-img" />
          </div>
          <div class="savings-card">
            <div class="savings-title">Resource Savings Comparison</div>
            <div class="savings-bar-wrap">
              <div class="savings-label">Before Migration · Physical Servers</div>
              <div class="savings-bar before">
                <div class="bar-fill" style="width:100%;background:linear-gradient(90deg,#f87171,#fca5a5);"></div>
                <span>30 units</span>
              </div>
            </div>
            <div class="savings-bar-wrap">
              <div class="savings-label">After Migration · Virtual Machines</div>
              <div class="savings-bar after">
                <div class="bar-fill" style="width:56.7%;background:linear-gradient(90deg,#d97706,#fbbf24);"></div>
                <span>17 units</span>
              </div>
            </div>
            <div class="savings-note">43% resource cost savings</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<!-- FOOTER -->
<footer class="cc-footer">
  <div class="footer-l">Chinasoft International (CSI) · <span>Capability Library</span></div>
  <div class="footer-r">© 2025 ChinaSofti Technology Service Co., Ltd.</div>
</footer>

</div>
</template>

<script setup>
import { onMounted } from 'vue'
import NavBar from './NavBar.vue'
onMounted(() => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) } })
  }, { threshold: 0.06 })
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
})
</script>

<style scoped>
/* ===== PAGE & MESH ===== */
.cc-page {
  font-family: 'PingFang SC','Microsoft YaHei','Segoe UI',sans-serif;
  background: #f0f4ff;
  color: #0f172a; overflow-x: hidden; min-height: 100vh; position: relative;
}
.mesh-bg {
  position: fixed; inset: 0; pointer-events: none; z-index: 0;
  background:
    radial-gradient(ellipse 80% 60% at 20% -10%, rgba(29,78,216,0.07) 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 80% 110%, rgba(124,58,237,0.06) 0%, transparent 60%);
}

/* ===== HERO ===== */
.cc-hero {
  position: relative; z-index: 1;
  background: linear-gradient(140deg,#050e28 0%,#081840 30%,#0d2060 55%,#0a2a5e 78%,#041e3a 100%);
  padding: 100px 72px 80px; overflow: hidden; min-height: 440px;
}
.hero-orb { position:absolute; border-radius:50%; filter:blur(90px); pointer-events:none; }
.orb-a { width:500px; height:500px; background:rgba(29,78,216,0.32); top:-150px; right:-50px; animation:orbF 9s ease-in-out infinite alternate; }
.orb-b { width:340px; height:340px; background:rgba(99,102,241,0.22); bottom:-90px; left:8%; animation:orbF 11s ease-in-out infinite alternate-reverse; }
.orb-c { width:240px; height:240px; background:rgba(6,182,212,0.24); top:30%; left:48%; animation:orbF 7s ease-in-out infinite alternate; }
@keyframes orbF { 0%{transform:translate(0,0)} 100%{transform:translate(28px,18px)} }
.hero-inner { max-width: 920px; margin: 0 auto; position: relative; z-index: 2; }
.hero-pill { display:inline-flex; align-items:center; gap:9px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.16); border-radius:999px; padding:8px 20px; margin-bottom:28px; font-size:0.72rem; font-weight:700; letter-spacing:0.12em; color:rgba(255,255,255,0.75); text-transform:uppercase; backdrop-filter:blur(16px); }
.pill-dot { width:8px; height:8px; border-radius:50%; background:#60a5fa; box-shadow:0 0 10px #60a5fa; animation:pulseDot 2s ease infinite; }
@keyframes pulseDot { 0%,100%{box-shadow:0 0 4px #60a5fa} 50%{box-shadow:0 0 14px #60a5fa,0 0 28px rgba(96,165,250,0.4)} }
.cc-hero h1 { font-size:clamp(2.2rem,4.5vw,3.8rem); font-weight:900; line-height:1.06; letter-spacing:-0.03em; color:#fff; margin-bottom:18px; }
.shine { background:linear-gradient(90deg,#818cf8,#67e8f9,#a78bfa,#38bdf8,#818cf8); background-size:400%; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; animation:shineAnim 6s linear infinite; }
@keyframes shineAnim { 0%{background-position:0%} 100%{background-position:400%} }
.hero-sub { font-size:0.98rem; color:rgba(255,255,255,0.55); line-height:1.8; max-width:620px; margin-bottom:26px; }
.hero-badges { display:flex; flex-wrap:wrap; gap:9px; }
.h-badge { display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); border-radius:10px; padding:7px 14px; font-size:0.8rem; color:rgba(255,255,255,0.85); backdrop-filter:blur(12px); }
.flag { font-size:1.05rem; }

/* ===== BODY ===== */
.cc-body { position:relative; z-index:1; max-width:1200px; margin:0 auto; padding:56px 72px 100px; display:flex; flex-direction:column; gap:36px; }

/* ===== REVEAL ===== */
.reveal { opacity:0; transform:translateY(36px); transition:opacity .75s ease,transform .75s ease; }
.reveal.in { opacity:1; transform:none; }

/* ===== CASE CARD ===== */
.case-card {
  background: white;
  border: 1px solid rgba(29,78,216,0.09);
  border-left: 5px solid var(--accent);
  border-radius: 22px; overflow: hidden;
  box-shadow: 0 4px 24px rgba(29,78,216,0.08);
  transition: transform .3s, box-shadow .3s;
}
.case-card:hover { transform:translateY(-5px); box-shadow:0 16px 48px rgba(var(--accent-rgb),0.15); }

/* ===== CASE LAYOUT ===== */
.case-top { display:grid; grid-template-columns:1fr 1fr; gap:0; }
.case-top.reverse { direction:rtl; }
.case-top.reverse > * { direction:ltr; }

/* ===== INFO PANEL ===== */
.case-info { padding:36px 40px; border-right:1px solid rgba(0,0,0,0.07); }
.case-top.reverse .case-info { border-right:none; border-left:1px solid rgba(0,0,0,0.07); }
.case-eyebrow { display:flex; align-items:center; gap:10px; margin-bottom:12px; flex-wrap:wrap; }
.flag-tag { font-size:0.78rem; font-weight:700; color:rgba(30,27,75,0.50); letter-spacing:0.06em; }
.status-tag { display:inline-flex; align-items:center; gap:6px; font-size:0.72rem; font-weight:700; padding:4px 12px; border-radius:999px; border:1px solid; }
.dot { width:7px; height:7px; border-radius:50%; flex-shrink:0; }
.case-info h2 { font-size:1.45rem; font-weight:900; color:#1e1b4b; line-height:1.18; margin:0 0 14px; }
.case-info h2 em { font-size:1rem; font-weight:600; color:rgba(30,27,75,0.60); font-style:normal; display:block; }
.tag-row { display:flex; flex-wrap:wrap; gap:7px; margin-bottom:16px; }
.ctag { font-size:0.72rem; font-weight:700; padding:4px 12px; border-radius:999px; border:1px solid; }
.ctag.blue { background:rgba(29,78,216,0.10);color:#1d4ed8;border-color:rgba(29,78,216,0.25); }
.ctag.cyan { background:rgba(8,145,178,0.10);color:#0369a1;border-color:rgba(8,145,178,0.25); }
.ctag.green { background:rgba(5,150,105,0.10);color:#047857;border-color:rgba(5,150,105,0.25); }
.ctag.purple { background:rgba(124,58,237,0.10);color:#6d28d9;border-color:rgba(124,58,237,0.25); }
.ctag.amber { background:rgba(245,158,11,0.10);color:#b45309;border-color:rgba(245,158,11,0.25); }
.case-desc { font-size:0.93rem; color:rgba(30,27,75,0.78); line-height:1.82; margin:0 0 18px; }
.case-desc strong { color:#1e1b4b; font-weight:700; }

/* ===== FEATURES ===== */
.feat-list { display:flex; flex-direction:column; gap:9px; margin-bottom:18px; }
.feat { display:flex; align-items:flex-start; gap:9px; font-size:0.86rem; color:rgba(30,27,75,0.76); line-height:1.5; }
.feat svg { flex-shrink:0; margin-top:2px; }

/* ===== METRICS ===== */
.metrics-row { display:flex; gap:0; border:1px solid rgba(0,0,0,0.07); border-radius:12px; overflow:hidden; margin-bottom:18px; }
.metric { flex:1; padding:14px 16px; text-align:center; border-right:1px solid rgba(0,0,0,0.07); }
.metric:last-child { border-right:none; }
.mval { font-size:1.55rem; font-weight:900; letter-spacing:-0.03em; line-height:1.1; margin-bottom:5px; }
.mlab { font-size:0.68rem; color:rgba(30,27,75,0.50); line-height:1.5; font-weight:600; }

/* ===== TECH ROW ===== */
.tech-row { display:flex; flex-wrap:wrap; gap:7px; margin-bottom:16px; }
.tech-row span { font-size:0.74rem; font-weight:600; padding:4px 10px; border-radius:7px; background:rgba(var(--accent-rgb),0.09); color:var(--accent); border:1px solid rgba(var(--accent-rgb),0.20); }

/* ===== PARTNER ===== */
.partner-tag { display:flex; align-items:center; gap:8px; font-size:0.78rem; font-weight:700; color:rgba(30,27,75,0.45); padding-top:14px; border-top:1px solid rgba(0,0,0,0.07); }
.partner-tag svg { color:var(--accent); flex-shrink:0; }

/* ===== SCREENS PANEL ===== */
.case-screens { padding:32px 28px; background:rgba(var(--accent-rgb),0.04); display:flex; flex-direction:column; justify-content:center; }

/* Arch diagram screenshots */
.arch-screens { gap:0; }
.arch-frame { border-radius:12px; overflow:hidden; box-shadow:0 6px 24px rgba(0,0,0,0.13); border:1px solid rgba(0,0,0,0.09); }
.arch-caption { font-size:0.68rem; font-weight:700; color:var(--accent); background:rgba(var(--accent-rgb),0.08); padding:7px 14px; border-bottom:1px solid rgba(var(--accent-rgb),0.15); letter-spacing:0.08em; text-transform:uppercase; }
.arch-img { width:100%; display:block; object-fit:cover; object-position:top; max-height:220px; }

/* KP Cards (Changhong side panel) */
.kp-cards { margin-top:16px; display:flex; flex-direction:column; gap:10px; }
.kp-item { display:flex; align-items:flex-start; gap:12px; background:rgba(var(--accent-rgb),0.06); border:1px solid rgba(var(--accent-rgb),0.15); border-radius:10px; padding:12px 16px; }
.kp-title { font-size:0.84rem; font-weight:700; color:#1e1b4b; line-height:1.3; }
.kp-sub { font-size:0.72rem; color:rgba(30,27,75,0.50); margin-top:2px; }

/* Savings card (Taihe) */
.savings-card { margin-top:16px; background:rgba(var(--accent-rgb),0.06); border:1px solid rgba(var(--accent-rgb),0.15); border-radius:12px; padding:16px 20px; }
.savings-title { font-size:0.75rem; font-weight:800; color:rgba(30,27,75,0.55); letter-spacing:0.09em; text-transform:uppercase; margin-bottom:14px; }
.savings-bar-wrap { margin-bottom:10px; }
.savings-label { font-size:0.72rem; color:rgba(30,27,75,0.55); font-weight:600; margin-bottom:5px; }
.savings-bar { height:28px; background:rgba(0,0,0,0.05); border-radius:6px; overflow:hidden; position:relative; display:flex; align-items:center; }
.bar-fill { height:100%; border-radius:6px; }
.savings-bar span { position:absolute; right:10px; font-size:0.76rem; font-weight:800; color:#1e1b4b; }
.savings-note { font-size:0.78rem; font-weight:700; color:var(--accent); text-align:center; margin-top:10px; border-top:1px solid rgba(var(--accent-rgb),0.20); padding-top:10px; }

/* ===== FOOTER ===== */
.cc-footer { position:relative; z-index:1; background:white; border-top:1px solid rgba(29,78,216,0.08); padding:44px 72px; display:flex; justify-content:space-between; align-items:center; }
.footer-l { color:#334155; font-weight:700; font-size:0.95rem; }
.footer-l span { background:linear-gradient(90deg,#1d4ed8,#7c3aed); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
.footer-r { color:#94a3b8; font-size:0.8rem; }

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .cc-hero { padding:80px 32px 60px; }
  .cc-body { padding:40px 32px 80px; }
  .case-top { grid-template-columns:1fr; }
  .case-top.reverse { direction:ltr; }
  .case-top.reverse .case-info { border-left:none; border-right:none; border-bottom:1px solid rgba(0,0,0,0.07); }
  .case-info { border-right:none; border-bottom:1px solid rgba(0,0,0,0.07); }
  .case-top.reverse .case-screens { order:-1; }
  .cc-footer { padding:36px 32px; }
}
@media (max-width: 768px) {
  .cc-hero { padding:70px 16px 50px; min-height:auto; }
  .cc-hero h1 { font-size:2rem; }
  .cc-body { padding:28px 16px 60px; gap:22px; }
  .case-info { padding:24px 20px; }
  .case-screens { padding:20px 16px; }
  .metrics-row { flex-wrap:wrap; }
  .metric { min-width:30%; }
  .cc-footer { padding:24px 16px; flex-direction:column; gap:8px; text-align:center; }
}
</style>
