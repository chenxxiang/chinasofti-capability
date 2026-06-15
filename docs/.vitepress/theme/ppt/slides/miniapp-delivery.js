import { hex, addHeader, gradColors } from './_utils.js'

export function render(pptx, data, theme, locale) {
  const slide = pptx.addSlide()
  slide.background = { color: hex(theme.slideBg) }
  const zh = locale === 'zh'
  const { deliverySteps } = data

  addHeader(slide, zh ? '端到端交付体系' : 'End-to-End Delivery', theme)

  slide.addText(
    zh ? '从 M 平台部署到 SDK 集成，小程序开发、测试验证，直至安全加固与发布上线，全流程闭环交付'
       : 'From M Platform deployment and SDK integration through mini-app development, QA, security hardening to go-live — full-cycle closed-loop delivery',
    {
      x: 0.35, y: 0.72, w: 12.63, h: 0.42,
      fontSize: 10, color: hex(theme.textSecondary), fontFace: 'Calibri', align: 'center',
    }
  )

  // 5 step cards in a row
  const cw = 2.34, ch = 5.8, cgap = 0.18
  const startX = 0.35, startY = 1.25

  deliverySteps.forEach((step, i) => {
    const cx = startX + i * (cw + cgap)
    const { from, to } = gradColors(step.grad)

    // Card
    slide.addShape('roundRect', {
      x: cx, y: startY, w: cw, h: ch,
      fill: { color: theme.name === 'tech-dark' ? '131E30' : 'FFFFFF' },
      line: { color: from, width: 1 },
      rectRadius: 0.07,
    })

    // Gradient top badge
    slide.addShape('roundRect', {
      x: cx, y: startY, w: cw, h: 1.05,
      fill: { type: 'gradient', angle: 135, stops: [{ position: 0, color: from }, { position: 100, color: to }] },
      line: { width: 0 },
      rectRadius: 0.07,
    })

    // Step number
    slide.addText(step.num, {
      x: cx, y: startY + 0.08, w: cw, h: 0.45,
      fontSize: 20, bold: true, color: 'FFFFFF', align: 'center', fontFace: 'Calibri', opacity: 60,
    })

    // Arrow connector (except last)
    if (i < deliverySteps.length - 1) {
      slide.addText('›', {
        x: cx + cw, y: startY + 0.3, w: cgap, h: 0.45,
        fontSize: 18, color: from, align: 'center', fontFace: 'Calibri',
      })
    }

    // Step title
    slide.addText(step.title, {
      x: cx + 0.12, y: startY + 1.15, w: cw - 0.24, h: 0.72,
      fontSize: 11, bold: true, color: from, fontFace: 'Calibri', wrap: true, valign: 'top',
    })

    // Description
    slide.addText(step.desc, {
      x: cx + 0.12, y: startY + 1.95, w: cw - 0.24, h: 3.65,
      fontSize: 8.5, color: hex(theme.textSecondary), fontFace: 'Calibri', wrap: true, valign: 'top',
    })
  })
}
