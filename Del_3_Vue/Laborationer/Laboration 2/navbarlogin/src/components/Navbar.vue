<template>
  <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo.png" alt="" width="30" height="24">
    </a>
    <div class="d-flex">
      <span class="navbar-text  me-2">{{ navbarText }}</span> 
      <button v-if="signedIn" class="btn btn-outline-secondary me-2" type="button" @click="handleSignOut()"><i class="bi bi-box-arrow-right"></i></button>
    </div>
    
  </div>
</nav>
</template>

<script>
export default {
    name:'Navbar',
    props:['user'],
    
    computed:{
      // räkna flaggan om user påloggad
      signedIn(){
          if(this.user !== undefined && this.user.signedIn)
             return true
          else
              return false   
      },
      // räkna vad visa namn eller inbjudan logga in
      navbarText(){

        if (this.signedIn)
            return  `${this.user.firstName} ${this.user.lastName}`
        else 
            return  'Vänligen logga in'   
      }
    }, 
    methods:{
      handleSignOut(){
        this.$emit('signOut')
      }
    }
    

    
}
</script>

<style>

</style>