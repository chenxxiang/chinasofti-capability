import { S, H, body, gc, g2 } from './_base.js'

export function render(data, theme, locale) {
  const zh = locale === 'zh'
  const dk = theme.name === 'tech-dark'
  const { pillars } = data

  const pillarCards = pillars.map((p, i) => {
    const { from, to } = gc(p.grad)
    const tagHtml = p.tags.map(t =>
      `<span style="background:rgba(255,255,255,0.15);color:#fff;border-radius:4px;padding:3px 8px;font-size:9.5px;font-weight:600;">${t}</span>`
    ).join('')
    return `<div style="background:${g2(from, to, 160)};border-radius:16px;padding:28px 24px;display:flex;flex-direction:column;gap:14px;box-shadow:0 4px 16px rgba(0,0,0,0.18);">
      <div style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.18);display:flex;align-items:center;justify-content:center;color:#fff;font-size:15px;font-weight:900;">0${i+1}</div>
      <div style="font-size:18px;font-weight:800;color:#fff;">${p.title}</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.82);line-height:1.6;">${p.desc}</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:auto;">${tagHtml}</div>
    </div>`
  }).join('')

  const subtitle = zh
    ? '战略规划 · 组织建设 · 场景落地 ——  三位一体 AI 转型框架'
    : 'Strategy · Organization · Scenario — Three-pillar AI Transformation Framework'

  return S(`
    ${H(zh ? 'AI 转型战略框架' : 'AI Transformation Framework', theme)}
    ${body(`
      <div style="font-size:11px;color:${theme.textSecondary};margin-bottom:14px;text-align:center;">${subtitle}</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">${pillarCards}</div>
    `, '16px 28px')}
  `, theme)
}
