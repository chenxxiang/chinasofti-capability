<script setup>
import { onMounted } from 'vue'
import { feature, mesh } from 'topojson-client'
import worldData from 'world-atlas/countries-110m.json'

onMounted(() => {
  initMapTabs()
  initMapPins()
  initWorldMap()
  initChinaMap()
  initReveal()
  initHamburger()
})

function initMapTabs() {
  const tabs = document.querySelectorAll('.ov-map-tab')
  const panels = document.querySelectorAll('.ov-map-panel')
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'))
      panels.forEach(p => p.classList.remove('active'))
      tab.classList.add('active')
      const target = document.getElementById(tab.dataset.panel)
      if (target) target.classList.add('active')
    })
  })
}

function initMapPins() {
  document.querySelectorAll('.ov-map-pin').forEach(pin => {
    pin.addEventListener('click', () => {
      const target = document.getElementById(pin.dataset.target)
      if (!target) return
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      target.classList.add('ov-region-flash')
      setTimeout(() => target.classList.remove('ov-region-flash'), 1400)
    })
  })
}

function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) }
    })
  }, { threshold: 0.06 })
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
}

// ── Domestic city data ──────────────────────────────────────────────────────
const DEV1000_CITIES = [
  { name: '北京', lon: 116.4, lat: 39.9 },
  { name: '天津', lon: 117.2, lat: 39.1 },
  { name: '沈阳', lon: 123.4, lat: 41.8 },
  { name: '大连', lon: 121.6, lat: 38.9 },
  { name: '青岛', lon: 120.4, lat: 36.1 },
  { name: '济南', lon: 117.0, lat: 36.7 },
  { name: '上海', lon: 121.5, lat: 31.2 },
  { name: '苏州', lon: 120.6, lat: 31.3 },
  { name: '南京', lon: 118.8, lat: 32.1 },
  { name: '合肥', lon: 117.3, lat: 31.8 },
  { name: '杭州', lon: 120.2, lat: 30.3 },
  { name: '武汉', lon: 114.3, lat: 30.6 },
  { name: '西安', lon: 108.9, lat: 34.3 },
  { name: '成都', lon: 104.1, lat: 30.7 },
  { name: '重庆', lon: 106.5, lat: 29.6 },
  { name: '广州', lon: 113.3, lat: 23.1 },
  { name: '深圳', lon: 114.1, lat: 22.5 },
]

const OFFICE_CITIES = [
  { name: '哈尔滨',   lon: 126.6, lat: 45.8 },
  { name: '长春',     lon: 125.3, lat: 43.9 },
  { name: '沈抚新区', lon: 123.5, lat: 41.4 },
  { name: '太原',     lon: 112.5, lat: 37.9 },
  { name: '石家庄',   lon: 114.5, lat: 38.1 },
  { name: '唐山',     lon: 118.2, lat: 39.6 },
  { name: '包头',     lon: 110.0, lat: 40.7 },
  { name: '呼和浩特', lon: 111.7, lat: 40.8 },
  { name: '银川',     lon: 106.3, lat: 38.5 },
  { name: '兰州',     lon: 103.8, lat: 36.1 },
  { name: '天水',     lon: 105.7, lat: 34.6 },
  { name: '西宁',     lon: 101.8, lat: 36.6 },
  { name: '郑州',     lon: 113.6, lat: 34.7 },
  { name: '洛阳',     lon: 112.4, lat: 34.7 },
  { name: '南昌',     lon: 115.9, lat: 28.7 },
  { name: '长沙',     lon: 113.0, lat: 28.2 },
  { name: '衡阳',     lon: 112.6, lat: 26.9 },
  { name: '贵阳',     lon: 106.7, lat: 26.6 },
  { name: '桂林',     lon: 110.3, lat: 25.3 },
  { name: '昆明',     lon: 102.7, lat: 25.0 },
  { name: '厦门',     lon: 118.1, lat: 24.5 },
  { name: '福州',     lon: 119.3, lat: 26.1 },
  { name: '南平',     lon: 118.2, lat: 26.6 },
]

const JIEFANG_CITIES = [
  { name: '喀什',     lon: 75.9,  lat: 39.5 },
  { name: '乌鲁木齐', lon: 87.6,  lat: 43.8 },
  { name: '拉萨',     lon: 91.1,  lat: 29.7 },
  { name: '嘉兴',     lon: 120.8, lat: 30.7 },
  { name: '宁波',     lon: 121.6, lat: 29.9 },
  { name: '东莞',     lon: 113.8, lat: 23.0 },
  { name: '珠海',     lon: 113.6, lat: 22.3 },
  { name: '香港',     lon: 114.2, lat: 22.3 },
  { name: '海口',     lon: 110.3, lat: 20.0 },
]

