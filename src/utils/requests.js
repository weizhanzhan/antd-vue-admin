"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var auth_1 = require("./auth");
var ant_design_vue_1 = require("ant-design-vue");
var router_1 = __importDefault(require("../router/router"));
var service = axios_1.default.create({
    //  baseURL: process.env.BASE_API,111.231.59.56 ,192.168.1.115 http://111.231.59.56:5000/api
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 10000
});
service.interceptors.request.use(function (config) {
    var token = auth_1.getToken();
    if (token) { // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        config.headers['Authorization'] = token;
    }
    return config;
}, function (error) {
    Promise.reject(error);
});
service.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    if (error.code) {
        ant_design_vue_1.message.error('网络超时....');
    }
    if (error.response && error.response.data) {
        console.log(Object.values(error.response.data));
        ant_design_vue_1.message.error(Object.values(error.response.data));
        if (error.response.status === 401) {
            router_1.default.push('/login');
        }
    }
    return Promise.reject(error);
});
exports.default = service;
