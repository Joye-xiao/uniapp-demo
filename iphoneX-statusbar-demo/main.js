import App from './App'
import store from './store' // 1. 导入store

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false

Vue.prototype.$store = store  // 2. 在Vue原型上定义,使其在每个 Vue 的实例中可用

App.mpType = 'app'
const app = new Vue({
	store, // 3. 把store的实例注入所有的子组件
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif