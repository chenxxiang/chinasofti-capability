/** 1280×720 slide shell */
export function S(inner, theme) {
  const dk = theme.name === 'tech-dark'
  return `<div style="width:1280px;height:720px;position:relative;overflow:hidden;background:${theme.slideBg};font-family:'Segoe UI','PingFang SC','Microsoft YaHei',system-ui,sans-serif;color:${theme.textPrimary};box-sizing:border-box;line-height:1.4;">${inner}</div>`
}

/** Full-width header bar */
export function H(title, theme) {
  return `<div style="width:100%;height:54px;background:${theme.accent};display:flex;align-items:center;padding:0 32px;box-sizing:border-box;">
    <span style="color:#fff;font-size:18px;font-weight:700;letter-spacing:0.01em;">${title}</span>
  </div>`
}

/** Content area below header */
export function body(inner, pad = '18px 32px') {
  return `<div style="position:absolute;top:54px;left:0;right:0;bottom:0;padding:${pad};overflow:hidden;box-sizing:border-box;">${inner}</div>`
}

/** Rounded card */
export function card(inner, bg, border, extra = '') {
  return `<div style="background:${bg};border:1px solid ${border};border-radius:12px;overflow:hidden;${extra}">${inner}</div>`
}

/** Inline chip / tag */
export function chip(text, color, bg) {
  return `<span style="display:inline-block;padding:2px 8px;border-radius:4px;background:${bg ?? color + '18'};border:1px solid ${color};color:${color};font-size:10px;font-weight:600;white-space:nowrap;">${text}</span>`
}

/** Parse first two hex colours from a CSS gradient string */
export function gc(grad) {
  const m = [...String(grad).matchAll(/#([0-9a-fA-F]{6})/g)]
  return { from: m[0]?.[1] ?? '1d4ed8', to: m[1]?.[1] ?? '3b82f6' }
}

/** Gradient background string */
export function g2(from, to, angle = 135) {
  return `linear-gradient(${angle}deg,#${from},#${to})`
}

/** Shadow string - light vs dark */
export function shadow(theme) {
  return theme.name === 'tech-dark'
    ? '0 2px 12px rgba(0,0,0,0.5)'
    : '0 2px 10px rgba(0,0,0,0.07)'
}
