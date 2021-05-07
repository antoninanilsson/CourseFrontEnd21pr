<template>
  <div >
    <Navbar :enterpriseName=enterpriseName />
    <div class="container">
       
       <Alert :class="{'d-none':!alertVisible}" @btnCloseAlert="closeAlert" :alertText=alertText />
       <Hero  @btnClick="clickedComp" :enterpriseName=enterpriseName />
    </div>
    
    <Footbar :enterpriseName=enterpriseName />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Alert from './components/Alert'
import Footbar from './components/Footbar';

export default {
  name: 'App',
  components: {
    Navbar,
    Alert,
    Footbar,
    Hero
  },
  data (){
    return {
      alertVisible:false,
      alertText:'',
      enterpriseName:'myGarden'
    }
  },
  methods:{
    clickedComp(button, component){
            this.alertText= `You have pressed button ${button} in the component ${component}`
            console.log(this.alertText)
            this.alertVisible=true
      
        
    },
  
    closeAlert(){
      this.alertText=''
      this.alertVisible=false
    }
  }
}
</script>

<style>

</style>
