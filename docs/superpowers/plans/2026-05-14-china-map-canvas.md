# China Canvas Map Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the static `domestic-map.png` image in `HomeOverseas.vue` (and its English twin `HomeOverseasEn.vue`) with a Canvas-rendered China provinces map that visually matches the existing global map in color scheme, layout, and animation style.

**Architecture:** Fetch China provinces GeoJSON from a public static asset at mount time, render provinces + animated city markers onto a `<canvas>` element using the same equirectangular projection and `requestAnimationFrame` loop pattern as the existing `initWorldMap()`. Separate static background (province fills + borders) from animated foreground (pulsing city dots) using an offscreen `HTMLCanvasElement` for performance.

**Tech Stack:** Canvas 2D API, GeoJSON (FeatureCollection), DataV Aliyun provinces data served from `docs/public/data/`, VitePress static site.

---

## File Map

| Action | File | Change |
|--------|------|--------|
| Create | `docs/public/data/china-provinces.json` | China provinces GeoJSON (downloaded from DataV) |
| Modify | `docs/.vitepress/theme/HomeOverseas.vue` | HTML + JS + CSS |
| Modify | `docs/.vitepress/theme/HomeOverseasEn.vue` | HTML + JS + CSS (mirror) |

---

### Task 1: Download China Provinces GeoJSON

**Files:**
- Create: `docs/public/data/china-provinces.json`

- [ ] **Step 1: Create data directory and download**

```bash
mkdir -p /Users/keyipeng/Dev/csi_page/docs/public/data
curl -L "https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json" \
  -o /Users/keyipeng/Dev/csi_page/docs/public/data/china-provinces.json
```

- [ ] **Step 2: Verify the file is valid GeoJSON with province features**

```bash
node -e "
  const d = JSON.parse(require('fs').readFileSync(
    'docs/public/data/china-provinces.json', 'utf8'
  ));
  console.log('type:', d.type);
  console.log('feature count:', d.features.length);
  console.log('first feature name:', d.features[0].properties.name);
  console.log('first coord:', d.features[0].geometry.coordinates[0][0][0]);
"
```

Expected output:
```
type: FeatureCollection
feature count: 34   ← (or similar, 31-36 provinces/regions)
first feature name: 北京市  ← (varies, any province name)
first coord: [ 116.x, 39.x ]  ← longitude, latitude pair
```

If the DataV URL is unavailable, alternative:
```bash
npm install --no-save china-geojson
node -e "
  const d = require('./node_modules/china-geojson/china.json');
  require('fs').writeFileSync('docs/public/data/china-provinces.json', JSON.stringify(d));
  console.log('written, features:', d.features.length);
"
```

- [ ] **Step 3: Commit the data file**

```bash
git add docs/public/data/china-provinces.json
git commit -m "feat(map): add China provinces GeoJSON for Canvas renderer"
```

---

### Task 2: Update HTML in HomeOverseas.vue

**Files:**
- Modify: `docs/.vitepress/theme/HomeOverseas.vue` (lines 238–243)

- [ ] **Step 1: Replace the domestic panel content**

Find this block (around line 238–243):
```html
  <!-- DOMESTIC MAP: constrained to page-body width -->
  <div class="ov-map-panel" id="map-domestic">
    <div class="ov-domestic-frame">
      <img src="/images/overseas/domestic-map.png" alt="国内布局地图" class="ov-domestic-img" />
    </div>
  </div>
```

Replace with:
```html
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
```

---

### Task 3: Add City Data and initChinaMap() to HomeOverseas.vue

**Files:**
- Modify: `docs/.vitepress/theme/HomeOverseas.vue` (script section)

- [ ] **Step 1: Add city data constants after the closing `</script>` comment / before `onMounted`**

In the `<script setup>` block, add these constants after the imports and before `onMounted`:

