<template>
  <div >
    <h1 class="text-center">Find Meals for Your Weekmenu</h1>  
    
    <button class="btn btn-success mb-2 me-2 btn-width" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> 
       <i class="bi bi-search"></i> Search
     </button>
     <button v-if="meals.length>0" class="btn btn-secondary mb-2  btn-width " type="button" @click="addRandomMeal"><i class="bi bi-question-circle"></i> Add random</button>

     <div class="collapse border rounded shadow mb-3" id="collapseExample">
        <div class="card card-body">
          <SearchParams />
        </div> 
      </div>
      
      <MealTable v-if="meals.length>0" :meals="meals" :mode="mode" />
      <h2 v-else class="text-center text-success ">Your Meal List is empty</h2>
  </div>
</template>

<script>


import MealTable from '../components/MealTable'
import SearchParams from '../components/SearchParams'
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'Meals',
   components: {
       MealTable, 
       SearchParams       
    
   },
   data () {
     return {
       mode:'mealList'

     }
   },
   methods:{
      ...mapActions(['addRandomMeal']),
   },
   computed :{
      ...mapGetters(['meals'])
    }
  
 
}
</script>

<style scoped>
.btn-width {
    width: 150px;
}
</style>
