<template>
<div class="ai-page">
<div class="ai-mesh-bg"></div>

<NavBar active="ai" />

<!-- HERO -->
<section class="ai-hero">
  <div class="ai-hero-bg"></div>
  <div class="ai-hero-particles">
    <span></span><span></span><span></span><span></span><span></span><span></span>
  </div>
  <div class="ai-hero-inner">
    <div class="ai-hero-badge">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
      AI BootCamp · Enterprise AI Transformation & Capability Enablement
    </div>
    <h1>AI <span class="hero-grad">Innovation Lab</span></h1>
    <p class="ai-hero-tagline">Breaking Through the <strong>95%</strong> Failure Rate in Enterprise AI Transformation</p>
    <p class="ai-hero-sub">Through the trinity of "Strategic Alignment · Scenario Innovation · Talent Enablement," we help enterprises build sustainable AI transformation capabilities — from executive consensus to frontline execution.</p>
    <div class="ai-hero-tags">
      <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>AI Innovation Lab</span>
      <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>AI Elite Enablement</span>
      <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>AI Transformation Consulting</span>
      <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>Healthcare · Finance · Gov · Manufacturing · Energy</span>
    </div>
  </div>
</section>

<!-- STATS -->
<div class="ai-stats-bar">
  <template v-for="(s, i) in heroStats" :key="s.label">
    <div class="ai-stat-div" v-if="i > 0"></div>
    <div class="ai-stat">
      <div class="ai-stat-val">{{ s.val }}<span>{{ s.unit }}</span></div>
      <div class="ai-stat-lab">{{ s.label }}</div>
    </div>
  </template>
</div>

