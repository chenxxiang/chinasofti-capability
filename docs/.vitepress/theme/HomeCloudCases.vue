<template>
<div class="cc-page">
<div class="mesh-bg"></div>

<NavBar active="cases" />

<!-- HERO -->
<div class="cc-hero">
  <div class="hero-orb orb-a"></div>
  <div class="hero-orb orb-b"></div>
  <div class="hero-orb orb-c"></div>
  <div class="hero-inner">
    <div class="hero-pill"><span class="pill-dot"></span>Cloud Cases · 云迁移落地实证</div>
    <h1>云原生迁移<br><span class="shine">企业上云交付实证</span></h1>
    <p class="hero-sub">从数字重庆 GaussDB 多库迁移到机场集团全量上云，从广汽丰田 HCSO 云运维到四川长虹鲲鹏大数据——中软国际携手华为云，深耕企业上云全链路服务。</p>
    <div class="hero-badges">
      <span class="h-badge"><span class="flag">🏛</span> 政务 · 数字重庆 GaussDB</span>
      <span class="h-badge"><span class="flag">✈</span> 交通 · 机场全量迁移</span>
      <span class="h-badge"><span class="flag">🚗</span> 制造 · 广汽丰田运维</span>
      <span class="h-badge"><span class="flag">📡</span> 制造 · 四川长虹大数据</span>
      <span class="h-badge"><span class="flag">🌐</span> 互联网 · 太和物联网</span>
    </div>
  </div>
</div>

