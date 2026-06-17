export const REGISTRY = [
  {
    groupId: 'company',
    groupLabel: { en: 'Company Introduction', zh: '公司介绍' },
    sections: [
      { id: 'company-hero',       label: { en: 'Company Hero',    zh: '公司定位' },  slideCount: 1 },
      { id: 'company-stats',      label: { en: 'Key Metrics',     zh: '核心数据' },   slideCount: 1 },
      { id: 'company-highlights', label: { en: 'Core Highlights', zh: '核心能力' },   slideCount: 1 },
    ],
  },
  {
    groupId: 'overseas',
    groupLabel: { en: 'Global Presence', zh: '海外布局' },
    sections: [
      { id: 'overseas-regions',  label: { en: 'Regional Offices', zh: '地区布局' }, slideCount: 1 },
      { id: 'overseas-coverage', label: { en: 'Coverage Stats',   zh: '覆盖数字' }, slideCount: 1 },
    ],
  },
  {
    groupId: 'ai',
    groupLabel: { en: 'AI Innovation Lab', zh: 'AI 创新工坊' },
    sections: [
      { id: 'ai-hero',       label: { en: 'AI Lab Overview',     zh: 'AI Lab 概览' }, slideCount: 1 },
      { id: 'ai-strategy',   label: { en: 'Strategic Framework', zh: '战略框架' },     slideCount: 1 },
      { id: 'ai-scenarios',  label: { en: 'Use Cases',           zh: '应用场景' },     slideCount: 1 },
      { id: 'ai-tech',       label: { en: 'Tech Foundation',     zh: '技术底座' },     slideCount: 1 },
      { id: 'ai-enablement', label: { en: 'Elite Enablement',    zh: '精英赋能' },     slideCount: 1 },
    ],
  },
  {
    groupId: 'miniapp',
    groupLabel: { en: 'Mini-Program Solution', zh: '企业小程序方案' },
    sections: [
      { id: 'miniapp-arch',         label: { en: 'Architecture',        zh: '能力架构' },     slideCount: 1 },
      { id: 'miniapp-catalog',      label: { en: 'Solution Catalog',    zh: '方案目录' },     slideCount: 1 },
      { id: 'miniapp-delivery',     label: { en: 'E2E Delivery',        zh: '端到端交付' },   slideCount: 1 },
      { id: 'miniapp-complexity',   label: { en: 'Page Complexity',     zh: '复杂度规范' },   slideCount: 1 },
      { id: 'miniapp-pm',           label: { en: 'Project Management',  zh: '项目管理' },     slideCount: 1 },
      { id: 'miniapp-design-brand', label: { en: 'Brand Design System', zh: '品牌设计规范' }, slideCount: 1 },
      { id: 'miniapp-design-uikit', label: { en: 'Mobile App UI Kit',   zh: 'UI 组件库' },    slideCount: 1 },
      { id: 'miniapp-ioc',          label: { en: 'IOC Dashboard',       zh: 'IOC 看板' },     slideCount: 1 },
    ],
  },
  // cloud / campus / odc / bss / ms — 章节在各组件内容确认后填入
  {
    groupId: 'cases-general',
    groupLabel: { en: 'Cases: General', zh: '综合案例' },
    type: 'cases',
    dataFile: 'cases',
  },
  {
    groupId: 'cases-cloud',
    groupLabel: { en: 'Cases: Cloud Native', zh: '云原生案例' },
    type: 'cases',
    dataFile: 'cloud-cases',
  },
  {
    groupId: 'cases-campus',
    groupLabel: { en: 'Cases: Smart Campus', zh: '智慧校园案例' },
    type: 'cases',
    dataFile: 'campus-cases',
  },
  {
    groupId: 'cases-odc',
    groupLabel: { en: 'Cases: ODC', zh: 'ODC 案例' },
    type: 'cases',
    dataFile: 'odc-cases',
  },
]

async function resolveSectionRenderer(sectionId, locale) {
  const mod = await import(`./html/${sectionId}.js`)
  const dataFile = sectionId.split('-')[0]
  const dataLoader = () => import(`../data/${dataFile}.${locale}.js`)
  return { renderFn: mod.render, dataLoader }
}

export { resolveSectionRenderer }
