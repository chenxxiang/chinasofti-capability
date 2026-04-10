# PPT → 中软能力库 Agent 设计规格

**日期：** 2026-04-10
**状态：** 已批准
**触发方式：** Claude Code 斜杠命令（Skill）

---

## 1. 目标

将任意一份中软国际业务方案 PPT 文件，通过一条命令，自动转换为：

1. **VitePress 方案页**（`plan.md`）— 发布到中软能力库网站
2. **Slidev 演示文件**（`<slug>-solution.md`）— 用于演示场景
3. **GitHub 推送** — 自动 commit & push，上线生效

目标是让这个流程**可重复、可复用**，处理每个新 PPT 的时间从数小时缩短到分钟级。

---

## 2. 调用方式

在 Claude Code 中执行：

```
/convert-ppt D:/path/to/xxx.pptx
```

Skill 文件位置：`D:/Claude/.claude/skills/convert-ppt.md`

---

## 3. 工作流（六阶段）

```
[输入 PPTX]
      │
      ▼
┌─────────────────────┐
│ 阶段一：PPTX 解析   │  提取文字 + 图片 + 幻灯片结构
└─────────────┬───────┘
              │
              ▼
┌─────────────────────┐
│ 阶段二：内容理解    │  Claude 分析模块名、章节、图片语义
└─────────────┬───────┘
              │
              ▼
         ⏸ 确认点 1：模块名 / slug / 目标路径
              │ 用户确认
              ▼
┌─────────────────────┐
│ 阶段三：图片处理    │  复制 + 语义重命名到 public 目录
└─────────────┬───────┘
              │
              ▼
         ⏸ 确认点 2：图片匹配结果预览
              │ 用户确认
              ▼
┌─────────────────────┐
│ 阶段四：生成        │  plan.md + Slidev 文件
│ plan.md + Slidev    │
└─────────────┬───────┘
              │
              ▼
┌─────────────────────┐
│ 阶段五：注册侧边栏  │  更新 sidebar.zh.ts + 生成占位 md
└─────────────┬───────┘
              │
              ▼
         ⏸ 确认点 3：生成摘要预览
              │ 用户确认
              ▼
┌─────────────────────┐
│ 阶段六：Git 推送    │  build + commit + push
└─────────────────────┘
```

---

## 4. 三个确认点详细说明

### 确认点 1 — 模块识别

Agent 从 PPT 第一张幻灯片提取标题，推断模块名和 slug，展示：

```
📦 检测到模块：内容分发平台
   slug:        cms
   VitePress:   docs/zh/business/cms/plan.md
   Slidev:      slidev/solutions/cms-solution.md
   图片目录:    docs/public/solutions/cms/images/

✅ 确认继续？还是修改 slug / 路径？
```

如果 slug 已存在于 `sidebar.zh.ts`，额外提示：
```
⚠️  该模块已存在，将覆盖 plan.md。其他文件不受影响。
```

### 确认点 2 — 图片匹配

列出 Claude 对每张图片的语义判断：

```
🖼  图片匹配结果（共 12 张，已选 9 张）：

  arch.png          ← image7.png   [架构总图]
  live-backend.png  ← image9.png   [直播管理后台截图]
  live-comment.png  ← image11.jpeg [评论审核界面]
  vote-list.png     ← image13.png  [投票管理列表]
  ...
  ⊘ 跳过 3 张（封面/背景/装饰图）

✅ 确认继续？还是手动调整映射？
```

### 确认点 3 — 生成预览

```
✨ 生成完成，预览摘要：

  plan.md     — 6 个章节，9 张截图，HTML 架构图（4层）
  Slidev      — 12 张幻灯片
  sidebar     — 已追加「内容分发平台」条目

🚀 确认 push 到 GitHub？
```

---

## 5. 各阶段技术实现

### 阶段一：PPTX 解析

使用 Python（通过 Bash 工具）解压 PPTX：

```python
# 解压到临时目录
import zipfile, os
with zipfile.ZipFile(pptx_path) as z:
    z.extractall(tmp_dir)

# 提取文字：读取 ppt/slides/slide*.xml 中的 <a:t> 标签
# 提取图片：读取 ppt/media/ 目录
# 建立幻灯片-图片映射：读取 ppt/slides/_rels/slide*.xml.rels
```

