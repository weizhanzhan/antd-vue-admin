import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

/**
 *
 */
export const constantRoutes = [
    {
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
                title: 'Dashboard'
            }
        }]
    },
    {
        path: '/components',
        component: r => require.ensure([], () => r(require('@/views/layout'))),
        redirect: '/components/index',
        name: 'components',
        alwaysShow: true,
        meta: { title: '组件' },
        children: [{
            path: 'index',
            name: 'componentsIndex',
            component: r => require.ensure([], () => r(require('@/views/ant-components'))),
            meta: {
                title: 'Antd组件'
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
                title: '个人中心'
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

export const asyncRoutes = [
    {
        path: '/blog',
        component: r => require.ensure([], () => r(require('@/views/layout'))),
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
                component: r => require.ensure([], () => r(require('@/views/blog'))),
                meta: {
                    roles: ['admin', 'user'],
                    title: '博客主页'
                }
            },
            {
                path: 'create',
                name: 'blogCreate',
                component: r => require.ensure([], () => r(require('@/views/blog/create'))),
                meta: {
                    roles: ['admin'],
                    title: '写博客'
                }
            },
            {
                path: 'category',
                name: 'blogCategory',
                component: r => require.ensure([], () => r(require('@/views/blog/category'))),
                meta: {
                    roles: ['admin'],
                    title: '分类'
                },
                children: [
                    {
                        path: 'category',
                        name: 'blogCategory',
                        component: r => require.ensure([], () => r(require('@/views/blog/category'))),
                        meta: {
                            roles: ['admin'],
                            title: '分类'
                        }
                    }

                ]
            }
        ]
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
