import request from '../utils/requests'

export function getBlogCategory() {
    return request({
      url: '/categories',
      method: 'get'
    })
  }