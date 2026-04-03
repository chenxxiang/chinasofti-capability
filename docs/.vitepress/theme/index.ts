import DefaultTheme from 'vitepress/theme'
import LayoutSwitch from './LayoutSwitch.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: LayoutSwitch
}