function initWorldMap() {
  const canvas = document.getElementById('ov-world-canvas')
  if (!canvas) return

  function draw() {
    const dpr = window.devicePixelRatio || 1
    const cssW = canvas.parentElement.offsetWidth
    const cssH = Math.round(cssW * 0.43)

    canvas.width = cssW * dpr
    canvas.height = cssH * dpr
    canvas.style.width = cssW + 'px'
    canvas.style.height = cssH + 'px'

    const ctx = canvas.getContext('2d')
    ctx.scale(dpr, dpr)

    // lon 180°, lat 64° (-12S→52N, Russia mostly cropped), canvas 0.43 → correct ratio at 35°N
    const W0 = -20, W1 = 160, H0 = 52, H1 = -12
    function project([lon, lat]) {
      let l = lon
      if (l < W0) l += 360
      return [(l - W0) / (W1 - W0) * cssW, (H0 - lat) / (H0 - H1) * cssH]
    }

    const grad = ctx.createLinearGradient(0, 0, 0, cssH)
    grad.addColorStop(0, '#bdd8ec')
    grad.addColorStop(1, '#a8c8df')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, cssW, cssH)

    ctx.setLineDash([3, 6])
    ctx.strokeStyle = 'rgba(55,110,170,0.12)'
    ctx.lineWidth = 0.6
    ;[cssH / 3, cssH * 2 / 3].forEach(y => {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(cssW, y); ctx.stroke()
    })
    ;[cssW / 3, cssW * 2 / 3].forEach(x => {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, cssH); ctx.stroke()
    })
    ctx.setLineDash([])
    ctx.strokeStyle = 'rgba(55,110,170,0.2)'
    ctx.lineWidth = 0.7
    ctx.beginPath(); ctx.moveTo(0, cssH / 2); ctx.lineTo(cssW, cssH / 2); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(cssW / 2, 0); ctx.lineTo(cssW / 2, cssH); ctx.stroke()

    function applyRing(ring) {
      const [x0, y0] = project(ring[0])
      ctx.moveTo(x0, y0)
      let prevX = x0
      for (let i = 1; i < ring.length; i++) {
        const [x, y] = project(ring[i])
        if (Math.abs(x - prevX) > cssW / 2) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
        prevX = x
      }
      ctx.closePath()
    }
    function applyGeom(geom) {
      if (!geom) return
      if (geom.type === 'Polygon') geom.coordinates.forEach(applyRing)
      else if (geom.type === 'MultiPolygon') geom.coordinates.forEach(p => p.forEach(applyRing))
    }

    const land = feature(worldData, worldData.objects.land)
    ctx.fillStyle = '#6fa8d0'
    ctx.beginPath()
    if (land.type === 'Feature') applyGeom(land.geometry)
    else land.features?.forEach(f => applyGeom(f.geometry))
    ctx.fill('evenodd')

    ctx.strokeStyle = 'rgba(255,255,255,0.55)'
    ctx.lineWidth = 0.7
    ctx.beginPath()
    if (land.type === 'Feature') applyGeom(land.geometry)
    else land.features?.forEach(f => applyGeom(f.geometry))
    ctx.stroke()

    const borders = mesh(worldData, worldData.objects.countries, (a, b) => a !== b)
    const borderCoords = borders.type === 'MultiLineString' ? borders.coordinates
      : (borders.geometry?.coordinates ?? [])
    ctx.strokeStyle = 'rgba(255,255,255,0.3)'
    ctx.lineWidth = 0.4
    ctx.beginPath()
    borderCoords.forEach(line => {
      if (!line.length) return
      const [x0, y0] = project(line[0])
      ctx.moveTo(x0, y0)
      let prevX = x0
      for (let i = 1; i < line.length; i++) {
        const [x, y] = project(line[i])
        if (Math.abs(x - prevX) > cssW / 2) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
        prevX = x
      }
    })
    ctx.stroke()
  }

  draw()
  let timer
  window.addEventListener('resize', () => { clearTimeout(timer); timer = setTimeout(draw, 150) })
}

