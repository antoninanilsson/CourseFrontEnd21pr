<template>
  <div class="container mt-5">
  <form class="col-md-6 col-xl-4 mx-auto" @submit.prevent="handleSubmit()" @click="$emit('error-sign-in','')">
        <div class="text-danger" >{{errorMsgSignIn}}</div>
  <!-- <div class="row justify-content-center"> -->
        <div class="mb-3 ">
            <label for="inputEmail" class="form-label">Ditt Email</label>
            <input type="email" class="form-control" placeholder="Ange email ..." v-model="email">
            <div class="text-danger ">{{errorEmail}}</div>
     
        </div>
    <!-- </div>   -->
    <!-- <div class="row justify-content-center"> -->
        <div class="mb-3 ">
            <label for="inputPassword" class="form-label">Ditt Lösenord</label>
            <input type="password" class="form-control" placeholder="Ange lösenord ..." v-model="password">
            <div class="text-danger ">{{errorPassword}}</div>
        </div>
    <!-- </div> -->
        <button type="submit" class="btn btn-secondary col-12">Logga in</button>
        
</form>

</div>
</template>

<script>
export default {
    name:'FormSignin',
    data(){
        return{
            email:'',
            password:'',
           
            
        }
    },
    props:['errorMsgSignIn'],

    computed:{
        // lösenord format kontroll
        errorPassword(){
           if (this.password.trim()==='')  
                 return 'Password ska vara ifylld';
           else return '';    
         
        },
        // Email kontroll
        errorEmail(){
            if (this.email.trim()==='')
               return 'Email ska vara ifylld ';
            else return '';   
        },

        
    },
    methods:{


        // submit om inga fel i email och lösen och skicka vidare till matchning mot databasen
        handleSubmit(){
          if (this.errorEmail || this.errorPassword) 
             return  
          let user = {
              email: this.email,
              password: this.password
          }
          this.password=''
          this.$emit('signIn',user)
          


        }
    },
    
}
</script>

<style>

</style>