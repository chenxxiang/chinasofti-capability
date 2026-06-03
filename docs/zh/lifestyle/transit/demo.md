# 交通卡平台 · DEMO

<div class="cms-hero">
  <div class="cms-hero-particles"></div>
  <div class="cms-hero-content">
    <div class="cms-hero-badge">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      产品演示
    </div>
    <h1>交通卡平台 DEMO</h1>
    <p>基于中软国际交通出行平台能力的完整产品界面展示，整合公交、骑行、网约车、停车与 IC 卡多种出行方式，扫码即乘、一 App 覆盖全场景城市出行。</p>
    <div class="cms-hero-tags">
      <span>扫码乘车</span>
      <span>多模式出行</span>
      <span>VIP 会员权益</span>
    </div>
  </div>
</div>

<div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #93c5fd;border-radius:16px;padding:24px;margin:24px 0;">
  <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">
    <div style="width:36px;height:36px;background:linear-gradient(135deg,#3b82f6,#1d4ed8);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
    </div>
    <div>
      <div style="font-size:0.95rem;font-weight:700;color:#1e3a8a;">体验入口</div>
      <div style="font-size:0.75rem;color:#1d4ed8;">在 App Store 搜索「城客e家」或点击以下链接下载</div>
    </div>
  </div>
  <div style="background:rgba(255,255,255,0.7);border-radius:10px;padding:14px 18px;display:flex;align-items:center;gap:14px;">
    <div style="width:32px;height:32px;background:linear-gradient(135deg,#3b82f6,#1d4ed8);border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 8l4 4-4 4M8 12h8"/></svg>
    </div>
    <div>
      <div style="font-size:0.82rem;font-weight:600;color:#1e3a8a;margin-bottom:4px;">城客e家 · Apple App Store（香港区）</div>
      <a href="https://apps.apple.com/hk/app/%E5%9F%8E%E5%AE%A2e%E5%AE%B6/id1014406138" target="_blank" rel="noopener" style="color:#2563eb;font-size:0.82rem;text-decoration:none;word-break:break-all;">https://apps.apple.com/hk/app/城客e家/id1014406138</a>
    </div>
  </div>
</div>

## 出行服务全览

<div class="cms-section-intro">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
  App 首页聚合蘑菇骑行、网约车、停车、交通 IC 卡等全模式出行入口；扫码乘车支持公交与有轨电车全线覆盖；个人中心提供 VIP 会员权益、积分与钱包管理。
</div>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin:24px 0;">
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/transit/images/transit-demo-2.jpg" alt="出行App首页" style="width:100%;display:block;"/>
    <div style="padding:10px 14px;background:#f8fafc;font-size:0.80rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">首页 · 多模式出行入口</div>
  </div>
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/transit/images/transit-demo-1.jpg" alt="扫码乘车" style="width:100%;display:block;"/>
    <div style="padding:10px 14px;background:#f8fafc;font-size:0.80rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">扫码乘车 · 公交二维码</div>
  </div>
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/transit/images/transit-demo-3.jpg" alt="个人中心" style="width:100%;display:block;"/>
    <div style="padding:10px 14px;background:#f8fafc;font-size:0.80rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">我的 · VIP 会员与积分</div>
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
