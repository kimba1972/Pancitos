<template>
<div class="">
  <div class="panes text-center mt-5">
    <h1>PANES</h1>
    <div class="row ml-5 b">
      <div class="col-12 co-sm-12 col-md-4 col-lg-2 col-xl-2 d-flex align-items-stretch mt-4" v-for="(item, index) in traerPanes" :key="index">
        <div class="card">
          <div class="cajaPanes" ng-click="vm.viewDetail()">
            <img :src="item.img" class="card-img-top img-fluid" :alt="item.titulo" data-toggle="modal" :data-target="'#exampleModal'+index">
          </div>
          <div class="card-body">
            <h5 class="card-title">{{item.titulo}}</h5>
            <p class="card-text">{{item.precio}}</p>
            <div>
            <button type="button" class="btn btn-dark my-3 btn-sm">
                <p class="agregar">AGREGAR</p> 
            </button>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
  <div>
    <div class="panes text-center mt-5">
    <h1>DULCES</h1>
    <div class="row ml-5">
      <div class="col-12 co-sm-12 col-md-4 col-lg-2 col-xl-2 d-flex align-items-stretch mt-4" v-for="(item, index) in traerDulces" :key="index">
        <div class="card">
          <div class="cajaDulces">
            <img :src="item.img" class="card-img-top img-fluid" :alt="item.titulo">
          </div>
          <div class="card-body">
            <h5 class="card-title">{{item.titulo}}</h5>
            <p class="card-text">{{item.precio}}</p>
            <button type="button" class="btn btn-dark my-3 btn-sm" data-toggle="modal" data-target="#exampleModal">
                <p class="agregar1">AGREGAR</p> 
            </button>
          </div>
        </div> 
      </div>
    </div>
  </div>
  </div>

  </div>
  
  
</template>

<script>
export default {
  name: 'Variedades',
  data() {
    return {
    
    }
  },
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


<style scope>
.panes{
  text-align: left;
}
.agregar{
  height: 5px;
}
.agregar1{
  height: 5px;
}
</style>
