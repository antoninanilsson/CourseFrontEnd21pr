<template>
  <div class="home">
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  created () {
        let hero = {
          message :'Det är hemsidan med info om Bloggen och författaren',
          isVisible:true
        }
        this.$emit('updateHero',hero)       
    }
  
}
</script>
