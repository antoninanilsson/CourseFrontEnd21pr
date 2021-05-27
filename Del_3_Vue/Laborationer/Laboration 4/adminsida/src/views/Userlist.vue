<template>
<div class="container-lg">
<h2>Registrerade användare</h2>
<router-link :to="`/users/0`">
    <button class="btn btn-info"> Ny användare </button>
</router-link>

<table class="table table-sm  table-hover">
       <thead>
                <tr>
                  <th scope="col">Användarnamn</th>
                  <th scope="col">Namn</th>
                  <th scope="col">Email</th>
                  <th scope="col">Tel</th>
                  <th scope="col">Företag</th>
                  <th scope="col"></th>
                </tr>
        </thead>
        <tbody>
                <UserRow v-for="user in users" :key="user.id" :user=user />
                
        </tbody>
</table>
</div>
</template>

<script>

import {  mapGetters } from 'vuex'
import UserRow from '../components/UserRow'
export default {
  name:'UserList',

  components: {
     UserRow
   },
    
    computed: {
      ...mapGetters(['users'])
      
    },
    
   
}


</script>

<style>

</style>