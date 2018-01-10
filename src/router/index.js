import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import { Navbar } from 'bootstrap-vue/es/components'

Vue.use(Navbar)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    }
  ]
})
