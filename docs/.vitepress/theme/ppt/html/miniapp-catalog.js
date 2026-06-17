import { S, H, body } from './_base.js'

const CATALOG = {
  en: [
    { icon: '🏦', title: 'Financial Super App',     tags: ['E-Wallet', 'Investment', 'Insurance', 'Crypto'] },
    { icon: '📡', title: 'Carrier App',              tags: ['5G Portal', 'Traffic Mgmt', 'OCS / BES'] },
    { icon: '🏛️', title: 'Government App',           tags: ['One-Stop Portal', 'Citizen Services', 'e-Gov'] },
    { icon: '🛒', title: 'Retail & E-Commerce',      tags: ['Shopping', 'Loyalty', 'Marketing Automation'] },
    { icon: '🏥', title: 'Healthcare App',            tags: ['Appointment', 'eKYC', 'Health Records'] },
    { icon: '🏭', title: 'Industrial IoT App',       tags: ['Device Mgmt', 'Supply Chain', 'Dashboard'] },
    { icon: '🎓', title: 'EdTech App',               tags: ['LMS', 'ICT Cert', 'Live Classroom'] },
    { icon: '✈️', title: 'Mobility Super App',       tags: ['Transit', 'Navigation', 'Ticket Booking'] },
    { icon: '🏙️', title: 'Smart City / Campus',      tags: ['Park Mgmt', 'Security', 'Energy Monitor'] },
  ],
  zh: [
    { icon: '🏦', title: '金融超级 App',     tags: ['电子钱包', '投资理财', '保险', '数字资产'] },
    { icon: '📡', title: '运营商 App',       tags: ['5G 门户', '流量管理', 'OCS/BES'] },
    { icon: '🏛️', title: '政务 App',         tags: ['一站式门户', '市民服务', '电子政务'] },
    { icon: '🛒', title: '零售电商',          tags: ['购物小程序', '积分系统', '营销自动化'] },
    { icon: '🏥', title: '医疗 App',          tags: ['预约挂号', 'eKYC', '健康档案'] },
    { icon: '🏭', title: '工业 IoT App',      tags: ['设备管理', '供应链', '数据看板'] },
    { icon: '🎓', title: '教育科技 App',      tags: ['LMS', 'ICT 认证', '直播课堂'] },
    { icon: '✈️', title: '出行超级 App',      tags: ['公交出行', '导航', '票务预订'] },
    { icon: '🏙️', title: '智慧城市/园区',    tags: ['园区管理', '安防', '能耗监控'] },
  ],
}

export function render(data, theme, locale) {
  const zh = locale === 'zh'
  const dk = theme.name === 'tech-dark'
  const items = CATALOG[zh ? 'zh' : 'en']

  const cards = items.map(item =>
    `<div style="background:${dk ? theme.cardBg : '#FFFFFF'};border:1px solid ${theme.border};border-radius:12px;padding:14px;display:flex;flex-direction:column;gap:8px;box-shadow:0 1px 5px rgba(0,0,0,${dk ? '0.2' : '0.04'});">
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="font-size:20px;">${item.icon}</span>
        <span style="font-size:11px;font-weight:700;color:${theme.textPrimary};">${item.title}</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:4px;">
        ${item.tags.map(t => `<span style="font-size:9px;background:${theme.accent}14;color:${theme.accent};border:1px solid ${theme.accent}33;border-radius:3px;padding:1px 6px;font-weight:600;">${t}</span>`).join('')}
      </div>
    </div>`
  ).join('')

  return S(`
    ${H(zh ? '方案目录' : 'Solution Catalog', theme)}
    ${body(`<div style="display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr);gap:10px;height:100%;">${cards}</div>`)}
  `, theme)
}
