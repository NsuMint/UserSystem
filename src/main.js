import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 导入全局样式表
import './assets/css/global.css'
//导入Fontawesome图标库
import './fontawesome-free-6.3.0-web/css/all.min.css'
//导入axios
import axios from 'axios'
// 设置请求的根路径
// 此处填写服务器的根地址
axios.defaults.baseURL = ''


//token校验，请求拦截器
//设置拦截器
//use将会在向服务器发出请求时被调用
axios.interceptors.request.use(
  config => {
    //Authoritarian就是我们需要的令牌，将token的值赋给它
    //他就能让拦截器放行，从而获取表单数据
    config.headers.Authorization = window.sessionStorage.getItem('token')
    //在最后必须return config
    return config
  }
  )

//全局配置能够向AJAX发出请求
Vue.prototype.$http = axios  
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
