import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { useData } from 'vitepress'
import HomeAurora from './HomeAurora.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout() {
    const { frontmatter } = useData()
    if (frontmatter.value.layout === 'home-aurora') {
      return h(HomeAurora)
    }
    return h(DefaultTheme.Layout)
  }
}
