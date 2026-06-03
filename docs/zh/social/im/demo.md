# 即时通讯平台 · DEMO

<div class="cms-hero">
  <div class="cms-hero-particles"></div>
  <div class="cms-hero-content">
    <div class="cms-hero-badge">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      产品演示
    </div>
    <h1>即时通讯平台 DEMO</h1>
    <p>基于中软国际即时通讯平台能力的完整产品界面展示，覆盖单聊、群聊与音视频通话三大核心场景，为海外应用提供安全稳定的实时通讯基础能力。</p>
    <div class="cms-hero-tags">
      <span>单聊 · 群聊</span>
      <span>音视频通话</span>
      <span>消息推送</span>
    </div>
  </div>
</div>

<div style="background:linear-gradient(135deg,#f0fdfa,#ccfbf1);border:1px solid #5eead4;border-radius:16px;padding:24px;margin:24px 0;">
  <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
    <div style="width:36px;height:36px;background:linear-gradient(135deg,#0d9488,#0f766e);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    </div>
    <div>
      <div style="font-size:0.95rem;font-weight:700;color:#134e4a;">体验入口</div>
      <div style="font-size:0.75rem;color:#0f766e;">点击下方链接下载 IM Demo App 体验完整即时通讯功能</div>
    </div>
  </div>
  <div style="background:rgba(255,255,255,0.7);border-radius:8px;padding:10px 14px;">
    <div style="font-size:0.76rem;font-weight:600;color:#134e4a;margin-bottom:6px;">App 下载地址</div>
    <a href="https://lyra-download.rongcloud.net/" target="_blank" rel="noopener" style="color:#0d9488;font-size:0.82rem;text-decoration:none;word-break:break-all;font-family:monospace;font-weight:600;">https://lyra-download.rongcloud.net/</a>
  </div>
</div>

## 核心功能展示

<div class="cms-section-intro">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  即时通讯 App 提供流畅的消息收发体验，支持文字、图片、语音、文件等多种消息类型，并内置高清音视频通话能力，满足社交、协作与客服等多种业务场景。
</div>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin:24px 0;">
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/im/images/im-demo-1.jpg" alt="IM 1" style="width:100%;display:block;"/>
    <div style="padding:10px 14px;background:#f8fafc;font-size:0.80rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">消息列表 · 会话管理</div>
  </div>
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/im/images/im-demo-2.jpg" alt="IM 2" style="width:100%;display:block;"/>
    <div style="padding:10px 14px;background:#f8fafc;font-size:0.80rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">聊天窗口 · 富媒体消息</div>
  </div>
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/im/images/im-demo-3.jpg" alt="IM 3" style="width:100%;display:block;"/>
    <div style="padding:10px 14px;background:#f8fafc;font-size:0.80rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">音视频通话 · 实时连线</div>
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
