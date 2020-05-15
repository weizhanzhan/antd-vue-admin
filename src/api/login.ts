import request from '@/utils/request'
// eslint-disable-next-line no-unused-vars
import * as LoginInterface from '../interface/api/login'
const mockNum = '/mock/89/api/'

export const loginByUsername = (data:LoginInterface.LoginInfo):Promise<LoginInterface.LoginResponse> => {
  return request({
    url: mockNum + 'login',
    method: 'post',
    data
  })
}

export const getUserInfo = ():Promise<LoginInterface.UserInfo> => {
  return request({
      url: mockNum + 'userInfo',
      method: 'get'
  })
}
