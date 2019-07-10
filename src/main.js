import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入axios模块
import axios from './axios.js';

// 引入要作为全局组件的对象  !!1
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'

//将MyHeader普通对象，重新封装为全局组件  !!!!!!
Vue.component("my-header",MyHeader)
Vue.component("my-footer",MyFooter)

// Vue.config.productionTip = false
//让axios自动携带cookie id 到服务器，为学session做准备
// axios.defaults.withCredentials=true
//把axios对象放进vue.prototype对象中
// Vue.prototype.axios=axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
