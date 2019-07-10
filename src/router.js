import Vue from 'vue'
import Router from 'vue-router'
//引入模块
import Index from './views/Index'
import Detail from './views/Detail'
import Login from './views/Login'
import Register from './views/Register'
import Cart from './views/Cart'
import NotFound from './components/NotFound'


Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index},  
    {path:"/index",component:Index},  
    {path:"/detail",component:Detail},  
    {path:"/login",component:Login},  
    {path:"/register",component:Register},  
    {path:"/cart",component:Cart},
    {path:"/*",component:NotFound},
  ]
})
