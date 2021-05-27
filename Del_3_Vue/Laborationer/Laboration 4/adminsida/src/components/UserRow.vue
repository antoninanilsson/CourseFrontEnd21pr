<template>

  
    <tr>
      <th scope="row">{{user.username}}</th>
      <td>{{userName}}</td>
      <td>{{user.email}}</td>
      <td>{{user.phone}}</td>
      <td>{{user.company}}</td>
      <td>
        <div  class="d-flex flex-column flex-md-row justify-content-end ">
          <router-link :to="`/users/${user.id}`">
          <button class="btn btn-sm btn-info btn-fixed-width my-2 me-2" >Redigera</button>
          </router-link>
          <button class="btn btn-sm btn-danger btn-fixed-width my-2" @click="deleteUserById(user.id)">Radera</button>
        </div>           
      </td>    
    </tr>
  
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'UserRow',
    props:['user'],
    computed: {
    userName() {
        return `${this.user.firstName} ${this.user.lastName}`
    }

    },
    methods: {
      ...mapActions(['deleteUserById']),
      

      
    }
}
</script>

<style>
.btn-fixed-width {
    width: 100px;
  }

</style>