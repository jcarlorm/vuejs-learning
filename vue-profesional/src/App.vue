<template lang="pug">
	#app
		#nav.container
			.columns.has-text-centered
				.column
					router-link(to="/") Home |
					router-link(to="/about")  About
		router-view
		pm-footer
</template>

<script>

import PmFooter from './components/layout/Footer.vue'

export default {
	name: 'app',

	components: {
		PmFooter
	}
}
</script>

<style lang="scss">
	@import './assets/scss/main.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

footer{
	margin-top: 40px;
}
</style>
