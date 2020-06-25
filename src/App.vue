<template>
  <div>
    <navegacion></navegacion>
    <router-view/>
  <footer>
    <div>
<div class="p-5 mb-2 bg-light text-dark text-center">®Pancitos-K</div>
<i class="fab fa-facebook-square"></i>
</div>
  </footer>
  </div>
  
</template>

<script>
import Navegacion from './components/Navegacion.vue';

export default {
  name: 'App',
  components: {
     Navegacion
  },
  mounted() {
    this.$store.dispatch('traerInfoApi');
   
    
    this.$store.dispatch('activandoMutacionDB');
}
}
</script>

<style>
body {
   font-family: 'Kanit', sans-serif;
}
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@500&family=Krona+One&family=Prompt:wght@500&display=swap');

</style>