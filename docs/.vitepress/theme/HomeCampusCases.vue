<template>
<div class="cpc-page">
<div class="mesh-bg"></div>

<NavBar active="cases" />

<!-- HERO -->
<div class="cpc-hero">
  <div class="hero-orb orb-a"></div>
  <div class="hero-orb orb-b"></div>
  <div class="hero-orb orb-c"></div>
  <div class="hero-inner">
    <div class="hero-pill"><span class="pill-dot"></span>Smart Campus Cases · 智慧园区落地实证</div>
    <h1>智慧园区<br><span class="shine">IoT + AI 数字化落地</span></h1>
    <p class="hero-sub">从香港启德体育园 IOC 综合运营管控，到马来西亚沙捞越 SIOC 智慧城市平台——中软国际联合华为，将 AIoT 感知、大数据分析与智慧运营能力真正落地于海外园区与城市。</p>
    <div class="hero-badges">
      <span class="h-badge"><span class="flag">🇭🇰</span> 香港 · 启德体育园 IOC + PSIM</span>
      <span class="h-badge"><span class="flag">🇲🇾</span> 马来西亚沙捞越 · SIOC 智慧城市平台</span>
    </div>
  </div>
</div>

<div class="cpc-body">

  <!-- ① HK Kai Tak Sports Park -->
  <div class="case-block reveal" id="kaitak">
    <div class="case-card" style="--accent:#6366f1;--accent-rgb:99,102,241;">

      <!-- 横幅：园区实景作背景 -->
      <div class="case-banner kaitak-banner">
        <div class="banner-content">
          <div class="banner-left">
            <div class="banner-eyebrow">
              <span class="banner-flag">🇭🇰 香港 · 体育园区</span>
              <span class="banner-status"><i class="dot-w"></i>已上线 · 持续运营</span>
            </div>
            <h2 class="banner-title">香港启德体育园<br><em>智慧运营管控平台</em></h2>
            <div class="banner-tags">
              <span>IOC 综合运营</span><span>PSIM 安防</span><span>人流分析</span><span>华为 HCSO</span>
            </div>
          </div>
          <div class="banner-stats">
            <div class="bstat"><div class="bval">28<small>公顷</small></div><div class="blab">占地面积</div></div>
            <div class="bstat"><div class="bval">50,000<small>座</small></div><div class="blab">主场馆容量</div></div>
            <div class="bstat"><div class="bval">3</div><div class="blab">子系统交付</div></div>
            <div class="bstat"><div class="bval">10+</div><div class="blab">集成第三方</div></div>
          </div>
        </div>
      </div>

      <!-- 主体 left=info  right=screenshots -->
      <div class="case-main">
        <div class="case-info">
          <h3 class="sh">项目背景</h3>
          <p class="case-desc">香港启德体育园坐落于前启德机场旧址，占地约 <strong>28 公顷</strong>，以"东方之珠"为设计理念打造的多功能综合体育园区。园区涵盖 <strong>50,000 座主场馆</strong>、5,000 座公众体育场及 10,500 座室内场馆，另设停车场、零售区和商业区等配套设施。由于场馆分散、面积巨大、重要赛事人流密集且综合安防要求极高，运营方委托中软国际建立一套系统化、集成化、智能化的集中管理平台。</p>

          <h3 class="sh" style="margin-top:22px;">三大交付系统</h3>
          <div class="sys-cards">
            <div class="sys-card">
              <div class="sys-icon" style="background:linear-gradient(135deg,#6366f1,#818cf8);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              </div>
              <div>
                <div class="sys-name">IOC · 综合运营中心</div>
                <div class="sys-desc">人员统计、停车管理、资产管理、能耗管理、设施管理、空间管理、态势总览</div>
              </div>
            </div>
            <div class="sys-card">
              <div class="sys-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <div class="sys-name">PSIM · 安防信息管理</div>
                <div class="sys-desc">综合安防、告警管理、工单管理、视频监控、门禁集成、综合态势监控</div>
              </div>
            </div>
            <div class="sys-card">
              <div class="sys-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <div class="sys-name">People Counting · 客流分析</div>
                <div class="sys-desc">人员定位、轨迹追踪、会员忠诚度分析、停留时长分析、区域热力图统计</div>
              </div>
            </div>
          </div>

          <h3 class="sh" style="margin-top:22px;">核心能力亮点</h3>
          <div class="feat-list">
            <div class="feat"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>基于<strong>华为 App Engine + HCSO</strong>，融合 DAYU 数字平台与 ROMA 集成总线</div>
            <div class="feat"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>对接门票系统、场馆预订、CCMS、EV 充电、门禁、停车、RTLS 等 10+ 子系统</div>
            <div class="feat"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>双 APP 端：<strong>MyKE APP</strong>（管理员运营）+ <strong>KTSP APP</strong>（公众访客端）</div>
            <div class="feat"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>Video AI 分析 + RTLS 实时定位，结合 GIS 平台实现可视化全局管控</div>
            <div class="feat"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>符合 GDPR，安全加密存储，统一平台共享数据，开放资源接口</div>
          </div>

          <div class="tech-row" style="margin-top:18px;">
            <span>华为 HCSO</span><span>DAYU</span><span>ROMA</span><span>GIS</span><span>IAM</span><span>Video AI</span><span>RTLS</span><span>IoT</span>
          </div>
          <div class="partner-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            合作伙伴：华为云 · Huawei App Engine
          </div>
        </div>

        <!-- 右侧：大截图 + 系统架构图 -->
        <div class="case-screens">
          <div class="scr-label">IOC 运营管控大屏</div>
          <div class="browser-wrap">
            <div class="browser-bar">
              <span class="b-dot r"></span><span class="b-dot y"></span><span class="b-dot g"></span>
              <span class="b-addr">ktsp-ioc.hk · Integrated Operation Center</span>
            </div>
            <img src="/cases/campus-kaitak-dashboard.png" alt="启德IOC大屏" class="scr-img-full" />
          </div>

          <!-- HTML 架构图 -->
          <div class="scr-label" style="margin-top:18px;">系统架构（基于华为 HCSO）</div>
          <div class="ktsp-arch">
            <div class="arch-band" style="background:rgba(99,102,241,0.12);border-color:rgba(99,102,241,0.30);">
              <div class="aband-label" style="color:#6366f1;border-color:rgba(99,102,241,0.25);">应用层</div>
              <div class="aband-chips">
                <span class="achip" style="border-color:rgba(99,102,241,0.35);color:#6366f1;">MyKE APP</span>
                <span class="achip" style="border-color:rgba(99,102,241,0.35);color:#6366f1;">KTSP APP</span>
                <span class="achip" style="border-color:rgba(99,102,241,0.35);color:#6366f1;">PC Portal</span>
              </div>
            </div>
            <div class="arch-conn">▾ ▾ ▾ ▾ ▾</div>
            <div class="arch-band" style="background:rgba(124,58,237,0.10);border-color:rgba(124,58,237,0.28);">
              <div class="aband-label" style="color:#7c3aed;border-color:rgba(124,58,237,0.22);">平台层</div>
              <div class="aband-chips">
                <span class="achip" style="border-color:rgba(124,58,237,0.35);color:#7c3aed;">DAYU Platform</span>
                <span class="achip" style="border-color:rgba(124,58,237,0.35);color:#7c3aed;">ROMA 集成总线</span>
                <span class="achip" style="border-color:rgba(124,58,237,0.35);color:#7c3aed;">GIS</span>
                <span class="achip" style="border-color:rgba(124,58,237,0.35);color:#7c3aed;">IAM</span>
                <span class="achip" style="border-color:rgba(124,58,237,0.35);color:#7c3aed;">Big Data</span>
              </div>
            </div>
            <div class="arch-conn">▾ ▾ ▾ ▾ ▾</div>
            <div class="arch-band" style="background:rgba(8,145,178,0.10);border-color:rgba(8,145,178,0.28);">
              <div class="aband-label" style="color:#0891b2;border-color:rgba(8,145,178,0.22);">集成层</div>
              <div class="aband-chips">
                <span class="achip" style="border-color:rgba(8,145,178,0.35);color:#0891b2;">门票系统</span>
                <span class="achip" style="border-color:rgba(8,145,178,0.35);color:#0891b2;">场馆预订</span>
                <span class="achip" style="border-color:rgba(8,145,178,0.35);color:#0891b2;">CCMS</span>
                <span class="achip" style="border-color:rgba(8,145,178,0.35);color:#0891b2;">停车管理</span>
                <span class="achip" style="border-color:rgba(8,145,178,0.35);color:#0891b2;">EV 充电</span>
                <span class="achip" style="border-color:rgba(8,145,178,0.35);color:#0891b2;">门禁 / RTLS</span>
                <span class="achip" style="border-color:rgba(8,145,178,0.35);color:#0891b2;">VAS / 视频 AI</span>
              </div>
            </div>
            <div class="arch-conn">▾ ▾ ▾ ▾ ▾</div>
            <div class="arch-band" style="background:rgba(71,85,105,0.08);border-color:rgba(71,85,105,0.22);">
              <div class="aband-label" style="color:#475569;border-color:rgba(71,85,105,0.20);">基础设施</div>
              <div class="aband-chips">
                <span class="achip" style="border-color:rgba(71,85,105,0.30);color:#475569;">HCSO · ECS</span>
                <span class="achip" style="border-color:rgba(71,85,105,0.30);color:#475569;">RDS</span>
                <span class="achip" style="border-color:rgba(71,85,105,0.30);color:#475569;">EIP</span>
                <span class="achip" style="border-color:rgba(71,85,105,0.30);color:#475569;">DWS</span>
                <span class="achip" style="border-color:rgba(71,85,105,0.30);color:#475569;">IoT</span>
                <span class="achip" style="border-color:rgba(71,85,105,0.30);color:#475569;">Network</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- ② Sarawak SIOC -->
  <div class="case-block reveal" id="sarawak">
    <div class="case-card" style="--accent:#0891b2;--accent-rgb:8,145,178;">

      <!-- 横幅：IOC 监控大屏作背景 -->
      <div class="case-banner sarawak-banner">
        <div class="banner-content">
          <div class="banner-left">
            <div class="banner-eyebrow">
              <span class="banner-flag">🇲🇾 马来西亚沙捞越 · 智慧城市</span>
              <span class="banner-status"><i class="dot-w" style="background:#06b6d4;box-shadow:0 0 8px #06b6d4;"></i>已上线 · 2021.12</span>
            </div>
            <h2 class="banner-title">沙捞越 SIOC<br><em>智慧城市综合运营中心</em></h2>
            <div class="banner-tags">
              <span>IOC-as-a-Service</span><span>视频 AI 安防</span><span>智能交通</span><span>Citizen APP</span>
            </div>
          </div>
          <div class="banner-stats">
            <div class="bstat"><div class="bval">9<small>个月</small></div><div class="blab">立项到验收</div></div>
            <div class="bstat"><div class="bval">6<small>大</small></div><div class="blab">核心服务能力</div></div>
            <div class="bstat"><div class="bval">首个</div><div class="blab">CSI 海外智慧城市</div></div>
            <div class="bstat"><div class="bval">政府<small>级</small></div><div class="blab">SMA 战略项目</div></div>
          </div>
        </div>
      </div>

      <!-- 主体 reverse：left=screenshots  right=info -->
      <div class="case-main case-main-rev">

        <!-- 右侧info（因 reverse 在 DOM 中放左边） -->
        <div class="case-info" style="border-right:none;border-left:1px solid rgba(0,0,0,0.07);">
          <h3 class="sh">项目背景</h3>
          <p class="case-desc">沙捞越多媒体管理局（SMA）是马来西亚最重要的政府数字多媒体监管机构，依托马来西亚第 12 个五年计划及《智慧城市框架》推进沙捞越地区数字化建设。SIOC 项目是中软国际智慧城市解决方案<strong>首次海外落地</strong>，也是 SMA 在智慧城市领域的首次实践，以 <strong>"IOC-as-a-Service"</strong> 模式为政府管理者提供一站式城市运营服务，并通过 Citizen APP 为市民提供便捷的智慧城市体验。</p>

          <h3 class="sh" style="margin-top:20px;">六大核心服务</h3>
          <div class="benefit-grid">
            <div class="benefit-item">
              <div class="bico" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div><div class="bt">公共安全保障</div><div class="bs">视频 AI + 人脸识别，快速处置公共区域群体事件</div></div>
            </div>
            <div class="benefit-item">
              <div class="bico" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              </div>
              <div><div class="bt">便民报障入口</div><div class="bs">市民一键上报公共设施故障，实时追踪维修进度</div></div>
            </div>
            <div class="benefit-item">
              <div class="bico" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.4 19.79 19.79 0 0 1 1.61 4.88 2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div><div class="bt">公共紧急救援</div><div class="bs">紧急情况一键呼叫呼叫中心，保障人身安全</div></div>
            </div>
            <div class="benefit-item">
              <div class="bico" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
              </div>
              <div><div class="bt">重要公告发布</div><div class="bs">授权人员向公众发布紧急通知、重要会议公告</div></div>
            </div>
            <div class="benefit-item">
              <div class="bico" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
              </div>
              <div><div class="bt">旅游景点推广</div><div class="bs">整合外部数据，APP 内推送本地热门景点与旅游套餐</div></div>
            </div>
            <div class="benefit-item">
              <div class="bico" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>
              </div>
              <div><div class="bt">移动支付体验</div><div class="bs">集成 Sarawak Pay，手机端缴纳行政费用与账单</div></div>
            </div>
          </div>

          <h3 class="sh" style="margin-top:20px;">交付时间线</h3>
          <div class="timeline">
            <div class="tl-item"><div class="tl-dot"></div><div><div class="tl-date">2021.03</div><div class="tl-text">项目启动 · 需求调研与确认</div></div></div>
            <div class="tl-item"><div class="tl-dot"></div><div><div class="tl-date">2021.05</div><div class="tl-text">产品设计确认 · 系统开发启动</div></div></div>
            <div class="tl-item"><div class="tl-dot"></div><div><div class="tl-date">2021.10</div><div class="tl-text">系统开发完成 · UAT 测试及文档</div></div></div>
            <div class="tl-item"><div class="tl-dot"></div><div><div class="tl-date">2021.11</div><div class="tl-text">用户培训 · 系统正式上线</div></div></div>
            <div class="tl-item tl-last"><div class="tl-dot tl-green"></div><div><div class="tl-date">2021.12</div><div class="tl-text">项目验收完成 ✓</div></div></div>
          </div>

          <div class="tech-row" style="margin-top:16px;">
            <span>IoT 感知</span><span>视频 AI</span><span>人脸识别</span><span>GIS</span><span>大数据</span><span>Citizen APP</span><span>Sarawak Pay</span>
          </div>
          <div class="partner-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            客户：沙捞越多媒体管理局（SMA）
          </div>
        </div>

        <!-- 左侧大截图（reverse 时视觉在右） -->
        <div class="case-screens">
          <div class="scr-label">SIOC 平台功能总览</div>
          <div class="scr-main-frame">
            <img src="/cases/campus-sarawak-func.png" alt="SIOC功能总览" class="scr-img-hero" />
          </div>

          <div class="scr-label" style="margin-top:16px;">IOC 监控大屏</div>
          <div class="scr-duo">
            <div class="scr-duo-item">
              <img src="/cases/campus-sarawak-ioc1.jpeg" alt="SIOC监控视图一" class="scr-duo-img" />
              <div class="scr-duo-cap">实时监控 · 综合态势</div>
            </div>
            <div class="scr-duo-item">
              <img src="/cases/campus-sarawak-ioc2.jpeg" alt="SIOC监控视图二" class="scr-duo-img" />
              <div class="scr-duo-cap">事件处置 · 告警管理</div>
            </div>
          </div>

          <div class="scr-label" style="margin-top:16px;">专项子系统截图</div>
          <div class="scr-trio">
            <div class="scr-trio-item">
              <img src="/cases/campus-sarawak-security.jpeg" alt="安防监控" class="scr-trio-img" />
              <div class="scr-duo-cap">安防 · 人脸识别</div>
            </div>
            <div class="scr-trio-item">
              <img src="/cases/campus-sarawak-traffic.jpeg" alt="交通监控" class="scr-trio-img" />
              <div class="scr-duo-cap">交通 · 车辆识别</div>
            </div>
            <div class="scr-trio-item">
              <img src="/cases/campus-sarawak-app.jpeg" alt="Citizen APP" class="scr-trio-img" />
              <div class="scr-duo-cap">Citizen APP</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</div>

