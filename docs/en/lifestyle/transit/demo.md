# Transit Card Platform · DEMO

<div class="cms-hero">
  <div class="cms-hero-particles"></div>
  <div class="cms-hero-content">
    <div class="cms-hero-badge">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      Product Demo
    </div>
    <h1>Transit Card Platform DEMO</h1>
    <p>A complete product UI showcase built on CSI's urban mobility platform — integrating bus, cycling, ride-hailing, parking, and IC card into a single app. Scan to ride, manage your wallet, and access all city transport modes in one place.</p>
    <div class="cms-hero-tags">
      <span>Scan to Ride</span>
      <span>Multi-Mode Transit</span>
      <span>VIP Membership</span>
    </div>
  </div>
</div>

<div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #93c5fd;border-radius:16px;padding:24px;margin:24px 0;">
  <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">
    <div style="width:36px;height:36px;background:linear-gradient(135deg,#3b82f6,#1d4ed8);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
    </div>
    <div>
      <div style="font-size:0.95rem;font-weight:700;color:#1e3a8a;">Try It Live</div>
      <div style="font-size:0.75rem;color:#1d4ed8;">Search "城客e家" on App Store or tap the link below to download</div>
    </div>
  </div>
  <div style="background:rgba(255,255,255,0.7);border-radius:10px;padding:14px 18px;display:flex;align-items:center;gap:14px;">
    <div style="width:32px;height:32px;background:linear-gradient(135deg,#3b82f6,#1d4ed8);border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 8l4 4-4 4M8 12h8"/></svg>
    </div>
    <div>
      <div style="font-size:0.82rem;font-weight:600;color:#1e3a8a;margin-bottom:4px;">Chengke eHome · Apple App Store (Hong Kong)</div>
      <a href="https://apps.apple.com/hk/app/%E5%9F%8E%E5%AE%A2e%E5%AE%B6/id1014406138" target="_blank" rel="noopener" style="color:#2563eb;font-size:0.82rem;text-decoration:none;word-break:break-all;">https://apps.apple.com/hk/app/城客e家/id1014406138</a>
    </div>
  </div>
</div>

## Full Transit Service Overview

<div class="cms-section-intro">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
  The app home screen aggregates all travel modes — cycling, ride-hailing, parking, and IC card. The scan-to-ride feature covers all bus and tram routes. The personal center manages VIP membership, points, and wallet balance.
</div>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin:24px 0;">
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/transit/images/transit-demo-2.jpg" alt="Transit App Homepage" style="width:100%;display:block;"/>
    <div style="padding:10px 14px;background:#f8fafc;font-size:0.80rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">Home · Multi-Mode Entry</div>
  </div>
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/transit/images/transit-demo-1.jpg" alt="Scan to Ride" style="width:100%;display:block;"/>
    <div style="padding:10px 14px;background:#f8fafc;font-size:0.80rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">Scan to Ride · Bus QR Code</div>
  </div>
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/transit/images/transit-demo-3.jpg" alt="My Account" style="width:100%;display:block;"/>
    <div style="padding:10px 14px;background:#f8fafc;font-size:0.80rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">My Account · VIP & Points</div>
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
