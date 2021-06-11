import Vue from 'vue'
import Vuex from 'vuex'
import mealsModule from './modules/mealsModule'
import ingredientsModule from './modules/ingredientsModule'
import weekmenuModule from './modules/weekmenuModule'
import searchParams from './modules/searchParams'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiId : process.env.VUE_APP_API_ID,
    apiUrl :  process.env.VUE_APP_API_URL,
    apiKey :  process.env.VUE_APP_API_KEY,
    themaLight :true

  },
  getters : {
    apiId : state =>state.apiId,
    apiUrl : state => state.apiUrl,
    apiKey: state => state.apiKey,
    themaLight : state => state.themaLight ,
    apiImgUri:state=>state.apiImgUri


  },
  mutations: {
    CHANGE_THEMA:(state)=>state.themaLight=!state.themaLight
  },
  actions: {
    changeThema : ({commit})=>{ commit('CHANGE_THEMA')},
  },
  modules: {
    mealsModule,
    ingredientsModule,
    weekmenuModule,
    searchParams
  }
})
