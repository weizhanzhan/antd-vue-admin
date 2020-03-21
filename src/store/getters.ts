const getters = {
    user: (state:any) => state.user.user,
    roles: (state:any) => state.user.roles,
    addRoutes: (state:any) => state.permission.addRoutes,
    routes: (state:any) => state.permission.routes
}

export default getters
