# EV Charging Platform · DEMO

<div class="cms-hero">
  <div class="cms-hero-particles"></div>
  <div class="cms-hero-content">
    <div class="cms-hero-badge">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      Product Demo
    </div>
    <h1>EV Charging Platform DEMO</h1>
    <p>A complete product UI showcase built on CSI's EV charging platform — covering the full user charging journey (scan to start, real-time monitoring, order settlement) and the operations management console, helping charging operators boost service efficiency and user experience.</p>
    <div class="cms-hero-tags">
      <span>Scan to Charge</span>
      <span>Real-Time Monitoring</span>
      <span>Operations Backend</span>
    </div>
  </div>
</div>

## User Charging Flow

<div class="cms-section-intro">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
  After plugging in and scanning the QR code, users start charging with one tap. They can monitor live progress, energy, voltage, and power — and receive a full order summary with automatic settlement when charging completes.
</div>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin:24px 0;">
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/charging/images/charging-demo-3.png" alt="Charge Setup & Payment" style="width:100%;display:block;"/>
    <div style="padding:10px 14px;background:#f8fafc;font-size:0.80rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">① Plug In · Set Payment Method</div>
  </div>
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/charging/images/charging-demo-4.png" alt="Charging in Progress" style="width:100%;display:block;"/>
    <div style="padding:10px 14px;background:#f8fafc;font-size:0.80rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">② Charging · Live Energy & Power</div>
  </div>
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/charging/images/charging-demo-5.png" alt="Charge Complete Order" style="width:100%;display:block;"/>
    <div style="padding:10px 14px;background:#f8fafc;font-size:0.80rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">③ Done · Order & Settlement</div>
  </div>
</div>

---

## Operations Management Console

<div class="cms-section-intro">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
  The charging operations system provides a national station map overview, real-time order tracking, energy consumption statistics, and revenue analytics — empowering operators to manage their charging network efficiently.
</div>

<div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);margin:24px 0;">
  <img src="/solutions/charging/images/charging-demo-6.png" alt="Charging Operations Management Backend" style="width:100%;display:block;"/>
  <div style="padding:12px 16px;background:#f8fafc;font-size:0.83rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">Charging Operations System · Management Dashboard</div>
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
