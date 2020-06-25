<template>
  <div>
     <div> 
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <router-link class="navbar-brand" to="/"><img src="../assets/logok.png" width="70" height="40" alt="" loading="lazy"></router-link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
               </button>
            <div class="collapse navbar-collapse" id="navbarNav">
               <ul class="navbar-nav ml-auto ">
                  <li class="nav-item">
                     <router-link class="nav-link active" to="/login">Login</router-link>
                  </li>
                  <li class="nav-item active">
                     <router-link class="nav-link" to="/nosotros">Recetas<span class="sr-only">(current)</span></router-link>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   
       <header class="header content">
           <div class="header-video">
                <video src="../assets/fondoweb2.mp4" autoplay loop></video>
           </div>
           <div class="header-overlay"></div>
           <div class="header-content">
               <h1>PANCITOS-   K</h1>
               <P>HECHOS EN CASA</P>
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
body {
   margin: 0;
   font-size: 1rem;
   overflow-x: hidden;
  
}
.header {
   height: 60vh;
   display: flex; 
}
.content {
   max-width: 30rem;
   padding-left: 3rem;
   padding-right: 2rem;
   margin: auto;
   text-align: center;
}
.header-video {
 position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   overflow:hidden;
   z-index: -1;
    
}
.header-video video {
   min-width: 100%;
   min-height: 50%;
    
}
.header-content {
   z-index: 1;
   margin-top: 20%;
}
.header-content h1{
   font-size: 50px;   
}
.header-content p {
   font-size: 1.5rem;  
}
</style>