```javascript
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
  { name: '哈尔滨', lon: 126.6, lat: 45.8 },
  { name: '长春',   lon: 125.3, lat: 43.9 },
  { name: '沈抚新区', lon: 123.5, lat: 41.4 },
  { name: '太原',   lon: 112.5, lat: 37.9 },
  { name: '石家庄', lon: 114.5, lat: 38.1 },
  { name: '唐山',   lon: 118.2, lat: 39.6 },
  { name: '包头',   lon: 110.0, lat: 40.7 },
  { name: '呼和浩特', lon: 111.7, lat: 40.8 },
  { name: '银川',   lon: 106.3, lat: 38.5 },
  { name: '兰州',   lon: 103.8, lat: 36.1 },
  { name: '天水',   lon: 105.7, lat: 34.6 },
  { name: '西宁',   lon: 101.8, lat: 36.6 },
  { name: '郑州',   lon: 113.6, lat: 34.7 },
  { name: '洛阳',   lon: 112.4, lat: 34.7 },
  { name: '南昌',   lon: 115.9, lat: 28.7 },
  { name: '长沙',   lon: 113.0, lat: 28.2 },
  { name: '衡阳',   lon: 112.6, lat: 26.9 },
  { name: '贵阳',   lon: 106.7, lat: 26.6 },
  { name: '桂林',   lon: 110.3, lat: 25.3 },
  { name: '昆明',   lon: 102.7, lat: 25.0 },
  { name: '厦门',   lon: 118.1, lat: 24.5 },
  { name: '福州',   lon: 119.3, lat: 26.1 },
  { name: '南平',   lon: 118.2, lat: 26.6 },
]

const JIEFANG_CITIES = [
  { name: '喀什',   lon: 75.9,  lat: 39.5 },
  { name: '乌鲁木齐', lon: 87.6, lat: 43.8 },
  { name: '拉萨',   lon: 91.1,  lat: 29.7 },
  { name: '嘉兴',   lon: 120.8, lat: 30.7 },
  { name: '宁波',   lon: 121.6, lat: 29.9 },
  { name: '东莞',   lon: 113.8, lat: 23.0 },
  { name: '珠海',   lon: 113.6, lat: 22.3 },
  { name: '香港',   lon: 114.2, lat: 22.3 },
  { name: '海口',   lon: 110.3, lat: 20.0 },
]
```

- [ ] **Step 2: Add `initChinaMap()` function after `initWorldMap()`**

```javascript
async function initChinaMap() {
  const canvas = document.getElementById('ov-china-canvas')
  if (!canvas) return

  let chinaData
  try {
    const res = await fetch('/data/china-provinces.json')
    chinaData = await res.json()
  } catch { return }

  // Equirectangular projection fitted to China's extent
  const MIN_LON = 72, MAX_LON = 138, MIN_LAT = 17, MAX_LAT = 55

  let cssW = 0, cssH = 0, dpr = 1, bgCanvas = null, animId = null

  function project([lon, lat]) {
    return [
      (lon - MIN_LON) / (MAX_LON - MIN_LON) * cssW,
      (MAX_LAT - lat) / (MAX_LAT - MIN_LAT) * cssH,
    ]
  }

  function drawGeom(ctx, geom) {
    if (!geom) return
    const polys = geom.type === 'Polygon'
      ? [geom.coordinates]
      : geom.coordinates
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

    // Same ocean gradient as global map
    const grad = bgCtx.createLinearGradient(0, 0, 0, cssH)
    grad.addColorStop(0, '#bdd8ec')
    grad.addColorStop(1, '#a8c8df')
    bgCtx.fillStyle = grad
    bgCtx.fillRect(0, 0, cssW, cssH)

    // Province fills
    bgCtx.fillStyle = '#6fa8d0'
    bgCtx.beginPath()
    chinaData.features.forEach(f => drawGeom(bgCtx, f.geometry))
    bgCtx.fill('evenodd')

    // Province borders
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

  function tick(ctx) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.drawImage(bgCanvas, 0, 0, cssW, cssH)

    const t = frame / 60

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
      })
    })

    frame++
    animId = requestAnimationFrame(() => tick(ctx))
  }

  function setup() {
    dpr   = window.devicePixelRatio || 1
    cssW  = canvas.parentElement.offsetWidth
    cssH  = Math.round(cssW * 0.70)

    canvas.width  = cssW * dpr
    canvas.height = cssH * dpr
    canvas.style.width  = cssW + 'px'
    canvas.style.height = cssH + 'px'

    renderBackground()

    if (animId) cancelAnimationFrame(animId)
    frame = 0
    const ctx = canvas.getContext('2d')
    tick(ctx)
  }

  setup()

  let resizeTimer
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(setup, 150)
  })
}
```

- [ ] **Step 3: Wire up in `onMounted`**

Find the existing `onMounted`:
```javascript
onMounted(() => {
  initMapTabs()
  initMapPins()
  initWorldMap()
  initReveal()
})
```

