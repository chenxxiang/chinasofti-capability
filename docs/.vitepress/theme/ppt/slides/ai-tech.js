import { hex, addHeader, gradColors } from './_utils.js'

export function render(pptx, data, theme, locale) {
  const slide = pptx.addSlide()
  slide.background = { color: hex(theme.slideBg) }
  const zh = locale === 'zh'
  const { stages } = data

  addHeader(slide, zh ? '精英赋能五阶段' : 'Elite Enablement — 5 Stages', theme)

  // 5 stage cards stacked vertically
  const cw = 12.63, ch = 1.2, cgap = 0.1
  const startX = 0.35, startY = 0.72

  stages.forEach((s, i) => {
    const cy = startY + i * (ch + cgap)
    const { from, to } = gradColors(s.grad)

    // Card
    slide.addShape('roundRect', {
      x: startX, y: cy, w: cw, h: ch,
      fill: { color: theme.name === 'tech-dark' ? '131E30' : 'FFFFFF' },
      line: { color: theme.name === 'tech-dark' ? '2A3A50' : 'E5E7EB', width: 1 },
      rectRadius: 0.06,
    })

    // Gradient left badge
    slide.addShape('roundRect', {
      x: startX, y: cy, w: 1.05, h: ch,
      fill: { type: 'gradient', angle: 135, stops: [{ position: 0, color: from }, { position: 100, color: to }] },
      line: { width: 0 },
      rectRadius: 0.06,
    })

    // Stage number
    slide.addText(s.num, {
      x: startX, y: cy, w: 1.05, h: ch,
      fontSize: 18, bold: true, color: 'FFFFFF', align: 'center', valign: 'middle', fontFace: 'Calibri',
    })

    // Stage title
    slide.addText(s.title, {
      x: startX + 1.18, y: cy + 0.1, w: 3.2, h: 0.42,
      fontSize: 13, bold: true, color: from, fontFace: 'Calibri',
    })

    // Description
    slide.addText(s.desc, {
      x: startX + 1.18, y: cy + 0.52, w: cw - 1.35, h: 0.58,
      fontSize: 9.5, color: hex(theme.textSecondary), fontFace: 'Calibri', wrap: true,
    })
  })
}
