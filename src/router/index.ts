import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/Auth/LoginView.vue'
import RegisterView from '@/views/Auth/RegisterView.vue'
import MyReservations from '@/views/MyReservations.vue'
import MyBalance from '@/views/MyBalance.vue'
import LandingView from '@/views/LandingView.vue'
import AdminDashboard from '@/views/Admin/AdminDashboard.vue'
import LoginAdmin from '@/views/Admin/LoginAdmin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: LandingView
    },
    {
      path: '/airbnbs',
      name: 'airbnbs',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/reservas',
      name: 'reservas',
      component: MyReservations
    },
    {
      path: '/balance',
      name: 'balance',
      component: MyBalance
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminDashboard
    },
    {
      path: '/admin-log',
      name: 'admin-log',
      component: LoginAdmin
    }
  ]
})

export default router
