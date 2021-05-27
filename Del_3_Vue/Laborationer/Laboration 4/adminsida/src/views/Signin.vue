<template>
  <div class="hight-nav row align-items-center justify-content-center">
      <div class="col-lg-6 col-md-8">

            <form class="rounded border border-1 p-4 shadow-sm" @submit.prevent="submitSignin" @click="isSigninerror=false">
            <h2 class="text-md-center">Vänligen logga in:</h2>   
            <h6 v-if="isSigninerror" class="text-md-center text-danger my-2">Fel vid inloggningen. Försök igen!</h6>
            
            <div class="row mb-3">
                <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                <input type="email" :class="[signinUser.email || !isDirty?'':'is-invalid','form-control']" id="inputEmail" v-model="signinUser.email" placeholder="Ditt email ..." autocomplete="username">
                 <p class="invalid-feedback">Email ej angiven</p>
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputPassword" class="col-sm-2 col-form-label">Lösenord</label>
                <div class="col-sm-10">
                <input type="password" :class="[signinUser.password || !isDirty?'':'is-invalid','form-control']" id="inputPassword" v-model="signinUser.password" placeholder="Ditt lösenord..." autocomplete="current-password">
                <p class="invalid-feedback">Lösenord ej angiven</p>
                </div>
            </div>
            <div class="d-grid gap-2 col-12 col-sm-6 mx-auto">
                <button type="submit" class="btn btn-primary ">Sign in</button>
            </div>
             
            </form>
            
      </div>    
  </div>
  
</template>

<script>

import {mapActions, mapGetters} from 'vuex'
export default {
  name : 'Signin',
  data () {
      return {
          signinUser:{
          email:'',
          password:''
        },
        isDirty:false,
        isSigninerror:false
      
      }
  },
  computed: {
    ...mapGetters(['adminUser'])
    },
 
  methods : {
    ...mapActions(['signIn']),
    clearForm(){
        this.signinUser.email='',
        this.signinUser.password='',
        this.isDirty=false
    },
    submitSignin() {

         if (this.signinUser.email !== '' && this.signinUser.password !== ''){
             this.signIn(this.signinUser)
             
             if (!this.adminUser.loggedIn) {
                 this.isSigninerror=true
             }
     
         } 
         this.clearForm();
    }  

  },
  watch:{ 
     signinUser: {
     immediate:true,  
     handler(newValue){
     if (newValue.email || newValue.password)
            this.isDirty=true
          
     },
     deep: true
      }
   },


}
</script>

<style scoped>
.hight-nav{
    height: calc(100vh - 56px);
    
}


</style>