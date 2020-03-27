import Layout from '../../components/Layout/index.vue'
import moduleMenu from '../../config/router.config'
const getComponent = require(`@/router/import_${process.env.NODE_ENV}`)

interface PermissionState {
  addRoutes:Array<ModuleMenuItem>
  moduleMenu:Array<ModuleMenu>
  activeModuleMenu:Array<ModuleMenuItem>
  activeModule:string
}

interface ModuleMenu {
  name:string,
  menus:Array<ModuleMenuItem>
}
interface ModuleMenuItem{
  path: string
  component: any
  redirect: string
  name: string
  meta: {
    title:string,
    module:string,
    roles:Array<string>
  },
  alwaysShow: boolean,
  children:Array<ModuleMenuItem>
}

class FilterPassedRoute {
  public route:ModuleMenuItem;
  private roles: Array<string>
  private moduleName:string
  private onlyChangeMetaModule:boolean

  constructor(route:ModuleMenuItem, roles:Array<string>, moduleName:string, onlyChangeMetaModule:boolean) {
    this.route = route
    this.roles = roles
    this.moduleName = moduleName
    this.onlyChangeMetaModule = onlyChangeMetaModule
    this.handHasModuleName()
    this.handHasChildren()
    this.handleImportComponent()
  }
  handHasModuleName() {
    const { moduleName, onlyChangeMetaModule, route: { path, redirect }} = this
    if (moduleName) {
      if (!onlyChangeMetaModule) {
        this.route.path = `/${moduleName}${path}`
        redirect && (this.route.redirect = `/${moduleName}${redirect}`)
      }
      this.route.meta.module = moduleName
    }
  }

  handHasChildren() {
    const { moduleName, roles, route: { children }} = this
    if (children) {
      this.route.children = filterAsyncRoutes(children, roles, moduleName, true)
    }
  }

  handleImportComponent() {
    const { component } = this.route
    this.route.component = component === 'Layout' ? Layout : getComponent(component)
  }

  get processedRoute() {
    return this.route
  }
}
function hasPermission(roles: Array<string>, route: ModuleMenuItem) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  }
  return true
}

/**
 * @param routes -全部需要处理路由
 * @param roles -登录用户的角色
 * @param moduleName -路由对应的模块
 * @param onlyChangeMetaModule -路由地址是否要拼接模块名称 一般一级路由需要 子路由不需要添加
 * @description -当组件是模板的时候 直接赋值模板文件 其他的根据组件路径去获取,方法最后把符合条件的路由存到vuex
 */
function filterAsyncRoutes(routes: Array<ModuleMenuItem>, roles: Array<string>, moduleName: string, onlyChangeMetaModule:boolean = false) {
  const filterPassRoute: Array<ModuleMenuItem> = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      const passedRoute = new FilterPassedRoute(route, roles, moduleName, onlyChangeMetaModule)
      filterPassRoute.push(passedRoute.processedRoute)
    }
  })
  return filterPassRoute
}

const permission = {
  state: {
    addRoutes: [],
    moduleMenu,
    activeModule: '',
    activeModuleMenu: []
  },
  mutations: {
    SET_ROUTES: (state: PermissionState, routes: Array<ModuleMenuItem>) => {
      state.addRoutes = routes
    },
    SET_MODULE_MENU: (state: PermissionState, data: {
      routes:Array<ModuleMenuItem>
      moduleName:string
    }) => {
      const { routes, moduleName } = data
      state.activeModuleMenu = routes
      state.activeModule = moduleName
    }
  },
  actions: {
    GenerateRoutes(context: any, data:{ roles: string }) {
      return new Promise(resolve => {
        const accessedRoutes: Array<any> = []
        const moduleMenu = context.state.moduleMenu

        moduleMenu.forEach((item: ModuleMenu) => {
          const pass = filterAsyncRoutes(item.menus, [data.roles], item.name)
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
