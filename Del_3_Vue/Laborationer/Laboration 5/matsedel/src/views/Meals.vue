<template>
  <div >
    <h1 class="text-center">Chose meals for Your weekmenu</h1>   
      <MealCardTable :meals="meals" :mode="mode" />
  </div>
</template>

<script>


import MealCardTable from '../components/MealCardTable'
import {mapGetters} from 'vuex'

export default {
  name: 'Meals',
   components: {
        MealCardTable,       
    
   },
   data () {
     return {
       mode:'mealList'

     }
   },
   computed :{
      ...mapGetters(['meals'])
    }
  
 
}
</script>
