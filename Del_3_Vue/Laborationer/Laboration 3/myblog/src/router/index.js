import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Create from '../views/CreatePost.vue'
import Show from '../views/ShowPost.vue'
import Preview from '../views/PreviewPosts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/show/:id',
    name: 'Show',
    component: Show
  },

  {
    path: '/preview',
    name: 'Preview',
    component: Preview
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
