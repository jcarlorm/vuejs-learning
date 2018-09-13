<template lang="pug">
	.container
		.columns.has-text-centered
			.column
				img( alt="Vue logo" src="@/assets/logo.png")
				HelloWorld( msg="Bienvenido, esto es resultado del curso.")
		.columns.has-text-centered
			.column
				ul
					li
						span Ejemplo login
							router-link( to="/loginestacion" )  Login Estacion
					li
						span Platzi
							router-link( to="/welcome" )  Music
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'home',
	components: {
		HelloWorld
	}
}
</script>

<style lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
li {
	margin-top: 5px
}
a {
  color: #42b983;
}
</style>
