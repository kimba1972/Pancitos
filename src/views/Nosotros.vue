<template>
  <div>
    <h1 class="text-center">RECETAS</h1>
    <div class="row ml-5 my-5">
      <div class="col-12 co-sm-12 col-md-4 col-lg-4 col-xl-4 d-flex align-items-stretch mt-4" v-for="(item, index) in traerApi" :key="index">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{item.product}}</h5>
            <p class="card-text">{{item.manufacturer}}</p>
            <p class="card-text">{{item.category}}</p>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button>
          </div>
        </div> 
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  computed: {
    traerApi(){
      return this.$store.getters.enviandoInfoApi;
    }
  }
}
</script>


