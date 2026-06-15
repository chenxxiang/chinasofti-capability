export const hex = s => typeof s === 'string' ? s.replace(/^#/, '') : '000000'

export function gradColors(gradStr) {
  const m = [...String(gradStr).matchAll(/#([0-9a-fA-F]{6})/g)]
  return { from: m[0]?.[1] ?? '1d4ed8', to: m[1]?.[1] ?? '3b82f6' }
}

export function addHeader(slide, title, theme) {
  slide.addShape('rect', {
    x: 0, y: 0, w: 13.33, h: 0.58,
    fill: { color: hex(theme.accent) },
    line: { width: 0 },
  })
  slide.addText(title, {
    x: 0.35, y: 0, w: 12.6, h: 0.58,
    fontSize: 18, bold: true, color: 'FFFFFF',
    valign: 'middle', fontFace: 'Calibri',
  })
}

export function addCard(slide, x, y, w, h, fillColor, lineColor) {
  slide.addShape('roundRect', {
    x, y, w, h,
    fill: { color: hex(fillColor) },
    line: { color: hex(lineColor ?? fillColor), width: lineColor ? 1 : 0 },
    rectRadius: 0.05,
  })
}

export function addGradCard(slide, x, y, w, h, fromHex, toHex, angle = 135) {
  slide.addShape('roundRect', {
    x, y, w, h,
    fill: { type: 'gradient', stops: [{ position: 0, color: fromHex }, { position: 100, color: toHex }], angle },
    line: { width: 0 },
    rectRadius: 0.05,
  })
}
