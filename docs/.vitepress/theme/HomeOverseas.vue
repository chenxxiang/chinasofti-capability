<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  initParticles()
  initReveal()
  initCounters()
  initHamburger()
})

function initParticles() {
  const canvas = document.getElementById('ov-canvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  let W, H, particles = [], mouse = { x: -999, y: -999 }
  const N = 100, CONN = 120
  function resize() { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight }
  function Particle() {
    this.x = Math.random() * W; this.y = Math.random() * H
    this.vx = (Math.random() - .5) * 0.5; this.vy = (Math.random() - .5) * 0.5
    this.r = Math.random() * 1.5 + 0.5
  }
  Particle.prototype.update = function () {
    this.x += this.vx; this.y += this.vy
    if (this.x < 0 || this.x > W) this.vx *= -1
    if (this.y < 0 || this.y > H) this.vy *= -1
  }
  function init() { resize(); particles = []; for (let i = 0; i < N; i++) particles.push(new Particle()) }
  function draw() {
    ctx.clearRect(0, 0, W, H)
    const allPts = [...particles, { x: mouse.x, y: mouse.y, isMouse: true }]
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]; p.update()
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(148,163,248,0.7)'; ctx.fill()
      for (let j = i + 1; j < allPts.length; j++) {
        const q = allPts[j], dx = p.x - q.x, dy = p.y - q.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < CONN) {
          const alpha = (1 - dist / CONN) * (q.isMouse ? 0.6 : 0.18)
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y)
          ctx.strokeStyle = `rgba(148,163,248,${alpha})`
          ctx.lineWidth = q.isMouse ? 1.2 : 0.6; ctx.stroke()
        }
      }
    }
    requestAnimationFrame(draw)
  }
  window.addEventListener('resize', init)
  const hero = canvas.closest('.ov-hero')
  if (hero) {
    hero.addEventListener('mousemove', e => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top
    })
    hero.addEventListener('mouseleave', () => { mouse.x = -999; mouse.y = -999 })
  }
  init(); draw()
}

function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) }
    })
  }, { threshold: 0.06 })
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
}

function initCounters() {
  function animCount(el) {
    const target = +el.dataset.target
    const dur = 1600, start = performance.now();
    (function tick(now) {
      const p = Math.min((now - start) / dur, 1)
      const ease = 1 - Math.pow(1 - p, 4)
      el.textContent = Math.round(ease * target)
      if (p < 1) requestAnimationFrame(tick)
      else el.textContent = target
    })(performance.now())
  }
  const hero = document.querySelector('.ov-hero-stats')
  if (hero) {
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll('.counting').forEach(animCount)
      })
    }, { threshold: 0.1 }).observe(hero)
  }
}

