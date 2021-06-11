<template>
 <div class="col ">
    <div class="card h-100 shadow " >
         <div class="card-header">
            <h5 class="card-title mt-1">{{meal.recipe.label}}</h5>   
        </div>
        <div v-if="showIngridients" class="card-body" @click="showIngridients=false">
             <MealCardIngred :ingredients="meal.recipe.ingredientLines" :numberServings="meal.recipe.yield" />
        </div>

        <div v-else class="card-body" @click="showIngridients=true">
            <img 
            :src="meal.recipe.image"  class=" card-img-top rounded" alt="Meal">
              
        </div>
       
        <div class="card-footer">
            <div class="row">
                
                <div class="col-6 mb-2">
                   <span class="text-success fw-bold">  {{meal.recipe.calories.toFixed(0)}}</span> CALORIES
                </div>
                <div class="col-6 mb-2">
                    TIME <span class="text-success fw-bold">{{meal.recipe.totalTime}}</span> MIN
                </div>
               
                <hr>  
                <a :href="meal.recipe.url" target="_blank" class="col-12">{{meal.recipe.source}}</a> 
                 
                <button v-if="mode=='mealList'" class="btn btn-secondary mt-2 col-12" @click="addToMenu"><i class="bi bi-list-task"></i>  Add to menu</button>     
                <button class="btn btn-danger mt-2 col-12" @click="deleteMeal"><i class="bi bi-trash"></i>  Delete from list</button>              
            </div>         
        </div>
         
    </div>

</div>
</template>

<script>
import {mapActions} from 'vuex'
import MealCardIngred from './MealCardIngred.vue'
export default {
    name:'MealCard',
    props:['meal','mode'],
    components:{
         MealCardIngred
    },
   data () {
    return {
        showIngridients:false
    }
   },
    computed :{

    },
    methods:{
        ...mapActions (['deleteMealFromList','deleteMealFromMenu','addMealToMenu']),

        deleteMeal() {
            if (this.mode=='mealList') {
                this.deleteMealFromList(this.meal)
                return
            }
            if (this.mode=='weekMenu') {
                this.deleteMealFromMenu(this.meal)
                return
            }

        },
        addToMenu() {
            this.addMealToMenu(this.meal)
            
        },
        
    }

}
</script>

<style scoped>
.card-title:hover {
    color: green;
}
a {
   text-decoration: none; 
   color:grey;
   font-weight: bold;
   
}
a:hover {
    color: green;
}
.card-body:hover {
    cursor: pointer
}

</style>