# Super App 演进内容注入 Home Miniapp Solution 页面 — 设计

## 背景与目标

售前材料 `D:\售前\20260126\PPT\superapp演进.pptx`（2 页）梳理了 Super App 小程序方案的三块核心叙事：

1. 运营商为什么现在需要小程序（痛点 + 价值飞轮）
2. 两条落地建设路径（整合孤立 App / 现有钱包 App 渐进演进）
3. 三阶段能力演进路线图（财务基础 → 生活消费 → 智能与基础设施）

需要把这三块内容转化为网站小程序方案首页（`HomeMiniapp.vue` 中文 / `HomeMiniappEn.vue` 英文）的新区块，放在页面前部（统计条之后、核心价值区块之前），并让现有"核心价值"区块的文案与新内容衔接。

## PPT 原始内容盘点

### 第一页 — THE SUPER APP ARCHITECTURE

标题：Mini-Programs Turn a Wallet into an Operator Growth Platform
副标题：Beyond user convenience: mini-programs increase usage frequency, retention, service velocity, and ecosystem revenue.

**Operator Pain Points（运营商痛点，4 条）**
1. Low app open frequency — Users open the app infrequently, limiting engagement and revenue opportunities.
2. Fragmented service journeys — Siloed apps create context switching, weakening the overall experience.
3. Slow new-service rollout — Long release cycles and store reviews delay time-to-market and campaigns.
4. Limited partner monetization — Hard to onboard partners and share value across disconnected services.

**Mini-Program Operator Value Flywheel（价值飞轮，5 节点环状循环）**
中心：Super App Base 手机模型，内含 Mini-Programs（Wallet / Bills / Transit / Loyalty / Commerce / Partner Apps）与 Common Capabilities（Account / Wallet / Data / API / Design System）
1. More daily scenarios — Mini-programs cover more life and financial scenarios.
2. Higher open frequency — More reasons to open the app every day.
3. Better retention — Stickier experience improves user loyalty and lifetime value.
4. Faster service launch — Hot updates for mini-programs deliver services in days, not months.
5. Partner ecosystem revenue — More partners, more transactions, more revenue.
（5 → 1 首尾相连，形成循环）

**CSI Experience: Two Build Paths**

Path A — Consolidate Silo Apps into One Super App
- Today: Siloed Apps（Wallet App / Recharge App / Bills App / Care App）
- Step 1: Build Super App Shell
- Step 2: Services as Mini-Programs
- Operator Benefits: One app destination · Unified operations · Stronger engagement

Path B — Evolve Existing App into Mini-Program Platform
- Step 1: Current Wallet App（Balance / Transfer / Pay Bills / Top Up / History）
- Step 2: Pilot 1–2 Mini-Programs（Transit / Loyalty）
- Step 3: Integrate SDK / Container（Transit / Loyalty / SDK / Open APIs）
- Step 4: Super App Base + More Mini-Programs
- Step 5: Partner Ecosystem Expansion（Partner Apps）
- Operator Benefits: Lower change risk · Faster time-to-market · Continuous ecosystem growth

### 第二页 — Three-Stage Super App Evolution for Wallet App

副标题：A practical roadmap: start from wallet app, activate daily services, then retain users through a broader ecosystem.

三阶段（重叠 Venn 布局，左→右）：
- **Phase 1 · Financial Foundation** — "Acquire users → build trust" — Wallet App、Wealth、eKYC、Loyalty；附注 "Mini-App Setup: 3rd Party → transfers, Rewards → identity"
- **Phase 2 · Life & Commerce** — "Daily habit → ARPU growth" — Gaming、Ticketing、F&B、E-Commerce；附注 "Mini-app openness"
- **Phase 3 · Intelligence & Infrastructure** — "Retain users → open partner ecosystem" — AI Agent、Transit、Blockchain、IM、EV Charging、Smart Home、Short Video

生态合作横幅（2 条）：
- Gov services → education → insurance → travel → agriculture
- Ecosystem partners: content → merchants → services → data

底部 4 卡片：
- Team Collaboration — Joint market, product and operations team
- Operating Mechanism — Monthly steering → weekly sprint review
- Ecosystem Layout — Bring partners into AppCube scenarios
- Expert Resources — Named delivery and operations specialists

## 页面改动范围

### 涉及文件
- `docs/.vitepress/theme/HomeMiniapp.vue`（中文页面模板）
- `docs/.vitepress/theme/HomeMiniappEn.vue`（英文页面模板）
- `docs/.vitepress/theme/data/miniapp.zh.js`（新增数据导出）
- `docs/.vitepress/theme/data/miniapp.en.js`（新增数据导出，英文版）

### 最终页面顺序（两语言一致）

