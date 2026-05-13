<template>
<div class="cases-page">
<div class="mesh-bg"></div>

<!-- NAV -->
<nav class="au-nav">
  <div class="nav-logo">
    <span class="logo-chip">CSI</span>
    中软国际 · 能力库
  </div>
  <div class="nav-links">
    <a href="/zh/">首页</a>
    <a href="/zh/miniapp/">小程序方案</a>
    <a href="/zh/cases/" class="active">成功案例</a>
    <a href="/zh/ai/">AI创新工坊</a>
    <a href="/zh/overseas/">海外布局</a>
    <a href="/zh/business/cms/">解决方案</a>
  </div>
  <button class="nav-cta" onclick="window.location.href='/en/'">English</button>
  <button class="nav-hamburger" id="nav-hamburger-cases" aria-label="菜单">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="nav-drawer" id="nav-drawer-cases">
  <a href="/zh/">首页</a>
  <a href="/zh/miniapp/">小程序方案</a>
  <a href="/zh/cases/">成功案例</a>
  <a href="/zh/ai/">AI创新工坊</a>
  <a href="/zh/overseas/">海外布局</a>
  <a href="/zh/business/cms/">解决方案</a>
  <a href="/en/" class="nav-drawer-lang">English</a>
</div>

<!-- HERO -->
<div class="cases-hero">
  <div class="hero-orb orb-a"></div>
  <div class="hero-orb orb-b"></div>
  <div class="hero-orb orb-c"></div>
  <div class="hero-inner">
    <div class="hero-pill"><span class="pill-dot"></span>Success Cases · 全球落地实证</div>
    <h1>五大标杆案例<br><span class="shine">覆盖亚非欧三大洲</span></h1>
    <p class="hero-sub">从东非 Mobile Money 到东南亚超级应用，从亚投行数字化平台到国际泳联全场景运营——中软国际携手蚂蚁集团、华为，深耕金融科技与数字化服务全球落地。</p>
    <div class="hero-badges">
      <span class="h-badge"><span class="flag">🇪🇹</span> 埃塞俄比亚 · Siinqee Bank</span>
      <span class="h-badge"><span class="flag">🇲🇾</span> 马来西亚 · KIBB KDi GO</span>
      <span class="h-badge"><span class="flag">🇮🇩</span> 印尼 · BNI Bank</span>
      <span class="h-badge"><span class="flag">🌏</span> 亚投行 ITP · 110国</span>
      <span class="h-badge"><span class="flag">🏊</span> 阿里 · 国际泳联</span>
    </div>
  </div>
</div>

