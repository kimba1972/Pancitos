<template>
  <div class=""> 
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <router-link class="navbar-brand" to="/">Home</router-link>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
       </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto ">
              <li class="nav-item active">
                <router-link class="nav-link" to="/nosotros">Nosotros <span class="sr-only">(current)</span></router-link>
                  </li>
             <li class="nav-item">
                <a class="nav-link" href="#">Contacto</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
            </li>
         </ul>
       </div>
   </nav>
   <header class="hero text-light text-center">
<div class="fondop">
<h1 class="my-3">ESTAMOS ABIERTO</h1>
<p class="display-1 font-weight-bold ">EN ESTA CUARENTENA</P>
<a class="btn btn-lg btn-outline-info mr-3">Trabajos</a>
<a class="btn btn-lg btn-info">Contacto</a>
</div>
</header>
</div>

 
     
  
</template>

<script>
export default {
    name: 'navbar'
}
</script>

<style>
.fondop{
    background-image: url('../assets/fondo.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat ;
    height: 50vh;
}
</style>