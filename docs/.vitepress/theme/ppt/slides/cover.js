import { hex } from './_utils.js'

export function render(pptx, data, theme, locale) {
  const slide = pptx.addSlide()
  slide.background = { color: hex(theme.slideBg) }
  const zh = locale === 'zh'
  const { clientName } = data

  // Left dark panel
  slide.addShape('rect', {
    x: 0, y: 0, w: 4.4, h: 7.5,
    fill: { type: 'gradient', angle: 180, stops: [{ position: 0, color: '0D1628' }, { position: 100, color: '1A2A42' }] },
    line: { width: 0 },
  })

  // Accent top stripe
  slide.addShape('rect', {
    x: 0, y: 0, w: 4.4, h: 0.12,
    fill: { color: hex(theme.accent) },
    line: { width: 0 },
  })

  // CSI label
  slide.addText('ChinaSoft International', {
    x: 0.35, y: 0.55, w: 3.7, h: 0.35,
    fontSize: 10, bold: true, color: hex(theme.accent), fontFace: 'Calibri',
  })

  // Company headline
  slide.addText(zh ? '中软国际\n科技服务平台' : 'A Leading Global\nTechnology\nServices Platform', {
    x: 0.35, y: 1.0, w: 3.7, h: 1.8,
    fontSize: 18, bold: true, color: 'FFFFFF', fontFace: 'Calibri',
    lineSpacingMultiple: 1.25,
  })

  // Divider
  slide.addShape('rect', {
    x: 0.35, y: 2.95, w: 1.8, h: 0.03,
    fill: { color: hex(theme.accent) },
    line: { width: 0 },
  })

  // Key stats
  const stats = [
    ['80K+', zh ? '员工' : 'Employees'],
    ['70+',  zh ? '全球城市' : 'Cities Worldwide'],
    ['1000+', zh ? '全球客户' : 'Global Clients'],
  ]
  stats.forEach(([val, lbl], i) => {
    const y = 3.15 + i * 0.85
    slide.addText(val, { x: 0.35, y, w: 3.7, h: 0.38, fontSize: 18, bold: true, color: hex(theme.accent), fontFace: 'Calibri' })
    slide.addText(lbl, { x: 0.35, y: y + 0.36, w: 3.7, h: 0.28, fontSize: 9, color: 'AABBCC', fontFace: 'Calibri' })
  })

  // Right side — main title
  slide.addText(zh ? '能力介绍方案' : 'Capability Presentation', {
    x: 5.0, y: 1.5, w: 7.9, h: 0.8,
    fontSize: 30, bold: true, color: hex(theme.textPrimary), fontFace: 'Calibri',
  })

  if (clientName) {
    slide.addShape('roundRect', {
      x: 5.0, y: 2.45, w: 3.6, h: 0.42,
      fill: { color: hex(theme.accent) },
      line: { width: 0 },
      rectRadius: 0.04,
    })
    slide.addText(zh ? `客户：${clientName}` : `Client: ${clientName}`, {
      x: 5.0, y: 2.45, w: 3.6, h: 0.42,
      fontSize: 12, bold: true, color: 'FFFFFF', fontFace: 'Calibri',
      align: 'center', valign: 'middle',
    })
  }

  // Capabilities row
  const caps = zh
    ? ['AI 智能', '云服务', '企业小程序', '智慧城市', 'ODC']
    : ['AI', 'Cloud', 'Mini-App', 'Smart City', 'ODC']
  caps.forEach((c, i) => {
    slide.addShape('roundRect', {
      x: 5.0 + i * 1.6, y: 4.1, w: 1.45, h: 0.35,
      fill: { color: theme.name === 'tech-dark' ? '1E2F46' : 'F3F4F6' },
      line: { width: 0 },
      rectRadius: 0.04,
    })
    slide.addText(c, {
      x: 5.0 + i * 1.6, y: 4.1, w: 1.45, h: 0.35,
      fontSize: 9, color: hex(theme.textSecondary), align: 'center', valign: 'middle', fontFace: 'Calibri',
    })
  })

  // Date
  const now = new Date()
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
  slide.addText(dateStr, {
    x: 5.0, y: 7.1, w: 7.9, h: 0.3,
    fontSize: 9, color: hex(theme.textMuted), fontFace: 'Calibri',
  })

  // Bottom accent
  slide.addShape('rect', {
    x: 4.4, y: 7.38, w: 8.93, h: 0.12,
    fill: { color: hex(theme.accent) },
    line: { width: 0 },
  })
}