<!-- CASES BODY -->
<div class="cases-body">

  <!-- ① Siinqee Bank -->
  <div class="case-block reveal" id="siinqee">
    <div class="case-card" style="--accent:#10b981;--accent-rgb:16,185,129;">
      <div class="case-top">
        <div class="case-info">
          <div class="case-eyebrow">
            <span class="flag-tag">🇪🇹 埃塞俄比亚</span>
            <span class="status-tag" style="background:rgba(16,185,129,0.12);color:#059669;border-color:rgba(16,185,129,0.3);">
              <i class="dot" style="background:#10b981;"></i>进行中 · 2025
            </span>
          </div>
          <h2>Siinqee Bank<br><em>Mobile Money App</em></h2>
          <div class="tag-row">
            <span class="ctag green">Mobile Money</span>
            <span class="ctag green">华为 Baseline</span>
            <span class="ctag green">App 定制开发</span>
          </div>
          <p class="case-desc">Siinqee Bank 是<strong>埃塞俄比亚领先的金融服务集团</strong>，致力于打造全国性 Mobile Money 数字通道。中软国际基于华为 OOTB 基线 APP，提供原生 APP + 小程序定制开发，将品牌、多语言、监管需求与华为底座无缝融合。</p>
          <div class="feat-list">
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>多语言支持，覆盖埃塞多民族用户</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>品牌定制：主题色 / Logo / Banner 全套适配</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>e-KYC 对接：OCR 识别 · 活体检测 · 人证比对</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>AppCube 后端逻辑与流程编排开发</div>
          </div>
          <div class="partner-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            合作伙伴：华为
          </div>
        </div>
        <div class="case-screens phone-screens">
          <div class="phone-wrap">
            <img src="/cases/siinqee-onboard.png" alt="Siinqee 引导页" class="phone-img" />
          </div>
          <div class="phone-wrap">
            <img src="/cases/siinqee-home.png" alt="Siinqee 首页" class="phone-img" />
          </div>
          <div class="phone-wrap">
            <img src="/cases/siinqee-home2.png" alt="Siinqee 余额页" class="phone-img" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ② KIBB KDi GO -->
  <div class="case-block reveal" id="kibb">
    <div class="case-card" style="--accent:#6366f1;--accent-rgb:99,102,241;">
      <div class="case-top reverse">
        <div class="case-screens phone-screens">
          <div class="phone-wrap">
            <img src="/cases/kibb-transfer.png" alt="KDi GO 转账成功" class="phone-img" />
          </div>
          <div class="phone-wrap">
            <img src="/cases/kibb-accounts.png" alt="KDi GO 银行账户" class="phone-img" />
          </div>
          <div class="arch-thumb">
            <img src="/cases/kibb-arch.png" alt="KDi GO 架构图" style="width:100%;border-radius:10px;border:1px solid rgba(99,102,241,0.20);" />
            <div class="arch-label">系统架构</div>
          </div>
        </div>
        <div class="case-info">
          <div class="case-eyebrow">
            <span class="flag-tag">🇲🇾 马来西亚</span>
            <span class="status-tag" style="background:rgba(99,102,241,0.12);color:#4f46e5;border-color:rgba(99,102,241,0.3);">
              <i class="dot" style="background:#6366f1;"></i>已上线 · 2022
            </span>
          </div>
          <h2>KIBB Bank<br><em>KDi GO Super App</em></h2>
          <div class="tag-row">
            <span class="ctag indigo">Super App</span>
            <span class="ctag indigo">mPaaS</span>
            <span class="ctag indigo">投资理财</span>
          </div>
          <p class="case-desc">2022 年 10 月起，中软国际与 Kenanga Bank（KIBB）基于<strong>蚂蚁 mPaaS 平台</strong>合作上线 KDi GO，让投资者在单一 App 内完成基金理财、日常支付与股票交易，并获得 AI 智能投顾支持。</p>
          <div class="metrics-row">
            <div class="metric">
              <div class="mval" style="color:#6366f1;">3</div>
              <div class="mlab">核心金融场景<br>投资·支付·股票</div>
            </div>
            <div class="metric">
              <div class="mval" style="color:#6366f1;">2022</div>
              <div class="mlab">正式上线<br>持续迭代至今</div>
            </div>
            <div class="metric">
              <div class="mval" style="color:#6366f1;">持续</div>
              <div class="mlab">IT 建设<br>服务支持中</div>
            </div>
          </div>
          <div class="tech-row">
            <span>蚂蚁 mPaaS</span><span>Java</span><span>Node.JS</span><span>AWS</span><span>Cloudentity</span><span>N8N</span>
          </div>
          <div class="partner-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            合作伙伴：蚂蚁集团 mPaaS
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ③ BNI Bank -->
  <div class="case-block reveal" id="bni">
    <div class="case-card" style="--accent:#0891b2;--accent-rgb:8,145,178;">
      <div class="case-top">
        <div class="case-info">
          <div class="case-eyebrow">
            <span class="flag-tag">🇮🇩 印度尼西亚</span>
            <span class="status-tag" style="background:rgba(8,145,178,0.12);color:#0369a1;border-color:rgba(8,145,178,0.3);">
              <i class="dot" style="background:#0891b2;"></i>已上线 · 成效显著
            </span>
          </div>
          <h2>BNI Bank<br><em>Super App 数字化转型</em></h2>
          <div class="tag-row">
            <span class="ctag cyan">Super App</span>
            <span class="ctag cyan">财富管理</span>
            <span class="ctag cyan">定制开发</span>
          </div>
          <p class="case-desc">印尼 BNI 银行委托中软国际打造定制化<strong>超级应用解决方案</strong>，将个人财务、财富管理、会员忠诚度及客户互动功能整合至统一平台。上线首年即实现存量客户 70% 渗透率，月活突破 230 万，同比增长 55%。</p>
          <div class="metrics-row">
            <div class="metric">
              <div class="mval" style="color:#0891b2;">70%</div>
              <div class="mlab">存量客户渗透率<br>上线首年</div>
            </div>
            <div class="metric">
              <div class="mval" style="color:#0891b2;">230万</div>
              <div class="mlab">月活跃用户<br>MAU</div>
            </div>
            <div class="metric">
              <div class="mval" style="color:#0891b2;">55%</div>
              <div class="mlab">同比增长率<br>新用户激活</div>
            </div>
          </div>
          <div class="tech-row">
            <span>个人财务</span><span>财富管理</span><span>忠诚度计划</span><span>QRIS 支付</span><span>基金申购</span>
          </div>
          <div class="partner-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            独立端到端交付
          </div>
        </div>
        <div class="case-screens phone-screens">
          <div class="phone-wrap">
            <img src="/cases/bni-funds.png" alt="BNI 基金列表" class="phone-img" />
          </div>
          <div class="phone-wrap">
            <img src="/cases/bni-risk.png" alt="BNI 投资画像" class="phone-img" />
          </div>
          <div class="phone-wrap">
            <img src="/cases/bni-recap.png" alt="BNI 财务概览" class="phone-img" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ④ 亚投行 ITP -->
  <div class="case-block reveal" id="aiib">
    <div class="case-card" style="--accent:#7c3aed;--accent-rgb:124,58,237;">
      <div class="case-top reverse">
        <div class="case-screens web-screens">
          <div class="browser-wrap">
            <div class="browser-bar">
              <span class="b-dot r"></span><span class="b-dot y"></span><span class="b-dot g"></span>
              <span class="b-addr">infratech.aiib.org · Dashboard</span>
            </div>
            <img src="/cases/aiib-dashboard.png" alt="ITP Dashboard" style="width:100%;display:block;border-radius:0 0 10px 10px;" />
          </div>
          <div class="browser-wrap" style="margin-top:12px;">
            <div class="browser-bar">
              <span class="b-dot r"></span><span class="b-dot y"></span><span class="b-dot g"></span>
              <span class="b-addr">infratech.aiib.org · Solutions</span>
            </div>
            <img src="/cases/aiib-charts.png" alt="ITP Charts" style="width:100%;display:block;border-radius:0 0 10px 10px;" />
          </div>
        </div>
        <div class="case-info">
          <div class="case-eyebrow">
            <span class="flag-tag">🌏 亚投行 AIIB</span>
            <span class="status-tag" style="background:rgba(124,58,237,0.12);color:#6d28d9;border-color:rgba(124,58,237,0.3);">
              <i class="dot" style="background:#7c3aed;"></i>已上线 · 2024.02
            </span>
          </div>
          <h2>亚投行<br><em>InfraTech Portal (ITP)</em></h2>
          <div class="tag-row">
            <span class="ctag purple">数字化平台</span>
            <span class="ctag purple">全英文交付</span>
            <span class="ctag purple">多边机构</span>
          </div>
          <p class="case-desc">亚洲基础设施投资银行（AIIB）是首个由中国倡议的多边开发机构，已覆盖<strong>全球 81% 人口、110 个成员国</strong>。依托蚂蚁 JIGSAW 项目合作，中软国际承接并交付 ITP 基础设施科技数字化管理平台，全英文交付，2024年2月正式上线。</p>
          <div class="metrics-row">
            <div class="metric">
              <div class="mval" style="color:#7c3aed;">110</div>
              <div class="mlab">成员国<br>覆盖全球</div>
            </div>
            <div class="metric">
              <div class="mval" style="color:#7c3aed;">81%</div>
              <div class="mlab">全球人口<br>GDP 占65%</div>
            </div>
            <div class="metric">
              <div class="mval" style="color:#7c3aed;">2024</div>
              <div class="mlab">正式上线<br>运维持续中</div>
            </div>
          </div>
          <div class="tech-row">
            <span>Azure AAD</span><span>SSO/IAM</span><span>AWS</span><span>MySQL</span><span>Redis</span><span>PowerBI</span>
          </div>
          <div class="partner-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            合作伙伴：蚂蚁集团（JIGSAW 项目背书）
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ⑤ 国际泳联 -->
  <div class="case-block reveal" id="fina">
    <div class="case-card" style="--accent:#f59e0b;--accent-rgb:245,158,11;">
      <div class="case-top">
        <div class="case-info">
          <div class="case-eyebrow">
            <span class="flag-tag">🏊 瑞士 · 全球体育组织</span>
            <span class="status-tag" style="background:rgba(245,158,11,0.12);color:#b45309;border-color:rgba(245,158,11,0.3);">
              <i class="dot" style="background:#f59e0b;"></i>进行中 · 2025
            </span>
          </div>
          <h2>阿里巴巴 × 国际泳联<br><em>World Aquatics 数字化运营平台</em></h2>
          <div class="tag-row">
            <span class="ctag amber">官网重构</span>
            <span class="ctag amber">APP 开发</span>
            <span class="ctag amber">MPaaS</span>
          </div>
          <p class="case-desc">国际泳联（World Aquatics）总部位于瑞士，是全球最具影响力的水上运动组织。中软国际联合<strong>蚂蚁集团、阿里巴巴</strong>，重构官网与后台，拓展 APP 移动端，实现"官网 + APP"数据互通与用户统一运营。</p>
          <div class="feat-list">
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>响应式官网重构 · 新一代 CMS · 精细化会员权限</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>基于蚂蚁 MPaaS 平台：推送 · 小程序 · 数据分析 · 智能投放</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>赛事管理 · 全球会员服务 · 精准营销转化</div>
          </div>
          <div class="tech-row">
            <span>蚂蚁 MPaaS</span><span>小程序</span><span>CMS</span><span>数据分析</span><span>智能投放</span>
          </div>
          <div class="partner-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            三方联合：中软国际 · 蚂蚁集团 · 阿里巴巴
          </div>
        </div>
        <div class="case-screens web-screens">
          <div class="browser-wrap">
            <div class="browser-bar">
              <span class="b-dot r"></span><span class="b-dot y"></span><span class="b-dot g"></span>
              <span class="b-addr">worldaquatics.com</span>
            </div>
            <img src="/cases/fina-home.png" alt="World Aquatics 官网" style="width:100%;display:block;border-radius:0 0 10px 10px;" />
          </div>
          <div class="web-row" style="margin-top:12px;display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div class="browser-wrap">
              <div class="browser-bar" style="font-size:0.6rem;">
                <span class="b-dot r"></span><span class="b-dot y"></span><span class="b-dot g"></span>
                <span class="b-addr">World Records</span>
              </div>
              <img src="/cases/fina-records.png" alt="World Records" style="width:100%;display:block;border-radius:0 0 8px 8px;" />
            </div>
            <div class="browser-wrap">
              <div class="browser-bar" style="font-size:0.6rem;">
                <span class="b-dot r"></span><span class="b-dot y"></span><span class="b-dot g"></span>
                <span class="b-addr">Highlights</span>
              </div>
              <img src="/cases/fina-highlights.png" alt="Olympics Highlights" style="width:100%;display:block;border-radius:0 0 8px 8px;" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<!-- FOOTER -->
