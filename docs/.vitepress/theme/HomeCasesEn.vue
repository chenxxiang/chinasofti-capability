<template>
<div class="cases-page">
<div class="mesh-bg"></div>

<NavBar active="cases" />

<!-- HERO -->
<div class="cases-hero">
  <div class="hero-orb orb-a"></div>
  <div class="hero-orb orb-b"></div>
  <div class="hero-orb orb-c"></div>
  <div class="hero-inner">
    <div class="hero-pill"><span class="pill-dot"></span>Success Cases · Global Delivery Proof</div>
    <h1>Mini-Program Migration<br><span class="shine">Global Benchmark Cases</span></h1>
    <p class="hero-sub">From East Africa Mobile Money to Southeast Asia super-apps, from AIIB's digital platform to World Aquatics' full-scene operations — Chinasoft International (CSI) partners with Ant Group and Huawei to deliver fintech and digital services worldwide.</p>
    <div class="hero-badges">
      <span class="h-badge"><span class="flag">🇪🇹</span> Ethiopia · Siinqee Bank</span>
      <span class="h-badge"><span class="flag">🇲🇾</span> Malaysia · KIBB KDi GO</span>
      <span class="h-badge"><span class="flag">🇮🇩</span> Indonesia · BNI Bank</span>
      <span class="h-badge"><span class="flag">🌏</span> AIIB ITP · 110 Countries</span>
      <span class="h-badge"><span class="flag">🏊</span> Alibaba · World Aquatics</span>
    </div>
  </div>
</div>

<!-- CASES BODY -->
<div class="cases-body">
  <div
    v-for="(c, i) in cases"
    :key="c.id"
    class="case-block reveal"
    :id="c.id"
  >
    <div class="case-card" :style="`--accent:${c.accentColor};--accent-rgb:${hexToRgb(c.accentColor)};`">
      <div class="case-top" :class="{ reverse: i % 2 === 1 }">

        <!-- Info panel -->
        <div class="case-info">
          <div class="case-eyebrow">
            <span class="flag-tag">{{ c.flag }} {{ c.country }}</span>
            <span class="status-tag" :style="`background:${c.accentColor}1e;color:${c.accentDark};border-color:${c.accentColor}4d;`">
              <i class="dot" :style="`background:${c.accentColor};`"></i>{{ c.status }}
            </span>
          </div>
          <h2>{{ c.title }}<br><em>{{ c.subtitle }}</em></h2>
          <div class="tag-row">
            <span v-for="tag in c.tags" :key="tag" :class="['ctag', c.tagClass]">{{ tag }}</span>
          </div>
          <p class="case-desc" v-html="c.description"></p>

          <div v-if="c.contentType === 'features'" class="feat-list">
            <div v-for="feat in c.features" :key="feat" class="feat">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" :stroke="c.accentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              {{ feat }}
            </div>
          </div>

          <div v-if="c.contentType === 'metrics'" class="metrics-row">
            <div v-for="m in c.metrics" :key="m.val" class="metric">
              <div class="mval" :style="`color:${c.accentColor};`">{{ m.val }}</div>
              <div class="mlab" style="white-space:pre-line;">{{ m.label }}</div>
            </div>
          </div>

          <div v-if="c.techStack" class="tech-row">
            <span v-for="t in c.techStack" :key="t">{{ t }}</span>
          </div>

          <div class="partner-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            {{ c.partnerDisplay || ('Partner: ' + c.partner) }}
          </div>
        </div>

        <!-- Phone screenshots -->
        <div v-if="c.screenshotType === 'phone'" class="case-screens phone-screens">
          <template v-for="(src, si) in c.screenshots" :key="si">
            <div v-if="c.archScreenshot && si === c.screenshots.length - 1" class="arch-thumb">
              <img :src="src" :alt="c.title" :style="`width:100%;border-radius:10px;border:1px solid ${c.accentColor}33;`" />
              <div class="arch-label">{{ c.archLabel }}</div>
            </div>
            <div v-else class="phone-wrap">
              <img :src="src" :alt="c.title" class="phone-img" />
            </div>
          </template>
        </div>

        <!-- Browser screenshots: stacked -->
        <div v-else-if="c.screenshotLayout === 'stacked'" class="case-screens web-screens">
          <div
            v-for="(src, si) in c.screenshots"
            :key="si"
            class="browser-wrap"
            :style="si > 0 ? 'margin-top:12px;' : ''"
          >
            <div class="browser-bar">
              <span class="b-dot r"></span><span class="b-dot y"></span><span class="b-dot g"></span>
              <span class="b-addr">{{ c.browserAddrs[si] }}</span>
            </div>
            <img :src="src" :alt="c.title" style="width:100%;display:block;border-radius:0 0 10px 10px;" />
          </div>
        </div>

        <!-- Browser screenshots: 1 + 2 grid -->
        <div v-else-if="c.screenshotLayout === 'grid'" class="case-screens web-screens">
          <div class="browser-wrap">
            <div class="browser-bar">
              <span class="b-dot r"></span><span class="b-dot y"></span><span class="b-dot g"></span>
              <span class="b-addr">{{ c.browserAddrs[0] }}</span>
            </div>
            <img :src="c.screenshots[0]" :alt="c.title" style="width:100%;display:block;border-radius:0 0 10px 10px;" />
          </div>
          <div style="margin-top:12px;display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div class="browser-wrap">
              <div class="browser-bar" style="font-size:0.6rem;">
                <span class="b-dot r"></span><span class="b-dot y"></span><span class="b-dot g"></span>
                <span class="b-addr">{{ c.browserAddrs[1] }}</span>
              </div>
              <img :src="c.screenshots[1]" :alt="c.title" style="width:100%;display:block;border-radius:0 0 8px 8px;" />
            </div>
            <div class="browser-wrap">
              <div class="browser-bar" style="font-size:0.6rem;">
                <span class="b-dot r"></span><span class="b-dot y"></span><span class="b-dot g"></span>
                <span class="b-addr">{{ c.browserAddrs[2] }}</span>
              </div>
              <img :src="c.screenshots[2]" :alt="c.title" style="width:100%;display:block;border-radius:0 0 8px 8px;" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

