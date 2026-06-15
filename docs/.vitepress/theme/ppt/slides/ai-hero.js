import { hex, addHeader } from './_utils.js'

export function render(pptx, data, theme, locale) {
  const slide = pptx.addSlide()
  slide.background = { color: hex(theme.slideBg) }
  const zh = locale === 'zh'
  const { heroStats } = data

  addHeader(slide, zh ? 'AI 创新工坊' : 'AI Innovation Lab', theme)

  // Subtitle
  slide.addText(
    zh ? 'AI 企业转型的战略伙伴 — 以赋能、场景、平台三位一体驱动智能化升级'
       : 'Your strategic partner for enterprise AI transformation — enabling AI at scale through enablement, scenarios, and platforms',
    {
      x: 0.35, y: 0.7, w: 12.63, h: 0.48,
      fontSize: 11, color: hex(theme.textSecondary), fontFace: 'Calibri', align: 'center', wrap: true,
    }
  )

  // Hero divider bar
  slide.addShape('rect', {
    x: 0.35, y: 1.28, w: 12.63, h: 0.03,
    fill: { color: theme.name === 'tech-dark' ? '2A3A50' : 'E5E7EB' },
    line: { width: 0 },
  })

  // 4 stat cards in a row
  const cw = 2.95, ch = 2.0, cgap = 0.18
  const startX = 0.35, startY = 1.42

  heroStats.slice(0, 4).forEach((s, i) => {
    const cx = startX + i * (cw + cgap)

    slide.addShape('roundRect', {
      x: cx, y: startY, w: cw, h: ch,
      fill: {
        type: 'gradient', angle: 135,
        stops: [
          { position: 0, color: theme.name === 'tech-dark' ? '131E30' : 'EFF6FF' },
          { position: 100, color: theme.name === 'tech-dark' ? '1A2A40' : 'FFFFFF' },
        ],
      },
      line: { color: hex(theme.accent), width: 1 },
      rectRadius: 0.08,
    })

    slide.addText(`${s.val}${s.unit}`, {
      x: cx + 0.15, y: startY + 0.35, w: cw - 0.3, h: 0.9,
      fontSize: 38, bold: true, color: hex(theme.accent), align: 'center', fontFace: 'Calibri',
    })
    slide.addText(s.label, {
      x: cx + 0.15, y: startY + 1.28, w: cw - 0.3, h: 0.52,
      fontSize: 10, color: hex(theme.textSecondary), align: 'center', fontFace: 'Calibri', wrap: true,
    })
  })

  // Bottom description block
  slide.addShape('roundRect', {
    x: 0.35, y: 3.6, w: 12.63, h: 3.65,
    fill: { color: theme.name === 'tech-dark' ? '131E30' : 'F8FAFC' },
    line: { color: theme.name === 'tech-dark' ? '2A3A50' : 'E5E7EB', width: 1 },
    rectRadius: 0.08,
  })
  slide.addText(zh ? '三位一体赋能模型' : 'Three-Pillar Enablement Model', {
    x: 0.65, y: 3.75, w: 12.03, h: 0.38,
    fontSize: 13, bold: true, color: hex(theme.textPrimary), fontFace: 'Calibri',
  })
  const pillarsLabel = zh
    ? ['战略与规划 — 高管对齐、目标清晰、中长期路线图', '组织与人才 — 推动组织流程转型、构建 AI 原生人才体系', '场景与创新 — 精准定位业务痛点、开展联合创新冲刺、快速实现 AI 价值']
    : ['Strategy & Planning — Executive alignment, clear goals, long-term roadmap', 'Organization & Talent — Drive org transformation, build AI-native talent', 'Scenario & Innovation — Pinpoint pain points, joint sprints, rapid value realization']
  pillarsLabel.forEach((t, i) => {
    slide.addText(t, {
      x: 0.65, y: 4.25 + i * 0.65, w: 12.03, h: 0.52,
      fontSize: 11, color: hex(theme.textSecondary), fontFace: 'Calibri',
    })
  })
}