async function initChinaMap() {
  const canvas = document.getElementById('ov-china-canvas')
  if (!canvas) return

  let chinaData
  try {
    const res = await fetch('/data/china-provinces.json')
    chinaData = await res.json()
  } catch { return }

  const MIN_LON = 58, MAX_LON = 152, MIN_LAT = 17, MAX_LAT = 56

  let cssW = 0, cssH = 0, dpr = 1, bgCanvas = null, animId = null

  function project([lon, lat]) {
    return [
      (lon - MIN_LON) / (MAX_LON - MIN_LON) * cssW,
      (MAX_LAT - lat) / (MAX_LAT - MIN_LAT) * cssH,
    ]
  }

  function drawGeom(ctx, geom) {
    if (!geom) return
    const polys = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates
    polys.forEach(poly =>
      poly.forEach(ring => {
        const [x0, y0] = project(ring[0])
        ctx.moveTo(x0, y0)
        for (let i = 1; i < ring.length; i++) {
          const [x, y] = project(ring[i])
          ctx.lineTo(x, y)
        }
        ctx.closePath()
      })
    )
  }

  function renderBackground() {
    bgCanvas = document.createElement('canvas')
    bgCanvas.width  = cssW * dpr
    bgCanvas.height = cssH * dpr
    const bgCtx = bgCanvas.getContext('2d')
    bgCtx.scale(dpr, dpr)

    const grad = bgCtx.createLinearGradient(0, 0, 0, cssH)
    grad.addColorStop(0, '#bdd8ec')
    grad.addColorStop(1, '#a8c8df')
    bgCtx.fillStyle = grad
    bgCtx.fillRect(0, 0, cssW, cssH)

    bgCtx.fillStyle = '#6fa8d0'
    bgCtx.beginPath()
    chinaData.features.forEach(f => drawGeom(bgCtx, f.geometry))
    bgCtx.fill('evenodd')

    bgCtx.strokeStyle = 'rgba(255,255,255,0.45)'
    bgCtx.lineWidth = 0.6
    bgCtx.beginPath()
    chinaData.features.forEach(f => drawGeom(bgCtx, f.geometry))
    bgCtx.stroke()
  }

  const TIERS = [
    { cities: DEV1000_CITIES,  rgb: '239,68,68',  r: 5, pulse: true  },
    { cities: OFFICE_CITIES,   rgb: '59,130,246', r: 4, pulse: true  },
    { cities: JIEFANG_CITIES,  rgb: '245,158,11', r: 3, pulse: false },
  ]

  let frame = 0

  let labelSlots = []
  function computeLabels() {
    const tmpCtx = document.createElement('canvas').getContext('2d')
    tmpCtx.font = '500 9px -apple-system,BlinkMacSystemFont,sans-serif'
    const placed = []
    labelSlots = []
    TIERS.forEach(({ cities, r }) => {
      cities.forEach(city => {
        const [cx, cy] = project([city.lon, city.lat])
        const fw = tmpCtx.measureText(city.name).width
        const lx = cx - fw / 2 - 1, ly = cy + r + 4
        const lw = fw + 2, lh = 10
        const ok = !placed.some(([px, py, pw, ph]) =>
          lx < px + pw && lx + lw > px && ly < py + ph && ly + lh > py
        )
        if (ok) placed.push([lx, ly, lw, lh])
        labelSlots.push({ cx, cy, name: city.name, r, show: ok })
      })
    })
  }

  function tick(ctx) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.drawImage(bgCanvas, 0, 0, cssW, cssH)

    const t = frame / 60
    let si = 0

    TIERS.forEach(({ cities, rgb, r, pulse }) => {
      cities.forEach((city, i) => {
        const [cx, cy] = project([city.lon, city.lat])

        if (pulse) {
          const ph = (t * 0.5 + i * 0.17) % 1
          ctx.beginPath()
          ctx.arc(cx, cy, r + ph * r * 3.5, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(${rgb},${(1 - ph) * 0.55})`
          ctx.lineWidth = 1.5
          ctx.stroke()
        }

        ctx.beginPath()
        ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgb(${rgb})`
        ctx.fill()
        ctx.strokeStyle = 'rgba(255,255,255,0.65)'
        ctx.lineWidth = 1
        ctx.stroke()

        const slot = labelSlots[si++]
        if (slot?.show) {
          ctx.fillStyle = 'rgba(255,255,255,0.88)'
          ctx.font = '500 9px -apple-system,BlinkMacSystemFont,sans-serif'
          ctx.textAlign = 'center'
          ctx.textBaseline = 'top'
          ctx.fillText(city.name, cx, cy + r + 4)
        }
      })
    })

    frame++
    animId = requestAnimationFrame(() => tick(ctx))
  }

  function setup() {
    dpr  = window.devicePixelRatio || 1
    cssW = canvas.parentElement.offsetWidth
    cssH = Math.round(cssW * 0.52)

    canvas.width  = cssW * dpr
    canvas.height = cssH * dpr
    canvas.style.width  = cssW + 'px'
    canvas.style.height = cssH + 'px'

    renderBackground()
    computeLabels()

    if (animId) cancelAnimationFrame(animId)
    frame = 0
    const ctx = canvas.getContext('2d')
    tick(ctx)
  }

  // Panel is display:none at mount time — re-setup when tab is clicked
  document.querySelectorAll('[data-panel="map-domestic"]').forEach(tab => {
    tab.addEventListener('click', () => setTimeout(setup, 20))
  })

  let resizeTimer
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(setup, 150)
  })
}

