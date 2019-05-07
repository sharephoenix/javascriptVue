import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import HelloWorld from '@/components/HelloWorld.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(ElementUI)

//创建路由对象并配置路由规则
let router = new VueRouter({
  //routes
  routes: [
  //一个个link对象
  {path: '/login',name: 'login',component: Login},
  {path: '/',name: 'hello',component: HelloWorld}
]
});

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
