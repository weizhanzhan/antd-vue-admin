const getters = {
    user:state=> state.user.user,
    roles: state => state.user.roles,
    addRoutes: state => state.permission.addRoutes,
    routes: state => state.permission.routes
}

export default getters