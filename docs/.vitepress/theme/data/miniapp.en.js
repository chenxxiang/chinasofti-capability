export const architectureLayers = [
  {
    num: '01', label: 'Client Layer', labelEn: 'CLIENT LAYER',
    lc: '#3b82f6', grad: 'linear-gradient(135deg,#1d4ed8,#3b82f6)',
    lbg: 'rgba(59,130,246,0.06)', lbd: 'rgba(59,130,246,0.22)',
    groups: [
      { label: 'Mobile', chips: ['Android SDK', 'iOS SDK', 'Mini-App Runtime', 'Native JS API'] },
      { label: 'Web',    chips: ['H5 Container', 'Responsive Layout', 'PWA Support'] },
    ],
  },
  {
    num: '02', label: 'Platform Layer', labelEn: 'PLATFORM LAYER',
    lc: '#a78bfa', grad: 'linear-gradient(135deg,#7c3aed,#a78bfa)',
    lbg: 'rgba(167,139,250,0.06)', lbd: 'rgba(167,139,250,0.22)',
    groups: [
      { label: 'Security & Identity', chips: ['Unified Auth', 'Biometrics', 'Security Hardening', 'Mini-App Sandbox'] },
      { label: 'Platform Services',   chips: ['Mobile Payment', 'LBS Location', 'Push Notifications', 'Analytics', 'Social Sharing'] },
    ],
  },
  {
    num: '03', label: 'App Service Layer', labelEn: 'APPLICATION LAYER',
    lc: '#06b6d4', grad: 'linear-gradient(135deg,#0891b2,#06b6d4)',
    lbg: 'rgba(6,182,212,0.06)', lbd: 'rgba(6,182,212,0.22)',
    groups: [
      { label: 'Financial',       chips: ['E-Wallet', 'Investment', 'Wealth Mgmt', 'Crypto', 'Consumer Finance', 'Insurance'] },
      { label: 'Lifestyle & City', chips: ['Smart Fitness', 'Smart Tour', 'Digital Assets', 'Vehicle Mgmt', 'Smart City', 'Personalization'] },
    ],
  },
  {
    num: '04', label: 'Infrastructure Layer', labelEn: 'INFRASTRUCTURE LAYER',
    lc: '#f59e0b', grad: 'linear-gradient(135deg,#d97706,#f59e0b)',
    lbg: 'rgba(245,158,11,0.06)', lbd: 'rgba(245,158,11,0.22)',
    groups: [
      { label: 'Cloud Platform',    chips: ['Huawei Public Cloud', 'Huawei Hybrid Cloud', 'On-premise', 'Azure', 'AWS', 'Google Cloud'] },
      { label: 'Business Platform', chips: ['APP Cube Platform', 'Banking / MM Backend', '3rd-party API'] },
    ],
  },
]

export const deliverySteps = [
  { num: '01', grad: 'linear-gradient(135deg,#1d4ed8,#3b82f6)', title: 'M Platform Deploy',    desc: 'Cloud resource provisioning, project environment setup, M Platform installation, initialization, and one-click dev environment setup.' },
  { num: '02', grad: 'linear-gradient(135deg,#4f46e5,#818cf8)', title: 'SDK Integration',       desc: 'Android / iOS SDK retrieval and integration, host app initialization, simulator testing to ensure consistent runtime environment.' },
  { num: '03', grad: 'linear-gradient(135deg,#7c3aed,#a78bfa)', title: 'Mini-App Development',  desc: 'Online IDE, native JS API development, real-time simulator preview for rapid iteration of UI and business logic.' },
  { num: '04', grad: 'linear-gradient(135deg,#0891b2,#06b6d4)', title: 'Testing & Validation',  desc: '5-dimension testing: compatibility / reliability / automation / security / performance. KCP3 exit evaluation with multi-scenario test coverage.' },
  { num: '05', grad: 'linear-gradient(135deg,#059669,#10b981)', title: 'Harden & Release',      desc: 'Security hardening, publish & go-live without app store gating — instant user reach with a delivery metrics dashboard.' },
]

