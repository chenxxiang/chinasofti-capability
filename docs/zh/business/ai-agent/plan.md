# AI Agent 智能体平台 · 解决方案

<div class="cms-hero">
  <div class="cms-hero-content">
    <div class="cms-hero-badge">AI Agent · 智能体开发平台</div>
    <h1>基于行业深度理解的<br><span class="cms-hero-gradient">专家级场景化 AI 模型应用</span></h1>
    <p>中软国际 Agent 智能体开发平台，支持 DeepSeek 全版本模型接入，提供复杂工作流编排、RAG 知识库管理及多行业智能体应用，赋能政企 AI 转型。</p>
  </div>
</div>

## 产品定位

<div class="cms-position-grid">
  <div class="cms-position-card">
    <div class="cms-position-icon" style="background:linear-gradient(135deg,#475569,#64748b);">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
    </div>
    <h3>传统 RPA / 规则引擎</h3>
    <p>依赖固定规则与脚本，缺乏语义理解能力，无法应对复杂业务变化</p>
    <div class="cms-position-divider"></div>
    <div class="cms-position-limit">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
      <span>无法理解自然语言，规则维护成本高，场景适配性差</span>
    </div>
  </div>
  <div class="cms-position-card">
    <div class="cms-position-icon" style="background:linear-gradient(135deg,#0f766e,#0891b2);">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
    </div>
    <h3>开源框架（LangChain 等）</h3>
    <p>提供基础 LLM 调用能力，但缺乏企业级私有化与行业深度定制支持</p>
    <div class="cms-position-divider"></div>
    <div class="cms-position-limit">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
      <span>不支持私有化部署，商业定制能力弱，RAG 模型兼容性差</span>
    </div>
  </div>
  <div class="cms-position-card cms-position-highlight">
    <div class="cms-position-icon" style="background:linear-gradient(135deg,#1d4ed8,#7c3aed);">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
    </div>
    <h3>中软国际 Agent 平台</h3>
    <p>平台 + 专业服务双轮驱动，提供从模型到行业应用的全链路企业级解决方案</p>
    <div class="cms-position-divider"></div>
    <div class="cms-position-checks">
      <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> 公有云 / 私有化 / 混合云全栈部署</span>
      <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> 支持 DeepSeek 全版本模型接入</span>
      <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> 金融、制造、政务等行业深度定制</span>
      <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> 深度整合国内行业资源与生态伙伴</span>
    </div>
  </div>
</div>

---

## 系统架构总览

