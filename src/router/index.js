import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Report from '@/views/Report.vue'
import Edit from '@/views/Edit.vue'
import Add from '@/views/Add.vue'
import HomeNew from '@/views/HomeNew.vue'
import Red from '@/views/Red.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Red-Crescent',
    name: 'Red',
    component: Red
  },
  {
    path: '/hospital',
    name: 'HomeNew',
    component: HomeNew
  },
  {
    path: '/report',
    name: 'Report',
    component: Report
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
