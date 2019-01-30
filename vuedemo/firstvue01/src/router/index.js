import Vue from 'vue'
import Router from 'vue-router'
import Tabbar from '@/components/MainTab'
import WeexTabbar from '@/components/WeexTabbar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tabbar',
      component: Tabbar
    },
    {
      path: '/weextabbar',
      name: 'WeexTabbar',
      component: WeexTabbar
    }
  ],
  mode: 'history'
})