export const pmCards = [
  { color: '#1d4ed8', grad: 'linear-gradient(135deg,#1d4ed8,#3b82f6)', title: 'Schedule',          desc: 'Milestone definition, planning, and change review mechanisms to keep delivery on track' },
  { color: '#7c3aed', grad: 'linear-gradient(135deg,#7c3aed,#a78bfa)', title: 'Communication',      desc: 'Daily standups + reviews + topic meetings + quality sessions; AAR mechanism to capture lessons learned' },
  { color: '#0891b2', grad: 'linear-gradient(135deg,#0891b2,#06b6d4)', title: 'Risk Management',    desc: 'Risk tracking matrix + weekly review + daily email follow-up — ensuring full lifecycle risk closure' },
  { color: '#d97706', grad: 'linear-gradient(135deg,#d97706,#f59e0b)', title: 'Quality Planning',   desc: 'Current state analysis → goal planning → process tailoring; outputs a project quality plan' },
  { color: '#059669', grad: 'linear-gradient(135deg,#059669,#10b981)', title: 'Process Monitoring', desc: 'CP1 / CP2 / CP3 full-cycle checkpoints with entry/exit criteria and measurement analysis' },
]

export const painPoints = [
  { title: 'Low App Open Frequency', desc: 'Users open the app infrequently, limiting engagement and revenue opportunities.' },
  { title: 'Fragmented Service Journeys', desc: 'Siloed apps create context switching, weakening the overall experience.' },
  { title: 'Slow New-Service Rollout', desc: 'Long release cycles and store reviews delay time-to-market and campaigns.' },
  { title: 'Limited Partner Monetization', desc: 'Hard to onboard partners and share value across disconnected services.' },
]

export const valueFlywheel = [
  { num: 1, title: 'More Daily Scenarios', desc: 'Mini-programs cover more life and financial scenarios.' },
  { num: 2, title: 'Higher Open Frequency', desc: 'More reasons to open the app every day.' },
  { num: 3, title: 'Better Retention', desc: 'Stickier experience improves user loyalty and lifetime value.' },
  { num: 4, title: 'Faster Service Launch', desc: 'Hot updates for mini-programs deliver services in days, not months.' },
  { num: 5, title: 'Partner Ecosystem Revenue', desc: 'More partners, more transactions, more revenue.' },
]

export const flywheelCenter = {
  miniPrograms: ['Wallet', 'Bills', 'Transit', 'Loyalty', 'Commerce', 'Partner Apps'],
  capabilities: ['Account', 'Data', 'API'],
}

export const buildPaths = [
  {
    key: 'pathA',
    title: 'Path A — Consolidate Silo Apps into One Super App',
    grad: 'linear-gradient(135deg,#1d4ed8,#3b82f6)',
    steps: [
      { num: 0, title: 'Today: Siloed Apps', chips: ['Wallet App', 'Recharge App', 'Bills App', 'Care App'], isSilo: true },
      { num: 1, title: 'Build Super App Shell', chips: [] },
      { num: 2, title: 'Services as Mini-Programs', chips: ['Wallet', 'Bills', 'Transit', 'Loyalty'] },
    ],
    benefits: ['One app destination', 'Unified operations', 'Stronger engagement'],
  },
  {
    key: 'pathB',
    title: 'Path B — Evolve Existing App into Mini-Program Platform',
    grad: 'linear-gradient(135deg,#7c3aed,#a78bfa)',
    steps: [
      { num: 1, title: 'Current Wallet App', chips: ['Balance', 'Transfer', 'Pay Bills'] },
      { num: 2, title: 'Pilot 1–2 Mini-Programs', chips: ['Transit', 'Loyalty'] },
      { num: 3, title: 'Integrate SDK / Container', chips: ['Transit', 'Loyalty', 'SDK / Open APIs'] },
      { num: 4, title: 'Super App Base + More Mini-Programs', chips: ['Wallet', 'Bills', 'Transit', 'Loyalty', 'Commerce'] },
      { num: 5, title: 'Partner Ecosystem Expansion', chips: ['Partner Apps'] },
    ],
    benefits: ['Lower change risk', 'Faster time-to-market', 'Continuous ecosystem growth'],
  },
]

