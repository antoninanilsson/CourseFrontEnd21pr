<template>
 
<div class="bg-info bg-gradient p-3 shadow-sm my-2 rounded d-flex">
  <div >
        <h4>{{hero.mainMessage}} </h4>
        <p class="lead">Namn: "{{$route.name}}", path: "{{$route.path}}", parametrar: "{{$route.params}}"</p> 
        <p>{{hero.extraMessage}}</p>

  </div>  
 
    <button type="button" class="btn btn-close ms-auto"  ref="btnClose"  @click="$emit('closeHero')"></button>
</div>

  
</template>

<script>

export default {
    name:'Hero',
    props:['hero'],
}   

</script>

<style>

</style>