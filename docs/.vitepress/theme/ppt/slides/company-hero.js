import { hex, addHeader } from './_utils.js'

export function render(pptx, data, theme, locale) {
  const slide = pptx.addSlide()
  slide.background = { color: hex(theme.slideBg) }
  const zh = locale === 'zh'
  const { heroData } = data

  addHeader(slide, zh ? '公司介绍' : 'Company Introduction', theme)

  // Main title
  slide.addText(heroData.title, {
    x: 0.35, y: 0.72, w: 12.63, h: 0.75,
    fontSize: 22, bold: true, color: hex(theme.textPrimary), fontFace: 'Calibri',
    align: 'center',
  })

  // Tagline
  slide.addText(heroData.tagline, {
    x: 1.0, y: 1.52, w: 11.33, h: 0.55,
    fontSize: 11, color: hex(theme.textSecondary), fontFace: 'Calibri',
    align: 'center', wrap: true,
  })

  // Badges row
  const bw = 2.3
  const bgap = (12.63 - bw * 5) / 4
  heroData.badges.slice(0, 5).forEach((b, i) => {
    const bx = 0.35 + i * (bw + bgap)
    slide.addShape('roundRect', {
      x: bx, y: 2.22, w: bw, h: 0.38,
      fill: { color: theme.name === 'tech-dark' ? '1A2A40' : 'F3F4F6' },
      line: { color: theme.name === 'tech-dark' ? '2E3F58' : 'E5E7EB', width: 1 },
      rectRadius: 0.04,
    })
    slide.addText(`${b.icon}  ${b.text}`, {
      x: bx, y: 2.22, w: bw, h: 0.38,
      fontSize: 9, color: hex(theme.textSecondary), align: 'center', valign: 'middle', fontFace: 'Calibri',
    })
  })

  // Capabilities grid (3 rows × 3 cols)
  const cw = 3.95, ch = 1.35, cgap = 0.195
  heroData.capabilities.slice(0, 9).forEach((cap, i) => {
    const col = i % 3
    const row = Math.floor(i / 3)
    const cx = 0.35 + col * (cw + cgap)
    const cy = 2.78 + row * (ch + 0.15)
    slide.addShape('roundRect', {
      x: cx, y: cy, w: cw, h: ch,
      fill: { color: theme.name === 'tech-dark' ? '131E30' : 'FFFFFF' },
      line: { color: theme.name === 'tech-dark' ? '2A3A50' : 'E5E7EB', width: 1 },
      rectRadius: 0.06,
    })
    slide.addText(cap.icon, {
      x: cx, y: cy + 0.18, w: cw, h: 0.45, fontSize: 22, align: 'center',
    })
    slide.addText(cap.label, {
      x: cx, y: cy + 0.65, w: cw, h: 0.45,
      fontSize: 10, bold: true, color: hex(theme.textPrimary), align: 'center', fontFace: 'Calibri',
    })
  })
}
