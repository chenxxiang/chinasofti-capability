import { S, H, body, gc, g2 } from './_base.js'

export function render(data, theme, locale) {
  const zh = locale === 'zh'
  const dk = theme.name === 'tech-dark'
  const { regions } = data

  const cards = regions.map(r => {
    const { from, to } = gc(r.grad)
    const staffBadge = r.badges?.[0]?.text ?? ''
    const tagList = r.tags.slice(0, 4).map(t =>
      `<span style="background:${r.color}20;color:${r.color};border:1px solid ${r.color}40;border-radius:4px;padding:2px 6px;font-size:9px;font-weight:600;white-space:nowrap;">${t}</span>`
    ).join('')
    return `<div style="background:${dk ? theme.cardBg : '#FFFFFF'};border:1px solid ${theme.border};border-radius:12px;overflow:hidden;display:flex;flex-direction:column;">
      <div style="height:5px;background:${g2(from, to)};"></div>
      <div style="padding:10px 12px;flex:1;display:flex;flex-direction:column;gap:6px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <span style="font-size:13px;font-weight:700;color:${theme.textPrimary};">${r.badgeEmoji} ${r.title}</span>
          <span style="font-size:9px;color:${r.color};font-weight:700;background:${r.color}15;padding:2px 7px;border-radius:4px;">${staffBadge}</span>
        </div>
        <div style="font-size:9px;color:${theme.textMuted};">${r.entities.map(e => e.name).join(' · ')}</div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:2px;">${tagList}</div>
      </div>
    </div>`
  }).join('')

  return S(`
    ${H(zh ? '海外区域布局' : 'Global Regional Presence', theme)}
    ${body(`<div style="display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,1fr);gap:10px;height:100%;">${cards}</div>`, '14px 24px')}
  `, theme)
}
