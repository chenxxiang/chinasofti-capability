import { defineConfig } from 'vitepress'
import { zhSidebar } from './sidebar.zh'
import { enSidebar } from './sidebar.en'

export default defineConfig({
  title: '中软国际能力库',
  locales: {
    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: '中软国际能力库',
      description: '中软国际解决方案能力库',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '解决方案', link: '/zh/business/cms/' },
          { text: '成功案例', link: '/zh/cases/' },
        ],
        sidebar: zhSidebar,
        outlineTitle: '本页目录',
        lastUpdatedText: '最后更新',
        siteTitle: '中软国际 · 能力库',
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'ChinaSofti Capability Library',
      description: 'ChinaSofti Solution Capability Library',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Solutions', link: '/en/business/cms/' },
        ],
        sidebar: enSidebar,
        outlineTitle: 'On This Page',
        lastUpdatedText: 'Last Updated',
        siteTitle: 'ChinaSofti · Capability',
      }
    }
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    socialLinks: [],
    docFooter: {
      prev: false,
      next: false,
    }
  }
})