function initHamburger() {
  const btn = document.getElementById('nav-hamburger-ov-en')
  const drawer = document.getElementById('nav-drawer-ov-en')
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
<div class="au-page ov-page">
<div class="mesh-bg"></div>

<!-- NAV -->
<nav class="au-nav">
  <div class="nav-logo">
    <span class="logo-chip">CSI</span>
    ChinaSofti · Capability
  </div>
  <div class="nav-links">
    <a href="/en/">Home</a>
    <a href="/en/miniapp-solution">Mini-App</a>
    <a href="/en/overseas/" class="active">Overseas</a>
    <a href="/en/business/cms/">Solutions</a>
  </div>
  <button class="nav-cta" onclick="window.location.href='/zh/overseas/'">中文</button>
  <button class="nav-hamburger" id="nav-hamburger-ov-en" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="nav-drawer" id="nav-drawer-ov-en">
  <a href="/en/">Home</a>
  <a href="/en/miniapp-solution">Mini-App</a>
  <a href="/en/overseas/">Overseas</a>
  <a href="/en/business/cms/">Solutions</a>
  <a href="/zh/overseas/" class="nav-drawer-lang">中文</a>
</div>

<!-- MAP SECTION -->
<div class="ov-map-section">
  <div class="ov-map-topbar">
    <div class="ov-map-title">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
      Global Strategic Presence
    </div>
    <div class="ov-map-tabs">
      <button class="ov-map-tab active" data-panel="map-global">🌏 Global Coverage</button>
      <button class="ov-map-tab" data-panel="map-domestic">🇨🇳 Domestic Coverage</button>
    </div>
  </div>

  <div class="ov-map-panel active" id="map-global">
    <div class="ov-map-frame">
      <div class="ov-world-wrap">
        <canvas id="ov-world-canvas" class="ov-world-svg"></canvas>

        <!-- Eurasia crop: x=(lon+20)/180, y=(52-lat)/64. bounds -20°W–160°E, 52°N–12°S -->
        <!-- SE Asia: KL (103°E,4°N) → 68.3%,75.0% -->
        <div class="ov-map-pin" data-target="region-sea" style="left:68.3%;top:75.0%;">
          <div class="ov-pin-dot" style="--pc:#10b981;"></div>
          <div class="ov-pin-pulse" style="--pc:#10b981;"></div>
          <div class="ov-pin-label">SE Asia</div>
          <div class="ov-pin-tooltip">
            <div class="ov-pt-name">Southeast Asia</div>
            <div class="ov-pt-sub">Malaysia · Singapore · Indonesia</div>
          </div>
        </div>
        <!-- GBA: HK (114°E,22°N) → 74.4%,46.9% -->
        <div class="ov-map-pin" data-target="region-gba" style="left:74.4%;top:46.9%;">
          <div class="ov-pin-dot" style="--pc:#ef4444;"></div>
          <div class="ov-pin-pulse" style="--pc:#ef4444;"></div>
          <div class="ov-pin-label">GBA</div>
          <div class="ov-pin-tooltip">
            <div class="ov-pt-name">Greater Bay Area</div>
            <div class="ov-pt-sub">Hong Kong</div>
          </div>
        </div>
        <!-- Middle East: Riyadh (47°E,24°N) → 37.2%,43.8% -->
        <div class="ov-map-pin" data-target="region-me" style="left:37.2%;top:43.8%;">
          <div class="ov-pin-dot" style="--pc:#f59e0b;"></div>
          <div class="ov-pin-pulse" style="--pc:#f59e0b;"></div>
          <div class="ov-pin-label">Middle East</div>
          <div class="ov-pin-tooltip">
            <div class="ov-pt-name">Middle East</div>
            <div class="ov-pt-sub">Saudi Arabia · UAE</div>
          </div>
        </div>
        <!-- India: Bangalore (77°E,13°N) → 53.9%,60.9% -->
        <div class="ov-map-pin" data-target="region-india" style="left:53.9%;top:60.9%;">
          <div class="ov-pin-dot" style="--pc:#a78bfa;"></div>
          <div class="ov-pin-pulse" style="--pc:#a78bfa;"></div>
          <div class="ov-pin-label">India</div>
          <div class="ov-pin-tooltip">
            <div class="ov-pt-name">India</div>
            <div class="ov-pt-sub">Bangalore</div>
          </div>
        </div>
        <!-- Japan: Tokyo (139.7°E,35.7°N) → 88.7%,25.5% -->
        <div class="ov-map-pin" data-target="region-japan" style="left:88.7%;top:25.5%;">
          <div class="ov-pin-dot" style="--pc:#06b6d4;"></div>
          <div class="ov-pin-pulse" style="--pc:#06b6d4;"></div>
          <div class="ov-pin-label">Japan</div>
          <div class="ov-pin-tooltip">
            <div class="ov-pt-name">Japan</div>
            <div class="ov-pt-sub">Tokyo</div>
          </div>
        </div>
      </div>

      <div class="ov-map-legend">
        <span class="ov-leg-item" style="--lc:#10b981;">SE Asia</span>
        <span class="ov-leg-item" style="--lc:#ef4444;">Greater Bay Area</span>
        <span class="ov-leg-item" style="--lc:#f59e0b;">Middle East</span>
        <span class="ov-leg-item" style="--lc:#a78bfa;">India</span>
        <span class="ov-leg-item" style="--lc:#06b6d4;">Japan</span>
        <span class="ov-leg-tip">Click a marker to jump to the region</span>
      </div>
    </div>
  </div>

  <!-- DOMESTIC MAP: Canvas China provinces map -->
  <div class="ov-map-panel" id="map-domestic">
    <div class="ov-map-frame">
      <div class="ov-world-wrap">
        <canvas id="ov-china-canvas" class="ov-world-svg"></canvas>
      </div>
      <div class="ov-map-legend">
        <span class="ov-leg-item" style="--lc:#ef4444;">1000+ Developers</span>
        <span class="ov-leg-item" style="--lc:#3b82f6;">Office Locations</span>
        <span class="ov-leg-item" style="--lc:#f59e0b;">Service Coverage</span>
      </div>
    </div>
  </div>
</div>

<!-- COVERAGE STRIP -->
<div class="ov-cov-strip">
  <div class="ov-cov-item">
    <span class="ov-cov-icon">🏢</span>
    <span class="ov-cov-text"><strong>2</strong> offices in Hi-Tech Parks / Free Trade Zones</span>
  </div>
  <div class="ov-cov-item">
    <span class="ov-cov-icon">🔧</span>
    <span class="ov-cov-text"><strong>11</strong> Huawei Global ODC centers</span>
  </div>
  <div class="ov-cov-item">
    <span class="ov-cov-icon">🌐</span>
    <span class="ov-cov-text"><strong>11</strong> MNC cross-border ODC centers</span>
  </div>
  <div class="ov-cov-item">
    <span class="ov-cov-icon">🤝</span>
    <span class="ov-cov-text"><strong>23</strong> Operator Partnerships</span>
  </div>
</div>

<!-- REGION SECTIONS -->
<div class="page-body">

  <!-- Southeast Asia -->
  <div id="region-sea" class="ov-region-sec reveal">
    <div class="ov-region-photo">
      <img src="/images/overseas/sea-photo.jpeg" alt="Southeast Asia · Kuala Lumpur" />
      <div class="ov-photo-badge" style="background:linear-gradient(135deg,#059669,#10b981);">🌏 SE Asia</div>
    </div>
    <div class="ov-region-content">
      <div class="ov-region-eyebrow" style="color:#10b981;">Southeast Asia · 3 Entities</div>
      <h2 class="ov-region-title">Southeast Asia</h2>
      <div class="ov-region-badge-row">
        <span class="ov-region-badge" style="--rb:#10b981;">260+ Local Staff</span>
      </div>
      <div class="ov-entities">
        <div class="ov-entity">
          <span class="ov-edot" style="background:#10b981;"></span>
          <div>
            <div class="ov-ename">CSI Interfusion SDN. BHD</div>
            <div class="ov-eloc">📍 Kuala Lumpur, Malaysia</div>
          </div>
        </div>
        <div class="ov-entity">
          <span class="ov-edot" style="background:#10b981;"></span>
          <div>
            <div class="ov-ename">CSI Interfusion Singapore</div>
            <div class="ov-eloc">📍 Singapore</div>
          </div>
        </div>
        <div class="ov-entity">
          <span class="ov-edot" style="background:#10b981;"></span>
          <div>
            <div class="ov-ename">PT CSI Interfusion Technology Service JAKARTA</div>
            <div class="ov-eloc">📍 Jakarta, Indonesia</div>
          </div>
        </div>
      </div>
      <div class="ov-svc-label">Core Services</div>
      <div class="ov-tags">
        <span>Telco Managed Services</span><span>Financial SuperApp</span><span>E-KYC</span>
        <span>Enterprise Risk Mgmt</span><span>Smart City / Campus</span><span>Cloud Platform</span>
      </div>
    </div>
  </div>

  <!-- Greater Bay Area -->
  <div id="region-gba" class="ov-region-sec ov-region-sec-rev reveal">
    <div class="ov-region-photo">
      <img src="/images/overseas/gba-photo.jpeg" alt="Greater Bay Area · Hong Kong" />
      <div class="ov-photo-badge" style="background:linear-gradient(135deg,#dc2626,#f87171);">🇭🇰 Greater Bay Area</div>
    </div>
    <div class="ov-region-content">
      <div class="ov-region-eyebrow" style="color:#ef4444;">Greater Bay Area · 1 Entity</div>
      <h2 class="ov-region-title">Greater Bay Area</h2>
      <div class="ov-region-badge-row">
        <span class="ov-region-badge" style="--rb:#ef4444;">160+ Staff</span>
      </div>
      <div class="ov-entities">
        <div class="ov-entity">
          <span class="ov-edot" style="background:#dc2626;"></span>
          <div>
            <div class="ov-ename">Chinasoft International Technology Service (Hong Kong)</div>
            <div class="ov-eloc">📍 Hong Kong</div>
          </div>
        </div>
      </div>
      <div class="ov-svc-label">Core Services</div>
      <div class="ov-tags">
        <span>IDS Integration &amp; Certification</span><span>ECU / HPLC</span><span>Big Data / BES / OCS</span>
        <span>App Dev &amp; Testing</span><span>Cloud Resell / SI</span><span>Smart City / Campus</span>
      </div>
    </div>
  </div>

  <!-- Middle East -->
  <div id="region-me" class="ov-region-sec reveal">
    <div class="ov-region-photo">
      <img src="/images/overseas/me-photo.jpeg" alt="Middle East · Riyadh" />
      <div class="ov-photo-badge" style="background:linear-gradient(135deg,#d97706,#f59e0b);">🕌 Middle East</div>
    </div>
    <div class="ov-region-content">
      <div class="ov-region-eyebrow" style="color:#f59e0b;">Middle East · 2 Entities</div>
      <h2 class="ov-region-title">Middle East</h2>
      <div class="ov-region-badge-row">
        <span class="ov-region-badge" style="--rb:#f59e0b;">50+ Staff</span>
      </div>
      <div class="ov-entities">
        <div class="ov-entity">
          <span class="ov-edot" style="background:#d97706;"></span>
          <div>
            <div class="ov-ename">CSI Joint Advanced Technologies</div>
            <div class="ov-eloc">📍 Riyadh, Saudi Arabia (10+ staff)</div>
          </div>
        </div>
        <div class="ov-entity">
          <span class="ov-edot" style="background:#d97706;"></span>
          <div>
            <div class="ov-ename">CSI INTERFUSION MIDDLE EAST TECHNOLOGY SERVICE</div>
            <div class="ov-eloc">📍 Abu Dhabi, UAE (40+ staff)</div>
          </div>
        </div>
      </div>
      <div class="ov-svc-label">Core Services</div>
      <div class="ov-tags">
        <span>Huawei Cloud / Resell / SI</span><span>IDS Integration</span><span>Digital Operations</span>
        <span>Gov App Dev</span><span>Smart City / Campus</span><span>Software O&amp;M</span>
      </div>
    </div>
  </div>

  <!-- India -->
  <div id="region-india" class="ov-region-sec ov-region-sec-rev reveal">
    <div class="ov-region-photo">
      <img src="/images/overseas/india-photo.jpeg" alt="India · Bangalore" />
      <div class="ov-photo-badge" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">🇮🇳 India</div>
    </div>
    <div class="ov-region-content">
      <div class="ov-region-eyebrow" style="color:#a78bfa;">India · 1 Entity</div>
      <h2 class="ov-region-title">India</h2>
      <div class="ov-region-badge-row">
        <span class="ov-region-badge" style="--rb:#a78bfa;">80+ Staff</span>
      </div>
      <div class="ov-entities">
        <div class="ov-entity">
          <span class="ov-edot" style="background:#7c3aed;"></span>
          <div>
            <div class="ov-ename">CSI Interfusion India</div>
            <div class="ov-eloc">📍 Bangalore, India</div>
          </div>
        </div>
      </div>
      <div class="ov-svc-label">Core Services</div>
      <div class="ov-tags">
        <span>Microsoft ISV</span><span>Android Dev / UI</span><span>Remote Testing</span>
        <span>Operator Integration</span><span>CRM / BSS Maintenance</span>
      </div>
    </div>
  </div>

  <!-- Japan -->
  <div id="region-japan" class="ov-region-sec reveal">
    <div class="ov-region-photo">
      <img src="/images/overseas/japan-photo.jpeg" alt="Japan · Tokyo" />
      <div class="ov-photo-badge" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">🇯🇵 Japan</div>
    </div>
    <div class="ov-region-content">
      <div class="ov-region-eyebrow" style="color:#06b6d4;">Japan · 1 Entity</div>
      <h2 class="ov-region-title">Japan</h2>
      <div class="ov-region-badge-row">
        <span class="ov-region-badge" style="--rb:#06b6d4;">60+ On-site</span>
        <span class="ov-region-badge" style="--rb:#06b6d4;">1,000+ Remote</span>
      </div>
      <div class="ov-entities">
        <div class="ov-entity">
          <span class="ov-edot" style="background:#0891b2;"></span>
          <div>
            <div class="ov-ename">東京信華 &amp; 日本創智</div>
            <div class="ov-eloc">📍 Tokyo, Japan (+ remote teams in Dalian, Changsha, Xi'an, Beijing, Shanghai — 1,000+ total)</div>
          </div>
        </div>
      </div>
      <div class="ov-jp-row">
        <div>
          <div class="ov-svc-label">Client Industries</div>
          <div class="ov-tags"><span>Finance</span><span>Manufacturing</span><span>Distribution</span><span>Media</span></div>
        </div>
        <div>
          <div class="ov-svc-label">Core Services</div>
          <div class="ov-tags"><span>System Dev &amp; Test</span><span>Test Outsourcing</span><span>Staff Dispatch</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- ACHIEVEMENTS -->
  <div class="sec reveal">
    <div class="sec-header">
      <div class="sec-label-wrap">
        <div class="sec-eyebrow">Key Achievements</div>
        <div class="sec-title">Key Strategic Achievements</div>
      </div>
    </div>
    <div class="ov-achieve-grid">
      <div class="ov-achieve-card">
        <div class="ov-ach-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
        </div>
        <div>
          <div class="ov-ach-title">Global Enterprise Client Network</div>
          <div class="ov-ach-desc">2,700+ enterprise clients worldwide across finance, telecom, government, and manufacturing, spanning Southeast Asia, the Middle East, Japan, and beyond.</div>
        </div>
      </div>
      <div class="ov-achieve-card">
        <div class="ov-ach-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        </div>
        <div>
          <div class="ov-ach-title">Deep Huawei ODC Partnership</div>
          <div class="ov-ach-desc">11 centers serve as Huawei Global Chinese ODCs; 11 more are MNC cross-border ODCs, forming a complete global delivery network.</div>
        </div>
      </div>
      <div class="ov-achieve-card">
        <div class="ov-ach-icon" style="background:linear-gradient(135deg,#059669,#10b981);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </div>
        <div>
          <div class="ov-ach-title">Hi-Tech Park Strategic Presence</div>
          <div class="ov-ach-desc">2 entities established in hi-tech parks or free trade zones, leveraging premium policy resources to drive localization and talent development.</div>
        </div>
      </div>
    </div>
  </div>

</div>

<footer class="au-footer">
  <span class="footer-l">ChinaSofti · <span>中软国际</span></span>
  <span class="footer-r">chinasofti-capability.vercel.app · © 2025</span>
</footer>

</div>
</template>

<style>
/* ===== OVERSEAS PAGE TONE ===== */
.ov-page {
  background: #c4d4e8;
}
.ov-page .mesh-bg {
  background: linear-gradient(145deg, #afc8e2 0%, #c0d4eb 40%, #b8cce4 70%, #bdd0e9 100%);
}
.ov-page .mesh-bg::before {
  background:
    radial-gradient(ellipse 70% 60% at 15% 15%, rgba(30,80,180,0.14), transparent 60%),
    radial-gradient(ellipse 55% 65% at 85% 75%, rgba(29,78,216,0.12), transparent 60%),
    radial-gradient(ellipse 45% 45% at 60% 35%, rgba(59,130,246,0.09), transparent 50%);
}

/* ===== MAP SECTION ===== */
.ov-map-section {
  position: relative; z-index: 1;
  background: rgba(180, 210, 240, 0.45);
  border-bottom: 1px solid rgba(29,78,216,0.12);
}

.ov-map-topbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 64px 16px;
  border-bottom: 1px solid rgba(29,78,216,0.1);
  background: rgba(210, 228, 248, 0.85);
  backdrop-filter: blur(8px);
  flex-wrap: wrap; gap: 12px;
}
.ov-map-title {
  display: flex; align-items: center; gap: 10px;
  font-size: 1.1rem; font-weight: 800; color: var(--text1);
  letter-spacing: -0.01em;
}

.ov-map-tabs {
  display: flex; gap: 6px; background: rgba(180,210,245,0.6);
  border-radius: 10px; padding: 4px;
  border: 1px solid rgba(29,78,216,0.15);
}
.ov-map-tab {
  padding: 7px 18px; border-radius: 7px; border: none; cursor: pointer;
  font-size: 0.86rem; font-weight: 700; transition: all .2s;
  background: transparent; color: #64748b;
}
.ov-map-tab.active {
  background: linear-gradient(135deg, #1d4ed8, #4f46e5);
  color: #fff; box-shadow: 0 3px 10px rgba(29,78,216,0.3);
}
.ov-map-tab:hover:not(.active) { background: rgba(29,78,216,0.08); color: #1d4ed8; }

.ov-map-panel { display: none; }
.ov-map-panel.active { display: block; }

.ov-map-frame { padding: 28px 64px 0; max-width: 1280px; margin: 0 auto; }

.ov-world-wrap {
  position: relative; width: 100%;
  border-radius: 14px; overflow: hidden;
  box-shadow: 0 6px 32px rgba(30,80,140,0.13);
  border: 1px solid #d0e0ef;
}
.ov-world-svg {
  display: block; width: 100%; height: auto;
}

.ov-map-pin {
  position: absolute; transform: translate(-50%, -50%);
  cursor: pointer; z-index: 10;
}
.ov-pin-dot {
  width: 13px; height: 13px; border-radius: 50%;
  background: var(--pc); position: relative; z-index: 2;
  box-shadow: 0 0 0 3px rgba(255,255,255,0.7), 0 2px 8px rgba(0,0,0,0.25);
  transition: transform .2s;
}
.ov-map-pin:hover .ov-pin-dot { transform: scale(1.45); }
.ov-pin-pulse {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 13px; height: 13px; border-radius: 50%;
  background: var(--pc); opacity: 0.55;
  animation: pinPulse 2.2s ease-out infinite;
  z-index: 1;
}
@keyframes pinPulse {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.55; }
  100% { transform: translate(-50%, -50%) scale(3.2); opacity: 0; }
}

.ov-pin-tooltip {
  position: absolute; bottom: calc(100% + 11px); left: 50%;
  transform: translateX(-50%);
  background: rgba(15, 30, 70, 0.92); backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.15); border-radius: 9px;
  padding: 8px 14px; white-space: nowrap;
  opacity: 0; pointer-events: none; transition: opacity .18s;
  box-shadow: 0 6px 20px rgba(0,0,0,0.28);
}
.ov-pin-tooltip::after {
  content: ''; position: absolute; top: 100%; left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent; border-top-color: rgba(15,30,70,0.92);
}
.ov-map-pin:hover .ov-pin-tooltip { opacity: 1; }
.ov-pt-name { font-size: 0.86rem; font-weight: 800; color: #f1f5f9; }
.ov-pt-sub { font-size: 0.72rem; color: rgba(255,255,255,0.58); margin-top: 2px; }

.ov-pin-label {
  position: absolute; top: calc(100% + 7px); left: 50%;
  transform: translateX(-50%);
  font-size: 0.68rem; font-weight: 700; white-space: nowrap;
  color: #fff;
  text-shadow: 0 0 8px rgba(0,0,40,0.95), 0 1px 3px rgba(0,0,40,0.9);
  pointer-events: none;
}

.ov-map-legend {
  display: flex; gap: 18px; align-items: center; flex-wrap: wrap;
  padding: 14px 0 22px;
}
.ov-leg-item {
  display: flex; align-items: center; gap: 6px;
  font-size: 0.8rem; font-weight: 600; color: #475569;
}
.ov-leg-item::before {
  content: ''; width: 9px; height: 9px; border-radius: 50%;
  background: var(--lc); flex-shrink: 0;
  box-shadow: 0 0 5px var(--lc);
}
.ov-leg-tip {
  margin-left: auto; font-size: 0.74rem; color: #94a3b8;
  display: flex; align-items: center; gap: 5px;
}
.ov-leg-tip::before { content: '↑'; font-size: 0.8rem; }

/* ===== COVERAGE STRIP ===== */
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

/* ===== REGION SECTIONS ===== */
.ov-region-sec {
  display: grid; grid-template-columns: 1fr 1fr; gap: 0;
  border-radius: var(--radius); overflow: hidden;
  box-shadow: var(--shadow-lg); margin-bottom: 48px;
  background: var(--card-bg); border: 1px solid rgba(29,78,216,0.09);
  backdrop-filter: blur(8px);
  transition: box-shadow .35s, transform .35s;
}
.ov-region-sec:hover { transform: translateY(-4px); box-shadow: 0 24px 60px rgba(29,78,216,0.13); }

.ov-region-sec-rev { direction: rtl; }
.ov-region-sec-rev > * { direction: ltr; }

.ov-region-photo {
  position: relative; min-height: 340px; overflow: hidden; flex-shrink: 0;
}
.ov-region-photo img {
  width: 100%; height: 100%; object-fit: cover; object-position: center;
  display: block; transition: transform .5s ease;
}
.ov-region-sec:hover .ov-region-photo img { transform: scale(1.04); }
.ov-photo-badge {
  position: absolute; top: 20px; left: 20px;
  color: #fff; font-size: 0.84rem; font-weight: 800;
  padding: 6px 16px; border-radius: 20px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.3);
  backdrop-filter: blur(4px);
}
.ov-region-sec-rev .ov-photo-badge { left: auto; right: 20px; }

.ov-region-content {
  padding: 40px 44px; display: flex; flex-direction: column; justify-content: center;
}
.ov-region-eyebrow {
  font-size: 0.7rem; font-weight: 800; letter-spacing: 0.14em;
  text-transform: uppercase; margin-bottom: 8px;
}
.ov-region-title {
  font-size: 1.7rem; font-weight: 900; color: var(--text1);
  margin: 0 0 14px; letter-spacing: -0.02em; line-height: 1.1;
}
.ov-region-badge-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 22px; }
.ov-region-badge {
  background: rgba(29,78,216,0.1);
  border: 1px solid rgba(29,78,216,0.25);
  color: var(--rb, #1d4ed8); border-radius: 20px;
  padding: 4px 14px; font-size: 0.8rem; font-weight: 700;
}

.ov-entities { margin-bottom: 20px; display: flex; flex-direction: column; gap: 12px; }
.ov-entity { display: flex; align-items: flex-start; gap: 11px; }
.ov-edot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; margin-top: 5px; }
.ov-ename { font-size: 0.9rem; font-weight: 700; color: var(--text1); line-height: 1.4; }
.ov-eloc { font-size: 0.78rem; color: var(--text3); margin-top: 2px; }

.ov-svc-label {
  font-size: 0.64rem; font-weight: 800; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--blue); margin-bottom: 10px;
}
.ov-tags { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 0; }
.ov-tags span {
  background: rgba(29,78,216,0.06); border: 1px solid rgba(29,78,216,0.13);
  border-radius: 20px; padding: 4px 12px; font-size: 0.78rem;
  color: var(--text2); font-weight: 500;
}

