import Vue from 'vue'
import Vuex from 'vuex'
import mealsModule from './modules/mealsModule'
import ingredientsModule from './modules/ingredientsModule'
import weekmenuModule from './modules/weekmenuModule'
import searchParams from './modules/searchParams'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiId : process.env.VUE_APP_API_IDST,
    apiUrl :  process.env.VUE_APP_API_URL,
    apiKey :  process.env.VUE_APP_API_KEY,
    apiThema : process.env.VUE_APP_THEMA

  },
  getters : {
    apiId : state =>state.apiId,
    apiUrl : state => state.apiUrl,
    apiKey: state => state.apiKey,
    apiThema : state => state.apiThema ,
    apiImgUri:state=>state.apiImgUri


  },
  mutations: {
  },
  actions: {
  },
  modules: {
    mealsModule,
    ingredientsModule,
    weekmenuModule,
    searchParams
  }
})
