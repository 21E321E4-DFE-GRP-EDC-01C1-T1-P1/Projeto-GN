import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Usuário',
    name: 'UserPage',
    component: () => import('../Pages/UserPage.vue')
  },
  {
    path: '/Categorias',
    name: 'Categories',
    component: () => import('../Pages/Categories.vue')
  },
  {
    path: '/Categorias/Subcategoria',
    name: 'Subcategory',
    component: () => import('../Pages/Subcategories/Subcategory.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
