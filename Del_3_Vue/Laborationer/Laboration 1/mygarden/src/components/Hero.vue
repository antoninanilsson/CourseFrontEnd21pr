<template>
 
<div class="bg-light bg-gradient p-5 shadow-sm mb-2 rounded">
    <h1 class="display-4" >Välkommen  till <span>{{enterpriseName}}</span>!</h1>
    <p class="lead">Här kan Du lära dig om trägårdväxter Du kan plantera i Norra Sverige (zon 6-7).</p>
    <hr class="my-4 ">
    <p>Massor med praktiska tips och bilder. Visst recepter av goda maträtter från lokalodlade grönsaker och frukt</p>
    <!-- <button type="button" class="btn btn-success btn-lg " @click="$emit('btnClick','ReadMore','Hero')">Läs mer ...</button> -->
    <button type="button" class="btn btn-success btn-lg " ref="btnReadMore"  @click="$emit('btnClick',$refs.btnReadMore.innerText, $options.name)">Läs mer ...</button>
</div>

  
</template>

<script>
export default {
    name:'Hero',
    props:['enterpriseName']
    
}
</script>

<style>

</style>