<div class="cms-arch-container">
  <div class="cms-arch-title">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    四层架构设计 — 应用层 / 编排层 / 平台层 / 模型层
  </div>

  <div class="arch-layer arch-layer-frontend">
    <div class="arch-layer-label">应用层</div>
    <div class="arch-layer-body">
      <div class="arch-frontend-groups">
        <div class="arch-group-box">
          <div class="arch-group-head arch-c-blue"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> 政府类通用智能体</div>
          <div class="arch-tag-grid">
            <span class="arch-tag">公文生成</span>
            <span class="arch-tag">智能摘要</span>
            <span class="arch-tag">公文改写</span>
            <span class="arch-tag">会议纪要</span>
            <span class="arch-tag">政策查询</span>
            <span class="arch-tag">讲话稿生成</span>
          </div>
        </div>
        <div class="arch-group-box">
          <div class="arch-group-head arch-c-blue"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> 企业类通用智能体</div>
          <div class="arch-tag-grid">
            <span class="arch-tag">营销助手</span>
            <span class="arch-tag">智能陪练</span>
            <span class="arch-tag">合同审查</span>
            <span class="arch-tag">客服机器人</span>
            <span class="arch-tag">营销问数</span>
            <span class="arch-tag">智能翻译</span>
          </div>
        </div>
        <div class="arch-external-col">
          <span class="arch-ext-item">汽车行业</span>
          <span class="arch-ext-item">医疗行业</span>
          <span class="arch-ext-item">政务行业</span>
        </div>
      </div>
    </div>
  </div>

  <div class="arch-connector">▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾</div>

  <div class="arch-layer arch-layer-bridge">
    <div class="arch-layer-label">编排层</div>
    <div class="arch-layer-body">
      <div class="arch-bridge-grid">
        <span class="arch-bridge-item"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> 应用编排</span>
        <span class="arch-bridge-item"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> 流程编排</span>
        <span class="arch-bridge-item"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg> 插件调用</span>
        <span class="arch-bridge-item"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg> 工作流可视化</span>
        <span class="arch-bridge-item"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg> 多模块协作</span>
        <span class="arch-bridge-item"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> 访问控制</span>
      </div>
    </div>
  </div>

  <div class="arch-connector">▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾</div>

  <div class="arch-layer arch-layer-app">
    <div class="arch-layer-label">平台层</div>
    <div class="arch-layer-body">
      <div class="arch-app-groups">
        <div class="arch-app-box">
          <div class="arch-app-head" style="color:#0891b2;border-color:#0891b2;">运营平台</div>
          <div class="arch-tag-grid">
            <span class="arch-tag">模型配置</span>
            <span class="arch-tag">知识库管理</span>
            <span class="arch-tag">RAG 检索</span>
          </div>
        </div>
        <div class="arch-app-box">
          <div class="arch-app-head" style="color:#0891b2;border-color:#0891b2;">监控运维</div>
          <div class="arch-tag-grid">
            <span class="arch-tag">业务流量监控</span>
            <span class="arch-tag">质量监控</span>
            <span class="arch-tag">应用报表</span>
          </div>
        </div>
        <div class="arch-app-box">
          <div class="arch-app-head" style="color:#0891b2;border-color:#0891b2;">多模态能力</div>
          <div class="arch-tag-grid">
            <span class="arch-tag">语音转文本</span>
            <span class="arch-tag">文本转语音</span>
            <span class="arch-tag">图文 OCR</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="arch-connector">▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾</div>

  <div class="arch-layer arch-layer-infra">
    <div class="arch-layer-label">模型层</div>
    <div class="arch-layer-body">
      <div class="arch-infra-groups">
        <div>
          <div class="arch-infra-head">DeepSeek 全版本</div>
          <div class="arch-tag-grid">
            <span class="arch-tag">DeepSeek-V3</span>
            <span class="arch-tag">DeepSeek-R1</span>
            <span class="arch-tag">DeepSeek-VL</span>
          </div>
        </div>
        <div>
          <div class="arch-infra-head">部署模式</div>
          <div class="arch-tag-grid">
            <span class="arch-tag">公有云</span>
            <span class="arch-tag">私有化</span>
            <span class="arch-tag">混合云</span>
          </div>
        </div>
        <div>
          <div class="arch-infra-head">基础能力</div>
          <div class="arch-tag-grid">
            <span class="arch-tag">向量数据库</span>
            <span class="arch-tag">语义切片</span>
            <span class="arch-tag">API 网关</span>
          </div>
        </div>
        <div>
          <div class="arch-infra-head">安全合规</div>
          <div class="arch-tag-grid">
            <span class="arch-tag">数据脱敏</span>
            <span class="arch-tag">权限管控</span>
            <span class="arch-tag">审计日志</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---

## 7 大子系统

