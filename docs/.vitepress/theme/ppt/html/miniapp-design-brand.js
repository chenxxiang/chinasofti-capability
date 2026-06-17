import { S, H, body } from './_base.js'

export function render(data, theme, locale) {
  const zh = locale === 'zh'
  const dk = theme.name === 'tech-dark'
  const { designBrand } = data

  const paletteHtml = designBrand.palette.map(p =>
    `<div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
      <div style="width:44px;height:44px;border-radius:10px;background:${p.hex};box-shadow:0 2px 6px rgba(0,0,0,0.15);"></div>
      <div style="font-size:8px;font-weight:700;color:${theme.textPrimary};">${p.name}</div>
      <div style="font-size:8px;color:${theme.textMuted};">${p.hex}</div>
      <div style="font-size:8px;color:${theme.textSecondary};">${p.role}</div>
    </div>`
  ).join('')

  const allocHtml = designBrand.allocation.map(a =>
    `<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
      <div style="width:8px;height:8px;border-radius:2px;background:${a.color};flex-shrink:0;"></div>
      <div style="font-size:9.5px;color:${theme.textPrimary};flex:1;">${a.label}</div>
      <div style="width:${a.pct * 1.2}px;height:6px;background:${a.color};border-radius:3px;opacity:0.8;"></div>
      <div style="font-size:9px;color:${theme.textSecondary};min-width:28px;text-align:right;">${a.pct}%</div>
    </div>`
  ).join('')

  const typeHtml = designBrand.typescale.map(t =>
    `<div style="display:flex;align-items:center;gap:10px;padding:5px 0;border-bottom:1px solid ${theme.border};">
      <span style="font-size:9px;background:${theme.accent}15;color:${theme.accent};border-radius:3px;padding:1px 6px;font-weight:700;min-width:44px;text-align:center;">${t.level}</span>
      <span style="font-size:10px;color:${theme.textSecondary};min-width:100px;">${t.spec}</span>
      <span style="font-size:${t.size};font-weight:${t.weight};color:${t.color};${t.uppercase ? 'text-transform:uppercase;' : ''}">${t.sample}</span>
    </div>`
  ).join('')

  return S(`
    ${H(zh ? '品牌设计规范' : 'Brand Design System', theme)}
    ${body(`
      <div style="display:grid;grid-template-columns:auto 1fr 1fr;gap:20px;height:100%;">
        <!-- Palette -->
        <div>
          <div style="font-size:9px;font-weight:700;color:${theme.textMuted};letter-spacing:0.05em;text-transform:uppercase;margin-bottom:10px;">${zh ? '色板' : 'Color Palette'}</div>
          <div style="display:grid;grid-template-columns:repeat(4,44px);gap:8px;">${paletteHtml}</div>
        </div>
        <!-- Allocation -->
        <div>
          <div style="font-size:9px;font-weight:700;color:${theme.textMuted};letter-spacing:0.05em;text-transform:uppercase;margin-bottom:10px;">${zh ? '配色比例' : 'Color Allocation'}</div>
          ${allocHtml}
        </div>
        <!-- Typography -->
        <div>
          <div style="font-size:9px;font-weight:700;color:${theme.textMuted};letter-spacing:0.05em;text-transform:uppercase;margin-bottom:10px;">${zh ? '字体规范' : 'Typography'}</div>
          ${typeHtml}
        </div>
      </div>
    `)}
  `, theme)
}
