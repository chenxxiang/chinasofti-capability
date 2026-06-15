import { hex, addHeader, gradColors } from './_utils.js'

export function render(pptx, data, theme, locale) {
  const slide = pptx.addSlide()
  slide.background = { color: hex(theme.slideBg) }
  const zh = locale === 'zh'
  const { platforms } = data

  addHeader(slide, zh ? '技术平台与应用场景' : 'Tech Platforms & Use Cases', theme)

  // Section label
  slide.addText(zh ? '平台工具矩阵' : 'Platform Toolkit', {
    x: 0.35, y: 0.72, w: 12.63, h: 0.32,
    fontSize: 10, bold: true, color: hex(theme.textMuted), fontFace: 'Calibri',
  })

  // 4 platform cards in a 2×2 grid
  const cw = 6.17, ch = 2.85, cgap = 0.29
  const startX = 0.35, startY = 1.1

  platforms.forEach((p, i) => {
    const col = i % 2
    const row = Math.floor(i / 2)
    const cx = startX + col * (cw + cgap)
    const cy = startY + row * (ch + 0.22)
    const { from, to } = gradColors(p.grad)

    // Card
    slide.addShape('roundRect', {
      x: cx, y: cy, w: cw, h: ch,
      fill: { color: theme.name === 'tech-dark' ? '131E30' : 'FFFFFF' },
      line: { color: theme.name === 'tech-dark' ? '2A3A50' : 'E5E7EB', width: 1 },
      rectRadius: 0.08,
    })

    // Left gradient accent strip
    slide.addShape('roundRect', {
      x: cx, y: cy, w: 0.22, h: ch,
      fill: { type: 'gradient', angle: 180, stops: [{ position: 0, color: from }, { position: 100, color: to }] },
      line: { width: 0 },
      rectRadius: 0.08,
    })

    // Platform name
    slide.addText(p.name, {
      x: cx + 0.38, y: cy + 0.35, w: cw - 0.55, h: 0.48,
      fontSize: 15, bold: true, color: from, fontFace: 'Calibri',
    })

    // Description
    slide.addText(p.desc, {
      x: cx + 0.38, y: cy + 0.88, w: cw - 0.55, h: 1.72,
      fontSize: 10.5, color: hex(theme.textSecondary), fontFace: 'Calibri', wrap: true, valign: 'top',
    })
  })
}
