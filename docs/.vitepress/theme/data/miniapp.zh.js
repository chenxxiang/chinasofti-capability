export const architectureLayers = [
  {
    num: '01', label: '终端接入层', labelEn: 'CLIENT LAYER',
    lc: '#3b82f6', grad: 'linear-gradient(135deg,#1d4ed8,#3b82f6)',
    lbg: 'rgba(59,130,246,0.06)', lbd: 'rgba(59,130,246,0.22)',
    groups: [
      { label: '移动端', chips: ['Android SDK', 'iOS SDK', '小程序运行时', '原生 JS API'] },
      { label: 'Web 端', chips: ['H5 容器', '响应式布局', 'PWA 支持'] },
    ],
  },
  {
    num: '02', label: '平台能力层', labelEn: 'PLATFORM LAYER',
    lc: '#a78bfa', grad: 'linear-gradient(135deg,#7c3aed,#a78bfa)',
    lbg: 'rgba(167,139,250,0.06)', lbd: 'rgba(167,139,250,0.22)',
    groups: [
      { label: '安全 & 身份', chips: ['统一身份认证', '生物识别', '安全加固', '小程序沙箱'] },
      { label: '服务能力',    chips: ['移动支付', 'LBS 定位', '推送通知', '数据分析', '社交分享'] },
    ],
  },
  {
    num: '03', label: '应用服务层', labelEn: 'APPLICATION LAYER',
    lc: '#06b6d4', grad: 'linear-gradient(135deg,#0891b2,#06b6d4)',
    lbg: 'rgba(6,182,212,0.06)', lbd: 'rgba(6,182,212,0.22)',
    groups: [
      { label: '金融类',    chips: ['电子钱包', '理财投资', '财富管理', '虚拟货币', '消费金融', '保险服务'] },
      { label: '生活 & 城市类', chips: ['智慧健身', '智慧导览', '数字藏品', '车辆管理', '智慧城市', '个性化推荐'] },
    ],
  },
  {
    num: '04', label: '基础设施层', labelEn: 'INFRASTRUCTURE LAYER',
    lc: '#f59e0b', grad: 'linear-gradient(135deg,#d97706,#f59e0b)',
    lbg: 'rgba(245,158,11,0.06)', lbd: 'rgba(245,158,11,0.22)',
    groups: [
      { label: '云平台',  chips: ['华为公有云', '华为混合云', 'On-premise', 'Azure', 'AWS', 'Google Cloud'] },
      { label: '业务平台', chips: ['APP Cube 平台', '银行 / MM 后台', '第三方 API'] },
    ],
  },
]

export const deliverySteps = [
  { num: '01', grad: 'linear-gradient(135deg,#1d4ed8,#3b82f6)', title: 'M 平台部署',   desc: '公有云资源申请、项目资源开通，M 平台安装部署与初始化配置，一键拉通小程序开发环境。' },
  { num: '02', grad: 'linear-gradient(135deg,#4f46e5,#818cf8)', title: 'SDK 集成',     desc: 'Android / iOS SDK 获取与集成，宿主 App 初始化，仿真器模拟调测，确保运行环境一致。' },
  { num: '03', grad: 'linear-gradient(135deg,#7c3aed,#a78bfa)', title: '小程序开发',    desc: '在线开发环境，原生 JS API 开发调用，支持仿真器实时预览，快速迭代前端界面与业务逻辑。' },
  { num: '04', grad: 'linear-gradient(135deg,#0891b2,#06b6d4)', title: '测试验证',      desc: '兼容性 / 可靠性 / 自动化 / 安全 / 性能五维测试，KCP3 出口评估，多场景测试平台覆盖。' },
  { num: '05', grad: 'linear-gradient(135deg,#059669,#10b981)', title: '安全加固与发布', desc: '小程序安全加固，发布上架，无须经过应用商店，即时触达用户，交付度量看板可视化进度。' },
]

export const pmCards = [
  { color: '#1d4ed8', grad: 'linear-gradient(135deg,#1d4ed8,#3b82f6)', title: '进度管理', desc: '里程碑制定、计划排期、变更评审机制，保障计划可控' },
  { color: '#7c3aed', grad: 'linear-gradient(135deg,#7c3aed,#a78bfa)', title: '沟通管理', desc: '晨会 + 评审 + 专题 + 质量会议，AAR 机制沉淀经验' },
  { color: '#0891b2', grad: 'linear-gradient(135deg,#0891b2,#06b6d4)', title: '风险管理', desc: '风险跟踪表 + 例会审视 + 邮件日追踪，确保风险全程闭环' },
  { color: '#d97706', grad: 'linear-gradient(135deg,#d97706,#f59e0b)', title: '质量策划', desc: '现状分析 → 目标策划 → 过程裁剪，输出项目质量计划' },
  { color: '#059669', grad: 'linear-gradient(135deg,#059669,#10b981)', title: '流程看护', desc: 'CP1/CP2/CP3 全周期检查点，准出准入标准，度量分析' },
]

export const designBrand = {
  palette: [
    { name: 'CNEF 绿',  hex: '#439447', role: '主色'  },
    { name: '深绿',      hex: '#2D6B31', role: '深色'  },
    { name: '浅绿',      hex: '#33B466', role: '强调色' },
    { name: '金融深蓝',  hex: '#1A3557', role: '文字/背景' },
    { name: '信息蓝',    hex: '#2980B9', role: '信息'  },
    { name: '信号金',    hex: '#E8C547', role: '警告'  },
    { name: '风险红',    hex: '#C0392B', role: '错误'  },
    { name: 'App 画布',  hex: '#F5F5F0', role: '背景'  },
  ],
  allocation: [
    { label: '主要操作', color: '#439447', pct: 65 },
    { label: '深色界面', color: '#1A3557', pct: 20 },
    { label: '高亮强调', color: '#33B466', pct: 10 },
    { label: '状态提示', color: '#E8C547', pct: 5  },
  ],
  typescale: [
    { level: 'H1',    spec: 'H1 · 28sp Bold',      size: '1.75rem',  weight: 700, color: '#1A3557', sample: 'NeoS Mobile' },
    { level: 'H2',    spec: 'H2 · 22sp SemiBold',  size: '1.375rem', weight: 600, color: '#1A3557', sample: '转账 & 支付' },
    { level: 'Body',  spec: 'Body · 16sp Regular', size: '1rem',     weight: 400, color: '#424242', sample: '安全 · 快速 · 便捷' },
    { level: 'Caption', spec: 'Caption · 12sp Regular', size: '0.75rem', weight: 400, color: '#757575', sample: '交易 ID: TXN-2024-001' },
    { level: 'Label', spec: 'Label · 11sp SemiBold', size: '0.69rem', weight: 700, color: '#439447', sample: '已确认', uppercase: false },
  ],
}

export const designUIKit = {
  icons: ['转账', '扫码', '充值', '银行卡', '账单', '贷款', '报表', '安全'],
  buttons: ['主要按钮', '次要按钮', '描边按钮', '禁用态', '危险按钮'],
  inputs: ['手机号', '金额', 'PIN 码', '错误状态'],
  cards: ['余额卡', '交易记录卡', '账单卡'],
  themes: [
    { bank: 'CNEF',             primary: '#439447' },
    { bank: 'Société Générale', primary: '#E60028' },
    { bank: 'SCB',              primary: '#1B75BC' },
    { bank: 'UBA',              primary: '#BD0304' },
    { bank: 'CCA',              primary: '#0066CC' },
  ],
}
