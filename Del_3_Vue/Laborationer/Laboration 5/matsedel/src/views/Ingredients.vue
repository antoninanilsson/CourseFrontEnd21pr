<template>
  <div >
    <h1 class="text-center">Shopping List for Your Weekmenu</h1>
    <IngredientsTable v-if="ingredientsByCategory.length>0" :ingredients="ingredientsByCategory" />
    <h2 v-else class="text-center text-success ">You need to choose some meals first</h2> 

  </div>
</template>

<script>

import {mapActions,mapGetters} from 'vuex'
import IngredientsTable from '../components/IngredientsTable.vue'
export default {
  name: 'Ingredients',
  components: {
    IngredientsTable
    
  },
  methods :{
    ...mapActions(['getIngredients','clearIngredients'])
  },
  computed : {
    ...mapGetters(['ingredientsByCategory'])
  },
  created() {
    this.getIngredients()
    
  

  },
  destroyed(){
    this.clearIngredients()
  }
}
</script>
