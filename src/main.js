import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'//导入全局样式
import './assets/fonts/iconfont.css'//导入输入框图标
import './assets/font-awesome-4.7.0/font-awesome-4.7.0/css/font-awesome.css'//导入菜单图标

/* import axios from 'axios'//导入axios包
Vue.prototype.$http = axios//挂载原型对象
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'//配置请求根路径
axios.interceptors.request.use(config => {
  console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
}) */
import axios from "axios"
axios.defaults.baseURL = "http://127.0.0.1:3000/"
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
