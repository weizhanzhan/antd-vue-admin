"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var requests_1 = __importDefault(require("../utils/requests"));
function getBlogCategory() {
    return requests_1.default({
        url: '/categories',
        method: 'get'
    });
}
exports.getBlogCategory = getBlogCategory;
function setCategoryBaseToImg(data) {
    return requests_1.default({
        url: '/categories/baseToImg',
        method: 'post',
        data: data
    });
}
exports.setCategoryBaseToImg = setCategoryBaseToImg;
function addCategory(data) {
    return requests_1.default({
        url: '/categories/add',
        method: 'post',
        data: data
    });
}
exports.addCategory = addCategory;
function delCategory(id) {
    return requests_1.default({
        url: '/categories/del/' + id,
        method: 'delete',
    });
}
exports.delCategory = delCategory;
function editCategory(id, data) {
    return requests_1.default({
        url: '/categories/edit/' + id,
        method: 'post',
        data: data
    });
}
exports.editCategory = editCategory;
