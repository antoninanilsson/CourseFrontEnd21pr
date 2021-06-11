<template>
  <div >
    <h1 class="text-center">Edit Your Weekmenu</h1>  
    

       <MealTable v-if="menu.length>0" :meals="menu" :mode="mode" />
       <h2 v-else class="text-center text-success ">You need to choose some meals first</h2>  

  </div>
</template>

<script>


import MealTable from '../components/MealTable'
import {mapGetters} from 'vuex'


export default {
  name: 'Meals',
   components: {
        MealTable,       
    
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
