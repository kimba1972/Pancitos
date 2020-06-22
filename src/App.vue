<template>
  <div>
    <navegacion></navegacion>
    <router-view/>
  </div>
</template>

<script>
import Navegacion from './components/Navegacion.vue';

export default {
  name: 'App',
  components: {
     Navegacion
  }
}
</script>


