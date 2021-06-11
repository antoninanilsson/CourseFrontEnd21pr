<template>
  <div >
    <h1>This is Home page</h1>
    <button class="btn btn-secondary mb-2  btn-width " type="button" @click="changeThema"><i class="bi bi-arrow-down-up"></i> Change Thema</button>
  </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'Home',
  components: {
    
  },
  computed :{
    ...mapGetters(['themaLight'])
  },
  methods:{
    ...mapActions(['changeThema'])
  }
 
}
</script>
