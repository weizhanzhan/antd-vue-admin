import request from '../utils/requests'

export function getUser() {
  return request({
    url: '/users',
    method: 'get',
  })
}
