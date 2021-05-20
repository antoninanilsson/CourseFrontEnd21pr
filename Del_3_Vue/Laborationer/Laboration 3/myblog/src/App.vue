<template>
  <div id="app">
    <Navbar />
    <Hero v-if="hero.isVisible" @closeHero="closeHero" :hero="hero" />
    <div class="container"> 
         <router-view   @updateHero="updateHero" />
   
    </div>
   
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default {
  components:{
    Navbar,
    Hero
  },
  data () {
    return {
    //"userId": "Number",
    //"id": "Number",
    //"title": "String ",
    //"body": "String"
     
      hero :{
        isVisible:false,
        mainMessage:'',
        extraMessage:''
      },
      showHero:true // använda visning av hero eller inte
     
    }
  },
  methods : { 
    
  // stänga hero med close knapp
    closeHero(){
      this.hero.isVisible=false
    },

    // skicka information till hero
    updateHero(hero){
      this.hero.isVisible=hero.isVisible && this.showHero
      this.hero.mainMessage=hero.message
      this.hero.extraMessage=hero.extraMessage
    },

  },
 
}
</script>


<style>



</style>
