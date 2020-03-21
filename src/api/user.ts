import request from '../utils/request'

export function getUser() {
  return request({
    url: '/users',
    method: 'get'
  })
}
