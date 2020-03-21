import request from '../utils/request'

export function uploadBlog(data:any) {
  return request({
    url: '/blog/addblog',
    method: 'post',
    data
  })
}

export function baseToImg(data:any) {
    return request({
      url: '/blog/basetoimg',
      method: 'post',
      data
    })
  }

export function getAllBlogs(params:any) {
  return request({
    url: '/blog',
    method: 'get',
    params
  })
}
export function deleteBlog(id:any) {
  return request({
    url: '/blog/deleteblog/' + id,
    method: 'delete'
  })
}
export function getBlogById(id:any) {
  return request({
    url: '/blog/getblog/' + id,
    method: 'get'
  })
}

export function editBlog(id:any, data:any) {
  return request({
    url: '/blog/editblog/' + id,
    method: 'post',
    data
  })
}

export function getBlogCategory() {
  return request({
    url: '/categories',
    method: 'get'
  })
}

export function addCategory(data:any) {
  return request({
    url: '/categories/add',
    method: 'post',
    data
  })
}

export function editCategory(id:any, data:any) {
  return request({
    url: '/categories/edit/' + id,
    method: 'post',
    data
  })
}

export function delCategory(id:any) {
  return request({
    url: '/categories/del/' + id,
    method: 'delete'
  })
}
