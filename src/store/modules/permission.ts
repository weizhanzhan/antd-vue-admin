import { asyncRoutes, constantRoutes } from '@/router'

function hasPermission(roles:any, route:any) {
    if (route.meta && route.meta.roles) {
        return roles.some((role:any) => route.meta.roles.includes(role))
    }
    return true
}

function filterAsyncRoutes(routes:any, roles:any) {
    const res:any = []
    routes.forEach((route:any) => {
       const tmp = { ...route }
       if (hasPermission(roles, tmp)) {
            if (tmp.children) { tmp.children = filterAsyncRoutes(tmp.children, roles) }// 把该route的children过滤，把符合条件的赋值给他的children
            res.push(tmp)
       }
    })
    return res
}

const permission = {
    state: {
        routes: [],
        addRoutes: []
    },
    mutations: {
        SET_ROUTES: (state:any, routes:any) => {
            state.addRoutes = routes
            state.routes = constantRoutes.concat(routes)
        }
    },
    actions: {
        GenerateRoutes(context:any, data:any) {
            return new Promise(resolve => {
                const { roles } = data
                let accessedRoutes
                if (roles.includes('admin')) {
                  accessedRoutes = asyncRoutes
                } else {
                  accessedRoutes = filterAsyncRoutes(asyncRoutes, [roles])
                }
                context.commit('SET_ROUTES', accessedRoutes)
                resolve(accessedRoutes)
            })
        }
    }
}
export default permission
