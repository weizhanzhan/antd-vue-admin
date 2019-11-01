import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
Vue.use(VueRouter)
/**
 *
 */
export const constantRoutes = [{
        path: '/login',
        name: 'login',
        component: r => require.ensure([], () => r(require('@/views/login'))),
        hidden: true
    },
    {
        path: '/',
        component: r => require.ensure([], () => r(require('@/views/layout'))),
        redirect: '/dashboard',
        name: 'dashBoard',
        meta: {},
        children: [{
            path: 'dashboard',
            name: 'dashBoardIndex',
            component: r => require.ensure([], () => r(require('@/views/dashboard'))),
            meta: {
                title: 'dashboard'
            }
        }]
    },
    {
        path: '/components',
        component: r => require.ensure([], () => r(require('@/views/layout'))),
        redirect: '/components/index',
        name: 'components',
        alwaysShow: true,
        meta: {
            title: 'component'
        },
        children: [{
            path: 'index',
            name: 'componentsIndex',
            component: r => require.ensure([], () => r(require('@/views/ant-components'))),
            meta: {
                title: 'antdComponent'
            }
        }]
    },
    {
        path: '/account',
        component: r => require.ensure([], () => r(require('@/views/layout'))),
        redirect: '/account/index',
        name: 'account',
        meta: {},
        children: [{
            path: 'index',
            name: 'AccountIndex',
            component: r => require.ensure([], () => r(require('@/views/account'))),
            meta: {
                title: 'account'
            }
        }]
    },
    {
        hidden: true,
        path: 'error',
        component: r => require.ensure([], () => r(require('@/views/layout'))),
        redirect: '/error/404',
        name: '404',
        meta: {},
        children: [{
            path: 'index',
            name: '404',
            component: r => require.ensure([], () => r(require('@/views/error/404'))),
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
                component: r => require.ensure([], () => r(require('@/views/blog'))),
                meta: {
                    roles: ['admin', 'user'],
                    title: 'blogList'
                }
            },
            {
                path: 'create',
                name: 'blogCreate',
                component: r => require.ensure([], () => r(require('@/views/blog/create'))),
                meta: {
                    roles: ['admin'],
                    title: 'writeBlog'
                }
            },
            {
                path: 'category',
                name: 'blogCategory',
                component: r => require.ensure([], () => r(require('@/views/blog/category'))),
                meta: {
                    roles: ['admin'],
                    title: 'category'
                },
                children: [{
                        path: 'category',
                        name: 'blogCategory',
                        component: r => require.ensure([], () => r(require('@/views/blog/category'))),
                        meta: {
                            roles: ['admin'],
                            title: 'category'
                        }
                    }

                ]
            }
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
            component: r => require.ensure([], () => r(require('@/views/system/user'))),
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
const Router = new VueRouter({
    routes: [
        ...constantRoutes
    ],
    mode: 'history'
})
export default Router
