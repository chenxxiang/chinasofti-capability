import { S, H, body } from './_base.js'

export function render(data, theme, locale) {
  const zh = locale === 'zh'
  const dk = theme.name === 'tech-dark'
  const { designUIKit } = data

  const iconHtml = designUIKit.icons.map(name =>
    `<div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
      <div style="width:44px;height:44px;border-radius:10px;background:${dk ? theme.cardBg : '#F0FDF4'};border:1px solid ${theme.border};display:flex;align-items:center;justify-content:center;font-size:10px;color:#439447;font-weight:700;text-align:center;line-height:1.2;">${name}</div>
    </div>`
  ).join('')

  const btnHtml = designUIKit.buttons.map((b, i) => {
    const bgs = ['#439447', '#F5F5F0', 'transparent', '#E0E0E0', '#C0392B']
    const colors = ['#fff', '#439447', '#439447', '#9E9E9E', '#fff']
    const borders = ['none', '1px solid #439447', '1px solid #439447', 'none', 'none']
    return `<div style="padding:7px 12px;border-radius:6px;background:${bgs[i] ?? '#439447'};color:${colors[i] ?? '#fff'};border:${borders[i] ?? 'none'};font-size:10px;font-weight:600;text-align:center;">${b}</div>`
  }).join('')

  const inputHtml = designUIKit.inputs.map(label =>
    `<div style="border:1px solid ${theme.border};border-radius:8px;padding:8px 10px;background:${dk ? theme.cardBg : '#fff'};">
      <div style="font-size:8px;color:#9E9E9E;margin-bottom:3px;">${label}</div>
      <div style="height:1px;background:${theme.border};"></div>
    </div>`
  ).join('')

  const themeHtml = designUIKit.themes.map(t =>
    `<div style="display:flex;align-items:center;gap:8px;">
      <div style="width:16px;height:16px;border-radius:4px;background:${t.primary};flex-shrink:0;"></div>
      <span style="font-size:9.5px;color:${theme.textSecondary};">${t.bank}</span>
    </div>`
  ).join('')

  return S(`
    ${H(zh ? 'Mobile App UI 组件库' : 'Mobile App UI Kit', theme)}
    ${body(`
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr 140px;gap:16px;height:100%;">
        <!-- Icons -->
        <div>
          <div style="font-size:9px;font-weight:700;color:${theme.textMuted};letter-spacing:0.05em;text-transform:uppercase;margin-bottom:10px;">${zh ? '功能图标' : 'Icon Set'}</div>
          <div style="display:grid;grid-template-columns:repeat(4,44px);gap:8px;">${iconHtml}</div>
        </div>
        <!-- Buttons + Inputs -->
        <div>
          <div style="font-size:9px;font-weight:700;color:${theme.textMuted};letter-spacing:0.05em;text-transform:uppercase;margin-bottom:10px;">${zh ? '按钮规范' : 'Buttons'}</div>
          <div style="display:flex;flex-direction:column;gap:7px;margin-bottom:16px;">${btnHtml}</div>
          <div style="font-size:9px;font-weight:700;color:${theme.textMuted};letter-spacing:0.05em;text-transform:uppercase;margin-bottom:8px;">${zh ? '输入框' : 'Inputs'}</div>
          <div style="display:flex;flex-direction:column;gap:6px;">${inputHtml}</div>
        </div>
        <!-- Cards -->
        <div>
          <div style="font-size:9px;font-weight:700;color:${theme.textMuted};letter-spacing:0.05em;text-transform:uppercase;margin-bottom:10px;">${zh ? '卡片组件' : 'Cards'}</div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            ${designUIKit.cards.map(c => `<div style="background:${dk ? theme.cardBg : '#fff'};border:1px solid ${theme.border};border-radius:10px;padding:12px;font-size:10px;color:${theme.textPrimary};font-weight:600;">${c}</div>`).join('')}
          </div>
        </div>
        <!-- Theme variants -->
        <div>
          <div style="font-size:9px;font-weight:700;color:${theme.textMuted};letter-spacing:0.05em;text-transform:uppercase;margin-bottom:10px;">${zh ? '主题色' : 'Theme Variants'}</div>
          <div style="display:flex;flex-direction:column;gap:8px;">${themeHtml}</div>
        </div>
      </div>
    `)}
  `, theme)
}
