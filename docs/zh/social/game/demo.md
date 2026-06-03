# 游戏接入与管理平台 · DEMO

<div class="cms-hero">
  <div class="cms-hero-particles"></div>
  <div class="cms-hero-content">
    <div class="cms-hero-badge">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      产品演示
    </div>
    <h1>游戏接入与管理平台 DEMO</h1>
    <p>基于中软国际游戏接入平台能力的完整产品界面展示，覆盖游戏大厅、游戏内体验与后台运营管理三大场景，帮助海外平台快速聚合多方游戏资源并实现统一运营。</p>
    <div class="cms-hero-tags">
      <span>游戏大厅</span>
      <span>多方游戏聚合</span>
      <span>运营管理后台</span>
    </div>
  </div>
</div>

## 平台功能展示

<div class="cms-section-intro">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
  游戏接入平台提供游戏大厅聚合展示、一键启动与游戏内沉浸体验，后台支持游戏上下架管理、数据统计与玩家行为分析，帮助运营团队高效管理多方游戏资源。
</div>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin:24px 0;">
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/gaming/images/gaming-demo-1.png" alt="游戏平台 1" style="width:100%;display:block;"/>
    <div style="padding:10px 14px;background:#f8fafc;font-size:0.80rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">游戏大厅 · 多方游戏聚合</div>
  </div>
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/gaming/images/gaming-demo-2.png" alt="游戏平台 2" style="width:100%;display:block;"/>
    <div style="padding:10px 14px;background:#f8fafc;font-size:0.80rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">游戏内 · 沉浸式体验</div>
  </div>
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/gaming/images/gaming-demo-3.png" alt="游戏平台 3" style="width:100%;display:block;"/>
    <div style="padding:10px 14px;background:#f8fafc;font-size:0.80rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">后台管理 · 游戏运营数据</div>
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
