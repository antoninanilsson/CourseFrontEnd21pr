<template>
  <div id="app">
    <Navbar />   
    <div class="container">
         <router-view/> 
    </div>  
    

  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
    name:'app',
    components:{
      Navbar
    }

}

</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


</style>
