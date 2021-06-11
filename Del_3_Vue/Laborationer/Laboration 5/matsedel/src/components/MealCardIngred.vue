<template>
  
      <div >
            <h6 class="card-subtitle text-muted mb-2">Number of servings: {{numberServings}}</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="(ingridient,index) in ingredients" :key="`${index}`">{{ingridient}}</li>
            </ul>
        </div>
 
</template>

<script>
export default {
    name:'MealCardIngred',
    props: ['ingredients','numberServings']

}
</script>

<style>

</style>