<script setup>
import { ref } from 'vue'
defineProps({ active: String })
const open = ref(false)
</script>

<template>
<nav class="csi-nav">
  <a href="/zh/" class="csi-logo">
    <span class="csi-logo-chip">CSI</span>
    中软国际 · 能力库
  </a>

  <div class="csi-links">
    <a href="/zh/"         :class="['csi-link', active==='home'     && 'is-active']">首页</a>
    <a href="/zh/overseas/":class="['csi-link', active==='overseas' && 'is-active']">海外布局</a>
    <a href="/zh/ai/"      :class="['csi-link', active==='ai'       && 'is-active']">AI创新工坊</a>
    <a href="/zh/cases/"   :class="['csi-link', active==='cases'    && 'is-active']">成功案例</a>

    <!-- Dropdown -->
    <div class="csi-dropdown" :class="active==='solutions' && 'is-active'">
      <div class="csi-dropdown-trigger csi-link">
        海外解决方案
        <svg class="csi-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="csi-dropdown-panel">
        <div class="csi-panel-arrow"></div>
        <div class="csi-panel-inner">
          <a href="/zh/miniapp/" class="csi-sol-item">
            <div class="csi-sol-icon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18" stroke-width="2.5" stroke-linecap="round"/></svg>
            </div>
            <div class="csi-sol-text">
              <div class="csi-sol-title">小程序迁移方案</div>
              <div class="csi-sol-desc">微信小程序 · 跨端适配与海外发布</div>
            </div>
            <svg class="csi-sol-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>

          <div class="csi-sol-item csi-sol-soon">
            <div class="csi-sol-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
            </div>
            <div class="csi-sol-text">
              <div class="csi-sol-title">云原生与基础设施 <span class="csi-badge-soon">即将推出</span></div>
              <div class="csi-sol-desc">企业云迁移 · 架构现代化升级</div>
            </div>
          </div>

          <div class="csi-sol-item csi-sol-soon">
            <div class="csi-sol-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div class="csi-sol-text">
              <div class="csi-sol-title">智慧园区解决方案 <span class="csi-badge-soon">即将推出</span></div>
              <div class="csi-sol-desc">IoT + AI · 园区数字化综合管理</div>
            </div>
          </div>

          <div class="csi-sol-item csi-sol-soon">
            <div class="csi-sol-icon" style="background:linear-gradient(135deg,#d97706,#f59e0b);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div class="csi-sol-text">
              <div class="csi-sol-title">ODC 离岸开发中心 <span class="csi-badge-soon">即将推出</span></div>
              <div class="csi-sol-desc">专属研发团队 · 离岸交付管理</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <a href="/en/" class="csi-nav-en">English</a>
  <button class="csi-hamburger" :class="{ 'is-open': open }" @click="open = !open" aria-label="菜单">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- Mobile Drawer -->
<div class="csi-drawer" :class="{ 'is-open': open }">
  <a href="/zh/" class="csi-drawer-link" @click="open=false">首页</a>
  <a href="/zh/overseas/" class="csi-drawer-link" @click="open=false">海外布局</a>
  <a href="/zh/ai/" class="csi-drawer-link" @click="open=false">AI创新工坊</a>
  <a href="/zh/cases/" class="csi-drawer-link" @click="open=false">成功案例</a>
  <div class="csi-drawer-sep">海外解决方案</div>
  <a href="/zh/miniapp/" class="csi-drawer-link csi-drawer-sub" @click="open=false">小程序迁移方案</a>
  <span class="csi-drawer-link csi-drawer-sub csi-drawer-dim">云原生与基础设施 <em>即将推出</em></span>
  <span class="csi-drawer-link csi-drawer-sub csi-drawer-dim">智慧园区解决方案 <em>即将推出</em></span>
  <span class="csi-drawer-link csi-drawer-sub csi-drawer-dim">ODC 离岸开发中心 <em>即将推出</em></span>
  <a href="/en/" class="csi-drawer-link csi-drawer-en">English</a>
</div>
</template>

