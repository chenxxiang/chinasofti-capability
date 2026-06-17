import { S } from './_base.js'

export function render(data, theme, locale) {
  const zh = locale === 'zh'
  const dk = theme.name === 'tech-dark'
  const { clientName } = data
  const panelBg = dk ? '#0B1120' : '#0D1628'

  const caps = zh
    ? ['AI 智能', '云服务', '企业小程序', '智慧城市', 'ODC']
    : ['AI', 'Cloud', 'Mini-App', 'Smart City', 'ODC']

  const chipHtml = caps.map(c =>
    `<span style="display:inline-block;padding:5px 12px;border-radius:6px;background:rgba(255,255,255,0.10);color:rgba(255,255,255,0.75);font-size:11px;font-weight:600;">${c}</span>`
  ).join('')

  return S(`
    <!-- Left dark panel -->
    <div style="position:absolute;left:0;top:0;width:400px;height:720px;background:${panelBg};display:flex;flex-direction:column;padding:56px 40px;">
      <!-- CSI badge -->
      <div style="display:inline-flex;align-items:center;gap:10px;margin-bottom:28px;">
        <span style="background:linear-gradient(135deg,#1d4ed8,#7c3aed);color:#fff;padding:6px 12px;border-radius:8px;font-size:12px;font-weight:900;letter-spacing:0.08em;">CSI</span>
        <span style="color:rgba(255,255,255,0.45);font-size:10px;font-weight:600;">ChinaSoft International</span>
      </div>
      <!-- Headline -->
      <div style="color:#fff;font-size:${zh?'28':'24'}px;font-weight:800;line-height:1.3;margin-bottom:20px;">${zh ? '中软国际\n科技服务平台' : 'A Leading Global\nTechnology\nServices Platform'}</div>
      <!-- Divider -->
      <div style="width:56px;height:3px;background:${theme.accent};border-radius:2px;margin-bottom:28px;"></div>
      <!-- Stats -->
      ${['80K+|' + (zh?'员工':'Employees'), '70+|' + (zh?'全球城市':'Cities'), '1000+|' + (zh?'全球客户':'Clients')].map(s => {
        const [v, l] = s.split('|')
        return `<div style="margin-bottom:18px;">
          <div style="color:${theme.accent};font-size:26px;font-weight:900;">${v}</div>
          <div style="color:rgba(255,255,255,0.45);font-size:10px;margin-top:2px;">${l}</div>
        </div>`
      }).join('')}
      <!-- Huawei badge -->
      <div style="margin-top:auto;padding:10px 14px;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:rgba(255,255,255,0.5);font-size:10px;">🤝 ${zh ? '华为全球优选合作伙伴' : 'Huawei Premier Partner'}</div>
    </div>

    <!-- Right content area -->
    <div style="position:absolute;left:400px;top:0;right:0;bottom:0;padding:60px 52px;display:flex;flex-direction:column;justify-content:center;">
      <div style="font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${theme.textMuted};margin-bottom:14px;">${zh ? '能力介绍' : 'CAPABILITY PRESENTATION'}</div>
      <div style="font-size:36px;font-weight:900;color:${theme.textPrimary};line-height:1.2;margin-bottom:${clientName ? '20px' : '36px'}">${zh ? '中软国际\n能力介绍方案' : 'ChinaSoft\nCapability Overview'}</div>
      ${clientName ? `<div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:36px;padding:10px 20px;background:${theme.accent};border-radius:8px;width:fit-content;">
        <span style="color:#fff;font-size:13px;font-weight:700;">${zh ? '客户：' : 'Client: '}${clientName}</span>
      </div>` : ''}
      <!-- Divider -->
      <div style="width:100%;height:1px;background:${theme.border};margin-bottom:20px;"></div>
      <!-- Capability chips -->
      <div style="display:flex;gap:8px;flex-wrap:wrap;">${chipHtml}</div>
      <!-- Date -->
      <div style="margin-top:auto;font-size:10px;color:${theme.textMuted};">${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,'0')}</div>
    </div>
    <!-- Bottom accent -->
    <div style="position:absolute;bottom:0;left:400px;right:0;height:4px;background:${theme.accent};"></div>
  `, theme)
}
