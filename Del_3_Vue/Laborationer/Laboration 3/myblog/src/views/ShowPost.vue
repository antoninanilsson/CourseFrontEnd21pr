<template>
  <div class="show">

    <!-- vi behöver för att undvika fel med null -->
     <div v-if="blogPost !== null" >
         <div class="card text-dark bg-light shadow  mb-3">
              <div class="card-header">Blogginlägg N {{blogPost.id}}</div>
              <div class="card-body ">
              <h5 class="card-title">{{ blogPost.title | toUpper}}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Skapat av {{ blogPost.userName}} </h6>
              <p class="card-text">{{ blogPost.body }}</p>
              
          </div>
         
     </div> 
     
   </div>

  </div>
</template>

<script>

import axios from 'axios'

export default {  
  name:"ShowPost",
  
  data () {
    return {    
      // obekt variabel
      blogPost:null
    }
  },
  methods: {
     // hämta författaren till inlägget 
     getUserById(id) {
       axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
       .then(res=>{
         if (res.status===200) {
           this.blogPost= {...this.blogPost, userName :res.data.name}
           
         } else 
            this.blogPost= {...this.blogPost, userName :''}

       })
       .catch (error=>{
          console.log(error)
         
       })
     } ,   
     // hämta blogginlägget
     getPostByID(id) {    
           
     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
     .then(res=>{
          if (res.status===200) {
          this.blogPost = res.data   
          this.getUserById(this.blogPost.userId)              
         }

     }) 
     .catch (error =>{
         console.log(error)
       
     })       

    }

  },
  filters:{
    toUpper(value){
      return value.toUpperCase()
    }
  },

 created () {
        this.getPostByID(this.$route.params.id)
       
        let hero = {
          message :'Här visas ett blogginlägg',
          isVisible:true
        }
        this.$emit('updateHero',hero)   
   
    }

 
}

</script>

<style>

</style>