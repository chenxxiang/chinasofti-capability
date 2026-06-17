import { S, H, body } from './_base.js'

const TIERS = {
  en: [
    {
      level: 'L1', label: 'Standard Page',
      color: '#10b981', colorBg: '#10b98112',
      desc: 'Static display pages, simple lists, basic forms. Single API call, no complex interactions.',
      examples: ['About Us', 'Product List', 'Contact Form'],
      days: '1–2 days',
    },
    {
      level: 'L2', label: 'Enhanced Page',
      color: '#3b82f6', colorBg: '#3b82f612',
      desc: 'Dynamic data + user interactions, pagination, filtering, multi-step forms, local caching.',
      examples: ['Transaction History', 'Filter Search', 'Multi-step Onboarding'],
      days: '3–5 days',
    },
    {
      level: 'L3', label: 'Complex Page',
      color: '#f59e0b', colorBg: '#f59e0b12',
      desc: 'Multi-data-source aggregation, real-time updates, charts, complex business logic & state.',
      examples: ['Dashboard', 'Investment Portfolio', 'Live Tracking'],
      days: '6–10 days',
    },
    {
      level: 'L4', label: 'Super Complex',
      color: '#ef4444', colorBg: '#ef444412',
      desc: 'Custom rendering engine, video streams, complex animations, multi-service orchestration.',
      examples: ['Video Calls', 'Map Navigation', 'AR Features'],
      days: '10+ days',
    },
  ],
  zh: [
    {
      level: 'L1', label: '标准页面',
      color: '#10b981', colorBg: '#10b98112',
      desc: '静态展示、简单列表、基础表单。单一 API 调用，无复杂交互。',
      examples: ['关于我们', '产品列表', '联系表单'],
      days: '1–2 天',
    },
    {
      level: 'L2', label: '增强页面',
      color: '#3b82f6', colorBg: '#3b82f612',
      desc: '动态数据 + 用户交互、分页筛选、多步骤表单、本地缓存。',
      examples: ['交易记录', '筛选搜索', '多步骤开户'],
      days: '3–5 天',
    },
    {
      level: 'L3', label: '复杂页面',
      color: '#f59e0b', colorBg: '#f59e0b12',
      desc: '多数据源聚合、实时更新、图表可视化、复杂业务逻辑与状态管理。',
      examples: ['数据看板', '投资组合', '实时追踪'],
      days: '6–10 天',
    },
    {
      level: 'L4', label: '超复杂页面',
      color: '#ef4444', colorBg: '#ef444412',
      desc: '自定义渲染引擎、视频流、复杂动画、多服务编排。',
      examples: ['视频通话', '地图导航', 'AR 功能'],
      days: '10+ 天',
    },
  ],
}

export function render(data, theme, locale) {
  const zh = locale === 'zh'
  const dk = theme.name === 'tech-dark'
  const tiers = TIERS[zh ? 'zh' : 'en']

  const cards = tiers.map(t =>
    `<div style="background:${dk ? theme.cardBg : '#FFFFFF'};border:1px solid ${t.color}44;border-radius:14px;padding:20px 18px;display:flex;flex-direction:column;gap:12px;box-shadow:0 2px 8px rgba(0,0,0,${dk ? '0.22' : '0.04'});">
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="background:${t.color};color:#fff;font-size:12px;font-weight:900;border-radius:8px;padding:5px 10px;">${t.level}</span>
        <span style="font-size:15px;font-weight:700;color:${theme.textPrimary};">${t.label}</span>
        <span style="margin-left:auto;font-size:10px;color:${t.color};font-weight:700;background:${t.colorBg};border-radius:4px;padding:3px 8px;">${t.days}</span>
      </div>
      <div style="font-size:11px;color:${theme.textSecondary};line-height:1.6;">${t.desc}</div>
      <div style="display:flex;flex-wrap:wrap;gap:5px;">
        ${t.examples.map(e => `<span style="font-size:10px;background:${t.colorBg};border:1px solid ${t.color}33;color:${t.color};border-radius:4px;padding:2px 8px;">${e}</span>`).join('')}
      </div>
    </div>`
  ).join('')

  return S(`
    ${H(zh ? '页面复杂度规范' : 'Page Complexity Framework', theme)}
    ${body(`<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;height:100%;padding:8px 0;">${cards}</div>`)}
  `, theme)
}
