import { S, H, body, gc } from './_base.js'

export function render(data, theme, locale) {
  const zh = locale === 'zh'
  const dk = theme.name === 'tech-dark'
  const { heroData } = data

  const badges = heroData.badges.slice(0, 5).map(b =>
    `<div style="background:${dk?'rgba(255,255,255,0.05)':'#F8FAFC'};border:1px solid ${theme.border};border-radius:8px;padding:8px 14px;font-size:11px;color:${theme.textSecondary};white-space:nowrap;">${b.icon}&nbsp;&nbsp;${b.text}</div>`
  ).join('')

  const cols = heroData.capabilities.map((cap, i) =>
    `<div style="background:${dk?'rgba(255,255,255,0.04)':'#FFFFFF'};border:1px solid ${theme.border};border-radius:10px;padding:12px 8px;text-align:center;box-shadow:0 1px 4px rgba(0,0,0,0.05);">
      <div style="font-size:22px;margin-bottom:4px;">${cap.icon}</div>
      <div style="font-size:10px;font-weight:600;color:${theme.textSecondary};">${cap.label}</div>
    </div>`
  ).join('')

  return S(`
    ${H(zh ? '公司介绍' : 'Company Introduction', theme)}
    ${body(`
      <div style="font-size:22px;font-weight:800;color:${theme.textPrimary};text-align:center;margin-bottom:8px;">${heroData.title}</div>
      <div style="font-size:11px;color:${theme.textSecondary};text-align:center;margin-bottom:16px;line-height:1.6;">${heroData.tagline}</div>
      <!-- Badges row -->
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:18px;">${badges}</div>
      <!-- Divider -->
      <div style="height:1px;background:${theme.border};margin-bottom:14px;"></div>
      <!-- Capabilities grid -->
      <div style="display:grid;grid-template-columns:repeat(9,1fr);gap:8px;">${cols}</div>
    `)}
  `, theme)
}
