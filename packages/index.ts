import type { App } from 'vue'
import chooseIcon from './chooseIcon'
import './styles/base.scss'
import './styles/ui.scss'


const components = [
  chooseIcon
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}
