import router from './router'
import store from './store'
import { getToken } from '@/utils/auth'
import { message } from 'ant-design-vue'

const whiteList = ['/login', '/auth-redirect']

function hasPermission(roles:Array<string>, permissionRoles:Array<string>) {
  if (roles.includes('admin')) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

router.beforeEach((to, from, next) => {
  console.log(store.getters.addRoutes)
  if (getToken()) {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetUserInfo').then(info => {
          const roles = info.role
          store.dispatch('GenerateRoutes', {
              roles
            }) // 根据用户权限生产可访问的路由表
            .then(() => {
              router.addRoutes(store.getters.addRoutes)
              next({
                path: to.path, query: to.query, params: to.params,
                replace: true
              })
            })
        })
      } else {
         // 当如果一个角色登录过后，再次有登录的话回去再次验证该角色是否有权限进入该路由
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          message.error('你没有权限')
          next({ path: '/login', replace: true, query: {}})
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      message.error('身份已过期！请重新登陆')
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
    }
  }
})
