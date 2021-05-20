<template>
  <div>
    <h1>404</h1>
    <p>page not found</p>
  </div>
</template>

<script>
export default {
  created () {
      let hero = {
          message :'Sidan 404, inga post att hämta, tillbaka till Home ',
          isVisible:true
        }
        this.$emit('updateHero',hero)       
         
   
   }  ,
  mounted() {
    setTimeout(() => {
      this.$router.replace({ path: '/' })
    }, 4000)
  }
}
</script>

<style>

</style>