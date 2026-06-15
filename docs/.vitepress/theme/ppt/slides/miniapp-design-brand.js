import { hex, addHeader } from './_utils.js'

export function render(pptx, data, theme, locale) {
  const slide = pptx.addSlide()
  slide.background = { color: hex(theme.slideBg) }
  const zh = locale === 'zh'
  const { designBrand } = data

  addHeader(slide, zh ? '品牌设计规范' : 'Brand Design System', theme)

  // Left: Color palette
  const lx = 0.35, lw = 5.8
  slide.addText(zh ? '色彩系统' : 'Color System', {
    x: lx, y: 0.72, w: lw, h: 0.3,
    fontSize: 10, bold: true, color: hex(theme.textMuted), fontFace: 'Calibri',
  })

  // Palette swatches (2×4 grid)
  const sw = 2.7, sh = 0.55, sgap = 0.1
  designBrand.palette.slice(0, 8).forEach((p, i) => {
    const col = i % 2, row = Math.floor(i / 2)
    const sx = lx + col * (sw + sgap)
    const sy = 1.08 + row * (sh + sgap)
    const pColor = p.hex.replace('#', '')

    slide.addShape('roundRect', {
      x: sx, y: sy, w: sh * 1.5, h: sh,
      fill: { color: pColor },
      line: { width: 0 },
      rectRadius: 0.04,
    })
    slide.addText(`${p.name}\n${p.hex}`, {
      x: sx + sh * 1.5 + 0.1, y: sy, w: sw - sh * 1.5 - 0.1, h: sh,
      fontSize: 8.5, color: hex(theme.textPrimary), fontFace: 'Calibri', valign: 'middle',
    })
    slide.addText(p.role, {
      x: sx + sh * 1.5 + 0.1, y: sy + sh * 0.55, w: sw - sh * 1.5 - 0.1, h: sh * 0.45,
      fontSize: 7, color: hex(theme.textMuted), fontFace: 'Calibri',
    })
  })

  // Vertical divider
  slide.addShape('rect', {
    x: 6.42, y: 0.72, w: 0.02, h: 6.55,
    fill: { color: theme.name === 'tech-dark' ? '2A3A50' : 'E5E7EB' },
    line: { width: 0 },
  })

  // Right: Typography scale
  const rx = 6.6, rw = 6.38
  slide.addText(zh ? '字体排版规范' : 'Typography Scale', {
    x: rx, y: 0.72, w: rw, h: 0.3,
    fontSize: 10, bold: true, color: hex(theme.textMuted), fontFace: 'Calibri',
  })

  designBrand.typescale.forEach((t, i) => {
    const ty = 1.08 + i * 1.2
    slide.addShape('roundRect', {
      x: rx, y: ty, w: rw, h: 1.08,
      fill: { color: theme.name === 'tech-dark' ? '131E30' : 'FFFFFF' },
      line: { color: theme.name === 'tech-dark' ? '2A3A50' : 'E5E7EB', width: 1 },
      rectRadius: 0.05,
    })
    // Level badge
    slide.addShape('roundRect', {
      x: rx, y: ty, w: 0.7, h: 1.08,
      fill: { color: '43944733' },
      line: { width: 0 },
      rectRadius: 0.05,
    })
    slide.addText(t.level, {
      x: rx, y: ty, w: 0.7, h: 1.08,
      fontSize: 10, bold: true, color: '439447', align: 'center', valign: 'middle', fontFace: 'Calibri',
    })
    // Sample text
    slide.addText(t.sample, {
      x: rx + 0.82, y: ty + 0.12, w: rw - 1.0, h: 0.5,
      fontSize: Math.min(parseFloat(t.spec) || 14, 18), bold: t.weight >= 700,
      color: t.color.replace('#', ''), fontFace: 'Calibri',
    })
    slide.addText(t.spec, {
      x: rx + 0.82, y: ty + 0.62, w: rw - 1.0, h: 0.35,
      fontSize: 8, color: hex(theme.textMuted), fontFace: 'Calibri',
    })
  })
}
