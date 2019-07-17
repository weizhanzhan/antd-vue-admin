import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    email: username,
    password
  }
  return request({
    url: '/users/login',
    method: 'post',
    data
  })
}

export function getUserInfo() {
  return request({
      url: '/current',
      method: 'get'
  })
}
