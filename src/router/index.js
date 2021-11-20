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
    path: '/Categorias/Subcategoria/Idiomas',
    name: 'Subcategory_Language',
    meta: {
      title: "Subcategorias - Idiomas"
    },
    component: () => import('../Pages/Subcategories/Subcategory_Language.vue')
  },
  {
    path: '/Categorias/Subcategoria/AtividadeFísica',
    name: 'Subcategory_Sports',
    meta: {
      title: "Subcategorias - Atividade Física"
    },
    component: () => import('../Pages/Subcategories/Subcategory_Sports.vue')
  },
  {
    path: '/Categorias/Subcategoria/Música',
    name: 'Subcategory_Music',
    meta: {
      title: "Subcategorias - Música"
    },
    component: () => import('../Pages/Subcategories/Subcategory_Music.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
