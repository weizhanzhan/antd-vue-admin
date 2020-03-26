import {
  constantRoutes
} from '@/router'
const getComponent = require(`@/router/import_${process.env.NODE_ENV}`)
import Layout from '../../components/Layout/index.vue'
import moduleMenu from '../../config/router.config'

function hasPermission(roles: any, route: any) {
  if (route.meta && route.meta.roles) {
    return roles.some((role: any) => route.meta.roles.includes(role))
  }
  return true
}

function filterAsyncRoutes(routes: any, roles: any, moduleName: string, onlyChangeMetaModule:boolean = false) {
  const res: any = []
  routes.forEach((route: any) => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.component === 'Layout') { // 当组件是模板的时候 直接赋值模板文件
        tmp.component = Layout
      } else {
        tmp.component = getComponent(tmp.component) // 其他的根据组件路径去获取
      }
      if (moduleName) { // 当接受的模块名称存在，而且需要拼接path的时候才会拼接模块地址，这里主要是为了拼接一级菜单，二级菜单不用考虑
        if (!onlyChangeMetaModule) {
          tmp.path = '/' + moduleName + tmp.path
          tmp.redirect && (tmp.redirect = '/' + moduleName + tmp.redirect)
        }
        tmp.meta.module = moduleName
      }

      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles, moduleName, true)
      } // 把该route的children过滤，把符合条件的赋值给他的children
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
    SET_ROUTES: (state: any, routes: any) => {
      state.addRoutes = routes
      state.routes = constantRoutes.concat(routes)
    },
    SET_MODULE_MENU: (state: any, data: any) => {
      const {
        routes,
        moduleName
      } = data
      state.activeModuleMenu = routes
      state.activeModule = moduleName
    }
  },
  actions: {
    GenerateRoutes(context: any, data: any) {
      return new Promise(resolve => {
        const {
          roles
        } = data
        const accessedRoutes: Array < any > = []
        const moduleMenu = context.state.moduleMenu

        moduleMenu.forEach((item: any) => {
          const pass = filterAsyncRoutes(item.menus, [roles], item.name)
          accessedRoutes.push(...pass)
        })

        if (accessedRoutes.length) {
          // 设定默认'/'重定向地址 和 默认模块
          const { path } = accessedRoutes[0]
          // context.dispatch('handleModuleMenu', meta.module)
          accessedRoutes.unshift({ path: '/', redirect: path })
        }

        context.commit('SET_ROUTES', accessedRoutes)
        resolve(accessedRoutes)
      })
    },
    handleModuleMenu(context: any, changedModleName: any) {
      return new Promise((resolve, reject) => {
        try {
          const activeModuleMenus = context.state.addRoutes.filter((item: any) => item.meta && (item.meta.module === changedModleName))
          context.commit('SET_MODULE_MENU', { routes: activeModuleMenus, moduleName: changedModleName })
          resolve()
        } catch (error) {
          reject()
        }
      })
    }
  }
}
export default permission
