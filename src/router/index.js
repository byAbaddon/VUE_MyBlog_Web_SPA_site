import { createRouter, createWebHistory } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent'

const routes = [
  {
    path: '/header',
    name: 'header',
    component: HeaderComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
