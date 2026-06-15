import { hex, addHeader, gradColors } from './_utils.js'

export function render(pptx, data, theme, locale) {
  const slide = pptx.addSlide()
  slide.background = { color: hex(theme.slideBg) }
  const zh = locale === 'zh'
  const { pillars } = data

  addHeader(slide, zh ? '战略框架' : 'Strategic Framework', theme)

  // 3 pillar cards
  const cw = 4.0, ch = 6.3, cgap = 0.22
  const startX = 0.35, startY = 0.72

  pillars.forEach((p, i) => {
    const cx = startX + i * (cw + cgap)
    const { from, to } = gradColors(p.grad)

    // Card
    slide.addShape('roundRect', {
      x: cx, y: startY, w: cw, h: ch,
      fill: { color: theme.name === 'tech-dark' ? '131E30' : 'FFFFFF' },
      line: { color: theme.name === 'tech-dark' ? '2A3A50' : 'E5E7EB', width: 1 },
      rectRadius: 0.08,
    })

    // Gradient top section
    slide.addShape('roundRect', {
      x: cx, y: startY, w: cw, h: 2.2,
      fill: { type: 'gradient', angle: 135, stops: [{ position: 0, color: from }, { position: 100, color: to }] },
      line: { width: 0 },
      rectRadius: 0.08,
    })

    // Pillar number
    slide.addText(`0${i + 1}`, {
      x: cx + 0.25, y: startY + 0.3, w: cw - 0.5, h: 0.7,
      fontSize: 28, bold: true, color: 'FFFFFF', fontFace: 'Calibri', opacity: 60,
    })

    // Title
    slide.addText(p.title, {
      x: cx + 0.25, y: startY + 0.98, w: cw - 0.5, h: 0.85,
      fontSize: 16, bold: true, color: 'FFFFFF', fontFace: 'Calibri', wrap: true,
    })

    // Description
    slide.addText(p.desc, {
      x: cx + 0.25, y: startY + 2.35, w: cw - 0.5, h: 1.8,
      fontSize: 10.5, color: hex(theme.textSecondary), fontFace: 'Calibri', wrap: true, valign: 'top',
    })

    // Tags
    p.tags.forEach((tag, j) => {
      const tagY = startY + 4.3 + j * 0.55
      slide.addShape('roundRect', {
        x: cx + 0.25, y: tagY, w: cw - 0.5, h: 0.38,
        fill: { color: theme.name === 'tech-dark' ? '1A2A40' : 'EFF6FF' },
        line: { color: from, width: 1 },
        rectRadius: 0.04,
      })
      slide.addText(tag, {
        x: cx + 0.25, y: tagY, w: cw - 0.5, h: 0.38,
        fontSize: 9, color: `${from}`, fontFace: 'Calibri', align: 'center', valign: 'middle',
      })
    })
  })
}
