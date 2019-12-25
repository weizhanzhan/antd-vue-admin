'use strict'
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { 'default': mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
var requests_1 = __importDefault(require('../utils/requests'))
function uploadBlog(data) {
    return requests_1.default({
        url: '/blog/addblog',
        method: 'post',
        data: data
    })
}
exports.uploadBlog = uploadBlog
function baseToImg(data) {
    return requests_1.default({
        url: '/blog/basetoimg',
        method: 'post',
        data: data
    })
}
exports.baseToImg = baseToImg
function getAllBlogs(params) {
    return requests_1.default({
        url: '/blog',
        method: 'get',
        params: params
    })
}
exports.getAllBlogs = getAllBlogs
function deleteBlog(id) {
    return requests_1.default({
        url: '/blog/deleteblog/' + id,
        method: 'delete'
    })
}
exports.deleteBlog = deleteBlog
function getBlogById(id) {
    return requests_1.default({
        url: '/blog/getblog/' + id,
        method: 'get'
    })
}
exports.getBlogById = getBlogById
function editBlog(id, data) {
    return requests_1.default({
        url: '/blog/editblog/' + id,
        method: 'post',
        data: data
    })
}
exports.editBlog = editBlog
function getBlogCategory() {
    return requests_1.default({
        url: '/categories',
        method: 'get'
    })
}
exports.getBlogCategory = getBlogCategory
function addCategory(data) {
    return requests_1.default({
        url: '/categories/add',
        method: 'post',
        data: data
    })
}
exports.addCategory = addCategory
function editCategory(id, data) {
    return requests_1.default({
        url: '/categories/edit/' + id,
        method: 'post',
        data: data
    })
}
exports.editCategory = editCategory
function delCategory(id) {
    return requests_1.default({
        url: '/categories/del/' + id,
        method: 'delete'
    })
}
exports.delCategory = delCategory
