<template>
  <div>
    <variedades></variedades>
    <modal></modal>  
  </div>
</template>

<script>
import Variedades from '../components/Variedades.vue';
import Modal from '../components/Modal.vue';



export default {
  name: 'Home',
  components: {
     Variedades,
     Modal,
   
  }
}
</script>
