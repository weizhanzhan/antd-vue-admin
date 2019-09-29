import request from '../utils/requests'

export function getBlogCategory() {
    return request({
      url: '/categories',
      method: 'get'
    })
  }

export function setCategoryBaseToImg(data:any) {
  return request({
    url: '/categories/baseToImg',
    method: 'post',
    data
  })
}

export function addCategory(data:any) {
  return request({
    url: '/categories/add',
    method: 'post',
    data
  })
}
export function delCategory(id:any) {
  return request({
    url: '/categories/del/'+id,
    method: 'delete',
  })
}

export function editCategory(id:any,data:any) {
  return request({
    url: '/categories/edit/'+id,
    method: 'post',
    data
  })
}