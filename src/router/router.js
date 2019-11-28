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
var index_vue_1 = __importDefault(require("../views/layout/index.vue"));
//alwaysShow 控制当二级菜单只有一级的时候要不要展示 二级菜单 false的话只展示一级的二级菜单 true正常显示
vue_1.default.use(vue_router_1.default);
exports.constantRoutes = [{
        path: '/login',
        name: 'login',
        component: function () { return Promise.resolve().then(function () { return __importStar(require('../views/login/index.vue')); }); },
        hidden: true
    },
    {
        path: '/',
        component: index_vue_1.default,
        redirect: '/dashboard',
        name: 'dashBoard',
        meta: {
            firstChildName: 'dashBoardIndex'
        },
        children: [{
                path: 'dashboard',
                name: 'dashBoardIndex',
                component: function () { return Promise.resolve().then(function () { return __importStar(require('../views/dashboard/index.vue')); }); },
                meta: {
                    title: 'dashboard'
                }
            }]
    },
    {
        path: '/components',
        component: index_vue_1.default,
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
                component: function () { return Promise.resolve().then(function () { return __importStar(require('../views/ant-components/index.vue')); }); },
                meta: {
                    title: 'antdComponent'
                }
            }]
    },
    {
        path: '/account',
        component: index_vue_1.default,
        redirect: '/account/index',
        name: 'account',
        meta: {
            firstChildName: 'dashBoardIndex',
        },
        children: [{
                path: 'index',
                name: 'AccountIndex',
                component: function () { return Promise.resolve().then(function () { return __importStar(require('../views/account/index.vue')); }); },
                meta: {
                    title: 'account'
                }
            }]
    },
];
exports.asyncRoutes = [{
        path: '/blog',
        component: index_vue_1.default,
        name: 'blog',
        redirect: '/blog/index',
        meta: {
            roles: ['admin', 'user'],
            title: 'blogData'
        },
        children: [{
                path: 'index',
                name: 'blogIndex',
                component: function () { return Promise.resolve().then(function () { return __importStar(require('../views/blog/index.vue')); }); },
                meta: {
                    roles: ['admin', 'user'],
                    title: 'blogList'
                }
            },
            {
                path: 'create',
                name: 'blogCreate',
                component: function () { return Promise.resolve().then(function () { return __importStar(require('../views/blog/create/index.vue')); }); },
                meta: {
                    roles: ['admin'],
                    title: 'writeBlog'
                }
            },
            {
                path: 'category',
                name: 'blogCategory',
                component: function () { return Promise.resolve().then(function () { return __importStar(require('../views/blog/category/index.vue')); }); },
                meta: {
                    roles: ['admin'],
                    title: 'category'
                }
            },
            {
                path: 'recycle-bin',
                name: 'recycleBin',
                component: function () { return Promise.resolve().then(function () { return __importStar(require('../views/blog/recycle_bin/index.vue')); }); },
                meta: {
                    roles: ['admin'],
                    title: 'recycleBin'
                }
            },
        ]
    },
    {
        path: '/system',
        component: index_vue_1.default,
        name: 'system',
        redirect: '/system/user',
        alwaysShow: true,
        meta: {
            title: 'system'
        },
        children: [{
                path: 'user',
                component: function () { return Promise.resolve().then(function () { return __importStar(require('../views/system/user/index.vue')); }); },
                name: 'user',
                meta: {
                    roles: ['admin', 'user'],
                    title: 'user'
                }
            }]
    },
    {
        path: '*',
        name: 'error',
        hidden: true,
        component: index_vue_1.default,
        redirect: 'error/404',
        children: [{
                path: 'error/404',
                name: '404',
                component: function () { return Promise.resolve().then(function () { return __importStar(require('../views/error/404/index.vue')); }); },
            }]
    }
];
exports.default = new vue_router_1.default({
    routes: exports.constantRoutes,
    mode: 'history'
});