<!-- BODY -->
<div class="ai-body">

  <!-- Three Core Pillars -->
  <div class="ai-section reveal">
    <div class="ai-section-eyebrow">Strategic Framework</div>
    <h2 class="ai-section-title">Three Core Pillars of Enterprise AI Transformation</h2>
    <p class="ai-section-sub">From strategy to talent to scenario execution — building a complete AI transformation capability system</p>
    <div class="ai-pillar-grid">
      <div v-for="(p, i) in pillars" :key="p.title" class="ai-pillar-card">
        <div class="ai-pillar-icon" :style="`background:${p.grad};`">
          <svg v-if="i === 0" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
          <svg v-else-if="i === 1" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <svg v-else width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
        </div>
        <h3>{{ p.title }}</h3>
        <p>{{ p.desc }}</p>
        <div class="ai-pillar-tags"><span v-for="t in p.tags" :key="t">{{ t }}</span></div>
      </div>
    </div>
  </div>

  <!-- AI Innovation Lab Details -->
  <div class="ai-section reveal" id="workshop">
    <div class="ai-section-eyebrow" style="color:#1d4ed8;">Core Product · Scenario Innovation</div>
    <h2 class="ai-section-title">AI Innovation Lab</h2>
    <p class="ai-section-sub">An intensive immersive bootcamp that leverages real business data for concentrated co-creation, rapid prototyping, and lightweight AI solution delivery</p>
    <div class="ai-service-banner">
      <img :src="'/ai/portal-service-1.png'" alt="AI Innovation Lab" />
    </div>

    <!-- Four Principles -->
    <div class="ai-principle-grid">
      <div class="ai-principle">
        <div class="ai-principle-num" style="color:#1d4ed8;">01</div>
        <div class="ai-principle-title">Business First</div>
        <div class="ai-principle-desc">Anchor to real business pain points and value requirements, ensuring every scenario produces measurable business outcomes</div>
      </div>
      <div class="ai-principle">
        <div class="ai-principle-num" style="color:#7c3aed;">02</div>
        <div class="ai-principle-title">Collaborative Co-creation</div>
        <div class="ai-principle-desc">Bridge business, product, and technology roles to break silos and achieve true cross-functional innovation</div>
      </div>
      <div class="ai-principle">
        <div class="ai-principle-num" style="color:#0891b2;">03</div>
        <div class="ai-principle-title">Rapid Validation</div>
        <div class="ai-principle-desc">Short-cycle, high-intensity sprints with lean MVP iteration to dramatically compress the time from idea to validation</div>
      </div>
      <div class="ai-principle">
        <div class="ai-principle-num" style="color:#d97706;">04</div>
        <div class="ai-principle-title">Outcome Delivery</div>
        <div class="ai-principle-desc">Deliver demonstrable, verifiable, and reusable AI prototypes and solutions as the foundation for scaled deployment</div>
      </div>
    </div>

    <!-- Three Application Scenarios -->
    <h3 class="ai-sub-title">Three Signature Application Scenarios</h3>
    <div class="ai-scene-grid">
      <div class="ai-scene-card ai-scene-blue">
        <div class="ai-scene-header">
          <div class="ai-scene-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          </div>
          <div>
            <div class="ai-scene-label">Scenario 1</div>
            <div class="ai-scene-name">Rapid Scenario Validation & MVP Development</div>
          </div>
        </div>
        <div class="ai-scene-body">
          <div class="ai-scene-period">⏱ 2–4 Weeks to Working Prototype</div>
          <p>Integrate real business data to deliver a full-cycle AI application prototype — from pain point analysis to interactive demo — within a short timeframe, along with a value validation report.</p>
          <div class="ai-scene-result">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            BOM selection assistant prototype achieved 35% accuracy improvement over traditional manual methods
          </div>
        </div>
        <div class="ai-scene-img-wrap">
          <img :src="'/ai/workshop-scenario-1.png'" alt="Rapid Scenario Validation & MVP Development" />
        </div>
      </div>
      <div class="ai-scene-card ai-scene-purple">
        <div class="ai-scene-header">
          <div class="ai-scene-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
          </div>
          <div>
            <div class="ai-scene-label" style="color:#7c3aed;">Scenario 2</div>
            <div class="ai-scene-name">AI Transformation Blueprint Planning</div>
          </div>
        </div>
        <div class="ai-scene-body">
          <div class="ai-scene-period" style="background:rgba(124,58,237,0.08);color:#7c3aed;">📋 Strategic Blueprint · 3-Year Roadmap</div>
          <p>Complete scenario value assessment and deployment difficulty scoring, then output a three-year AI application roadmap that converts high-level strategy into actionable plans.</p>
          <div class="ai-scene-result" style="color:#7c3aed;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            Full delivery: value assessment + difficulty scoring + 3-year build roadmap
          </div>
        </div>
        <div class="ai-scene-img-wrap">
          <img :src="'/ai/workshop-scenario-2.png'" alt="AI Transformation Blueprint Planning" />
        </div>
      </div>
      <div class="ai-scene-card ai-scene-cyan">
        <div class="ai-scene-header">
          <div class="ai-scene-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <div>
            <div class="ai-scene-label" style="color:#0891b2;">Scenario 3</div>
            <div class="ai-scene-name">AI Innovation Challenge</div>
          </div>
        </div>
        <div class="ai-scene-body">
          <div class="ai-scene-period" style="background:rgba(8,145,178,0.08);color:#0891b2;">🏆 Activate Innovation · Surface High-Value Scenarios</div>
          <p>Ignite innovation enthusiasm across enterprises and departments through a competitive mechanism to crowdsource AI use cases and precisely identify high-value deployment scenarios.</p>
          <div class="ai-scene-result" style="color:#0891b2;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            30 high-value scenarios shortlisted from hundreds of submissions
          </div>
        </div>
        <div class="ai-scene-img-wrap">
          <img :src="'/ai/workshop-scenario-3.png'" alt="AI Innovation Challenge" />
        </div>
      </div>
    </div>

    <!-- Technology Platforms -->
    <h3 class="ai-sub-title">Four Core Technology Platforms</h3>
    <div class="ai-platform-grid">
      <div v-for="(pl, i) in platforms" :key="pl.name" class="ai-platform-card">
        <div class="ai-platform-icon" :style="`background:${pl.grad};`">
          <svg v-if="i === 0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          <svg v-else-if="i === 1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41"/><path d="M20 12h-2.83"/><path d="M17.66 17.66l-1.41-1.41"/><path d="M12 20v-2.83"/><path d="M6.34 17.66l1.41-1.41"/><path d="M4 12h2.83"/><path d="M6.34 6.34l1.41 1.41"/></svg>
          <svg v-else-if="i === 2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>
        </div>
        <div class="ai-platform-name">{{ pl.name }}</div>
        <div class="ai-platform-desc">{{ pl.desc }}</div>
      </div>
    </div>

    <!-- Case Results -->
    <h3 class="ai-sub-title">Innovation Delivery Outcomes</h3>
    <div class="ai-result-grid">
      <div class="ai-result-card" style="--rc:#1d4ed8;--rc-rgb:29,78,216;">
        <div class="ai-result-img-wrap">
          <img :src="'/ai/workshop-outcome-police1.png'" alt="Smart Police Dispatch Assistant" />
        </div>
        <div class="ai-result-industry">Government</div>
        <div class="ai-result-title">Smart Police Dispatch Assistant</div>
        <div class="ai-result-pain">
          <span class="ai-pain-label">Pain Point</span>
          Low dispatch efficiency, reliance on manual judgment at every stage, inability to guarantee response timeliness
        </div>
        <div class="ai-result-metrics">
          <div class="ai-result-metric">
            <div class="ai-result-mval" style="color:#1d4ed8;">30 sec</div>
            <div class="ai-result-mlab">Dispatch time<br>(was 5 min)</div>
          </div>
          <div class="ai-result-metric">
            <div class="ai-result-mval" style="color:#1d4ed8;">95%+</div>
            <div class="ai-result-mlab">Assessment<br>accuracy</div>
          </div>
        </div>
      </div>
      <div class="ai-result-card" style="--rc:#d97706;--rc-rgb:217,119,6;">
        <div class="ai-result-img-wrap">
          <img :src="'/ai/workshop-outcome-powertrade1.png'" alt="Power Trading Strategy Assistant" />
        </div>
        <div class="ai-result-industry">Energy</div>
        <div class="ai-result-title">Power Trading Strategy Assistant</div>
        <div class="ai-result-pain">
          <span class="ai-pain-label">Pain Point</span>
          Fragmented trading data sources, delayed manual analysis, inability to support real-time decision-making
        </div>
        <div class="ai-result-metrics">
          <div class="ai-result-metric">
            <div class="ai-result-mval" style="color:#d97706;">&lt;1 min</div>
            <div class="ai-result-mlab">Data to<br>Decision</div>
          </div>
          <div class="ai-result-metric">
            <div class="ai-result-mval" style="color:#d97706;">24h</div>
            <div class="ai-result-mlab">Automated<br>Monitoring</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- AI Elite Enablement -->
  <div class="ai-section reveal" id="enablement">
    <div class="ai-section-eyebrow" style="color:#7c3aed;">Core Product · Talent Enablement</div>
    <h2 class="ai-section-title">AI Elite Enablement</h2>
    <p class="ai-section-sub">Through systematic curriculum and hands-on practice, we develop composite AI talent teams fit for the AI era, strengthening the organizational backbone of enterprise AI transformation</p>
    <div class="ai-service-banner">
      <img :src="'/ai/portal-service-2.png'" alt="AI Elite Enablement" />
    </div>

    <!-- 7-2-1 Rule -->
    <div class="ai-law-card">
      <div class="ai-law-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="1.8"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
      </div>
      <div>
        <div class="ai-law-title">7-2-1 Practice-Driven Rule</div>
        <div class="ai-law-desc"><strong>70% Hands-on</strong> · <strong>20% Reflection</strong> · <strong>10% Instruction</strong> — Dual-track parallel learning, teams of 5–6, Hackathon sprints on real challenges, ensuring skills that stick</div>
      </div>
    </div>

    <!-- Three Talent Profiles -->
    <h3 class="ai-sub-title">Three Talent Profiles</h3>
    <div class="ai-persona-grid">
      <div class="ai-persona-card">
        <div class="ai-persona-img-wrap">
          <img :src="'/ai/enablement-persona-1.png'" alt="M-shaped Manager Profile" />
        </div>
        <div class="ai-persona-icon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <div class="ai-persona-type">M-shaped Manager</div>
        <div class="ai-persona-desc">Broad systemic thinking and cross-disciplinary knowledge, proficient in AI tools, high EQ — capable of driving organization-wide AI transformation</div>
        <div class="ai-persona-tags"><span>Systems Thinking</span><span>AI Tool Proficiency</span><span>Cross-disciplinary</span></div>
      </div>
      <div class="ai-persona-card">
        <div class="ai-persona-img-wrap">
          <img :src="'/ai/enablement-persona-2.png'" alt="T-shaped Domain Expert Profile" />
        </div>
        <div class="ai-persona-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
        </div>
        <div class="ai-persona-type">T-shaped Domain Expert</div>
        <div class="ai-persona-desc">Strong cognitive mindset, skilled in AI-assisted productivity, deeply specialized in a single domain — a benchmark for AI enablement in their business line</div>
        <div class="ai-persona-tags"><span>Deep Specialization</span><span>AI-assisted Work</span><span>Domain Mastery</span></div>
      </div>
      <div class="ai-persona-card">
        <div class="ai-persona-img-wrap">
          <img :src="'/ai/enablement-persona-3.png'" alt="AI-Enabled Frontline Employee Profile" />
        </div>
        <div class="ai-persona-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div class="ai-persona-type">AI-Enabled Frontline Employee</div>
        <div class="ai-persona-desc">Strong empathy and communication skills, solid foundational job competencies, leverages AI tools to improve day-to-day work efficiency</div>
        <div class="ai-persona-tags"><span>Job Efficiency</span><span>AI Tool Usage</span><span>Quick Onboarding</span></div>
      </div>
    </div>

    <!-- Five-Stage Practice System -->
    <h3 class="ai-sub-title">Five-Stage Practice Forging System</h3>
    <div class="ai-stages">
      <template v-for="(st, i) in stages" :key="st.num">
        <div class="ai-stage-arrow" v-if="i > 0">›</div>
        <div class="ai-stage">
          <div class="ai-stage-num" :style="`background:${st.grad};`">{{ st.num }}</div>
          <div class="ai-stage-content">
            <div class="ai-stage-title">{{ st.title }}</div>
            <div class="ai-stage-desc">{{ st.desc }}</div>
          </div>
        </div>
      </template>
    </div>

    <!-- Stage Images -->
    <div class="ai-timeline-imgs">
      <img :src="'/ai/enablement-timeline-1.png'" alt="Cognitive Awakening" />
      <img :src="'/ai/enablement-timeline-2.png'" alt="Scenario Design" />
      <img :src="'/ai/enablement-timeline-3.png'" alt="Skill Building" />
      <img :src="'/ai/enablement-timeline-4.png'" alt="Industry Immersion" />
      <img :src="'/ai/enablement-timeline-5.png'" alt="Hands-on Practice" />
    </div>

    <!-- 4-Day Course Modules -->
    <h3 class="ai-sub-title">Four Course Modules</h3>
    <div class="ai-course-grid">
      <div v-for="c in courses" :key="c.day" class="ai-course-card" :style="`--cc:${c.color};`">
        <div class="ai-course-day">{{ c.day }}</div>
        <div class="ai-course-title">{{ c.title }}</div>
        <div class="ai-course-desc">{{ c.desc }}</div>
      </div>
    </div>
  </div>

  <!-- AI Transformation Pre-engagement Consulting -->
  <div class="ai-section reveal" id="consulting">
    <div class="ai-section-eyebrow" style="color:#059669;">Core Product · Strategic Consulting</div>
    <h2 class="ai-section-title">AI Transformation Pre-engagement Consulting</h2>
    <p class="ai-section-sub">Top-level strategic alignment, AI blueprint planning, and organizational process transformation — providing comprehensive strategic support for enterprise AI initiatives</p>
    <div class="ai-consult-grid">
      <div class="ai-consult-card">
        <div class="ai-consult-step">Strategy</div>
        <div class="ai-consult-illus"><img :src="'/ai/portal-consult-1.png'" alt="Strategic Alignment" /></div>
        <div class="ai-consult-icon" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
        </div>
        <h4>Strategic Alignment</h4>
        <p>Establish the cognitive foundation for AI transformation, ensuring executives and frontline staff share a unified strategic vision</p>
      </div>
      <div class="ai-consult-card">
        <div class="ai-consult-step">Blueprint</div>
        <div class="ai-consult-illus"><img :src="'/ai/portal-consult-2.png'" alt="Scenario Planning" /></div>
        <div class="ai-consult-icon" style="background:linear-gradient(135deg,#7c3aed,#a78bfa);">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
        </div>
        <h4>Scenario Planning</h4>
        <p>Precisely align transformation goals with business development, producing an executable AI scenario blueprint and prioritization matrix</p>
      </div>
      <div class="ai-consult-card">
        <div class="ai-consult-step">Enablement</div>
        <div class="ai-consult-illus"><img :src="'/ai/portal-consult-3.png'" alt="Capability Building" /></div>
        <div class="ai-consult-icon" style="background:linear-gradient(135deg,#0891b2,#06b6d4);">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <h4>Capability Building</h4>
        <p>Enable effective top-down strategy permeation, build a talent capability system, and ensure transformation initiatives are truly executed</p>
      </div>
      <div class="ai-consult-card">
        <div class="ai-consult-step">Delivery</div>
        <div class="ai-consult-illus"><img :src="'/ai/portal-consult-4.png'" alt="Value Delivery" /></div>
        <div class="ai-consult-icon" style="background:linear-gradient(135deg,#059669,#10b981);">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h4>Value Delivery</h4>
        <p>Establish a long-term operating mechanism for the full AI transformation cycle, continuously tracking outcomes to ensure AI investments generate measurable business value</p>
      </div>
    </div>
  </div>

  <!-- Client Cases -->
  <div class="ai-section reveal">
    <div class="ai-section-eyebrow">Proven in Practice</div>
    <h2 class="ai-section-title">Flagship Client Outcomes</h2>
    <p class="ai-section-sub">Spanning Healthcare, Finance, Government, Manufacturing, and Energy — continuously validating AI transformation enablement value</p>
    <div class="ai-case-grid">
      <div v-for="cc in clientCases" :key="cc.name" class="ai-case-card" :style="`--acc:${cc.color};`">
        <div class="ai-case-industry">{{ cc.industry }}</div>
        <div class="ai-case-name">{{ cc.name }}</div>
        <div class="ai-case-result">{{ cc.result }}</div>
      </div>
    </div>
  </div>

  <!-- CTA -->
  <div class="ai-cta-block reveal">
    <div class="ai-cta-inner">
      <div class="ai-cta-left">
        <div class="ai-cta-title">Start Your AI Transformation Journey Today</div>
        <div class="ai-cta-sub">Contact us to design a tailored AI enablement solution</div>
      </div>
      <div class="ai-cta-btns">
        <a href="https://aibc.jointforce.com/portal/" target="_blank" class="ai-btn-primary">Visit Official Website</a>
        <a href="mailto:aibootcamp@chinasofti.com" class="ai-btn-ghost">Book a Consultation</a>
      </div>
    </div>
  </div>

