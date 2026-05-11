<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  initMapTabs()
  initMapPins()
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

  <!-- GLOBAL MAP: SVG drawn world map -->
  <div class="ov-map-panel active" id="map-global">
    <div class="ov-map-frame">
      <div class="ov-world-wrap">
        <svg viewBox="0 0 960 500" class="ov-world-svg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="oceanGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#c2d9ef"/>
              <stop offset="100%" stop-color="#b8d0e8"/>
            </linearGradient>
          </defs>
          <!-- Ocean -->
          <rect width="960" height="500" fill="url(#oceanGrad)" rx="12"/>
          <!-- Latitude lines -->
          <line x1="0" y1="167" x2="960" y2="167" stroke="rgba(80,130,190,0.15)" stroke-width="0.8" stroke-dasharray="4,4"/>
          <line x1="0" y1="250" x2="960" y2="250" stroke="rgba(80,130,190,0.22)" stroke-width="1"/>
          <line x1="0" y1="333" x2="960" y2="333" stroke="rgba(80,130,190,0.15)" stroke-width="0.8" stroke-dasharray="4,4"/>
          <!-- Longitude lines -->
          <line x1="480" y1="0" x2="480" y2="500" stroke="rgba(80,130,190,0.18)" stroke-width="0.8" stroke-dasharray="4,4"/>
          <line x1="640" y1="0" x2="640" y2="500" stroke="rgba(80,130,190,0.1)" stroke-width="0.6" stroke-dasharray="3,5"/>
          <line x1="800" y1="0" x2="800" y2="500" stroke="rgba(80,130,190,0.1)" stroke-width="0.6" stroke-dasharray="3,5"/>

          <!-- === CONTINENTS === -->
          <!-- North America -->
          <path d="M 42,75 L 68,52 L 95,45 L 138,48 L 178,58 L 210,78 L 230,115 L 238,152 L 230,188 L 210,218 L 190,238 L 168,250 L 148,242 L 152,225 L 162,198 L 150,175 L 128,162 L 105,148 L 85,130 L 62,108 Z" fill="#8fb5cc"/>
          <!-- Greenland -->
          <path d="M 282,20 L 328,8 L 362,18 L 366,40 L 345,58 L 308,66 L 282,52 Z" fill="#8fb5cc"/>
          <!-- South America -->
          <path d="M 188,242 L 232,226 L 265,240 L 280,272 L 276,314 L 260,357 L 238,402 L 216,442 L 196,443 L 178,412 L 168,372 L 170,326 L 178,278 Z" fill="#8fb5cc"/>
          <!-- Europe -->
          <path d="M 418,50 L 456,38 L 500,40 L 530,54 L 538,76 L 520,98 L 494,112 L 466,116 L 440,106 L 425,88 L 422,66 Z" fill="#8fb5cc"/>
          <!-- Scandinavia -->
          <path d="M 452,24 L 480,14 L 506,26 L 510,52 L 494,64 L 466,58 L 450,42 Z" fill="#8fb5cc"/>
          <!-- Iceland -->
          <path d="M 378,36 L 398,30 L 412,40 L 408,52 L 388,56 L 374,46 Z" fill="#8fb5cc"/>
          <!-- Africa -->
          <path d="M 428,118 L 510,106 L 548,122 L 562,162 L 564,206 L 550,250 L 534,294 L 508,338 L 476,362 L 450,360 L 428,326 L 418,272 L 416,218 L 425,168 Z" fill="#8fb5cc"/>
          <!-- Arabian Peninsula -->
          <path d="M 548,152 L 612,146 L 640,162 L 637,200 L 614,218 L 580,220 L 554,206 L 544,180 Z" fill="#8fb5cc"/>
          <!-- Asia main body -->
          <path d="M 524,50 L 592,30 L 672,32 L 750,40 L 822,46 L 878,54 L 910,84 L 902,120 L 870,150 L 840,164 L 808,174 L 780,190 L 760,210 L 736,222 L 710,220 L 683,210 L 656,198 L 628,187 L 600,178 L 575,166 L 550,152 L 528,130 L 514,102 L 518,72 Z" fill="#8fb5cc"/>
          <!-- Indian Subcontinent -->
          <path d="M 626,180 L 667,173 L 706,183 L 720,212 L 714,252 L 695,273 L 673,276 L 652,255 L 635,228 L 626,202 Z" fill="#8fb5cc"/>
          <!-- SE Asia Peninsula (Malay) -->
          <path d="M 716,202 L 748,206 L 762,232 L 756,258 L 736,266 L 718,254 L 712,228 Z" fill="#8fb5cc"/>
          <!-- Sumatra -->
          <path d="M 725,252 L 758,240 L 774,255 L 770,274 L 748,282 L 728,270 Z" fill="#8fb5cc"/>
          <!-- Borneo -->
          <path d="M 782,232 L 810,226 L 822,244 L 816,270 L 790,275 L 776,257 Z" fill="#8fb5cc"/>
          <!-- Java -->
          <path d="M 760,270 L 792,264 L 806,274 L 800,284 L 766,284 Z" fill="#8fb5cc"/>
          <!-- Philippines -->
          <path d="M 802,192 L 816,180 L 828,188 L 826,206 L 814,215 L 802,208 Z" fill="#8fb5cc"/>
          <!-- Taiwan -->
          <path d="M 816,166 L 826,160 L 832,168 L 828,180 L 818,178 Z" fill="#8fb5cc"/>
          <!-- Japan (Honshu) -->
          <path d="M 856,94 L 890,86 L 906,98 L 900,122 L 874,132 L 856,120 Z" fill="#8fb5cc"/>
          <!-- Japan (Kyushu) -->
          <path d="M 848,130 L 862,125 L 868,134 L 860,142 L 848,138 Z" fill="#8fb5cc"/>
          <!-- Korea -->
          <path d="M 810,120 L 824,118 L 832,130 L 826,144 L 810,142 Z" fill="#8fb5cc"/>
          <!-- Australia -->
          <path d="M 768,278 L 846,260 L 902,268 L 926,298 L 924,336 L 900,360 L 858,367 L 808,353 L 774,325 L 766,300 Z" fill="#8fb5cc"/>
          <!-- New Zealand -->
          <path d="M 920,328 L 936,320 L 944,335 L 934,350 L 920,346 Z" fill="#8fb5cc"/>
          <path d="M 914,355 L 930,347 L 940,364 L 928,378 L 912,376 Z" fill="#8fb5cc"/>
          <!-- Madagascar -->
          <path d="M 560,264 L 572,256 L 580,272 L 576,298 L 562,302 L 555,282 Z" fill="#8fb5cc"/>
          <!-- Sri Lanka -->
          <path d="M 704,268 L 712,265 L 716,274 L 710,281 L 702,276 Z" fill="#8fb5cc"/>
        </svg>

        <!-- Interactive markers (positioned as % of SVG viewBox 960×500) -->
        <!-- 东南亚: Malaysia (103°E,4°N) → x=754,y=239 → 78.5%,47.8% -->
        <div class="ov-map-pin" data-target="region-sea" style="left:78.5%;top:47.8%;">
          <div class="ov-pin-dot" style="--pc:#10b981;"></div>
          <div class="ov-pin-pulse" style="--pc:#10b981;"></div>
          <div class="ov-pin-tooltip">
            <div class="ov-pt-name">东南亚</div>
            <div class="ov-pt-sub">马来西亚 · 新加坡 · 印尼</div>
          </div>
        </div>

        <!-- 港澳大湾区: HK (114°E,22°N) → x=784,y=189 → 81.7%,37.8% -->
        <div class="ov-map-pin" data-target="region-gba" style="left:81.7%;top:37.8%;">
          <div class="ov-pin-dot" style="--pc:#ef4444;"></div>
          <div class="ov-pin-pulse" style="--pc:#ef4444;"></div>
          <div class="ov-pin-tooltip">
            <div class="ov-pt-name">港澳大湾区</div>
            <div class="ov-pt-sub">香港</div>
          </div>
        </div>

        <!-- 中东: UAE/Saudi center (47°E,24°N) → x=605,y=183 → 63%,36.6% -->
        <div class="ov-map-pin" data-target="region-me" style="left:63%;top:36.6%;">
          <div class="ov-pin-dot" style="--pc:#f59e0b;"></div>
          <div class="ov-pin-pulse" style="--pc:#f59e0b;"></div>
          <div class="ov-pin-tooltip">
            <div class="ov-pt-name">中东</div>
            <div class="ov-pt-sub">沙特 · 阿联酋</div>
          </div>
        </div>

        <!-- 印度: Bangalore (77°E,13°N) → x=685,y=214 → 71.4%,42.8% -->
        <div class="ov-map-pin" data-target="region-india" style="left:71.4%;top:42.8%;">
          <div class="ov-pin-dot" style="--pc:#a78bfa;"></div>
          <div class="ov-pin-pulse" style="--pc:#a78bfa;"></div>
          <div class="ov-pin-tooltip">
            <div class="ov-pt-name">印度</div>
            <div class="ov-pt-sub">班加罗尔</div>
          </div>
        </div>

        <!-- 日本: Tokyo (139.7°E,35.7°N) → x=852,y=151 → 88.8%,30.2% -->
        <div class="ov-map-pin" data-target="region-japan" style="left:88.8%;top:30.2%;">
          <div class="ov-pin-dot" style="--pc:#06b6d4;"></div>
          <div class="ov-pin-pulse" style="--pc:#06b6d4;"></div>
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

  <!-- DOMESTIC MAP -->
  <div class="ov-map-panel" id="map-domestic">
    <div class="ov-map-frame">
      <div class="ov-world-wrap ov-domestic-wrap">
        <img src="/images/overseas/domestic-map.png" alt="国内布局地图" class="ov-domestic-img" />
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