```
Hero
统计条 (Stats Strip)
[新] 区块 A — 为什么现在要做小程序（痛点 + 价值飞轮）
[新] 区块 B — Two Build Paths（Path A / Path B）
[新] 区块 C — 三阶段演进路线图
核心价值 (Core Value)  ← 顶部加一句衔接过渡文案，结构不变
架构总览 / 四大类小程序方案 / 交付体系 / 复杂度规范 / 项目管理  ← 不变
```

## 区块设计

### 区块 A：为什么现在要做小程序

两栏布局（桌面端并排，移动端堆叠为单列）：

- **左栏「运营商痛点」**：4 张卡片纵向列表，每张含图标 + 标题 + 一句描述。视觉上参照页面现有卡片风格（圆角、浅色背景、左侧色条或图标圆底）。
- **右栏「小程序运营价值飞轮」**：5 个节点通过 CSS 绝对定位按圆周等分排列（72° 间隔），节点间用 SVG 曲线箭头首尾相连成环（5 → 1 闭合）。圆心放置一个简化手机轮廓图标（CSS 绘制的圆角矩形 + 顶部/底部导航条），内部用小 chip 标签列出关键能力名称（Wallet / Bills / Transit / Loyalty / Commerce / Partner Apps，以及 Account / Data / API 等 Common Capabilities 中的 2–3 个代表性标签，不必穷举全部 11 个图标）。
  - 移动端降级：圆周布局改为纵向 5 步列表（数字徽章 + 标题 + 描述，复用 `.mn-flow-step` 视觉语言），中心手机图标可移到列表顶部单独展示或省略。

### 区块 B：Two Build Paths

Path A 与 Path B 各一组横向步骤流，复用现有"端到端交付体系"区块的 `.mn-flow-steps` / `.mn-flow-step` 样式（数字徽章 + 标题 + 描述 + 步骤间箭头）。在此基础上，每一步额外附加一个简化手机轮廓图标（CSS 绘制，不做像素级 UI 还原），图标内部用 1–4 个小 chip 标签标出该阶段手机上呈现的功能点（例如 Path B 第 3 步显示 Transit / Loyalty / SDK·Open APIs 三个 chip；Path A 第 0 步"Today"显示 Wallet App / Recharge App / Bills App / Care App 四个孤立卡片图标，可用与其余步骤稍有区别的"多个小方块并列"样式表达"孤立"的含义）。

每条路径步骤流下方一行 "Operator Benefits" 要点（3 个短语，用 · 分隔或小 chip 展示）。

移动端：横向步骤流按现有页面既定的响应式规则（媒体查询已在 `.mn-flow-steps` 等既有样式中定义）换行/纵向堆叠，新增的手机图标随步骤一起换行，不单独处理。

### 区块 C：三阶段演进路线图

（已在此前讨论中确认，直接沿用）

三个重叠色块椭圆（SVG 或 CSS 实现半透明径向色块），横向排列并互相重叠，颜色沿用页面已有"四层能力架构"配色（Phase 1 蓝 #3b82f6、Phase 2 紫 #a78bfa、Phase 3 青 #06b6d4）。每个椭圆顶部固定阶段标题（编号 + 名称 + 增长定位语），区域内的小程序名称以 chip 标签形式按区域换行流布局展示（不使用 PPT 原始像素坐标散点摆放）。

椭圆下方为两条生态合作横幅（pill 样式），再下方为 4 张卡片一行（Team Collaboration / Operating Mechanism / Ecosystem Layout / Expert Resources），样式参照现有 `pmCards` 卡片行。

移动端（约 768px 以下）：重叠椭圆布局降级为 3 张纵向堆叠的全宽阶段卡片（编号、标题、定位语、chip 换行列表），不做绝对定位。

### 核心价值区块联动

在现有 `#value` 区块（中英文）标题上方或紧邻处，加一句过渡文案，呼应"上方运营商痛点/演进路线"，引导读者从新区块自然进入既有的"原生 App / 纯 H5 / Super App 小程序"三卡片对比。不改变该区块结构与既有三卡片内容。

## 数据层设计

沿用页面既有"数据与视图分离"约定（参照 `architectureLayers` / `deliverySteps` / `pmCards` 写法），在 `miniapp.zh.js` 与 `miniapp.en.js` 中新增以下导出（两文件字段结构一致，内容语言不同）：

```js
export const painPoints = [
  { title: '开通频率低', desc: '用户较少打开 App，限制了互动与变现机会' },
  // ×4，图标不放在数据里，参照 architectureLayers 的写法在模板中按索引 v-if 内联 SVG
]

export const valueFlywheel = [
  { num: 1, title: '更多日常场景', desc: '小程序覆盖更多生活与金融场景' },
  // ×5，顺序即环状顺序
]

export const flywheelCenter = {
  miniPrograms: ['Wallet', 'Bills', 'Transit', 'Loyalty', 'Commerce', 'Partner Apps'],
  capabilities: ['Account', 'Data', 'API'],
}

export const buildPaths = [
  {
    key: 'pathA', title: 'Path A — 整合孤立 App', // en 文件里是英文标题
    steps: [
      { num: 0, title: '今天：孤立 App', chips: ['Wallet App', 'Recharge App', 'Bills App', 'Care App'], isSilo: true },
      { num: 1, title: '搭建 Super App 壳', chips: [] },
      { num: 2, title: '服务小程序化', chips: ['Wallet', 'Bills', 'Transit', 'Loyalty'] },
    ],
    benefits: ['统一入口', '运营一体化', '增强用户粘性'],
  },
  {
    key: 'pathB', title: 'Path B — 现有 App 渐进演进',
    steps: [
      { num: 1, title: '现有钱包 App', chips: ['Balance', 'Transfer', 'Pay Bills'] },
      { num: 2, title: '试点 1–2 个小程序', chips: ['Transit', 'Loyalty'] },
      { num: 3, title: '集成 SDK / 容器', chips: ['Transit', 'Loyalty', 'SDK / Open APIs'] },
      { num: 4, title: 'Super App 基座 + 更多小程序', chips: ['Wallet', 'Bills', 'Transit', 'Loyalty', 'Commerce'] },
      { num: 5, title: '合作伙伴生态扩展', chips: ['Partner Apps'] },
    ],
    benefits: ['变更风险更低', '上市更快', '生态持续增长'],
  },
]

export const evolutionPhases = [
  {
    num: '01', title: '财务基础', tag: '获客建信任', color: '#3b82f6',
    apps: ['钱包 App', '财富管理', 'eKYC', '积分'],
    note: '小程序开放：第三方接入 → 转账，权益 → 身份',
  },
  { num: '02', title: '生活消费', tag: '日常习惯培养 → ARPU 增长', color: '#a78bfa', apps: ['游戏', '票务', '餐饮', '电商'], note: '小程序开放性' },
  { num: '03', title: '智能与基础设施', tag: '留存用户 → 开放伙伴生态', color: '#06b6d4', apps: ['AI 智能体', '交通卡', '区块链', 'IM', 'EV 充电', '智能家居', '短视频'] },
]

export const evolutionEcosystem = [
  '政务服务 · 教育 · 保险 · 出行 · 农业',
  '生态合作伙伴：内容 · 商户 · 服务 · 数据',
]

export const evolutionFooter = [
  { title: '团队协作', desc: '市场、产品、运营联合团队' },
  { title: '运作机制', desc: '月度例会 + 周度冲刺评审' },
  { title: '生态布局', desc: '引入合作伙伴进入 AppCube 场景' },
  { title: '专家资源', desc: '专属交付与运营专家' },
]
```

图标不作为数据字段存储，沿用页面既有约定（如 `architectureLayers` 渲染中按数组索引 `v-if="i === 0"` 内联对应 SVG）：在模板中按索引/key 内联对应的 SVG，不引入新图标库，也不在数据文件中存字符串图标名。

## 交互与链接

所有新增小程序/能力标签（chip）均为纯展示，不添加跳转链接，与既有"四大类小程序方案"目录区块（有链接）区分开。

## 测试计划

功能是纯前端静态内容展示，无自动化测试覆盖必要性，采用手动可视化验证：

1. `npm run docs:dev` 启动本地开发服务器
2. 浏览器访问中文页 `/zh/miniapp-solution`（或对应 `home-miniapp` 布局挂载页面）与英文页对应路径
3. 检查桌面宽度（≥1280px）下三个新区块的布局、配色、chip 换行是否符合设计
4. 缩小到平板（~768px）与手机（~375px）宽度，检查：
   - 价值飞轮圆周布局降级为纵向列表
   - Two Build Paths 步骤流换行/堆叠，手机图标与 chip 不溢出
   - 三阶段演进路线图降级为纵向卡片，无重叠
5. 确认新区块的滚动进入动画（`.reveal` class + IntersectionObserver）与页面其余区块行为一致
6. 检查核心价值区块新增过渡文案在中英文页面语义通顺、无残留占位符

## 范围边界（不做的事）

- 不做像素级手机 UI 还原（无真实图标、无真实字体排版的手机截图仿制）
- 不给新增的小程序名称 chip 添加跳转链接
- 不改动核心价值区块的卡片结构，只加文案
- 不改动页面其余既有区块（架构总览、方案目录、交付体系、复杂度规范、项目管理）
