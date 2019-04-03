// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'  //引用路由
import VueResource from  'vue-resource'  //resource请求
import Hello from "@/components/Hello";  //引用路由
import Home from  '@/components/Home'
// import Users from "@/components/Users";

Vue.config.productionTip = false
Vue.use(VueRouter) //注册路由
Vue.use(VueResource) //resource请求

//配置路由
const  router=new VueRouter({
   routes:[
     {path:"/",component:Home},  //根路径
     {path:"/Hello",component:Hello},
   ],
   mode:"history"  //去掉URL的#

})
//全局注册组件
// Vue.component("users",Users)
/* eslint-disable no-new */
new Vue({
  router,  //注册router
  el: '#app',
  components: { App },
  template: '<App/>'
})
