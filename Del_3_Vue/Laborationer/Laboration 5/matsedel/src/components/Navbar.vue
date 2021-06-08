<template>
      <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand px-3" ><i class="fas fa-coffee"></i></router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
              
            <router-link :to="{name:'About'}" class="nav-link px-3" aria-current="page">About us</router-link>
            <router-link :to="{name:'SearchMeals'}" class="nav-link px-3" aria-current="page">Find meals</router-link>
            <router-link :to="{name:'Meals'}" exact class="nav-link px-3" aria-current="page">Meals</router-link>
        
            <router-link :to="{name:'WeekMenu'}" exact class="nav-link px-3" aria-current="page">Week Menu</router-link>
            <router-link :to="{name:'Ingredients'}" exact class="nav-link px-3" aria-current="page">Ingerdients</router-link>
            
            
          </div>
        </div>

      </div>
</nav>

</template>

<script>

export default {
  name : 'Navbar',
  

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