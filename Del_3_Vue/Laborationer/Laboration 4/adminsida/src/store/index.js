import Vue from 'vue'
import Vuex from 'vuex'
import usersModule from './modules/usersModule'
import authModule from './modules/authModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
 
  modules: {
    authModule,
    usersModule
  }
})
