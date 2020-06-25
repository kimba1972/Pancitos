<template>
  <div>
      <div v-for="(item,index) in traerPanes" :key="index">
          <div class="modal fade" :id="'exampleModal'+index" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                 <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalLabel"></h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                    </button>
                 </div>
                  <div class="modal-body">
                      <img class="moldeDetalle" :src="item.img" alt="">
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-light" data-dismiss="modal">CERRAR</button>
                      <button type="button" class="btn btn-outline-dark">AGREGAR CARRITO</button>
                  </div>
               </div>
            </div>
         </div> 
       </div>
   </div>
</template>

<script>
export default {
computed: {
    traerPanes(){
      return this.$store.getters.enviarpanes;
    },
    traerDulces(){
      return this.$store.getters.enviardulces;
    }
  },
}
</script>

<style>
.moldeDetalle {
  background-position: center;
    background-size: cover;
    background-repeat: no-repeat ;
    height: 30vh;
}
</style>