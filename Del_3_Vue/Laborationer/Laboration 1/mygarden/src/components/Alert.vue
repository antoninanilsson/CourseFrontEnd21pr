<template>
  <div class="alert alert-secondary my-2 text-md-center" role="alert">
        {{alertText}}
               
        <button type="button" class="btn-close" style="float:right;" @click="$emit('btnCloseAlert')"></button>
     
      
  </div>
</template>

<script>
export default {
    name:'Alert',
    props:['alertText'],

    
    
}
</script>

<style>

</style>