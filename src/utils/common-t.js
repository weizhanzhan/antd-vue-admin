"use strict";
/*
 * @Description: 公共函数
 * @Author: asheng
 * @Date: 2018-12-07 11:36:27
 * @LastEditors: asheng
 * @LastEditTime: 2018-12-12 13:37:30
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var js_cookie_1 = __importDefault(require("js-cookie"));
/**
 * @Author: asheng
 * @msg: 存取token
 * @param {string} token
 */
exports.TOKEN_KEY = 'token';
exports.setToken = function (token) {
    js_cookie_1.default.set(exports.TOKEN_KEY, token, { expires: 1 });
};
exports.getToken = function () {
    var token = js_cookie_1.default.get(exports.TOKEN_KEY);
    if (token) {
        return token;
    }
    else {
        return false;
    }
};
/**
 * @param {String} url
 * @description 从URL中解析参数
 */
exports.getParams = function (url) {
    var keyValueArr = url.split('?')[1].split('&');
    var paramObj = {};
    keyValueArr.forEach(function (item) {
        var keyValue = item.split('=');
        paramObj[keyValue[0]] = keyValue[1];
    });
    return paramObj;
};
/**
 * 判断一个对象是否存在key，如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性
 * 如果没有传入key这个参数，则判断obj对象是否有键值对
 */
exports.hasKey = function (obj, key) {
    if (key) {
        return key in obj;
    }
    else {
        var keysArr = Object.keys(obj);
        return keysArr.length;
    }
};
/**
 * @msg: 获取系统当前时间
 * @param {string} fmt 时间格式 具体看代码
 * @return: string
 */
exports.getDate = function (fmt) {
    var time = '';
    var date = new Date();
    var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "H+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds() // 毫秒 
    };
    if (/(y+)/.test(fmt)) {
        time = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            time = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return time;
};
/**
 * @msg: 获取系统当前时间
 * @param {string} date 时间
 * @param {string} fmt 时间格式
 * @return: string
 */
exports.formatDate = function (date, fmt) {
    var time = '';
    var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "H+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds() // 毫秒 
    };
    if (/(y+)/.test(fmt)) {
        time = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            time = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return time;
};
// copy in the 'fx-fuli' utils
/**
 * 校验手机号是否正确
 * @param phone 手机号
 */
exports.verifyPhone = function (phone) {
    var reg = /^1[34578][0-9]{9}$/;
    var _phone = phone.toString().trim();
    var toastStr = _phone === '' ? '手机号不能为空~' : !reg.test(_phone) && '请输入正确手机号~';
    return {
        errMsg: toastStr,
        done: !toastStr,
        value: _phone
    };
};
exports.verifyStr = function (str, text) {
    var _str = str.toString().trim();
    var toastStr = _str.length ? false : "\u8BF7\u586B\u5199" + text + "\uFF5E";
    return {
        errMsg: toastStr,
        done: !toastStr,
        value: _str
    };
};
// 截取字符串
exports.sliceStr = function (str, sliceLen) {
    if (!str) {
        return '';
    }
    var realLength = 0;
    var len = str.length;
    var charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) {
            realLength += 1;
        }
        else {
            realLength += 2;
        }
        if (realLength > sliceLen) {
            return str.slice(0, i) + "...";
        }
    }
    return str;
};
/**
 * JSON 克隆
 * @param {Object | Json} jsonObj json对象
 * @return {Object | Json} 新的json对象
 */
function objClone(jsonObj) {
    var buf;
    if (jsonObj instanceof Array) {
        buf = [];
        var i = jsonObj.length;
        while (i--) {
            buf[i] = objClone(jsonObj[i]);
        }
        return buf;
    }
    else if (jsonObj instanceof Object) {
        buf = {};
        for (var k in jsonObj) {
            buf[k] = objClone(jsonObj[k]);
        }
        return buf;
    }
    else {
        return jsonObj;
    }
}
exports.objClone = objClone;