<div class="cms-subsystem-grid" style="grid-template-columns:repeat(4,1fr);">
  <a href="#运营平台" class="cms-subsystem-card cms-sub-blue">
    <div class="cms-sub-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></div>
    <h4>运营平台</h4>
    <p>模型配置 · 知识库管理 · 应用编排工作台</p>
    <span class="cms-sub-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
  </a>
  <a href="#知识库智能体" class="cms-subsystem-card cms-sub-purple">
    <div class="cms-sub-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div>
    <h4>知识库智能体</h4>
    <p>RAG 智能问答 · 多场景知识管理</p>
    <span class="cms-sub-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
  </a>
  <a href="#办公助手" class="cms-subsystem-card cms-sub-cyan">
    <div class="cms-sub-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>
    <h4>办公助手</h4>
    <p>文案创作 · 公文写作 · 会议记录</p>
    <span class="cms-sub-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
  </a>
  <a href="#客服智能体" class="cms-subsystem-card cms-sub-amber">
    <div class="cms-sub-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
    <h4>客服智能体</h4>
    <p>Rui 系列 · 售前售后全流程智能化</p>
    <span class="cms-sub-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
  </a>
  <a href="#汽车行业智能体" class="cms-subsystem-card cms-sub-blue">
    <div class="cms-sub-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v5"/><circle cx="16" cy="17" r="2"/><circle cx="9" cy="17" r="2"/><path d="M14 3v4h4"/></svg></div>
    <h4>汽车行业智能体</h4>
    <p>故障诊断 · 座舱数据 · 测试设计</p>
    <span class="cms-sub-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
  </a>
  <a href="#医疗行业智能体" class="cms-subsystem-card cms-sub-purple">
    <div class="cms-sub-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
    <h4>医疗行业智能体</h4>
    <p>中医问答 · 智能报告 · 病理判断</p>
    <span class="cms-sub-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
  </a>
  <a href="#政务行业智能体" class="cms-subsystem-card cms-sub-cyan">
    <div class="cms-sub-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
    <h4>政务行业智能体</h4>
    <p>公文 · 政务服务 · 城市治理 · 舆情分析</p>
    <span class="cms-sub-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
  </a>
</div>

---

## 运营平台

<div class="cms-section-intro">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
  Agent 智能体开发平台核心底座，支持 DeepSeek 全版本模型接入与管理，提供可视化应用编排、知识库管理、多模态交互等基础能力。
</div>

<div class="cms-feature-grid">
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      </div>
      <span>DeepSeek 全版本模型接入</span>
    </div>
    <div class="cms-feature-body">
      平台支持 <strong>DeepSeek 全系列版本</strong>（V3、R1、VL）统一接入与管理，可灵活切换模型版本。同时兼容主流开源与商业大模型，满足不同场景的推理精度与成本诉求。
    </div>
  </div>
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      </div>
      <span>应用编排工作台</span>
    </div>
    <div class="cms-feature-body">
      内置<strong>可视化工作流编排引擎</strong>，支持应用编排、流程编排与插件调用三种模式。内置多种插件工具，可灵活自定义，适配企业个性化需求，实现复杂业务流程的自动化落地。
    </div>
  </div>
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
      </div>
      <span>知识库统一管理</span>
    </div>
    <div class="cms-feature-body">
      提供企业级<strong>知识库管理</strong>能力，支持多格式文档上传、智能语义切片、向量化存储与检索。结合 RAG 技术，确保大模型回答始终基于企业私有知识，大幅降低幻觉风险。
    </div>
  </div>
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#d97706,#f59e0b);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
      </div>
      <span>全栈灵活部署</span>
    </div>
    <div class="cms-feature-body">
      支持<strong>公有云、私有化、混合云</strong>三种部署模式，满足政务合规、金融安全等不同场景的数据隔离要求。提供完整的 DevOps 工具链与运维监控，保障平台稳定运行。
    </div>
  </div>
</div>

---

## 知识库智能体

<div class="cms-section-intro">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
  基于 RAG 的智能问答解决方案，面向各行各业快速构建私有知识库，实现企业知识的沉淀、共享与精准检索。
</div>

<div class="cms-feature-grid">
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </div>
      <span>RAG 智能问答总览</span>
    </div>
    <div class="cms-feature-body">
      基于向量化检索与大模型推理，<strong>精准理解用户意图</strong>，从私有文档中提取相关段落生成结构化答案，支持多轮对话追问，有效解决传统文件式搜索效率低的痛点。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/rag-overview.png" alt="RAG 知识库问答总览" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
      </div>
      <span>多行业场景覆盖</span>
    </div>
    <div class="cms-feature-body">
      内置<strong>营销、售后、数据分析、知识生成、挖掘审核</strong>五大场景模板，覆盖企业知识库、产品知识管理、销售知识库、培训考核库、客户关系知识库及项目文档管理等六类典型用例，开箱即用。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/rag-scenarios.png" alt="RAG 多场景应用" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
