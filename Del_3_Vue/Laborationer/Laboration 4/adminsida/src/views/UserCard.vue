<template>
  <div class="container row justify-content-md-center">
    
    <form class="col-12 col-xl-6" @submit.prevent="submitForm">
     <h2>{{pageTitle}}</h2>
          <div class="mb-3">           
            <label for="inputFirstname" class="form-label">Förnamn</label>
            <input type="text" class="form-control" id="inputFirstname" v-model="user.firstName" >
          </div>
          <div class="mb-3">           
            <label for="inputLastname" class="form-label">Efternamn</label>
            <input type="text" class="form-control" id="inputLastname" v-model="user.lastName" >
          </div>
           <div v-if="modeCreate" class="mb-3">           
            <label for="inputUsername" class="form-label">Användarnamn</label>
            <input type="text" class="form-control" id="inputUsername" v-model="user.username" >
          </div>
           <div class="mb-3">           
            <label for="inputEmail" class="form-label" >Email address</label>
            <input type="email" class="form-control" id="inputEmail" v-model="user.email" >
          </div>
          <div class="mb-3">           
            <label for="inputPhone" class="form-label">Telefon</label>
            <input type="text" class="form-control" id="inputPhone" v-model="user.phone" >
          </div>
          <div class="mb-3">           
            <label for="inputCompany" class="form-label">Företag</label>
            <input type="text" class="form-control" id="inputCompany" v-model="user.company" >
          </div>

         
          <div v-if="modeCreate" class="mb-3">
            <label for="inputPassword" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword" v-model="user.password">
          </div>
          

          <button type="submit" class="btn btn-primary btn-fixed-width me-2">{{buttonName}}</button>
          <button type="reset" class="btn btn-secondary btn-fixed-width" @click="resetForm">Ångra</button>
</form>
      
  </div>
</template>

<script>
              // firstName: "Leanne",
              // lastName: "Graham",
              // username: "Bret",
              // email: "Sincere@april.biz",
              // password:"",
              // phone: "1-770-736-8031 x56442",
              // company: "Romaguera-Crona"

import {mapActions, mapGetters} from 'vuex'
export default {
    name:'UserCard',
    props:['id'],
    data () {
      return {
        pageTitle:'',
        buttonName:'',
        modeCreate:false
      }
    },
    methods:{
        ...mapActions(['createEmptyUser','getUserById','postUser','putUser','clearUser']),
        submitForm(){
          if (this.modeCreate) {
              this.postUser()
              
          }else {
              this.putUser()
          }
        },
        resetForm(){
          window.history.go(-1)
        }
    },
    computed :{
        ...mapGetters(['user'])
    },
    created() {
        if (this.id!=="0") {
          this.getUserById(this.id)
          this.buttonName='Uppdatera'
          this.pageTitle= `Redigera användare "${this.user.username}" `
         
        } else {
          this.createEmptyUser()
          this.buttonName='Skapa'
          this.pageTitle='Skapa en ny användare'
          this.modeCreate=true
        }

    },
    destroyed() {
      this.clearUser()
    }

}
</script>

<style>
.btn-fixed-width {
    width: 100px;
  }
</style>