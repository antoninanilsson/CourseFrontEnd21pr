<template>
 
  <div class="preview">
        <input type="text" v-model="search" placeholder="Söka ..." class="form-control my-5  ">
    
        <div v-if = "filteredPosts.length" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3" >
         
                <PostCard v-for="post in filteredPosts" :key="post.id" :post="post"  />
         
        </div>

  </div>  
   

  
</template>
<script>

import axios from 'axios'
import PostCard from '../components/PostCardMini'


export default {
  components: {
    PostCard
  },
  data () {
    return {
      search:'',
      blogPosts:[]
    }
  },
  methods: {
  async getPosts() {
      
      try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      if (res.status===200)
         this.blogPosts = res.data
      else {
          this.blogPosts=[]       
          throw new Error(`${res.status}  ${res.statusText}`);
        } 
          
    } catch (error) {
        console.log(error)
        this.$router.push({ name: '404' })
   }

  },



  },
  computed : {
      filteredPosts() {
         return this.blogPosts.filter(post => post.title.toUpperCase().match(this.search.toUpperCase()))
    }
  },
 created () {
      let hero = {
          message :'Här visas en lista med kort sammanfattning av varje inlägg',
          isVisible:true
        }
        this.$emit('updateHero',hero) 
        this.getPosts()    

       
    
   
   }  ,
   

 
}

</script>
<style scoped>

</style>