<!-- CASES BODY -->
<div class="cc-body">

  <!-- ① 数字重庆 GaussDB 迁移 -->
  <div class="case-block reveal" id="chongqing">
    <div class="case-card" style="--accent:#1d4ed8;--accent-rgb:29,78,216;">
      <div class="case-top">
        <div class="case-info">
          <div class="case-eyebrow">
            <span class="flag-tag">🏛 重庆市 · 数字政务</span>
            <span class="status-tag" style="background:rgba(29,78,216,0.10);color:#1e40af;border-color:rgba(29,78,216,0.28);">
              <i class="dot" style="background:#1d4ed8;"></i>已交付 · 大数据迁移
            </span>
          </div>
          <h2>数字重庆<br><em>GaussDB 多库迁移项目</em></h2>
          <div class="tag-row">
            <span class="ctag blue">GaussDB</span>
            <span class="ctag blue">大数据迁移</span>
            <span class="ctag blue">数据治理</span>
          </div>
          <p class="case-desc">结合重庆基地云客户数据库迁移需求，基于<strong>开源 Flink-CDC 和 DataX</strong> 开发 GaussDB 迁移插件，实现与 PG、MySQL、Oracle、DM、KingBase 等多数据库的实时读写互通。数据总量达 <strong>1-2 TB 级别</strong>，跨委办局与数字高铁多源汇聚。</p>
          <div class="feat-list">
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>GaussDB 支持主备模式作为源端，分布式模式作为目标端</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>异构数据库全量同步 + 增量实时迁移双轨并行</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>大数据量下性能专项设计，解决异构迁移性能瓶颈</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>插件以开源形式回馈上游社区 Flink-CDC / DataX</div>
          </div>
          <div class="metrics-row">
            <div class="metric">
              <div class="mval" style="color:#1d4ed8;">5+</div>
              <div class="mlab">异构数据库<br>全链路支持</div>
            </div>
            <div class="metric">
              <div class="mval" style="color:#1d4ed8;">1-2TB</div>
              <div class="mlab">数据迁移量<br>多源汇聚</div>
            </div>
            <div class="metric">
              <div class="mval" style="color:#1d4ed8;">实时</div>
              <div class="mlab">增量同步<br>CDC 机制</div>
            </div>
          </div>
          <div class="partner-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            合作伙伴：华为云 · GaussDB
          </div>
        </div>
        <div class="case-screens arch-screens">
          <div class="arch-frame">
            <div class="arch-caption">数据迁移架构图</div>
            <img src="/cases/cloud-chongqing-arch.png" alt="GaussDB迁移架构" class="arch-img" />
          </div>
          <div class="arch-frame" style="margin-top:12px;">
            <div class="arch-caption">数据流转全景</div>
            <img src="/cases/cloud-chongqing-arch2.png" alt="GaussDB数据流" class="arch-img" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ② 某机场集团全量业务上云 -->
  <div class="case-block reveal" id="airport">
    <div class="case-card" style="--accent:#0891b2;--accent-rgb:8,145,178;">
      <div class="case-top reverse">
        <div class="case-screens arch-screens">
          <div class="arch-frame">
            <div class="arch-caption">云上网络架构设计</div>
            <img src="/cases/cloud-airport-arch.png" alt="机场云上网络架构" class="arch-img" />
          </div>
        </div>
        <div class="case-info">
          <div class="case-eyebrow">
            <span class="flag-tag">✈ 西部机场集团 · 交通运输</span>
            <span class="status-tag" style="background:rgba(8,145,178,0.10);color:#0369a1;border-color:rgba(8,145,178,0.28);">
              <i class="dot" style="background:#0891b2;"></i>已交付 · 全量迁移
            </span>
          </div>
          <h2>某机场集团<br><em>全量业务上云迁移</em></h2>
          <div class="tag-row">
            <span class="ctag cyan">全量迁移</span>
            <span class="ctag cyan">网络安全</span>
            <span class="ctag cyan">华为公共云</span>
          </div>
          <p class="case-desc">帮助西部机场集团将全量生产业务从自有 IDC 迁移至<strong>华为公共云</strong>，打通互联网接入、安全防护与业务生产区的端到端网络架构，实现多可用区高可用部署，并通过<strong>安全三级等保</strong>认证。</p>
          <div class="feat-list">
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>DDos 防护 + WAF + 云防火墙全栈安全体系</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>VPC 多子网隔离：互联网应用区 / 安全管理区 / 业务生产区</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>EIP 弹性公网 IP + 云堡垒机统一运维管控</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>专线直连 IDC 机房，实现业务平滑割接无中断</div>
          </div>
          <div class="tech-row">
            <span>华为云 ECS</span><span>VPC</span><span>DDos</span><span>WAF</span><span>云堡垒机</span><span>EIP</span>
          </div>
          <div class="partner-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            合作伙伴：华为云
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ③ 广汽丰田 HCSO 运维 -->
  <div class="case-block reveal" id="toyota">
    <div class="case-card" style="--accent:#059669;--accent-rgb:5,150,105;">
      <div class="case-top">
        <div class="case-info">
          <div class="case-eyebrow">
            <span class="flag-tag">🚗 广汽丰田 · 制造业</span>
            <span class="status-tag" style="background:rgba(5,150,105,0.10);color:#047857;border-color:rgba(5,150,105,0.28);">
              <i class="dot" style="background:#059669;"></i>持续运维中
            </span>
          </div>
          <h2>广汽丰田<br><em>HCSO 云平台运维服务</em></h2>
          <div class="tag-row">
            <span class="ctag green">云运维</span>
            <span class="ctag green">HCSO</span>
            <span class="ctag green">混合云</span>
          </div>
          <p class="case-desc">广汽丰田基于华为 HCSO 构建混合云平台，由中软国际提供<strong>7×24 专业运维保障</strong>，涵盖日常监控、周期巡检与故障快速响应，支撑制造业核心生产系统稳定运行，同时提供中间件架构选型与规范化运维服务。</p>
          <div class="feat-list">
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>日常监控：配置、告警处理、健康检查、节点管理、性能调优</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>巡检优化：按周期发现潜在风险，出具巡检报告与改进建议</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>中间件统一管理：架构选型、版本统一、配置规范，避免环境差异</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>运维效率提升 50%，协作成本显著降低</div>
          </div>
          <div class="metrics-row">
            <div class="metric">
              <div class="mval" style="color:#059669;">50%</div>
              <div class="mlab">运维效率提升<br>自动化工具赋能</div>
            </div>
            <div class="metric">
              <div class="mval" style="color:#059669;">7×24</div>
              <div class="mlab">持续保障<br>快速响应</div>
            </div>
            <div class="metric">
              <div class="mval" style="color:#059669;">统一</div>
              <div class="mlab">中间件管控<br>版本&配置</div>
            </div>
          </div>
          <div class="partner-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            合作伙伴：华为云 HCSO
          </div>
        </div>
        <div class="case-screens arch-screens">
          <div class="arch-frame">
            <div class="arch-caption">运维监控大屏</div>
            <img src="/cases/cloud-toyota-monitor.png" alt="广汽丰田运维监控" class="arch-img" />
          </div>
          <div class="arch-frame" style="margin-top:12px;">
            <div class="arch-caption">HCSO 平台视图</div>
            <img src="/cases/cloud-toyota-ops.png" alt="HCSO云平台" class="arch-img" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ④ 四川长虹大数据上云 -->
  <div class="case-block reveal" id="changhong">
    <div class="case-card" style="--accent:#7c3aed;--accent-rgb:124,58,237;">
      <div class="case-top reverse">
        <div class="case-screens arch-screens">
          <div class="arch-frame">
            <div class="arch-caption">大数据平台架构</div>
            <img src="/cases/cloud-changhong-bigdata.png" alt="四川长虹大数据架构" class="arch-img" />
          </div>
          <div class="kp-cards">
            <div class="kp-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>
              <div><div class="kp-title">详细性能测试</div><div class="kp-sub">X86 vs ARM 全组件对比</div></div>
            </div>
            <div class="kp-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              <div><div class="kp-title">数十组件移植</div><div class="kp-sub">鲲鹏 ARM 适配改造</div></div>
            </div>
            <div class="kp-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <div><div class="kp-title">全量增量迁移</div><div class="kp-sub">VPN + DES 双路保障</div></div>
            </div>
          </div>
        </div>
        <div class="case-info">
          <div class="case-eyebrow">
            <span class="flag-tag">📡 四川长虹 · 制造业</span>
            <span class="status-tag" style="background:rgba(124,58,237,0.10);color:#6d28d9;border-color:rgba(124,58,237,0.28);">
              <i class="dot" style="background:#7c3aed;"></i>已交付 · 大数据上云
            </span>
          </div>
          <h2>四川长虹<br><em>大数据平台上云 · 鲲鹏移植</em></h2>
          <div class="tag-row">
            <span class="ctag purple">大数据</span>
            <span class="ctag purple">鲲鹏移植</span>
            <span class="ctag purple">ARM 适配</span>
          </div>
          <p class="case-desc">帮助四川长虹将大数据平台整体迁移至华为云，完成<strong>数十个大数据组件的鲲鹏 ARM 架构移植改造</strong>，并提供 X86 与 ARM 两种架构的详细性能基准测试，确保迁移后性能不降反升，数据通过 VPN + DES 全量与增量双轨同步。</p>
          <div class="feat-list">
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>X86 / ARM 双架构全组件性能对比测试，交付详细报告</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>数十个大数据组件的鲲鹏架构移植与适配改造</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>VPN + DES 服务实现数据全量迁移 + 增量同步并行</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>存算分离架构优化，动态存储扩展能力显著提升</div>
          </div>
          <div class="tech-row">
            <span>华为鲲鹏</span><span>HDFS</span><span>Hive</span><span>Spark</span><span>VPN</span><span>DES</span>
          </div>
          <div class="partner-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            合作伙伴：华为云 · 鲲鹏生态
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ⑤ 太和物联网容器化迁移 -->
  <div class="case-block reveal" id="taihe">
    <div class="case-card" style="--accent:#d97706;--accent-rgb:217,119,6;">
      <div class="case-top">
        <div class="case-info">
          <div class="case-eyebrow">
            <span class="flag-tag">🌐 太和物联网 · 互联网</span>
            <span class="status-tag" style="background:rgba(217,119,6,0.10);color:#b45309;border-color:rgba(217,119,6,0.28);">
              <i class="dot" style="background:#d97706;"></i>已交付 · 咨询迁移
            </span>
          </div>
          <h2>太和物联网<br><em>容器化上云咨询迁移</em></h2>
          <div class="tag-row">
            <span class="ctag amber">上云咨询</span>
            <span class="ctag amber">容器化</span>
            <span class="ctag amber">成本优化</span>
          </div>
          <p class="case-desc">为太和物联网提供<strong>上云咨询与架构优化</strong>服务，将原有物理机方案整体改造为基于华为云 CCE 的容器化架构。通过深度 POC 评估与资源整合规划，服务器数量从 <strong>30 台物理机压缩至 17 台虚拟机</strong>，成本显著降低，可靠性大幅提升。</p>
          <div class="feat-list">
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>架构优化：物理机改造为 CCE 容器化方案，弹性伸缩</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>成本优化：资源从 30 台服务器降至 17 台虚拟机，节省 43%</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>可靠性保障：云上高可用部署，故障自动转移</div>
            <div class="feat"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>全程咨询规划 → 方案设计 → 迁移实施 → 验收交付</div>
          </div>
          <div class="metrics-row">
            <div class="metric">
              <div class="mval" style="color:#d97706;">43%</div>
              <div class="mlab">资源成本降低<br>服务器缩减</div>
            </div>
            <div class="metric">
              <div class="mval" style="color:#d97706;">30→17</div>
              <div class="mlab">服务器数量<br>物理机→虚拟机</div>
            </div>
            <div class="metric">
              <div class="mval" style="color:#d97706;">全程</div>
              <div class="mlab">咨询到交付<br>端到端服务</div>
            </div>
          </div>
          <div class="partner-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            合作伙伴：华为云 CCE
          </div>
        </div>
        <div class="case-screens arch-screens">
          <div class="arch-frame">
            <div class="arch-caption">容器化迁移方案</div>
            <img src="/cases/cloud-taihe-iot.png" alt="太和物联网容器化架构" class="arch-img" />
          </div>
          <div class="savings-card">
            <div class="savings-title">资源节省对比</div>
            <div class="savings-bar-wrap">
              <div class="savings-label">迁移前 · 物理机</div>
              <div class="savings-bar before">
                <div class="bar-fill" style="width:100%;background:linear-gradient(90deg,#f87171,#fca5a5);"></div>
                <span>30 台</span>
              </div>
            </div>
            <div class="savings-bar-wrap">
              <div class="savings-label">迁移后 · 虚拟机</div>
              <div class="savings-bar after">
                <div class="bar-fill" style="width:56.7%;background:linear-gradient(90deg,#d97706,#fbbf24);"></div>
                <span>17 台</span>
              </div>
            </div>
            <div class="savings-note">节省 43% 资源成本</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<!-- FOOTER -->
