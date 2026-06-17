import { S, H, body, gc, g2 } from './_base.js'

export function render(data, theme, locale) {
  const zh = locale === 'zh'
  const dk = theme.name === 'tech-dark'
  const { architectureLayers } = data

  const layerHtml = architectureLayers.map(layer => {
    const { from, to } = gc(layer.grad)
    const groupsHtml = layer.groups.map(g =>
      `<div>
        <div style="font-size:9px;font-weight:700;color:${layer.lc};margin-bottom:5px;text-transform:uppercase;letter-spacing:0.04em;">${g.label}</div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;">
          ${g.chips.map(c => `<span style="background:${dk ? layer.lbg.replace('0.06', '0.12') : layer.lbg};border:1px solid ${layer.lbd};color:${layer.lc};border-radius:4px;padding:2px 7px;font-size:9px;font-weight:600;">${c}</span>`).join('')}
        </div>
      </div>`
    ).join('')

    return `<div style="background:${dk ? theme.cardBg : '#FAFAFA'};border:1px solid ${layer.lbd};border-radius:10px;padding:12px 16px;display:flex;gap:16px;align-items:center;">
      <div style="min-width:100px;border-right:1px solid ${theme.border};padding-right:16px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;">
        <div style="font-size:9px;font-weight:700;color:${layer.lc};letter-spacing:0.05em;">${layer.labelEn}</div>
        <div style="font-size:10px;font-weight:700;color:${theme.textPrimary};text-align:center;">${layer.label}</div>
      </div>
      <div style="flex:1;display:flex;gap:20px;">${groupsHtml}</div>
    </div>`
  }).join('')

  return S(`
    ${H(zh ? '能力架构' : 'Technical Architecture', theme)}
    ${body(`<div style="display:flex;flex-direction:column;gap:10px;height:100%;">${layerHtml}</div>`)}
  `, theme)
}