</div>

<div class="cms-feature-grid" style="margin-top:20px;">
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
      </div>
      <span>知识飞轮持续优化</span>
    </div>
    <div class="cms-feature-body">
      基于<strong>用户反馈自动升级知识库</strong>，结合范文模板库智能学习机制，知识质量随使用持续提升。支持互联网知识实时搜索与 API 对接动态知识库，确保内容时效性。
    </div>
  </div>
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#d97706,#f59e0b);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
      </div>
      <span>强大信息抽取能力</span>
    </div>
    <div class="cms-feature-body">
      集成<strong>图文 OCR 解析</strong>，支持 PDF、Word、图片等多格式文档自动解析入库。采用基于语义的知识切片策略，确保上下文完整性，显著提升检索召回率与答案准确性。
    </div>
  </div>
</div>

---

## 办公助手

<div class="cms-section-intro">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
  依托先进自然语言处理技术，在文案创作、招投标辅助、公文写作、会议记录等场景提供专业支持，知识获取效率提升 50%，知识创作效率提升 60%。
</div>

<div class="cms-feature-grid">
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
      </div>
      <span>办公助手功能全景</span>
    </div>
    <div class="cms-feature-body">
      覆盖<strong>文案创作、招投标辅助、会议记录、行政公文</strong>四大核心办公场景。结合行业知识与成功案例生成高质量内容，支持招投标文档编写与校对，精准记录会议要点，高效完成行政公文的撰写与优化。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/office-main.png" alt="办公助手功能界面" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      </div>
      <span>效能量化提升</span>
    </div>
    <div class="cms-feature-body">
      通过 AI 赋能，将传统<strong>文件式搜索</strong>升级为语义化智能检索，知识查找效率提升 50%；写作大模型配合知识推理流程编排，实现知识创作效率提升 60%。经验类知识实现结构化沉淀与团队共享。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/office-main.png" alt="办公效能提升对比" style="height:240px;object-fit:cover;object-position:center;" />
    </div>
  </div>
</div>

---

## 客服智能体

<div class="cms-section-intro">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  依托大模型技术对传统客服系统进行智能化改造，打造 Rui 系列服务，实现售前、售中、售后全流程智能化精细化管理，提升服务品质、降低运营成本。
</div>

<div class="cms-feature-grid">
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#d97706,#f59e0b);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      </div>
      <span>Rui 系列智能体矩阵</span>
    </div>
    <div class="cms-feature-body">
      <strong>Rui 顾问</strong>（售前）：需求解读、客户画像、产品推荐。<strong>Rui 师傅</strong>（售后）：产品使用指导、协助排障、工单派发。<strong>Rui 教练</strong>：实训课程生成、AI 话术对练、员工能力评估。<strong>Rui 算师</strong>：对话式指标查询、多样化展示与预测分析。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/cs-platform.png" alt="Rui 系列客服智能体" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      </div>
      <span>业务编排平台</span>
    </div>
    <div class="cms-feature-body">
      提供<strong>任务分解与动态规划、多模块协作与接口调用、流程建模与可视化</strong>能力，支持业务流量及质量监控、多模态交互与访问控制管理，为复杂客服场景提供灵活的自动化编排基础。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/cs-workflow.png" alt="业务编排工作台" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
</div>

