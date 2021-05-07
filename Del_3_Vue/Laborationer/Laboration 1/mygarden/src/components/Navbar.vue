<template>
  
        <nav class="navbar navbar-expand-md navbar-dark bg-success">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">{{enterpriseName}}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" >
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">Hem</a>
                <a class="nav-link" href="#">Odling</a>
                <a class="nav-link" href="#">Matlagning</a>
            </div>
            </div>
        </div>
        </nav>
 
</template>

<script>
export default {
    name:'Navbar',
    props:['enterpriseName']
}
</script>

<style>

</style>