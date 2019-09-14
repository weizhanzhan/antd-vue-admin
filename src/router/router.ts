import Vue from 'vue'
import VueRouter, { RouterOptions } from 'vue-router'
Vue.use(VueRouter)

export const constantRoutes:any = [
    {
        path: '/login',
        name: 'login',
        component:()=>import('../views/login/index.vue'),
        hidden: true
      
    },
    {
        path: '/',
        component: import('../views/layout/index.vue'),
        redirect: '/dashboard',
        name: 'dashBoard',
        meta: {
            firstChildName: 'dashBoardIndex'
        },
        children: [{
            path: 'dashboard',
            name: 'dashBoardIndex',
            component:import('../views/dashboard/index.vue'),
            meta: {
                title: 'Dashboard'
            }
        }]
    },
    {
        path: '/components',
        component: import('../views/layout/index.vue'),
        redirect: '/components/index',
        name: 'components',
        meta: {
            firstChildName: 'dashBoardIndex'
        },
        children: [{
            path: 'index',
            name: 'componentsIndex',
            component: import('../views/ant-components/index.vue'), 
            meta: {
                title: 'Components'
            }
        }]
    },
    {
        path: '/account',
        component:  import('../views/layout/index.vue'),
        redirect: '/account/index',
        name: 'account',
        meta: {
            firstChildName: 'dashBoardIndex'
        },
        children: [{
            path: 'index',
            name: 'AccountIndex',
            component:  import('../views/account/index.vue'),  
            meta: {
                title: '个人中心'
            }
        }]
    },
    // {

    //     path: '*', hidden: true, name: '404', component:  import('../views/404/index.vue'),

    // }
    // {
    //     hidden: true,
    //     path: '/404',
    //     component: r => require.ensure([], () => r(require('@/views/layout'))),
    //     redirect: '/404/index',
    //     name: '404',
    //     meta: {
    //         firstChildName: 'dashBoardIndex'
    //     },
    //     children: [{
    //         path: 'index',
    //         name: '404',
    //         component: r => require.ensure([], () => r(require('@/views/404'))),
    //         meta: {
    //             title: '404'
    //         }
    //     }]
    // }

]

export const asyncRoutes = [
    {
        path: '/blog',
        component: import('../views/layout/index.vue'),
        name: 'blog',
        redirect: '/blog/index',
        meta: {
            roles: ['admin', 'user'],
            title: 'Blog'
        },
        children: [
            {
                path: 'index',
                name: 'blogIndex',
                component:  import('../views/blog/index.vue'),   
                meta: {
                    roles: ['admin', 'user'],
                    title: '博客主页'
                }
            },
            {
                path: 'create',
                name: 'blogCreate',
                component:import('../views/blog/create/index.vue'),
                meta: {
                    roles: ['admin'],
                    title: '写博客'
                }
            },
            {
                path: 'category',
                name: 'blogCategory',
                component:  import('../views/blog/category/index.vue'),
                meta: {
                    roles: ['admin'],
                    title: '分类'
                }
            }

        ]

    },
    // {
    //     path: '*',
    //     redirect: '/404',
    //     hidden: true
    // }
]
export default new VueRouter({
    routes:constantRoutes,
    mode: 'history'
})

