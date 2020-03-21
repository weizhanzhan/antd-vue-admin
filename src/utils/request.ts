import axios from 'axios'
import { getToken } from './auth'
import { message } from 'ant-design-vue'
import router from '../router'
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // 'http://localhost:5000/api',
    timeout: 10000
})
service.interceptors.request.use(
    config => {
      const token = getToken()
       // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
      if (token) {
          config.headers['Authorization'] = token
      }
      return config
    },
    error => Promise.reject(error)
)
service.interceptors.response.use(
  response => response.data,
  error => {
    if (error.code) { message.error('网络超时....') }
    if (error.response && error.response.data) {
      console.log(error.response.data)
      message.error(JSON.stringify(error.response.data))
      if (error.response.status === 401) {
        router.push('/login')
      }
    }
    return Promise.reject(error)
  }
)

export default service
