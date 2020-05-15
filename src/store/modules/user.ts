/* eslint-disable no-unused-vars */
import { loginByUsername, getUserInfo } from '@/api/login'
import { setToken, removeToken } from '@/utils/auth'
import { LoginInfo, UserInfo } from '@/interface/api/login'
import { Commit } from 'vuex'
import { message } from 'ant-design-vue'
export interface State {
  user: UserInfo
  roles: Array < string >
  token: string
}
const user = {
  state: {
    user: {},
    roles: [],
    token: ''
  },
  mutations: {
    SET_TOKEN(state: State, token: string) {
      state.token = token
    },
    SET_USER_INFO(state: State, info: UserInfo) {
      state.user = info
    },
    SET_ROLE(state: State, role: Array<string>) {
      state.roles = role
    }
  },
  actions: {
    LoginByUsername(context: { commit: Commit }, userInfo: LoginInfo) {
      const email = userInfo.email.trim()
      return new Promise((resolve, reject) => {
        loginByUsername({ email, password: userInfo.password }).then((response) => {
          context.commit('SET_ROLE', [])
          context.commit('SET_TOKEN', response.access_token)
          setToken(response.access_token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetUserInfo(context: { commit: Commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(res => {
          context.commit('SET_USER_INFO', res)
          context.commit('SET_ROLE', [res.role])
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    Logout(context: { commit: Commit }) {
      return new Promise((resolve, reject) => {
        try {
          message.success('退出成功！')
          context.commit('SET_USER_INFO', '')
          context.commit('SET_TOKEN', '')
          context.commit('SET_ROLE', [])
          removeToken()
          resolve()
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}

export default user
