<template>
  
<footer :class="['navbar', 'fixed-bottom','mt-5', themaLight ? 'navbar-light bg-light' :'navbar-dark bg-success']">
  <div class="container-fluid">
    <div id="edamam-badge" data-color="white"></div>
  </div>
</footer>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'Footer',
     computed :{
    ...mapGetters(['themaLight'])
  },

}
</script>

<style>

</style>