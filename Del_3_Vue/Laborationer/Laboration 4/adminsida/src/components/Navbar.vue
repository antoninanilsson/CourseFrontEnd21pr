<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand px-3" ><i class="fas fa-coffee"></i></router-link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
          
        <router-link to="/about" class="nav-link px-3" aria-current="page">Om oss</router-link>
        <router-link v-if="adminUser.loggedIn" to="/users" exact class="nav-link px-3" aria-current="page">Användare</router-link>
     
        <router-link v-if="!adminUser.loggedIn" to="/auth/signin" exact class="nav-link px-3" aria-current="page">Logga in</router-link>
        <button  v-if="adminUser.loggedIn" @click="signOut" exact class="btn nav-link px-3" aria-current="page">Logga ut</button> 
        
      </div>
    </div>

  </div>
</nav>

</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name : 'Navbar',
  computed: {
    ...mapGetters(['adminUser'])
    },
  methods : {
    ...mapActions(['signOut'])
  }


}
</script>

<style scoped>

.nav-link:hover{
    border-radius: 0.5rem;
    background-color: #b4b4b4;
    border-color: #b4b4b4;;
    
}
.nav-link.router-link-active {
   text-decoration: underline;
}
</style>