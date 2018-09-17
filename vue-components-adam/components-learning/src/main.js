window._ = require('lodash');
window.marked = require('marked');
window.Popper = require('popper.js').default;

try {
  window.$ = window.jQuery = require('jquery');
  require('bootstrap');
} catch (e) {}

import './assets/scss/main.scss'


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Markdown from './components/Markdown.vue'

Vue.component('markdown' , Markdown)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
