# 餐饮点餐聚合平台 · DEMO

<div class="cms-hero">
  <div class="cms-hero-particles"></div>
  <div class="cms-hero-content">
    <div class="cms-hero-badge">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      产品演示
    </div>
    <h1>餐饮点餐聚合平台 DEMO</h1>
    <p>基于中软国际餐饮平台能力的完整产品界面展示，覆盖用户扫码点餐、商家运营管理与多商户聚合入口，助力海外中餐商家实现数字化运营。</p>
    <div class="cms-hero-tags">
      <span>扫码点餐</span>
      <span>商家运营管理</span>
      <span>多商户聚合</span>
    </div>
  </div>
</div>

## 用户点餐体验

<div class="cms-section-intro">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>
  用户扫码进入商家主页，浏览菜品分类与推荐套餐，支持多语言界面，满足海外华人及本地客户的点餐需求。
</div>

<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin:24px 0;">
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/catering/images/catering-demo-2.jpg" alt="商家点餐主页" style="width:100%;display:block;"/>
    <div style="padding:12px 16px;background:#f8fafc;font-size:0.83rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">商家主页 · 菜品分类与推荐</div>
  </div>
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/catering/images/catering-demo-3.jpg" alt="菜品浏览" style="width:100%;display:block;"/>
    <div style="padding:12px 16px;background:#f8fafc;font-size:0.83rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">菜品浏览 · 选餐与加购</div>
  </div>
</div>

---

## 商家运营管理

<div class="cms-section-intro">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
  商家端提供实时营业数据看板、商品热销排名、订单管理等核心运营工具，帮助商家全面掌握经营状况，精准调配库存与推广资源。
</div>

<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin:24px 0;">
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/catering/images/catering-demo-4.jpg" alt="营业数据看板" style="width:100%;display:block;"/>
    <div style="padding:12px 16px;background:#f8fafc;font-size:0.83rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">运营看板 · 营业数据总览</div>
  </div>
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/catering/images/catering-demo-5.jpg" alt="商品热销排名" style="width:100%;display:block;"/>
    <div style="padding:12px 16px;background:#f8fafc;font-size:0.83rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">商品分析 · 热销排名与趋势</div>
  </div>
</div>

<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin:0 0 24px;">
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/catering/images/catering-demo-6.jpg" alt="订单管理" style="width:100%;display:block;"/>
    <div style="padding:12px 16px;background:#f8fafc;font-size:0.83rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">订单管理 · 实时订单流水</div>
  </div>
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/catering/images/catering-demo-7.jpg" alt="商品管理" style="width:100%;display:block;"/>
    <div style="padding:12px 16px;background:#f8fafc;font-size:0.83rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">商品管理 · 菜品上下架与定价</div>
  </div>
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
