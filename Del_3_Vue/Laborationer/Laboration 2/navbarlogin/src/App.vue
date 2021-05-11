<template>
  <div >
    <Navbar :user="user" @signOut="handleSignOut" />
    <FormSignin v-if="!user.signedIn" @signIn="handleSignIn" :errorMsgSignIn="errorMsgSignIn" @error-sign-in="errorMsgSignIn=arguments[0]"  />
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import FormSignin from './components/FormSignin'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Navbar,
    FormSignin,
   },
  data() {
      return {
        user:{
           id:'',
           email: '',
           firstName:'',
           lastName:'',
           signedIn:false,

      },
      apiUrl: 'http://localhost:8080/api/users.json',
      errorMsgSignIn : ''
    }

  },
  methods:{
   async findUser(_email) {
      try {
         //const response = await axios.get(this.apiUrl, { params: { email: email1 }});
         const response = await axios.get(this.apiUrl);
         if (response.status===200){
            const _user = response.data.find(e=>(e.email===_email))
           
            if (_user!= undefined) {
                  // kontroll av lösenord ska vara i riktig 
                  this.user.id=_user.id,
                  this.user.email=_user.email,
                  this.user.firstName=_user.firstName,
                  this.user.lastName=_user.lastName,
                  this.user.signedIn=true,
                  this.errorMsgSignIn=''
            } else {
               console.log("Fel vid inloggning")
               this.errorMsgSignIn='Fel användare eller lösenord'
               // meddelnde till form 
            }

         }

         
      } catch (err){
          console.log(err);
          this.errorMsgSignIn='Fel vid inloggning pga server'
          
      }
    },
    handleSignIn(user){
       this.findUser(user.email)
    },
    // logga ut - rensa info
    handleSignOut(){
        this.cleanUser()
    },
    cleanUser(){
           this.user.id='',
           this.user.email= '',
           this.user.firstName='',
           this.user.lastName='',
           this.user.signedIn=false
    }
  }
}
</script>

<style>

</style>
