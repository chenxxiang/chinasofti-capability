import { S, H, body } from './_base.js'

const IOC = {
  en: {
    title: 'IOC Dashboard — One-stop Operations Visibility',
    subtitle: 'Real-time data aggregation · Multi-source monitoring · One-click report export',
    kpis: [
      { icon: '📱', val: '120+', label: 'Active Mini-Apps' },
      { icon: '👥', val: '2M+',  label: 'Monthly Active Users' },
      { icon: '⚡', val: '99.9%', label: 'Uptime SLA' },
      { icon: '🔔', val: '<5min', label: 'Alert Response' },
    ],
    modules: [
      { color: '#1d4ed8', title: 'Business Overview', items: ['DAU/MAU trends', 'Revenue metrics', 'Conversion funnel'] },
      { color: '#7c3aed', title: 'Performance Monitor', items: ['Response time P99', 'Error rate heatmap', 'Resource utilization'] },
      { color: '#0891b2', title: 'User Insights',       items: ['User journey analysis', 'Retention cohorts', 'Feature heatmap'] },
      { color: '#d97706', title: 'Ops Alerts',          items: ['Anomaly detection', 'On-call escalation', 'Incident tracker'] },
      { color: '#059669', title: 'Quality Gate',        items: ['Code quality index', 'Test coverage', 'Release changelog'] },
      { color: '#db2777', title: 'Report Center',       items: ['Scheduled reports', 'PDF/Excel export', 'Stakeholder digest'] },
    ],
  },
  zh: {
    title: 'IOC 看板 — 一站式运营可视化',
    subtitle: '实时数据聚合 · 多源监控 · 一键报表导出',
    kpis: [
      { icon: '📱', val: '120+', label: '在运行小程序' },
      { icon: '👥', val: '200万+', label: '月活跃用户' },
      { icon: '⚡', val: '99.9%', label: '可用性 SLA' },
      { icon: '🔔', val: '<5分钟', label: '告警响应' },
    ],
    modules: [
      { color: '#1d4ed8', title: '业务概览', items: ['DAU/MAU 趋势', '营收指标', '转化漏斗'] },
      { color: '#7c3aed', title: '性能监控', items: ['响应时间 P99', '错误率热图', '资源利用率'] },
      { color: '#0891b2', title: '用户洞察', items: ['用户旅程分析', '留存队列', '功能热图'] },
      { color: '#d97706', title: '运维告警', items: ['异常检测', '值班升级', '故障跟踪'] },
      { color: '#059669', title: '质量门禁', items: ['代码质量指数', '测试覆盖率', '上线变更日志'] },
      { color: '#db2777', title: '报表中心', items: ['定时报表', 'PDF/Excel 导出', '管理层摘要'] },
    ],
  },
}

export function render(data, theme, locale) {
  const zh = locale === 'zh'
  const dk = theme.name === 'tech-dark'
  const d = IOC[zh ? 'zh' : 'en']

  const kpiHtml = d.kpis.map(k =>
    `<div style="background:${dk ? theme.cardBg : '#FFFFFF'};border:1px solid ${theme.border};border-radius:10px;padding:14px;text-align:center;">
      <div style="font-size:22px;margin-bottom:4px;">${k.icon}</div>
      <div style="font-size:22px;font-weight:900;color:${theme.accent};letter-spacing:-0.5px;">${k.val}</div>
      <div style="font-size:9.5px;color:${theme.textSecondary};margin-top:3px;">${k.label}</div>
    </div>`
  ).join('')

  const moduleHtml = d.modules.map(m =>
    `<div style="background:${dk ? theme.cardBg : '#FFFFFF'};border:1px solid ${theme.border};border-top:3px solid ${m.color};border-radius:10px;padding:12px;">
      <div style="font-size:11px;font-weight:700;color:${m.color};margin-bottom:8px;">${m.title}</div>
      ${m.items.map(item => `<div style="font-size:9.5px;color:${theme.textSecondary};padding:3px 0;border-bottom:1px solid ${theme.border};">· ${item}</div>`).join('')}
    </div>`
  ).join('')

  return S(`
    ${H(zh ? 'IOC 看板' : 'IOC Dashboard', theme)}
    ${body(`
      <div style="text-align:center;font-size:11px;color:${theme.textSecondary};margin-bottom:12px;">${d.subtitle}</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:12px;">${kpiHtml}</div>
      <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:10px;">${moduleHtml}</div>
    `, '12px 28px')}
  `, theme)
}
