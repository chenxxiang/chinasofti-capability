import { S, H, body } from './_base.js'

export function render(data, theme, locale) {
  const zh = locale === 'zh'
  const dk = theme.name === 'tech-dark'
  const { heroStats } = data

  const statsHtml = heroStats.map(s =>
    `<div style="background:${dk ? theme.cardBg : '#FFFFFF'};border:1px solid ${theme.border};border-radius:12px;padding:20px 16px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,${dk ? '0.25' : '0.05'});">
      <div style="font-size:44px;font-weight:900;color:${theme.accent};line-height:1;letter-spacing:-1px;">${s.val}<span style="font-size:22px;">${s.unit}</span></div>
      <div style="font-size:10px;color:${theme.textSecondary};margin-top:8px;">${s.label}</div>
    </div>`
  ).join('')

  const bullets = zh
    ? ['战略规划 + 组织建设 + 场景落地', '5天精英 AI 训战营', 'LingXi / SmartCode 平台支撑', '覆盖政府、金融、医疗等多个行业']
    : ['Strategy · Organization · Scenario delivery', '5-Day Elite AI Bootcamp', 'LingXi / SmartCode platform stack', 'Across government, finance, healthcare & more']

  return S(`
    ${H(zh ? 'AI 创新工坊' : 'AI Innovation Lab', theme)}
    ${body(`
      <div style="display:grid;grid-template-columns:1fr 340px;gap:20px;height:100%;">
        <!-- Left: intro -->
        <div style="display:flex;flex-direction:column;justify-content:center;gap:16px;">
          <div style="font-size:20px;font-weight:800;color:${theme.textPrimary};line-height:1.3;">${zh ? '以战带训 · 以训促战\nAI 企业智能化转型加速器' : 'Train Through Battle · Battle Through Training\nAI Enterprise Transformation Accelerator'}</div>
          <div style="width:48px;height:3px;background:${theme.accent};border-radius:2px;"></div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            ${bullets.map(b => `<div style="display:flex;align-items:center;gap:10px;font-size:12px;color:${theme.textSecondary};"><span style="width:6px;height:6px;min-width:6px;border-radius:50%;background:${theme.accent};display:inline-block;"></span>${b}</div>`).join('')}
          </div>
        </div>
        <!-- Right: stats -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;align-content:center;">${statsHtml}</div>
      </div>
    `)}
  `, theme)
}
