<template>
    <div>
       <form @submit.prevent="ingresar" class="container mt-4">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                 <input type="email" v-model="correo" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
           <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                 <input type="password" v-model="clave" class="form-control" id="exampleInputPassword1">
           </div>
          <div class="form-group form-check">
               <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
             <button type="submit" class="btn btn-primary">Submit</button>
       </form>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Login',
    data() {
      return {
        clave: null,
        correo: null,
      }  
    },
    methods: {
      ingresar(){
        if (this.clave && this.correo) {
          firebase.auth().signInWithEmailAndPassword(this.correo,this.clave).then(() =>{
          alert('ingresaste');
          this.$router.push('/')
        }).catch(error => console.error(error))
        } else {
          alert('debe ingresar datos')  
        }
      }
    },
}
</script>

