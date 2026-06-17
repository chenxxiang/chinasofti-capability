import { S, H, body } from './_base.js'

export function render(data, theme, locale) {
  const zh = locale === 'zh'
  const dk = theme.name === 'tech-dark'
  const { clientCases } = data

  const caseCards = clientCases.map(c =>
    `<div style="background:${dk ? theme.cardBg : '#FFFFFF'};border:1px solid ${theme.border};border-radius:12px;padding:16px;display:flex;flex-direction:column;gap:8px;box-shadow:0 2px 8px rgba(0,0,0,${dk ? '0.25' : '0.04'});">
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <span style="font-size:9px;font-weight:700;background:${c.color}18;color:${c.color};border:1px solid ${c.color}44;border-radius:4px;padding:2px 8px;">${c.industry}</span>
      </div>
      <div style="font-size:13px;font-weight:700;color:${theme.textPrimary};">${c.name}</div>
      <div style="width:32px;height:2px;background:${c.color};border-radius:1px;"></div>
      <div style="font-size:10px;color:${theme.textSecondary};line-height:1.5;flex:1;">${c.result}</div>
    </div>`
  ).join('')

  return S(`
    ${H(zh ? '标杆案例' : 'Flagship Client Cases', theme)}
    ${body(`<div style="display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,1fr);gap:12px;height:100%;">${caseCards}</div>`)}
  `, theme)
}
