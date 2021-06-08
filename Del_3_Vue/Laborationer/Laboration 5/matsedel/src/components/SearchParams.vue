<template>
<form class="row g-3 border shadow-sm rounded  m-3 p-3" @submit.prevent="validateForm" @click="errorMsg=''"> 
        
        <p class="text-danger text-center">{{errorMsg}}</p>

            <div class="col-md-6">
              <label for="inputSearchWord" class="form-label">Search word (example <strong>chicken</strong>)</label>
              <input type="text" class="form-control" id="inputSearchWord"  v-model="searchParams.query" >
            </div>

            <div class="col-md-3">
                <label for="selectType" class="form-label">The type of Meal</label>
                <select class="form-select" id="selectMealType" v-model="searchParams.mealType" >
                    <option value="">All types</option>
                    <option v-for="(mealTypeOption, index) in mealType" :key="index" >{{ mealTypeOption }}</option>
                                    
                </select>
              
             </div>   
                      
            <div class="col-md-3">
              <label for="inputNumber" class="form-label" >Number of meals</label>
              <input type="number" class="form-control" id="inputNumber" value=1 min=1 max=20 v-model="searchParams.number">
            </div>

            <div class="col-12">
              <h5>Allergies</h5>
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="dairy" value="dairy-free" v-model="searchParams.health">
                    <label class="form-check-label" for="dairy">Dairy</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="vegan" value="vegan" v-model="searchParams.health">
                    <label class="form-check-label" for="vegan">Vegan</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="vegetarian" value="vegetarian" v-model="searchParams.health">
                    <label class="form-check-label" for="vegetarian">Vegetarian</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="gluten" value="gluten-free" v-model="searchParams.health">
                    <label class="form-check-label" for="gluten">Gluten</label>
                  </div>
            </div>
            
            <div class="col-12 ">
                 <button class="btn btn-primary me-2 btn-width" type="submit">Seek</button>
                 <button class="btn btn-primary btn-width" @click="clearSearchParams">Clear Filter</button>
             </div>
            
           
          </form>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'SearchParams',
    data () {
    return {
      searchParams :{
        query:'',
        mealType:'',
        health:[],
        number:10
      },
      mealType:["Breakfast","Lunch","Dinner","Snack","Teatime"],
      errorMsg:''
     
    }
  },
  methods:{
      validateForm(){
          if (this.searchParams.query!=='' || this.searchParams.mealType !=='' || this.searchParams.health.length>0) {
              this.errorMsg=''

              } else {
              this.errorMsg='You must choose at least one of criteria (Searchword, Mealtype or Allergies)'
          }
      },
      clearSearchParams(){
        this.searchParams = {
        query:'',
        mealType:'',
        health:[],
        number:10
      }

  }
  }

}
</script>

<style scoped>
.btn-width {
    width: 150px;
}
</style>