<!-- FOOTER -->
<footer class="au-footer">
  <div class="footer-l">Chinasoft International (CSI) · <span>Capability Library</span></div>
  <div class="footer-r">© 2025 ChinaSofti Technology Service Co., Ltd.</div>
</footer>

</div>
</template>

<script setup>
import { onMounted } from 'vue'
import NavBar from './NavBar.vue'
import { cases } from './data/cases.en.js'

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r},${g},${b}`
}

onMounted(() => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) } })
  }, { threshold: 0.06 })
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
})
</script>

<style scoped>
/* ===== PAGE & MESH ===== */
.cases-page {
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
.cases-hero {
  position: relative; z-index: 1;
  background: linear-gradient(140deg,#050413 0%,#0c0a2e 30%,#150d50 55%,#0a1f5e 78%,#041e3a 100%);
  padding: 100px 72px 80px; overflow: hidden; min-height: 440px;
}
.hero-orb { position:absolute; border-radius:50%; filter:blur(90px); pointer-events:none; }
.orb-a { width:500px; height:500px; background:rgba(99,102,241,0.30); top:-150px; right:-50px; animation:orbF 9s ease-in-out infinite alternate; }
.orb-b { width:340px; height:340px; background:rgba(6,182,212,0.24); bottom:-90px; left:8%; animation:orbF 11s ease-in-out infinite alternate-reverse; }
.orb-c { width:240px; height:240px; background:rgba(16,185,129,0.26); top:30%; left:48%; animation:orbF 7s ease-in-out infinite alternate; }
@keyframes orbF { 0%{transform:translate(0,0)} 100%{transform:translate(28px,18px)} }
.hero-inner { max-width: 920px; margin: 0 auto; position: relative; z-index: 2; }
.hero-pill { display:inline-flex; align-items:center; gap:9px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.16); border-radius:999px; padding:8px 20px; margin-bottom:28px; font-size:0.72rem; font-weight:700; letter-spacing:0.12em; color:rgba(255,255,255,0.75); text-transform:uppercase; backdrop-filter:blur(16px); }
.pill-dot { width:8px; height:8px; border-radius:50%; background:#38bdf8; box-shadow:0 0 10px #38bdf8; animation:pulseDot 2s ease infinite; }
@keyframes pulseDot { 0%,100%{box-shadow:0 0 4px #38bdf8} 50%{box-shadow:0 0 14px #38bdf8,0 0 28px rgba(56,189,248,0.4)} }
.cases-hero h1 { font-size:clamp(2.2rem,4.5vw,3.8rem); font-weight:900; line-height:1.06; letter-spacing:-0.03em; color:#fff; margin-bottom:18px; }
.shine { background:linear-gradient(90deg,#818cf8,#67e8f9,#a78bfa,#38bdf8,#818cf8); background-size:400%; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; animation:shineAnim 6s linear infinite; }
@keyframes shineAnim { 0%{background-position:0%} 100%{background-position:400%} }
.hero-sub { font-size:0.98rem; color:rgba(255,255,255,0.55); line-height:1.8; max-width:620px; margin-bottom:26px; }
.hero-badges { display:flex; flex-wrap:wrap; gap:9px; }
.h-badge { display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); border-radius:10px; padding:7px 14px; font-size:0.8rem; color:rgba(255,255,255,0.85); backdrop-filter:blur(12px); }
.flag { font-size:1.05rem; }

/* ===== BODY ===== */
.cases-body { position:relative; z-index:1; max-width:1200px; margin:0 auto; padding:56px 72px 100px; display:flex; flex-direction:column; gap:36px; }

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
.ctag.green { background:rgba(16,185,129,0.10);color:#059669;border-color:rgba(16,185,129,0.25); }
.ctag.indigo { background:rgba(99,102,241,0.10);color:#4f46e5;border-color:rgba(99,102,241,0.25); }
.ctag.cyan { background:rgba(8,145,178,0.10);color:#0369a1;border-color:rgba(8,145,178,0.25); }
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

/* Phone screenshots */
.phone-screens { flex-direction:row; align-items:flex-start; gap:12px; }
.phone-wrap { flex:1; min-width:0; }
.phone-img { width:100%; border-radius:22px; box-shadow:0 8px 32px rgba(0,0,0,0.20), 0 0 0 1px rgba(0,0,0,0.06); display:block; }
.arch-thumb { flex:1.1; min-width:0; }
.arch-label { font-size:0.68rem; font-weight:700; color:var(--accent); text-align:center; margin-top:6px; letter-spacing:0.08em; text-transform:uppercase; }

/* Web/browser screenshots */
.web-screens { gap:0; }
.browser-wrap { border-radius:10px; overflow:hidden; box-shadow:0 6px 24px rgba(0,0,0,0.15); border:1px solid rgba(0,0,0,0.10); }
.browser-bar { display:flex; align-items:center; gap:6px; padding:8px 12px; background:#f1f5f9; border-bottom:1px solid rgba(0,0,0,0.08); }
.b-dot { width:10px; height:10px; border-radius:50%; flex-shrink:0; }
.b-dot.r { background:#ff5f57; } .b-dot.y { background:#febc2e; } .b-dot.g { background:#28c840; }
.b-addr { font-size:0.68rem; color:#64748b; font-weight:500; margin-left:4px; font-family:monospace; }

/* ===== FOOTER ===== */
.au-footer { position:relative; z-index:1; background:white; border-top:1px solid rgba(29,78,216,0.08); padding:44px 72px; display:flex; justify-content:space-between; align-items:center; }
.footer-l { color:#334155; font-weight:700; font-size:0.95rem; }
.footer-l span { background:linear-gradient(90deg,#1d4ed8,#7c3aed); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
.footer-r { color:#94a3b8; font-size:0.8rem; }

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .cases-hero { padding:80px 32px 60px; }
  .cases-body { padding:40px 32px 80px; }
  .case-top { grid-template-columns:1fr; }
  .case-top.reverse { direction:ltr; }
  .case-top.reverse .case-info { border-left:none; border-right:none; border-bottom:1px solid rgba(0,0,0,0.07); }
  .case-info { border-right:none; border-bottom:1px solid rgba(0,0,0,0.07); }
  .case-top.reverse .case-screens { order:-1; }
  .au-footer { padding:36px 32px; }
}
@media (max-width: 768px) {
  .cases-hero { padding:70px 16px 50px; min-height:auto; }
  .cases-hero h1 { font-size:2rem; }
  .cases-body { padding:28px 16px 60px; gap:22px; }
  .case-info { padding:24px 20px; }
  .case-screens { padding:20px 16px; }
  .phone-screens { gap:8px; }
  .metrics-row { flex-wrap:wrap; }
  .metric { min-width:30%; }
  .au-footer { padding:24px 16px; flex-direction:column; gap:8px; text-align:center; }
}
@media (max-width: 560px) {
  .phone-screens { gap:6px; }
  .phone-wrap:nth-child(3) { display:none; }
  .arch-thumb { display:none; }
}
</style>