<div class="cms-feature-grid" style="margin-top:20px;">
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
      </div>
      <span>智能客服整体架构</span>
    </div>
    <div class="cms-feature-body">
      构建<strong>智能客服中台</strong>，涵盖知识库管理层（知识存储、智能检索、数据分析）、话术编排层（话术知识库管理）、运营平台层（实时质检、会话统计、人工辅助抽检），三层协同驱动客服全面升级。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/cs-architecture.png" alt="智能客服整体架构" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      </div>
      <span>对话质量与运营监控</span>
    </div>
    <div class="cms-feature-body">
      <strong>Rui 博士</strong>负责文本内容生成、优化润色与校对；<strong>Rui 管家</strong>持续构建动态知识库，自动生成 FAQ 并智能抽取历史会话沉淀经验。实时质检服务与应用报表帮助运营团队精准把控服务质量。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/cs-operations.png" alt="客服运营监控" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
</div>

---

## 汽车行业智能体

<div class="cms-section-intro">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v5"/><circle cx="16" cy="17" r="2"/><circle cx="9" cy="17" r="2"/><path d="M14 3v4h4"/></svg>
  深入汽车研发测试与运维分析环节，涵盖座舱数据挖掘、故障诊断、测试设计等核心场景，赋能整车厂与供应商的智能化升级。
</div>

<div class="cms-feature-grid">
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
      </div>
      <span>故障诊断助手</span>
    </div>
    <div class="cms-feature-body">
      基于<strong>故障内容意图识别</strong>，将异常现象与标准化知识库进行语义映射，自动匹配历史维修案例，输出结构化故障解决方案。有效辅助工程师缩短诊断时间，降低人工经验依赖。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/auto-diagnosis.png" alt="汽车故障诊断助手" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
      </div>
      <span>座舱数据挖掘与报表生成</span>
    </div>
    <div class="cms-feature-body">
      基于<strong>图生文多模态模型</strong>理解座舱图片内容，自动输出文本描述。结合自动化数据挖掘与信息解释能力，生成数据报表与可视化图表，覆盖数据规整、查询、分析全流程。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/auto-data.png" alt="座舱数据挖掘" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
</div>

<div class="cms-feature-grid" style="margin-top:20px;">
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
      </div>
      <span>测试设计助手</span>
    </div>
    <div class="cms-feature-body">
      识别<strong>汽车行业格式文档</strong>中的功能需求定义，根据需求自动生成针对性测试用例和测试数据，覆盖法规标准、论文、专利等知识的问答支持，显著提升研发测试效率。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/auto-test.png" alt="测试设计助手" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#d97706,#f59e0b);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
      </div>
      <span>汽车智能体知识库平台</span>
    </div>
    <div class="cms-feature-body">
      整合<strong>过往维修案例、车联网数据、法律法规、发明专利、测试设计数据、舆情数据</strong>等多类型知识源，构建汽车行业专属知识库，为各类智能体应用提供精准、权威的知识支撑。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/auto-platform.png" alt="汽车智能体知识库平台" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
</div>

---

## 医疗行业智能体

<div class="cms-section-intro">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
  联合华为云深入挖掘医疗大数据价值，覆盖中医问答、健康管理、报告生成、病理判断等 10 大场景，推动 AI 在智慧医检服务领域的规模化落地。
</div>

<div class="cms-feature-grid">
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
      </div>
      <span>医疗 AI 应用总览</span>
    </div>
    <div class="cms-feature-body">
      覆盖<strong>10 大医疗场景</strong>：中医药知识问答、产品营销助手、健康养生助手、大健康报告解读、研发文档质检与分类、AI 医学翻译、历史检查摘要、重要患者筛选、智能报告生成与质控、病理符合度判断，构建全链路医疗智慧化能力。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/medical-main.png" alt="医疗 AI 应用总览" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
      </div>
      <span>智能报告生成与质控</span>
    </div>
    <div class="cms-feature-body">
      基于<strong>结构化报告模板</strong>与大模型推理，自动生成标准化医检报告，内置质控规则对报告内容进行一致性审核。显著缩短报告出具时间，降低人工核对工作量，提升医检服务效率与准确率。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/medical-scenario.png" alt="智能报告生成" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
</div>

