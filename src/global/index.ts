// 引入图标全局注册
import registerIcon from './register-icon'
// 引入element-plus全局注册
import registerElementPlus from './register-element-plus'
// 引入app类型
import type { App } from 'vue'

// main.ts通过app.use时会自动像install函数传入app实例
// install内挂载的也是同理
export const globalRegister = {
  install(app: App) {
    app.use(registerIcon)
    app.use(registerElementPlus)
  }
}
