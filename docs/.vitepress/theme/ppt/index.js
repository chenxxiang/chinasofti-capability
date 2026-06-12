import { resolveSectionRenderer } from './registry.js'

export async function generatePPT({ selectedSections, clientName, theme, locale }) {
  const { default: PptxGenJS } = await import('pptxgenjs')
  const pptx = new PptxGenJS()
  pptx.layout = 'LAYOUT_WIDE'

  const coverMod = await import('./slides/cover.js')
  coverMod.render(pptx, { clientName }, theme, locale)

  for (const sectionId of selectedSections) {
    const { renderFn, dataLoader } = await resolveSectionRenderer(sectionId, locale)
    const data = await dataLoader()
    renderFn(pptx, data, theme, locale)
  }

  const closingMod = await import('./slides/closing.js')
  closingMod.render(pptx, { clientName }, theme, locale)

  const suffix = locale === 'zh' ? '方案介绍_ZH' : 'Proposal_EN'
  const name   = clientName
    ? `CSI_${clientName.replace(/\s+/g, '_')}_${suffix}`
    : `CSI_Capability_${suffix}`
  await pptx.writeFile({ fileName: `${name}.pptx` })
}