<style>
/* ── Nav bar ── */
.csi-nav {
  position: sticky; top: 0; z-index: 300;
  display: flex; align-items: center; gap: 0;
  height: 66px; padding: 0 64px;
  background: rgba(255,255,255,0.93);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border-bottom: 1px solid rgba(0,0,0,0.07);
}
.csi-logo {
  display: flex; align-items: center; gap: 11px;
  font-weight: 800; font-size: 1rem; color: #0f172a;
  text-decoration: none; white-space: nowrap; margin-right: auto;
  font-family: 'PingFang SC','Microsoft YaHei','Segoe UI',sans-serif;
}
.csi-logo-chip {
  background: linear-gradient(135deg,#1d4ed8,#7c3aed);
  color: #fff; padding: 5px 10px; border-radius: 8px;
  font-size: 0.65rem; font-weight: 900; letter-spacing: 0.09em;
  box-shadow: 0 3px 10px rgba(29,78,216,0.3);
}

/* ── Nav links ── */
.csi-links {
  display: flex; align-items: center; gap: 4px;
  margin-right: 24px;
}
.csi-link {
  position: relative; display: flex; align-items: center; gap: 5px;
  padding: 6px 14px; border-radius: 10px;
  font-size: 0.88rem; font-weight: 600; color: #475569;
  text-decoration: none; cursor: pointer; white-space: nowrap;
  transition: color .18s, background .18s;
  font-family: 'PingFang SC','Microsoft YaHei','Segoe UI',sans-serif;
}
.csi-link:hover { color: #1d4ed8; background: rgba(29,78,216,0.06); }
.csi-link.is-active { color: #1d4ed8; background: rgba(29,78,216,0.08); }
.csi-link.is-active::after {
  content: ''; position: absolute; bottom: 2px; left: 50%; transform: translateX(-50%);
  width: 18px; height: 2px; border-radius: 2px;
  background: linear-gradient(90deg,#1d4ed8,#7c3aed);
}

/* ── Dropdown ── */
.csi-dropdown { position: relative; }
.csi-dropdown-trigger { user-select: none; }
.csi-chevron { transition: transform .2s; flex-shrink: 0; }
.csi-dropdown:hover .csi-chevron { transform: rotate(180deg); }

.csi-dropdown-panel {
  position: absolute; top: calc(100% + 10px); left: 50%;
  transform: translateX(-50%) translateY(-6px);
  width: 320px;
  background: white;
  border-radius: 16px;
  border: 1px solid rgba(0,0,0,0.08);
  box-shadow: 0 12px 48px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06);
  opacity: 0; visibility: hidden;
  transition: opacity .18s, transform .18s, visibility .18s;
  pointer-events: none;
}
.csi-dropdown:hover .csi-dropdown-panel {
  opacity: 1; visibility: visible;
  transform: translateX(-50%) translateY(0);
  pointer-events: auto;
}
.csi-panel-arrow {
  position: absolute; top: -5px; left: 50%; transform: translateX(-50%) rotate(45deg);
  width: 10px; height: 10px;
  background: white; border-top: 1px solid rgba(0,0,0,0.08); border-left: 1px solid rgba(0,0,0,0.08);
  border-radius: 2px;
}
.csi-panel-inner { padding: 8px; }

/* ── Solution items ── */
.csi-sol-item {
  display: flex; align-items: center; gap: 12px;
  padding: 11px 12px; border-radius: 11px;
  text-decoration: none; color: inherit;
  transition: background .15s;
  cursor: pointer;
}
.csi-sol-item:hover:not(.csi-sol-soon) { background: rgba(29,78,216,0.05); }
.csi-sol-soon { opacity: 0.55; cursor: default; }
.csi-sol-icon {
  width: 38px; height: 38px; border-radius: 10px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 3px 8px rgba(0,0,0,0.15);
}
.csi-sol-text { flex: 1; min-width: 0; }
.csi-sol-title {
  font-size: 0.86rem; font-weight: 700; color: #1e293b;
  display: flex; align-items: center; gap: 6px; flex-wrap: wrap;
  font-family: 'PingFang SC','Microsoft YaHei','Segoe UI',sans-serif;
}
.csi-sol-desc {
  font-size: 0.73rem; color: #94a3b8; margin-top: 2px;
  font-family: 'PingFang SC','Microsoft YaHei','Segoe UI',sans-serif;
}
.csi-badge-soon {
  font-size: 0.62rem; font-weight: 700; letter-spacing: 0.04em;
  padding: 2px 7px; border-radius: 999px;
  background: rgba(100,116,139,0.10); color: #64748b;
  border: 1px solid rgba(100,116,139,0.18);
}
.csi-sol-arrow { color: #94a3b8; flex-shrink: 0; transition: transform .15s; }
.csi-sol-item:hover .csi-sol-arrow { transform: translate(2px,-2px); color: #1d4ed8; }

.csi-sol-item + .csi-sol-item {
  border-top: 1px solid rgba(0,0,0,0.05);
}

/* ── English button ── */
.csi-nav-en {
  padding: 8px 20px; border-radius: 10px;
  background: linear-gradient(135deg,#1d4ed8,#7c3aed);
  color: white; font-size: 0.84rem; font-weight: 700;
  text-decoration: none; white-space: nowrap;
  transition: opacity .2s, box-shadow .2s;
  box-shadow: 0 3px 10px rgba(29,78,216,0.25);
  font-family: 'PingFang SC','Microsoft YaHei','Segoe UI',sans-serif;
}
.csi-nav-en:hover { opacity: 0.88; box-shadow: 0 5px 16px rgba(29,78,216,0.35); }

/* ── Hamburger ── */
.csi-hamburger {
  display: none; flex-direction: column; justify-content: center;
  gap: 5px; background: none; border: none; cursor: pointer;
  padding: 8px; margin-left: 8px;
}
.csi-hamburger span {
  display: block; width: 22px; height: 2px;
  background: #475569; border-radius: 2px;
  transition: transform .25s, opacity .25s;
}
.csi-hamburger.is-open span:nth-child(1) { transform: rotate(45deg) translate(5px,5px); }
.csi-hamburger.is-open span:nth-child(2) { opacity: 0; }
.csi-hamburger.is-open span:nth-child(3) { transform: rotate(-45deg) translate(5px,-5px); }

/* ── Mobile Drawer ── */
.csi-drawer {
  display: none; position: fixed; top: 66px; left: 0; right: 0; z-index: 299;
  flex-direction: column;
  background: rgba(255,255,255,0.98);
  backdrop-filter: blur(32px);
  border-bottom: 1px solid rgba(0,0,0,0.08);
  padding: 6px 0 12px;
  max-height: calc(100vh - 66px); overflow-y: auto;
}
.csi-drawer.is-open { display: flex; }
.csi-drawer-link {
  padding: 13px 20px; font-size: 0.95rem; font-weight: 600;
  color: #334155; text-decoration: none;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  font-family: 'PingFang SC','Microsoft YaHei','Segoe UI',sans-serif;
  transition: background .15s;
}
.csi-drawer-link:hover { background: rgba(29,78,216,0.04); color: #1d4ed8; }
.csi-drawer-sep {
  padding: 10px 20px 6px;
  font-size: 0.68rem; font-weight: 800; letter-spacing: 0.12em;
  text-transform: uppercase; color: #94a3b8;
}
.csi-drawer-sub { padding-left: 32px; font-size: 0.88rem; font-weight: 500; }
.csi-drawer-dim { color: #94a3b8; cursor: default; }
.csi-drawer-dim:hover { background: none; color: #94a3b8; }
.csi-drawer-dim em { font-style: normal; font-size: 0.75em; }
.csi-drawer-en { color: #1d4ed8; font-weight: 700; }

/* ── Responsive ── */
@media (max-width: 900px) {
  .csi-nav { padding: 0 24px; }
  .csi-links { display: none; }
  .csi-nav-en { display: none; }
  .csi-hamburger { display: flex; }
}
@media (max-width: 480px) {
  .csi-nav { padding: 0 16px; height: 58px; }
  .csi-drawer { top: 58px; max-height: calc(100vh - 58px); }
}
</style>
