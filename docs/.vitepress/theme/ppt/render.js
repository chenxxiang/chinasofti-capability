const W = 1280
const H = 720

/**
 * Render an HTML string into a JPEG data-URL at 1280×720.
 * The element is placed off-screen so it does not affect layout.
 */
export async function renderSlide(html) {
  const { default: html2canvas } = await import('html2canvas')

  const el = document.createElement('div')
  el.style.cssText = [
    `position:fixed`,
    `left:${-(W + 200)}px`,
    `top:0`,
    `width:${W}px`,
    `height:${H}px`,
    `overflow:hidden`,
    `z-index:-9999`,
  ].join(';')
  el.innerHTML = html
  document.body.appendChild(el)

  // Ensure images are loaded before capture
  const imgs = [...el.querySelectorAll('img')]
  await Promise.all(imgs.map(img =>
    img.complete ? Promise.resolve() : new Promise(r => { img.onload = r; img.onerror = r })
  ))

  try {
    const canvas = await html2canvas(el, {
      width: W, height: H,
      scale: 1,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false,
      imageTimeout: 10000,
    })
    return canvas.toDataURL('image/jpeg', 0.92)
  } finally {
    document.body.removeChild(el)
  }
}
