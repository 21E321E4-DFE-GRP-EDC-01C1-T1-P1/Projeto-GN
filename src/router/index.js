import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/usuario',
    name: 'userpage',
    component: () => import('../Pages/UserPage.vue')
  },
  {
    path: '/categorias',
    name: 'categories',
    component: () => import('../Pages/Categories.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
