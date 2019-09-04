import axios from 'axios'
import { getToken } from '@/utils/auth'
import { message } from 'ant-design-vue'
import router from '@/router'
const service = axios.create({
  //  baseURL: process.env.BASE_API,111.231.59.56 ,192.168.1.115
    baseURL: 'http://111.231.59.56:5000/api',
    timeout: 10000
})

service.interceptors.request.use(
    config => {
        const token = getToken()
        if (token) { // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
             config.headers['Authorization'] = token
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
)

service.interceptors.response.use(

    response => {
        // if (res.code !== 20000) {//错误处理 根据自己业务修改
            // Message({
            //     message: res.message,
            //     type: 'error',
            //     duration: 5 * 1000
            // })

            // // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
            // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
            //     MessageBox.confirm(
            //         '你已被登出，可以取消继续留在该页面，或者重新登录',
            //         '确定登出', {
            //             confirmButtonText: '重新登录',
            //             cancelButtonText: '取消',
            //             type: 'warning'
            //         }
            //     ).then(() => {
            //         store.dispatch('FedLogOut').then(() => {
            //             location.reload() // 为了重新实例化vue-router对象 避免bug
            //         })
            //     })
            // }
          //  return Promise.reject('error')
      //  } else {

            return response.data
     //   }
    },
    error => {
        if (error.code) {
            message.error('网络超时....')
        }
        if (error.response && error.response.data) {
            console.log(Object.values(error.response.data))
            message.error(Object.values(error.response.data))
            if (error.response.status === 401) { router.push('/login') }
        }

        return Promise.reject(error)
    }
)

export default service
