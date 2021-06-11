<template>
<form class="row g-3 " @submit.prevent="validateForm" @click="errorMsg=''"> 
        
        <p class="text-danger text-center">{{errorMsg}} {{loadStatus}} {{errorMeals}}</p>

            <div class="col-md-6">
              <label for="inputSearchWord" class="form-label">Search word (example <strong>chicken</strong>)</label>
              <input type="text" class="form-control" id="inputSearchWord"  v-model="params.query" >
            </div>

            <div class="col-md-3">
                <label for="selectMealType" class="form-label">Meal Type</label>
                <select class="form-select" id="selectMealType" v-model="params.mealType" >
                    <option value="">All types</option>
                    <option v-for="(mealTypeOption, index) in mealType" :key="index" >{{ mealTypeOption }}</option>
                                    
                </select>
              
             </div>   
             <div class="col-md-3">
                <label for="selectDishType" class="form-label">Dish Type</label>
                <select class="form-select" id="selectDishType" v-model="params.dishType" >
                    <option value="">All types</option>
                    <option v-for="(dishTypeOption, index) in dishType" :key="index" >{{ dishTypeOption }}</option>
                                    
                </select>
              
             </div>  
             <div class="col-md-3">
                <label for="selectCuisineType" class="form-label">Cuisine Type</label>
                <select class="form-select" id="selectCuisineType" v-model="params.cuisineType" >
                    <option value="">All types</option>
                    <option v-for="(cuisineTypeOption, index) in cuisineType" :key="index" >{{ cuisineTypeOption }}</option>
                                    
                </select>
              
             </div>  
                      
            

            <div class="col-md-9">
              <h5>Allergies</h5>
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="dairy" value="dairy-free" v-model="params.health">
                    <label class="form-check-label" for="dairy">Dairy</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="vegan" value="vegan" v-model="params.health">
                    <label class="form-check-label" for="vegan">Vegan</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="vegetarian" value="vegetarian" v-model="params.health">
                    <label class="form-check-label" for="vegetarian">Vegetarian</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="gluten" value="gluten-free" v-model="params.health">
                    <label class="form-check-label" for="gluten">Gluten</label>
                  </div>
            </div>
            
            <div class="col-12 ">
                 <button class="btn btn-success me-2 btn-width" type="submit"><i class="bi bi-check2-circle"></i>  Submit</button>
                 <button class="btn btn-secondary btn-width"  @click="resetForm"><i class="bi bi-x-circle"></i> Clear Filter</button>
             </div>
            
           
          </form>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    name:'SearchParams',
    data () {
    return {  
      params: null,     
      errorMsg:''
     
    }
  },
  computed:{
    ...mapGetters(['searchParams','mealType','cuisineType','dishType','loadingMeals','errorMeals']),
    loadStatus(){
      if (this.loadingMeals)
          return 'Loading ...'
      else
          return ''    
    }
  },
  methods:{
      validateForm(){
          if (this.params.query!=='' || this.params.mealType !=='' || this.params.health.length>0 || this.params.cuisineType!=='' || this.params.dishType!=='' ) {
              this.errorMsg=''
              this.saveSearchParams(this.params);
              this.getMeals();

              } else {
              this.errorMsg='You must choose at least one of criteria (Searchword, Mealtype, Dishtype, Cuisinetype or Allergies)'
          }
      },
      resetForm(){
          this.initSearchParams()
          this.params={...this.searchParams}
      },
      ...mapActions(['initSearchParams','saveSearchParams','getSearchParams','getMeals'])

  },
  created() {
      this.getSearchParams()
      this.params={...this.searchParams}
      

  },
  destroyed() {
    
  }

}
</script>

<style scoped>
.btn-width {
    width: 150px;
}
</style>