export const evolutionPhases = [
  {
    num: '01', title: 'Financial Foundation', tag: 'Acquire users → build trust',
    lc: '#3b82f6', lbg: 'rgba(59,130,246,0.08)', lbd: 'rgba(59,130,246,0.35)',
    apps: ['Wallet App', 'Wealth', 'eKYC', 'Loyalty'],
    note: 'Mini-App Setup: 3rd Party → transfers, Rewards → identity',
  },
  {
    num: '02', title: 'Life & Commerce', tag: 'Daily habit → ARPU growth',
    lc: '#a78bfa', lbg: 'rgba(167,139,250,0.08)', lbd: 'rgba(167,139,250,0.35)',
    apps: ['Gaming', 'Ticketing', 'F&B', 'E-Commerce'],
    note: 'Mini-app openness',
  },
  {
    num: '03', title: 'Intelligence & Infrastructure', tag: 'Retain users → open partner ecosystem',
    lc: '#06b6d4', lbg: 'rgba(6,182,212,0.08)', lbd: 'rgba(6,182,212,0.35)',
    apps: ['AI Agent', 'Transit', 'Blockchain', 'IM', 'EV Charging', 'Smart Home', 'Short Video'],
  },
]

export const evolutionEcosystem = [
  'Gov services · education · insurance · travel · agriculture',
  'Ecosystem partners: content · merchants · services · data',
]

export const evolutionFooter = [
  { title: 'Team Collaboration', desc: 'Joint market, product and operations team' },
  { title: 'Operating Mechanism', desc: 'Monthly steering · weekly sprint review' },
  { title: 'Ecosystem Layout', desc: 'Bring partners into AppCube scenarios' },
  { title: 'Expert Resources', desc: 'Named delivery and operations specialists' },
]

export const designBrand = {
  palette: [
    { name: 'CNEF Green',   hex: '#439447', role: 'Primary'    },
    { name: 'Deep Green',   hex: '#2D6B31', role: 'Dark'       },
    { name: 'Light Green',  hex: '#33B466', role: 'Accent'     },
    { name: 'Finance Navy', hex: '#1A3557', role: 'Text / BG'  },
    { name: 'Info Blue',    hex: '#2980B9', role: 'Info'       },
    { name: 'Signal Gold',  hex: '#E8C547', role: 'Warning'    },
    { name: 'Risk Red',     hex: '#C0392B', role: 'Error'      },
    { name: 'App Canvas',   hex: '#F5F5F0', role: 'Background' },
  ],
  allocation: [
    { label: 'Primary Actions', color: '#439447', pct: 65 },
    { label: 'Dark Surfaces',   color: '#1A3557', pct: 20 },
    { label: 'Highlights',      color: '#33B466', pct: 10 },
    { label: 'Status / Alert',  color: '#E8C547', pct: 5  },
  ],
  typescale: [
    { level: 'H1',      spec: 'H1 · 28sp Bold',       size: '1.75rem', weight: 700, color: '#1A3557', sample: 'NeoS Mobile' },
    { level: 'H2',      spec: 'H2 · 22sp SemiBold',   size: '1.375rem', weight: 600, color: '#1A3557', sample: 'Transfer & Pay' },
    { level: 'Body',    spec: 'Body · 16sp Regular',  size: '1rem',    weight: 400, color: '#424242', sample: 'Secure · Fast · Convenient' },
    { level: 'Caption', spec: 'Caption · 12sp Regular', size: '0.75rem', weight: 400, color: '#757575', sample: 'Transaction ID: TXN-2024-001' },
    { level: 'Label',   spec: 'Label · 11sp SemiBold', size: '0.69rem', weight: 700, color: '#439447', sample: 'CONFIRMED', uppercase: true },
  ],
}

export const designUIKit = {
  icons: ['Transfer', 'QR Scan', 'Top Up', 'Card', 'Biller', 'Loan', 'Report', 'Security'],
  buttons: ['Primary', 'Secondary', 'Outline', 'Disabled', 'Danger'],
  inputs: ['Phone', 'Amount', 'PIN', 'Error state'],
  cards: ['Balance Card', 'Transaction Card', 'Biller Card'],
  themes: [
    { bank: 'CNEF',             primary: '#439447' },
    { bank: 'Société Générale', primary: '#E60028' },
    { bank: 'SCB',              primary: '#1B75BC' },
    { bank: 'UBA',              primary: '#BD0304' },
    { bank: 'CCA',              primary: '#0066CC' },
  ],
}
