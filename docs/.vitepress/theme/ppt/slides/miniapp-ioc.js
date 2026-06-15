import { hex, addHeader } from './_utils.js'

export function render(pptx, data, theme, locale) {
  const slide = pptx.addSlide()
  slide.background = { color: hex(theme.slideBg) }
  const zh = locale === 'zh'

  addHeader(slide, zh ? 'IOC 运营指挥中心' : 'IOC Leadership Dashboard', theme)

  slide.addText(
    zh ? 'A real-time command-and-control interface — aggregating Mobile Money, Risk Control, Settlement, and Biller operations into a single pane of glass'
       : 'A real-time command-and-control interface — aggregating Mobile Money, Risk Control, Settlement, and Biller operations into a single pane of glass',
    {
      x: 0.35, y: 0.72, w: 12.63, h: 0.42,
      fontSize: 10, color: hex(theme.textSecondary), fontFace: 'Calibri', align: 'center',
    }
  )

  // KPI cards row
  const kpis = [
    { label: zh ? '实时交易量' : 'Live Transactions',  value: '47,000+', color: '10b981' },
    { label: zh ? '系统可用率' : 'Uptime SLA',         value: '99.9%',   color: '3b82f6' },
    { label: zh ? '活跃小程序' : 'Active Mini-Apps',   value: '12',      color: 'a78bfa' },
    { label: zh ? '日活跃用户' : 'Daily Users',        value: '18,500+', color: 'f59e0b' },
  ]

  const kw = 2.95, kh = 1.35, kgap = 0.18
  kpis.forEach((k, i) => {
    const kx = 0.35 + i * (kw + kgap)
    slide.addShape('roundRect', {
      x: kx, y: 1.25, w: kw, h: kh,
      fill: { color: theme.name === 'tech-dark' ? '131E30' : 'FFFFFF' },
      line: { color: k.color, width: 1 },
      rectRadius: 0.06,
    })
    slide.addText(k.value, {
      x: kx + 0.12, y: 1.35, w: kw - 0.24, h: 0.58,
      fontSize: 22, bold: true, color: k.color, align: 'center', fontFace: 'Calibri',
    })
    slide.addText(k.label, {
      x: kx + 0.12, y: 1.92, w: kw - 0.24, h: 0.4,
      fontSize: 9, color: hex(theme.textSecondary), align: 'center', fontFace: 'Calibri',
    })
  })

  // Capabilities grid (2 × 3)
  slide.addText(zh ? '核心功能模块' : 'Core Capabilities', {
    x: 0.35, y: 2.78, w: 12.63, h: 0.3,
    fontSize: 10, bold: true, color: hex(theme.textMuted), fontFace: 'Calibri',
  })

  const caps = [
    { icon: '📊', label: zh ? '实时交易监控' : 'Real-Time Transaction Monitor', color: '10b981' },
    { icon: '🛡️', label: zh ? '风险预警与自动冻结' : 'Risk Alert & Auto-Freeze',   color: 'ef4444' },
    { icon: '📈', label: zh ? 'KPI 绩效追踪' : 'KPI Performance Tracking',        color: '3b82f6' },
    { icon: '💰', label: zh ? '清算对账中心' : 'Settlement Reconciliation',        color: 'f59e0b' },
    { icon: '🔄', label: zh ? '实时交易流水' : 'Live Transaction Feed',            color: 'a78bfa' },
    { icon: '🧩', label: zh ? '多 App 状态看板' : 'Multi-App Status Panel',         color: '06b6d4' },
  ]

  const cw = 4.0, ch = 1.7, cgap = 0.22
  caps.forEach((c, i) => {
    const col = i % 3, row = Math.floor(i / 3)
    const cx = 0.35 + col * (cw + cgap)
    const cy = 3.15 + row * (ch + 0.2)

    slide.addShape('roundRect', {
      x: cx, y: cy, w: cw, h: ch,
      fill: { color: theme.name === 'tech-dark' ? '131E30' : 'FFFFFF' },
      line: { color: c.color, width: 1 },
      rectRadius: 0.06,
    })
    slide.addText(c.icon, {
      x: cx + 0.15, y: cy + 0.15, w: 0.55, h: 0.55, fontSize: 20,
    })
    slide.addText(c.label, {
      x: cx + 0.78, y: cy + 0.22, w: cw - 0.95, h: 0.55,
      fontSize: 11, bold: true, color: c.color, fontFace: 'Calibri', wrap: true,
    })
    slide.addText(zh ? '实时数据驱动，秒级更新' : 'Real-time data, second-level refresh', {
      x: cx + 0.15, y: cy + 0.88, w: cw - 0.3, h: 0.65,
      fontSize: 8.5, color: hex(theme.textSecondary), fontFace: 'Calibri', wrap: true,
    })
  })
}
