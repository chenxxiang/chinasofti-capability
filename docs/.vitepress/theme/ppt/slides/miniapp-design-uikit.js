import { hex, addHeader } from './_utils.js'

export function render(pptx, data, theme, locale) {
  const slide = pptx.addSlide()
  slide.background = { color: hex(theme.slideBg) }
  const zh = locale === 'zh'
  const { designUIKit } = data

  addHeader(slide, zh ? 'Mobile App UI 组件库' : 'Mobile App UI Kit', theme)

  const dk = theme.name === 'tech-dark'
  const cardBg = dk ? '131E30' : 'FFFFFF'
  const cardBd = dk ? '2A3A50' : 'E5E7EB'

  // Sections layout: 2 rows × 2 cols top, then themes row
  const sections = [
    { label: zh ? '功能图标' : 'Function Icons',    items: designUIKit.icons,   cols: 4 },
    { label: zh ? '按钮组件' : 'Button Components', items: designUIKit.buttons, cols: 3 },
    { label: zh ? '输入组件' : 'Input Components',  items: designUIKit.inputs,  cols: 2 },
    { label: zh ? '卡片组件' : 'Card Components',   items: designUIKit.cards,   cols: 3 },
  ]

  const cw = 6.17, ch = 2.6, cgap = 0.29
  const startX = 0.35, startY = 0.72

  sections.forEach((sec, si) => {
    const col = si % 2, row = Math.floor(si / 2)
    const sx = startX + col * (cw + cgap)
    const sy = startY + row * (ch + 0.22)

    slide.addShape('roundRect', {
      x: sx, y: sy, w: cw, h: ch,
      fill: { color: cardBg },
      line: { color: cardBd, width: 1 },
      rectRadius: 0.06,
    })

    // Section label
    slide.addText(sec.label, {
      x: sx + 0.15, y: sy + 0.1, w: cw - 0.3, h: 0.32,
      fontSize: 10, bold: true, color: hex(theme.textPrimary), fontFace: 'Calibri',
    })

    // Items as chips
    const chipW = (cw - 0.3 - 0.1 * (sec.cols - 1)) / sec.cols
    sec.items.forEach((item, ii) => {
      const icol = ii % sec.cols, irow = Math.floor(ii / sec.cols)
      const ix = sx + 0.15 + icol * (chipW + 0.1)
      const iy = sy + 0.52 + irow * 0.48
      if (iy + 0.38 > sy + ch - 0.1) return
      slide.addShape('roundRect', {
        x: ix, y: iy, w: chipW, h: 0.38,
        fill: { color: dk ? '1A2A40' : 'F3F4F6' },
        line: { color: cardBd, width: 1 },
        rectRadius: 0.03,
      })
      slide.addText(item, {
        x: ix, y: iy, w: chipW, h: 0.38,
        fontSize: 8, color: hex(theme.textSecondary), align: 'center', valign: 'middle', fontFace: 'Calibri',
      })
    })
  })

  // Brand themes row
  const ty = startY + 2 * (ch + 0.22)
  slide.addShape('roundRect', {
    x: startX, y: ty, w: 12.63, h: 1.05,
    fill: { color: cardBg },
    line: { color: cardBd, width: 1 },
    rectRadius: 0.06,
  })
  slide.addText(zh ? '品牌主题色' : 'Brand Themes', {
    x: startX + 0.15, y: ty + 0.08, w: 2.0, h: 0.32,
    fontSize: 10, bold: true, color: hex(theme.textPrimary), fontFace: 'Calibri',
  })
  const tw = (12.63 - 0.5 - 0.18 * (designUIKit.themes.length - 1)) / designUIKit.themes.length
  designUIKit.themes.forEach((t, i) => {
    const tx = startX + 0.15 + i * (tw + 0.18)
    slide.addShape('roundRect', {
      x: tx, y: ty + 0.45, w: tw, h: 0.46,
      fill: { color: t.primary.replace('#', '') },
      line: { width: 0 },
      rectRadius: 0.04,
    })
    slide.addText(t.bank, {
      x: tx, y: ty + 0.45, w: tw, h: 0.46,
      fontSize: 8, color: 'FFFFFF', align: 'center', valign: 'middle', fontFace: 'Calibri', bold: true,
    })
  })
}
