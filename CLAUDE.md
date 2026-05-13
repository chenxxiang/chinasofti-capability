# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run docs:dev       # 本地开发服务器（热重载）
npm run docs:build     # 构建生产版本 → docs/.vitepress/dist/
npm run docs:preview   # 预览构建产物
```

部署由 Vercel 自动完成：push 到 `master` 分支后触发（配置见 `vercel.json`）。

## 架构概览

这是一个 **VitePress 静态站点**，用于展示中软国际海外解决方案能力库，支持中英双语。

### 目录约定

| 路径 | 作用 |
|------|------|
| `docs/zh/` | 中文内容页（主版本） |
| `docs/en/` | 英文内容页 |
| `docs/public/` | 静态资源（图片等，部署后以 `/` 为根路径） |
| `docs/.vitepress/config.ts` | 站点配置、导航栏、locale 路由 |
| `docs/.vitepress/sidebar.zh.ts` | 中文侧边栏 |
| `docs/.vitepress/sidebar.en.ts` | 英文侧边栏 |
| `docs/.vitepress/theme/` | 自定义 Vue 组件与全局样式 |

### 自定义 Layout 系统

`LayoutSwitch.vue` 是入口，根据页面 frontmatter 的 `layout` 字段分发到不同首页组件：

| `layout` 值 | 组件 | 用途 |
|-------------|------|------|
| `home-aurora` | `HomeAurora.vue` | 中文主首页（粒子动画） |
| `home-aurora-en` | `HomeAuroraEn.vue` | 英文主首页 |
| `home-overseas` | `HomeOverseas.vue` | 海外服务首页（中文） |
| `home-overseas-en` | `HomeOverseasEn.vue` | 海外服务首页（英文） |
| `home-miniapp` | `HomeMiniapp.vue` | 小程序迁移首页（中文） |
| `home-miniapp-en` | `HomeMiniappEn.vue` | 小程序迁移首页（英文） |
| `home-cases-zh` | `HomeCases.vue` | 成功案例首页 |
| （其他/无） | VitePress DefaultTheme | 普通文档页 |

首页组件是纯 Vue 单文件，内嵌 canvas 粒子、打字机、数字滚动等原生 JS 动画，**不依赖外部 UI 库**。

### 内容页结构

每个解决方案模块下有固定四个页面：

```
zh/business/cms/
  index.md    # 概览（关键依赖、交付方式、应用场景）
  plan.md     # 方案
  pricing.md  # 报价
  demo.md     # DEMO
```

中英文目录结构完全对称，新增模块需同步更新：
1. `docs/zh/` 和 `docs/en/` 下各建对应目录和 .md 文件
2. `sidebar.zh.ts` 和 `sidebar.en.ts` 各加对应条目

### 内容页惯用格式

```md
# 模块名称

## 关键依赖 / 前置条件
::: warning ...
:::

## 中软交付方式
::: tip ...
:::

## 交付边界
::: info ...
:::

## 应用场景
...

**相关页面：** [方案](./plan) · [报价](./pricing) · [DEMO](./demo)
```
