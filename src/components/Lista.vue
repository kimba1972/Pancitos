<template>
   <div class="container">
           <h1 class="mt-5">Listado de Pancitos</h1>
      <table class="table table-hover">
           <thead>
             <tr>
                <th>Código</th>
                <th>Nombre</th>
                <th>Stock</th>
                <th>Precio</th>
                <th>Editar</th>
                <th>Eliminar</th>
             </tr>
           </thead>
         <tbody>
              <tr v-for="(item, index) in producPancitos" :key="index">
                <th>{{item.codigo}}</th>
                <td>{{item.nombre}}</td>
                <td>{{item.stock}}</td>
                <td>{{item.precio}}</td>
                <td><button @click="editarProducto(item.idDoc)" type="button" class="btn btn-outline-dark">Editar</button></td>
                <td><button type="button" class="btn btn-outline-dark">Eliminar</button></td>
              </tr> 
        </tbody>
     </table>
  </div>
</template>

<script>
export default {
    name: 'Lista',
    computed: {
        producPancitos(){
            return this.$store.getters.mostrandoPancitos; 
        }
    },
    methods: {
        editarProducto(id){
            console.log(id);
            this.$store.dispatch('pasandoIdproduc',id);
            this.$router.push('/edicion');
        } 
    }
}
</script>

