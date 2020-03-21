// import { loginByUsername, getUserInfo } from '@/api/login'
import { setToken, removeToken } from '@/utils/auth'
import { message } from 'ant-design-vue'
type UserState = {
    user:string,
    roles:Array<string>,
    token:string
}
const user = {
    state: {
        user: '',
        roles: [],
        token: ''
    },
    mutations: {
        SET_TOKEN(state:UserState, token:string) {
            state.token = token
        },
        SET_USER_INFO(state:UserState, info:any) {
            state.user = info
        },
        SET_ROLE(state:UserState, role:any) {
            state.roles = role
        }
    },
    actions: {
        LoginByUsername(context:any, userInfo:any) {
            // const username = userInfo.userName.trim()
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('SET_ROLE', [])
                    context.commit('SET_TOKEN', 'Bearer test_token')
                    setToken('Bearer test_token')
                    resolve()
                }, 2000)
                // 以上用模拟数据 以下是真实接口
                // loginByUsername(username, userInfo.password).then((response:any) => {
                //     context.commit('SET_ROLE', [])
                //     context.commit('SET_TOKEN', response.token)
                //     setToken(response.token)
                //     resolve()
                // }).catch(error => {
                //     reject(error)
                // })
            })
        },
        GetUserInfo(context:any) {
            return new Promise((resolve, reject) => {
              const mockInfo = {
                id: '5e42284c33e0235a7e5145e7',
                name: '系统管理员',
                email: '375786117@qq.com',
                role: 'admin',
                avatar: '//www.gravatar.com/avatar/ae6d4e19f36583b6c0fb717e654b45a9?s=200&r=pg&d=mm'
              }
              context.commit('SET_USER_INFO', mockInfo)
              context.commit('SET_ROLE', [mockInfo.role])
              resolve(mockInfo)
              // 以上模拟数据 一下真实接口
              // getUserInfo().then((res:any) => {
              //     context.commit('SET_USER_INFO', res)
              //     context.commit('SET_ROLE', [res.role])
              //     resolve(res)
              // })
              // .catch(err => {
              //     reject(err)
              // })
            })
        },
        Logout(context:any) {
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
