import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: "Página principal"
    },
    component: Home
  },
  {
    path: '/Usuário',
    name: 'UserPage',
    meta: {
      title: "Página de Usuário"
    },
    component: () => import('../Pages/UserPage.vue')
  },
  {
    path: '/Categorias',
    name: 'Categories',
    meta: {
      title: "Categorias"
    },
    component: () => import('../Pages/Categories.vue')
  },
  {
    path: '/Categorias/Subcategoria',
    name: 'Subcategory',
    meta: {
      title: "Subcategorias"
    },
    component: () => import('../Pages/Subcategories/Subcategory.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
