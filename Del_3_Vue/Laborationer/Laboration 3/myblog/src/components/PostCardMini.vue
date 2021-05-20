<template>
  <div class="col"> 
  <router-link :to="`/show/${post.id}`" custom v-slot="{ navigate }" >
          <div class="card text-dark bg-light shadow " @click="navigate" @keypress.enter="navigate">
           <div class="card-header">Blogginlägg N {{post.id}}</div> 
            <div class="card-body">
              <h5 class="card-title">{{post.title | toUpper}}</h5>
              <p class="card-text">{{post.body | shorten}}</p>
            </div>  
          </div>
  </router-link>
  
 </div>

</template>

<script>


export default { 
  name:"PostCard", 
  props:['post'],

  filters:{
    toUpper(value){
      return value.toUpperCase()
    },
    shorten(value){
      return value.slice(0,70) + '... '
    }
  }
 

}
</script>

<style scoped>
.card:hover {
    cursor:pointer;
}
</style>