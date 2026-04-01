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
      description: '中软国际小程序能力库',
      themeConfig: {
        nav: [{ text: '首页', link: '/zh/' }],
        sidebar: zhSidebar,
        outlineTitle: '本页目录',
        lastUpdatedText: '最后更新',
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'ChinaSofti Capability Library',
      description: 'ChinaSofti Mini-App Capability Library',
      themeConfig: {
        nav: [{ text: 'Home', link: '/en/' }],
        sidebar: enSidebar,
        outlineTitle: 'On This Page',
        lastUpdatedText: 'Last Updated',
      }
    }
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    socialLinks: []
  }
})
