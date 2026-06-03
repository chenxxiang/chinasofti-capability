# Catering Platform · DEMO

<div class="cms-hero">
  <div class="cms-hero-particles"></div>
  <div class="cms-hero-content">
    <div class="cms-hero-badge">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      Product Demo
    </div>
    <h1>Catering Platform DEMO</h1>
    <p>A complete product UI showcase built on CSI's catering platform — covering scan-to-order, merchant operations management, and multi-restaurant aggregation, enabling overseas Chinese restaurants to go fully digital.</p>
    <div class="cms-hero-tags">
      <span>Scan to Order</span>
      <span>Merchant Management</span>
      <span>Multi-Restaurant Hub</span>
    </div>
  </div>
</div>

## Customer Ordering Experience

<div class="cms-section-intro">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>
  Customers scan a QR code to enter the restaurant storefront, browse menu categories and featured sets, and place orders — with multilingual support for both overseas Chinese and local diners.
</div>

<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin:24px 0;">
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/catering/images/catering-demo-2.jpg" alt="Restaurant Storefront" style="width:100%;display:block;"/>
    <div style="padding:12px 16px;background:#f8fafc;font-size:0.83rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">Storefront · Menu Categories & Specials</div>
  </div>
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/catering/images/catering-demo-3.jpg" alt="Menu Browsing" style="width:100%;display:block;"/>
    <div style="padding:12px 16px;background:#f8fafc;font-size:0.83rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">Menu · Browse & Add to Cart</div>
  </div>
</div>

---

## Merchant Operations Management

<div class="cms-section-intro">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
  The merchant console provides a real-time revenue dashboard, best-selling item rankings, and order management — giving restaurant owners full visibility into daily operations and helping them optimize inventory and promotions.
</div>

<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin:24px 0;">
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/catering/images/catering-demo-4.jpg" alt="Revenue Dashboard" style="width:100%;display:block;"/>
    <div style="padding:12px 16px;background:#f8fafc;font-size:0.83rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">Dashboard · Revenue Overview</div>
  </div>
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/catering/images/catering-demo-5.jpg" alt="Best-Sellers Ranking" style="width:100%;display:block;"/>
    <div style="padding:12px 16px;background:#f8fafc;font-size:0.83rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">Analytics · Best-Sellers & Sales Trends</div>
  </div>
</div>

<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin:0 0 24px;">
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/catering/images/catering-demo-6.jpg" alt="Order Management" style="width:100%;display:block;"/>
    <div style="padding:12px 16px;background:#f8fafc;font-size:0.83rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">Orders · Real-Time Order Stream</div>
  </div>
  <div class="demo-shot" style="border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 24px rgba(0,0,0,0.1);">
    <img src="/solutions/catering/images/catering-demo-7.jpg" alt="Menu Management" style="width:100%;display:block;"/>
    <div style="padding:12px 16px;background:#f8fafc;font-size:0.83rem;color:#475569;font-weight:600;border-top:1px solid rgba(0,0,0,0.06);">Menu Management · Publish & Pricing</div>
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
