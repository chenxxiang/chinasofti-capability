<script setup>
import { onMounted } from 'vue'
import NavBar from './NavBar.vue'

onMounted(() => {
  initParticles()
  initTypewriter()
  initReveal()
  initCounters()
  initBarChart()
  initTilt()
  initTabs()
})

function initParticles() {
  const canvas = document.getElementById('hero-canvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  let W, H, particles = [], mouse = { x: -999, y: -999 }
  const N = 120, CONN = 130
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
  const hero = canvas.closest('.hero')
  if (hero) {
    hero.addEventListener('mousemove', e => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top
    })
    hero.addEventListener('mouseleave', () => { mouse.x = -999; mouse.y = -999 })
  }
  init(); draw()
}

function initTypewriter() {
  const text = '中国领先的 IT 服务商，深耕全球多国市场，提供政务、金融、电信、能源全行业端到端数字化解决方案'
  const el = document.getElementById('typed-text')
  const cursor = document.getElementById('typed-cursor')
  if (!el) return
  let ci = 0
  function tick() {
    if (ci < text.length) { el.textContent = text.slice(0, ++ci); setTimeout(tick, 48) }
    else if (cursor) { cursor.style.display = 'none' }
  }
  tick()
}

function initReveal() {
  const revObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in')
        e.target.querySelectorAll('.stagger').forEach(s => s.classList.add('in'))
        revObs.unobserve(e.target)
      }
    })
  }, { threshold: 0.06 })
  document.querySelectorAll('.reveal').forEach(el => revObs.observe(el))
  const staggerObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); staggerObs.unobserve(e.target) }
    })
  }, { threshold: 0.06 })
  document.querySelectorAll('.stagger:not(.reveal *)').forEach(el => staggerObs.observe(el))
}

function initCounters() {
  function animCount(el) {
    const target = +el.dataset.target
    const dur = 1800, start = performance.now();
    (function tick(now) {
      const p = Math.min((now - start) / dur, 1)
      const ease = 1 - Math.pow(1 - p, 4)
      el.textContent = Math.round(ease * target)
      if (p < 1) requestAnimationFrame(tick)
      else el.textContent = target
    })(performance.now())
  }
  const statsGrid = document.querySelector('.stats-grid')
  if (statsGrid) {
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll('.counting').forEach(animCount)
      })
    }, { threshold: 0.3 }).observe(statsGrid)
  }
}

function initBarChart() {
  const barChart = document.getElementById('barChart')
  if (!barChart) return
  const barObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.bar-body').forEach((bar, i) => {
          const h = bar.dataset.h
          setTimeout(() => { bar.style.height = h + '%' }, i * 130)
        })
        barObs.unobserve(e.target)
      }
    })
  }, { threshold: 0.2 })
  barObs.observe(barChart)
}

