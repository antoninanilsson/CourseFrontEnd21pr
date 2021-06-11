<template>
  <div >
    <table class="table align-middle table-hover">
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
              <th scope="col">Weight (g)</th>
              <th scope="col">Picture</th>
            </tr>
          </thead>
          <tbody>
              <IngredientCard v-for="(ingredient,index) in ingredients" :key="`${index}`" :ingredient="ingredient" />
              
            
          </tbody>
    </table>
  </div>
</template>

<script>

import IngredientCard from './IngredientCard.vue'
export default {
    components:{
        IngredientCard
    },
    name:'IngredientsTable',

    props:['ingredients'],

    

}
</script>

<style>

</style>