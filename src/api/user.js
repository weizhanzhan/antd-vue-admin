"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var requests_1 = __importDefault(require("../utils/requests"));
function getUser() {
    return requests_1.default({
        url: '/users',
        method: 'get',
    });
}
exports.getUser = getUser;
