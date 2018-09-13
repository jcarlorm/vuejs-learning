import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import msToMm from '@/filters/ms-to-mm'
import EventBus from '@/plugins/event-bus'
import blur from '@/directives/blur'

Vue.use(EventBus)
Vue.use(msToMm)
Vue.use(blur)
Vue.config.productionTip = false

new Vue({
  	router,
  	store,
  	render: h => h(App)
}).$mount('#app')
