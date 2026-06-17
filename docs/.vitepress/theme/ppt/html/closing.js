import { S } from './_base.js'

export function render(data, theme, locale) {
  const zh = locale === 'zh'
  const { clientName } = data
  const dk = theme.name === 'tech-dark'

  return S(`
    <!-- Background accent circles -->
    <div style="position:absolute;right:-120px;top:-120px;width:400px;height:400px;border-radius:50%;background:${theme.accent};opacity:0.06;"></div>
    <div style="position:absolute;left:-80px;bottom:-80px;width:280px;height:280px;border-radius:50%;background:${theme.accent};opacity:0.05;"></div>

    <!-- Top accent bar -->
    <div style="position:absolute;top:0;left:0;right:0;height:6px;background:${theme.accent};"></div>

    <!-- Center content -->
    <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px;">
      <div style="background:${dk?'rgba(255,255,255,0.04)':'rgba(0,0,0,0.02)'};border:1px solid ${theme.border};border-radius:20px;padding:60px 80px;text-align:center;max-width:720px;width:100%;">
        <div style="font-size:42px;font-weight:900;color:${theme.accent};margin-bottom:12px;">${zh ? '感谢您的关注' : 'Thank You'}</div>
        <div style="font-size:15px;color:${theme.textSecondary};margin-bottom:32px;">${clientName
          ? (zh ? `期待与 ${clientName} 携手共进` : `We look forward to partnering with ${clientName}`)
          : (zh ? '期待与您携手共进' : 'We look forward to working with you')
        }</div>
        <div style="width:60px;height:3px;background:${theme.accent};border-radius:2px;margin:0 auto 32px;"></div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <div style="font-size:12px;color:${theme.textMuted};">${zh ? '公司网站' : 'Website'} <span style="color:${theme.textPrimary};font-weight:700;">www.chinasofti.com</span></div>
          <div style="font-size:12px;color:${theme.textMuted};">Email <span style="color:${theme.textPrimary};font-weight:700;">overseas@chinasofti.com</span></div>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div style="position:absolute;bottom:0;left:0;right:0;height:40px;background:${theme.accent};display:flex;align-items:center;justify-content:center;">
      <span style="color:#fff;font-size:11px;font-weight:600;letter-spacing:0.05em;">ChinaSoft International · 中软国际</span>
    </div>
  `, theme)
}
