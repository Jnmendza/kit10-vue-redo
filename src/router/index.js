import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Details from '../views/Details.vue';
import Cart from '../views/Cart.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