</div>

<!-- FOOTER -->
<footer class="au-footer">
  <div class="footer-l">ChinaSoft International · <span>Capability Hub</span></div>
  <div class="footer-r">© 2025 ChinaSofti Technology Service Co., Ltd.</div>
</footer>

</div>
</template>

<script setup>
import { onMounted } from 'vue'
import NavBar from './NavBar.vue'
import { heroStats, pillars, platforms, stages, courses, clientCases } from './data/ai.en.js'
onMounted(() => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) } })
  }, { threshold: 0.05 })
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
})
</script>

<style scoped>
/* ===== PAGE ===== */
.ai-page {
  font-family: 'PingFang SC','Microsoft YaHei','Segoe UI',sans-serif;
  background: #f0f4ff; color: #0f172a;
  overflow-x: hidden; min-height: 100vh; position: relative;
}
.ai-mesh-bg {
  position: fixed; inset: 0; pointer-events: none; z-index: 0;
  background:
    radial-gradient(ellipse 80% 60% at 20% -10%, rgba(29,78,216,0.07) 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 80% 110%, rgba(124,58,237,0.06) 0%, transparent 60%);
}

/* ===== NAV ===== */
.au-nav {
  position: sticky; top: 0; z-index: 300;
  display: flex; justify-content: space-between; align-items: center;
  padding: 0 72px; height: 68px;
  background: rgba(255,255,255,0.92); backdrop-filter: blur(28px) saturate(180%);
  -webkit-backdrop-filter: blur(28px) saturate(180%);
  border-bottom: 1px solid rgba(0,0,0,0.08);
}
.nav-logo { display: flex; align-items: center; gap: 12px; font-weight: 800; font-size: 1.05rem; color: #0f172a; }
.logo-chip { background: linear-gradient(135deg,#1d4ed8,#7c3aed); color:#fff; padding:5px 11px; border-radius:8px; font-size:0.68rem; font-weight:900; letter-spacing:0.08em; }
.nav-links { display: flex; gap: 28px; }
.nav-links a { font-size: 0.9rem; font-weight: 600; color: rgba(15,23,42,0.55); text-decoration: none; transition: color .2s; }
.nav-links a:hover, .nav-links a.active { color: #1d4ed8; }
.nav-cta { background: linear-gradient(135deg,#1d4ed8,#7c3aed); color:#fff; border:none; border-radius:10px; padding:9px 22px; font-size:0.85rem; font-weight:700; cursor:pointer; }
.nav-hamburger { display:none; flex-direction:column; justify-content:center; gap:5px; background:none; border:none; cursor:pointer; padding:8px; }
.nav-hamburger span { display:block; width:22px; height:2px; background:rgba(15,23,42,0.55); border-radius:2px; transition:all .25s; }
.nav-hamburger.open span:nth-child(1) { transform:rotate(45deg) translate(5px,5px); }
.nav-hamburger.open span:nth-child(2) { opacity:0; }
.nav-hamburger.open span:nth-child(3) { transform:rotate(-45deg) translate(5px,-5px); }
.nav-drawer { display:none; position:fixed; top:68px; left:0; right:0; z-index:299; background:rgba(255,255,255,0.97); backdrop-filter:blur(32px); flex-direction:column; padding:8px 0; border-bottom:1px solid rgba(0,0,0,0.08); }
.nav-drawer.open { display:flex; }
.nav-drawer a { padding:14px 24px; font-size:1rem; font-weight:600; color:rgba(15,23,42,0.65); text-decoration:none; border-bottom:1px solid rgba(0,0,0,0.06); }
.nav-drawer a:hover { color:#1d4ed8; background:rgba(29,78,216,0.05); }
.nav-drawer-lang { color:#1d4ed8 !important; }

/* ===== HERO ===== */
.ai-hero {
  position: relative; z-index: 1;
  background: linear-gradient(140deg,#08091a 0%,#0f0c2e 35%,#1a1060 60%,#0c2d6e 82%,#063a5a 100%);
  min-height: 520px; display: flex; align-items: center;
  padding: 120px 72px 80px; overflow: hidden;
}
.ai-hero-bg {
  position: absolute; inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231d4ed8' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.ai-hero-particles { position:absolute; inset:0; pointer-events:none; }
.ai-hero-particles span { position:absolute; border-radius:50%; animation:aiFloat 8s ease-in-out infinite; }
.ai-hero-particles span:nth-child(1){width:180px;height:180px;top:-40px;right:-30px;background:rgba(99,102,241,0.25);}
.ai-hero-particles span:nth-child(2){width:120px;height:120px;bottom:20px;right:20%;animation-delay:2s;background:rgba(56,189,248,0.15);}
.ai-hero-particles span:nth-child(3){width:80px;height:80px;top:30%;left:60%;animation-delay:4s;background:rgba(167,139,250,0.2);}
.ai-hero-particles span:nth-child(4){width:200px;height:200px;bottom:-60px;left:-40px;animation-delay:1s;background:rgba(29,78,216,0.2);}
.ai-hero-particles span:nth-child(5){width:60px;height:60px;top:20%;right:30%;animation-delay:3s;background:rgba(6,182,212,0.25);}
.ai-hero-particles span:nth-child(6){width:100px;height:100px;top:60%;left:35%;animation-delay:5s;background:rgba(124,58,237,0.18);}
@keyframes aiFloat { 0%,100%{transform:translateY(0) scale(1);opacity:0.6;} 50%{transform:translateY(-20px) scale(1.08);opacity:1;} }
.ai-hero-inner { position:relative; z-index:2; max-width:700px; }
.ai-hero-badge {
  display:inline-flex; align-items:center; gap:9px;
  background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.16);
  border-radius:999px; padding:8px 20px; margin-bottom:24px;
  font-size:0.72rem; font-weight:700; letter-spacing:0.12em; color:rgba(255,255,255,0.75); text-transform:uppercase;
  backdrop-filter:blur(16px);
}
.ai-hero-badge svg { color:rgba(56,189,248,0.9); }
.ai-hero-inner h1 { font-size:clamp(2.4rem,5vw,4rem); font-weight:900; line-height:1.08; letter-spacing:-0.03em; color:#fff; margin:0 0 16px; }
.hero-grad { background:linear-gradient(90deg,#818cf8,#67e8f9,#a78bfa,#38bdf8); background-size:300%; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; animation:heroGrad 6s linear infinite; }
@keyframes heroGrad { 0%{background-position:0%} 100%{background-position:300%} }
.ai-hero-tagline { font-size:1.1rem; font-weight:700; color:rgba(255,255,255,0.85); margin:0 0 12px; }
.ai-hero-tagline strong { color:#38bdf8; }
.ai-hero-sub { font-size:0.95rem; color:rgba(255,255,255,0.55); line-height:1.8; max-width:580px; margin:0 0 28px; }
.ai-hero-tags { display:flex; flex-wrap:wrap; gap:10px; }
.ai-hero-tags span { display:inline-flex; align-items:center; gap:7px; background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.13); border-radius:10px; padding:8px 16px; font-size:0.82rem; color:rgba(255,255,255,0.85); backdrop-filter:blur(8px); }

/* ===== STATS BAR ===== */
.ai-stats-bar {
  position: relative; z-index: 1;
  background: white; border-bottom: 1px solid rgba(29,78,216,0.08);
  display: flex; justify-content: center; align-items: center; gap: 0;
  padding: 0 72px;
}
.ai-stat { flex: 1; text-align: center; padding: 28px 20px; }
.ai-stat-val { font-size: 2rem; font-weight: 900; color: #1d4ed8; letter-spacing: -0.04em; line-height: 1; margin-bottom: 6px; }
.ai-stat-val span { font-size: 1.2rem; }
.ai-stat-lab { font-size: 0.8rem; color: #64748b; font-weight: 600; }
.ai-stat-div { width: 1px; height: 48px; background: rgba(29,78,216,0.10); flex-shrink: 0; }

/* ===== BODY ===== */
.ai-body { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 0 72px 80px; }

/* ===== SECTION ===== */
.ai-section { padding-top: 64px; }
.ai-section-eyebrow { font-size: 0.72rem; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase; color: #1d4ed8; margin-bottom: 10px; }
.ai-section-title { font-size: 1.85rem; font-weight: 900; color: #0f172a; margin: 0 0 10px; }
.ai-section-sub { font-size: 0.95rem; color: #64748b; line-height: 1.7; margin: 0 0 36px; max-width: 680px; }
.ai-sub-title { font-size: 1.1rem; font-weight: 800; color: #1e293b; margin: 40px 0 18px; padding-left: 12px; border-left: 3px solid #1d4ed8; }

/* ===== REVEAL ===== */
.reveal { opacity:0; transform:translateY(30px); transition:opacity .7s ease,transform .7s ease; }
.reveal.in { opacity:1; transform:none; }

/* ===== PILLARS ===== */
.ai-pillar-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
.ai-pillar-card {
  background: white; border-radius: 18px; padding: 32px 26px;
  border: 1px solid rgba(29,78,216,0.08);
  box-shadow: 0 4px 24px rgba(29,78,216,0.07);
  transition: all .3s;
}
.ai-pillar-card:hover { transform: translateY(-5px); box-shadow: 0 16px 48px rgba(29,78,216,0.13); }
.ai-pillar-icon { width:56px; height:56px; border-radius:16px; display:flex; align-items:center; justify-content:center; margin-bottom:18px; box-shadow:0 6px 18px rgba(0,0,0,0.15); }
.ai-pillar-card h3 { font-size:1.1rem; font-weight:800; color:#1e293b; margin:0 0 10px; }
.ai-pillar-card p { font-size:0.88rem; color:#64748b; line-height:1.7; margin:0 0 16px; }
.ai-pillar-tags { display:flex; flex-wrap:wrap; gap:6px; }
.ai-pillar-tags span { font-size:0.72rem; font-weight:600; padding:4px 11px; border-radius:999px; background:rgba(29,78,216,0.07); color:#1d4ed8; border:1px solid rgba(29,78,216,0.15); }

/* ===== PRINCIPLES ===== */
.ai-principle-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; margin-bottom:12px; }
.ai-principle { background:white; border-radius:16px; padding:26px 22px; border:1px solid rgba(29,78,216,0.08); box-shadow:0 4px 20px rgba(29,78,216,0.06); transition:all .3s; }
.ai-principle:hover { transform:translateY(-4px); box-shadow:0 12px 36px rgba(29,78,216,0.12); }
.ai-principle-num { font-size:2rem; font-weight:900; letter-spacing:-0.05em; margin-bottom:10px; line-height:1; }
.ai-principle-title { font-size:1rem; font-weight:800; color:#1e293b; margin-bottom:8px; }
.ai-principle-desc { font-size:0.84rem; color:#64748b; line-height:1.65; }

/* ===== SCENES ===== */
.ai-scene-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
.ai-scene-card { background:white; border-radius:18px; overflow:hidden; border:1px solid rgba(29,78,216,0.08); box-shadow:0 4px 24px rgba(29,78,216,0.07); transition:all .3s; }
.ai-scene-card:hover { transform:translateY(-5px); box-shadow:0 16px 48px rgba(29,78,216,0.14); }
.ai-scene-header { display:flex; align-items:flex-start; gap:14px; padding:22px 22px 16px; border-bottom:1px solid rgba(0,0,0,0.06); }
.ai-scene-icon { width:44px; height:44px; border-radius:12px; flex-shrink:0; display:flex; align-items:center; justify-content:center; background:linear-gradient(135deg,#1d4ed8,#3b82f6); }
.ai-scene-label { font-size:0.68rem; font-weight:700; color:#1d4ed8; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:3px; }
.ai-scene-name { font-size:0.96rem; font-weight:800; color:#1e293b; }
.ai-scene-body { padding:18px 22px 22px; }
.ai-scene-period { display:inline-block; font-size:0.76rem; font-weight:700; padding:4px 12px; border-radius:999px; background:rgba(29,78,216,0.08); color:#1d4ed8; margin-bottom:12px; }
.ai-scene-body p { font-size:0.87rem; color:#64748b; line-height:1.7; margin:0 0 14px; }
.ai-scene-result { display:flex; align-items:flex-start; gap:7px; font-size:0.82rem; font-weight:600; color:#1d4ed8; line-height:1.5; }
.ai-scene-result svg { flex-shrink:0; margin-top:2px; }

/* ===== PLATFORMS ===== */
.ai-platform-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
.ai-platform-card { background:white; border-radius:16px; padding:24px 20px; border:1px solid rgba(29,78,216,0.08); box-shadow:0 4px 20px rgba(29,78,216,0.06); transition:all .3s; }
.ai-platform-card:hover { transform:translateY(-4px); box-shadow:0 12px 36px rgba(29,78,216,0.12); }
.ai-platform-icon { width:48px; height:48px; border-radius:13px; display:flex; align-items:center; justify-content:center; margin-bottom:14px; box-shadow:0 4px 14px rgba(0,0,0,0.14); }
.ai-platform-name { font-size:0.96rem; font-weight:800; color:#1e293b; margin-bottom:8px; }
.ai-platform-desc { font-size:0.82rem; color:#64748b; line-height:1.6; }

/* ===== RESULTS ===== */
.ai-result-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:18px; }
.ai-result-card { background:white; border-radius:18px; padding:28px 26px; border:1px solid rgba(29,78,216,0.08); border-left:4px solid var(--rc); box-shadow:0 4px 24px rgba(var(--rc-rgb),0.08); transition:all .3s; }
.ai-result-card:hover { transform:translateY(-4px); box-shadow:0 16px 48px rgba(var(--rc-rgb),0.15); }
.ai-result-industry { font-size:0.72rem; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:var(--rc); margin-bottom:8px; }
.ai-result-title { font-size:1.15rem; font-weight:900; color:#1e293b; margin-bottom:14px; }
.ai-result-pain { font-size:0.86rem; color:#64748b; line-height:1.6; margin-bottom:18px; display:flex; gap:8px; align-items:flex-start; }
.ai-pain-label { flex-shrink:0; font-size:0.68rem; font-weight:700; background:rgba(239,68,68,0.08); color:#dc2626; border:1px solid rgba(239,68,68,0.2); border-radius:4px; padding:2px 7px; margin-top:2px; }
.ai-result-metrics { display:flex; gap:0; border:1px solid rgba(0,0,0,0.07); border-radius:12px; overflow:hidden; }
.ai-result-metric { flex:1; padding:14px 16px; text-align:center; border-right:1px solid rgba(0,0,0,0.07); }
.ai-result-metric:last-child { border-right:none; }
.ai-result-mval { font-size:1.5rem; font-weight:900; letter-spacing:-0.03em; line-height:1.1; margin-bottom:4px; }
.ai-result-mlab { font-size:0.68rem; color:#94a3b8; line-height:1.4; font-weight:600; }

/* ===== LAW CARD ===== */
.ai-law-card { background:linear-gradient(135deg,rgba(124,58,237,0.06),rgba(79,70,229,0.04)); border:1px solid rgba(124,58,237,0.15); border-radius:18px; padding:28px 32px; display:flex; align-items:flex-start; gap:22px; margin-bottom:12px; }
.ai-law-icon { flex-shrink:0; width:56px; height:56px; border-radius:14px; background:rgba(124,58,237,0.08); border:1px solid rgba(124,58,237,0.15); display:flex; align-items:center; justify-content:center; }
.ai-law-title { font-size:1.1rem; font-weight:900; color:#1e293b; margin-bottom:8px; }
.ai-law-desc { font-size:0.9rem; color:#475569; line-height:1.7; }
.ai-law-desc strong { color:#7c3aed; }

/* ===== PERSONA ===== */
.ai-persona-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
.ai-persona-card { background:white; border-radius:18px; padding:28px 24px; border:1px solid rgba(29,78,216,0.08); box-shadow:0 4px 24px rgba(29,78,216,0.07); transition:all .3s; }
.ai-persona-card:hover { transform:translateY(-5px); box-shadow:0 16px 48px rgba(29,78,216,0.13); }
.ai-persona-icon { width:52px; height:52px; border-radius:14px; display:flex; align-items:center; justify-content:center; margin-bottom:16px; box-shadow:0 4px 14px rgba(0,0,0,0.14); }
.ai-persona-type { font-size:1.05rem; font-weight:800; color:#1e293b; margin-bottom:10px; }
.ai-persona-desc { font-size:0.87rem; color:#64748b; line-height:1.7; margin-bottom:16px; }
.ai-persona-tags { display:flex; flex-wrap:wrap; gap:6px; }
.ai-persona-tags span { font-size:0.72rem; font-weight:600; padding:4px 10px; border-radius:999px; background:rgba(29,78,216,0.07); color:#1d4ed8; border:1px solid rgba(29,78,216,0.14); }

/* ===== STAGES ===== */
.ai-stages { display:flex; align-items:center; gap:0; background:white; border-radius:18px; padding:28px 24px; border:1px solid rgba(29,78,216,0.08); box-shadow:0 4px 24px rgba(29,78,216,0.07); flex-wrap:wrap; gap:8px; }
.ai-stage { display:flex; align-items:flex-start; gap:14px; flex:1; min-width:140px; }
.ai-stage-num { width:36px; height:36px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:0.75rem; font-weight:900; color:white; flex-shrink:0; box-shadow:0 4px 12px rgba(0,0,0,0.2); }
.ai-stage-title { font-size:0.92rem; font-weight:800; color:#1e293b; margin-bottom:5px; }
.ai-stage-desc { font-size:0.78rem; color:#64748b; line-height:1.55; }
.ai-stage-arrow { font-size:1.5rem; color:#cbd5e1; flex-shrink:0; padding:0 4px; }

/* ===== COURSE ===== */
.ai-course-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
.ai-course-card { background:white; border-radius:16px; padding:24px 20px; border:1px solid rgba(29,78,216,0.08); border-top:4px solid var(--cc); box-shadow:0 4px 20px rgba(29,78,216,0.06); transition:all .3s; }
.ai-course-card:hover { transform:translateY(-4px); box-shadow:0 12px 36px rgba(29,78,216,0.12); }
.ai-course-day { font-size:0.72rem; font-weight:800; color:var(--cc); letter-spacing:0.1em; text-transform:uppercase; margin-bottom:10px; }
.ai-course-title { font-size:0.96rem; font-weight:800; color:#1e293b; margin-bottom:10px; }
.ai-course-desc { font-size:0.82rem; color:#64748b; line-height:1.65; }

/* ===== CONSULT ===== */
.ai-consult-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; }
.ai-consult-card { background:white; border-radius:18px; padding:28px 22px; border:1px solid rgba(29,78,216,0.08); box-shadow:0 4px 24px rgba(29,78,216,0.07); transition:all .3s; text-align:center; }
.ai-consult-card:hover { transform:translateY(-5px); box-shadow:0 16px 48px rgba(29,78,216,0.14); }
.ai-consult-step { font-size:0.65rem; font-weight:800; letter-spacing:0.15em; text-transform:uppercase; color:#94a3b8; margin-bottom:14px; }
.ai-consult-icon { width:52px; height:52px; border-radius:14px; display:flex; align-items:center; justify-content:center; margin:0 auto 14px; box-shadow:0 4px 14px rgba(0,0,0,0.14); }
.ai-consult-card h4 { font-size:1rem; font-weight:800; color:#1e293b; margin:0 0 10px; }
.ai-consult-card p { font-size:0.84rem; color:#64748b; line-height:1.65; margin:0; }

/* ===== CASES ===== */
.ai-case-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
.ai-case-card { background:white; border-radius:16px; padding:26px 22px; border:1px solid rgba(29,78,216,0.08); border-left:4px solid var(--acc); box-shadow:0 4px 20px rgba(29,78,216,0.07); transition:all .3s; }
.ai-case-card:hover { transform:translateY(-4px); box-shadow:0 12px 36px rgba(29,78,216,0.13); }
.ai-case-industry { font-size:0.68rem; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:var(--acc); margin-bottom:7px; }
.ai-case-name { font-size:1.05rem; font-weight:800; color:#1e293b; margin-bottom:12px; }
.ai-case-result { font-size:0.87rem; color:#64748b; line-height:1.65; }

/* ===== CTA ===== */
.ai-cta-block { margin-top:56px; }
.ai-cta-inner { background:linear-gradient(135deg,#1d4ed8 0%,#4f46e5 50%,#7c3aed 100%); border-radius:22px; padding:44px 52px; display:flex; justify-content:space-between; align-items:center; gap:32px; position:relative; overflow:hidden; }
.ai-cta-inner::before { content:''; position:absolute; right:-60px; top:-60px; width:220px; height:220px; border-radius:50%; background:rgba(255,255,255,0.06); }
.ai-cta-inner::after { content:''; position:absolute; right:80px; bottom:-50px; width:140px; height:140px; border-radius:50%; background:rgba(255,255,255,0.04); }
.ai-cta-title { font-size:1.4rem; font-weight:900; color:white; margin-bottom:6px; }
.ai-cta-sub { font-size:0.9rem; color:rgba(255,255,255,0.70); margin-bottom:18px; }
.ai-cta-contacts { display:flex; flex-direction:column; gap:8px; }
.ai-contact-item { display:flex; align-items:center; gap:9px; font-size:0.88rem; color:rgba(255,255,255,0.85); font-weight:600; }
.ai-contact-item svg { color:rgba(56,189,248,0.9); flex-shrink:0; }
.ai-cta-btns { display:flex; flex-direction:column; gap:12px; flex-shrink:0; position:relative; z-index:1; }
.ai-btn-primary { display:block; background:white; color:#1d4ed8; font-weight:800; font-size:0.95rem; padding:13px 32px; border-radius:12px; text-decoration:none; text-align:center; transition:all .2s; box-shadow:0 4px 16px rgba(0,0,0,0.15); }
.ai-btn-primary:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(0,0,0,0.2); }
.ai-btn-ghost { display:block; background:rgba(255,255,255,0.12); color:white; font-weight:700; font-size:0.9rem; padding:13px 32px; border-radius:12px; text-decoration:none; text-align:center; border:1px solid rgba(255,255,255,0.25); transition:all .2s; }
.ai-btn-ghost:hover { background:rgba(255,255,255,0.20); }

/* ===== FOOTER ===== */
.au-footer { position:relative; z-index:1; background:white; border-top:1px solid rgba(29,78,216,0.08); padding:44px 72px; display:flex; justify-content:space-between; align-items:center; }
.footer-l { color:#334155; font-weight:700; font-size:0.95rem; }
.footer-l span { background:linear-gradient(90deg,#1d4ed8,#7c3aed); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
.footer-r { color:#94a3b8; font-size:0.8rem; }

/* ===== RESPONSIVE ===== */
@media (max-width:1024px) {
  .au-nav { padding:0 32px; }
  .ai-hero { padding:80px 32px 60px; }
  .ai-body { padding:0 32px 60px; }
  .ai-stats-bar { padding:0 32px; }
  .ai-pillar-grid,.ai-persona-grid { grid-template-columns:repeat(2,1fr); }
  .ai-principle-grid,.ai-platform-grid,.ai-course-grid,.ai-consult-grid { grid-template-columns:repeat(2,1fr); }
  .ai-scene-grid { grid-template-columns:1fr; }
  .ai-case-grid { grid-template-columns:repeat(2,1fr); }
  .ai-stages { flex-direction:column; }
  .ai-stage-arrow { transform:rotate(90deg); }
  .au-footer { padding:36px 32px; }
}
@media (max-width:768px) {
  .au-nav { padding:0 16px; height:58px; }
  .nav-links { display:none; }
  .nav-hamburger { display:flex; }
  .ai-hero { padding:70px 16px 50px; min-height:auto; }
  .ai-hero-inner h1 { font-size:2.2rem; }
  .ai-body { padding:0 16px 50px; }
  .ai-stats-bar { padding:0; flex-wrap:wrap; }
  .ai-stat { min-width:45%; }
  .ai-stat-div { display:none; }
  .ai-section-title { font-size: 1.45rem; line-height: 1.3; }
  .ai-pillar-grid,.ai-persona-grid,.ai-principle-grid,.ai-platform-grid,.ai-course-grid,.ai-consult-grid,.ai-case-grid,.ai-result-grid { grid-template-columns:1fr; }
  .ai-cta-inner { flex-direction:column; padding:32px 24px; }
  .ai-cta-btns { flex-direction:row; width:100%; }
  .au-footer { padding:24px 16px; flex-direction:column; gap:8px; text-align:center; }
}

/* ===== CARD IMAGES ===== */
.ai-service-banner { border-radius:14px; overflow:hidden; margin-bottom:32px; box-shadow:0 4px 24px rgba(29,78,216,0.08); border:1px solid rgba(29,78,216,0.08); }
.ai-service-banner img { width:100%; display:block; }
.ai-scene-img-wrap { padding:0 16px 16px; }
.ai-scene-img-wrap img { width:100%; display:block; border-radius:10px; }
.ai-result-img-wrap { margin:-28px -26px 18px; overflow:hidden; border-radius:14px 14px 0 0; }
.ai-result-img-wrap img { width:100%; display:block; height:170px; object-fit:cover; object-position:center; }
.ai-persona-img-wrap { margin:-28px -24px 20px; overflow:hidden; border-radius:14px 14px 0 0; }
.ai-persona-img-wrap img { width:100%; display:block; height:180px; object-fit:cover; object-position:top; }
.ai-timeline-imgs { display:grid; grid-template-columns:repeat(5,1fr); gap:10px; margin:18px 0 8px; }
.ai-timeline-imgs img { width:100%; display:block; border-radius:10px; aspect-ratio:400/283; object-fit:cover; box-shadow:0 2px 10px rgba(29,78,216,0.08); }
.ai-consult-illus { width:88px; height:88px; margin:0 auto 12px; overflow:hidden; border-radius:12px; }
.ai-consult-illus img { width:100%; height:100%; object-fit:contain; display:block; }
@media (max-width:768px) { .ai-timeline-imgs { grid-template-columns:repeat(3,1fr); } }
</style>
