const getters = {
    user: (state:any) => state.user.user,
    roles: (state:any) => state.user.roles,
    addRoutes: (state:any) => state.permission.addRoutes,
    routes: (state:any) => state.permission.routes,
    moduleMenu: (state:any) => state.permission.moduleMenu,
    activeModule: (state:any) => state.permission.activeModule,
    activeModuleMenu: (state:any) => state.permission.activeModuleMenu
}

export default getters
