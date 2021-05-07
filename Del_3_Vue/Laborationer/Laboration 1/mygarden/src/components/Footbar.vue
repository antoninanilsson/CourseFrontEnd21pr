<template>
  <div class="text-md-center p-3 mt-2 bg-success text-light">
       © 2021 Copyright:
       <a class="text-light fst-italic text-decoration-none " href="#">{{enterpriseName}}</a>
  </div>
</template>

<script>
export default {
    name:'Footbar',
    props:['enterpriseName']
}
</script>

<style>

</style>