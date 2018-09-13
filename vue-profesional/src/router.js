import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import LoginEstacion from './views/ejercicios/Login.vue'
import Welcome from './views/Welcome.vue'
import TrackDetail from './components/TrackDetail.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
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
			path: '/loginestacion',
			name: 'loginestacion',
			component: LoginEstacion
		},
		{
			path: '/welcome',
			name: 'welcome',
			component: Welcome 
		},
		{
			path: '/track/:id',
			name: 'track',
			component: TrackDetail 
		}
	]
})