Replace with:
```javascript
onMounted(() => {
  initMapTabs()
  initMapPins()
  initWorldMap()
  initChinaMap()
  initReveal()
})
```

---

### Task 4: Update CSS in HomeOverseas.vue

**Files:**
- Modify: `docs/.vitepress/theme/HomeOverseas.vue` (style section, lines ~549–559)

- [ ] **Step 1: Remove the old domestic-panel overrides**

Find and delete these three CSS rules:
```css
/* Domestic map: same width as page-body cards */
.ov-map-panel#map-domestic { background: #eef4fb; padding: 28px 0 32px; }
.ov-domestic-frame {
  max-width: 1100px; margin: 0 auto; padding: 0 64px;
}
.ov-domestic-img {
  display: block; width: 100%; height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(30,80,140,0.12);
  border: 1px solid #d0e0ef;
  filter: contrast(1.12) saturate(1.08) brightness(1.02);
}
```

The domestic panel will now inherit the same structural styles as `#map-global` — `ov-map-frame`, `ov-world-wrap`, `ov-world-svg`, `ov-map-legend` — which are already defined.

- [ ] **Step 2: Commit HomeOverseas.vue changes**

```bash
git add docs/.vitepress/theme/HomeOverseas.vue
git commit -m "feat(map): replace domestic static image with Canvas China provinces map"
```

---

### Task 5: Mirror Changes in HomeOverseasEn.vue

**Files:**
- Modify: `docs/.vitepress/theme/HomeOverseasEn.vue`

- [ ] **Step 1: Replace the domestic panel HTML in HomeOverseasEn.vue**

Find (around line 264–268):
```html
  <div class="ov-map-panel" id="map-domestic">
    <div class="ov-domestic-frame">
      <img src="/images/overseas/domestic-map.png" alt="Domestic Coverage Map" class="ov-domestic-img" />
    </div>
  </div>
```

Replace with:
```html
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
```

- [ ] **Step 2: Add city constants + `initChinaMap()` to HomeOverseasEn.vue**

Copy the exact same `DEV1000_CITIES`, `OFFICE_CITIES`, `JIEFANG_CITIES` constants and the full `initChinaMap()` function from HomeOverseas.vue into HomeOverseasEn.vue's `<script setup>` block.

- [ ] **Step 3: Wire up in HomeOverseasEn.vue `onMounted`**

Find the `onMounted` in HomeOverseasEn.vue. Add `initChinaMap()` alongside the other `init*` calls:
```javascript
onMounted(() => {
  // ... existing calls ...
  initChinaMap()
})
```

- [ ] **Step 4: Remove domestic CSS overrides from HomeOverseasEn.vue**

Find and delete the same three CSS rules:
```css
.ov-map-panel#map-domestic { background: #eef4fb; padding: 28px 0 32px; }
.ov-domestic-frame { ... }
.ov-domestic-img { ... }
```

- [ ] **Step 5: Commit HomeOverseasEn.vue**

```bash
git add docs/.vitepress/theme/HomeOverseasEn.vue
git commit -m "feat(map): mirror Canvas China map in English overseas page"
```

---

### Task 6: Visual Verification in Browser

**Files:** None — browser verification only.

- [ ] **Step 1: Start the dev server**

```bash
npm run docs:dev
```

- [ ] **Step 2: Open the overseas page and click 国内布局**

Navigate to `http://localhost:5173/zh/overseas/` (or whatever port Vite assigns).  
Click the **🇨🇳 国内布局** tab.

Expected:
- Canvas renders with the same blue ocean gradient as 全球布局
- China appears as a lighter blue-gray shape with visible province borders
- Red dots (研发1000+) pulse visibly — 17 cities
- Blue dots (办公机构) pulse more subtly — 23 cities
- Amber dots (解放号) are static — 9 cities
- Legend shows all three categories with matching colored dots
- No static image fallback visible

- [ ] **Step 3: Verify English page**

Navigate to `http://localhost:5173/en/overseas/` and click **🇨🇳 Domestic Coverage**.  
Same canvas should render with English legend labels.

- [ ] **Step 4: Verify responsive behavior**

Resize browser window to < 640px. Canvas should rescale to fill the narrower container with correct aspect ratio.

- [ ] **Step 5: Final commit**

```bash
git add .
git commit -m "chore: verify China canvas map — ready for review"
```