.ov-jp-row { display: flex; gap: 32px; flex-wrap: wrap; }

@keyframes regionFlash {
  0%,100% { box-shadow: var(--shadow-lg); }
  25% { box-shadow: 0 0 0 4px rgba(59,130,246,0.5), var(--shadow-lg); }
  75% { box-shadow: 0 0 0 8px rgba(59,130,246,0.25), var(--shadow-lg); }
}
.ov-region-flash { animation: regionFlash 1.4s ease; }

/* ===== ACHIEVEMENTS ===== */
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

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .ov-map-topbar { padding: 16px 32px 14px; }
  .ov-map-frame { padding: 20px 32px 0; }
  .ov-map-legend { padding: 12px 0 18px; }
  .ov-cov-strip { padding: 18px 32px; }
}

@media (max-width: 768px) {
  .ov-map-topbar { padding: 14px 20px 12px; }
  .ov-map-frame { padding: 14px 16px 0; }
  .ov-map-legend { padding: 10px 0 16px; gap: 10px; }
  .ov-leg-tip { display: none; }
  .ov-map-tabs { gap: 4px; }
  .ov-map-tab { padding: 7px 14px; font-size: 0.82rem; }

  .ov-cov-strip { padding: 10px 16px; }
  .ov-cov-item {
    padding: 5px 10px; font-size: 0.72rem; border-right: none;
    width: 50%; border-bottom: 1px solid rgba(255,255,255,0.1);
    white-space: normal; line-height: 1.35;
  }
  .ov-cov-item:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.15); }
  .ov-cov-item:last-child { width: 100%; border-bottom: none; justify-content: center; }

  .ov-region-sec { grid-template-columns: 1fr; direction: ltr; }
  .ov-region-sec-rev { direction: ltr; }
  .ov-region-photo { min-height: 220px; }
  .ov-region-content { padding: 28px 24px; }
  .ov-region-title { font-size: 1.35rem; }
  .ov-photo-badge { left: 16px !important; right: auto !important; }

  .ov-achieve-grid { grid-template-columns: 1fr; }
  .ov-jp-row { flex-direction: column; gap: 16px; }
}

@media (max-width: 600px) {
  .ov-map-topbar { flex-direction: column; align-items: flex-start; gap: 10px; }
  .ov-map-frame { padding: 12px 12px 0; }
  .ov-map-legend { gap: 8px; }
  .ov-region-photo { min-height: 180px; }
  .ov-region-content { padding: 22px 18px; }
}
</style>
