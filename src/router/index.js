import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Index from '@/views/Index.vue'
import Zhuce from '@/views/Zhuce.vue'
import Home from '@/views/Home.vue'
import User from '@/views/User.vue'
import MedicineCj from '@/views/MedicineCj.vue'
import MedicineGl from '@/views/MedicineGl.vue'
import MedicineGy from '@/views/MedicineGy.vue'
import DepartmentMgt from '@/views/DepartmentMgt.vue'
import Pay from '@/views/Pay.vue'
import DoctorZL from '@/views/DoctorZL.vue'



import UserList from '@/views/UserList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
        },
        {
          path: 'medicine/cj',
          name: 'medicineCj',
          component: MedicineCj,
        },
        {
          path: 'medicine/gl',
          name: 'medicineGl',
          component: MedicineGl,
        },
        {
          path: 'medicine/gy',
          name: 'medicineGy',
          component: MedicineGy,
        },
        {
          path: 'user',
          name: 'user',
          component: User,
        },
        {
          path: 'departmentmgt',
          name: 'departmentmgt',
          component: DepartmentMgt,
        },
        {
          path: 'pay',
          name: 'pay',
          component: Pay,
        },
        {
          path: 'doctorzl',
          name: 'doctorzl',
          component: DoctorZL,
        },
        {
          path:'user/list',
          name:'userlist',
          component:UserList
        }
        
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



