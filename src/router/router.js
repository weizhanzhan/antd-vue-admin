"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(require("vue"));
var vue_router_1 = __importDefault(require("vue-router"));
vue_1.default.use(vue_router_1.default);
exports.constantRoutes = [
    {
        path: '/login',
        name: 'login',
        component: function () { return Promise.resolve().then(function () { return __importStar(require('../views/login/index.vue')); }); },
        meta: {
            hidden: true
        }
    },
    {
        path: '/',
        component: Promise.resolve().then(function () { return __importStar(require('../views/layout/index.vue')); }),
        redirect: '/dashboard',
        name: 'dashBoard',
        meta: {
            firstChildName: 'dashBoardIndex'
        },
        children: [{
                path: 'dashboard',
                name: 'dashBoardIndex',
                component: Promise.resolve().then(function () { return __importStar(require('../views/dashboard/index.vue')); }),
                meta: {
                    title: 'Dashboard'
                }
            }]
    },
    {
        path: '/components',
        component: Promise.resolve().then(function () { return __importStar(require('../views/layout/index.vue')); }),
        redirect: '/components/index',
        name: 'components',
        meta: {
            firstChildName: 'dashBoardIndex'
        },
        children: [{
                path: 'index',
                name: 'componentsIndex',
                component: Promise.resolve().then(function () { return __importStar(require('../views/ant-components/index.vue')); }),
                meta: {
                    title: 'Components'
                }
            }]
    },
    {
        path: '/account',
        component: Promise.resolve().then(function () { return __importStar(require('../views/layout/index.vue')); }),
        redirect: '/account/index',
        name: 'account',
        meta: {
            firstChildName: 'dashBoardIndex'
        },
        children: [{
                path: 'index',
                name: 'AccountIndex',
                component: Promise.resolve().then(function () { return __importStar(require('../views/account/index.vue')); }),
                meta: {
                    title: '个人中心'
                }
            }]
    },
    {
        path: '*', hidden: true, name: '404', component: Promise.resolve().then(function () { return __importStar(require('../views/404/index.vue')); }),
    }
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
];
exports.asyncRoutes = [
    {
        path: '/blog',
        component: Promise.resolve().then(function () { return __importStar(require('../views/layout/index.vue')); }),
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
                component: Promise.resolve().then(function () { return __importStar(require('../views/blog/index.vue')); }),
                meta: {
                    roles: ['admin', 'user'],
                    title: '博客主页'
                }
            },
            {
                path: 'create',
                name: 'blogCreate',
                component: Promise.resolve().then(function () { return __importStar(require('../views/blog/create/index.vue')); }),
                meta: {
                    roles: ['admin'],
                    title: '写博客'
                }
            },
            {
                path: 'category',
                name: 'blogCategory',
                component: Promise.resolve().then(function () { return __importStar(require('../views/blog/category/index.vue')); }),
                meta: {
                    roles: ['admin'],
                    title: '分类'
                }
            }
        ]
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
];
exports.default = new vue_router_1.default({
    routes: exports.constantRoutes,
    mode: 'history'
});
