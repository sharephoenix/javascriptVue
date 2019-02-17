import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainVue from '@/components/MainIndex'
import LoginMsg from '@/components/LoginMsg'
import MyWeb from '@/components/MyWeb'

Vue.use(Router)
// Object.prototype(MainIndex.name, MainIndex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'MainIndex',
      component: MainVue
    },
    {
      path: '/loginmsg',
      name: 'LoginMsg',
      component: LoginMsg
    },
    {
      path: '/myweb',
      name: 'MyWeb',
      component: MyWeb
    }
  ],
  mode: 'history'
})
