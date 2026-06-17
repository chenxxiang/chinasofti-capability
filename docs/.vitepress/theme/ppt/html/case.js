import { S } from './_base.js'

export function render(caseData, theme, locale) {
  const c = caseData
  const dk = theme.name === 'tech-dark'
  const zh = locale === 'zh'

  // Screenshot column (show first 2 phone screens or 1 arch diagram)
  const screenshots = (c.screenshots ?? []).slice(0, c.screenshotType === 'phone' ? 2 : 1)
  const screenshotHtml = screenshots.map(src => {
    const isPhone = c.screenshotType === 'phone'
    return `<img src="${src}" style="width:${isPhone ? '120px' : '220px'};border-radius:${isPhone ? '16px' : '10px'};box-shadow:0 4px 16px rgba(0,0,0,${dk ? '0.5' : '0.18'});object-fit:cover;${isPhone ? 'height:240px;' : 'max-height:200px;width:100%;'}" crossorigin="anonymous" />`
  }).join('')

  // Tags
  const tagHtml = (c.tags ?? []).map(t =>
    `<span style="background:${c.accentColor}18;color:${c.accentColor};border:1px solid ${c.accentColor}40;border-radius:5px;padding:3px 8px;font-size:10px;font-weight:600;">${t}</span>`
  ).join('')

  // Content: features or metrics
  let contentHtml = ''
  if (c.contentType === 'features' && c.features) {
    contentHtml = c.features.map(f =>
      `<div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:8px;">
        <span style="width:6px;height:6px;min-width:6px;border-radius:50%;background:${c.accentColor};margin-top:4px;display:inline-block;"></span>
        <span style="font-size:11px;color:${theme.textSecondary};line-height:1.5;">${f}</span>
      </div>`
    ).join('')
  } else if (c.contentType === 'metrics' && c.metrics) {
    contentHtml = `<div style="display:flex;gap:12px;flex-wrap:wrap;">${
      c.metrics.map(m =>
        `<div style="background:${dk ? theme.cardBgAlt : '#F8FAFC'};border:1px solid ${theme.border};border-radius:10px;padding:12px 14px;text-align:center;">
          <div style="font-size:22px;font-weight:900;color:${c.accentColor};line-height:1;">${m.val}</div>
          <div style="font-size:9px;color:${theme.textSecondary};margin-top:4px;white-space:pre-line;">${m.label}</div>
        </div>`
      ).join('')
    }</div>`
  }

  // Tech stack
  const techHtml = c.techStack
    ? `<div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:12px;">
        ${c.techStack.map(t => `<span style="background:${dk ? theme.cardBgAlt : '#F3F4F6'};color:${theme.textSecondary};border-radius:4px;padding:2px 7px;font-size:9.5px;border:1px solid ${theme.border};">${t}</span>`).join('')}
      </div>` : ''

  // Partner badge
  const partnerHtml = c.partner
    ? `<span style="display:inline-flex;align-items:center;gap:5px;background:${dk ? theme.cardBgAlt : '#F0F9FF'};border:1px solid ${theme.border};border-radius:6px;padding:3px 10px;font-size:9.5px;color:${theme.textSecondary};">🤝 ${c.partner}</span>` : ''

  return S(`
    <!-- Top accent bar in case color -->
    <div style="position:absolute;top:0;left:0;right:0;height:5px;background:linear-gradient(90deg,${c.accentColor},${c.accentDark ?? c.accentColor});"></div>

    <!-- Left content -->
    <div style="position:absolute;top:5px;left:0;bottom:0;width:820px;padding:24px 28px;display:flex;flex-direction:column;gap:12px;overflow:hidden;">
      <!-- Header row -->
      <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
        <span style="font-size:22px;">${c.flag}</span>
        <div>
          <div style="font-size:18px;font-weight:900;color:${theme.textPrimary};line-height:1.2;">${c.title}</div>
          <div style="font-size:11px;color:${theme.textSecondary};">${c.subtitle} · <span style="color:${c.accentColor};font-weight:600;">${c.status}</span></div>
        </div>
        <div style="margin-left:auto;display:flex;align-items:center;gap:8px;flex-wrap:wrap;">${partnerHtml}</div>
      </div>
      <!-- Tags -->
      <div style="display:flex;gap:6px;flex-wrap:wrap;">${tagHtml}</div>
      <!-- Description -->
      <div style="font-size:11px;color:${theme.textSecondary};line-height:1.65;background:${dk ? theme.cardBg : '#F8FAFC'};border:1px solid ${theme.border};border-radius:10px;padding:12px 14px;">${(c.description ?? '').replace(/<strong>/g, `<span style="font-weight:700;color:${theme.textPrimary};">`).replace(/<\/strong>/g, '</span>')}</div>
      <!-- Content: features / metrics -->
      <div style="flex:1;">${contentHtml}</div>
      <!-- Tech stack -->
      ${techHtml}
    </div>

    <!-- Right: screenshots -->
    <div style="position:absolute;top:5px;right:0;bottom:0;width:420px;background:${dk ? theme.cardBg : '#F3F4F6'};border-left:1px solid ${theme.border};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:20px;">
      ${screenshotHtml || `<div style="color:${theme.textMuted};font-size:12px;">${zh ? '暂无截图' : 'No screenshots'}</div>`}
    </div>
  `, theme)
}
