import Login from '@/components/views/login.vue'
import Signup from '@/components/views/Signup.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/views/Dashboard.vue'
import Profile from '../components/views/Profile.vue'
const routes = [
  { path: '/', name: 'login2', component: Login },
  { path: '/login', name: 'login', component: Login },
  { path: '/signup', name: 'signup', component: Signup },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile', name: 'profile', component: Profile },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
