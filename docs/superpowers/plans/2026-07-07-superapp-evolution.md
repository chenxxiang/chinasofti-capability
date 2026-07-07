# Super App 演进内容注入 Home Miniapp Solution 页面 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 把 `superapp演进.pptx`（2 页）的三块核心内容——运营商痛点+价值飞轮、两条建设路径、三阶段演进路线图——转化为 `docs/.vitepress/theme/HomeMiniapp.vue`（中文）与 `HomeMiniappEn.vue`（英文）页面的三个新区块，插入统计条与核心价值区块之间，并让核心价值区块文案与新内容衔接。

**Architecture:** 沿用页面既有的"数据与视图分离"模式——新增内容以纯数据数组/对象形式加入 `data/miniapp.zh.js` 与 `data/miniapp.en.js`，Vue 模板通过 `v-for` 渲染；新视觉组件（价值飞轮环形布局、简化手机图标、重叠椭圆演进图）用纯 CSS（绝对定位 + 百分比坐标）实现，不引入新依赖、不做像素级复刻，移动端一律降级为纵向堆叠布局。

**Tech Stack:** Vue 3 `<script setup>` SFC（VitePress 自定义 Layout 组件），原生 CSS（scoped style），无构建工具变更，无新增 npm 依赖。

## Global Constraints

- 不引入任何新 npm 依赖（复用 Vue 3 + 原生 CSS，参见 `chinasofti-capability/CLAUDE.md`）
- 中英文页面结构必须保持对称：`HomeMiniapp.vue` 改动，`HomeMiniappEn.vue` 必须同步改动（`chinasofti-capability/CLAUDE.md` "中英文目录结构完全对称"约定）
- 所有新增小程序/能力名称标签（chip）不添加跳转链接，仅展示（已与用户确认）
- 不做像素级手机 UI 复刻，一律用简化 CSS 手机轮廓 + 内部 chip 标签表达（已与用户确认）
- 不改动核心价值区块（`#value`）现有三卡片结构，只新增一行过渡文案（已与用户确认）
- 图标不作为数据字段存储，沿用 `architectureLayers` 的写法——按数组索引在模板里 `v-if="i === 0"` 内联对应 SVG
- CSS 变量 `--bg` `--text1/2/3` `--card-bg` `--border` `--shadow` `--shadow-lg` `--radius` `--blue` 已经由 `HomeAurora.vue`/`HomeAuroraEn.vue` 的 `:root` 规则全局提供（Vite 把所有页面组件样式打进同一 CSS 产物），新代码直接 `var(--xxx)` 使用，不要在 `HomeMiniapp.vue`/`HomeMiniappEn.vue` 里重新定义这些变量
- 本项目没有自动化测试框架（纯 VitePress 静态站点，`package.json` 无 test script），每个任务的"测试"步骤是 `npm run docs:build` 构建校验 + 手动浏览器可视化检查，而非单元测试

---

## 文件改动总览

| 文件 | 改动内容 |
|---|---|
| `docs/.vitepress/theme/data/miniapp.zh.js` | 新增 7 个导出：`painPoints` `valueFlywheel` `flywheelCenter` `buildPaths` `evolutionPhases` `evolutionEcosystem` `evolutionFooter` |
| `docs/.vitepress/theme/data/miniapp.en.js` | 同上，英文内容 |
| `docs/.vitepress/theme/HomeMiniapp.vue` | 新增 3 个 `<section>`（区块 A/B/C）+ 对应 CSS；`#value` 区块加一行过渡文案；`<script setup>` import 扩展 |
| `docs/.vitepress/theme/HomeMiniappEn.vue` | 同上，英文镜像 |

---

### Task 1: 数据层 — 新增 7 个数据导出（中英文）

**Files:**
- Modify: `docs/.vitepress/theme/data/miniapp.zh.js` (在 `pmCards` 数组结束、`designBrand` 开始之前插入)
- Modify: `docs/.vitepress/theme/data/miniapp.en.js` (同样位置)

**Interfaces:**
- Produces（后续任务依赖的导出名与字段）:
  - `painPoints: Array<{ title: string, desc: string }>`（4 项）
  - `valueFlywheel: Array<{ num: number, title: string, desc: string }>`（5 项，环形顺序）
  - `flywheelCenter: { miniPrograms: string[], capabilities: string[] }`
  - `buildPaths: Array<{ key: string, title: string, grad: string, steps: Array<{ num: number, title: string, chips: string[], isSilo?: boolean }>, benefits: string[] }>`（2 项：pathA / pathB）
  - `evolutionPhases: Array<{ num: string, title: string, tag: string, lc: string, lbg: string, lbd: string, apps: string[], note?: string }>`（3 项）
  - `evolutionEcosystem: string[]`（2 项）
  - `evolutionFooter: Array<{ title: string, desc: string }>`（4 项）

