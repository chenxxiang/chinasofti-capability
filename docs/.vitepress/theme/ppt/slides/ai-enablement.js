import { hex, addHeader } from './_utils.js'

export function render(pptx, data, theme, locale) {
  const slide = pptx.addSlide()
  slide.background = { color: hex(theme.slideBg) }
  const zh = locale === 'zh'
  const { courses, clientCases } = data

  addHeader(slide, zh ? '精英赋能体系' : 'Elite Enablement System', theme)

  // Left half: course cards
  const lw = 5.9
  slide.addText(zh ? '课程体系' : 'Course Curriculum', {
    x: 0.35, y: 0.72, w: lw, h: 0.3,
    fontSize: 10, bold: true, color: hex(theme.textMuted), fontFace: 'Calibri',
  })

  const ch = 1.4
  courses.forEach((c, i) => {
    const cy = 1.08 + i * (ch + 0.14)
    slide.addShape('roundRect', {
      x: 0.35, y: cy, w: lw, h: ch,
      fill: { color: theme.name === 'tech-dark' ? '131E30' : 'FFFFFF' },
      line: { color: theme.name === 'tech-dark' ? '2A3A50' : 'E5E7EB', width: 1 },
      rectRadius: 0.06,
    })
    slide.addShape('roundRect', {
      x: 0.35, y: cy, w: 0.85, h: ch,
      fill: { color: c.color.replace('#', '') },
      line: { width: 0 },
      rectRadius: 0.06,
    })
    slide.addText(c.day, {
      x: 0.35, y: cy, w: 0.85, h: ch,
      fontSize: 8, bold: true, color: 'FFFFFF', align: 'center', valign: 'middle', fontFace: 'Calibri',
    })
    slide.addText(c.title, {
      x: 1.3, y: cy + 0.1, w: lw - 1.05, h: 0.42,
      fontSize: 10.5, bold: true, color: hex(theme.textPrimary), fontFace: 'Calibri', wrap: true,
    })
    slide.addText(c.desc, {
      x: 1.3, y: cy + 0.52, w: lw - 1.05, h: 0.75,
      fontSize: 8.5, color: hex(theme.textSecondary), fontFace: 'Calibri', wrap: true,
    })
  })

  // Vertical divider
  slide.addShape('rect', {
    x: 6.52, y: 0.72, w: 0.02, h: 6.55,
    fill: { color: theme.name === 'tech-dark' ? '2A3A50' : 'E5E7EB' },
    line: { width: 0 },
  })

  // Right half: client cases
  const rx = 6.7, rw = 6.28
  slide.addText(zh ? '标杆客户案例' : 'Client Success Stories', {
    x: rx, y: 0.72, w: rw, h: 0.3,
    fontSize: 10, bold: true, color: hex(theme.textMuted), fontFace: 'Calibri',
  })

  clientCases.slice(0, 6).forEach((cc, i) => {
    const col = i % 2, row = Math.floor(i / 2)
    const ccw = (rw - 0.18) / 2, cch = 1.88
    const cx = rx + col * (ccw + 0.18)
    const cy = 1.08 + row * (cch + 0.14)

    slide.addShape('roundRect', {
      x: cx, y: cy, w: ccw, h: cch,
      fill: { color: theme.name === 'tech-dark' ? '131E30' : 'FFFFFF' },
      line: { color: cc.color.replace('#', ''), width: 1 },
      rectRadius: 0.06,
    })
    slide.addText(cc.industry, {
      x: cx + 0.12, y: cy + 0.12, w: ccw - 0.24, h: 0.28,
      fontSize: 8, bold: true, color: cc.color.replace('#', ''), fontFace: 'Calibri',
    })
    slide.addText(cc.name, {
      x: cx + 0.12, y: cy + 0.4, w: ccw - 0.24, h: 0.42,
      fontSize: 10, bold: true, color: hex(theme.textPrimary), fontFace: 'Calibri', wrap: true,
    })
    slide.addText(cc.result, {
      x: cx + 0.12, y: cy + 0.85, w: ccw - 0.24, h: 0.92,
      fontSize: 8.5, color: hex(theme.textSecondary), fontFace: 'Calibri', wrap: true,
    })
  })
}
