import { S, H, body, gc, g2 } from './_base.js'

export function render(data, theme, locale) {
  const zh = locale === 'zh'
  const dk = theme.name === 'tech-dark'
  const { highlights } = data

  const cards = highlights.slice(0, 8).map(h => {
    const { from, to } = gc(h.color)
    return `<div style="background:${dk ? theme.cardBg : '#FFFFFF'};border:1px solid ${theme.border};border-radius:12px;padding:14px 16px;display:flex;align-items:flex-start;gap:12px;box-shadow:0 2px 8px rgba(0,0,0,${dk ? '0.25' : '0.04'});">
      <div style="width:40px;height:40px;min-width:40px;border-radius:10px;background:${g2(from, to)};display:flex;align-items:center;justify-content:center;font-size:20px;">${h.icon}</div>
      <div>
        <div style="font-size:12px;font-weight:700;color:${theme.textPrimary};margin-bottom:4px;">${h.name}</div>
        <div style="font-size:10px;color:${theme.textSecondary};line-height:1.5;">${h.desc}</div>
      </div>
    </div>`
  }).join('')

  return S(`
    ${H(zh ? '核心能力领域' : 'Core Capability Areas', theme)}
    ${body(`<div style="display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(4,1fr);gap:10px;height:100%;">${cards}</div>`)}
  `, theme)
}
