import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import User from '../views/User.vue'
import Userlist from '../views/Userlist.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'index',
      component:Index,
      children:[ 
        {
          path: 'user',
          name: 'user',//看病开诊
          component: User
          
        },
        {
          path:'user/list',
          name:'userlist', //患者库
          component:Userlist,
          
        }
      ]
    }
    
  ]
})

export default router
