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
      redirect:'/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
          meta: {
            breadcrumbs: ['首页']
          }
        },
        {
          path: 'medicinecj',
          name: 'medicinecj',
          component: MedicineCj,
          meta: {
            breadcrumbs: ['药品','厂家管理']
          }
        },
        {
          path: 'medicinegl',
          name: 'medicinegl',
          component: MedicineGl,
          meta: {
            breadcrumbs: ['药品','药品管理']
          }
        },
        {
          path: 'medicinegy',
          name: 'medicinegy',
          component: MedicineGy,
          meta: {
            breadcrumbs: ['药品','供应商管理']
          }
        },
        {
          path: 'user',
          name: 'user',
          component: User,
          meta: {
            breadcrumbs: ['看病就诊','新开就诊']
          }
        },
        {
          path:'userlist',
          name:'userlist',
          component:UserList,
          meta: {
            breadcrumbs: ['看病就诊','患者库']
          }
        },
        {
          path:'patienttreatment',
          name:'patienttreatment',
          component:PatientTreatment,
          meta: {
            breadcrumbs: ['医生管理']
          }
        },
        {
          path:'doctorzL',
          name:'doctorzL',
          component:DoctorZL,
          meta: {
            breadcrumbs: ['医生管理','医生资料']
          }
        },
        {
          path:'departmentmgt',
          name:'departmentmgt',
          component:DepartmentMgt,
          meta: {
            breadcrumbs: ['科室管理']
          }
        },
        {
          path:'guaHao',
          name:'guaHao',
          component:GuaHao,
          meta: {
            breadcrumbs: ['挂号']
          }
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



