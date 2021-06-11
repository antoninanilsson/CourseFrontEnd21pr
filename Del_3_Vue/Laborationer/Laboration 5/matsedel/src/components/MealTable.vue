<template>
<div>
  <button v-if="mode=='weekMenu'&& meals.length>0" class="btn btn-danger my-2" @click="clearMenu"><i class="bi bi-trash"></i> Clear Menu</button>
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
import {mapActions} from 'vuex'

export default {
    name:'MealTable',
    components:{
         MealCard
    },
    props:['meals','mode'],
     methods:{
        ...mapActions (['clearMenu'])
  }
  }
       
    


</script>

<style>

</style>