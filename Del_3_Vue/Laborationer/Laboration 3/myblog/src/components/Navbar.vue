<template>
  
 <nav class="navbar navbar-expand-md navbar-dark bg-secondary">
    <div class="container-fluid">
       <!-- <a class="navbar-brand" href="#">Navbar</a> -->
       <router-link  to="/" exact class="navbar-brand" >Blogg</router-link> 
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
       </button>
    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
           <router-link  to="/preview" exact class="nav-link" >Alla inlägg</router-link>
           <router-link  to="/create" exact class="nav-link" >Skapa nytt</router-link>
           
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
.router-link-active.nav-link {
    text-decoration: underline;
  }
 /* nav navlink:hover{
     background: rgba(0, 0, 0, 0.349);
 }  */
</style>