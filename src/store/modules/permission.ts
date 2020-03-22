import { constantRoutes } from '@/router'
const getComponent = require(`@/router/import_${process.env.NODE_ENV}`)
import Layout from '../../components/Layout/index.vue'
import moduleMenu from '../../config/router.config'

function hasPermission(roles:any, route:any) {
    if (route.meta && route.meta.roles) {
        return roles.some((role:any) => route.meta.roles.includes(role))
    }
    return true
}

function filterAsyncRoutes(routes:any, roles:any, moduleName:string) {
    const res:any = []
    routes.forEach((route:any) => {
       const tmp = { ...route }
       if (hasPermission(roles, tmp)) {
            if (tmp.component === 'Layout') {
                tmp.component = Layout
            } else {
                tmp.component = getComponent(tmp.component)
            }
            if (moduleName) { tmp.path = '/' + moduleName + tmp.path }
            if (tmp.children) { tmp.children = filterAsyncRoutes(tmp.children, roles, '') }// 把该route的children过滤，把符合条件的赋值给他的children
            res.push(tmp)
       }
    })
    return res
}

const permission = {
    state: {
        routes: [],
        addRoutes: [],
        moduleMenu,
        activeModule: '',
        activeModuleMenu: []
    },
    mutations: {
        SET_ROUTES: (state:any, routes:any) => {
            state.addRoutes = routes
            state.routes = constantRoutes.concat(routes)
        },
        SET_MODULE_MENU: (state:any, data:any) => {
            const { routes, moduleName } = data
            state.activeModuleMenu = routes
            state.activeModule = moduleName
        }
    },
    actions: {
        GenerateRoutes(context:any, data:any) {
            return new Promise(resolve => {
                const { roles } = data
                const accessedRoutes:Array<any> = []
                const moduleMenu = context.state.moduleMenu

                moduleMenu.forEach((item:any) => {
                    const pass = filterAsyncRoutes(item.menus, [roles], item.name)
                    accessedRoutes.push(...pass)
                })

                if (moduleMenu.length) {
                    context.dispatch('handleModuleMenu', moduleMenu[0].name)
                }

                context.commit('SET_ROUTES', accessedRoutes)
                resolve(accessedRoutes)
            })
        },
        handleModuleMenu(context:any, changedModleName:any) {
            return new Promise((resolve, reject) => {
                const activeModule = context.state.moduleMenu.find((item:any) => item.name === changedModleName)
                if (activeModule) {
                    context.commit('SET_MODULE_MENU', {
                        routes: activeModule.menus,
                        moduleName: changedModleName
                    })
                    resolve()
                } else {
                    reject()
                }
            })
        }
    }
}
export default permission
