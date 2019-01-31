import Vue from 'vue'
import Router from 'vue-router'
import Tabbar from '@/components/MainTab'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tabbar',
      component: Tabbar
    }
  ],
  mode: 'history'
})
