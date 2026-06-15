import { hex } from './_utils.js'

/**
 * Renders one slide for a single case object.
 * data: a single case entry from cases.{locale}.js
 */
export function render(pptx, data, theme, locale) {
  const slide = pptx.addSlide()
  slide.background = { color: hex(theme.slideBg) }
  const zh = locale === 'zh'
  const c = data
  const accent = (c.accentColor ?? '#1d4ed8').replace('#', '')
  const accentDark = (c.accentDark ?? c.accentColor ?? '#1d4ed8').replace('#', '')

  // Header bar with case accent color
  slide.addShape('rect', {
    x: 0, y: 0, w: 13.33, h: 0.58,
    fill: { type: 'gradient', angle: 90, stops: [{ position: 0, color: accentDark }, { position: 100, color: accent }] },
    line: { width: 0 },
  })

  // Flag + country
  slide.addText(`${c.flag}  ${c.country}`, {
    x: 0.35, y: 0, w: 4.0, h: 0.58,
    fontSize: 12, color: 'FFFFFF', valign: 'middle', fontFace: 'Calibri',
  })

  // Status
  slide.addText(c.status, {
    x: 9.0, y: 0, w: 4.0, h: 0.58,
    fontSize: 10, color: 'FFFFFF', valign: 'middle', align: 'right', fontFace: 'Calibri', opacity: 80,
  })

  // Title + subtitle
  slide.addText(c.title, {
    x: 0.35, y: 0.68, w: 7.5, h: 0.65,
    fontSize: 24, bold: true, color: hex(theme.textPrimary), fontFace: 'Calibri',
  })
  slide.addText(c.subtitle, {
    x: 0.35, y: 1.38, w: 7.5, h: 0.38,
    fontSize: 12, color: `${accent}`, fontFace: 'Calibri',
  })

  // Tags
  c.tags.forEach((tag, i) => {
    const tx = 0.35 + i * 2.15
    slide.addShape('roundRect', {
      x: tx, y: 1.85, w: 2.0, h: 0.32,
      fill: { color: accent + '22' },
      line: { color: accent, width: 1 },
      rectRadius: 0.04,
    })
    slide.addText(tag, {
      x: tx, y: 1.85, w: 2.0, h: 0.32,
      fontSize: 8, color: accent, align: 'center', valign: 'middle', fontFace: 'Calibri',
    })
  })

  // Description (strip HTML tags)
  const desc = (c.description ?? '').replace(/<[^>]+>/g, '')
  slide.addText(desc, {
    x: 0.35, y: 2.3, w: 7.5, h: 1.55,
    fontSize: 10.5, color: hex(theme.textSecondary), fontFace: 'Calibri', wrap: true, valign: 'top',
  })

  // Content: features or metrics
  if (c.contentType === 'features' && c.features) {
    slide.addText(zh ? '核心交付内容' : 'Key Deliverables', {
      x: 0.35, y: 3.95, w: 7.5, h: 0.3,
      fontSize: 9, bold: true, color: hex(theme.textMuted), fontFace: 'Calibri',
    })
    c.features.forEach((f, i) => {
      slide.addShape('roundRect', {
        x: 0.35, y: 4.32 + i * 0.6, w: 7.5, h: 0.48,
        fill: { color: accent + '15' },
        line: { color: accent + '44', width: 1 },
        rectRadius: 0.04,
      })
      slide.addText(`✓  ${f}`, {
        x: 0.48, y: 4.32 + i * 0.6, w: 7.24, h: 0.48,
        fontSize: 9.5, color: hex(theme.textPrimary), fontFace: 'Calibri', valign: 'middle',
      })
    })
  } else if (c.contentType === 'metrics' && c.metrics) {
    slide.addText(zh ? '项目关键指标' : 'Key Metrics', {
      x: 0.35, y: 3.95, w: 7.5, h: 0.3,
      fontSize: 9, bold: true, color: hex(theme.textMuted), fontFace: 'Calibri',
    })
    const mw = (7.5 - 0.3 * (c.metrics.length - 1)) / c.metrics.length
    c.metrics.forEach((m, i) => {
      const mx = 0.35 + i * (mw + 0.3)
      slide.addShape('roundRect', {
        x: mx, y: 4.32, w: mw, h: 2.95,
        fill: { color: accent + '18' },
        line: { color: accent, width: 1 },
        rectRadius: 0.06,
      })
      slide.addText(m.val, {
        x: mx + 0.12, y: 4.55, w: mw - 0.24, h: 0.75,
        fontSize: 26, bold: true, color: accent, align: 'center', fontFace: 'Calibri',
      })
      slide.addText(m.label.replace(/\\n/g, '\n'), {
        x: mx + 0.12, y: 5.38, w: mw - 0.24, h: 1.68,
        fontSize: 9, color: hex(theme.textSecondary), align: 'center', fontFace: 'Calibri', wrap: true,
      })
    })
  }

  // Right screenshot placeholder area
  slide.addShape('roundRect', {
    x: 8.2, y: 0.72, w: 4.78, h: 6.55,
    fill: { color: theme.name === 'tech-dark' ? '131E30' : 'F8FAFC' },
    line: { color: accent + '44', width: 1 },
    rectRadius: 0.08,
  })
  slide.addText(zh ? '应用截图' : 'App Screenshots', {
    x: 8.2, y: 3.55, w: 4.78, h: 0.45,
    fontSize: 11, color: hex(theme.textMuted), align: 'center', fontFace: 'Calibri',
  })
  slide.addText(c.screenshotType === 'phone' ? '📱' : '🖥️', {
    x: 8.2, y: 3.1, w: 4.78, h: 0.5, fontSize: 22, align: 'center',
  })
}
