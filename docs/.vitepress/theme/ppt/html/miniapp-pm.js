import { S, H, body, gc, g2 } from './_base.js'

export function render(data, theme, locale) {
  const zh = locale === 'zh'
  const dk = theme.name === 'tech-dark'
  const { pmCards } = data

  const checkpoints = zh
    ? ['CP1 需求确认', 'CP2 开发里程碑', 'CP3 上线评审']
    : ['CP1 Requirements', 'CP2 Dev Milestone', 'CP3 Release Review']

  const topCards = pmCards.slice(0, 3).map(c => {
    const { from, to } = gc(c.grad)
    return `<div style="background:${dk ? theme.cardBg : '#FFFFFF'};border:1px solid ${theme.border};border-top:3px solid ${c.color};border-radius:10px;padding:16px;box-shadow:0 2px 7px rgba(0,0,0,${dk ? '0.22' : '0.04'});">
      <div style="font-size:13px;font-weight:700;color:${c.color};margin-bottom:8px;">${c.title}</div>
      <div style="font-size:10px;color:${theme.textSecondary};line-height:1.5;">${c.desc}</div>
    </div>`
  }).join('')

  const bottomCards = pmCards.slice(3).map(c => {
    const { from, to } = gc(c.grad)
    return `<div style="background:${dk ? theme.cardBg : '#FFFFFF'};border:1px solid ${theme.border};border-top:3px solid ${c.color};border-radius:10px;padding:16px;box-shadow:0 2px 7px rgba(0,0,0,${dk ? '0.22' : '0.04'});">
      <div style="font-size:13px;font-weight:700;color:${c.color};margin-bottom:8px;">${c.title}</div>
      <div style="font-size:10px;color:${theme.textSecondary};line-height:1.5;">${c.desc}</div>
    </div>`
  }).join('')

  const cpHtml = checkpoints.map((cp, i) => {
    const colors = ['#1d4ed8', '#7c3aed', '#10b981']
    return `<div style="display:flex;align-items:center;gap:8px;flex:1;">
      <div style="width:28px;height:28px;border-radius:50%;background:${colors[i]};color:#fff;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;">${i+1}</div>
      <div style="font-size:10px;color:${theme.textPrimary};font-weight:600;">${cp}</div>
      ${i < checkpoints.length - 1 ? `<div style="flex:1;height:1px;background:${theme.border};margin:0 4px;"></div>` : ''}
    </div>`
  }).join('')

  return S(`
    ${H(zh ? '项目管理' : 'Project Management', theme)}
    ${body(`
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:12px;">${topCards}</div>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:14px;">${bottomCards}</div>
      <div style="background:${dk ? theme.cardBgAlt : '#F8FAFC'};border:1px solid ${theme.border};border-radius:10px;padding:12px 18px;">
        <div style="font-size:9px;font-weight:700;color:${theme.textMuted};letter-spacing:0.05em;text-transform:uppercase;margin-bottom:10px;">${zh ? '质量门禁' : 'Quality Checkpoints'}</div>
        <div style="display:flex;align-items:center;gap:6px;">${cpHtml}</div>
      </div>
    `)}
  `, theme)
}