<footer class="cpc-footer">
  <div class="footer-l">中软国际 · <span>能力库</span></div>
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
  }, { threshold: 0.04 })
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
})
</script>

<style scoped>
.cpc-page {
  font-family: 'PingFang SC','Microsoft YaHei','Segoe UI',sans-serif;
  background: #f0f4ff; color: #0f172a;
  overflow-x: hidden; min-height: 100vh; position: relative;
}
.mesh-bg {
  position: fixed; inset: 0; pointer-events: none; z-index: 0;
  background:
    radial-gradient(ellipse 80% 60% at 20% -10%, rgba(99,102,241,0.07) 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 80% 110%, rgba(8,145,178,0.06) 0%, transparent 60%);
}

/* ===== HERO ===== */
.cpc-hero {
  position: relative; z-index: 1;
  background: linear-gradient(140deg,#060e20 0%,#0a1a30 30%,#10245a 60%,#071830 100%);
  padding: 100px 72px 80px; overflow: hidden; min-height: 440px;
}
.hero-orb { position:absolute; border-radius:50%; filter:blur(90px); pointer-events:none; }
.orb-a { width:500px; height:500px; background:rgba(99,102,241,0.30); top:-150px; right:-50px; animation:orbF 9s ease-in-out infinite alternate; }
.orb-b { width:340px; height:340px; background:rgba(8,145,178,0.22); bottom:-90px; left:8%; animation:orbF 11s ease-in-out infinite alternate-reverse; }
.orb-c { width:240px; height:240px; background:rgba(124,58,237,0.20); top:30%; left:48%; animation:orbF 7s ease-in-out infinite alternate; }
@keyframes orbF { 0%{transform:translate(0,0)} 100%{transform:translate(28px,18px)} }
.hero-inner { max-width: 920px; margin: 0 auto; position: relative; z-index: 2; }
.hero-pill { display:inline-flex; align-items:center; gap:9px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.16); border-radius:999px; padding:8px 20px; margin-bottom:28px; font-size:0.72rem; font-weight:700; letter-spacing:0.12em; color:rgba(255,255,255,0.75); text-transform:uppercase; backdrop-filter:blur(16px); }
.pill-dot { width:8px; height:8px; border-radius:50%; background:#06b6d4; box-shadow:0 0 10px #06b6d4; animation:pulseDot 2s ease infinite; }
@keyframes pulseDot { 0%,100%{box-shadow:0 0 4px #06b6d4} 50%{box-shadow:0 0 14px #06b6d4,0 0 28px rgba(6,182,212,0.4)} }
.cpc-hero h1 { font-size:clamp(2.2rem,4.5vw,3.8rem); font-weight:900; line-height:1.06; letter-spacing:-0.03em; color:#fff; margin-bottom:18px; }
.shine { background:linear-gradient(90deg,#818cf8,#67e8f9,#a78bfa,#38bdf8,#818cf8); background-size:400%; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; animation:shineAnim 6s linear infinite; }
@keyframes shineAnim { 0%{background-position:0%} 100%{background-position:400%} }
.hero-sub { font-size:0.98rem; color:rgba(255,255,255,0.55); line-height:1.8; max-width:660px; margin-bottom:26px; }
.hero-badges { display:flex; flex-wrap:wrap; gap:9px; }
.h-badge { display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); border-radius:10px; padding:7px 16px; font-size:0.8rem; color:rgba(255,255,255,0.85); backdrop-filter:blur(12px); }
.flag { font-size:1.05rem; }

/* ===== BODY ===== */
.cpc-body { position:relative; z-index:1; max-width:1200px; margin:0 auto; padding:56px 72px 100px; display:flex; flex-direction:column; gap:44px; }
.reveal { opacity:0; transform:translateY(36px); transition:opacity .75s ease,transform .75s ease; }
.reveal.in { opacity:1; transform:none; }

/* ===== CARD ===== */
.case-card {
  background: white;
  border: 1px solid rgba(29,78,216,0.09);
  border-top: 4px solid var(--accent);
  border-radius: 22px; overflow: hidden;
  box-shadow: 0 4px 24px rgba(29,78,216,0.08);
  transition: box-shadow .3s;
}
.case-card:hover { box-shadow: 0 12px 40px rgba(var(--accent-rgb),0.13); }

/* ===== BANNER with photo bg ===== */
.case-banner {
  position: relative; overflow: hidden;
  padding: 30px 40px;
}
.kaitak-banner {
  background:
    linear-gradient(135deg, rgba(30,27,75,0.82) 0%, rgba(49,46,129,0.80) 45%, rgba(67,56,202,0.78) 100%),
    url('/cases/campus-kaitak-stadium.jpeg') center / cover no-repeat;
}
.sarawak-banner {
  background:
    linear-gradient(135deg, rgba(7,21,32,0.88) 0%, rgba(12,42,64,0.84) 50%, rgba(14,64,96,0.80) 100%),
    url('/cases/campus-sarawak-ioc1.jpeg') center / cover no-repeat;
}
.banner-content { display:flex; align-items:flex-start; justify-content:space-between; gap:28px; }
.banner-left { flex:1; }
.banner-eyebrow { display:flex; align-items:center; gap:12px; margin-bottom:10px; flex-wrap:wrap; }
.banner-flag { font-size:0.78rem; font-weight:700; color:rgba(255,255,255,0.60); letter-spacing:0.06em; }
.banner-status { display:inline-flex; align-items:center; gap:6px; font-size:0.72rem; font-weight:700; color:rgba(255,255,255,0.55); }
.dot-w { width:7px; height:7px; border-radius:50%; background:#4ade80; box-shadow:0 0 8px #4ade80; flex-shrink:0; animation:pulseDot 2s ease infinite; }
.banner-title { font-size:1.55rem; font-weight:900; color:#fff; line-height:1.15; margin:0 0 14px; }
.banner-title em { font-size:0.92rem; font-weight:500; color:rgba(255,255,255,0.48); font-style:normal; display:block; margin-top:4px; }
.banner-tags { display:flex; flex-wrap:wrap; gap:8px; }
.banner-tags span { font-size:0.71rem; font-weight:700; padding:4px 12px; border-radius:999px; background:rgba(255,255,255,0.12); border:1px solid rgba(255,255,255,0.20); color:rgba(255,255,255,0.85); }
.banner-stats { display:flex; gap:0; flex-shrink:0; background:rgba(0,0,0,0.25); border-radius:14px; overflow:hidden; border:1px solid rgba(255,255,255,0.10); }
.bstat { padding:13px 20px; text-align:center; border-right:1px solid rgba(255,255,255,0.09); }
.bstat:last-child { border-right:none; }
.bval { font-size:1.4rem; font-weight:900; color:#fff; line-height:1.1; margin-bottom:4px; letter-spacing:-0.03em; }
.bval small { font-size:0.62rem; font-weight:700; color:rgba(255,255,255,0.50); margin-left:1px; letter-spacing:0; }
.blab { font-size:0.62rem; color:rgba(255,255,255,0.42); font-weight:600; line-height:1.4; white-space:nowrap; }

/* ===== MAIN GRID ===== */
.case-main { display:grid; grid-template-columns:5fr 7fr; gap:0; }
.case-main-rev { direction:rtl; }
.case-main-rev > * { direction:ltr; }
.case-info { padding:32px 36px; border-right:1px solid rgba(0,0,0,0.07); }

/* ===== INFO INTERNALS ===== */
.sh { font-size:0.75rem; font-weight:800; color:var(--accent); text-transform:uppercase; letter-spacing:0.12em; margin:0 0 12px; padding-bottom:6px; border-bottom:1px solid rgba(var(--accent-rgb),0.15); }
.case-desc { font-size:0.90rem; color:rgba(30,27,75,0.76); line-height:1.85; margin:0; }
.case-desc strong { color:#1e1b4b; font-weight:700; }

.sys-cards { display:flex; flex-direction:column; gap:9px; }
.sys-card { display:flex; align-items:flex-start; gap:11px; padding:11px 14px; border-radius:11px; border:1px solid rgba(var(--accent-rgb),0.14); background:rgba(var(--accent-rgb),0.04); }
.sys-icon { width:34px; height:34px; border-radius:9px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.sys-name { font-size:0.83rem; font-weight:800; color:#1e1b4b; margin-bottom:2px; }
.sys-desc { font-size:0.71rem; color:rgba(30,27,75,0.54); line-height:1.55; }

.feat-list { display:flex; flex-direction:column; gap:8px; }
.feat { display:flex; align-items:flex-start; gap:8px; font-size:0.84rem; color:rgba(30,27,75,0.74); line-height:1.55; }
.feat svg { flex-shrink:0; margin-top:2px; }
.feat strong { color:#1e1b4b; font-weight:700; }

.tech-row { display:flex; flex-wrap:wrap; gap:6px; }
.tech-row span { font-size:0.72rem; font-weight:600; padding:3px 9px; border-radius:7px; background:rgba(var(--accent-rgb),0.09); color:var(--accent); border:1px solid rgba(var(--accent-rgb),0.20); }

.partner-tag { display:flex; align-items:center; gap:8px; font-size:0.76rem; font-weight:700; color:rgba(30,27,75,0.44); padding-top:12px; border-top:1px solid rgba(0,0,0,0.07); margin-top:12px; }
.partner-tag svg { color:var(--accent); flex-shrink:0; }

/* benefit grid */
.benefit-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
.benefit-item { display:flex; align-items:flex-start; gap:9px; padding:9px 11px; border-radius:10px; border:1px solid rgba(8,145,178,0.14); background:rgba(8,145,178,0.04); }
.bico { width:28px; height:28px; border-radius:7px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.bt { font-size:0.78rem; font-weight:800; color:#1e1b4b; margin-bottom:2px; }
.bs { font-size:0.68rem; color:rgba(30,27,75,0.53); line-height:1.5; }

/* timeline */
.timeline { display:flex; flex-direction:column; }
.tl-item { display:flex; align-items:flex-start; gap:12px; padding:7px 0 7px 16px; border-left:2px solid rgba(8,145,178,0.25); margin-left:5px; position:relative; }
.tl-last { border-left-color:transparent; }
.tl-dot { position:absolute; left:-5px; top:12px; width:8px; height:8px; border-radius:50%; background:#0891b2; border:2px solid white; box-shadow:0 0 0 2px rgba(8,145,178,0.30); }
.tl-green { background:#10b981; box-shadow:0 0 0 2px rgba(16,185,129,0.30); }
.tl-date { font-size:0.70rem; font-weight:800; color:#0891b2; letter-spacing:0.04em; }
.tl-text { font-size:0.78rem; color:rgba(30,27,75,0.66); line-height:1.5; }

/* ===== SCREENS PANEL ===== */
.case-screens {
  padding: 24px 24px;
  background: rgba(var(--accent-rgb),0.04);
  display: flex; flex-direction: column;
  border-right: 1px solid rgba(0,0,0,0.07);
}
.case-main-rev .case-screens { border-right: none; }

.scr-label { font-size:0.65rem; font-weight:800; color:var(--accent); letter-spacing:0.12em; text-transform:uppercase; margin-bottom:8px; }

/* Kai Tak: full-width dashboard */
.browser-wrap { border-radius:10px; overflow:hidden; box-shadow:0 8px 28px rgba(0,0,0,0.18); border:1px solid rgba(0,0,0,0.10); }
.browser-bar { display:flex; align-items:center; gap:6px; padding:8px 12px; background:#f1f5f9; border-bottom:1px solid rgba(0,0,0,0.08); }
.b-dot { width:10px; height:10px; border-radius:50%; flex-shrink:0; }
.b-dot.r { background:#ff5f57; } .b-dot.y { background:#febc2e; } .b-dot.g { background:#28c840; }
.b-addr { font-size:0.62rem; color:#64748b; font-weight:500; margin-left:4px; font-family:monospace; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.scr-img-full { width:100%; display:block; object-fit:cover; object-position:top; height:280px; }

/* Kai Tak: CSS architecture diagram */
.ktsp-arch { display:flex; flex-direction:column; gap:0; border:1px solid rgba(0,0,0,0.08); border-radius:12px; overflow:hidden; }
.arch-band { padding:10px 14px; border-bottom:1px solid rgba(0,0,0,0.06); display:flex; align-items:center; gap:12px; border-left:3px solid; }
.arch-band:last-child { border-bottom:none; }
.aband-label { font-size:0.65rem; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; white-space:nowrap; min-width:46px; padding-right:12px; border-right:1px solid; }
.aband-chips { display:flex; flex-wrap:wrap; gap:5px; }
.achip { font-size:0.65rem; font-weight:600; padding:3px 9px; border-radius:6px; border:1px solid; background:rgba(255,255,255,0.6); }
.arch-conn { text-align:center; font-size:0.55rem; color:rgba(30,27,75,0.25); padding:3px 0; letter-spacing:2px; }

/* Sarawak: hero image */
.scr-main-frame { border-radius:10px; overflow:hidden; box-shadow:0 8px 28px rgba(0,0,0,0.16); }
.scr-img-hero { width:100%; display:block; object-fit:cover; object-position:top; height:280px; }

/* Sarawak: duo row */
.scr-duo { display:flex; gap:10px; }
.scr-duo-item { flex:1; min-width:0; }
.scr-duo-img { width:100%; display:block; border-radius:8px; box-shadow:0 4px 16px rgba(0,0,0,0.14); border:1px solid rgba(0,0,0,0.07); object-fit:cover; object-position:top; height:150px; }
.scr-duo-cap { font-size:0.62rem; font-weight:700; color:rgba(30,27,75,0.44); text-align:center; margin-top:5px; letter-spacing:0.04em; }

/* Sarawak: trio row */
.scr-trio { display:flex; gap:8px; }
.scr-trio-item { flex:1; min-width:0; }
.scr-trio-img { width:100%; display:block; border-radius:8px; box-shadow:0 4px 14px rgba(0,0,0,0.13); border:1px solid rgba(0,0,0,0.07); object-fit:cover; object-position:top; height:120px; }

/* ===== FOOTER ===== */
.cpc-footer { position:relative; z-index:1; background:white; border-top:1px solid rgba(29,78,216,0.08); padding:44px 72px; display:flex; justify-content:space-between; align-items:center; }
.footer-l { color:#334155; font-weight:700; font-size:0.95rem; }
.footer-l span { background:linear-gradient(90deg,#1d4ed8,#7c3aed); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
.footer-r { color:#94a3b8; font-size:0.8rem; }

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .cpc-hero { padding:80px 32px 60px; }
  .cpc-body { padding:40px 32px 80px; }
  .banner-content { flex-direction:column; gap:18px; }
  .banner-stats { align-self:flex-start; }
  .case-main, .case-main-rev { grid-template-columns:1fr; direction:ltr; }
  .case-info { border-right:none !important; border-left:none !important; border-bottom:1px solid rgba(0,0,0,0.07); }
  .case-main-rev .case-screens { order:-1; border-right:none; }
  .case-main .case-screens { border-right:none; }
  .cpc-footer { padding:36px 32px; }
}
@media (max-width: 768px) {
  .cpc-hero { padding:70px 16px 50px; min-height:auto; }
  .cpc-hero h1 { font-size:2rem; }
  .cpc-body { padding:28px 16px 60px; gap:28px; }
  .case-banner { padding:20px 20px; }
  .banner-stats { display:grid; grid-template-columns:repeat(2,1fr); width:100%; border-radius:10px; }
  .bstat { border-bottom:1px solid rgba(255,255,255,0.09); }
  .case-info { padding:22px 18px; }
  .case-screens { padding:18px 16px; }
  .benefit-grid { grid-template-columns:1fr; }
  .scr-img-full, .scr-img-hero { height:200px; }
  .scr-duo-img { height:110px; }
  .scr-trio-img { height:90px; }
  .cpc-footer { padding:24px 16px; flex-direction:column; gap:8px; text-align:center; }
}
</style>
