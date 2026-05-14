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
        Smart Campus · 智慧园区解决方案
      </div>
      <h1>智慧园区 <span class="sc-grad">数字化平台</span></h1>
      <p class="sc-hero-sub">门禁通行 · 停车管理 · 综合安防 · IOC大屏 — AI + IoT 全栈联动，打造安全高效的数字化园区，人员管理效率提升 60%</p>
      <div class="sc-hero-tags">
        <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 15s1-1 5-1 5 1 5 1"/><circle cx="12" cy="10" r="3"/></svg> 人脸识别通行</span>
        <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="17 2 12 7 7 2"/></svg> AI视频分析</span>
        <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10z"/></svg> GIS室内定位</span>
        <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> IOC综合大屏</span>
      </div>
    </div>
    <div class="sc-hero-img-wrap">
      <img src="/solutions/campus/images/sc-campus-aerial.png" alt="智慧园区" />
    </div>
  </section>

  <!-- ══════════════════════ STATS ══════════════════════ -->
  <section class="sc-stats-bar">
    <div class="sc-stats-inner">
      <div class="sc-stat-item">
        <div class="sc-stat-val"><span class="sc-counter" data-target="22">0</span><span class="sc-stat-plus">+</span></div>
        <div class="sc-stat-desc">年园区建设经验</div>
      </div>
      <div class="sc-stat-sep"></div>
      <div class="sc-stat-item">
        <div class="sc-stat-val"><span class="sc-counter" data-target="100">0</span><span class="sc-stat-plus">+</span></div>
        <div class="sc-stat-desc">成功园区项目</div>
      </div>
      <div class="sc-stat-sep"></div>
      <div class="sc-stat-item">
        <div class="sc-stat-val">8<span class="sc-stat-unit">大</span></div>
        <div class="sc-stat-desc">核心子系统</div>
      </div>
      <div class="sc-stat-sep"></div>
      <div class="sc-stat-item">
        <div class="sc-stat-val"><span class="sc-counter" data-target="30">0</span><span class="sc-stat-plus">+</span></div>
        <div class="sc-stat-desc">覆盖城市</div>
      </div>
      <div class="sc-stat-sep"></div>
      <div class="sc-stat-item">
        <div class="sc-stat-val">7×24<span class="sc-stat-unit">h</span></div>
        <div class="sc-stat-desc">运维保障</div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════ POSITIONING ══════════════════════ -->
  <section class="sc-section sc-bg-light">
    <div class="sc-container">
      <div class="sc-sec-head">
        <h2 class="sc-sec-title">产品定位</h2>
        <p class="sc-sec-sub">传统园区管理痛点 · 中软智慧园区全栈方案</p>
      </div>
      <div class="sc-pos-grid">
        <div class="sc-pos-card">
          <div class="sc-pos-icon" style="background:linear-gradient(135deg,#64748b,#94a3b8);">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
          <h3>工业 / 产业园区</h3>
          <p>人员流动大、安全风险高，管理响应迟滞</p>
          <div class="sc-pos-sep"></div>
          <div class="sc-pos-pain"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg><span>人员身份识别依赖证件，效率低下</span></div>
          <div class="sc-pos-pain"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg><span>告警响应慢，安全事件处置滞后</span></div>
          <div class="sc-pos-pain"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg><span>各子系统孤岛运行，数据无法互通</span></div>
        </div>
        <div class="sc-pos-card">
          <div class="sc-pos-icon" style="background:linear-gradient(135deg,#64748b,#94a3b8);">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          </div>
          <h3>商业 / 办公园区</h3>
          <p>访客管理繁琐、停车无序，运营效率难提升</p>
          <div class="sc-pos-sep"></div>
          <div class="sc-pos-pain"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg><span>访客登记人工耗时，体验差</span></div>
          <div class="sc-pos-pain"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg><span>停车混乱、寻位耗时，车流拥堵</span></div>
          <div class="sc-pos-pain"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg><span>缺乏统一数据视图，决策依赖人工</span></div>
        </div>
        <div class="sc-pos-card sc-pos-highlight">
          <div class="sc-pos-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
          </div>
          <h3>中软智慧园区方案</h3>
          <p>AI + IoT 全栈集成，全场景覆盖，统一运营管理</p>
          <div class="sc-pos-sep"></div>
          <div class="sc-pos-checks">
            <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> 人脸识别秒级通行，准确率99.9%+</span>
            <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> AI视频分析，告警&lt;30秒自动联动</span>
            <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> IOC一屏统览全园区实时态势</span>
            <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Welink / APP / 微信三端全打通</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════ ARCHITECTURE ══════════════════════ -->
  <section class="sc-section">
    <div class="sc-container">
      <div class="sc-sec-head">
        <h2 class="sc-sec-title">系统架构总览</h2>
        <p class="sc-sec-sub">四层联动 · 感知 / 网络 / 平台 / 应用全栈架构</p>
      </div>
      <div class="sc-arch">
        <div class="sc-arch-title-bar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/></svg>
          四层架构设计 — 感知层 / 网络层 / 平台层 / 应用层
        </div>

        <!-- 应用层 -->
        <div class="sc-arch-layer sc-alayer-app">
          <div class="sc-arch-label">应用层<br><em>APPLICATION</em></div>
          <div class="sc-arch-body">
            <div class="sc-arch-group">
              <div class="sc-arch-ghead" style="color:#0891b2;border-color:#0891b2;">园区运营</div>
              <div class="sc-arch-tags"><span class="sc-arch-tag">IOC大屏</span><span class="sc-arch-tag">管理后台</span><span class="sc-arch-tag">BI报表</span></div>
            </div>
            <div class="sc-arch-group">
              <div class="sc-arch-ghead" style="color:#0891b2;border-color:#0891b2;">移动端</div>
              <div class="sc-arch-tags"><span class="sc-arch-tag">园区APP</span><span class="sc-arch-tag">微信公众号</span><span class="sc-arch-tag">Welink</span></div>
            </div>
            <div class="sc-arch-group">
              <div class="sc-arch-ghead" style="color:#0891b2;border-color:#0891b2;">业务功能</div>
              <div class="sc-arch-tags"><span class="sc-arch-tag">门禁通行</span><span class="sc-arch-tag">访客管理</span><span class="sc-arch-tag">停车管理</span><span class="sc-arch-tag">巡逻管理</span><span class="sc-arch-tag">告警处置</span></div>
            </div>
          </div>
        </div>
        <div class="sc-arch-conn">▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾</div>

        <!-- 平台层 -->
        <div class="sc-arch-layer sc-alayer-plat">
          <div class="sc-arch-label">平台层<br><em>PLATFORM</em></div>
          <div class="sc-arch-body">
            <div class="sc-arch-plat-grid">
              <span class="sc-ptag">AI视频平台</span>
              <span class="sc-ptag">GIS空间平台</span>
              <span class="sc-ptag">IoT平台</span>
              <span class="sc-ptag">通讯平台</span>
              <span class="sc-ptag">数据仓库</span>
              <span class="sc-ptag">API网关</span>
              <span class="sc-ptag">Kafka消息队列</span>
              <span class="sc-ptag">边缘MEC节点</span>
              <span class="sc-ptag">数据分析引擎</span>
            </div>
          </div>
        </div>
        <div class="sc-arch-conn">▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾</div>

        <!-- 网络层 -->
        <div class="sc-arch-layer sc-alayer-net">
          <div class="sc-arch-label">网络层<br><em>NETWORK</em></div>
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

        <!-- 感知层 -->
        <div class="sc-arch-layer sc-alayer-sense">
          <div class="sc-arch-label">感知层<br><em>PERCEPTION</em></div>
          <div class="sc-arch-body">
            <div class="sc-arch-group">
              <div class="sc-arch-ghead" style="color:#d97706;border-color:#d97706;">安全感知</div>
              <div class="sc-arch-tags"><span class="sc-arch-tag">摄像头/NVR</span><span class="sc-arch-tag">告警传感器</span><span class="sc-arch-tag">双鉴探测器</span></div>
            </div>
            <div class="sc-arch-group">
              <div class="sc-arch-ghead" style="color:#d97706;border-color:#d97706;">通行设施</div>
              <div class="sc-arch-tags"><span class="sc-arch-tag">人脸识别闸机</span><span class="sc-arch-tag">读卡器</span><span class="sc-arch-tag">车牌识别</span></div>
            </div>
            <div class="sc-arch-group">
              <div class="sc-arch-ghead" style="color:#d97706;border-color:#d97706;">环境感知</div>
              <div class="sc-arch-tags"><span class="sc-arch-tag">停车探测器</span><span class="sc-arch-tag">消防传感器</span><span class="sc-arch-tag">IoT设备</span></div>
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
        <h2 class="sc-sec-title">四大核心系统</h2>
        <p class="sc-sec-sub">全场景覆盖 · 统一平台管理</p>
      </div>
      <div class="sc-sub-grid">
        <a href="#access" class="sc-sub-card sc-sub-teal">
          <div class="sc-sub-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
          <h4>门禁与人员管理</h4>
          <p>AI人脸识别 · 访客全流程 · 考勤统计</p>
          <span class="sc-sub-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
        </a>
        <a href="#parking" class="sc-sub-card sc-sub-cyan">
          <div class="sc-sub-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="1" y="3" width="15" height="13" rx="1"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></div>
          <h4>停车与位置服务</h4>
          <p>智能引导 · GIS室内导航 · 三维地图</p>
          <span class="sc-sub-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
        </a>
        <a href="#security" class="sc-sub-card sc-sub-blue">
          <div class="sc-sub-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
          <h4>综合安防系统</h4>
          <p>视频智能分析 · 巡逻管理 · 告警联动</p>
          <span class="sc-sub-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
        </a>
        <a href="#ioc" class="sc-sub-card sc-sub-amber">
          <div class="sc-sub-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
          <h4>IOC综合态势</h4>
          <p>全园区大屏 · 实时监控 · 数据洞察</p>
          <span class="sc-sub-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
        </a>
      </div>
    </div>
  </section>

  <!-- ══════════════════════ SECTION: 门禁与人员管理 ══════════════════════ -->
  <section id="access" class="sc-section">
    <div class="sc-container">
      <div class="sc-sec-intro sc-intro-teal">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
        门禁与人员管理 — AI驱动全流程通行管控，人员、访客、VIP一平台统一管理
      </div>
      <!-- 截图卡片组 -->
      <div class="sc-feat-grid">
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 15s1-1 5-1 5 1 5 1"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <span>人脸识别 · 无感快速通行</span>
          </div>
          <div class="sc-feat-body">
            基于深度学习的人脸识别技术，识别准确率 <strong>99.9%+</strong>，单次识别 <strong>≤300ms</strong>。员工无需刷卡，实现真正无感通行，高峰期不排队。
          </div>
          <div class="sc-screenshot-wrap">
            <img src="/solutions/campus/images/sc-face-gate.png" alt="人脸识别闸机通行" style="height:230px;object-fit:cover;object-position:center;" />
          </div>
        </div>
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <span>访客预约 · 二维码核验入场</span>
          </div>
          <div class="sc-feat-body">
            微信线上预约 → 二维码核验 → 自动授权 → 轨迹记录，全程无纸化。VIP访客一键授权特殊通行权限，体验全面升级。
          </div>
          <div class="sc-screenshot-wrap">
            <img src="/solutions/campus/images/sc-face-device.png" alt="人脸识别终端设备" style="height:230px;object-fit:cover;object-position:center;" />
          </div>
        </div>
      </div>
      <!-- 文字卡片组 -->
      <div class="sc-feat-grid" style="margin-top:18px;">
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#059669,#10b981);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <span>VIP特殊权限精细管理</span>
          </div>
          <div class="sc-feat-body">
            分级权限配置，VIP可在特定区域及时段享有免打扰专属通道。权限按<strong>日期 / 时间 / 区域</strong>精细化配置，支持临时授权与即时吊销。
          </div>
        </div>
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#059669,#10b981);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <span>人员考勤 · 实时在场统计</span>
          </div>
          <div class="sc-feat-body">
            门禁数据自动生成考勤报表，实时统计园区在场人数与区域分布。Welink 异常离场自动推送通知，<strong>员工管理效率提升60%</strong>。
          </div>
        </div>
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#059669,#10b981);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <span>多楼宇联动 · 闸机协同管控</span>
          </div>
          <div class="sc-feat-body">
            支持多栋楼宇统一管控，IOC大屏实时展示各楼宇通行态势。异常人员立即触发告警，联动闸机自动<strong>闭合拦截</strong>，守护安全边界。
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════ SECTION: 停车与位置服务 ══════════════════════ -->
  <section id="parking" class="sc-section sc-bg-light">
    <div class="sc-container">
      <div class="sc-sec-intro sc-intro-cyan">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="1"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
        停车与位置服务 — AI车位引导 + GIS三维定位，彻底解决停车难、找位慢问题
      </div>
      <div class="sc-feat-grid">
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#06b6d4,#0891b2);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <span>AI智能停车引导</span>
          </div>
          <div class="sc-feat-body">
            实时探测车位占用状态，AI算法推荐最优停车路径。剩余车位数量实时更新，<strong>大幅缩短找位时间</strong>，有效减少园区内车辆拥堵。
          </div>
          <div class="sc-screenshot-wrap">
            <img src="/solutions/campus/images/sc-parking.png" alt="智能停车场" style="height:230px;object-fit:cover;object-position:center;" />
          </div>
        </div>
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#06b6d4,#0891b2);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <span>室内精准导航 · 实时车位位置</span>
          </div>
          <div class="sc-feat-body">
            车辆入场后 APP 自动推送车位坐标，室内步行导航精准引导。基于 GIS 引擎构建三维园区地图，支持楼层切换与<strong>一键寻车</strong>。
          </div>
          <div class="sc-screenshot-wrap">
            <img src="/solutions/campus/images/sc-parking-nav.png" alt="室内停车导航系统" style="height:230px;object-fit:cover;object-position:top;" />
          </div>
        </div>
      </div>
      <!-- GIS 地图展示 -->
      <div class="sc-gis-row">
        <div class="sc-gis-img-wrap">
          <img src="/solutions/campus/images/sc-gis-map.png" alt="3D GIS园区地图" class="sc-gis-img" />
          <div class="sc-gis-badge">3D GIS 三维地图</div>
        </div>
        <div class="sc-gis-features">
          <div class="sc-gis-feat">
            <div class="sc-gis-ficon" style="background:linear-gradient(135deg,#0891b2,#1d4ed8);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <div>
              <div class="sc-gis-ft">车位预约 · APP提前锁定</div>
              <div class="sc-gis-fd">员工提前预约指定车位，避免高峰期无位可停，超时自动释放</div>
            </div>
          </div>
          <div class="sc-gis-feat">
            <div class="sc-gis-ficon" style="background:linear-gradient(135deg,#0891b2,#1d4ed8);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            </div>
            <div>
              <div class="sc-gis-ft">无感缴费 · 出场效率提升50%</div>
              <div class="sc-gis-fd">车牌识别自动计费，微信/支付宝一键支付，无需停车排队缴费</div>
            </div>
          </div>
          <div class="sc-gis-feat">
            <div class="sc-gis-ficon" style="background:linear-gradient(135deg,#059669,#10b981);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <div class="sc-gis-ft">人员轨迹 · GIS位置可视化</div>
              <div class="sc-gis-fd">安保人员携带终端打卡，GIS地图实时展示巡逻覆盖与分布态势</div>
            </div>
          </div>
          <div class="sc-gis-feat">
            <div class="sc-gis-ficon" style="background:linear-gradient(135deg,#059669,#10b981);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <div>
              <div class="sc-gis-ft">楼层切换 · 三维空间感知</div>
              <div class="sc-gis-fd">支持多楼层三维空间展示，各区域人流密度与设施状态一目了然</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════ SECTION: 综合安防 ══════════════════════ -->
  <section id="security" class="sc-section">
    <div class="sc-container">
      <div class="sc-sec-intro sc-intro-blue">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        综合安防系统 — AI视频分析 + 智能巡逻 + 多级告警联动，全方位守护园区安全
      </div>
      <div class="sc-feat-grid">
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="17 2 12 7 7 2"/></svg>
            </div>
            <span>AI视频智能监控中心</span>
          </div>
          <div class="sc-feat-body">
            部署 AI 视频分析算法，实时检测<strong>越界入侵、人群聚集、遗留物品</strong>等异常行为，自动推送告警，大幅节省人工值守成本。
          </div>
          <div class="sc-screenshot-wrap">
            <img src="/solutions/campus/images/sc-monitor.png" alt="安防监控中心" style="height:230px;object-fit:cover;object-position:center;" />
          </div>
        </div>
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <span>智能巡逻 · 路线管控</span>
          </div>
          <div class="sc-feat-body">
            GIS地图规划巡逻路线，二维码打卡确认执行，<strong>一人管控多路巡逻</strong>，替代传统人力密集型巡检模式，运维成本降低40%。
          </div>
          <div class="sc-screenshot-wrap">
            <img src="/solutions/campus/images/sc-patrol-ui.png" alt="智能巡逻管理系统" style="height:230px;object-fit:cover;object-position:top;" />
          </div>
        </div>
      </div>
      <div class="sc-feat-grid" style="margin-top:18px;">
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            </div>
            <span>多级告警联动 · 闭环处置</span>
          </div>
          <div class="sc-feat-body">
            告警自动触发：Welink推送 + 广播通知 + 闸机联动 + 录像留存五联动。重要告警 <strong>&lt;30秒</strong> 到达责任人，事件处置全程留痕。
          </div>
        </div>
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M8.56 2.9A7 7 0 0 1 19 9v4l2 2H3l2-2V9a7 7 0 0 1 3.56-6.1"/><path d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2z"/></svg>
            </div>
            <span>消防安全 · 智能预警联动</span>
          </div>
          <div class="sc-feat-body">
            双鉴探测（红外+烟感）智能联动，火情预警<strong>自动关联</strong>周边摄像头确认，一键启动疏散广播，同步关闭门禁通道，守护人员生命安全。
          </div>
        </div>
        <div class="sc-feat-card">
          <div class="sc-feat-hd">
            <div class="sc-feat-hicon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="23 11 17 11 19.5 8.5"/><polyline points="17 14 23 14 20.5 16.5"/></svg>
            </div>
            <span>人员 / 车辆轨迹追踪溯源</span>
          </div>
          <div class="sc-feat-body">
            AI人脸识别记录人员完整动线，车牌识别追踪车辆轨迹，结合GIS地图实现历史轨迹回放与<strong>异常人员快速溯源</strong>。
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════ SECTION: IOC ══════════════════════ -->
  <section id="ioc" class="sc-section sc-bg-dark">
    <div class="sc-container">
      <div class="sc-sec-head">
        <h2 class="sc-sec-title" style="color:#f1f5f9;">IOC 综合态势大屏</h2>
        <p class="sc-sec-sub" style="color:#94a3b8;">全园区一屏统览 · 空间 / 人员 / 告警 / 设备实时感知</p>
      </div>
      <div class="sc-ioc-showcase">
        <img src="/solutions/campus/images/sc-ioc-dashboard.png" alt="IOC智慧园区运营中心大屏" class="sc-ioc-img" />
      </div>
      <div class="sc-ioc-cards">
        <div class="sc-ioc-card">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <div>
            <div class="sc-ioc-ct">空间态势</div>
            <div class="sc-ioc-cd">实时展示各区域人流密度与空间利用率</div>
          </div>
        </div>
        <div class="sc-ioc-card">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
          <div>
            <div class="sc-ioc-ct">人员态势</div>
            <div class="sc-ioc-cd">在场人数、通行记录、访客状态实时一览</div>
          </div>
        </div>
        <div class="sc-ioc-card">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/></svg>
          <div>
            <div class="sc-ioc-ct">告警态势</div>
            <div class="sc-ioc-cd">实时告警事件、处置进度与历史趋势分析</div>
          </div>
        </div>
        <div class="sc-ioc-card">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          <div>
            <div class="sc-ioc-ct">设备态势</div>
            <div class="sc-ioc-cd">IoT 设备在线状态、故障预警与维护工单</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════ RESULTS ══════════════════════ -->
  <section class="sc-section sc-bg-light">
    <div class="sc-container">
      <div class="sc-sec-head">
        <h2 class="sc-sec-title">量化成果</h2>
        <p class="sc-sec-sub">真实部署案例数据 · 可量化的数字化价值</p>
      </div>
      <div class="sc-result-grid">
        <div class="sc-result-card">
          <div class="sc-result-num">60<span class="sc-ru">%</span></div>
          <div class="sc-result-label">通行效率提升</div>
          <div class="sc-result-sub">人脸识别替代证件刷卡</div>
        </div>
        <div class="sc-result-card">
          <div class="sc-result-num">75<span class="sc-ru">%</span></div>
          <div class="sc-result-label">违规事件下降</div>
          <div class="sc-result-sub">AI主动预警精准干预</div>
        </div>
        <div class="sc-result-card">
          <div class="sc-result-num">50<span class="sc-ru">%</span></div>
          <div class="sc-result-label">停车时间缩短</div>
          <div class="sc-result-sub">AI引导+车位预约</div>
        </div>
        <div class="sc-result-card">
          <div class="sc-result-num">40<span class="sc-ru">%</span></div>
          <div class="sc-result-label">运维人力节省</div>
          <div class="sc-result-sub">统一平台替代分散运维</div>
        </div>
        <div class="sc-result-card">
          <div class="sc-result-num">&lt;30<span class="sc-ru">s</span></div>
          <div class="sc-result-label">告警响应时效</div>
          <div class="sc-result-sub">多级联动自动推送</div>
        </div>
        <div class="sc-result-card">
          <div class="sc-result-num">99.9<span class="sc-ru">%</span></div>
          <div class="sc-result-label">人脸识别准确率</div>
          <div class="sc-result-sub">深度学习模型持续优化</div>
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
