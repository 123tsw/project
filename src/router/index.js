import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Index from '@/views/Index.vue'
import Zhuce from '@/views/Zhuce.vue'
import Home from '@/views/Home.vue'
import User from '@/views/User.vue'
import MedicineCj from '@/views/MedicineCj.vue'
import MedicineGl from '@/views/MedicineGl.vue'
import MedicineGy from '@/views/MedicineGy.vue'
import UserList from '@/views/UserList.vue'
import PatientTreatment from '@/views/PatientTreatment.vue'
import DoctorZL from '@/views/DoctorZL.vue'
import DepartmentMgt from '@/views/DepartmentMgt.vue'
import GuaHao from '@/views/GuaHao.vue'

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
          path: 'medicinecj',
          name: 'medicinecj',
          component: MedicineCj,
        },
        {
          path: 'medicinegl',
          name: 'medicinegl',
          component: MedicineGl,
        },
        {
          path: 'medicinegy',
          name: 'medicinegy',
          component: MedicineGy,
        },
        {
          path: 'user',
          name: 'user',
          component: User,
        },
        {
          path:'userlist',
          name:'userlist',
          component:UserList
        },
        {
          path:'patienttreatment',
          name:'patienttreatment',
          component:PatientTreatment
        },
        {
          path:'doctorzL',
          name:'doctorzL',
          component:DoctorZL
        },
        {
          path:'departmentmgt',
          name:'departmentmgt',
          component:DepartmentMgt
        },
        {
          path:'guaHao',
          name:'guaHao',
          component:GuaHao
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



