import request from '@/utils/request'

export function uploadBlog(data) {
  return request({
    url: '/blog/addblog',
    method: 'post',
    data
  })
}

export function baseToImg(data) {
    return request({
      url: '/blog/basetoimg',
      method: 'post',
      data
    })
  }

export function getAllBlogs(params) {
  return request({
    url: '/blog',
    method: 'get',
    params
  })
}
export function deleteBlog(id) {
  return request({
    url: '/blog/deleteblog/' + id,
    method: 'delete'
  })
}
export function getBlogById(id) {
  return request({
    url: '/blog/getblog/' + id,
    method: 'get'
  })
}

export function editBlog(id, data) {
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
