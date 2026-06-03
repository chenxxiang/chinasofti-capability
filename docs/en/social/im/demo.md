# Instant Messaging Platform · DEMO

<div class="cms-hero">
  <div class="cms-hero-particles"></div>
  <div class="cms-hero-content">
    <div class="cms-hero-badge">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      Product Demo
    </div>
    <h1>Instant Messaging Platform DEMO</h1>
    <p>A complete product UI showcase built on CSI's instant messaging platform — covering 1-on-1 chat, group messaging, and audio/video calling, providing overseas applications with a secure, stable real-time communication foundation.</p>
    <div class="cms-hero-tags">
      <span>1-on-1 & Group Chat</span>
      <span>Audio / Video Calls</span>
      <span>Push Notifications</span>
    </div>
  </div>
</div>

<div style="background:linear-gradient(135deg,#f0fdfa,#ccfbf1);border:1px solid #5eead4;border-radius:16px;padding:24px;margin:24px 0;">
  <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
    <div style="width:36px;height:36px;background:linear-gradient(135deg,#0d9488,#0f766e);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    </div>
    <div>
      <div style="font-size:0.95rem;font-weight:700;color:#134e4a;">Try It Live</div>
      <div style="font-size:0.75rem;color:#0f766e;">Click the link below to download the IM Demo App and experience the full messaging feature set</div>
    </div>
  </div>
  <div style="background:rgba(255,255,255,0.7);border-radius:8px;padding:10px 14px;">
    <div style="font-size:0.76rem;font-weight:600;color:#134e4a;margin-bottom:6px;">App Download</div>
    <a href="https://lyra-download.rongcloud.net/" target="_blank" rel="noopener" style="color:#0d9488;font-size:0.82rem;text-decoration:none;word-break:break-all;font-family:monospace;font-weight:600;">https://lyra-download.rongcloud.net/</a>
  </div>
</div>

## Core Features

<div class="cms-section-intro">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  The IM app delivers a smooth messaging experience supporting text, images, voice, and file transfers. Built-in HD audio/video calling meets the needs of social, collaboration, and customer-service use cases.
</div>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin:24px 0;">
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/im/images/im-demo-1.jpg" alt="IM 1" style="width:100%;display:block;"/>
    <div style="padding:10px 14px;background:#f8fafc;font-size:0.80rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">Inbox · Conversation List</div>
  </div>
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/im/images/im-demo-2.jpg" alt="IM 2" style="width:100%;display:block;"/>
    <div style="padding:10px 14px;background:#f8fafc;font-size:0.80rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">Chat · Rich Media Messages</div>
  </div>
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/im/images/im-demo-3.jpg" alt="IM 3" style="width:100%;display:block;"/>
    <div style="padding:10px 14px;background:#f8fafc;font-size:0.80rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">Video Call · Real-Time Connection</div>
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
