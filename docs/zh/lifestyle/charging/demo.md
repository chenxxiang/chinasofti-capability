# 充电平台 · DEMO

<div class="cms-hero">
  <div class="cms-hero-particles"></div>
  <div class="cms-hero-content">
    <div class="cms-hero-badge">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      产品演示
    </div>
    <h1>充电平台 DEMO</h1>
    <p>基于中软国际充电平台能力输出的完整产品界面展示，涵盖用户端充电全流程（扫码启动、实时监控、订单结算）与运营管理后台，助力充电运营商提升服务效率与用户体验。</p>
    <div class="cms-hero-tags">
      <span>扫码启动充电</span>
      <span>实时充电监控</span>
      <span>运营管理后台</span>
    </div>
  </div>
</div>

## 用户充电流程

<div class="cms-section-intro">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
  用户扫码插枪后，一键启动充电，实时查看充电进度、电量、电压与功率，充满后自动生成订单明细并完成结算。
</div>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin:24px 0;">
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/charging/images/charging-demo-3.png" alt="充电设置与支付" style="width:100%;display:block;"/>
    <div style="padding:10px 14px;background:#f8fafc;font-size:0.80rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">① 插枪 · 设置充电方式</div>
  </div>
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/charging/images/charging-demo-4.png" alt="实时充电中" style="width:100%;display:block;"/>
    <div style="padding:10px 14px;background:#f8fafc;font-size:0.80rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">② 充电中 · 实时电量与功率</div>
  </div>
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/charging/images/charging-demo-5.png" alt="充电完成订单" style="width:100%;display:block;"/>
    <div style="padding:10px 14px;background:#f8fafc;font-size:0.80rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">③ 完成 · 订单明细结算</div>
  </div>
</div>

---

## 运营管理后台

<div class="cms-section-intro">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
  充电运营管理系统提供全国充电站点地图总览、实时订单监控、充电量统计与收入分析，助力运营方高效管理充电网络。
</div>

<div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);margin:24px 0;">
  <img src="/solutions/charging/images/charging-demo-6.png" alt="充电运营管理后台" style="width:100%;display:block;"/>
  <div style="padding:12px 16px;background:#f8fafc;font-size:0.83rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">充电运营系统 · 管理后台总览</div>
</div>

<div id="cms-lightbox" class="cms-lightbox" onclick="this.classList.remove('cms-lightbox-active')">
  <div class="cms-lightbox-close">&times;</div>
  <img id="cms-lightbox-img" src="" alt="" />
</div>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  const lightbox = document.getElementById('cms-lightbox')
  const lightboxImg = document.getElementById('cms-lightbox-img')
  if (!lightbox || !lightboxImg) return
  document.querySelectorAll('.demo-shot img').forEach(img => {
    img.style.cursor = 'zoom-in'
    img.addEventListener('click', () => {
      lightboxImg.src = img.src
      lightboxImg.alt = img.alt
      lightbox.classList.add('cms-lightbox-active')
    })
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') lightbox.classList.remove('cms-lightbox-active')
  })
})
</script>
