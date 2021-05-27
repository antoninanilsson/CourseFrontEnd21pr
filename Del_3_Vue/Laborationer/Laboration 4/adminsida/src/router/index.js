import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signin from '../views/Signin.vue'
import UserList from '../views/UserList.vue'
import UserCard from '../views/UserCard.vue'
import store from '../store/index.js';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth/signin',
    name: 'Signin',
    component: Signin,
    meta: { login: true }
  },
  {
    path: '/users',
    name: 'UserList',
    component: UserList,
    meta: { authorize: true }
  },
  {
    path: '/users/:id',
    name: 'UserCard',
    component: UserCard,
    props:true,
    meta: { authorize: true }
  },

  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {

  // undvika navigering till användarsidor om inte påloggad
  //tilfällig komment för att testa
  if (to.matched.some(record => record.meta.authorize)) {
     if (!store.getters.adminUser.loggedIn) {
        next({
      path: '/auth/signin',
      query: { redirect: to.fullPath }
    })
   } else {
    next()
   } 
  } else { next() }

// undvika navigering till singin sidan om admin redan påloggad

  if (to.matched.some(record => record.meta.login)) {
    if (store.getters.adminUser.loggedIn) {
       next({
     path: '/',
     query: { redirect: to.fullPath }
   })
  } else {
   next()
  } 
 } else { next() }

})

export default router
