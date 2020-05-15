/* eslint-disable no-unused-vars */
import { State as UserState } from './modules/user'
import { State as PermissionState } from './modules/permission'

export interface State {
  user:UserState
  permission:PermissionState
}

const getters = {
  user: (state:State) => state.user.user,
  roles: (state:State) => state.user.roles,
  addRoutes: (state:State) => state.permission.addRoutes,
  // routes: (state:permissionState) => state.permission.routes,
  moduleMenu: (state:State) => state.permission.moduleMenu,
  activeModule: (state:State) => state.permission.activeModule,
  activeModuleMenu: (state:State) => state.permission.activeModuleMenu
}

export default getters
