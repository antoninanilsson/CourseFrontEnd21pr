<template>
  <div class="hight-nav row align-items-center justify-content-center">
      <div class="col-lg-6 col-md-8">
            <form class="rounded border border-1 p-4 shadow-sm" @submit.prevent="signin">
            <h2 class="text-md-center">Vänligen logga in:</h2>   
            <div class="row mb-3">
                <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail">
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword">
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
export default {


}
</script>

<style scoped>
.hight-nav{
    height: calc(100vh - 56px);
    
}
/* form {
   width: 700px;
} */

</style>