<!-- REGION SECTIONS -->
<div class="page-body">

  <!-- 东南亚 -->
  <div id="region-sea" class="ov-region-sec reveal">
    <div class="ov-region-photo">
      <img src="/images/overseas/sea-photo.jpeg" alt="东南亚·吉隆坡" />
      <div class="ov-photo-badge" style="background:linear-gradient(135deg,#059669,#10b981);">🌏 东南亚</div>
    </div>
    <div class="ov-region-content">
      <div class="ov-region-eyebrow" style="color:#10b981;">Southeast Asia · 3 个实体</div>
      <h2 class="ov-region-title">东南亚区域</h2>
      <div class="ov-region-badge-row">
        <span class="ov-region-badge" style="--rb:#10b981;">260+ 本地员工</span>
      </div>
      <div class="ov-entities">
        <div class="ov-entity">
          <span class="ov-edot" style="background:#10b981;"></span>
          <div>
            <div class="ov-ename">CSI Interfusion SDN. BHD</div>
            <div class="ov-eloc">📍 马来西亚 · 吉隆坡</div>
          </div>
        </div>
        <div class="ov-entity">
          <span class="ov-edot" style="background:#10b981;"></span>
          <div>
            <div class="ov-ename">CSI Interfusion Singapore</div>
            <div class="ov-eloc">📍 新加坡</div>
          </div>
        </div>
        <div class="ov-entity">
          <span class="ov-edot" style="background:#10b981;"></span>
          <div>
            <div class="ov-ename">PT CSI Interfusion Technology Service JAKARTA</div>
            <div class="ov-eloc">📍 印度尼西亚 · 雅加达</div>
          </div>
        </div>
      </div>
      <div class="ov-svc-label">核心服务</div>
      <div class="ov-tags">
        <span>Telco 管理服务</span><span>金融 SuperApp</span><span>EKyc</span>
        <span>全面风险管理</span><span>智慧城市/园区</span><span>云平台产品</span>
      </div>
    </div>
  </div>

  <!-- 港澳大湾区 -->
  <div id="region-gba" class="ov-region-sec ov-region-sec-rev reveal">
    <div class="ov-region-photo">
      <img src="/images/overseas/gba-photo.jpeg" alt="港澳大湾区·香港" />
      <div class="ov-photo-badge" style="background:linear-gradient(135deg,#dc2626,#f87171);">🇭🇰 港澳大湾区</div>
    </div>
    <div class="ov-region-content">
      <div class="ov-region-eyebrow" style="color:#ef4444;">Greater Bay Area · 1 个实体</div>
      <h2 class="ov-region-title">港澳大湾区</h2>
      <div class="ov-region-badge-row">
        <span class="ov-region-badge" style="--rb:#ef4444;">160+ 员工</span>
      </div>
      <div class="ov-entities">
        <div class="ov-entity">
          <span class="ov-edot" style="background:#dc2626;"></span>
          <div>
            <div class="ov-ename">Chinasoft International Technology Service (Hong Kong)</div>
            <div class="ov-eloc">📍 香港</div>
          </div>
        </div>
      </div>
      <div class="ov-svc-label">核心服务</div>
      <div class="ov-tags">
        <span>IDS集成认证支持</span><span>台区ECU/HPLC</span><span>大数据/BES/OCS</span>
        <span>应用开发测试</span><span>云转售/SI</span><span>智慧城市/园区</span>
      </div>
    </div>
  </div>

  <!-- 中东 -->
  <div id="region-me" class="ov-region-sec reveal">
    <div class="ov-region-photo">
      <img src="/images/overseas/me-photo.jpeg" alt="中东·利雅得" />
      <div class="ov-photo-badge" style="background:linear-gradient(135deg,#d97706,#f59e0b);">🕌 中东</div>
    </div>
    <div class="ov-region-content">
      <div class="ov-region-eyebrow" style="color:#f59e0b;">Middle East · 2 个实体</div>
      <h2 class="ov-region-title">中东区域</h2>
      <div class="ov-region-badge-row">
        <span class="ov-region-badge" style="--rb:#f59e0b;">50+ 员工</span>
      </div>
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
      <div class="ov-svc-label">核心服务</div>
      <div class="ov-tags">
        <span>HW云/云转售/SI</span><span>IDS集成验证</span><span>数字化运营</span>
        <span>政府应用开发</span><span>智慧城市/园区</span><span>软件运维</span>
      </div>
    </div>
  </div>

  <!-- 印度 -->
  <div id="region-india" class="ov-region-sec ov-region-sec-rev reveal">
    <div class="ov-region-photo">
      <img src="/images/overseas/india-photo.jpeg" alt="印度·班加罗尔" />
      <div class="ov-photo-badge" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">🇮🇳 印度</div>
    </div>
    <div class="ov-region-content">
      <div class="ov-region-eyebrow" style="color:#a78bfa;">India · 1 个实体</div>
      <h2 class="ov-region-title">印度区域</h2>
      <div class="ov-region-badge-row">
        <span class="ov-region-badge" style="--rb:#a78bfa;">80+ 员工</span>
      </div>
      <div class="ov-entities">
        <div class="ov-entity">
          <span class="ov-edot" style="background:#7c3aed;"></span>
          <div>
            <div class="ov-ename">CSI Interfusion India</div>
            <div class="ov-eloc">📍 印度 · 班加罗尔</div>
          </div>
        </div>
      </div>
      <div class="ov-svc-label">核心服务</div>
      <div class="ov-tags">
        <span>Microsoft ISV</span><span>Android开发/UI定制</span><span>远程测试服务</span>
        <span>运营商集成管理</span><span>CRM/BSS系统维护</span>
      </div>
    </div>
  </div>

  <!-- 日本 -->
  <div id="region-japan" class="ov-region-sec reveal">
    <div class="ov-region-photo">
      <img src="/images/overseas/japan-photo.jpeg" alt="日本·东京" />
      <div class="ov-photo-badge" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">🇯🇵 日本</div>
    </div>
    <div class="ov-region-content">
      <div class="ov-region-eyebrow" style="color:#06b6d4;">Japan · 1 个实体</div>
      <h2 class="ov-region-title">日本区域</h2>
      <div class="ov-region-badge-row">
        <span class="ov-region-badge" style="--rb:#06b6d4;">60+ 驻日</span>
        <span class="ov-region-badge" style="--rb:#06b6d4;">1000+ 远程</span>
      </div>
      <div class="ov-entities">
        <div class="ov-entity">
          <span class="ov-edot" style="background:#0891b2;"></span>
          <div>
            <div class="ov-ename">東京信華 &amp; 日本創智</div>
            <div class="ov-eloc">📍 日本 · 东京（另有大连/长沙/西安/北京/上海远程团队 1000+ 人）</div>
          </div>
        </div>
      </div>
      <div class="ov-jp-row">
        <div>
          <div class="ov-svc-label">客户行业</div>
          <div class="ov-tags"><span>金融</span><span>制造</span><span>流通</span><span>传媒</span></div>
        </div>
        <div>
          <div class="ov-svc-label">核心服务</div>
          <div class="ov-tags"><span>系统开发测试</span><span>测试外包</span><span>人才派遣服务</span></div>
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
/* ===== MAP SECTION ===== */
.ov-map-section {
  position: relative; z-index: 1;
  background: #eef4fb;
  border-bottom: 1px solid #dde8f2;
}

.ov-map-topbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 64px 16px;
  border-bottom: 1px solid #dde8f2;
  background: #fff;
  flex-wrap: wrap; gap: 12px;
}
.ov-map-title {
  display: flex; align-items: center; gap: 10px;
  font-size: 1.1rem; font-weight: 800; color: var(--text1);
  letter-spacing: -0.01em;
}

.ov-map-tabs {
  display: flex; gap: 6px; background: #f0f5fb;
  border-radius: 10px; padding: 4px;
  border: 1px solid #dde8f2;
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

/* SVG world map container */
.ov-world-wrap {
  position: relative;
  width: 100%;
  border-radius: 14px; overflow: hidden;
  box-shadow: 0 6px 32px rgba(30,80,140,0.13);
  border: 1px solid #d0e0ef;
}
.ov-world-svg {
  display: block; width: 100%; height: auto;
}

/* Domestic map */
.ov-domestic-wrap { background: #f0f6fb; }
.ov-domestic-img {
  width: 100%; display: block; object-fit: contain;
  max-height: 440px;
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
