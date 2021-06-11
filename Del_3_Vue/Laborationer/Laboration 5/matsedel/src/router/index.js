import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import WeekMenu from '../views/WeekMenu'
import Meals from '../views/Meals'
import Ingredients from '../views/Ingredients'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/meals',
    name: 'Meals',
    component: Meals
  },
  
  {
    path: '/weekmenu',
    name: 'WeekMenu',
    component: WeekMenu
  },
  {
    path: '/ingredients',
    name: 'Ingredients',
    component: Ingredients
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
