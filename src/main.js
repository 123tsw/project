import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// 引入路由包
import router from './router'

// 引入Element包
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 持久化插件
/* import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' */
const pinia = createPinia()
// 让插件和pinia结合
/* pinia.use(piniaPluginPersistedstate) */

import './assets/main.css'


const app = createApp(App)

// Element图标库
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

//  pinia
app.use(createPinia())
app.use(pinia)
// 路由
app.use(router)
// Element
app.use(ElementPlus)
app.mount('#app')

