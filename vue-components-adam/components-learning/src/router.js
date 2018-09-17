import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import ToggleExample from './views/ToggleExample.vue'
import PickadayExample from './views/PickadayExample.vue'
import ModalExample from './views/ModalExample.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/toggle',
      name: 'toggle',
      component: ToggleExample
    },
    {
      path: '/pickaday',
      name:'pickaday',
      component: PickadayExample
    },
    {
      path: '/modal',
      name:'modal',
      component: ModalExample
    }
  ]
})
