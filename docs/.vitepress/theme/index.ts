import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext } from 'vitepress'
import Layout from './Layout.vue'
import Icon from './components/Icon.vue'
import 'flag-icons/css/flag-icons.min.css'
import './input.css'

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('Icon', Icon)
  }
}
