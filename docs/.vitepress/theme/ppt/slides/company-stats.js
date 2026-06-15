import { hex, addHeader } from './_utils.js'

export function render(pptx, data, theme, locale) {
  const slide = pptx.addSlide()
  slide.background = { color: hex(theme.slideBg) }
  const zh = locale === 'zh'
  const { stats } = data

  addHeader(slide, zh ? '核心数据' : 'Key Metrics', theme)

  // 4 × 2 grid
  const cw = 2.95, ch = 2.7, cgap = 0.18
  const startX = 0.35, startY = 0.75

  stats.slice(0, 8).forEach((s, i) => {
    const col = i % 4
    const row = Math.floor(i / 4)
    const cx = startX + col * (cw + cgap)
    const cy = startY + row * (ch + 0.18)

    slide.addShape('roundRect', {
      x: cx, y: cy, w: cw, h: ch,
      fill: { color: theme.name === 'tech-dark' ? '131E30' : 'FFFFFF' },
      line: { color: theme.name === 'tech-dark' ? '2A3A50' : 'E5E7EB', width: 1 },
      rectRadius: 0.06,
    })

    // Big number
    const numStr = s.prefix
      ? `${s.prefix}${s.unit}`
      : `${s.counter ?? ''}${s.unit}`
    slide.addText(numStr, {
      x: cx + 0.15, y: cy + 0.45, w: cw - 0.3, h: 1.0,
      fontSize: 32, bold: true, color: hex(theme.accent),
      align: 'center', fontFace: 'Calibri',
    })

    // Label
    slide.addText(s.label, {
      x: cx + 0.15, y: cy + 1.55, w: cw - 0.3, h: 0.85,
      fontSize: 10, color: hex(theme.textSecondary),
      align: 'center', wrap: true, fontFace: 'Calibri',
      valign: 'top',
    })
  })
}
