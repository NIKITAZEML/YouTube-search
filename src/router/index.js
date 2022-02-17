import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Auth
  },
]

const router = new VueRouter({
  routes
})

export default router