<footer class="cc-footer">
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
  }, { threshold: 0.06 })
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
})
</script>

<style scoped>
/* ===== PAGE & MESH ===== */
.cc-page {
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
.cc-hero {
  position: relative; z-index: 1;
  background: linear-gradient(140deg,#050e28 0%,#081840 30%,#0d2060 55%,#0a2a5e 78%,#041e3a 100%);
  padding: 100px 72px 80px; overflow: hidden; min-height: 440px;
}
.hero-orb { position:absolute; border-radius:50%; filter:blur(90px); pointer-events:none; }
.orb-a { width:500px; height:500px; background:rgba(29,78,216,0.32); top:-150px; right:-50px; animation:orbF 9s ease-in-out infinite alternate; }
.orb-b { width:340px; height:340px; background:rgba(99,102,241,0.22); bottom:-90px; left:8%; animation:orbF 11s ease-in-out infinite alternate-reverse; }
.orb-c { width:240px; height:240px; background:rgba(6,182,212,0.24); top:30%; left:48%; animation:orbF 7s ease-in-out infinite alternate; }
@keyframes orbF { 0%{transform:translate(0,0)} 100%{transform:translate(28px,18px)} }
.hero-inner { max-width: 920px; margin: 0 auto; position: relative; z-index: 2; }
.hero-pill { display:inline-flex; align-items:center; gap:9px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.16); border-radius:999px; padding:8px 20px; margin-bottom:28px; font-size:0.72rem; font-weight:700; letter-spacing:0.12em; color:rgba(255,255,255,0.75); text-transform:uppercase; backdrop-filter:blur(16px); }
.pill-dot { width:8px; height:8px; border-radius:50%; background:#60a5fa; box-shadow:0 0 10px #60a5fa; animation:pulseDot 2s ease infinite; }
@keyframes pulseDot { 0%,100%{box-shadow:0 0 4px #60a5fa} 50%{box-shadow:0 0 14px #60a5fa,0 0 28px rgba(96,165,250,0.4)} }
.cc-hero h1 { font-size:clamp(2.2rem,4.5vw,3.8rem); font-weight:900; line-height:1.06; letter-spacing:-0.03em; color:#fff; margin-bottom:18px; }
.shine { background:linear-gradient(90deg,#818cf8,#67e8f9,#a78bfa,#38bdf8,#818cf8); background-size:400%; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; animation:shineAnim 6s linear infinite; }
@keyframes shineAnim { 0%{background-position:0%} 100%{background-position:400%} }
.hero-sub { font-size:0.98rem; color:rgba(255,255,255,0.55); line-height:1.8; max-width:620px; margin-bottom:26px; }
.hero-badges { display:flex; flex-wrap:wrap; gap:9px; }
.h-badge { display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); border-radius:10px; padding:7px 14px; font-size:0.8rem; color:rgba(255,255,255,0.85); backdrop-filter:blur(12px); }
.flag { font-size:1.05rem; }

/* ===== BODY ===== */
.cc-body { position:relative; z-index:1; max-width:1200px; margin:0 auto; padding:56px 72px 100px; display:flex; flex-direction:column; gap:36px; }

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
.ctag.blue { background:rgba(29,78,216,0.10);color:#1d4ed8;border-color:rgba(29,78,216,0.25); }
.ctag.cyan { background:rgba(8,145,178,0.10);color:#0369a1;border-color:rgba(8,145,178,0.25); }
.ctag.green { background:rgba(5,150,105,0.10);color:#047857;border-color:rgba(5,150,105,0.25); }
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

/* Arch diagram screenshots */
.arch-screens { gap:0; }
.arch-frame { border-radius:12px; overflow:hidden; box-shadow:0 6px 24px rgba(0,0,0,0.13); border:1px solid rgba(0,0,0,0.09); }
.arch-caption { font-size:0.68rem; font-weight:700; color:var(--accent); background:rgba(var(--accent-rgb),0.08); padding:7px 14px; border-bottom:1px solid rgba(var(--accent-rgb),0.15); letter-spacing:0.08em; text-transform:uppercase; }
.arch-img { width:100%; display:block; object-fit:cover; object-position:top; max-height:220px; }

/* KP Cards (Changhong side panel) */
.kp-cards { margin-top:16px; display:flex; flex-direction:column; gap:10px; }
.kp-item { display:flex; align-items:flex-start; gap:12px; background:rgba(var(--accent-rgb),0.06); border:1px solid rgba(var(--accent-rgb),0.15); border-radius:10px; padding:12px 16px; }
.kp-title { font-size:0.84rem; font-weight:700; color:#1e1b4b; line-height:1.3; }
.kp-sub { font-size:0.72rem; color:rgba(30,27,75,0.50); margin-top:2px; }

/* Savings card (Taihe) */
.savings-card { margin-top:16px; background:rgba(var(--accent-rgb),0.06); border:1px solid rgba(var(--accent-rgb),0.15); border-radius:12px; padding:16px 20px; }
.savings-title { font-size:0.75rem; font-weight:800; color:rgba(30,27,75,0.55); letter-spacing:0.09em; text-transform:uppercase; margin-bottom:14px; }
.savings-bar-wrap { margin-bottom:10px; }
.savings-label { font-size:0.72rem; color:rgba(30,27,75,0.55); font-weight:600; margin-bottom:5px; }
.savings-bar { height:28px; background:rgba(0,0,0,0.05); border-radius:6px; overflow:hidden; position:relative; display:flex; align-items:center; }
.bar-fill { height:100%; border-radius:6px; }
.savings-bar span { position:absolute; right:10px; font-size:0.76rem; font-weight:800; color:#1e1b4b; }
.savings-note { font-size:0.78rem; font-weight:700; color:var(--accent); text-align:center; margin-top:10px; border-top:1px solid rgba(var(--accent-rgb),0.20); padding-top:10px; }

/* ===== FOOTER ===== */
.cc-footer { position:relative; z-index:1; background:white; border-top:1px solid rgba(29,78,216,0.08); padding:44px 72px; display:flex; justify-content:space-between; align-items:center; }
.footer-l { color:#334155; font-weight:700; font-size:0.95rem; }
.footer-l span { background:linear-gradient(90deg,#1d4ed8,#7c3aed); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
.footer-r { color:#94a3b8; font-size:0.8rem; }

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .cc-hero { padding:80px 32px 60px; }
  .cc-body { padding:40px 32px 80px; }
  .case-top { grid-template-columns:1fr; }
  .case-top.reverse { direction:ltr; }
  .case-top.reverse .case-info { border-left:none; border-right:none; border-bottom:1px solid rgba(0,0,0,0.07); }
  .case-info { border-right:none; border-bottom:1px solid rgba(0,0,0,0.07); }
  .case-top.reverse .case-screens { order:-1; }
  .cc-footer { padding:36px 32px; }
}
@media (max-width: 768px) {
  .cc-hero { padding:70px 16px 50px; min-height:auto; }
  .cc-hero h1 { font-size:2rem; }
  .cc-body { padding:28px 16px 60px; gap:22px; }
  .case-info { padding:24px 20px; }
  .case-screens { padding:20px 16px; }
  .metrics-row { flex-wrap:wrap; }
  .metric { min-width:30%; }
  .cc-footer { padding:24px 16px; flex-direction:column; gap:8px; text-align:center; }
}
</style>
