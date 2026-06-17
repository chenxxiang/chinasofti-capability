import { S, H, body, gc, g2 } from './_base.js'

export function render(data, theme, locale) {
  const zh = locale === 'zh'
  const dk = theme.name === 'tech-dark'
  const { deliverySteps } = data

  const stepsHtml = deliverySteps.map((s, i) => {
    const { from, to } = gc(s.grad)
    const isLast = i === deliverySteps.length - 1
    return `<div style="display:flex;flex-direction:column;flex:1;">
      <div style="background:${g2(from, to)};border-radius:12px 12px 0 0;padding:14px 16px;min-height:80px;display:flex;flex-direction:column;gap:8px;">
        <div style="color:#fff;font-size:11px;font-weight:900;opacity:0.6;">${s.num}</div>
        <div style="color:#fff;font-size:13px;font-weight:700;line-height:1.3;">${s.title}</div>
      </div>
      <div style="background:${dk ? theme.cardBg : '#FFFFFF'};border:1px solid ${theme.border};border-top:none;border-radius:0 0 12px 12px;padding:12px 14px;flex:1;">
        <div style="font-size:9.5px;color:${theme.textSecondary};line-height:1.5;">${s.desc}</div>
      </div>
      ${!isLast ? `<div style="position:absolute;right:-14px;top:50%;transform:translateY(-50%);color:${theme.textMuted};font-size:16px;z-index:2;">▶</div>` : ''}
    </div>`
  })

  const stepsWithArrows = deliverySteps.map((s, i) => {
    const { from, to } = gc(s.grad)
    const isLast = i === deliverySteps.length - 1
    return `<div style="display:flex;align-items:stretch;flex:1;">
      <div style="flex:1;background:${dk ? theme.cardBg : '#FFFFFF'};border:1px solid ${theme.border};border-radius:12px;overflow:hidden;display:flex;flex-direction:column;">
        <div style="background:${g2(from, to)};padding:14px;display:flex;flex-direction:column;gap:6px;">
          <div style="color:rgba(255,255,255,0.6);font-size:10px;font-weight:900;">${s.num}</div>
          <div style="color:#fff;font-size:12.5px;font-weight:700;line-height:1.3;">${s.title}</div>
        </div>
        <div style="padding:12px;flex:1;">
          <div style="font-size:9.5px;color:${theme.textSecondary};line-height:1.5;">${s.desc}</div>
        </div>
      </div>
      ${!isLast ? `<div style="display:flex;align-items:center;padding:0 6px;color:${theme.textMuted};font-size:14px;">▶</div>` : ''}
    </div>`
  }).join('')

  return S(`
    ${H(zh ? '端到端交付流程' : 'End-to-End Delivery Pipeline', theme)}
    ${body(`<div style="display:flex;gap:0;height:100%;align-items:stretch;">${stepsWithArrows}</div>`)}
  `, theme)
}
