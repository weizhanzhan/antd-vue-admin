"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var js_cookie_1 = __importDefault(require("js-cookie"));
var TokenKey = 'Admin-Token';
function getToken() {
    return js_cookie_1.default.get(TokenKey);
}
exports.getToken = getToken;
function setToken(token) {
    return js_cookie_1.default.set(TokenKey, token);
}
exports.setToken = setToken;
function removeToken() {
    return js_cookie_1.default.remove(TokenKey);
}
exports.removeToken = removeToken;
