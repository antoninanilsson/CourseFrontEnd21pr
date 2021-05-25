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

        <router-link to="/signin" class="nav-link px-3" aria-current="page">Logga in</router-link>
        <button class="btn btn-light text-start px-3">Logga ut</button> 
        <router-link to="/users" class="nav-link px-3" aria-current="page">Användare</router-link>
        
        
       
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn:hover,
.nav-link:hover{
    border-radius: 0.5rem;
    background-color: #b4b4b4;
    border-color: #b4b4b4;;
    
}
.nav-link.router-link-active {
   text-decoration: underline;
}
</style>