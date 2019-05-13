import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Enter from '@/components/Enter.vue'
import MockB from '../mock/mock'
MockB.testmock()

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(ElementUI)

//创建路由对象并配置路由规则
let router = new VueRouter({
  //routes
  routes: [
  //一个个link对象
  {path: '/',
  name: 'enter',
  component: Enter,
  children: [
    {
      path: 'a',
      component: Login,
      children: [
        {
          path: 'b',
          component: Home
        }
      ]
    }
  ],
  meta: {
    title: 'pagePermission',
    roles: ['admin'] // or you can only set roles in sub nav
  }},
  {path: '/login',name: 'login',component: Login},
  {path: '/home',name: 'home',component: Home}
]
});

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