<div class="cms-feature-grid" style="margin-top:20px;">
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
      </div>
      <span>病理符合度判断</span>
    </div>
    <div class="cms-feature-body">
      运用<strong>多模态 AI 模型</strong>对病理图像与临床数据进行关联分析，自动输出病理符合度评估结果，辅助医生提升诊断置信度，为后续治疗方案制定提供数据依据。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/medical-pathology.png" alt="病理符合度判断" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#d97706,#f59e0b);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
      </div>
      <span>大健康报告解读</span>
    </div>
    <div class="cms-feature-body">
      对体检报告、健康档案等<strong>非结构化医疗文档</strong>进行智能解读，提取关键健康指标，生成通俗易懂的健康建议摘要，支持患者自助查询与健康管理，有效降低医护人员重复沟通成本。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/medical-health.png" alt="大健康报告解读" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
</div>

<div class="cms-feature-grid" style="margin-top:20px;">
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#065f46,#10b981);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18"/></svg>
      </div>
      <span>中医药知识问答</span>
    </div>
    <div class="cms-feature-body">
      构建中医药专属知识库，涵盖<strong>草药、方剂、针灸、经络</strong>等核心知识体系，支持自然语言查询与多轮对话，为中医诊疗、健康科普、中药研发等场景提供专业知识支撑。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/medical-herb.png" alt="中医药知识问答" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      </div>
      <span>AI 医学翻译</span>
    </div>
    <div class="cms-feature-body">
      专为<strong>医学专业场景</strong>优化的 AI 翻译能力，准确处理医学术语、药品名称、检验指标等专业内容。支持中英文及多语种互译，服务于国际医学文献阅读、海外患者沟通及临床研究文档翻译。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/medical-translate.png" alt="AI 医学翻译" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
</div>

---

## 政务行业智能体

<div class="cms-section-intro">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  覆盖公文生成、政务服务、城市治理、经济运行、城市风险、文旅规划、舆情分析七大政务应用场景，助力政府数字化转型与智慧城市建设。
</div>

### 公文智能体

<div class="cms-feature-grid">
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
      </div>
      <span>辅助公文写作</span>
    </div>
    <div class="cms-feature-body">
      基于<strong>历史公文数据训练</strong>，模仿公文写作风格，支持用户通过输入主题与选择文种一键生成公文大纲并展开润色。覆盖领导讲话稿、决定、通知、简报、请示、函、纪要等 14 种公文格式。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/gov-doc-write.png" alt="辅助公文写作" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      </div>
      <span>智能公文分发</span>
    </div>
    <div class="cms-feature-body">
      对接政务办公平台 API，根据公文全文内容及相关单位职能，<strong>自动匹配责任主体</strong>并完成智能分发通知。支持全员/指定科室分级推送，打造更智能、更轻量的公文流转流程。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/gov-doc-main.png" alt="智能公文分发" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
</div>

### 政务服务智能体

<div class="cms-feature-grid">
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      </div>
      <span>政务百事通对话引导</span>
    </div>
    <div class="cms-feature-body">
      基于<strong>政策文本向量化</strong>与大模型意图理解，帮助窗口人员处理 85% 以上简单政策咨询场景。通过多轮对话收集用户情况，自动生成申请表格，将服务处理时间从 3 天缩短至 2 小时，问答准确率超 99%。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/gov-affairs-chat.jpeg" alt="政务百事通对话" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#d97706,#f59e0b);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </div>
      <span>智能调度与工单流转</span>
    </div>
    <div class="cms-feature-body">
      基于语义分析自动完成工单分类与派发，<strong>调度准确率达 90%，工单流转效率提升 40%</strong>。内置大规模政务服务场景知识图谱，实现高频服务事项的精准快速匹配，有效减少群众多次往返。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/gov-affairs-qa.png" alt="智能调度与工单流转" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
</div>

### 城市治理智能体