function initHamburger() {
  const btn = document.getElementById('nav-hamburger-ov')
  const drawer = document.getElementById('nav-drawer-ov')
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
</script>

<template>
<div class="au-page">
<div class="mesh-bg"></div>

<!-- NAV -->
<nav class="au-nav">
  <div class="nav-logo">
    <span class="logo-chip">CSI</span>
    中软国际 · 能力库
  </div>
  <div class="nav-links">
    <a href="/zh/">首页</a>
    <a href="/zh/overseas/" class="active">海外布局</a>
    <a href="/zh/business/cms/">解决方案</a>
  </div>
  <button class="nav-cta" onclick="window.location.href='/en/'">English</button>
  <button class="nav-hamburger" id="nav-hamburger-ov" aria-label="菜单">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="nav-drawer" id="nav-drawer-ov">
  <a href="/zh/">首页</a>
  <a href="/zh/overseas/">海外布局</a>
  <a href="/zh/business/cms/">解决方案</a>
  <a href="/en/" class="nav-drawer-lang">English</a>
</div>

<!-- HERO -->
<div class="ov-hero">
  <canvas id="ov-canvas"></canvas>
  <div class="hero-orb orb-a"></div>
  <div class="hero-orb orb-b"></div>
  <div class="hero-orb orb-c"></div>
  <div class="ov-hero-inner">
    <div class="hero-pill"><span class="pill-dot"></span>Global Footprint · 全球战略布局</div>
    <h1 class="ov-h1">覆盖全球<br><span class="shine">五大战略区域</span></h1>
    <p class="ov-hero-sub">深耕华为生态18年 · 境外分支覆盖东南亚、港澳大湾区、中东、印度、日本五大核心市场</p>
    <div class="ov-hero-stats">
      <div class="ov-hs">
        <div class="ov-hs-num"><span class="counting" data-target="11">0</span></div>
        <div class="ov-hs-lab">境外分支机构</div>
      </div>
      <div class="ov-hs-div"></div>
      <div class="ov-hs">
        <div class="ov-hs-num"><span class="counting" data-target="47">0</span></div>
        <div class="ov-hs-lab">全球服务城市</div>
      </div>
      <div class="ov-hs-div"></div>
      <div class="ov-hs">
        <div class="ov-hs-num">1000<span class="ov-hs-plus">+</span></div>
        <div class="ov-hs-lab">中方派驻员工</div>
      </div>
      <div class="ov-hs-div"></div>
      <div class="ov-hs">
        <div class="ov-hs-num">2700<span class="ov-hs-plus">+</span></div>
        <div class="ov-hs-lab">全球企业客户</div>
      </div>
    </div>
  </div>
</div>

<!-- COVERAGE STRIP -->
<div class="ov-cov-strip">
  <div class="ov-cov-item">
    <span class="ov-cov-icon">🏢</span>
    <span class="ov-cov-text"><strong>2</strong> 个设立于高科技园区或自贸区</span>
  </div>
  <div class="ov-cov-item">
    <span class="ov-cov-icon">🔧</span>
    <span class="ov-cov-text"><strong>11</strong> 个华为全球中方ODC</span>
  </div>
  <div class="ov-cov-item">
    <span class="ov-cov-icon">🌐</span>
    <span class="ov-cov-text"><strong>11</strong> 个MNC跨国企业ODC</span>
  </div>
  <div class="ov-cov-item">
    <span class="ov-cov-icon">📱</span>
    <span class="ov-cov-text">华为手机端覆盖 <strong>70+</strong> 城市</span>
  </div>
  <div class="ov-cov-item">
    <span class="ov-cov-icon">🤝</span>
    <span class="ov-cov-text">运营商合作签约 <strong>23</strong> 家</span>
  </div>
</div>

<!-- BODY -->
<div class="page-body">

  <!-- REGION CARDS -->
  <div class="sec reveal">
    <div class="sec-header">
      <div class="sec-label-wrap">
        <div class="sec-eyebrow">Regional Offices</div>
        <div class="sec-title">五大战略区域</div>
      </div>
    </div>

    <div class="ov-region-grid">

      <!-- 东南亚 -->
      <div class="ov-region-card">
        <div class="ov-rc-head" style="background:linear-gradient(135deg,#059669,#10b981);">
          <div class="ov-rc-flag">🌏</div>
          <div class="ov-rc-info">
            <div class="ov-rc-title">东南亚区域</div>
            <div class="ov-rc-sub">Southeast Asia · 3 个实体</div>
          </div>
          <div class="ov-rc-badge">260+ 本地员工</div>
        </div>
        <div class="ov-rc-body">
          <div class="ov-entities">
            <div class="ov-entity">
              <span class="ov-edot" style="background:#059669;"></span>
              <div>
                <div class="ov-ename">CSI Interfusion SDN. BHD</div>
                <div class="ov-eloc">📍 马来西亚 · 吉隆坡</div>
              </div>
            </div>
            <div class="ov-entity">
              <span class="ov-edot" style="background:#059669;"></span>
              <div>
                <div class="ov-ename">CSI Interfusion Singapore</div>
                <div class="ov-eloc">📍 新加坡</div>
              </div>
            </div>
            <div class="ov-entity">
              <span class="ov-edot" style="background:#059669;"></span>
              <div>
                <div class="ov-ename">PT CSI Interfusion Technology Service JAKARTA</div>
                <div class="ov-eloc">📍 印度尼西亚 · 雅加达</div>
              </div>
            </div>
          </div>
          <div class="ov-svc-section">
            <div class="ov-svc-label">核心服务</div>
            <div class="ov-tags">
              <span>Telco 管理服务</span><span>金融 SuperApp</span><span>EKyc</span>
              <span>全面风险管理</span><span>智慧城市/园区</span><span>云平台产品</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 港澳大湾区 -->
      <div class="ov-region-card">
        <div class="ov-rc-head" style="background:linear-gradient(135deg,#dc2626,#f87171);">
          <div class="ov-rc-flag">🇭🇰</div>
          <div class="ov-rc-info">
            <div class="ov-rc-title">港澳大湾区</div>
            <div class="ov-rc-sub">Greater Bay Area · 1 个实体</div>
          </div>
          <div class="ov-rc-badge">160+ 员工</div>
        </div>
        <div class="ov-rc-body">
          <div class="ov-entities">
            <div class="ov-entity">
              <span class="ov-edot" style="background:#dc2626;"></span>
              <div>
                <div class="ov-ename">Chinasoft International Technology Service (Hong Kong)</div>
                <div class="ov-eloc">📍 香港</div>
              </div>
            </div>
          </div>
          <div class="ov-svc-section">
            <div class="ov-svc-label">核心服务</div>
            <div class="ov-tags">
              <span>IDS集成认证支持</span><span>台区ECU/HPLC</span><span>大数据/BES/OCS</span>
              <span>应用开发测试</span><span>云转售/SI</span><span>智慧城市/园区</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 中东 -->
      <div class="ov-region-card">
        <div class="ov-rc-head" style="background:linear-gradient(135deg,#d97706,#f59e0b);">
          <div class="ov-rc-flag">🕌</div>
          <div class="ov-rc-info">
            <div class="ov-rc-title">中东区域</div>
            <div class="ov-rc-sub">Middle East · 2 个实体</div>
          </div>
          <div class="ov-rc-badge">50+ 员工</div>
        </div>
        <div class="ov-rc-body">
          <div class="ov-entities">
            <div class="ov-entity">
              <span class="ov-edot" style="background:#d97706;"></span>
              <div>
                <div class="ov-ename">CSI Joint Advanced Technologies</div>
                <div class="ov-eloc">📍 沙特阿拉伯 · 利雅得（10+ 员工）</div>
              </div>
            </div>
            <div class="ov-entity">
              <span class="ov-edot" style="background:#d97706;"></span>
              <div>
                <div class="ov-ename">CSI INTERFUSION MIDDLE EAST TECHNOLOGY SERVICE</div>
                <div class="ov-eloc">📍 阿联酋 · 阿布扎比（40+ 员工）</div>
              </div>
            </div>
          </div>
          <div class="ov-svc-section">
            <div class="ov-svc-label">核心服务</div>
            <div class="ov-tags">
              <span>HW云/云转售/SI</span><span>IDS集成验证</span><span>数字化运营</span>
              <span>政府应用开发</span><span>智慧城市/园区</span><span>软件运维</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 印度 -->
      <div class="ov-region-card">
        <div class="ov-rc-head" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
          <div class="ov-rc-flag">🇮🇳</div>
          <div class="ov-rc-info">
            <div class="ov-rc-title">印度区域</div>
            <div class="ov-rc-sub">India · 1 个实体</div>
          </div>
          <div class="ov-rc-badge">80+ 员工</div>
        </div>
        <div class="ov-rc-body">
          <div class="ov-entities">
            <div class="ov-entity">
              <span class="ov-edot" style="background:#7c3aed;"></span>
              <div>
                <div class="ov-ename">CSI Interfusion India</div>
                <div class="ov-eloc">📍 印度 · 班加罗尔</div>
              </div>
            </div>
          </div>
          <div class="ov-svc-section">
            <div class="ov-svc-label">核心服务</div>
            <div class="ov-tags">
              <span>Microsoft ISV</span><span>Android开发/UI定制</span><span>远程测试服务</span>
              <span>运营商集成管理</span><span>CRM/BSS系统维护</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 日本 (spans full width) -->
      <div class="ov-region-card ov-card-wide">
        <div class="ov-rc-head" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
          <div class="ov-rc-flag">🇯🇵</div>
          <div class="ov-rc-info">
            <div class="ov-rc-title">日本区域</div>
            <div class="ov-rc-sub">Japan · 1 个实体</div>
          </div>
          <div class="ov-rc-badge">60+ 驻日 + 1000+ 远程</div>
        </div>
        <div class="ov-rc-body ov-rc-body-wide">
          <div class="ov-entities">
            <div class="ov-entity">
              <span class="ov-edot" style="background:#0891b2;"></span>
              <div>
                <div class="ov-ename">東京信華 &amp; 日本創智</div>
                <div class="ov-eloc">📍 日本 · 东京（另有大连/长沙/西安/北京/上海远程团队 1000+ 人）</div>
              </div>
            </div>
          </div>
          <div class="ov-jp-cols">
            <div class="ov-svc-section">
              <div class="ov-svc-label">客户行业</div>
              <div class="ov-tags">
                <span>金融</span><span>制造</span><span>流通</span><span>传媒</span>
              </div>
            </div>
            <div class="ov-svc-section">
              <div class="ov-svc-label">核心服务</div>
              <div class="ov-tags">
                <span>系统开发测试</span><span>测试外包</span><span>人才派遣服务</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- ACHIEVEMENTS -->
  <div class="sec reveal">
    <div class="sec-header">
      <div class="sec-label-wrap">
        <div class="sec-eyebrow">Key Achievements</div>
        <div class="sec-title">核心战略成就</div>
      </div>
    </div>
    <div class="ov-achieve-grid">
      <div class="ov-achieve-card">
        <div class="ov-ach-icon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
        </div>
        <div>
          <div class="ov-ach-title">华为手机端全球布局</div>
          <div class="ov-ach-desc">服务覆盖全球70+城市，累积签约23家运营商合作协议，为华为手机端提供销售及运维全链路服务</div>
        </div>
      </div>
      <div class="ov-achieve-card">
        <div class="ov-ach-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
        </div>
        <div>
          <div class="ov-ach-title">全球企业客户网络</div>
          <div class="ov-ach-desc">全球企业客户超2700家，覆盖金融、电信、政府、制造等行业，跨越东南亚、中东、日本等核心市场</div>
        </div>
      </div>
      <div class="ov-achieve-card">
        <div class="ov-ach-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        </div>
        <div>
          <div class="ov-ach-title">华为ODC深度合作</div>
          <div class="ov-ach-desc">11个机构为华为全球中方服务人员ODC，另有11个供职于跨国企业MNC的ODC，构建完整全球交付体系</div>
        </div>
      </div>
      <div class="ov-achieve-card">
        <div class="ov-ach-icon" style="background:linear-gradient(135deg,#059669,#10b981);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </div>
        <div>
          <div class="ov-ach-title">高科技园区战略布局</div>
          <div class="ov-ach-desc">2个机构设立在高科技园区或自由贸易区内，依托优质政策资源，持续推进本地化战略落地与人才培养</div>
        </div>
      </div>
    </div>
  </div>

</div>

<footer class="au-footer">
  <span class="footer-l">中软国际 · <span>ChinaSofti</span></span>
  <span class="footer-r">chinasofti-capability.vercel.app · © 2025</span>
</footer>

</div>
</template>

<style>
/* HERO */
.ov-hero {
  position: relative; z-index: 1;
  background: linear-gradient(140deg, #08091a 0%, #0f0c2e 30%, #1a1060 55%, #0c2d6e 78%, #063a5a 100%);
  padding: 110px 72px 90px; overflow: hidden; min-height: 460px;
}
#ov-canvas { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.6; }
.ov-hero::before {
  content: ''; position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px);
  background-size: 64px 64px;
  animation: gridDrift 25s linear infinite;
}
.ov-hero-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 2; }
.ov-h1 {
  font-size: clamp(2.6rem, 5vw, 4.4rem); font-weight: 900; line-height: 1.06;
  letter-spacing: -0.03em; color: #fff; margin: 0 0 18px;
}
.ov-hero-sub {
  font-size: 1rem; color: rgba(255,255,255,0.55); line-height: 1.8;
  max-width: 600px; margin-bottom: 40px;
}
.ov-hero-stats { display: flex; align-items: center; flex-wrap: wrap; gap: 0; }
.ov-hs { text-align: center; padding: 0 36px; }
.ov-hs:first-child { padding-left: 0; }
.ov-hs-num {
  font-size: 3rem; font-weight: 900; color: #fff;
  line-height: 1; letter-spacing: -0.04em;
}
.ov-hs-plus { font-size: 1.5rem; font-weight: 700; color: rgba(255,255,255,0.65); }
.ov-hs-lab { font-size: 0.78rem; color: rgba(255,255,255,0.5); margin-top: 6px; font-weight: 500; }
.ov-hs-div { width: 1px; height: 50px; background: rgba(255,255,255,0.15); flex-shrink: 0; }

