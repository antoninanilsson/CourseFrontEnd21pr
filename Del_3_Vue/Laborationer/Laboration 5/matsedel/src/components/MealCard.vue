<template>
 <div class="col  ">
    <div class="card h-100 shadow " style="width: 18rem;">
        <img 
          :src="meal.recipe.image" class="card-img-top p-2" alt="...">

        <div class="card-body">
            <h5 class="card-title">{{meal.recipe.label}}</h5>     
        </div>
        <div class="row card-body">
                <hr>
                <div class="col-6">
                   <span class="text-success fw-bold">  {{meal.recipe.calories.toFixed(0)}}</span> CALORIES
                </div>
                    <div class="col-6">
                    TIME <span class="text-success fw-bold">{{meal.recipe.totalTime}}</span> MIN
                </div>
                <hr>  
                <a :href="meal.recipe.url" target="_blank" >{{meal.recipe.source}}</a> 
                <button v-if="mode=='mealList'" class="btn btn-secondary mt-2" @click="addToMenu">Add to menu</button>     
                <button class="btn btn-danger mt-2" @click="deleteMeal">Delete from list</button>              
         </div>
         
    </div>

</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:'MealCard',
    props:['meal','mode'],
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
            
        }
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

</style>