<footer class="au-footer">
  <div class="footer-l">中软国际 · <span>能力库</span></div>
  <div class="footer-r">© 2025 ChinaSofti Technology Service Co., Ltd.</div>
</footer>

</div>
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) } })
  }, { threshold: 0.06 })
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))

  const btn = document.getElementById('nav-hamburger-cases')
  const drawer = document.getElementById('nav-drawer-cases')
  if (btn && drawer) btn.addEventListener('click', () => { btn.classList.toggle('open'); drawer.classList.toggle('open') })
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

/* ===== NAV ===== */
.au-nav {
  position: sticky; top: 0; z-index: 300;
  display: flex; justify-content: space-between; align-items: center;
  padding: 0 72px; height: 68px;
  background: rgba(255,255,255,0.92); backdrop-filter: blur(28px) saturate(180%);
  -webkit-backdrop-filter: blur(28px) saturate(180%);
  border-bottom: 1px solid rgba(0,0,0,0.08);
}
.nav-logo { display: flex; align-items: center; gap: 12px; font-weight: 800; font-size: 1.05rem; color: #0f172a; }
.logo-chip { background: linear-gradient(135deg,#6366f1,#a78bfa); color:#fff; padding:5px 11px; border-radius:8px; font-size:0.68rem; font-weight:900; letter-spacing:0.08em; }
.nav-links { display: flex; gap: 28px; }
.nav-links a { font-size: 0.9rem; font-weight: 600; color: rgba(15,23,42,0.55); text-decoration: none; transition: color .2s; }
.nav-links a:hover, .nav-links a.active { color: #6366f1; }
.nav-cta { background: linear-gradient(135deg,#6366f1,#a78bfa); color:#fff; border:none; border-radius:10px; padding:9px 22px; font-size:0.85rem; font-weight:700; cursor:pointer; }
.nav-hamburger { display:none; flex-direction:column; justify-content:center; gap:5px; background:none; border:none; cursor:pointer; padding:8px; }
.nav-hamburger span { display:block; width:22px; height:2px; background:rgba(15,23,42,0.55); border-radius:2px; transition:all .25s; }
.nav-hamburger.open span:nth-child(1) { transform:rotate(45deg) translate(5px,5px); }
.nav-hamburger.open span:nth-child(2) { opacity:0; }
.nav-hamburger.open span:nth-child(3) { transform:rotate(-45deg) translate(5px,-5px); }
.nav-drawer { display:none; position:fixed; top:68px; left:0; right:0; z-index:299; background:rgba(255,255,255,0.97); backdrop-filter:blur(32px); flex-direction:column; padding:8px 0; border-bottom:1px solid rgba(0,0,0,0.08); }
.nav-drawer.open { display:flex; }
.nav-drawer a { padding:14px 24px; font-size:1rem; font-weight:600; color:rgba(15,23,42,0.65); text-decoration:none; border-bottom:1px solid rgba(0,0,0,0.06); }
.nav-drawer a:hover { color:#6366f1; background:rgba(99,102,241,0.05); }
.nav-drawer-lang { color:#6366f1 !important; }

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
  .au-nav { padding:0 32px; }
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
  .au-nav { padding:0 16px; height:58px; }
  .nav-links { display:none; }
  .nav-hamburger { display:flex; }
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