/* COVERAGE STRIP */
.ov-cov-strip {
  position: relative; z-index: 1;
  background: linear-gradient(135deg, #1d4ed8, #4f46e5, #7c3aed);
  padding: 20px 72px; display: flex; justify-content: center;
  align-items: center; flex-wrap: wrap; overflow: hidden;
}
.ov-cov-strip::before {
  content: ''; position: absolute; inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.ov-cov-item {
  position: relative; z-index: 1;
  display: flex; align-items: center; gap: 10px;
  padding: 6px 28px; color: rgba(255,255,255,0.9);
  font-size: 0.88rem; font-weight: 500;
  border-right: 1px solid rgba(255,255,255,0.15);
  white-space: nowrap;
}
.ov-cov-item:last-child { border-right: none; }
.ov-cov-icon { font-size: 1.1rem; }
.ov-cov-text strong { color: #fff; font-weight: 800; }

/* REGION GRID */
.ov-region-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.ov-card-wide { grid-column: span 2; }

.ov-region-card {
  background: var(--card-bg); border-radius: var(--radius);
  box-shadow: var(--shadow); border: 1px solid rgba(29,78,216,0.09);
  overflow: hidden; transition: box-shadow .3s, transform .3s;
  backdrop-filter: blur(8px);
}
.ov-region-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }

.ov-rc-head {
  display: flex; align-items: center; gap: 16px;
  padding: 20px 24px; color: #fff; position: relative; overflow: hidden;
}
.ov-rc-head::after {
  content: ''; position: absolute; right: -28px; top: -28px;
  width: 110px; height: 110px; border-radius: 50%;
  background: rgba(255,255,255,0.08); pointer-events: none;
}
.ov-rc-flag { font-size: 2.2rem; flex-shrink: 0; position: relative; z-index: 1; line-height: 1; }
.ov-rc-info { flex: 1; position: relative; z-index: 1; }
.ov-rc-title { font-size: 1.1rem; font-weight: 800; line-height: 1.2; }
.ov-rc-sub { font-size: 0.78rem; color: rgba(255,255,255,0.72); margin-top: 3px; }
.ov-rc-badge {
  background: rgba(255,255,255,0.18); backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.28); border-radius: 20px;
  padding: 5px 14px; font-size: 0.78rem; font-weight: 700;
  white-space: nowrap; flex-shrink: 0; position: relative; z-index: 1;
}

.ov-rc-body { padding: 22px 24px; }
.ov-rc-body-wide {
  display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: start;
}

.ov-entities { margin-bottom: 20px; display: flex; flex-direction: column; gap: 13px; }
.ov-entity { display: flex; align-items: flex-start; gap: 11px; }
.ov-edot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; margin-top: 5px; }
.ov-ename { font-size: 0.9rem; font-weight: 700; color: var(--text1); line-height: 1.4; }
.ov-eloc { font-size: 0.78rem; color: var(--text3); margin-top: 2px; }

