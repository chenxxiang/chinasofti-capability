import { S, H, body } from './_base.js'

export function render(data, theme, locale) {
  const zh = locale === 'zh'
  const dk = theme.name === 'tech-dark'
  const { coverageStats } = data

  const statCards = coverageStats.map(s =>
    `<div style="background:${dk ? theme.cardBg : '#FFFFFF'};border:1px solid ${theme.border};border-radius:16px;padding:36px 28px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;box-shadow:0 2px 10px rgba(0,0,0,${dk ? '0.3' : '0.05'});">
      <div style="font-size:40px;margin-bottom:12px;">${s.icon}</div>
      <div style="display:flex;align-items:baseline;gap:4px;margin-bottom:10px;">
        <span style="font-size:56px;font-weight:900;color:${theme.accent};line-height:1;">${s.value}</span>
      </div>
      <div style="font-size:11px;color:${theme.textSecondary};line-height:1.5;max-width:200px;">${s.pre}${s.post}</div>
    </div>`
  ).join('')

  return S(`
    ${H(zh ? '全球覆盖数字' : 'Global Coverage at a Glance', theme)}
    ${body(`<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;height:100%;padding:12px 0;">${statCards}</div>`)}
  `, theme)
}
