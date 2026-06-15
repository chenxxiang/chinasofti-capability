import { hex, addHeader, gradColors } from './_utils.js'

export function render(pptx, data, theme, locale) {
  const slide = pptx.addSlide()
  slide.background = { color: hex(theme.slideBg) }
  const zh = locale === 'zh'
  const { highlights } = data

  addHeader(slide, zh ? '核心能力' : 'Core Highlights', theme)

  // 4 × 2 grid
  const cw = 2.95, ch = 2.88, cgap = 0.18
  const startX = 0.35, startY = 0.72

  highlights.slice(0, 8).forEach((h, i) => {
    const col = i % 4
    const row = Math.floor(i / 4)
    const cx = startX + col * (cw + cgap)
    const cy = startY + row * (ch + 0.15)
    const { from, to } = gradColors(h.color)

    // Card background
    slide.addShape('roundRect', {
      x: cx, y: cy, w: cw, h: ch,
      fill: { color: theme.name === 'tech-dark' ? '131E30' : 'FFFFFF' },
      line: { color: theme.name === 'tech-dark' ? '2A3A50' : 'E5E7EB', width: 1 },
      rectRadius: 0.06,
    })

    // Accent top strip inside card
    slide.addShape('roundRect', {
      x: cx, y: cy, w: cw, h: 0.08,
      fill: { type: 'gradient', angle: 90, stops: [{ position: 0, color: from }, { position: 100, color: to }] },
      line: { width: 0 },
      rectRadius: 0.06,
    })

    // Icon
    slide.addText(h.icon, {
      x: cx + 0.12, y: cy + 0.18, w: 0.5, h: 0.45, fontSize: 20, align: 'center',
    })

    // Name
    slide.addText(h.name, {
      x: cx + 0.12, y: cy + 0.65, w: cw - 0.24, h: 0.45,
      fontSize: 10, bold: true, color: hex(theme.textPrimary), fontFace: 'Calibri', wrap: true,
    })

    // Description
    slide.addText(h.desc, {
      x: cx + 0.12, y: cy + 1.1, w: cw - 0.24, h: 1.62,
      fontSize: 8.5, color: hex(theme.textSecondary), fontFace: 'Calibri',
      wrap: true, valign: 'top',
    })
  })
}
