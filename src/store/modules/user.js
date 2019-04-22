import { loginByUsername, getUserInfo } from '@/api/login'
/* eslint-disable */
import { getToken, setToken, removeToken } from '@/utils/auth'
import { message } from 'ant-design-vue'

const user = {
    state: {
        user:'',
        roles:[],
        token:''
    },
    mutations: {
        SET_TOKEN(state,token){
            state.token = token
        },
        SET_USER_INFO(state,info){
            state.user = info
        },
        SET_ROLE(state,role){
            state.roles = role
        }
    },
    actions: {
        LoginByUsername({ commit }, userInfo) { 
            const username = userInfo.userName.trim()
            return new Promise((resolve, reject) => {
                loginByUsername(username, userInfo.password).then(response => {
                    commit('SET_ROLE', [])
                    commit('SET_TOKEN', response.token)
                    setToken(response.token)
                   
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        GetUserInfo({ commit }) {
            return new Promise((resolve, reject) => {
                getUserInfo().then(res => {
                    commit('SET_USER_INFO',res)
                    commit('SET_ROLE', [res.role])
                
                    resolve(res)
                })
                .catch(err=>{
                    reject(err)
                })
            })
        },
        Logout({ commit }){
            return new Promise((resolve,reject) =>{
                try {
                    message.success('退出成功！')
                    commit('SET_USER_INFO','')
                    commit('SET_TOKEN', '')
                    commit('SET_ROLE', [])
                    removeToken();
                    resolve();
                } catch (error) {
                    reject(error)
                }
            })
            
        }
    }
}

export default user