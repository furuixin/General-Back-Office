import { createRouter, createWebHistory } from 'vue-router'
import loginPage from '@/views/login/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: loginPage
    }
  ]
})

export default router
