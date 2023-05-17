import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 导入全局样式表
import './assets/css/global.css'
//导入Fontawesome图标库
import './fontawesome-free-6.3.0-web/css/all.min.css'
// 设置请求的根路径


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