- [ ] **Step 1: 在 `miniapp.zh.js` 中，`pmCards` 数组结束（第 54 行 `]`）之后、`export const designBrand = {`（第 56 行）之前插入以下代码**

```js
export const painPoints = [
  { title: '开通频率低', desc: '用户较少打开 App，限制了互动与变现机会' },
  { title: '服务体验割裂', desc: '功能分散在多个独立 App 中，用户切换成本高，体验割裂' },
  { title: '新服务上线慢', desc: '发版周期长、应用商店审核滞后，新服务与营销活动难以快速触达用户' },
  { title: '合作伙伴变现难', desc: '各服务相互独立，难以引入合作伙伴，也难以共享价值' },
]

export const valueFlywheel = [
  { num: 1, title: '更多日常场景', desc: '小程序覆盖更多生活与金融场景' },
  { num: 2, title: '更高打开频率', desc: '用户每天都有更多理由打开 App' },
  { num: 3, title: '更强用户留存', desc: '体验粘性提升用户忠诚度与生命周期价值' },
  { num: 4, title: '更快服务上线', desc: '小程序热更新，天级交付新服务而非月级' },
  { num: 5, title: '合作伙伴生态收入', desc: '更多合作伙伴、更多交易、更多收入' },
]

export const flywheelCenter = {
  miniPrograms: ['钱包', '账单', '交通卡', '积分', '商城', '伙伴应用'],
  capabilities: ['账户', '数据', 'API'],
}

export const buildPaths = [
  {
    key: 'pathA',
    title: 'Path A · 整合孤立 App 为 Super App',
    grad: 'linear-gradient(135deg,#1d4ed8,#3b82f6)',
    steps: [
      { num: 0, title: '今天：孤立 App', chips: ['钱包 App', '充值 App', '账单 App', '客服 App'], isSilo: true },
      { num: 1, title: '搭建 Super App 壳', chips: [] },
      { num: 2, title: '服务小程序化', chips: ['钱包', '账单', '交通卡', '积分'] },
    ],
    benefits: ['统一入口', '运营一体化', '增强用户粘性'],
  },
  {
    key: 'pathB',
    title: 'Path B · 现有 App 渐进演进为小程序平台',
    grad: 'linear-gradient(135deg,#7c3aed,#a78bfa)',
    steps: [
      { num: 1, title: '现有钱包 App', chips: ['余额', '转账', '缴费'] },
      { num: 2, title: '试点 1–2 个小程序', chips: ['交通卡', '积分'] },
      { num: 3, title: '集成 SDK / 容器', chips: ['交通卡', '积分', 'SDK / Open API'] },
      { num: 4, title: 'Super App 基座 + 更多小程序', chips: ['钱包', '账单', '交通卡', '积分', '商城'] },
      { num: 5, title: '合作伙伴生态扩展', chips: ['伙伴应用'] },
    ],
    benefits: ['变更风险更低', '上市更快', '生态持续增长'],
  },
]

export const evolutionPhases = [
  {
    num: '01', title: '财务基础', tag: '获客建信任',
    lc: '#3b82f6', lbg: 'rgba(59,130,246,0.08)', lbd: 'rgba(59,130,246,0.35)',
    apps: ['钱包 App', '财富管理', 'eKYC', '积分'],
    note: '小程序开放：第三方接入 → 转账，权益 → 身份',
  },
  {
    num: '02', title: '生活消费', tag: '日常习惯培养 → ARPU 增长',
    lc: '#a78bfa', lbg: 'rgba(167,139,250,0.08)', lbd: 'rgba(167,139,250,0.35)',
    apps: ['游戏', '票务', '餐饮', '电商'],
    note: '小程序开放性',
  },
  {
    num: '03', title: '智能与基础设施', tag: '留存用户 → 开放伙伴生态',
    lc: '#06b6d4', lbg: 'rgba(6,182,212,0.08)', lbd: 'rgba(6,182,212,0.35)',
    apps: ['AI 智能体', '交通卡', '区块链', 'IM', 'EV 充电', '智能家居', '短视频'],
  },
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

- [ ] **Step 2: 在 `miniapp.en.js` 中，`pmCards` 数组结束（第 54 行 `]`）之后、`export const designBrand = {`（第 56 行）之前插入以下代码（字段结构与 zh 完全一致，内容为英文）**

```js
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
```

- [ ] **Step 3: 校验语法 — 运行构建**

Run: `cd chinasofti-capability && npm run docs:build`
Expected: 构建成功无报错（此时新导出尚未被任何组件引用，属于正常的"未使用导出"，不会报错；若报 `SyntaxError`，检查上面两段代码的逗号/括号是否完整复制）

- [ ] **Step 4: Commit**

```bash
git add docs/.vitepress/theme/data/miniapp.zh.js docs/.vitepress/theme/data/miniapp.en.js
git commit -m "feat(miniapp): add data layer for pain points, value flywheel, build paths and evolution roadmap"
```

---

### Task 2: 区块 A ——"为什么现在要做小程序"（痛点 + 价值飞轮）

**Files:**
- Modify: `docs/.vitepress/theme/HomeMiniapp.vue`（`<script setup>` import 第 4 行；模板第 197-199 行之间插入新 `<section>`；`<style scoped>` 结尾插入新 CSS）
- Modify: `docs/.vitepress/theme/HomeMiniappEn.vue`（同样位置，英文镜像）

**Interfaces:**
- Consumes: Task 1 产出的 `painPoints`、`valueFlywheel`、`flywheelCenter`
- Produces: 无（叶子任务，不被其他任务依赖）

- [ ] **Step 1: 在 `HomeMiniapp.vue` 第 4 行，扩展 import**

将：
```js
import { architectureLayers, deliverySteps, pmCards } from './data/miniapp.zh.js'
```
改为：
```js
import { architectureLayers, deliverySteps, pmCards, painPoints, valueFlywheel, flywheelCenter } from './data/miniapp.zh.js'
```

- [ ] **Step 2: 在 `HomeMiniapp.vue` 第 197-199 行之间（`<div class="mn-body">` 之后、`<!-- 核心价值 -->` 之前）插入新 `<section>`**

原文（第 196-200 行）：
```html
<!-- PAGE BODY -->
<div class="mn-body">

  <!-- 核心价值 -->
  <section class="mn-sec reveal" id="value">
```

改为：
```html
<!-- PAGE BODY -->
<div class="mn-body">

  <!-- 为什么现在要做小程序 -->
  <section class="mn-sec reveal" id="why-now">
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Why Now · 运营挑战与价值</div>
      <h2 class="mn-sec-title">为什么现在要做小程序</h2>
    </div>
    <div class="mn-why-grid">
      <div class="mn-why-col">
        <div class="mn-why-col-hd mn-why-hd-pain">运营商痛点</div>
        <div class="mn-pain-list">
          <div v-for="p in painPoints" :key="p.title" class="mn-pain-item">
            <div class="mn-pain-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
            </div>
            <div class="mn-pain-text">
              <h4>{{ p.title }}</h4>
              <p>{{ p.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mn-why-arrow">→</div>
      <div class="mn-why-col">
        <div class="mn-why-col-hd mn-why-hd-value">小程序运营价值飞轮</div>
        <div class="mn-flywheel">
          <div class="mn-flywheel-center">
            <div class="mn-flywheel-phone">
              <div class="mn-flywheel-phone-label">Super App</div>
              <div class="mn-flywheel-phone-chips">
                <span v-for="m in flywheelCenter.miniPrograms" :key="m">{{ m }}</span>
              </div>
            </div>
          </div>
          <div v-for="(f, i) in valueFlywheel" :key="f.num" class="mn-flywheel-node" :class="`mn-flywheel-node-${i+1}`">
            <div class="mn-flywheel-num">{{ f.num }}</div>
            <div class="mn-flywheel-text">
              <h5>{{ f.title }}</h5>
              <p>{{ f.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 核心价值 -->
  <section class="mn-sec reveal" id="value">
```

- [ ] **Step 3: 在 `HomeMiniapp.vue` 文件末尾（`</style>` 之前，即当前最后一行之前）插入新 CSS**

```css
/* ── WHY NOW ── */
.mn-why-grid { display: grid; grid-template-columns: 1fr auto 1fr; gap: 32px; align-items: start; }
.mn-why-arrow { font-size: 1.6rem; color: #94a3b8; align-self: center; }
.mn-why-col-hd {
  font-size: 0.85rem; font-weight: 800; color: #fff; padding: 10px 18px;
  border-radius: 10px; margin-bottom: 18px; text-align: center;
}
.mn-why-hd-pain { background: linear-gradient(135deg,#1d4ed8,#3b82f6); }
.mn-why-hd-value { background: linear-gradient(135deg,#0891b2,#06b6d4); }
.mn-pain-list { display: flex; flex-direction: column; gap: 14px; }
.mn-pain-item {
  display: flex; gap: 14px; align-items: flex-start;
  background: var(--card-bg); border: 1px solid var(--border); border-radius: var(--radius);
  padding: 16px 18px; box-shadow: var(--shadow);
}
.mn-pain-icon {
  width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
  background: linear-gradient(135deg,#ef4444,#f87171);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 12px rgba(239,68,68,0.25);
}
.mn-pain-text h4 { font-size: 0.9rem; font-weight: 800; color: var(--text1); margin: 0 0 4px; }
.mn-pain-text p { font-size: 0.8rem; color: var(--text2); line-height: 1.55; margin: 0; }

.mn-flywheel { position: relative; width: 100%; max-width: 420px; aspect-ratio: 1 / 1; margin: 0 auto; }
.mn-flywheel::before {
  content: ''; position: absolute; inset: 16%;
  border: 2px dashed rgba(124,58,237,0.35); border-radius: 50%;
}
.mn-flywheel-center { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); z-index: 2; }
.mn-flywheel-phone {
  width: 110px; min-height: 90px; border-radius: 14px; border: 2px solid var(--border);
  background: var(--card-bg); box-shadow: var(--shadow-lg);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 6px; padding: 10px 8px;
}
.mn-flywheel-phone-label { font-size: 0.68rem; font-weight: 900; color: var(--text1); }
.mn-flywheel-phone-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 3px; }
.mn-flywheel-phone-chips span {
  font-size: 0.52rem; font-weight: 700; padding: 2px 5px; border-radius: 999px;
  background: rgba(124,58,237,0.12); color: var(--text2);
}
.mn-flywheel-node { position: absolute; width: 130px; text-align: center; transform: translate(-50%,-50%); }
.mn-flywheel-node-1 { left: 50%; top: 14%; }
.mn-flywheel-node-2 { left: 84%; top: 39%; }
.mn-flywheel-node-3 { left: 71%; top: 79%; }
.mn-flywheel-node-4 { left: 29%; top: 79%; }
.mn-flywheel-node-5 { left: 16%; top: 39%; }
.mn-flywheel-num {
  width: 26px; height: 26px; border-radius: 50%; margin: 0 auto 6px;
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg,#7c3aed,#a78bfa); color: #fff; font-weight: 900; font-size: 0.78rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.18);
}
.mn-flywheel-text h5 { font-size: 0.8rem; font-weight: 800; color: var(--text1); margin: 0 0 3px; }
.mn-flywheel-text p { font-size: 0.7rem; color: var(--text3); line-height: 1.4; margin: 0; }

@media (max-width: 900px) {
  .mn-why-grid { grid-template-columns: 1fr; }
  .mn-why-arrow { display: none; }
}
@media (max-width: 640px) {
  .mn-flywheel { position: static; aspect-ratio: auto; max-width: 100%; display: flex; flex-direction: column; gap: 14px; }
  .mn-flywheel::before { display: none; }
  .mn-flywheel-center { position: static; order: -1; }
  .mn-flywheel-node {
    position: static; width: auto; transform: none;
    display: flex; align-items: center; gap: 12px; text-align: left;
  }
  .mn-flywheel-num { margin: 0; flex-shrink: 0; }
}
```

- [ ] **Step 4: 对 `HomeMiniappEn.vue` 重复 Step 1–3，改动位置相同（import 第 4 行；`<div class="mn-body">` 与 `<!-- Core Value -->` 之间；`</style>` 之前），英文文案如下**

Import 行改为：
```js
import { architectureLayers, deliverySteps, pmCards, painPoints, valueFlywheel, flywheelCenter } from './data/miniapp.en.js'
```

`<section>` 内容（结构与 zh 完全相同，仅替换以下文案节点）：
- `<div class="mn-eyebrow">Why Now · Operator Challenges &amp; Value</div>`
- `<h2 class="mn-sec-title">Why Mini-Programs, Why Now</h2>`
- `<div class="mn-why-col-hd mn-why-hd-pain">Operator Pain Points</div>`
- `<div class="mn-why-col-hd mn-why-hd-value">Mini-Program Operator Value Flywheel</div>`
- `<div class="mn-flywheel-phone-label">Super App</div>`（不变）

CSS 与 zh 文件完全一致，原样复制到 `HomeMiniappEn.vue` 的 `</style>` 之前。

- [ ] **Step 5: 构建校验**

Run: `cd chinasofti-capability && npm run docs:build`
Expected: 构建成功无报错

- [ ] **Step 6: 启动开发服务器手动核查**

Run: `cd chinasofti-capability && npm run docs:dev`
访问 `http://localhost:5173/zh/miniapp/` 与 `http://localhost:5173/en/miniapp/`，检查：
- "为什么现在要做小程序" 区块出现在统计条之后、核心价值之前
- 左侧 4 条痛点卡片正常显示图标+标题+描述
- 右侧价值飞轮 5 个节点围绕中心手机图标环形排列，无重叠、无溢出容器边缘
- 把浏览器窗口缩小到 <900px，两栏变单列，箭头消失；缩小到 <640px，飞轮降级为纵向列表

- [ ] **Step 7: Commit**

```bash
git add docs/.vitepress/theme/HomeMiniapp.vue docs/.vitepress/theme/HomeMiniappEn.vue
git commit -m "feat(miniapp): add why-now section with pain points and value flywheel"
```

---

### Task 3: 区块 B ——"Two Build Paths"

**Files:**
- Modify: `docs/.vitepress/theme/HomeMiniapp.vue`
- Modify: `docs/.vitepress/theme/HomeMiniappEn.vue`

**Interfaces:**
- Consumes: Task 1 的 `buildPaths`；复用页面既有 `.mn-flow-steps` / `.mn-flow-step` / `.mn-flow-arrow` / `.mn-flow-num` / `.mn-flow-content` CSS 类（已在文件中定义，无需重新定义基础样式）
- Produces: 无

- [ ] **Step 1: 在 `HomeMiniapp.vue` 第 4 行 import 中追加 `buildPaths`**

改为：
```js
import { architectureLayers, deliverySteps, pmCards, painPoints, valueFlywheel, flywheelCenter, buildPaths } from './data/miniapp.zh.js'
```

- [ ] **Step 2: 在 Task 2 新增的 `</section>`（区块 A 结尾）之后、`<!-- 核心价值 -->` 之前插入新 `<section>`**

```html
  <!-- Two Build Paths -->
  <section class="mn-sec reveal" id="build-paths">
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Two Build Paths · 建设路径</div>
      <h2 class="mn-sec-title">两条 Super App 建设路径</h2>
    </div>
    <div v-for="path in buildPaths" :key="path.key" class="mn-path-block">
      <h3 class="mn-path-title">{{ path.title }}</h3>
      <div class="mn-flow-steps mn-path-steps">
        <template v-for="(step, i) in path.steps" :key="step.num">
          <div class="mn-flow-arrow" v-if="i > 0">→</div>
          <div class="mn-flow-step mn-path-step" :class="{ 'mn-path-step-silo': step.isSilo }">
            <div class="mn-flow-num" :style="`background:${path.grad};`">{{ step.num }}</div>
            <div class="mn-path-phone">
              <span v-for="c in step.chips" :key="c" class="mn-path-phone-chip">{{ c }}</span>
              <span v-if="!step.chips.length" class="mn-path-phone-empty"></span>
            </div>
            <div class="mn-flow-content"><h4>{{ step.title }}</h4></div>
          </div>
        </template>
      </div>
      <div class="mn-path-benefits">
        <span class="mn-path-benefits-label">Operator Benefits</span>
        <span v-for="b in path.benefits" :key="b" class="mn-path-benefit-chip">{{ b }}</span>
      </div>
    </div>
  </section>

  <!-- 核心价值 -->
```

- [ ] **Step 3: 在 `HomeMiniapp.vue` 文件末尾 `</style>` 之前追加 CSS**

```css
/* ── BUILD PATHS ── */
.mn-path-block { margin-bottom: 48px; }
.mn-path-block:last-child { margin-bottom: 0; }
.mn-path-title { font-size: 1.05rem; font-weight: 800; color: var(--text1); margin: 0 0 22px; }
.mn-path-phone {
  width: 84px; min-height: 64px; margin: 10px auto 12px;
  border: 2px solid var(--border); border-radius: 10px; background: var(--card-bg);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  flex-wrap: wrap; gap: 3px; padding: 6px 5px; position: relative;
}
.mn-path-phone::after {
  content: ''; position: absolute; bottom: 4px; left: 50%; transform: translateX(-50%);
  width: 20px; height: 2px; border-radius: 2px; background: var(--border);
}
.mn-path-phone-chip {
  font-size: 0.58rem; font-weight: 700; line-height: 1.2;
  padding: 2px 6px; border-radius: 999px;
  background: rgba(29,78,216,0.08); color: var(--text2); white-space: nowrap;
}
.mn-path-phone-empty { width: 30px; height: 30px; border-radius: 6px; border: 1.5px dashed var(--border); }
.mn-path-step-silo .mn-path-phone { border-style: dashed; }
.mn-path-benefits {
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
  margin-top: 8px; padding-top: 16px; border-top: 1px dashed var(--border);
}
.mn-path-benefits-label {
  font-size: 0.72rem; font-weight: 800; color: var(--text3);
  text-transform: uppercase; letter-spacing: 0.06em;
}
.mn-path-benefit-chip {
  font-size: 0.78rem; font-weight: 600; color: var(--text2);
  background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.25);
  padding: 4px 12px; border-radius: 999px;
}
```

- [ ] **Step 4: 对 `HomeMiniappEn.vue` 重复 Step 1–3**

Import 追加 `buildPaths`：
```js
import { architectureLayers, deliverySteps, pmCards, painPoints, valueFlywheel, flywheelCenter, buildPaths } from './data/miniapp.en.js'
```

`<section>` 文案节点替换：
- `<div class="mn-eyebrow">Two Build Paths</div>`
- `<h2 class="mn-sec-title">Two Super App Build Paths</h2>`
- `<span class="mn-path-benefits-label">Operator Benefits</span>`（英文页面本就用英文，保持不变）

CSS 与 zh 完全一致，原样复制。

- [ ] **Step 5: 构建校验**

Run: `cd chinasofti-capability && npm run docs:build`
Expected: 构建成功无报错

- [ ] **Step 6: 手动核查**

Run: `npm run docs:dev`，访问 `/zh/miniapp/` 与 `/en/miniapp/`：
- Path A（3 步）与 Path B（5 步）依次显示，每步下方有手机图标 + chip 标签
- Path A 第一步（"今天：孤立 App"）手机图标为虚线框样式，与后续步骤实线框区分
- 每条路径底部有 "Operator Benefits" 一行 chip
- 缩小窗口至 <768px，步骤流按现有 `.mn-flow-steps` 既定规则换行，无溢出

- [ ] **Step 7: Commit**

```bash
git add docs/.vitepress/theme/HomeMiniapp.vue docs/.vitepress/theme/HomeMiniappEn.vue
git commit -m "feat(miniapp): add two build paths section"
```

---

### Task 4: 区块 C ——"三阶段演进路线图"

**Files:**
- Modify: `docs/.vitepress/theme/HomeMiniapp.vue`
- Modify: `docs/.vitepress/theme/HomeMiniappEn.vue`

**Interfaces:**
- Consumes: Task 1 的 `evolutionPhases`、`evolutionEcosystem`、`evolutionFooter`
- Produces: 无

- [ ] **Step 1: 在 `HomeMiniapp.vue` 第 4 行 import 中追加三项**

```js
import { architectureLayers, deliverySteps, pmCards, painPoints, valueFlywheel, flywheelCenter, buildPaths, evolutionPhases, evolutionEcosystem, evolutionFooter } from './data/miniapp.zh.js'
```

- [ ] **Step 2: 在 Task 3 新增的 `</section>`（区块 B 结尾）之后、`<!-- 核心价值 -->` 之前插入新 `<section>`**

```html
  <!-- 三阶段演进路线图 -->
  <section class="mn-sec reveal" id="evolution">
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Roadmap · 演进路线</div>
      <h2 class="mn-sec-title">三阶段 Super App 演进路线图</h2>
    </div>
    <div class="mn-evo-wrap">
      <div
        v-for="(phase, i) in evolutionPhases"
        :key="phase.num"
        class="mn-evo-phase"
        :class="`mn-evo-phase-${i+1}`"
        :style="`--pc:${phase.lc};background:${phase.lbg};border-color:${phase.lbd};`"
      >
        <div class="mn-evo-phase-hd">
          <span class="mn-evo-phase-num">{{ phase.num }}</span>
          <h4>{{ phase.title }}</h4>
          <span class="mn-evo-phase-tag">{{ phase.tag }}</span>
        </div>
        <div class="mn-evo-chips">
          <span v-for="a in phase.apps" :key="a">{{ a }}</span>
        </div>
        <div class="mn-evo-note" v-if="phase.note">{{ phase.note }}</div>
      </div>
    </div>
    <div class="mn-evo-ecosystem">
      <div v-for="e in evolutionEcosystem" :key="e" class="mn-evo-eco-pill">{{ e }}</div>
    </div>
    <div class="mn-evo-footer">
      <div v-for="f in evolutionFooter" :key="f.title" class="mn-evo-footer-card">
        <h4>{{ f.title }}</h4>
        <p>{{ f.desc }}</p>
      </div>
    </div>
  </section>

  <!-- 核心价值 -->
```

- [ ] **Step 3: 在 `HomeMiniapp.vue` 文件末尾 `</style>` 之前追加 CSS**

```css
/* ── EVOLUTION ROADMAP ── */
.mn-evo-wrap { display: flex; align-items: stretch; justify-content: center; margin: 0 auto 32px; max-width: 1100px; }
.mn-evo-phase {
  flex: 1; position: relative; border: 1px solid; border-radius: 50% / 42%;
  padding: 40px 30px 30px; min-height: 320px;
  display: flex; flex-direction: column; align-items: center; text-align: center; gap: 14px;
}
.mn-evo-phase-1 { z-index: 1; margin-right: -46px; }
.mn-evo-phase-2 { z-index: 2; margin: -18px -46px 0; }
.mn-evo-phase-3 { z-index: 1; margin-left: -46px; }
.mn-evo-phase-hd { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.mn-evo-phase-num {
  font-size: 0.72rem; font-weight: 900; color: #fff; background: var(--pc);
  padding: 3px 10px; border-radius: 999px; letter-spacing: 0.05em;
}
.mn-evo-phase-hd h4 { font-size: 1.05rem; font-weight: 900; color: var(--text1); margin: 2px 0 0; }
.mn-evo-phase-tag { font-size: 0.76rem; font-weight: 600; color: var(--text2); }
.mn-evo-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; margin-top: 6px; }
.mn-evo-chips span {
  font-size: 0.78rem; font-weight: 600; padding: 4px 12px; border-radius: 999px;
  background: var(--card-bg); border: 1px solid var(--border); color: var(--text2);
}
.mn-evo-note { font-size: 0.72rem; color: var(--text3); font-style: italic; margin-top: auto; padding-top: 10px; }

.mn-evo-ecosystem { display: flex; flex-wrap: wrap; justify-content: center; gap: 14px; margin: 8px 0 32px; }
.mn-evo-eco-pill {
  background: var(--card-bg); border: 1px solid var(--border); border-radius: 999px;
  padding: 10px 22px; font-size: 0.82rem; font-weight: 600; color: var(--text2); box-shadow: var(--shadow);
}

.mn-evo-footer { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
.mn-evo-footer-card {
  background: var(--card-bg); border: 1px solid var(--border); border-radius: var(--radius);
  padding: 20px 18px; box-shadow: var(--shadow);
}
.mn-evo-footer-card h4 { font-size: 0.92rem; font-weight: 800; color: var(--text1); margin: 0 0 8px; }
.mn-evo-footer-card p { font-size: 0.81rem; color: var(--text2); line-height: 1.6; margin: 0; }

@media (max-width: 768px) {
  .mn-evo-wrap { flex-direction: column; max-width: 480px; }
  .mn-evo-phase-1, .mn-evo-phase-2, .mn-evo-phase-3 {
    margin: 0 0 20px; border-radius: var(--radius); min-height: auto;
  }
  .mn-evo-footer { grid-template-columns: repeat(2,1fr); }
}
@media (max-width: 480px) {
  .mn-evo-footer { grid-template-columns: 1fr; }
}
```

- [ ] **Step 4: 对 `HomeMiniappEn.vue` 重复 Step 1–3**

Import 追加三项：
```js
import { architectureLayers, deliverySteps, pmCards, painPoints, valueFlywheel, flywheelCenter, buildPaths, evolutionPhases, evolutionEcosystem, evolutionFooter } from './data/miniapp.en.js'
```

`<section>` 文案节点替换：
- `<div class="mn-eyebrow">Roadmap</div>`
- `<h2 class="mn-sec-title">Three-Stage Super App Evolution</h2>`

CSS 与 zh 完全一致，原样复制。

- [ ] **Step 5: 构建校验**

Run: `cd chinasofti-capability && npm run docs:build`
Expected: 构建成功无报错

- [ ] **Step 6: 手动核查**

Run: `npm run docs:dev`，访问 `/zh/miniapp/` 与 `/en/miniapp/`：
- 三个椭圆区域左右重叠排列，中间（Phase 2）略高且在最上层
- 每个区域内 chip 标签按区域宽度自动换行，不溢出到相邻区域外
- 下方两条生态合作 pill、4 张底部卡片正常显示
- 缩小窗口至 <768px，椭圆降级为纵向堆叠卡片，边框变为普通圆角矩形，无重叠

- [ ] **Step 7: Commit**

```bash
git add docs/.vitepress/theme/HomeMiniapp.vue docs/.vitepress/theme/HomeMiniappEn.vue
git commit -m "feat(miniapp): add three-stage evolution roadmap section"
```

---

### Task 5: 核心价值区块过渡文案

**Files:**
- Modify: `docs/.vitepress/theme/HomeMiniapp.vue`（`#value` 区块）
- Modify: `docs/.vitepress/theme/HomeMiniappEn.vue`（`#value` 区块）

**Interfaces:**
- Consumes: 无新数据，纯文案与 CSS
- Produces: 无

- [ ] **Step 1: 在 `HomeMiniapp.vue` 的 `#value` 区块，`mn-sec-header` 与 `mn-compare-grid` 之间插入一行过渡文案**

原文：
```html
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Core Value · 核心价值</div>
      <h2 class="mn-sec-title">为什么选择 Super App 小程序</h2>
    </div>
    <div class="mn-compare-grid">
```

改为：
```html
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Core Value · 核心价值</div>
      <h2 class="mn-sec-title">为什么选择 Super App 小程序</h2>
    </div>
    <p class="mn-value-lead">从上方的运营挑战与三阶段演进路线出发，Super App 小程序是承接每一阶段能力落地的技术底座——相比原生 App 与纯 H5，它在开发效率、原生能力调用与生态整合上更具优势：</p>
    <div class="mn-compare-grid">
```

- [ ] **Step 2: 在 `HomeMiniapp.vue` 文件末尾 `</style>` 之前追加 CSS**

```css
.mn-value-lead { font-size: 0.92rem; color: var(--text2); line-height: 1.75; max-width: 820px; margin: -16px 0 28px; }
```

- [ ] **Step 3: 在 `HomeMiniappEn.vue` 的 `#value` 区块做相同插入，英文文案**

```html
    <div class="mn-sec-header">
      <div class="mn-eyebrow">Core Value · Our Advantage</div>
      <h2 class="mn-sec-title">Why Choose Super App Mini-Programs</h2>
    </div>
    <p class="mn-value-lead">Building on the operator challenges and three-stage roadmap above, Super App mini-programs are the technical foundation that carries each phase's capabilities to life — outperforming native apps and plain H5 in development efficiency, native capability access, and ecosystem integration:</p>
    <div class="mn-compare-grid">
```

CSS 与 zh 一致，原样复制到 `HomeMiniappEn.vue` 的 `</style>` 之前。

- [ ] **Step 4: 构建校验**

Run: `cd chinasofti-capability && npm run docs:build`
Expected: 构建成功无报错

- [ ] **Step 5: 手动核查**

访问 `/zh/miniapp/` 与 `/en/miniapp/`，确认核心价值区块标题下方新增一行文案，语义通顺，未截断，与下方三卡片间距协调（不拥挤）

- [ ] **Step 6: Commit**

```bash
git add docs/.vitepress/theme/HomeMiniapp.vue docs/.vitepress/theme/HomeMiniappEn.vue
git commit -m "docs(miniapp): bridge core value section copy to new roadmap sections"
```

---

### Task 6: 全量可视化 QA

**Files:** 无代码改动，仅验证

**Interfaces:**
- Consumes: Task 1–5 的全部产出
- Produces: 无（终止任务）

- [ ] **Step 1: 完整构建**

Run: `cd chinasofti-capability && npm run docs:build`
Expected: 构建成功，`docs/.vitepress/dist/` 下生成 `zh/miniapp.html` 与 `en/miniapp.html`（或对应路由产物）

- [ ] **Step 2: 启动开发服务器**

Run: `cd chinasofti-capability && npm run docs:dev`

- [ ] **Step 3: 桌面宽度（≥1280px）逐区块核查 `/zh/miniapp/`**

- Hero → 统计条 → 为什么现在要做小程序 → Two Build Paths → 三阶段演进路线图 → 核心价值 → 架构总览……顺序正确
- 三个新区块的 `.reveal` 滚动进入动画正常触发（滚动到视口时淡入上移，与其余既有区块行为一致）
- 配色：区块 A 痛点用红色系、价值飞轮用紫色系；区块 C 三阶段用蓝/紫/青，与既有"四层能力架构"配色呼应

- [ ] **Step 4: 对 `/en/miniapp/` 重复 Step 3，确认英文文案无残留中文、无占位符（搜索确认）**

Run: `python -m markitdown` 不适用于 html，改用浏览器直接检查，或运行：
```bash
cd chinasofti-capability && npm run docs:build && grep -riE "TBD|TODO|lorem" docs/.vitepress/dist/en/miniapp.html
```
Expected: 无输出（无残留占位符）

- [ ] **Step 5: 响应式检查（浏览器 DevTools 设备工具栏，分别设为 1024px / 768px / 375px 宽度）**

对 `/zh/miniapp/` 与 `/en/miniapp/` 各自检查：
- 768px：区块 A 两栏变单列；区块 C 三椭圆变纵向堆叠卡片
- 375px：区块 B 步骤流换行不溢出；区块 A 价值飞轮变纵向列表；核心价值三卡片变单列（既有行为，确认未被新增 CSS 破坏）

- [ ] **Step 6: 若发现问题，返回对应 Task 修复后重新执行 Step 1–5，直至一次完整检查无新问题**

- [ ] **Step 7: 最终确认无待办后，通知用户可以人工验收**
