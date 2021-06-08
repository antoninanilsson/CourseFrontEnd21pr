<template>
<div>
  <button v-if="mode=='weekMenu'&& meals.length>0" class="btn btn-danger my-2">Clear Menu</button>
   <div v-if="mode=='mealList'" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">       
       <MealCard  v-for="meal in meals" :key="meal.recipe.uri" :meal="meal" :mode="mode" />
   </div>
  
  <div v-if="mode=='weekMenu'" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">       
       <MealCard  v-for="meal in meals" :key="meal.id" :meal="meal" :mode="mode" />
  </div>


  </div>
</template>

<script>
import MealCard from './MealCard'


export default {
    name:'MealCardTable',
    components:{
         MealCard
    },
    props:['meals','mode'],
  }
    


</script>

<style>

</style>