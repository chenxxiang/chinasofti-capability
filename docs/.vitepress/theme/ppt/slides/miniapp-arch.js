import { hex, addHeader } from './_utils.js'

export function render(pptx, data, theme, locale) {
  const slide = pptx.addSlide()
  slide.background = { color: hex(theme.slideBg) }
  const zh = locale === 'zh'
  const { architectureLayers } = data

  addHeader(slide, zh ? '能力架构' : 'Architecture', theme)

  // 4 layers stacked
  const lw = 12.63, lh = 1.5, lgap = 0.08
  const startX = 0.35, startY = 0.72

  architectureLayers.forEach((layer, i) => {
    const cy = startY + i * (lh + lgap)
    const lc = layer.lc.replace('#', '')

    // Layer card
    slide.addShape('roundRect', {
      x: startX, y: cy, w: lw, h: lh,
      fill: { color: theme.name === 'tech-dark' ? '131E30' : 'FFFFFF' },
      line: { color: lc, width: 1 },
      rectRadius: 0.05,
    })

    // Left badge with layer color
    slide.addShape('roundRect', {
      x: startX, y: cy, w: 1.3, h: lh,
      fill: { color: lc + (theme.name === 'tech-dark' ? '44' : '18') },
      line: { width: 0 },
      rectRadius: 0.05,
    })

    // Layer number + label
    slide.addText(layer.num, {
      x: startX, y: cy + 0.12, w: 1.3, h: 0.45,
      fontSize: 14, bold: true, color: lc, align: 'center', fontFace: 'Calibri',
    })
    slide.addText(layer.label, {
      x: startX, y: cy + 0.56, w: 1.3, h: 0.65,
      fontSize: 7.5, bold: true, color: lc, align: 'center', fontFace: 'Calibri', wrap: true, valign: 'top',
    })
    slide.addText(layer.labelEn, {
      x: startX, y: cy + 1.18, w: 1.3, h: 0.25,
      fontSize: 5.5, color: lc, align: 'center', fontFace: 'Calibri', opacity: 70,
    })

    // Groups + chips
    let chipX = startX + 1.45
    layer.groups.forEach((g) => {
      slide.addText(g.label, {
        x: chipX, y: cy + 0.12, w: 2.5, h: 0.28,
        fontSize: 7.5, bold: true, color: hex(theme.textMuted), fontFace: 'Calibri',
      })
      g.chips.forEach((chip, j) => {
        const cx2 = chipX + Math.floor(j / 2) * 1.25
        const cy2 = cy + 0.45 + (j % 2) * 0.46
        slide.addShape('roundRect', {
          x: cx2, y: cy2, w: 1.18, h: 0.38,
          fill: { color: lc + (theme.name === 'tech-dark' ? '22' : '14') },
          line: { color: lc, width: 1 },
          rectRadius: 0.03,
        })
        slide.addText(chip, {
          x: cx2, y: cy2, w: 1.18, h: 0.38,
          fontSize: 6.5, color: lc, align: 'center', valign: 'middle', fontFace: 'Calibri',
        })
      })
      chipX += Math.ceil(g.chips.length / 2) * 1.25 + 0.35
    })
  })
}
