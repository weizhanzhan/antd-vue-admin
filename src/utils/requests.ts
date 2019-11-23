import axios from 'axios'
import {
    getToken
} from './auth'
import {
    message
} from 'ant-design-vue'
import router from '../router/router.js'
const service = axios.create({
    //  baseURL: process.env.BASE_API,111.231.59.56 ,192.168.1.115 http://111.231.59.56:5000/api
    baseURL: process.env.VUE_APP_BASE_API, //'http://localhost:5000/api',
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
        return response.data
    },
    error => {
        if (error.code) {
            message.error('网络超时....')
        }
        if (error.response && error.response.data) {
            console.log(Object.values(error.response.data))
            message.error(Object.values(error.response.data))
            if (error.response.status === 401) {
                router.push('/login')
            }
        }

        return Promise.reject(error)
    }
)

export default service