import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Index from '@/views/Index.vue'
import Medicine from '@/views/Medicine.vue'
import Zhuce from '@/views/Zhuce.vue'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/medicine',
          name: 'medicine',
          component: Medicine,
        },
        {
          path: '/home',
          name: 'home',
          component: Home,
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    { 
      path: '/zhuce',
      name: 'zhuce',
      component: Zhuce
    }
    
  ]
})

export default router
