import Vue from 'vue'
import Login from '../components/login.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  //地址跳转
  {path:'/',redirect:'/login'},
  //登录地址配置
  {path:'/login',component:Login},
]

const router = new VueRouter({
  routes
})

export default router
