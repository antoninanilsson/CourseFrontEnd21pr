<template>
  <div >
    <h1 class="text-center">Edit Your Weekmenu</h1>   
       <MealCardTable :meals="menu" :mode="mode" />
  </div>
</template>

<script>


import MealCardTable from '../components/MealCardTable'
import {mapGetters, mapActions} from 'vuex'


export default {
  name: 'Meals',
   components: {
        MealCardTable,       
    
   },
   data () {
     return {
       mode:'weekMenu'

     }
   },
   computed :{
      ...mapGetters(['menu'])
    },

  
 
}
</script>
