<script setup>
import { onMounted } from 'vue'
import { feature, mesh } from 'topojson-client'
import worldData from 'world-atlas/countries-110m.json'
import NavBar from './NavBar.vue'
import { regions, coverageStats } from './data/overseas.zh.js'

onMounted(() => {
  initMapTabs()
  initMapPins()
  initWorldMap()
  initChinaMap()
  initReveal()
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

    // Eurasia-focused crop — proportioned so China isn't stretched
    // lon 180°, lat 64° (-12S→52N, Russia mostly cropped), canvas 0.43 → correct ratio at 35°N
    const W0 = -20, W1 = 160, H0 = 52, H1 = -12
    function project([lon, lat]) {
      let l = lon
      if (l < W0) l += 360
      return [(l - W0) / (W1 - W0) * cssW, (H0 - lat) / (H0 - H1) * cssH]
    }

    // Ocean gradient background
    const grad = ctx.createLinearGradient(0, 0, 0, cssH)
    grad.addColorStop(0, '#bdd8ec')
    grad.addColorStop(1, '#a8c8df')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, cssW, cssH)

    // Subtle lat/lon grid
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

    // GeoJSON ring → canvas path (with antimeridian break detection)
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

    // ── Land fill (world-atlas + topojson-client) ──
    const land = feature(worldData, worldData.objects.land)
    ctx.fillStyle = '#6fa8d0'
    ctx.beginPath()
    if (land.type === 'Feature') applyGeom(land.geometry)
    else land.features?.forEach(f => applyGeom(f.geometry))
    ctx.fill('evenodd')

    // ── Coastline outline ──
    ctx.strokeStyle = 'rgba(255,255,255,0.55)'
    ctx.lineWidth = 0.7
    ctx.beginPath()
    if (land.type === 'Feature') applyGeom(land.geometry)
    else land.features?.forEach(f => applyGeom(f.geometry))
    ctx.stroke()

    // ── Internal country borders ──
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

  // Wider bounds — shows surrounding context, China appears proportionate
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

  // Precompute which city labels to show (collision avoidance), called in setup()
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

        // City label (precomputed collision avoidance)
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

</script>

<template>
<div class="au-page ov-page">
<div class="mesh-bg"></div>

<!-- NAV -->
<NavBar active="overseas" />

<!-- MAP SECTION -->
<div class="ov-map-section">
  <div class="ov-map-topbar">
    <div class="ov-map-title">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
      全球战略布局
    </div>
    <div class="ov-map-tabs">
      <button class="ov-map-tab active" data-panel="map-global">🌏 全球布局</button>
      <button class="ov-map-tab" data-panel="map-domestic">🇨🇳 国内布局</button>
    </div>
  </div>

  <!-- GLOBAL MAP: Canvas dot-grid, sampled from global-map.png -->
  <div class="ov-map-panel active" id="map-global">
    <div class="ov-map-frame">
      <div class="ov-world-wrap">
        <canvas id="ov-world-canvas" class="ov-world-svg"></canvas>

        <!-- Eurasia crop: x=(lon+20)/180, y=(52-lat)/64. bounds -20°W–160°E, 52°N–12°S -->
        <!-- 东南亚: KL (103°E,4°N) → 68.3%,75.0% -->
        <div class="ov-map-pin" data-target="region-sea" style="left:68.3%;top:75.0%;">
          <div class="ov-pin-dot" style="--pc:#10b981;"></div>
          <div class="ov-pin-pulse" style="--pc:#10b981;"></div>
          <div class="ov-pin-label">东南亚</div>
          <div class="ov-pin-tooltip">
            <div class="ov-pt-name">东南亚</div>
            <div class="ov-pt-sub">马来西亚 · 新加坡 · 印尼</div>
          </div>
        </div>
        <!-- 港澳大湾区: HK (114°E,22°N) → 74.4%,46.9% -->
        <div class="ov-map-pin" data-target="region-gba" style="left:74.4%;top:46.9%;">
          <div class="ov-pin-dot" style="--pc:#ef4444;"></div>
          <div class="ov-pin-pulse" style="--pc:#ef4444;"></div>
          <div class="ov-pin-label">大湾区</div>
          <div class="ov-pin-tooltip">
            <div class="ov-pt-name">港澳大湾区</div>
            <div class="ov-pt-sub">香港</div>
          </div>
        </div>
        <!-- 中东: Riyadh (47°E,24°N) → 37.2%,43.8% -->
        <div class="ov-map-pin" data-target="region-me" style="left:37.2%;top:43.8%;">
          <div class="ov-pin-dot" style="--pc:#f59e0b;"></div>
          <div class="ov-pin-pulse" style="--pc:#f59e0b;"></div>
          <div class="ov-pin-label">中东</div>
          <div class="ov-pin-tooltip">
            <div class="ov-pt-name">中东</div>
            <div class="ov-pt-sub">沙特 · 阿联酋</div>
          </div>
        </div>
        <!-- 印度: Bangalore (77°E,13°N) → 53.9%,60.9% -->
        <div class="ov-map-pin" data-target="region-india" style="left:53.9%;top:60.9%;">
          <div class="ov-pin-dot" style="--pc:#a78bfa;"></div>
          <div class="ov-pin-pulse" style="--pc:#a78bfa;"></div>
          <div class="ov-pin-label">印度</div>
          <div class="ov-pin-tooltip">
            <div class="ov-pt-name">印度</div>
            <div class="ov-pt-sub">班加罗尔</div>
          </div>
        </div>
        <!-- 日本: Tokyo (139.7°E,35.7°N) → 88.7%,25.5% -->
        <div class="ov-map-pin" data-target="region-japan" style="left:88.7%;top:25.5%;">
          <div class="ov-pin-dot" style="--pc:#06b6d4;"></div>
          <div class="ov-pin-pulse" style="--pc:#06b6d4;"></div>
          <div class="ov-pin-label">日本</div>
          <div class="ov-pin-tooltip">
            <div class="ov-pt-name">日本</div>
            <div class="ov-pt-sub">东京</div>
          </div>
        </div>
      </div>

      <div class="ov-map-legend">
        <span class="ov-leg-item" style="--lc:#10b981;">东南亚</span>
        <span class="ov-leg-item" style="--lc:#ef4444;">港澳大湾区</span>
        <span class="ov-leg-item" style="--lc:#f59e0b;">中东</span>
        <span class="ov-leg-item" style="--lc:#a78bfa;">印度</span>
        <span class="ov-leg-item" style="--lc:#06b6d4;">日本</span>
        <span class="ov-leg-tip">点击标记跳转至区域详情</span>
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
        <span class="ov-leg-item" style="--lc:#ef4444;">研发人员 1000+ 城市</span>
        <span class="ov-leg-item" style="--lc:#3b82f6;">国内办公机构覆盖城市</span>
        <span class="ov-leg-item" style="--lc:#f59e0b;">解放号服务覆盖城市</span>
      </div>
    </div>
  </div>
</div>

<!-- COVERAGE STRIP -->
<div class="ov-cov-strip">
  <div v-for="s in coverageStats" :key="s.post" class="ov-cov-item">
    <span class="ov-cov-icon">{{ s.icon }}</span>
    <span class="ov-cov-text">{{ s.pre }}<strong>{{ s.value }}</strong>{{ s.post }}</span>
  </div>
</div>

<!-- REGION SECTIONS -->
<div class="page-body">

  <div v-for="r in regions" :key="r.id" :id="`region-${r.id}`" :class="['ov-region-sec', { 'ov-region-sec-rev': r.rev }, 'reveal']">
    <div class="ov-region-photo">
      <img :src="r.photo" :alt="r.photoAlt" />
      <div class="ov-photo-badge" :style="`background:${r.grad};`">{{ r.badgeEmoji }} {{ r.badgeName }}</div>
    </div>
    <div class="ov-region-content">
      <div class="ov-region-eyebrow" :style="`color:${r.color};`">{{ r.eyebrow }}</div>
      <h2 class="ov-region-title">{{ r.title }}</h2>
      <div class="ov-region-badge-row">
        <span v-for="b in r.badges" :key="b.text" class="ov-region-badge" :style="`--rb:${r.color};`">{{ b.text }}</span>
      </div>
      <div class="ov-entities">
        <div v-for="e in r.entities" :key="e.name" class="ov-entity">
          <span class="ov-edot" :style="`background:${r.colorDark};`"></span>
          <div>
            <div class="ov-ename">{{ e.name }}</div>
            <div class="ov-eloc">{{ e.loc }}</div>
          </div>
        </div>
      </div>
      <template v-if="r.jpRow">
        <div class="ov-jp-row">
          <div>
            <div class="ov-svc-label">{{ r.clientLabel }}</div>
            <div class="ov-tags"><span v-for="t in r.clientTags" :key="t">{{ t }}</span></div>
          </div>
          <div>
            <div class="ov-svc-label">{{ r.svcLabel }}</div>
            <div class="ov-tags"><span v-for="t in r.tags" :key="t">{{ t }}</span></div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="ov-svc-label">{{ r.svcLabel }}</div>
        <div class="ov-tags"><span v-for="t in r.tags" :key="t">{{ t }}</span></div>
      </template>
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

/* MAP PANELS */
.ov-map-panel { display: none; }
.ov-map-panel.active { display: block; }

.ov-map-frame { padding: 28px 64px 0; max-width: 1280px; margin: 0 auto; }

/* Canvas dot-map container */
.ov-world-wrap {
  position: relative; width: 100%;
  border-radius: 14px; overflow: hidden;
  box-shadow: 0 6px 32px rgba(30,80,140,0.13);
  border: 1px solid #d0e0ef;
}
.ov-world-svg {
  display: block; width: 100%; height: auto;
}


/* MAP PINS */
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

/* TOOLTIP */
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

/* Permanent region label below pin */
.ov-pin-label {
  position: absolute; top: calc(100% + 7px); left: 50%;
  transform: translateX(-50%);
  font-size: 0.68rem; font-weight: 700; white-space: nowrap;
  color: #fff;
  text-shadow: 0 0 8px rgba(0,0,40,0.95), 0 1px 3px rgba(0,0,40,0.9);
  pointer-events: none;
}

/* LEGEND */
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
.ov-leg-tip::before {
  content: '↑'; font-size: 0.8rem;
}

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

/* Reversed: photo on right */
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
  background: color-mix(in srgb, var(--rb) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--rb) 30%, transparent);
  color: var(--rb); border-radius: 20px;
  padding: 4px 14px; font-size: 0.8rem; font-weight: 700;
}

/* fallback for older browsers */
.ov-region-badge {
  background: rgba(29,78,216,0.1);
  border: 1px solid rgba(29,78,216,0.25);
  color: var(--rb, #1d4ed8);
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

/* Flash animation when pin clicked */
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

  /* Stack region sections */
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