.ov-svc-section { }
.ov-svc-label {
  font-size: 0.64rem; font-weight: 800; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--blue); margin-bottom: 10px;
}
.ov-tags { display: flex; flex-wrap: wrap; gap: 7px; }
.ov-tags span {
  background: rgba(29,78,216,0.06); border: 1px solid rgba(29,78,216,0.13);
  border-radius: 20px; padding: 4px 12px; font-size: 0.78rem;
  color: var(--text2); font-weight: 500;
}

.ov-jp-cols { display: flex; gap: 36px; flex-wrap: wrap; }

/* ACHIEVEMENTS */
.ov-achieve-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.ov-achieve-card {
  display: flex; gap: 20px; align-items: flex-start;
  background: var(--card-bg); border-radius: var(--radius);
  padding: 28px 24px; box-shadow: var(--shadow);
  border: 1px solid rgba(29,78,216,0.07); transition: all .3s;
  backdrop-filter: blur(8px); cursor: default;
}
.ov-achieve-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.ov-ach-icon {
  width: 52px; height: 52px; border-radius: 14px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 8px 20px rgba(0,0,0,0.14);
}
.ov-ach-title { font-size: 1.02rem; font-weight: 800; color: var(--text1); margin-bottom: 10px; }
.ov-ach-desc { font-size: 0.9rem; color: var(--text2); line-height: 1.75; }