function initTilt() {
  document.querySelectorAll('.stat-card,.a-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect()
      const x = e.clientX - r.left - r.width / 2
      const y = e.clientY - r.top - r.height / 2
      const rx = (-y / r.height) * 10
      const ry = (x / r.width) * 10
      card.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`
    })
    card.addEventListener('mouseleave', () => { card.style.transform = '' })
  })
}

function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'))
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'))
      btn.classList.add('active')
      const panel = document.getElementById('tab-' + target)
      if (panel) {
        panel.classList.add('active')
        setTimeout(() => panel.classList.add('in'), 30)
      }
    })
  })
}

</script>

<template>
<div class="au-page">
<div class="mesh-bg"></div>

<NavBar active="home" />

<!-- HERO -->
<div class="hero">
  <canvas id="hero-canvas"></canvas>
  <div class="hero-orb orb-a"></div>
  <div class="hero-orb orb-b"></div>
  <div class="hero-orb orb-c"></div>
  <div class="hero-inner">
    <div class="hero-pill"><span class="pill-dot"></span>Company Overview · 公司介绍</div>
    <h1>领先的 IT 行业<br><span class="shine">全球化科技服务平台</span></h1>
    <p class="hero-sub"><span id="typed-text"></span><span id="typed-cursor" class="cursor"></span></p>
    <div class="hero-badges">
      <span class="h-badge"><span class="h-badge-icon">🤝</span>Huawei Premier Partner</span>
      <span class="h-badge"><span class="h-badge-icon">📊</span>Gartner Top 73</span>
      <span class="h-badge"><span class="h-badge-icon">🏆</span>中国软件百强 Top 15</span>
      <span class="h-badge"><span class="h-badge-icon">🌍</span>全球 70+ 城市布局</span>
      <span class="h-badge"><span class="h-badge-icon">💡</span>深耕华为生态 18 年</span>
    </div>
  </div>
  <div class="scroll-hint">SCROLL<div class="scroll-chevron"></div></div>
</div>

<!-- CAPABILITY STRIP -->
<div class="cap-strip">
  <div class="cap-item"><span class="cap-icon">🏗️</span>端到端交付能力</div>
  <div class="cap-item"><span class="cap-icon">📱</span>Super App 全栈开发</div>
  <div class="cap-item"><span class="cap-icon">☁️</span>HarmonyOS 鸿蒙生态</div>
  <div class="cap-item"><span class="cap-icon">🤖</span>AI 智能体落地</div>
  <div class="cap-item"><span class="cap-icon">🔐</span>企业级安全合规</div>
  <div class="cap-item"><span class="cap-icon">🌐</span>多语言本地化</div>
</div>

<!-- BODY -->
<div class="page-body">

  <!-- 核心数据 -->
  <div class="sec reveal stagger">
    <div class="sec-header">
      <div class="sec-label-wrap">
        <div class="sec-eyebrow">Key Metrics</div>
        <div class="sec-title">核心数据</div>
      </div>
    </div>
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-val"><span class="counting" data-target="8">0</span><span class="u">万+</span></div><div class="stat-lab">员工总数</div></div>
      <div class="stat-card"><div class="stat-val"><span class="counting" data-target="170">0</span><span class="u">亿</span></div><div class="stat-lab">年收入规模</div></div>
      <div class="stat-card"><div class="stat-val"><span class="counting" data-target="70">0</span><span class="u">+</span></div><div class="stat-lab">全球城市布局</div></div>
      <div class="stat-card"><div class="stat-val">Top<span class="u"> 73</span></div><div class="stat-lab">Gartner 全球排名</div></div>
      <div class="stat-card"><div class="stat-val">Top<span class="u"> 15</span></div><div class="stat-lab">中国软件百强</div></div>
      <div class="stat-card"><div class="stat-val"><span class="counting" data-target="30">0</span><span class="u">%+</span></div><div class="stat-lab">海外业务复合增速</div></div>
      <div class="stat-card"><div class="stat-val"><span class="counting" data-target="98">0</span><span class="u">亿</span></div><div class="stat-lab">华为合作累计合同额</div></div>
      <div class="stat-card"><div class="stat-val"><span class="counting" data-target="1000">0</span><span class="u">+</span></div><div class="stat-lab">全球客户</div></div>
    </div>
  </div>

  <!-- 发展历程 -->
  <div class="sec reveal">
    <div class="sec-header">
      <div class="sec-label-wrap">
        <div class="sec-eyebrow">Milestones</div>
        <div class="sec-title">发展历程</div>
      </div>
    </div>
    <div class="timeline stagger">
      <div class="tl-item"><div class="tl-year">2000</div><div class="tl-connector"><div class="tl-dot"></div></div><div class="tl-card">中软国际在香港联交所上市，开启资本市场征程</div></div>
      <div class="tl-item"><div class="tl-year">2006</div><div class="tl-connector"><div class="tl-dot"></div></div><div class="tl-card">成为华为核心战略合作伙伴，深度参与华为全球 IT 建设</div></div>
      <div class="tl-item"><div class="tl-year">2010</div><div class="tl-connector"><div class="tl-dot"></div></div><div class="tl-card">全面布局离岸外包业务，大连、西安、南京等交付中心相继落成</div></div>
      <div class="tl-item"><div class="tl-year">2015</div><div class="tl-connector"><div class="tl-dot"></div></div><div class="tl-card">启动国际化战略，进入中东、东南亚等新兴市场，年收入突破 50 亿</div></div>
      <div class="tl-item milestone"><div class="tl-year">2019</div><div class="tl-connector"><div class="tl-dot"></div></div><div class="tl-card">海外业务收入超 10 亿，华为合作累计合同额突破 50 亿，荣获 Gartner 全球 IT 服务百强</div></div>
      <div class="tl-item"><div class="tl-year">2022</div><div class="tl-connector"><div class="tl-dot"></div></div><div class="tl-card">发布云智能战略，自主研发 PaaS、IoT 等多款 SaaS 产品，员工规模突破 8 万</div></div>
      <div class="tl-item milestone"><div class="tl-year">2024</div><div class="tl-connector"><div class="tl-dot"></div></div><div class="tl-card">全面布局 AI 智能体与大模型落地，海外 Super App 覆盖中东、东南亚多国</div></div>
      <div class="tl-item milestone"><div class="tl-year">2025</div><div class="tl-connector"><div class="tl-dot"></div></div><div class="tl-card">年收入突破 170 亿，全球 70+ 城市布局，入选 Gartner 全球 IT 服务商 Top 73</div></div>
    </div>
  </div>

  <!-- 区域布局 — Tabs -->
  <div class="sec reveal">
    <div class="sec-header">
      <div class="sec-label-wrap">
        <div class="sec-eyebrow">Presence</div>
        <div class="sec-title">布局与基地</div>
      </div>
    </div>
    <div class="tab-bar">
      <button class="tab-btn active" data-tab="domestic">🏛️ 国内核心基地</button>
      <button class="tab-btn" data-tab="overseas">🌏 海外战略布局</button>
    </div>
    <div id="tab-domestic" class="tab-panel stagger active">
      <div class="r-card"><div class="r-head">🏛️ 北京 · 总部</div><div class="r-body">集团战略决策中心与资本运营总部，设有研究院与 AI 创新中心，引领前沿技术探索，负责全球化战略统筹部署。</div></div>
      <div class="r-card"><div class="r-head">🌆 深圳 · 华南中心</div><div class="r-body">华为生态核心协作基地，承接华为全球 IT 建设的主力交付团队，辐射大湾区数字化需求，Super App 研发重镇。</div></div>
      <div class="r-card"><div class="r-head">🏙️ 西安 · 离岸交付中心</div><div class="r-body">国家软件出口基地，承接日本、欧美离岸外包，研发中心规模超万人，具备大规模并行交付能力。</div></div>
      <div class="r-card"><div class="r-head">🌃 南京 · 数字经济中心</div><div class="r-body">面向金融、电信、政务等行业提供完整数字化转型服务，与江苏省内多家龙头企业建立长期战略合作关系。</div></div>
    </div>
    <div id="tab-overseas" class="tab-panel c3 stagger">
      <div class="r-card"><div class="r-head">🌏 香港 · 国际桥头堡</div><div class="r-body">集团上市主体，专注金融科技、跨境支付与 Super App 解决方案交付，是全球化战略的核心枢纽。</div></div>
      <div class="r-card"><div class="r-head">🕌 中东 · 战略新兴市场</div><div class="r-body">沙特、UAE、科威特等国均有落地项目，已服务多家国有银行与电信运营商，深度参与数字政府建设。</div></div>
      <div class="r-card"><div class="r-head">🌴 东南亚 · 高速增长极</div><div class="r-body">深耕马来西亚、印尼、泰国等市场，提供端到端 Super App 交付，海外业务年复合增速超 30%。</div></div>
    </div>
  </div>

  <!-- 深耕行业 -->
  <div class="sec reveal">
    <div class="sec-header">
      <div class="sec-label-wrap">
        <div class="sec-eyebrow">Industries</div>
        <div class="sec-title">深耕行业</div>
      </div>
    </div>
    <div class="industry-grid stagger">
      <div class="ind-card" style="--ind-color:linear-gradient(135deg,#1d4ed8,#3b82f6);--ind-grad:linear-gradient(135deg,rgba(29,78,216,0.06),transparent);--ind-shadow:rgba(29,78,216,0.28);">
        <div class="ind-icon">🏦</div>
        <div><div class="ind-name">金融 · 银行 · 保险</div><div class="ind-desc">移动银行、电子钱包、保险小程序，服务多家中东与东南亚银行数字化转型</div></div>
      </div>
      <div class="ind-card" style="--ind-color:linear-gradient(135deg,#0891b2,#06b6d4);--ind-grad:linear-gradient(135deg,rgba(6,182,212,0.06),transparent);--ind-shadow:rgba(6,182,212,0.28);">
        <div class="ind-icon">📡</div>
        <div><div class="ind-name">通信 · 电信运营商</div><div class="ind-desc">运营商 Super App、5G 服务平台、流量运营系统，深度服务华为电信生态</div></div>
      </div>
      <div class="ind-card" style="--ind-color:linear-gradient(135deg,#7c3aed,#a78bfa);--ind-grad:linear-gradient(135deg,rgba(124,58,237,0.06),transparent);--ind-shadow:rgba(124,58,237,0.28);">
        <div class="ind-icon">🏛️</div>
        <div><div class="ind-name">政务 · 智慧城市</div><div class="ind-desc">政务一站式 App、数字市民服务、跨部门数据打通，覆盖中东多国政府项目</div></div>
      </div>
      <div class="ind-card" style="--ind-color:linear-gradient(135deg,#d97706,#f59e0b);--ind-grad:linear-gradient(135deg,rgba(217,119,6,0.06),transparent);--ind-shadow:rgba(217,119,6,0.28);">
        <div class="ind-icon">🏭</div>
        <div><div class="ind-name">制造 · 工业互联</div><div class="ind-desc">工厂数字化管理、设备 IoT 接入、供应链可视化，与华为工业互联生态深度集成</div></div>
      </div>
      <div class="ind-card" style="--ind-color:linear-gradient(135deg,#059669,#10b981);--ind-grad:linear-gradient(135deg,rgba(5,150,105,0.06),transparent);--ind-shadow:rgba(5,150,105,0.28);">
        <div class="ind-icon">🛒</div>
        <div><div class="ind-name">零售 · 电商</div><div class="ind-desc">购物小程序、会员体系、精准营销推送，助力零售品牌在东南亚快速布局</div></div>
      </div>
      <div class="ind-card" style="--ind-color:linear-gradient(135deg,#dc2626,#f87171);--ind-grad:linear-gradient(135deg,rgba(220,38,38,0.06),transparent);--ind-shadow:rgba(220,38,38,0.25);">
        <div class="ind-icon">🏥</div>
        <div><div class="ind-name">医疗 · 健康</div><div class="ind-desc">医院 App、问诊预约、健康管理平台，支持 HIPAA 合规与多语言本地化部署</div></div>
      </div>
      <div class="ind-card" style="--ind-color:linear-gradient(135deg,#0f766e,#14b8a6);--ind-grad:linear-gradient(135deg,rgba(15,118,110,0.06),transparent);--ind-shadow:rgba(15,118,110,0.25);">
        <div class="ind-icon">🎓</div>
        <div><div class="ind-name">教育 · 培训</div><div class="ind-desc">在线课堂、学习管理系统、证书认证平台，助力华为 ICT 人才生态建设</div></div>
      </div>
      <div class="ind-card" style="--ind-color:linear-gradient(135deg,#7e22ce,#c084fc);--ind-grad:linear-gradient(135deg,rgba(126,34,206,0.06),transparent);--ind-shadow:rgba(126,34,206,0.25);">
        <div class="ind-icon">✈️</div>
        <div><div class="ind-name">交通 · 出行</div><div class="ind-desc">出行聚合 Super App、票务预订、实时导航，覆盖公共交通数字化整合场景</div></div>
      </div>
    </div>
  </div>

  <!-- 核心客户 -->
  <div class="sec reveal">
    <div class="sec-header">
      <div class="sec-label-wrap">
        <div class="sec-eyebrow">Clients</div>
        <div class="sec-title">核心客户</div>
      </div>
    </div>
    <div class="marquee-wrap">
      <div class="marquee-track" id="marqueeTrack">
        <div class="m-logo"><img src="/images/company/s6_22e78654.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_a2497258.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_28d4e956.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_839027b5.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_00ad46fd.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_0a60b82f.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_18263803.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_1d4998c3.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_23b2e380.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_2578a6ac.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_2a34c9e2.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_345b0bdd.jpg" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_36471023.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_38e9bca5.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_44606360.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_46616aa6.jpg" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_54078a3c.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_5d5be82b.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_63a3b14a.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_650ccbef.png" alt="客户"></div>
        <!-- 无缝循环 -->
        <div class="m-logo"><img src="/images/company/s6_22e78654.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_a2497258.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_28d4e956.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_839027b5.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_00ad46fd.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_0a60b82f.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_18263803.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_1d4998c3.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_23b2e380.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_2578a6ac.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_2a34c9e2.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_345b0bdd.jpg" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_36471023.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_38e9bca5.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_44606360.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_46616aa6.jpg" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_54078a3c.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_5d5be82b.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_63a3b14a.png" alt="客户"></div>
        <div class="m-logo"><img src="/images/company/s6_650ccbef.png" alt="客户"></div>
      </div>
    </div>
  </div>

  <!-- 华为战略合作 -->
  <div class="sec reveal">
    <div class="sec-header">
      <div class="sec-label-wrap">
        <div class="sec-eyebrow">Huawei Partnership</div>
        <div class="sec-title">华为战略合作</div>
      </div>
    </div>
    <div class="hw-grid">
      <div class="hw-intro">
        <div class="hw-badge">🤝 Huawei Premier Partner · 18 Years</div>
        <div class="hw-intro-title">深度战略合作，全价值链覆盖</div>
        <div class="hw-intro-text">
          中软国际是华为最重要的战略合作伙伴之一，合作始于 2006 年，涵盖软件开发、IT 运维、海外交付、数字化转型等全价值链领域。<br><br>
          累计合作合同额突破 <span class="hw-num">98</span> 亿元，覆盖鸿蒙生态、云计算、AI 应用、Super App 等前沿领域，是华为全球化战略的核心 IT 合作伙伴。
        </div>
      </div>
      <div class="chart-card">
        <div class="chart-title">📈 华为合作合同额增长趋势（亿元）</div>
        <div class="bar-chart" id="barChart">
          <div class="bar-col"><div class="bar-val">5.72</div><div class="bar-area"><div class="bar-body" data-h="10"></div></div><div class="bar-year">2015</div></div>
          <div class="bar-col"><div class="bar-val">12.48</div><div class="bar-area"><div class="bar-body" data-h="22"></div></div><div class="bar-year">2017</div></div>
          <div class="bar-col"><div class="bar-val">28.63</div><div class="bar-area"><div class="bar-body" data-h="40"></div></div><div class="bar-year">2019</div></div>
          <div class="bar-col"><div class="bar-val">56.31</div><div class="bar-area"><div class="bar-body" data-h="60"></div></div><div class="bar-year">2021</div></div>
          <div class="bar-col"><div class="bar-val">81.24</div><div class="bar-area"><div class="bar-body" data-h="80"></div></div><div class="bar-year">2023</div></div>
          <div class="bar-col"><div class="bar-val">98.77</div><div class="bar-area"><div class="bar-body" data-h="100"></div></div><div class="bar-year">2024</div></div>
        </div>
      </div>
    </div>
  </div>

  <!-- 行业荣誉 -->
  <div class="sec reveal">
    <div class="sec-header">
      <div class="sec-label-wrap">
        <div class="sec-eyebrow">Awards & Certifications</div>
        <div class="sec-title">行业荣誉</div>
      </div>
    </div>
    <div class="award-grid-v4 stagger">
      <div class="a-card"><img class="a-img" src="/images/company/s8_a2ed0028.png" alt="荣誉"><div class="a-title">开源大模型+ 软件创新应用典型案例</div></div>
      <div class="a-card"><img class="a-img" src="/images/company/s8_e5fc62b9.png" alt="荣誉"><div class="a-title">软件行业典型示范案例</div></div>
      <div class="a-card"><img class="a-img" src="/images/company/s8_3d1e9016.png" alt="荣誉"><div class="a-title">软件行业数字化转型示范案例</div></div>
      <div class="a-card"><img class="a-img" src="/images/company/s8_a2d25b85.png" alt="荣誉"><div class="a-title">数字经济标杆企业</div></div>
      <div class="a-card"><img class="a-img" src="/images/company/s8_32714726.png" alt="荣誉"><div class="a-title">2024 年产业数字化创新案例</div></div>
      <div class="a-card"><img class="a-img" src="/images/company/s8_50df6042.png" alt="荣誉"><div class="a-title">中国软件产业典型产品</div></div>
      <div class="a-card"><img class="a-img" src="/images/company/s8_6c3400f9.jpg" alt="荣誉"><div class="a-title">软件行业数字化转型示范案例</div></div>
      <div class="a-card"><img class="a-img" src="/images/company/s8_e1534be7.jpg" alt="荣誉"><div class="a-title">软件行业典型示范案例</div></div>
      <div class="a-card"><img class="a-img" src="/images/company/s8_92c2179c.jpg" alt="荣誉"><div class="a-title">软件行业人工智能领军企业</div></div>
      <div class="a-card"><img class="a-img" src="/images/company/s8_f8c74e34.png" alt="荣誉"><div class="a-title">OpenHarmony 杰出贡献单位</div></div>
    </div>
  </div>

  <!-- 华为生态伙伴荣誉 -->
  <div class="sec reveal">
    <div class="sec-header">
      <div class="sec-label-wrap">
        <div class="sec-eyebrow">Huawei Ecosystem Honors</div>
        <div class="sec-title">华为生态伙伴荣誉</div>
      </div>
    </div>
    <div class="award-grid-v4 stagger">
      <div class="a-card"><img class="a-img" src="/images/company/s9_5597951a.jpg" alt="华为"><div class="a-title">华为金牌合作伙伴</div></div>
      <div class="a-card"><img class="a-img" src="/images/company/s9_046d2e73.png" alt="华为"><div class="a-title">云服务最佳解决方案</div></div>
      <div class="a-card"><img class="a-img" src="/images/company/s9_cb2ded80.jpg" alt="华为"><div class="a-title">全球交付卓越奖</div></div>
      <div class="a-card"><img class="a-img" src="/images/company/s9_81f5121a.jpg" alt="华为"><div class="a-title">数字化转型最佳实践</div></div>
      <div class="a-card"><img class="a-img" src="/images/company/s9_a4f15015.png" alt="华为"><div class="a-title">鸿蒙生态优秀开发者</div></div>
      <div class="a-card"><img class="a-img" src="/images/company/s9_a2e9dfba.png" alt="华为"><div class="a-title">海外拓展优秀伙伴</div></div>
      <div class="a-card"><img class="a-img" src="/images/company/s9_6ba668fc.png" alt="华为"><div class="a-title">2024 年度最佳战略伙伴</div></div>
      <div class="a-card"><img class="a-img" src="/images/company/s9_d5e137d5.jpg" alt="华为"><div class="a-title">优秀人才培养伙伴</div></div>
      <div class="a-card"><img class="a-img" src="/images/company/s9_e6a60a85.jpg" alt="华为"><div class="a-title">ICT 生态杰出贡献奖</div></div>
    </div>
  </div>

  <!-- 质量认证体系 -->
  <div class="sec reveal">
    <div class="sec-header">
      <div class="sec-label-wrap">
        <div class="sec-eyebrow">Credentials</div>
        <div class="sec-title">质量认证体系</div>
      </div>
    </div>
    <div class="cert-grid stagger">
      <div class="cert-card"><img src="/images/certs/iso9001-cert.jpeg" alt="ISO 9001"><div class="cert-label">ISO 9001:2015 · 质量管理体系</div></div>
      <div class="cert-card"><img src="/images/certs/iso14001-cert.jpeg" alt="ISO 14001"><div class="cert-label">ISO 14001:2015 · 环境管理体系</div></div>
      <div class="cert-card"><img src="/images/certs/iso45001-cert.jpeg" alt="ISO 45001"><div class="cert-label">ISO 45001:2018 · 职业健康安全管理体系</div></div>
      <div class="cert-card"><img src="/images/certs/cmmi5-cert.jpeg" alt="CMMI 5"><div class="cert-label">CMMI Maturity Level 5 · 软件能力成熟度</div></div>
      <div class="cert-card"><img src="/images/certs/sdca-delivery-cert.jpeg" alt="SDCA"><div class="cert-label">SDCA 软件服务商交付能力证书 · 一级</div></div>
      <div class="cert-card"><img src="/images/certs/enterprise-credit-3a.png" alt="企业信用3A"><div class="cert-label">企业信用等级证书 · 3A 级</div></div>
      <div class="cert-card"><img src="/images/certs/cloud-mgmt-cert.jpeg" alt="云管理"><div class="cert-label">云管理服务能力评估证书 · 卓越级</div></div>
      <div class="cert-card"><img src="/images/certs/gartner-top100.png" alt="Gartner"><div class="cert-label">Gartner 全球 IT 服务市场份额 TOP 100</div></div>
      <div class="cert-card"><img src="/images/certs/china-it-top100.png" alt="中国软件百强"><div class="cert-label">2020 软件和信息技术服务竞争力百强企业</div></div>
    </div>
  </div>

</div>

<footer class="au-footer">
  <span class="footer-l">中软国际 · <span>ChinaSofti International</span></span>
  <span class="footer-r">chinasofti-capability.vercel.app · © 2026</span>
</footer>

</div>
</template>

<style>
.au-page {
  font-family: 'PingFang SC','Microsoft YaHei','Segoe UI',sans-serif;
  background: #f0f4ff;
  color: #0f172a;
  overflow-x: hidden;
  min-height: 100vh;
}

:root {
  color-scheme: light;
  --blue: #1d4ed8; --blue-l: #3b82f6; --blue-pale: #eff6ff;
  --purple: #7c3aed; --cyan: #06b6d4; --indigo: #4f46e5;
  --text1: #0f172a; --text2: #334155; --text3: #94a3b8;
  --white: #ffffff; --bg: #f0f4ff;
  --card-bg: rgba(255,255,255,0.92);
  --shadow: 0 4px 32px rgba(29,78,216,0.10);
  --shadow-lg: 0 20px 60px rgba(29,78,216,0.18);
  --radius: 18px;
}

/* MESH BG */
.mesh-bg {
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
  background: linear-gradient(145deg, #e0e7ff 0%, #f0f4ff 35%, #ede9fe 65%, #dbeafe 100%);
}
.mesh-bg::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 70% 60% at 15% 15%, rgba(99,102,241,0.13), transparent 60%),
    radial-gradient(ellipse 55% 65% at 85% 75%, rgba(59,130,246,0.11), transparent 60%),
    radial-gradient(ellipse 45% 45% at 60% 35%, rgba(139,92,246,0.09), transparent 50%);
  animation: meshMove 14s ease-in-out infinite alternate;
}
@keyframes meshMove { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(25px,18px) scale(1.05); } }

/* NAV */
.au-nav {
  position: sticky; top: 0; z-index: 300;
  display: flex; justify-content: space-between; align-items: center;
  padding: 0 72px; height: 68px;
  background: rgba(255,255,255,0.88);
  backdrop-filter: blur(24px) saturate(200%);
  -webkit-backdrop-filter: blur(24px) saturate(200%);
  box-shadow: 0 1px 0 rgba(0,0,0,0.05), 0 2px 20px rgba(29,78,216,0.07);
}
.nav-logo { display: flex; align-items: center; gap: 12px; font-weight: 800; font-size: 1.05rem; color: var(--text1); letter-spacing: -0.01em; }
.logo-chip {
  background: linear-gradient(135deg, var(--blue), var(--purple));
  color: #fff; padding: 5px 11px; border-radius: 8px; font-size: 0.68rem; font-weight: 900; letter-spacing: 0.08em;
  box-shadow: 0 4px 12px rgba(29,78,216,0.35);
}
.nav-links { display: flex; gap: 36px; }
.nav-links a { color: var(--text2); text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color .2s; position: relative; }
.nav-links a::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: var(--blue); border-radius: 2px; transition: width .25s; }
.nav-links a:hover, .nav-links a.active { color: var(--blue); }
.nav-links a:hover::after, .nav-links a.active::after { width: 100%; }
.nav-cta {
  background: linear-gradient(135deg, var(--blue), var(--indigo));
  color: #fff; padding: 9px 22px; border-radius: 9px; font-size: 0.82rem; font-weight: 700;
  cursor: pointer; border: none; transition: all .25s;
  box-shadow: 0 4px 14px rgba(29,78,216,0.3);
}
.nav-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(29,78,216,0.4); }

/* HERO */
.hero {
  position: relative; z-index: 1;
  background: linear-gradient(140deg, #08091a 0%, #0f0c2e 30%, #1a1060 55%, #0c2d6e 78%, #063a5a 100%);
  padding: 110px 72px 90px; overflow: hidden; min-height: 520px;
}
#hero-canvas { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.6; }
.hero::before {
  content: ''; position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px);
  background-size: 64px 64px;
  animation: gridDrift 25s linear infinite;
}
@keyframes gridDrift { 0% { transform: translateY(0); } 100% { transform: translateY(64px); } }
.hero-orb { position: absolute; border-radius: 50%; filter: blur(90px); pointer-events: none; }
.orb-a { width: 560px; height: 560px; background: rgba(99,102,241,0.22); top: -180px; right: -80px; animation: orbF 9s ease-in-out infinite alternate; }
.orb-b { width: 380px; height: 380px; background: rgba(6,182,212,0.16); bottom: -120px; left: 8%; animation: orbF 11s ease-in-out infinite alternate-reverse; }
.orb-c { width: 280px; height: 280px; background: rgba(139,92,246,0.2); top: 25%; left: 52%; animation: orbF 7s ease-in-out infinite alternate; }
@keyframes orbF { 0% { transform: translate(0,0); } 100% { transform: translate(35px,25px); } }
.hero-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 2; }
.hero-pill {
  display: inline-flex; align-items: center; gap: 9px;
  background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.14);
  border-radius: 999px; padding: 8px 20px; margin-bottom: 38px;
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; color: rgba(255,255,255,0.7); text-transform: uppercase;
  backdrop-filter: blur(12px);
}
.pill-dot { width: 8px; height: 8px; border-radius: 50%; background: #38bdf8; box-shadow: 0 0 10px #38bdf8; animation: pulseDot 2s ease infinite; }
@keyframes pulseDot { 0%,100% { box-shadow: 0 0 4px #38bdf8; } 50% { box-shadow: 0 0 14px #38bdf8, 0 0 28px rgba(56,189,248,0.4); } }
.hero h1 { font-size: clamp(2.8rem,5.5vw,4.8rem); font-weight: 900; line-height: 1.04; letter-spacing: -0.03em; color: #fff; margin-bottom: 22px; }
.hero h1 .shine {
  background: linear-gradient(90deg, #818cf8, #67e8f9, #a78bfa, #38bdf8, #818cf8);
  background-size: 400%;
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  animation: shineAnim 6s linear infinite;
}
@keyframes shineAnim { 0% { background-position: 0%; } 100% { background-position: 400%; } }
.hero-sub { font-size: 1.1rem; color: rgba(255,255,255,0.55); line-height: 1.8; max-width: 580px; margin-bottom: 16px; min-height: 2.2em; }
.cursor { display: inline-block; width: 2px; height: 1.1em; background: #38bdf8; margin-left: 2px; vertical-align: text-bottom; animation: blink .75s step-end infinite; }
@keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
.hero-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 32px; }
.h-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
  border-radius: 10px; padding: 10px 18px; font-size: 0.85rem; color: rgba(255,255,255,0.82);
  backdrop-filter: blur(10px); transition: all .25s; cursor: default;
}
.h-badge:hover { background: rgba(255,255,255,0.14); border-color: rgba(99,102,241,0.5); transform: translateY(-3px); box-shadow: 0 8px 24px rgba(99,102,241,0.2); }
.h-badge-icon { font-size: 1.1rem; }
.scroll-hint {
  position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  color: rgba(255,255,255,0.25); font-size: 0.7rem; letter-spacing: 0.12em;
  animation: fadeInHint 3s ease 2s both;
}
@keyframes fadeInHint { from { opacity: 0; } to { opacity: 1; } }
.scroll-chevron {
  width: 24px; height: 24px; border-right: 2px solid rgba(255,255,255,0.25);
  border-bottom: 2px solid rgba(255,255,255,0.25); transform: rotate(45deg);
  animation: chevBounce 1.6s ease-in-out infinite;
}
@keyframes chevBounce { 0%,100% { transform: rotate(45deg) translate(-4px,-4px); opacity: 0.2; } 50% { transform: rotate(45deg) translate(4px,4px); opacity: 0.8; } }

/* CAPABILITY STRIP */
.cap-strip {
  position: relative; z-index: 1;
  background: linear-gradient(135deg, var(--blue), var(--indigo), var(--purple));
  padding: 22px 72px; display: flex; justify-content: center; align-items: center; gap: 0;
  flex-wrap: wrap; overflow: hidden;
}
.cap-strip::before {
  content: ''; position: absolute; inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.cap-item { position: relative; z-index: 1; display: flex; align-items: center; gap: 10px; padding: 8px 36px; color: rgba(255,255,255,0.9); font-size: 0.9rem; font-weight: 600; white-space: nowrap; border-right: 1px solid rgba(255,255,255,0.15); }
.cap-item:last-child { border-right: none; }
.cap-icon { font-size: 1.2rem; }

/* BODY */
.page-body { position: relative; z-index: 1; max-width: 1240px; margin: 0 auto; padding: 0 72px 100px; }
.sec { padding: 80px 0; border-bottom: 1px solid rgba(29,78,216,0.07); }
.sec:last-child { border-bottom: none; }
.sec-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 44px; }
.sec-label-wrap { display: flex; flex-direction: column; gap: 7px; }
.sec-eyebrow { font-size: 0.7rem; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; color: var(--blue); }
.sec-title { font-size: 1.9rem; font-weight: 800; color: var(--text1); letter-spacing: -0.025em; line-height: 1.1; }

/* STATS */
.stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; }
.stat-card {
  background: var(--card-bg); border-radius: var(--radius); padding: 32px 26px; text-align: center;
  box-shadow: var(--shadow); border: 1px solid rgba(29,78,216,0.07);
  transition: box-shadow .3s; cursor: default; position: relative; overflow: hidden;
  transform-style: preserve-3d; will-change: transform;
  backdrop-filter: blur(8px);
}
.stat-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--blue), var(--purple), var(--cyan)); transform: scaleX(0); transform-origin: left; transition: transform .4s; }
.stat-card::after { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.06), transparent 70%); opacity: 0; transition: opacity .3s; }
.stat-card:hover { box-shadow: var(--shadow-lg); }
.stat-card:hover::before { transform: scaleX(1); }
.stat-card:hover::after { opacity: 1; }
.stat-val { font-size: 3rem; font-weight: 900; color: var(--text1); line-height: 1; letter-spacing: -0.04em; position: relative; }
.stat-val .u { font-size: 1.2rem; font-weight: 700; color: var(--blue); }
.stat-lab { font-size: 0.82rem; color: var(--text3); margin-top: 12px; font-weight: 500; }

/* TIMELINE */
.timeline { position: relative; padding-left: 4px; }
.timeline::before { content: ''; position: absolute; left: 96px; top: 20px; bottom: 20px; width: 2px; background: linear-gradient(to bottom, var(--blue), rgba(99,102,241,0.08)); border-radius: 2px; }
.tl-item { display: flex; gap: 0; margin-bottom: 22px; align-items: flex-start; }
.tl-year { min-width: 84px; text-align: right; font-size: 0.9rem; font-weight: 800; color: var(--blue); padding-top: 14px; letter-spacing: -0.01em; }
.tl-connector { width: 40px; display: flex; justify-content: center; padding-top: 16px; flex-shrink: 0; position: relative; }
.tl-dot { width: 16px; height: 16px; border-radius: 50%; background: var(--white); border: 3px solid var(--blue); box-shadow: 0 0 0 4px rgba(29,78,216,0.08); transition: all .3s; flex-shrink: 0; position: relative; z-index: 2; }
.tl-item:hover .tl-dot { background: var(--blue); box-shadow: 0 0 0 6px rgba(29,78,216,0.12), 0 0 20px rgba(99,102,241,0.6); }
.tl-card { flex: 1; background: var(--card-bg); border: 1px solid rgba(29,78,216,0.07); border-radius: 12px; padding: 16px 24px; font-size: 0.95rem; color: var(--text2); line-height: 1.75; box-shadow: 0 2px 12px rgba(29,78,216,0.05); transition: all .3s; backdrop-filter: blur(6px); }
.tl-item:hover .tl-card { border-color: rgba(99,102,241,0.3); box-shadow: 0 8px 28px rgba(29,78,216,0.12); color: var(--text1); transform: translateX(4px); }
.tl-item.milestone .tl-year { color: var(--purple); font-size: 0.95rem; }
.tl-item.milestone .tl-dot { border-color: var(--purple); background: rgba(124,58,237,0.08); }
.tl-item.milestone .tl-card { border-left: 3px solid var(--purple); padding-left: 21px; }

/* TABS */
.tab-bar { display: flex; gap: 8px; margin-bottom: 28px; background: rgba(29,78,216,0.05); border-radius: 12px; padding: 6px; }
.tab-btn { flex: 1; padding: 11px 20px; border: none; border-radius: 9px; font-size: 0.9rem; font-weight: 600; color: var(--text3); background: transparent; cursor: pointer; transition: all .25s; }
.tab-btn.active { background: var(--white); color: var(--blue); box-shadow: 0 2px 10px rgba(29,78,216,0.12); }
.tab-panel { display: none; }
.tab-panel.active { display: grid; grid-template-columns: repeat(2,1fr); gap: 18px; }
.tab-panel.c3.active { grid-template-columns: repeat(3,1fr); }
.r-card { background: var(--card-bg); border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow); border: 1px solid rgba(29,78,216,0.07); transition: all .3s; backdrop-filter: blur(8px); }
.r-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-lg); }
.r-head { padding: 18px 24px; font-size: 1rem; font-weight: 700; background: linear-gradient(135deg, #1d4ed8, #4f46e5); color: #fff; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden; }
.r-head::after { content: ''; position: absolute; right: -20px; top: -20px; width: 80px; height: 80px; border-radius: 50%; background: rgba(255,255,255,0.07); }
.r-body { padding: 20px 24px; font-size: 0.95rem; color: var(--text2); line-height: 1.8; }

/* INDUSTRY */
.industry-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
.ind-card { background: var(--card-bg); border-radius: 16px; padding: 24px 20px; box-shadow: var(--shadow); border: 1px solid rgba(29,78,216,0.07); display: flex; flex-direction: column; align-items: flex-start; gap: 12px; transition: all .3s; cursor: default; backdrop-filter: blur(8px); position: relative; overflow: hidden; }
.ind-card::before { content: ''; position: absolute; inset: 0; background: var(--ind-grad, linear-gradient(135deg,rgba(29,78,216,0.04),transparent)); opacity: 0; transition: opacity .3s; border-radius: 16px; }
.ind-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-lg); }
.ind-card:hover::before { opacity: 1; }
.ind-icon { width: 48px; height: 48px; border-radius: 12px; background: var(--ind-color, var(--blue)); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; flex-shrink: 0; box-shadow: 0 6px 16px var(--ind-shadow, rgba(29,78,216,0.25)); }
.ind-name { font-size: 1rem; font-weight: 700; color: var(--text1); }
.ind-desc { font-size: 0.82rem; color: var(--text3); line-height: 1.55; }

/* MARQUEE */
.marquee-wrap { overflow: hidden; position: relative; padding: 8px 0; }
.marquee-wrap::before, .marquee-wrap::after { content: ''; position: absolute; top: 0; bottom: 0; width: 140px; z-index: 2; }
.marquee-wrap::before { left: 0; background: linear-gradient(to right, var(--bg), transparent); }
.marquee-wrap::after { right: 0; background: linear-gradient(to left, var(--bg), transparent); }
.marquee-track { display: flex; gap: 16px; width: max-content; animation: marqRun 30s linear infinite; }
.marquee-track:hover { animation-play-state: paused; }
@keyframes marqRun { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
.m-logo { background: var(--card-bg); border: 1px solid rgba(29,78,216,0.08); border-radius: 12px; width: 120px; height: 76px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; padding: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.04); transition: all .25s; backdrop-filter: blur(8px); }
.m-logo:hover { transform: scale(1.08); box-shadow: var(--shadow); }
.m-logo img { max-width: 100%; max-height: 52px; object-fit: contain; }

/* HUAWEI */
.hw-grid { display: grid; grid-template-columns: 1fr 1.65fr; gap: 36px; align-items: start; }
.hw-intro { background: var(--card-bg); border-radius: var(--radius); padding: 36px; box-shadow: var(--shadow); border: 1px solid rgba(29,78,216,0.07); backdrop-filter: blur(8px); }
.hw-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, var(--blue), var(--purple)); color: #fff; padding: 8px 18px; border-radius: 10px; font-size: 0.8rem; font-weight: 700; margin-bottom: 20px; box-shadow: 0 6px 18px rgba(29,78,216,0.35); }
.hw-intro-title { font-size: 1.25rem; font-weight: 800; color: var(--text1); margin-bottom: 14px; }
.hw-intro-text { font-size: 0.95rem; color: var(--text2); line-height: 1.85; }
.hw-num { display: inline-block; font-size: 2.2rem; font-weight: 900; background: linear-gradient(135deg, var(--blue), var(--purple)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.chart-card { background: var(--card-bg); border-radius: var(--radius); padding: 36px; box-shadow: var(--shadow); border: 1px solid rgba(29,78,216,0.07); backdrop-filter: blur(8px); }
.chart-title { font-size: 0.85rem; font-weight: 700; color: var(--text2); margin-bottom: 28px; letter-spacing: 0.04em; }
.bar-chart { display: flex; align-items: stretch; gap: 14px; height: 160px; }
.bar-col { flex: 1; display: flex; flex-direction: column; align-items: center; }
.bar-val { font-size: 0.72rem; font-weight: 800; color: var(--blue); white-space: nowrap; flex-shrink: 0; padding-bottom: 4px; }
.bar-area { flex: 1; display: flex; align-items: flex-end; width: 100%; }
.bar-body { width: 100%; border-radius: 8px 8px 0 0; height: 0%; background: linear-gradient(to top, var(--blue), #818cf8, #c4b5fd); transition: height .9s cubic-bezier(.16,1,.3,1); position: relative; overflow: hidden; }
.bar-body::after { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 45%; background: linear-gradient(to bottom, rgba(255,255,255,0.22), transparent); }
.bar-year { font-size: 0.72rem; color: var(--text3); font-weight: 600; flex-shrink: 0; padding-top: 5px; }

/* AWARDS */
.award-grid-v4 { display: grid; grid-template-columns: repeat(5,1fr); gap: 18px; }
.a-card { background: var(--card-bg); border-radius: var(--radius); padding: 22px 16px; text-align: center; box-shadow: var(--shadow); border: 1px solid rgba(29,78,216,0.07); transition: box-shadow .3s; position: relative; overflow: hidden; cursor: default; transform-style: preserve-3d; will-change: transform; backdrop-filter: blur(8px); }
.a-card::before { content: ''; position: absolute; inset: -1px; border-radius: var(--radius); background: linear-gradient(135deg, rgba(99,102,241,0), rgba(139,92,246,0)); transition: all .3s; }
.a-card:hover { box-shadow: 0 24px 48px rgba(29,78,216,0.18); }
.a-card:hover::before { background: linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1)); }
.a-img { width: 100%; max-height: 110px; object-fit: contain; margin-bottom: 12px; position: relative; z-index: 1; }
.a-title { font-size: 0.78rem; color: var(--text2); line-height: 1.55; position: relative; z-index: 1; font-weight: 600; }

/* REVEAL ANIMATIONS */
.reveal { opacity: 0; transform: translateY(32px); transition: opacity .7s ease, transform .7s ease; }
.reveal.in { opacity: 1; transform: none; }
.stagger .stat-card, .stagger .r-card, .stagger .a-card, .stagger .tl-item { opacity: 0; transform: translateY(24px); transition: opacity .6s ease, transform .6s ease; }
.stagger.in .stat-card:nth-child(1), .stagger.in .r-card:nth-child(1), .stagger.in .a-card:nth-child(1), .stagger.in .tl-item:nth-child(1) { opacity: 1; transform: none; transition-delay: .05s; }
.stagger.in .stat-card:nth-child(2), .stagger.in .r-card:nth-child(2), .stagger.in .a-card:nth-child(2), .stagger.in .tl-item:nth-child(2) { opacity: 1; transform: none; transition-delay: .10s; }
.stagger.in .stat-card:nth-child(3), .stagger.in .r-card:nth-child(3), .stagger.in .a-card:nth-child(3), .stagger.in .tl-item:nth-child(3) { opacity: 1; transform: none; transition-delay: .15s; }
.stagger.in .stat-card:nth-child(4), .stagger.in .r-card:nth-child(4), .stagger.in .a-card:nth-child(4), .stagger.in .tl-item:nth-child(4) { opacity: 1; transform: none; transition-delay: .20s; }
.stagger.in .stat-card:nth-child(5), .stagger.in .r-card:nth-child(5), .stagger.in .a-card:nth-child(5), .stagger.in .tl-item:nth-child(5) { opacity: 1; transform: none; transition-delay: .25s; }
.stagger.in .stat-card:nth-child(6), .stagger.in .r-card:nth-child(6), .stagger.in .a-card:nth-child(6), .stagger.in .tl-item:nth-child(6) { opacity: 1; transform: none; transition-delay: .30s; }
.stagger.in .stat-card:nth-child(7), .stagger.in .a-card:nth-child(7), .stagger.in .tl-item:nth-child(7) { opacity: 1; transform: none; transition-delay: .35s; }
.stagger.in .stat-card:nth-child(8), .stagger.in .a-card:nth-child(8), .stagger.in .tl-item:nth-child(8) { opacity: 1; transform: none; transition-delay: .40s; }
.stagger.in .a-card:nth-child(9) { opacity: 1; transform: none; transition-delay: .45s; }
.stagger.in .a-card:nth-child(10) { opacity: 1; transform: none; transition-delay: .50s; }

/* FOOTER */
.au-footer {
  position: relative; z-index: 1;
  background: linear-gradient(135deg, #08091a, #0f0c2e);
  padding: 44px 72px; display: flex; justify-content: space-between; align-items: center;
}
.footer-l { color: rgba(255,255,255,0.9); font-weight: 700; font-size: 0.95rem; }
.footer-l span { background: linear-gradient(90deg, #818cf8, #67e8f9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.footer-r { color: rgba(255,255,255,0.3); font-size: 0.8rem; }

/* CERT GRID */
.cert-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
.cert-card { background: var(--card-bg); border-radius: 14px; overflow: hidden; box-shadow: var(--shadow); border: 1px solid rgba(29,78,216,0.07); transition: all .3s; backdrop-filter: blur(8px); cursor: default; }
.cert-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.cert-card img { width: 100%; height: 200px; object-fit: contain; display: block; background: #f8faff; padding: 16px; box-sizing: border-box; }
.cert-label { padding: 12px 16px; font-size: 0.8rem; font-weight: 600; color: var(--text2); text-align: center; line-height: 1.5; border-top: 1px solid rgba(29,78,216,0.07); }

/* TABLET */
@media (max-width: 1024px) {
  .au-nav { padding: 0 32px; }
  .page-body { padding: 0 32px 80px; }
  .hero { padding: 90px 32px 70px; }
  .cap-strip { padding: 18px 32px; }
  .au-footer { padding: 36px 32px; }
  .stats-grid { grid-template-columns: repeat(2,1fr); }
  .industry-grid { grid-template-columns: repeat(2,1fr); }
  .award-grid-v4 { grid-template-columns: repeat(3,1fr); }
  .hw-grid { grid-template-columns: 1fr; }
  .cert-grid { grid-template-columns: repeat(3,1fr); }
}

/* MOBILE */
@media (max-width: 768px) {
  .au-nav { padding: 0 16px; height: 58px; }
  .nav-logo { font-size: 0.88rem; gap: 8px; }
  .logo-chip { padding: 4px 8px; font-size: 0.6rem; }
  .nav-links { gap: 16px; }
  .nav-links a { font-size: 0.78rem; }
  .nav-cta { padding: 7px 12px; font-size: 0.72rem; }

  .hero { padding: 72px 16px 56px; min-height: auto; }
  .hero-pill { font-size: 0.62rem; padding: 6px 14px; margin-bottom: 20px; }
  .hero h1 { font-size: 2rem; margin-bottom: 16px; }
  .hero-sub { font-size: 0.88rem; max-width: 100%; }
  .hero-badges { gap: 8px; margin-top: 20px; }
  .h-badge { font-size: 0.72rem; padding: 7px 11px; }
  .scroll-hint { display: none; }

  .cap-strip { padding: 12px 16px; gap: 0; }
  .cap-item { padding: 6px 8px; font-size: 0.72rem; border-right: none; width: 50%; justify-content: center; white-space: normal; text-align: center; overflow: hidden; line-height: 1.3; }
  .cap-item:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.15); }
  .cap-icon { font-size: 1rem; flex-shrink: 0; }

  .page-body { padding: 0 16px 56px; }
  .sec { padding: 40px 0; }
  .sec-header { margin-bottom: 28px; }
  .sec-eyebrow { font-size: 0.65rem; }
  .sec-title { font-size: 1.3rem; }

  .stats-grid { grid-template-columns: repeat(2,1fr); gap: 10px; }
  .stat-card { padding: 20px 14px; border-radius: 14px; }
  .stat-val { font-size: 2rem; }
  .stat-val .u { font-size: 1rem; }
  .stat-lab { font-size: 0.75rem; margin-top: 8px; }

  .timeline::before { left: 62px; }
  .tl-year { min-width: 54px; font-size: 0.78rem; padding-top: 12px; }
  .tl-connector { width: 30px; padding-top: 14px; }
  .tl-dot { width: 13px; height: 13px; }
  .tl-card { font-size: 0.85rem; padding: 12px 14px; border-radius: 10px; }
  .tl-item { margin-bottom: 14px; }

  .tab-bar { flex-direction: column; gap: 6px; }
  .tab-btn { font-size: 0.85rem; padding: 9px 16px; }
  .tab-panel.active { grid-template-columns: 1fr; gap: 12px; }
  .tab-panel.c3.active { grid-template-columns: 1fr; }
  .r-head { font-size: 0.92rem; padding: 14px 18px; }
  .r-body { font-size: 0.88rem; padding: 16px 18px; }

  .industry-grid { grid-template-columns: repeat(2,1fr); gap: 10px; }
  .ind-card { padding: 16px 12px; gap: 10px; border-radius: 12px; }
  .ind-icon { width: 40px; height: 40px; font-size: 1.2rem; border-radius: 10px; }
  .ind-name { font-size: 0.88rem; }
  .ind-desc { font-size: 0.75rem; }

  .m-logo { width: 88px; height: 60px; }

  .hw-grid { grid-template-columns: 1fr; gap: 16px; }
  .hw-intro { padding: 24px 20px; }
  .hw-intro-title { font-size: 1.05rem; }
  .hw-intro-text { font-size: 0.88rem; }
  .chart-card { padding: 24px 16px; }
  .bar-chart { height: 120px; gap: 8px; }
  .bar-val { font-size: 0.65rem; }
  .bar-year { font-size: 0.65rem; }

  .award-grid-v4 { grid-template-columns: repeat(2,1fr); gap: 10px; }
  .a-card { padding: 16px 10px; border-radius: 14px; }
  .a-img { max-height: 80px; }
  .a-title { font-size: 0.72rem; }

  .cert-grid { grid-template-columns: repeat(2,1fr); gap: 10px; }
  .cert-card img { height: 150px; padding: 12px; }
  .cert-label { font-size: 0.72rem; padding: 10px 12px; }

  .au-footer { padding: 24px 16px; flex-direction: column; gap: 8px; text-align: center; }
  .footer-l { font-size: 0.88rem; }
  .footer-r { font-size: 0.72rem; }
}

/* SMALL PHONE — hide nav links, show hamburger */
@media (max-width: 600px) {
  .nav-links { display: none; }
  .au-nav { justify-content: space-between; }
  .nav-hamburger { display: flex; }
}
/* ── Force light mode for Aurora page in dark OS/browser ── */
html.dark .stat-card,
html.dark .a-card,
html.dark .r-card,
html.dark .ind-card,
html.dark .chart-card,
html.dark .hw-intro,
html.dark .tl-card,
html.dark .cert-card,
html.dark .m-logo {
  background: rgba(255,255,255,0.92) !important;
  border-color: rgba(29,78,216,0.07) !important;
}
html.dark .stat-val,
html.dark .ind-name,
html.dark .sec-title,
html.dark .hw-intro-title,
html.dark .r-head {
  color: #0f172a !important;
}
html.dark .stat-lab,
html.dark .ind-desc,
html.dark .r-body,
html.dark .tl-card,
html.dark .hw-intro-text {
  color: #334155 !important;
}
</style>
