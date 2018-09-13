<template lang="pug">
	div
		section.section
			.columns.has-text-centered
				.column
					h1 {{ msg }}
					p {{ welcome }}
					a( href="https://cli.vuejs.org" target="_blank" rel="noopener" )

</template>

<script>

import PmFooter from './layout/Footer.vue'

export default {
	name: 'HelloWorld',
	components: {
		PmFooter
	},
	props: {
		msg: String
	},

	data () {
		return {
			welcome: `Curso profesional de vuejs en platzi`
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
