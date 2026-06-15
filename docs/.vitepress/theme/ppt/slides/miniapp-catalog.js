import { hex, addHeader } from './_utils.js'

export function render(pptx, data, theme, locale) {
  const slide = pptx.addSlide()
  slide.background = { color: hex(theme.slideBg) }
  const zh = locale === 'zh'
  const { architectureLayers } = data

  addHeader(slide, zh ? '小程序方案目录' : 'Mini-App Solution Catalog', theme)

  // Derived catalog from App Service Layer groups
  const appLayer = architectureLayers.find(l => l.num === '03')
  const catalog = appLayer ? appLayer.groups : []

  slide.addText(
    zh ? '基于 M 平台能力，覆盖金融、生活、城市三大垂直场景，提供超过 20 类标准小程序解决方案'
       : 'Built on M Platform capabilities — covering Finance, Lifestyle & City verticals with 20+ standardized mini-app solution types',
    {
      x: 0.35, y: 0.72, w: 12.63, h: 0.45,
      fontSize: 11, color: hex(theme.textSecondary), fontFace: 'Calibri', align: 'center', wrap: true,
    }
  )

  // Category columns
  const allGroups = architectureLayers.flatMap(l =>
    l.groups.map(g => ({ ...g, layerLabel: l.label, lc: l.lc }))
  )

  const cw = 3.0, ch = 5.9, cgap = 0.18
  const startX = 0.35, startY = 1.28

  allGroups.slice(0, 4).forEach((g, i) => {
    const cx = startX + i * (cw + cgap)
    const lc = g.lc.replace('#', '')

    // Column card
    slide.addShape('roundRect', {
      x: cx, y: startY, w: cw, h: ch,
      fill: { color: theme.name === 'tech-dark' ? '131E30' : 'FFFFFF' },
      line: { color: lc, width: 1 },
      rectRadius: 0.06,
    })

    // Header
    slide.addShape('roundRect', {
      x: cx, y: startY, w: cw, h: 0.52,
      fill: { color: lc + (theme.name === 'tech-dark' ? '55' : '22') },
      line: { width: 0 },
      rectRadius: 0.06,
    })
    slide.addText(g.label, {
      x: cx + 0.12, y: startY, w: cw - 0.24, h: 0.52,
      fontSize: 11, bold: true, color: lc, fontFace: 'Calibri', valign: 'middle',
    })

    // Layer origin label
    slide.addText(g.layerLabel, {
      x: cx + 0.12, y: startY + 0.6, w: cw - 0.24, h: 0.28,
      fontSize: 7.5, color: hex(theme.textMuted), fontFace: 'Calibri',
    })

    // Chips
    g.chips.forEach((chip, j) => {
      const cy = startY + 0.96 + j * 0.46
      slide.addShape('roundRect', {
        x: cx + 0.12, y: cy, w: cw - 0.24, h: 0.38,
        fill: { color: lc + (theme.name === 'tech-dark' ? '18' : '12') },
        line: { color: lc, width: 1 },
        rectRadius: 0.03,
      })
      slide.addText(chip, {
        x: cx + 0.12, y: cy, w: cw - 0.24, h: 0.38,
        fontSize: 8.5, color: lc, fontFace: 'Calibri',
        align: 'center', valign: 'middle',
      })
    })
  })
}
