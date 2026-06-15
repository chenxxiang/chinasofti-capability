import { hex, addHeader } from './_utils.js'

export function render(pptx, data, theme, locale) {
  const slide = pptx.addSlide()
  slide.background = { color: hex(theme.slideBg) }
  const zh = locale === 'zh'
  const { coverageStats } = data

  addHeader(slide, zh ? '覆盖数字' : 'Coverage Stats', theme)

  // 2 × 2 grid of large stat cards
  const cw = 6.0, ch = 2.88, cgap = 0.63
  const startX = 0.35, startY = 0.78

  coverageStats.slice(0, 4).forEach((s, i) => {
    const col = i % 2
    const row = Math.floor(i / 2)
    const cx = startX + col * (cw + cgap)
    const cy = startY + row * (ch + 0.3)

    slide.addShape('roundRect', {
      x: cx, y: cy, w: cw, h: ch,
      fill: { color: theme.name === 'tech-dark' ? '131E30' : 'FFFFFF' },
      line: { color: theme.name === 'tech-dark' ? '2A3A50' : 'E5E7EB', width: 1 },
      rectRadius: 0.08,
    })

    // Accent left strip
    slide.addShape('roundRect', {
      x: cx, y: cy, w: 0.08, h: ch,
      fill: { color: hex(theme.accent) },
      line: { width: 0 },
      rectRadius: 0.08,
    })

    // Icon
    slide.addText(s.icon, {
      x: cx + 0.3, y: cy + 0.55, w: 0.7, h: 0.7, fontSize: 28, align: 'center',
    })

    // Big value
    slide.addText(`${s.pre}${s.value}`, {
      x: cx + 1.1, y: cy + 0.42, w: 1.8, h: 0.9,
      fontSize: 44, bold: true, color: hex(theme.accent), fontFace: 'Calibri',
    })

    // Description text
    slide.addText(s.post.trim(), {
      x: cx + 0.3, y: cy + 1.5, w: cw - 0.5, h: 1.1,
      fontSize: 13, color: hex(theme.textPrimary), fontFace: 'Calibri',
      wrap: true, valign: 'top',
    })
  })
}
