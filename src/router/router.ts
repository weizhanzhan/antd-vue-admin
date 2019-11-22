import Vue from 'vue'
import VueRouter, {
  RouterOptions
} from 'vue-router'
import Layout from '../views/layout/index.vue'
Vue.use(VueRouter)

export const constantRoutes: any = [{
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue'),
    hidden: true

  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'dashBoard',
    meta: {
      firstChildName: 'dashBoardIndex'
    },
    children: [{
      path: 'dashboard',
      name: 'dashBoardIndex',
      component: () => import('../views/dashboard/index.vue'),
      meta: {
        title: 'dashboard'
      }
    }]
  },
  {
    path: '/components',
    component: Layout,
    redirect: '/components/index',
    name: 'components',
    alwaysShow: true,
    meta: {
      firstChildName: 'dashBoardIndex',
      title: 'component'
    },
    children: [{
      path: 'index',
      name: 'componentsIndex',
      component: () => import('../views/ant-components/index.vue'),
      meta: {
        title: 'antdComponent'
      }
    }]
  },
  {
    path: '/account',
    component: Layout,
    redirect: '/account/index',
    name: 'account',
    meta: {
      firstChildName: 'dashBoardIndex'
    },
    children: [{
      path: 'index',
      name: 'AccountIndex',
      component: () => import('../views/account/index.vue'),
      meta: {
        title: 'account'
      }
    }]
  },
  {
    hidden: true,
    path: 'error',
    component: Layout,
    redirect: '/error/404',
    name: '404',
    meta: {},
    children: [{
      path: 'index',
      name: '404',
      component: () => import('../views/error/404/index.vue'),
      meta: {
        title: '404'
      }
    }]
  }

]

export const asyncRoutes = [{
    path: '/blog',
    component: Layout,
    name: 'blog',
    redirect: '/blog/index',
    meta: {
      roles: ['admin', 'user'],
      title: 'blogData'
    },
    children: [{
        path: 'index',
        name: 'blogIndex',
        component: () => import('../views/blog/index.vue'),
        meta: {
          roles: ['admin', 'user'],
          title: 'blogList'
        }
      },
      {
        path: 'create',
        name: 'blogCreate',
        component: () => import('../views/blog/create/index.vue'),
        meta: {
          roles: ['admin'],
          title: 'writeBlog'
        }
      },
      {
        path: 'category',
        name: 'blogCategory',
        component: () => import('../views/blog/category/index.vue'),
        meta: {
          roles: ['admin'],
          title: 'category'
        },
        children: [{
          path: 'category',
          name: 'blogCategory',
          component: () => import('../views/blog/category/index.vue'),
          meta: {
            roles: ['admin'],
            title: 'category'
          }
        }]
      },
      {
        path: 'recycle-bin',
        name: 'recycleBin',
        component: () => import('../views/blog/recycle_bin/index.vue'),
        meta: {
          roles: ['admin'],
          title: 'recycleBin'
        }
      },
    ]
  },
  {
    path: '/system',
    component: Layout,
    name: 'system',
    redirect: '/system/user',
    meta: {
      title: 'system'
    },
    children: [{
      path: 'user',
      component: () => import('../views/system/user/index.vue'),
      name: 'user',
      meta: {
        roles: ['admin', 'user'],
        title: 'user'
      }
    }]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]
export default new VueRouter({
  routes: constantRoutes,
  mode: 'history'
})