import { S, H, body, gc, g2 } from './_base.js'

export function render(data, theme, locale) {
  const zh = locale === 'zh'
  const dk = theme.name === 'tech-dark'
  const { stages, courses } = data

  const stagesHtml = stages.map((s, i) => {
    const { from, to } = gc(s.grad)
    const isLast = i === stages.length - 1
    return `<div style="display:flex;align-items:center;flex:1;">
      <div style="flex:1;background:${dk ? theme.cardBg : '#FFFFFF'};border:1px solid ${theme.border};border-radius:10px;padding:12px 10px;box-shadow:0 1px 5px rgba(0,0,0,0.05);">
        <div style="width:28px;height:28px;border-radius:50%;background:${g2(from, to)};color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;margin-bottom:8px;">${s.num}</div>
        <div style="font-size:11px;font-weight:700;color:${theme.textPrimary};margin-bottom:4px;">${s.title}</div>
        <div style="font-size:9px;color:${theme.textSecondary};line-height:1.4;">${s.desc.slice(0, 60)}…</div>
      </div>
      ${!isLast ? `<div style="width:18px;flex-shrink:0;text-align:center;color:${theme.textMuted};font-size:12px;">→</div>` : ''}
    </div>`
  }).join('')

  const coursesHtml = courses.map(c =>
    `<div style="background:${dk ? theme.cardBg : '#FFFFFF'};border:1px solid ${theme.border};border-radius:8px;padding:12px;border-left:3px solid ${c.color};">
      <div style="font-size:9px;font-weight:700;color:${c.color};margin-bottom:4px;">${c.day}</div>
      <div style="font-size:10px;font-weight:700;color:${theme.textPrimary};margin-bottom:3px;">${c.title}</div>
      <div style="font-size:9px;color:${theme.textSecondary};line-height:1.4;">${c.desc.slice(0, 70)}…</div>
    </div>`
  ).join('')

  return S(`
    ${H(zh ? '精英 AI 赋能' : 'Elite AI Enablement', theme)}
    ${body(`
      <!-- 5-stage flow -->
      <div style="font-size:10px;font-weight:700;color:${theme.textMuted};letter-spacing:0.05em;text-transform:uppercase;margin-bottom:8px;">${zh ? '5 阶段训战路径' : '5-Stage Bootcamp Journey'}</div>
      <div style="display:flex;align-items:stretch;margin-bottom:16px;">${stagesHtml}</div>
      <!-- course schedule -->
      <div style="font-size:10px;font-weight:700;color:${theme.textMuted};letter-spacing:0.05em;text-transform:uppercase;margin-bottom:8px;">${zh ? '课程安排' : 'Course Schedule'}</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;">${coursesHtml}</div>
    `, '16px 28px')}
  `, theme)
}
