import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth.vue'
import Search from '../views/Main.vue'
import Searched from '../views/Searched.vue'
import Favorites from "../views/Favorites";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Auth
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/searched',
    name: 'Searched',
    component: Searched
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
]

const router = new VueRouter({
  routes
})

export default router
