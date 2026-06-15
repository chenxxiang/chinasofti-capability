import { hex, addHeader, gradColors } from './_utils.js'

export function render(pptx, data, theme, locale) {
  const slide = pptx.addSlide()
  slide.background = { color: hex(theme.slideBg) }
  const zh = locale === 'zh'
  const { pmCards } = data

  addHeader(slide, zh ? '项目管理能力' : 'Project Management', theme)

  // 5 cards in a row
  const cw = 2.34, ch = 6.3, cgap = 0.18
  const startX = 0.35, startY = 0.72

  pmCards.forEach((pm, i) => {
    const cx = startX + i * (cw + cgap)
    const { from, to } = gradColors(pm.grad)

    slide.addShape('roundRect', {
      x: cx, y: startY, w: cw, h: ch,
      fill: { color: theme.name === 'tech-dark' ? '131E30' : 'FFFFFF' },
      line: { color: from, width: 1 },
      rectRadius: 0.07,
    })

    // Gradient top
    slide.addShape('roundRect', {
      x: cx, y: startY, w: cw, h: 1.25,
      fill: { type: 'gradient', angle: 135, stops: [{ position: 0, color: from }, { position: 100, color: to }] },
      line: { width: 0 },
      rectRadius: 0.07,
    })

    // PM index
    slide.addText(`0${i + 1}`, {
      x: cx, y: startY + 0.1, w: cw, h: 0.45,
      fontSize: 18, bold: true, color: 'FFFFFF', align: 'center', fontFace: 'Calibri', opacity: 55,
    })

    // Title
    slide.addText(pm.title, {
      x: cx + 0.12, y: startY + 1.35, w: cw - 0.24, h: 0.65,
      fontSize: 13, bold: true, color: from, fontFace: 'Calibri', wrap: true,
    })

    // Description
    slide.addText(pm.desc, {
      x: cx + 0.12, y: startY + 2.08, w: cw - 0.24, h: 3.6,
      fontSize: 9, color: hex(theme.textSecondary), fontFace: 'Calibri', wrap: true, valign: 'top',
    })
  })
}