输出：结构化的幻灯片列表（每条包含：幻灯片序号、标题、正文、引用图片路径）。

### 阶段二：内容理解

将结构化文字 + 图片（base64 编码）传给 Claude，要求返回 JSON：

```json
{
  "module_name": "内容分发平台",
  "slug": "cms",
  "sections": [
    {
      "title": "直播发布系统",
      "anchor": "直播发布系统",
      "content": "...",
      "features": ["直播间管理", "评论审核", "广播接入"],
      "screenshots": ["image9.png", "image11.jpeg"]
    }
  ],
  "arch_layers": [
    { "name": "前端功能层", "groups": [...] },
    { "name": "对接层", "items": [...] },
    { "name": "应用服务层", "groups": [...] },
    { "name": "支撑基础层", "groups": [...] }
  ],
  "skip_images": ["image1.png", "image2.png"]
}
```

### 阶段三：图片处理

- 将选中图片复制到 `docs/public/solutions/<slug>/images/`
- 同时复制一份到 `slidev/solutions/images/`（Slidev 相对路径需要）
- 使用 Claude 给出的语义名称重命名

### 阶段四：生成 plan.md

基于 CMS 的 plan.md 作为**模板参考**，根据 JSON 数据动态生成：

- Hero 区（渐变背景 + 标签）
- 产品定位卡片
- HTML/CSS 架构图（根据 `arch_layers` 数据，非图片）
- 四大子系统可点击卡片（锚点跳转）
- 各章节详情（SVG 图标 + 功能描述 + cms-screenshot-wrapper 截图）
- Lightbox JS 脚本

所有 CSS 类复用 `style.css` 中已有的 `cms-*` 类，无需新增。

### 阶段四（并行）：生成 Slidev 文件

参照 `slidev/solutions/cms-solution.md` 格式，生成 `<slug>-solution.md`：
- 每个章节一张幻灯片
- 使用相对路径 `./images/xxx.png` 引用图片

### 阶段五：注册侧边栏

在 `sidebar.zh.ts` 中追加条目（追加到「业务平台」分组末尾）：

```typescript
{
  text: '<模块名>',
  collapsed: true,
  items: [
    { text: '概览',  link: '/zh/business/<slug>/' },
    { text: '方案',  link: '/zh/business/<slug>/plan' },
    { text: '报价',  link: '/zh/business/<slug>/pricing' },
    { text: 'DEMO',  link: '/zh/business/<slug>/demo' },
  ]
}
```

生成三个占位文件（如不存在）：
- `index.md` — `# <模块名>`
- `pricing.md` — `# 报价`
- `demo.md` — `# DEMO`

### 阶段六：Git 推送

```bash
npx vitepress build docs          # 构建验证
git add <相关文件>
git commit -m "feat(<slug>): add solution page from PPT conversion"
git push origin master
```

---

## 6. Skill 文件结构

```
D:/Claude/.claude/skills/convert-ppt.md
```

Skill 内容：触发条件、参数说明、完整的六阶段执行指令，Claude 读取后按步骤执行。

---

## 7. 错误处理

| 场景 | 处理方式 |
|------|----------|
| PPTX 文件不存在 | 立即报错，提示正确路径格式 |
| 文字提取为空 | 警告并停止，提示手动检查 XML |
| 图片全部为装饰图 | 跳过图片阶段，plan.md 不含截图 |
| VitePress build 失败 | 停止 push，打印错误，提示修复 |
| slug 已存在 | 确认点 1 明确提示，用户选择覆盖或跳过 |

---

## 8. 不在本期范围内

- 自动处理英文 PPT（当前只支持中文）
- 批量处理多个 PPT
- pricing.md / demo.md 的内容自动填充
- 监控文件夹自动触发

---

## 9. 成功标准

- 输入一个新 PPT，15 分钟内（含 3 次人工确认）完成 push
- 生成的 plan.md 视觉风格与 CMS 页面一致，无需手动补样式
- 架构图清晰可读（HTML 重绘，非图片）
- Slidev 文件图片正确加载（相对路径）
