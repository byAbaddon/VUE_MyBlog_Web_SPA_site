import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import LoginView from '@/views/LoginView'
import RegisterView from '@/views/RegisterView'
import AboutView from '@/views/AboutView'

// import AllPostsComponent from '@/components/AllPostsComponent'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },

  {
    path: '/posts',
    name: 'posts',
    component: () => import('@/components/AllPostsComponent')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('@/components/CreateComponent')
  },
  {
    path: '/statistic',
    name: 'statistic',
    component: () => import('@/components/StatisticComponent')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
