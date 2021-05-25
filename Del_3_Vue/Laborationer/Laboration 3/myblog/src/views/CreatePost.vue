<template>
  <div class="create">
    <div v-if ="showAlert" class="alert alert-success " role="alert">
         Grattis! Du har skappat ett nytt blogginlägg!   
    </div>
    <form id="postForm" class="text-dark bg-light shadow border p-5" @submit.prevent="create" @reset="resetForm" @click="showAlert=false">
        <h4 class="text-center">Skapa ett nytt blogginlägg</h4>
        <div class="mb-3">
          <label for="postTitle" class="form-label">Titel</label>

          <input type="text" :class="[blogPost.title || !isDirty?'':'is-invalid', 'form-control']" id="postTitle"  v-model="blogPost.title">
          <p class="invalid-feedback">Ange inläggets namn</p>
         
        </div>

        <div class="mb-3">
          <label for="postContent" class="form-label">Inlägg</label>
          <textarea  :class="[blogPost.body || !isDirty?'':'is-invalid', 'form-control']" id="postContent" v-model="blogPost.body"></textarea>
          <p class="invalid-feedback">Skriv något text</p>
        </div>

        <div class="mb-3">
        <label for="postUser">Författare</label>
        <select id="postUser" :class="[blogPost.userId || !isDirty?'':'is-invalid','form-select']" v-model="blogPost.userId">
          <option value="" disabled selected></option>
          <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
        </select>
        <p class="invalid-feedback">Välj någon av författare</p>
      </div>

        <button type="submit" class="btn btn-primary">Skapa</button> 
        <button type="reset" class="btn btn-primary mx-2" >Ångra</button> 
</form>
  </div>
</template>

<script>


import axios from 'axios'
export default {
    //"userId": "Number",
    //"id": "Number",
    //"title": "String ",
    //"body": "String"

  data(){
    return {
      blogPost:{
        userId: 0,
        title: '',
        body: ''
       
       
      },
      users:[],
      inputError:false,
      showAlert:false,
      isDirty:false
      
    }
  },
  
 methods:{
    resetBlogPost() {
      this.blogPost = {
               userId: 0,
               title: '',
               body: '',
               userName:''},
      this.isDirty=false         
    }, 
      
     create() { 

        if (this.blogPost.title !== '' && this.blogPost.content !== '' && this.blogPost.userId!='') {
            this.postPost(this.blogPost)
            this.resetBlogPost()

         }
   },
  

     resetForm() {
      this.resetBlogPost()

 
   },

   getUsers() {
       axios.get(`https://jsonplaceholder.typicode.com/users`)
       .then(res=>{
         if (res.status===200) {
           this.users= res.data       
           
         } 
       })
       .catch (error=>{
          console.log(error)
         
       })
     } ,

  postPost(newPost) {
       axios.post(`https://jsonplaceholder.typicode.com/posts`,
       {  userId: newPost.userId,
          title: newPost.title,
          body: newPost.body})
       .then(res=>{
          if (res.status===201) 
            this.showAlert=true
            
         
       })
       .catch (error=>{
          console.log(error)
         
       })
    }
 },

 watch:{ 
     blogPost: {
     immediate:true,  
     handler(newValue){
     if (newValue.title || newValue.body || newValue.userId)
            this.isDirty=true
          
     },
     deep: true
      }
   },
  
 
 created () {
        let hero = {
          message :'Här skappar vi ett nytt blogginlägg',
          isVisible:true
        }
        this.$emit('updateHero',hero)    
        this.getUsers()   
    }
    
 
 
}
</script>