/* TABLET */
@media (max-width: 1024px) {
  .ov-hero { padding: 90px 32px 70px; }
  .ov-cov-strip { padding: 18px 32px; }
}

/* MOBILE */
@media (max-width: 768px) {
  .ov-hero { padding: 72px 16px 56px; min-height: auto; }
  .ov-hero-sub { font-size: 0.88rem; }
  .ov-hs { padding: 10px 18px; }
  .ov-hs-num { font-size: 2.2rem; }
  .ov-hs-div { height: 38px; }

  .ov-cov-strip { padding: 10px 16px; }
  .ov-cov-item {
    padding: 5px 10px; font-size: 0.72rem; border-right: none;
    width: 50%; border-bottom: 1px solid rgba(255,255,255,0.1);
    white-space: normal; line-height: 1.35;
  }
  .ov-cov-item:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.15); }
  .ov-cov-item:last-child { width: 100%; border-bottom: none; justify-content: center; }

  .ov-region-grid { grid-template-columns: 1fr; }
  .ov-card-wide { grid-column: span 1; }
  .ov-rc-body-wide { grid-template-columns: 1fr; }
  .ov-rc-badge { font-size: 0.7rem; padding: 4px 10px; }

  .ov-achieve-grid { grid-template-columns: 1fr; }
}

/* SMALL PHONE */
@media (max-width: 600px) {
  .ov-hero { padding: 64px 16px 48px; }
  .ov-hs { padding: 8px 12px; }
  .ov-hs-num { font-size: 1.7rem; }
  .ov-hs-div { height: 30px; }
}
</style>
