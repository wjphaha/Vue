/*
//src/axios.js
//引入axios库并配置
//1.引入Vue
import Vue from 'vue';
//2.引入axios 库
import axios from 'axios'
//3.设置跨域请求保存session
axios.defaults.withCredentials=true
//4.设置请求服务器路径
axios.defaults.baseURL="http://127.0.0.1:3000/"
//5.将axios注册 Vue实例 添加到原型对象上
Vue.prototype.axios=axios;
//7.在main.js中引入axios.js文件*/
//src/axios.js
//引入axios库并且配置
// 1.引入Vue
import Vue from 'vue'
// 2.引入axios库
import axios from 'axios'

// 3.设置跨域请求保存session
// axios.defaults.withCredentials=true
axios.defaults.withCredentials=true
// 4.设置请求服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:3000/"

// 5.将axios注册 Vue实例  添加到原型对象上
Vue.prototype.axios=axios
// 7.在main.js中引入axios.js文件
