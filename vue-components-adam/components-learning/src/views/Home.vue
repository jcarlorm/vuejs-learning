<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Welcome msg="Bienvenido esta serie de ejemplos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'home',
  components: {
    Welcome
  }
}
</script>
