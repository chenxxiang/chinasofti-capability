import { hex, addHeader, gradColors } from './_utils.js'

export function render(pptx, data, theme, locale) {
  const slide = pptx.addSlide()
  slide.background = { color: hex(theme.slideBg) }
  const zh = locale === 'zh'
  const { regions } = data

  addHeader(slide, zh ? '海外布局' : 'Global Presence', theme)

  // 5 region cards in a row
  const cw = 2.38, ch = 6.5, cgap = 0.15
  const startX = 0.35, startY = 0.72

  regions.slice(0, 5).forEach((r, i) => {
    const cx = startX + i * (cw + cgap)
    const { from, to } = gradColors(r.grad)

    // Card
    slide.addShape('roundRect', {
      x: cx, y: startY, w: cw, h: ch,
      fill: { color: theme.name === 'tech-dark' ? '131E30' : 'FFFFFF' },
      line: { color: theme.name === 'tech-dark' ? '2A3A50' : 'E5E7EB', width: 1 },
      rectRadius: 0.06,
    })

    // Color top bar
    slide.addShape('roundRect', {
      x: cx, y: startY, w: cw, h: 0.55,
      fill: { type: 'gradient', angle: 135, stops: [{ position: 0, color: from }, { position: 100, color: to }] },
      line: { width: 0 },
      rectRadius: 0.06,
    })

    // Region emoji + name
    slide.addText(`${r.badgeEmoji} ${r.title}`, {
      x: cx + 0.1, y: startY + 0.1, w: cw - 0.2, h: 0.35,
      fontSize: 11, bold: true, color: 'FFFFFF', fontFace: 'Calibri',
    })

    // Staff badge
    if (r.badges[0]) {
      slide.addText(r.badges[0].text, {
        x: cx + 0.1, y: startY + 0.65, w: cw - 0.2, h: 0.3,
        fontSize: 9, bold: true, color: hex(theme.accent), fontFace: 'Calibri',
      })
    }

    // Entities
    r.entities.forEach((e, j) => {
      slide.addText(`• ${e.name}`, {
        x: cx + 0.1, y: startY + 1.05 + j * 0.65, w: cw - 0.2, h: 0.55,
        fontSize: 7.5, color: hex(theme.textPrimary), fontFace: 'Calibri',
        wrap: true, valign: 'top',
      })
    })

    // Services label
    const tagY = startY + 1.05 + r.entities.length * 0.65 + 0.1
    slide.addText(r.svcLabel ?? 'Services', {
      x: cx + 0.1, y: tagY, w: cw - 0.2, h: 0.25,
      fontSize: 7.5, bold: true, color: hex(theme.textMuted), fontFace: 'Calibri',
    })

    // Service tags (stacked chips)
    r.tags.slice(0, 5).forEach((t, j) => {
      slide.addShape('roundRect', {
        x: cx + 0.1, y: tagY + 0.28 + j * 0.34, w: cw - 0.2, h: 0.28,
        fill: { color: theme.name === 'tech-dark' ? '1A2A40' : 'F3F4F6' },
        line: { width: 0 },
        rectRadius: 0.03,
      })
      slide.addText(t, {
        x: cx + 0.1, y: tagY + 0.28 + j * 0.34, w: cw - 0.2, h: 0.28,
        fontSize: 7, color: hex(theme.textSecondary), fontFace: 'Calibri',
        align: 'center', valign: 'middle',
      })
    })
  })
}