<div class="cms-feature-grid">
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
      </div>
      <span>城市治理综合能力</span>
    </div>
    <div class="cms-feature-body">
      利用 NLP 技术<strong>自动分析工单内容</strong>并精准分派，为执法部门提供政策法规与历史案例智能查询参考，并基于工单处理结果自动生成标准化报告，支持一键导出与数据分析，全面提升城市治理响应速度与决策科学性。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/urban-gov.png" alt="城市治理智能体" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      </div>
      <span>经济运行智能体</span>
    </div>
    <div class="cms-feature-body">
      整合各部门与系统的<strong>经济运行数据</strong>，通过 NLP 技术实现跨系统智能查询，快速提取各类指标数据。自动爬取、整理并分析数据，生成经济运行报告，实时更新确保报告时效性，多维度分析支撑政策决策。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/economic-ops.png" alt="经济运行智能体" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
</div>

### 城市风险智能体

<div class="cms-feature-grid">
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#991b1b,#ef4444);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      </div>
      <span>城市风险指挥系统</span>
    </div>
    <div class="cms-feature-body">
      实现<strong>实时人群视频识别准确率 93%</strong>，自然语言查询与屏幕控制提升指挥效率 50%。无须 App 即可入会，智能外呼提升终端接通率 30%。贵阳贵安新区管委会王书记称赞：「融合 AI 的城市风险指挥系统是全省首创」。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/urban-risk.png" alt="城市风险指挥系统" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#92400e,#d97706);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
      </div>
      <span>森林防火与入侵检测</span>
    </div>
    <div class="cms-feature-body">
      <strong>无人机 + CV 模型</strong>实现实时监测、精准定位火源，处理多火点场景；微信定位实现无人机与地面人员协同。DeepSeek-R1 快速提取关键信息，将救援预案起草时间从 30-60 分钟压缩至 1 分钟以内，<strong>效率提升超 300%</strong>。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/urban-fire.png" alt="森林防火与入侵检测" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
</div>

### 舆情分析智能体

<div class="cms-feature-grid">
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      </div>
      <span>舆情智能分析大屏</span>
    </div>
    <div class="cms-feature-body">
      构建大模型驱动的<strong>动态发现预警中心、事件趋势预测中心与智能分析研判中心</strong>，接入问数大模型、数据挖掘算法、数字人、TTS/ASR 技术，实现舆情热点第一时间感知、趋势预测与多维度主题分析，为研判决策提供有力支撑。
    </div>
    <div class="cms-screenshot-wrapper">
      <img src="/solutions/ai-agent/images/public-opinion.png" alt="舆情智能分析大屏" style="height:240px;object-fit:cover;object-position:top;" />
    </div>
  </div>
  <div class="cms-feature-card">
    <div class="cms-feature-header">
      <div class="cms-feature-hicon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      </div>
      <span>文旅规划智能体</span>
    </div>
    <div class="cms-feature-body">
      基于 <strong>DeepSeek 大模型</strong>通过对话采集出发地、目的地、偏好与预算，生成个性化智能行程规划。结合 AI 与大数据采集处理公开旅游攻略数据，构建景区知识库，快速回答景区查询，显著提升智慧文旅服务体验。
    </div>
  </div>
</div>

---

<div id="cms-lightbox" class="cms-lightbox" onclick="this.classList.remove('cms-lightbox-active')">
  <div class="cms-lightbox-close">&times;</div>
  <img id="cms-lightbox-img" src="" alt="" />
</div>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  const lightbox = document.getElementById('cms-lightbox')
  const lightboxImg = document.getElementById('cms-lightbox-img')
  if (!lightbox || !lightboxImg) return
  document.querySelectorAll('.cms-screenshot-wrapper img').forEach(img => {
    img.style.cursor = 'zoom-in'
    img.addEventListener('click', () => {
      lightboxImg.src = img.src
      lightboxImg.alt = img.alt
      lightbox.classList.add('cms-lightbox-active')
    })
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') lightbox.classList.remove('cms-lightbox-active')
  })
})
</script>
