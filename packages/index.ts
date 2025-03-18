import type { App } from 'vue'
import chooseIcon from './chooseIcon'
import './styles/base.scss'
import './styles/ui.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { toLine } from './utils'

const components = [chooseIcon]

export default {
  install(app: App) {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(`el-icon-${toLine(key)}`, component)
    }
    components.map(item => {
      app.use(item)
    })
  },
}
