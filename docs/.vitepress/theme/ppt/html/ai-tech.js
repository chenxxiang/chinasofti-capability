import { S, H, body, gc, g2 } from './_base.js'

export function render(data, theme, locale) {
  const zh = locale === 'zh'
  const dk = theme.name === 'tech-dark'
  const { platforms } = data

  const emojis = ['🧠', '✨', '💻', '🔧']
  const platformCards = platforms.map((p, i) => {
    const { from, to } = gc(p.grad)
    return `<div style="background:${dk ? theme.cardBg : '#FFFFFF'};border:1px solid ${theme.border};border-radius:14px;padding:24px;display:flex;flex-direction:column;gap:14px;box-shadow:0 2px 10px rgba(0,0,0,${dk ? '0.28' : '0.05'});">
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:44px;height:44px;border-radius:12px;background:${g2(from, to)};display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">${emojis[i]}</div>
        <div style="font-size:15px;font-weight:800;color:${theme.textPrimary};">${p.name}</div>
      </div>
      <div style="width:100%;height:2px;background:${g2(from, to)};border-radius:1px;opacity:0.6;"></div>
      <div style="font-size:11px;color:${theme.textSecondary};line-height:1.6;flex:1;">${p.desc}</div>
    </div>`
  }).join('')

  const subtitle = zh
    ? '四大自研平台 · 全链路 AI 能力支撑'
    : 'Four Proprietary Platforms · Full-stack AI Capability'

  return S(`
    ${H(zh ? '技术底座与平台' : 'Technology Foundation', theme)}
    ${body(`
      <div style="font-size:11px;color:${theme.textSecondary};margin-bottom:16px;text-align:center;">${subtitle}</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;">${platformCards}</div>
    `, '16px 28px')}
  `, theme)
}
