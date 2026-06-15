import { hex, addHeader } from './_utils.js'

export function render(pptx, data, theme, locale) {
  const slide = pptx.addSlide()
  slide.background = { color: hex(theme.slideBg) }
  const zh = locale === 'zh'

  addHeader(slide, zh ? '页面复杂度规范' : 'Page Complexity Specification', theme)

  const tiers = [
    {
      level: zh ? 'Low — 低复杂度' : 'Low Complexity',
      color: '059669', manDays: 3,
      examples: zh
        ? ['静态展示页', '简单列表页', '单一表单', '标准钱包首页']
        : ['Static info page', 'Simple list view', 'Single-step form', 'Standard wallet home'],
      features: zh
        ? ['固定布局 · 无交互动画', '标准 API 对接 · 单一数据源', '无复杂业务逻辑']
        : ['Fixed layout · No animation', 'Standard API · Single data source', 'No complex business logic'],
    },
    {
      level: zh ? 'Medium — 中复杂度' : 'Medium Complexity',
      color: 'd97706', manDays: 5,
      examples: zh
        ? ['多步骤转账流程', 'Tab 切换 + 下拉刷新', '动态图表看板', 'e-KYC 引导']
        : ['Multi-step transfer', 'Tab nav + pull-to-refresh', 'Dynamic chart dashboard', 'e-KYC wizard'],
      features: zh
        ? ['含条件渲染逻辑', '多 API 聚合 · 轻量状态管理', '含输入校验与错误处理']
        : ['Conditional rendering', 'Multi-API aggregation · Light state mgmt', 'Input validation & error handling'],
    },
    {
      level: zh ? 'High — 高复杂度' : 'High Complexity',
      color: 'dc2626', manDays: 10,
      examples: zh
        ? ['实时仪表盘 / IOC', '复杂资金交易 + 风控', '直播 / 视频流', '多租户白标方案']
        : ['Real-time IOC dashboard', 'Complex transactions + risk control', 'Live video / streaming', 'Multi-tenant white-label'],
      features: zh
        ? ['WebSocket / 实时推送', '多模块深度联动', '安全加固 + 合规审计']
        : ['WebSocket / real-time push', 'Deep multi-module coupling', 'Security hardening + compliance'],
    },
  ]

  const cw = 3.98, ch = 6.15, cgap = 0.22
  const startX = 0.35, startY = 0.72

  tiers.forEach((t, i) => {
    const cx = startX + i * (cw + cgap)
    const lc = t.color

    slide.addShape('roundRect', {
      x: cx, y: startY, w: cw, h: ch,
      fill: { color: theme.name === 'tech-dark' ? '131E30' : 'FFFFFF' },
      line: { color: lc, width: 1 },
      rectRadius: 0.07,
    })

    // Top badge
    slide.addShape('roundRect', {
      x: cx, y: startY, w: cw, h: 0.85,
      fill: { color: lc + (theme.name === 'tech-dark' ? '55' : '22') },
      line: { width: 0 },
      rectRadius: 0.07,
    })

    slide.addText(t.level, {
      x: cx + 0.15, y: startY + 0.08, w: cw - 0.3, h: 0.38,
      fontSize: 13, bold: true, color: lc, fontFace: 'Calibri', valign: 'middle',
    })

    // Man-days
    slide.addText(`${t.manDays}`, {
      x: cx + 0.15, y: startY + 0.88, w: 1.0, h: 0.75,
      fontSize: 38, bold: true, color: lc, fontFace: 'Calibri',
    })
    slide.addText(zh ? 'Man-Days\n/页面' : 'Man-Days\nper page', {
      x: cx + 1.2, y: startY + 0.98, w: cw - 1.35, h: 0.65,
      fontSize: 9, color: lc, fontFace: 'Calibri', valign: 'middle',
    })

    // Divider
    slide.addShape('rect', {
      x: cx + 0.15, y: startY + 1.75, w: cw - 0.3, h: 0.02,
      fill: { color: lc + '44' }, line: { width: 0 },
    })

    // Examples
    slide.addText(zh ? '典型示例' : 'Examples', {
      x: cx + 0.15, y: startY + 1.88, w: cw - 0.3, h: 0.28,
      fontSize: 8, bold: true, color: hex(theme.textMuted), fontFace: 'Calibri',
    })
    t.examples.forEach((ex, j) => {
      slide.addText(`· ${ex}`, {
        x: cx + 0.15, y: startY + 2.2 + j * 0.42, w: cw - 0.3, h: 0.38,
        fontSize: 9, color: hex(theme.textPrimary), fontFace: 'Calibri', wrap: true,
      })
    })

    // Features
    slide.addText(zh ? '技术特征' : 'Tech Traits', {
      x: cx + 0.15, y: startY + 3.95, w: cw - 0.3, h: 0.28,
      fontSize: 8, bold: true, color: hex(theme.textMuted), fontFace: 'Calibri',
    })
    t.features.forEach((f, j) => {
      slide.addText(`· ${f}`, {
        x: cx + 0.15, y: startY + 4.28 + j * 0.55, w: cw - 0.3, h: 0.48,
        fontSize: 8.5, color: hex(theme.textSecondary), fontFace: 'Calibri', wrap: true,
      })
    })
  })
}
