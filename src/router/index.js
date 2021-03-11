import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    redirect:'/index',
    component: () => import('../layout/index'),
    children:[
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/loan-input',
        name: 'loan-input',
        component: () => import('../views/loan-input/index')
      },
      // 贷款审批
      {
        path: '/loan-approve',
        name: 'loan-approve',
        component: () => import('../views/loan-approve/index.vue'),
        children:[
          // 初审
          {
            path: 'first',
            name: 'first',
            component: () => import('../views/loan-approve/first.vue'),
          },
          // 终审
          {
            path: 'end',
            name: 'end',
            component: () => import('../views/loan-approve/end.vue'),
          }
        ]
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
