import { createApp } from 'vue'
import './styles/base.scss'
import './styles/ui.scss'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { toLine } from './utils'
import mUI from './components'
// import mUI from '../lib/mooc-element-components'
// import '../lib/mooc-element-components.css'
// 单独引入组件
// import chooseIcon from '../lib/chooseIcon/index.js'
// import '../lib/chooseIcon/index.css'
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(mUI)
// app.use(chooseIcon)
app.mount('#app')

// 全局注册图标 牺牲一点性能
// el-icon-xxx
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(`el-icon-${toLine(key)}`, component)
}
