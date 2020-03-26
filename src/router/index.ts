import Vue from 'vue'
import VueRouter from 'vue-router'
// import Layout from '../components/Layout/index.vue'
Vue.use(VueRouter)
const getComponent = require(`./import_${process.env.NODE_ENV}`)

export const constantRoutes = [
  // {
  //   path: '/', redirect: '/dashboard'
  // },
  {
    path: '/login', name: 'login', component: getComponent('common/login/index')
  },
  {
    path: '*', name: '404', component: getComponent('common/error/404.vue')
  },
  {
    path: '/401', name: '401', component: getComponent('common/error/401.vue')
  }
]
export const asyncRoutes = [
  // {
  //   path: '/dashboard',
  //   component: Layout,
  //   redirect: '/dashboard/analysis',
  //   name: 'dashboard',
  //   meta: { title: 'dashboard' },
  //   alwaysShow: true,
  //   children: [
  //     {
  //       path: 'workplace',
  //       name: 'workplace',
  //       component: getComponent('business/dashboard/workplace'),
  //       meta: { title: 'workplace' }
  //     },
  //     {
  //       path: 'analysis',
  //       name: 'analysis',
  //       component: getComponent('business/dashboard/analysis'),
  //       meta: { title: 'analysis' }
  //     }
  //   ]
  // },
  // {
  //   path: '/customer',
  //   component: Layout,
  //   redirect: '/customer/list',
  //   name: 'customer',
  //   meta: { title: 'customer' },
  //   alwaysShow: true,
  //   children: [
  //     {
  //       path: 'datasheets',
  //       name: 'customerDatasheets',
  //       component: getComponent('business/customer'),
  //       meta: { title: 'datasheets' }
  //     }
  //   ]
  // }
  // {
  //   path: '/components',
  //   component: Layout,
  //   redirect: '/components/echarts',
  //   name: 'components',
  //   meta: { title: 'components' },
  //   alwaysShow: true,
  //   children: [
  //     {
  //       path: 'echarts',
  //       name: 'echarts',
  //       component: getComponent('system/components/echarts'),
  //       meta: { title: 'echarts' }
  //     }
  //   ]
  // }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes
})

export default router
