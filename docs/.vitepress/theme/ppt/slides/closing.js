import { hex } from './_utils.js'

export function render(pptx, data, theme, locale) {
  const slide = pptx.addSlide()
  slide.background = { color: hex(theme.slideBg) }
  const zh = locale === 'zh'
  const { clientName } = data

  // Full-width accent bar at top
  slide.addShape('rect', {
    x: 0, y: 0, w: 13.33, h: 0.1,
    fill: { color: hex(theme.accent) },
    line: { width: 0 },
  })

  // Center card
  slide.addShape('roundRect', {
    x: 2.5, y: 1.2, w: 8.33, h: 5.1,
    fill: { color: theme.name === 'tech-dark' ? '131E30' : 'FFFFFF' },
    line: { color: theme.name === 'tech-dark' ? '2A3A50' : 'E5E7EB', width: 1 },
    rectRadius: 0.08,
  })

  // Thank you
  slide.addText(zh ? '感谢您的关注' : 'Thank You', {
    x: 2.5, y: 1.8, w: 8.33, h: 0.9,
    fontSize: 34, bold: true, color: hex(theme.accent), align: 'center', fontFace: 'Calibri',
  })

  // Subtitle
  const sub = clientName
    ? (zh ? `期待与 ${clientName} 携手共进` : `Looking forward to partnering with ${clientName}`)
    : (zh ? '期待与您携手共进' : 'We look forward to working with you')
  slide.addText(sub, {
    x: 2.5, y: 2.85, w: 8.33, h: 0.5,
    fontSize: 14, color: hex(theme.textSecondary), align: 'center', fontFace: 'Calibri',
  })

  // Divider
  slide.addShape('rect', {
    x: 5.4, y: 3.55, w: 2.5, h: 0.03,
    fill: { color: hex(theme.accent) },
    line: { width: 0 },
  })

  // Contact info
  const contacts = [
    { label: zh ? '公司网站' : 'Website',  val: 'www.chinasofti.com' },
    { label: 'Email',   val: 'overseas@chinasofti.com' },
  ]
  contacts.forEach(({ label, val }, i) => {
    slide.addText(label, {
      x: 2.5, y: 3.78 + i * 0.55, w: 8.33, h: 0.25,
      fontSize: 9, color: hex(theme.textMuted), align: 'center', fontFace: 'Calibri',
    })
    slide.addText(val, {
      x: 2.5, y: 4.0 + i * 0.55, w: 8.33, h: 0.28,
      fontSize: 11, color: hex(theme.textPrimary), align: 'center', fontFace: 'Calibri', bold: true,
    })
  })

  // Footer bar
  slide.addShape('rect', {
    x: 0, y: 7.3, w: 13.33, h: 0.2,
    fill: { color: hex(theme.accent) },
    line: { width: 0 },
  })
  slide.addText('ChinaSoft International  ·  中软国际', {
    x: 0, y: 7.3, w: 13.33, h: 0.2,
    fontSize: 8, color: 'FFFFFF', align: 'center', valign: 'middle', fontFace: 'Calibri',
  })
}
