import { S, H, body } from './_base.js'

export function render(data, theme, locale) {
  const zh = locale === 'zh'
  const dk = theme.name === 'tech-dark'
  const { stats } = data

  const cards = stats.slice(0, 8).map(s => {
    const num = s.prefix ? `${s.prefix}${s.unit}` : `${s.counter ?? ''}${s.unit}`
    return `<div style="background:${dk?theme.cardBg:'#FFFFFF'};border:1px solid ${theme.border};border-radius:14px;padding:24px 16px;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,${dk?'0.3':'0.05'});">
      <div style="font-size:40px;font-weight:900;color:${theme.accent};letter-spacing:-1px;margin-bottom:8px;">${num}</div>
      <div style="font-size:10.5px;color:${theme.textSecondary};line-height:1.5;text-align:center;">${s.label}</div>
    </div>`
  }).join('')

  return S(`
    ${H(zh ? '核心数据' : 'Key Metrics', theme)}
    ${body(`<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;height:100%;">${cards}</div>`)}
  `, theme)
}
