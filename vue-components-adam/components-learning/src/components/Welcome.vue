<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
		Esta serie de ejemplos se basan en el curso de Adam Wathan, <br> para el desarrollo
		de componentes avanzados en Vue JS
      <a href="https://adamwathan.me/advanced-vue-component-design/" target="_blank" rel="noopener">link del curso</a>.
    </p>

    <h3>Links de los Ejemplos</h3>
    <ul>
      
		<li>Ejemplo <router-link to="/toggle">Toggle</router-link></li>
		<li>Ejemplo <router-link to="/pickaday">Pickaday datepicker</router-link></li>
		<li>Ejemplo <router-link to="/modal">Modal</router-link></li>
    </ul>
   
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
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
