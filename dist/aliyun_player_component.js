/* eslint-disable no-useless-call */
/* eslint-disable eqeqeq */
/* eslint-disable no-self-assign */
/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable no-return-assign */
/* eslint-disable no-sequences */
/* eslint-disable space-before-function-paren */
!(function (A) {
    var t = {}

    function e(n) {
        if (t[n]) return t[n].exports
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        }
        // eslint-disable-next-line no-return-assign
        return A[n].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }
    e.m = A, e.c = t, e.d = function (A, t, n) {
        e.o(A, t) || Object.defineProperty(A, t, {
            enumerable: !0,
            get: n
        })
    }, e.r = function (A) {
        typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(A, Symbol.toStringTag, {
            value: 'Module'
        }), Object.defineProperty(A, '__esModule', {
            value: !0
        })
    }, e.t = function (A, t) {
        if (1 & t && (A = e(A)), 8 & t) return A
        if (4 & t && typeof A === 'object' && A && A.__esModule) return A
        var n = Object.create(null)
        if (e.r(n), Object.defineProperty(n, 'default', {
                enumerable: !0,
                value: A
            }), 2 & t && typeof A !== 'string') {
 for (var i in A) {
 e.d(n, i, function (t) {
                return A[t]
            }.bind(null, i))
}
}
        return n
    }, e.n = function (A) {
        var t = A && A.__esModule ? function () {
            return A.default
        } : function () {
            return A
        }
        return e.d(t, 'a', t), t
    }, e.o = function (A, t) {
        return Object.prototype.hasOwnProperty.call(A, t)
    }, e.p = '', e(e.s = 28)
}([function (A, t) {
    A.exports = function (A) {
        var t = []
        return t.toString = function () {
            return this.map(function (t) {
                var e = (function (A, t) {
                    var e
                    var n = A[1] || ''
                    var i = A[3]
                    if (!i) return n
                    if (t && typeof btoa === 'function') {
                        var o = (e = i, '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + ' */')
                        var r = i.sources.map(function (A) {
                            return '/*# sourceURL=' + i.sourceRoot + A + ' */'
                        })
                        return [n].concat(r).concat([o]).join('\n')
                    }
                    return [n].join('\n')
                }(t, A))
                return t[2] ? '@media ' + t[2] + '{' + e + '}' : e
            }).join('')
        }, t.i = function (A, e) {
            typeof A === 'string' && (A = [
                [null, A, '']
            ])
            for (var n = {}, i = 0; i < this.length; i++) {
                var o = this[i][0]
                typeof o === 'number' && (n[o] = !0)
            }
            for (i = 0; i < A.length; i++) {
                var r = A[i]
                typeof r[0] === 'number' && n[r[0]] || (e && !r[2] ? r[2] = e : e && (r[2] = '(' + r[2] + ') and (' + e + ')'), t.push(r))
            }
        }, t
    }
}, function (A, t, e) {
    var n
    var i
    var o = {}
    var r = (n = function () {
        return window && document && document.all && !window.atob
    }, function () {
        return void 0 === i && (i = n.apply(this, arguments)), i
    })
    var a = (function (A) {
        var t = {}
        return function (A) {
            if (typeof A === 'function') return A()
            if (void 0 === t[A]) {
                var e = function (A) {
                    return document.querySelector(A)
                }.call(this, A)
                if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) {
 try {
                    e = e.contentDocument.head
                } catch (A) {
                    e = null
                }
}
                t[A] = e
            }
            return t[A]
        }
    }())
    var l = null
    var s = 0
    var c = []
    var d = e(31)

    function u(A, t) {
        for (var e = 0; e < A.length; e++) {
            var n = A[e]
            var i = o[n.id]
            if (i) {
                i.refs++
                for (var r = 0; r < i.parts.length; r++) i.parts[r](n.parts[r])
                for (; r < n.parts.length; r++) i.parts.push(f(n.parts[r], t))
            } else {
                var a = []
                for (r = 0; r < n.parts.length; r++) a.push(f(n.parts[r], t))
                o[n.id] = {
                    id: n.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }

    function p(A, t) {
        for (var e = [], n = {}, i = 0; i < A.length; i++) {
            var o = A[i]
            var r = t.base ? o[0] + t.base : o[0]
            var a = {
                css: o[1],
                media: o[2],
                sourceMap: o[3]
            }
            n[r] ? n[r].parts.push(a) : e.push(n[r] = {
                id: r,
                parts: [a]
            })
        }
        return e
    }

    function h(A, t) {
        var e = a(A.insertInto)
        if (!e) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.")
        var n = c[c.length - 1]
        if (A.insertAt === 'top') n ? n.nextSibling ? e.insertBefore(t, n.nextSibling) : e.appendChild(t) : e.insertBefore(t, e.firstChild), c.push(t)
        else if (A.insertAt === 'bottom') e.appendChild(t)
        else {
            if (typeof A.insertAt !== 'object' || !A.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n")
            var i = a(A.insertInto + ' ' + A.insertAt.before)
            e.insertBefore(t, i)
        }
    }

    function y(A) {
        if (A.parentNode === null) return !1
        A.parentNode.removeChild(A)
        var t = c.indexOf(A)
        t >= 0 && c.splice(t, 1)
    }

    function m(A) {
        var t = document.createElement('style')
        return void 0 === A.attrs.type && (A.attrs.type = 'text/css'), g(t, A.attrs), h(A, t), t
    }

    function g(A, t) {
        Object.keys(t).forEach(function (e) {
            A.setAttribute(e, t[e])
        })
    }

    function f(A, t) {
        var e, n, i, o
        if (t.transform && A.css) {
            if (!(o = t.transform(A.css))) return function () {}
            A.css = o
        }
        if (t.singleton) {
            var r = s++
            e = l || (l = m(t)), n = x.bind(null, e, r, !1), i = x.bind(null, e, r, !0)
        } else {
 A.sourceMap && typeof URL === 'function' && typeof URL.createObjectURL === 'function' && typeof URL.revokeObjectURL === 'function' && typeof Blob === 'function' && typeof btoa === 'function' ? (e = (function (A) {
            var t = document.createElement('link')
            return void 0 === A.attrs.type && (A.attrs.type = 'text/css'), A.attrs.rel = 'stylesheet', g(t, A.attrs), h(A, t), t
        }(t)), n = function (A, t, e) {
            var n = e.css
            var i = e.sourceMap
            var o = void 0 === t.convertToAbsoluteUrls && i;
            (t.convertToAbsoluteUrls || o) && (n = d(n)), i && (n += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + ' */')
            var r = new Blob([n], {
                type: 'text/css'
            })
            var a = A.href
            A.href = URL.createObjectURL(r), a && URL.revokeObjectURL(a)
        }.bind(null, e, t), i = function () {
            y(e), e.href && URL.revokeObjectURL(e.href)
        }) : (e = m(t), n = function (A, t) {
            var e = t.css
            var n = t.media
            if (n && A.setAttribute('media', n), A.styleSheet) A.styleSheet.cssText = e
            else {
                for (; A.firstChild;) A.removeChild(A.firstChild)
                A.appendChild(document.createTextNode(e))
            }
        }.bind(null, e), i = function () {
            y(e)
        })
}
        return n(A),
            function (t) {
                if (t) {
                    if (t.css === A.css && t.media === A.media && t.sourceMap === A.sourceMap) return
                    n(A = t)
                } else i()
            }
    }
    A.exports = function (A, t) {
        if (typeof DEBUG !== 'undefined' && DEBUG && typeof document !== 'object') throw new Error('The style-loader cannot be used in a non-browser environment');
        (t = t || {}).attrs = typeof t.attrs === 'object' ? t.attrs : {}, t.singleton || typeof t.singleton === 'boolean' || (t.singleton = r()), t.insertInto || (t.insertInto = 'head'), t.insertAt || (t.insertAt = 'bottom')
        var e = p(A, t)
        return u(e, t),
            function (A) {
                for (var n = [], i = 0; i < e.length; i++) {
                    var r = e[i];
                    (a = o[r.id]).refs--, n.push(a)
                }
                for (A && u(p(A, t), t), i = 0; i < n.length; i++) {
                    var a
                    if ((a = n[i]).refs === 0) {
                        for (var l = 0; l < a.parts.length; l++) a.parts[l]()
                        delete o[a.id]
                    }
                }
            }
    }
    var v
    var M = (v = [], function (A, t) {
        return v[A] = t, v.filter(Boolean).join('\n')
    })

    function x(A, t, e, n) {
        var i = e ? '' : n.css
        if (A.styleSheet) A.styleSheet.cssText = M(t, i)
        else {
            var o = document.createTextNode(i)
            var r = A.childNodes
            r[t] && A.removeChild(r[t]), r.length ? A.insertBefore(o, r[t]) : A.appendChild(o)
        }
    }
}, function (A, t) {
    A.exports = function (A) {
        return typeof A !== 'string' ? A : (/^['"].*['"]$/.test(A) && (A = A.slice(1, -1)), /["'() \t\n]/.test(A) ? '"' + A.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"' : A)
    }
}, function (A, t) {
    A.exports = 'data:application/vnd.ms-fontobject;base64,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'
}, function (A, t) {
    A.exports = 'data:application/vnd.ms-fontobject;base64,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'
}, function (A, t) {
    A.exports = '<div class="aliplayer-danmuku abp">\n  <div class="danmu container"></div>\n</div>'
}, function (A, t) {
    A.exports = '<div class="ali-danmuku-control">\n  <div class="ali-danmu-input-wrap"></div>\n  <i class="iconfont icon-danmu-close"></i>\n  <div class="player-tooltip close"></div>\n  <i class="iconfont icon-danmu-open" style="display: none;"></i>\n  <div class="player-tooltip open"></div>  \n</div>'
}, function (A, t) {
    A.exports = '<div class="ali-danmu-input">\n  <input type="text" placeholder="">\n  <button class="danmu-input-enter"></button>\n</div>'
}, function (A, t) {
    A.exports = '<div class="bullet-screen paused"></div>'
}, function (A, t) {
    A.exports = '<div class="memory-play-wrap"></div>'
}, function (A, t) {
    A.exports = '<div class="pause-ad">\n  <a class="btn-close">\n    <i class="split-left"></i>\n    <i class="split-right"></i>\n  <a>\n  <span class="ad-text"></span>\n  <a class="ad-content" target="_blank">\n    <img />\n  </a>\n</div>'
}, function (A, t) {
    A.exports = '<div class="playlist-component">\n  <i class="iconfont icon-skip-previous"></i>\n  <div class="player-tooltip prev">上一个</div>\n  <i class="iconfont icon-list"></i>\n  <div class="player-tooltip list">播放列表</div>\n  <i class="iconfont icon-skipnext"></i>\n  <div class="player-tooltip next">下一个</div>  \n</div>'
}, function (A, t) {
    A.exports = '<div class="playlist-content">\n  <div class="list"></div>\n</div>'
}, function (A, t) {
    A.exports = '<div class="preview-vod-component">\n  <div class="preview-component-layer">\n    <div class="preview-custom">\n      <p class="preview-default"></p>\n    </div>\n  </div>\n  <div class="preview-component-tip">\n    <span class="can-preview"></span><span class="preview-time"></span>， <span class="preview-custom-bar">Become VIP Watch Full Version </span>\n    <span class="preview-vod-close">x</span>\n  </div>\n</div>'
}, function (A, t) {
    A.exports = '<div class="progress-component">\n  <div class="progress-content clearfix">\n    <div class="img-wrap"><img /></div>    \n\n    <div class="info">\n      <div class="time"></div>\n      <div class="describe"></div>\n    </div>\n\n    <i href="" target="_blank" class="iconfont icon-play pregress-play-btn"></i>\n  </div>\n  <i class="iconfont icon-arrowdown"></i>\n</div>'
}, function (A, t) {
    A.exports = '<div class="quality-components">\n  <div class="current-quality" data-ref=""></div>\n  <ul class="quality-list">\n  </ul>\n</div>'
}, function (A, t) {
    A.exports = '<div class="quality-modal">\n  <span class="switchimg"></span> <span class="current-quality-tag"></span> , <span class="wait"></span>\n</div>'
}, function (A, t) {
    A.exports = '<div class="rate-components">\n  <div class="current-rate">1.0x</div>\n  <ul class="rate-list">\n    <li data-rate="2.0">2.0x</li>\n    <li data-rate="1.5">1.5x</li>\n    <li data-rate="1.25">1.25x</li>\n    <li data-rate="1.0" class="current">1.0x</li>\n    <li data-rate="0.5">0.5x</li>\n  </ul>\n</div>'
}, function (A, t) {
    A.exports = '<div class="aliplayer-rotate-mirror">\n  <i class="iconfont icon-player-rotate-left"></i>\n  <div class="player-tooltip counterclockwise"></div>\n  <i class="iconfont icon-player-rotate-right"></i>\n  <div class="player-tooltip clockwise"></div>\n  <i class="iconfont icon-player-switch"></i>\n  <div class="player-tooltip switch"></div>\n  <div class="mirror-option" style="display: none;">\n    <div class="mirror-item" data-id="vertical"></div>\n    <div class="mirror-item" data-id="horizon"></div>\n    <div class="mirror-item" data-id="counterclockwise"></div>\n    <div class="mirror-item" data-id="clockwise"></div>\n  </div>\n</div>'
}, function (A, t) {
    A.exports = '<div class="start-ad">\n  <span class="tip"><span class="ad-name">广告</span>: <i></i><span class="second">秒</span></span>\n  <a class="ad-content" target="_blank">\n    <img />\n  </a>\n</div>'
}, function (A, t) {
    A.exports = '<div class="video-ad-component">\n  <video id="video-ad-content" x5-video-player-type="h5" x5-video-player-fullscreen="false"></video>\n  <a class="video-ad-link" target="_blank"></a>\n  <div class="video-ad-close">\n    <span id="video-ad-duration"></span>\n    <label>\n      <span class="video-ad-close-text"></span>\n      <i class="iconfont icon-close"></i>\n    </label>\n  </div>\n  <a class="video-ad-detail" target="_blank"></a>\n  <div class="autoplay-video-ad">\n    <i class="iconfont icon-player-play"></i>\n    <span class="limit"></span>\n    <span class="manual"></span>\n  </div>\n  <div id="loadflag" class="prism-loading center">\n    <div class="circle"></div> \n    <div class="circle1"></div>\n  </div>\n</div>'
}, function (A, t) {
    A.exports = '<div class="video-ad-component" style="background-color: transparent;">\n  <a class="video-ad-link" target="_blank"></a>\n  <div class="video-ad-close">\n    <span id="video-ad-duration"></span>\n    <label>\n      <span class="video-ad-close-text"></span>\n      <i class="iconfont icon-close"></i>\n    </label>\n  </div>\n  <a class="video-ad-detail" target="_blank"></a>\n  <div class="autoplay-video-ad" style="display: block;">\n    <i class="iconfont icon-player-play"></i>\n    <span class="limit"></span>\n    <span class="manual"></span>\n  </div>\n</div>'
}, function (A, t) {
    A.exports = '<div class="caption-components">\n    <div class="current-caption" data-ref=""></div>\n    <ul class="caption-list">\n    </ul>\n  </div>'
}, function (A, t) {
    A.exports = '<div class="caption-modal prism-info-display prism-info-left-bottom">\n  <span class="switchimg"></span> <span class="current-caption-tag"></span>\n</div>'
}, function (A, t) {
    A.exports = '<div class="track-components">\n  <div class="current-track"></div>\n  <ul class="track-list">\n    \n  </ul>\n</div>'
}, function (A, t) {
    A.exports = '<div class="track-modal prism-info-display prism-info-left-bottom">\n    <span class="switchimg"></span> <span class="current-track-tag"></span>\n</div>'
}, function (A, t) {
    A.exports = '<div class="many-video-ad-component">\n  <div class="videos">\n    \x3c!-- <video id="many-video-ad-content1" class="test" style="display: block" x5-video-player-type="h5" x5-video-player-fullscreen="false" src="https://alivc-demo-cms.alicdn.com/video/videoAD.mp4"></video>\n    <video id="many-video-ad-content2" class="test" style="display: none" x5-video-player-type="h5" x5-video-player-fullscreen="false" src="https://player.alicdn.com/resource/player/qupai.mp4"></video>\n    <video id="many-video-ad-content3" class="test" style="display: none" x5-video-player-type="h5" x5-video-player-fullscreen="false" src="https://player.alicdn.com/video/guanggao.mp4"></video> --\x3e\n  </div>\n  <a class="many-video-ad-link" target="_blank"></a>\n  <div class="many-video-ad-close">\n    <span id="many-video-ad-duration"></span>\n    <label>\n      <span class="many-video-ad-close-text"></span>\n      <i class="iconfont icon-close"></i>\n    </label>\n  </div>\n  <a class="many-video-ad-detail" target="_blank">查看详情</a>\n  <div class="autoplay-many-video-ad">\n    <i class="iconfont icon-player-play"></i>\n    <span class="limit"></span>\n    <span class="manual"></span>\n  </div>\n  \x3c!-- <div id="loadflag" class="prism-loading center">\n    <div class="circle"></div> \n    <div class="circle1"></div>\n  </div> --\x3e\n</div>'
}, function (A, t) {
    A.exports = '<div class="many-video-ad-component" style="background-color: transparent;">\n  <div class="videosmb"></div>\n  <a class="many-video-ad-link" target="_blank"></a>\n  <div class="many-video-ad-close">\n    <span id="many-video-ad-duration"></span>\n    <label>\n      <span class="many-video-ad-close-text"></span>\n      <i class="iconfont icon-close"></i>\n    </label>\n  </div>\n  <a class="many-video-ad-detail" target="_blank"></a>\n  <div class="autoplay-many-video-ad" style="display: block;">\n    <i class="iconfont icon-player-play"></i>\n    <span class="limit"></span>\n    <span class="manual"></span>\n  </div>\n</div>'
}, function (A, t, e) {
    e(69), A.exports = e(65)
}, function (A, t, e) {
    var n = e(30)
    typeof n === 'string' && (n = [
        [A.i, n, '']
    ])
    e(1)(n, {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    }), n.locals && (A.exports = n.locals)
}, function (A, t, e) {
    (A.exports = e(0)(!1)).push([A.i, '.aliplayer-danmuku {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n  .aliplayer-danmuku.abp {\n    position: absolute; }\n    .aliplayer-danmuku.abp .container {\n      z-index: 0; }\n  .aliplayer-danmuku .danmu {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n\n.ali-danmuku-control {\n  float: right;\n  color: #fff;\n  margin-right: 5px;\n  position: relative;\n  display: table-cell;\n  margin-top: 8px; }\n  .ali-danmuku-control .iconfont {\n    font-size: 35px;\n    cursor: pointer;\n    vertical-align: middle;\n    user-select: none;\n    line-height: initial; }\n    .ali-danmuku-control .iconfont.icon-danmu-close {\n      display: inline-block; }\n  .ali-danmuku-control .player-tooltip.close, .ali-danmuku-control .player-tooltip.open {\n    right: -12px; }\n  @media (min-width: 768px) {\n    .ali-danmuku-control .icon-danmu-close:hover + .player-tooltip {\n      display: block; }\n    .ali-danmuku-control .icon-danmu-open:hover + .player-tooltip {\n      display: block; } }\n  .ali-danmuku-control .ali-danmu-input-wrap {\n    width: 200px;\n    display: none; }\n\n.ali-danmu-input {\n  position: relative;\n  width: 100%;\n  display: inline-block; }\n  .ali-danmu-input input {\n    display: inline-block;\n    width: 100%;\n    padding-right: 40px;\n    box-sizing: border-box;\n    padding: 5px 40px 5px 5px;\n    background-color: rgba(130, 132, 138, 0.4);\n    border: 1px solid #c0c4cc;\n    font-size: 14px;\n    color: #fff;\n    border-radius: 3px; }\n    .ali-danmu-input input:focus {\n      outline: none;\n      border-color: #0f84fd; }\n  .ali-danmu-input .danmu-input-enter {\n    position: absolute;\n    right: 0;\n    top: 0;\n    border: 1px solid;\n    color: #fff;\n    background-color: #0f84fd;\n    border-color: #0f84fd;\n    font-size: 12px;\n    padding: 6px 7px;\n    display: inline-block;\n    height: 28px;\n    border-radius: 0 3px 3px 0;\n    cursor: pointer; }\n    .ali-danmu-input .danmu-input-enter:focus {\n      outline: none; }\n    .ali-danmu-input .danmu-input-enter:hover {\n      background-color: #288df5;\n      border-color: #288df5; }\n', ''])
}, function (A, t) {
    A.exports = function (A) {
        var t = typeof window !== 'undefined' && window.location
        if (!t) throw new Error('fixUrls requires window.location')
        if (!A || typeof A !== 'string') return A
        var e = t.protocol + '//' + t.host
        var n = e + t.pathname.replace(/\/[^\/]*$/, '/')
        return A.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (A, t) {
            var i
            var o = t.trim().replace(/^"(.*)"$/, function (A, t) {
                return t
            }).replace(/^'(.*)'$/, function (A, t) {
                return t
            })
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? A : (i = o.indexOf('//') === 0 ? o : o.indexOf('/') === 0 ? e + o : n + o.replace(/^\.\//, ''), 'url(' + JSON.stringify(i) + ')')
        })
    }
}, function (A, t, e) {
    var n = e(33)
    typeof n === 'string' && (n = [
        [A.i, n, '']
    ])
    e(1)(n, {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    }), n.locals && (A.exports = n.locals)
}, function (A, t, e) {
    (A.exports = e(0)(!1)).push([A.i, '.abp {\n  position: relative; }\n\n.abp .container {\n  -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  position: absolute;\n  display: block;\n  overflow: hidden;\n  margin: 0;\n  border: 0;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 9999;\n  touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.abp .container .cmt {\n  -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  -webkit-transform-origin: 0% 0%;\n  -ms-transform-origin: 0% 0%;\n  transform-origin: 0% 0%;\n  position: absolute;\n  padding: 3px 0 0 0;\n  margin: 0;\n  color: #fff;\n  font-family: SimHei, SimSun, Heiti, "MS Mincho", "Meiryo", "Microsoft YaHei", monospace;\n  font-size: 25px;\n  text-decoration: none;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n  -webkit-text-size-adjust: none;\n  -ms-text-size-adjust: none;\n  text-size-adjust: none;\n  line-height: 100%;\n  letter-spacing: 0;\n  word-break: keep-all;\n  white-space: pre; }\n\n.abp .container .cmt.noshadow {\n  text-shadow: none; }\n\n.abp .container .cmt.rshadow {\n  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white; }\n\n/** Aliases for Chinese named fonts because they don\'t work on *nix **/\n@font-face {\n  font-family: "\\9ED1\\4F53";\n  src: local("SimHei"); }\n\n@font-face {\n  font-family: "\\5B8B\\4F53";\n  src: local("SimSun"); }\n\n@font-face {\n  font-family: "\\534E\\6587\\6977\\4F53";\n  src: local("SimKai"); }\n\n@font-face {\n  font-family: "\\5E7C\\5706";\n  src: local("YouYuan"); }\n\n@font-face {\n  font-family: "\\5FAE\\8F6F\\96C5\\9ED1";\n  src: local("Microsoft YaHei"); }\n', ''])
}, function (A, t, e) {
    var n = e(35)
    typeof n === 'string' && (n = [
        [A.i, n, '']
    ])
    e(1)(n, {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    }), n.locals && (A.exports = n.locals)
}, function (A, t, e) {
    (A.exports = e(0)(!1)).push([A.i, '.bullet-screen {\n  position: absolute;\n  white-space: nowrap;\n  animation: bullet 10s linear infinite; }\n\n@keyframes bullet {\n  from {\n    left: 100%; }\n  to {\n    left: 0;\n    transform: translateX(-100%); } }\n', ''])
}, function (A, t, e) {
    var n = e(37)
    typeof n === 'string' && (n = [
        [A.i, n, '']
    ])
    e(1)(n, {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    }), n.locals && (A.exports = n.locals)
}, function (A, t, e) {
    (A.exports = e(0)(!1)).push([A.i, '.memory-play-wrap {\n  position: absolute;\n  right: 10px;\n  bottom: 55px; }\n  .memory-play-wrap .memory-play {\n    padding: 13px 20px;\n    background-color: #191919;\n    background-color: rgba(25, 25, 25, 0.88);\n    border-radius: 4px;\n    color: #fff;\n    font-size: 14px;\n    user-select: none; }\n    .memory-play-wrap .memory-play .icon-close {\n      transition: color .3s;\n      font-size: 14px;\n      cursor: pointer; }\n      @media (min-width: 768px) {\n        .memory-play-wrap .memory-play .icon-close:hover {\n          color: #00c1de; } }\n    .memory-play-wrap .memory-play .play-jump {\n      color: #00c1de;\n      padding: 5px;\n      border-radius: 3px;\n      cursor: pointer; }\n      @media (min-width: 768px) {\n        .memory-play-wrap .memory-play .play-jump:hover {\n          background-color: rgba(255, 255, 255, 0.2); } }\n', ''])
}, function (A, t, e) {
    var n = e(39)
    typeof n === 'string' && (n = [
        [A.i, n, '']
    ])
    e(1)(n, {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    }), n.locals && (A.exports = n.locals)
}, function (A, t, e) {
    (A.exports = e(0)(!1)).push([A.i, '.pause-ad {\n  width: 60%;\n  height: 50%;\n  background: #000;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  display: none; }\n  .pause-ad .btn-close {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    background-color: #333;\n    width: 2px;\n    height: 15px;\n    padding: 2px 8px;\n    cursor: pointer; }\n    .pause-ad .btn-close i {\n      background-color: #fff;\n      width: 2px;\n      height: 15px;\n      position: absolute; }\n    .pause-ad .btn-close .split-left {\n      transform: rotate(-45deg); }\n    .pause-ad .btn-close .split-right {\n      transform: rotate(45deg); }\n  .pause-ad .ad-text {\n    position: absolute;\n    left: 5px;\n    top: 5px;\n    background-color: #333;\n    color: #fff;\n    padding: 3px 5px;\n    font-size: 14px; }\n  .pause-ad .ad-content {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .pause-ad .ad-content img {\n      max-width: 100%;\n      max-height: 100%; }\n', ''])
}, function (A, t, e) {
    var n = e(41)
    typeof n === 'string' && (n = [
        [A.i, n, '']
    ])
    e(1)(n, {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    }), n.locals && (A.exports = n.locals)
}, function (A, t, e) {
    (A.exports = e(0)(!1)).push([A.i, '.playlist-component {\n  color: #fff;\n  float: left;\n  height: 35px;\n  margin-top: 5px;\n  display: flex;\n  align-items: center;\n  position: relative; }\n  .playlist-component i {\n    color: #fff;\n    display: inline-block;\n    font-size: 22px;\n    display: block;\n    margin-top: 7px;\n    cursor: pointer; }\n    .playlist-component i + i {\n      margin-left: 3px; }\n    @media (min-width: 768px) {\n      .playlist-component i:hover + .player-tooltip {\n        display: block; } }\n  .playlist-component .player-tooltip.prev {\n    left: -10px; }\n  .playlist-component .player-tooltip.list {\n    left: 5px; }\n  .playlist-component .player-tooltip.next {\n    right: -12px; }\n\n.playlist-content {\n  position: absolute;\n  right: 0;\n  width: 0px;\n  padding-bottom: 48px;\n  box-sizing: border-box;\n  height: 100%;\n  transition: all .38s ease-in-out;\n  overflow: hidden; }\n  .playlist-content .list {\n    background-color: #000;\n    background-color: rgba(0, 0, 0, 0.3);\n    height: 100%; }\n    .playlist-content .list .video-item {\n      color: #fff;\n      padding: 0px 10px;\n      line-height: 35px;\n      font-size: 14px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      cursor: pointer; }\n      .playlist-content .list .video-item.active {\n        background-color: #000;\n        color: #00ddff; }\n      @media (min-width: 768px) {\n        .playlist-content .list .video-item:hover {\n          background-color: #000;\n          color: #00ddff; } }\n\n.player-tooltip {\n  position: absolute;\n  display: none;\n  font-size: 12px;\n  color: #fff;\n  line-height: 28px;\n  letter-spacing: 0;\n  text-align: center;\n  background: #3c3c3c;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);\n  height: 28px;\n  top: -48px;\n  padding: 0 5px;\n  white-space: nowrap; }\n\n.playlist-skip-tip {\n  padding: 5px 15px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 30;\n  line-height: 30px;\n  font-size: 14px;\n  border-radius: 4px;\n  background: rgba(255, 255, 255, 0.8);\n  color: #000;\n  text-align: center;\n  transform: translate(-50%, -50%); }\n', ''])
}, function (A, t, e) {
    var n = e(43)
    typeof n === 'string' && (n = [
        [A.i, n, '']
    ])
    e(1)(n, {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    }), n.locals && (A.exports = n.locals)
}, function (A, t, e) {
    (A.exports = e(0)(!1)).push([A.i, '.preview-hide {\n  display: none !important; }\n\n.preview-vod-component {\n  display: none; }\n  .preview-vod-component .preview-component-layer {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 9998;\n    box-sizing: border-box;\n    padding: 20px 20px 70px;\n    display: none; }\n    .preview-vod-component .preview-component-layer .preview-close {\n      position: absolute;\n      right: 18px;\n      top: 15px;\n      border-radius: 50%;\n      color: #000;\n      background: white;\n      width: 20px;\n      height: 20px;\n      text-align: center;\n      line-height: 18px;\n      vertical-align: top;\n      color: #333;\n      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\n      cursor: pointer;\n      z-index: 9998; }\n    .preview-vod-component .preview-component-layer .preview-custom {\n      width: 100%;\n      height: 100%;\n      position: relative; }\n      .preview-vod-component .preview-component-layer .preview-custom .preview-default {\n        font-size: 14px;\n        color: #fff;\n        text-align: center;\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        width: 100%; }\n  .preview-vod-component .preview-custom {\n    color: #fff;\n    font-size: 14px; }\n  .preview-vod-component .preview-component-tip {\n    position: absolute;\n    bottom: 50px;\n    left: 25px;\n    border-radius: 15px;\n    background-color: #333;\n    color: #fff;\n    line-height: 26px;\n    font-size: 14px;\n    padding: 0 12px;\n    z-index: 9998; }\n  .preview-vod-component .preview-vod-close {\n    font-size: 18px;\n    cursor: pointer;\n    padding: 0 5px;\n    font-family: PingFangSC-Regular, sans-serif;\n    font-weight: 200; }\n    .preview-vod-component .preview-vod-close:hover {\n      color: #00c1de; }\n', ''])
}, function (A, t, e) {
    var n = e(45)
    typeof n === 'string' && (n = [
        [A.i, n, '']
    ])
    e(1)(n, {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    }), n.locals && (A.exports = n.locals)
}, function (A, t, e) {
    var n = e(2);
    (A.exports = e(0)(!1)).push([A.i, '@font-face {\n  font-family: "iconfont";\n  src: url(' + n(e(3)) + ');\n  /* IE9 */\n  src: url(' + n(e(3)) + '#iefix) format("embedded-opentype"), url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAALoAAsAAAAABswAAAKZAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqBLIEoATYCJAMMCwgABCAFhG0HPxv3BciemjwJBBawWJiKrz0ASDwe/hv7dt/MfNW2KmnPdtG6CbVE49AhkkRLp5FIhAwheQn/z+kv/1pWQYEwj7X+Uuyl/nTcdSTtTi8NcwkH30gwCtRYSyHREE3ufj9P1OLQShNpd5+4d/rneReO/SzLZW3rorEmfwww7rwLcKxFEQ2RQLxh7AKXcJhA07wmodOhiRQqVFijAvHU1GVUmAsrCsvVhWrNwiLeqKinV+kQr8Pvx397KSSpZNbEyyeDGur5VflDWJ2tols+IUKAyyvI2IUU4k5t+hpBML6gaRfbS6uKkOaK/T+hXndWd/rHS0SVVd0Gm9CWbsrgqgh+00EB8vtVFGxALmYoJOTctiY+K0kvXH6mrr7SNz/Z6+9Zx5qJtFlNxSWTO6vj1HYuhJefJ9ftXh9abHpfLGqU77bG13rmtKH98PROBBAh724RzHCxLE2XTr/nplZqkQ6eox7Wz9KPuBAIal+/fLw7HX+FxQX8PFYXDpmtiii/QP1UnuDXdSohKNxkuXJR7VqrA9nqbYxMaGpihrB/6Hm8c9K7mlA3SZHUzCGrWyULu4uKln1U1R2gacfw8pYRRhClgW1bAKFvD0nXN2R9R2Rhn1Ax9YuqfgQ0XYmyDVvWY0r9DMsca6DMgalSjzhuLkW1CaxPOTLLmkJpBrPAjEEsHC3mhrGH2RxTgmk9zjkBwqgLQ+A47DgUfEYtrPKwwbnfFomQuheFVeoiyQkGk3GYBijmAJOK8hC/NSeVPp+A6aY4ZKyFU1PPwJiA2T2ICYv2IIftXi/OvTwTmKaL4zgCEAzlAkOgH+ZwUMCv72fBVFyYMSLpaxOxm5G+9vD6Tvf7tkGTNSlHihxF9z5jdEZzenvNKvXnRN+R5xACAAAA") format("woff2"), url(' + n(e(46)) + ') format("woff"), url(' + n(e(47)) + ') format("truetype"), url(' + n(e(48)) + '#iconfont) format("svg");\n  /* iOS 4.1- */ }\n\n.iconfont {\n  font-family: "iconfont" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.icon-play:before {\n  content: "\\E726"; }\n\n.icon-arrowdown:before {\n  content: "\\E623"; }\n\n.clearfix:before, .clearfix:after {\n  content: "";\n  display: table;\n  line-height: 0; }\n\n.clearfix:after {\n  clear: both; }\n\n.clearfix {\n  *zoom: 1; }\n\n.progress-component {\n  padding: 8px;\n  background-color: rgba(0, 0, 0, 0.35);\n  position: absolute;\n  display: none;\n  box-sizing: border-box;\n  bottom: 55px;\n  font-size: 12px;\n  color: #fff;\n  height: 74px; }\n  .progress-component .progress-content {\n    height: 100%;\n    position: relative;\n    padding-right: 45px; }\n  .progress-component .img-wrap {\n    float: left;\n    width: 100px;\n    text-align: center;\n    border: 1px solid rgba(0, 0, 0, 0.6);\n    height: 100%; }\n    .progress-component .img-wrap img {\n      vertical-align: top;\n      max-width: 100%;\n      max-height: 100%;\n      object-fit: contain; }\n  .progress-component .info {\n    float: left;\n    padding-left: 10px;\n    width: 150px; }\n    .progress-component .info .describe {\n      line-height: 18px;\n      margin-top: 8px;\n      height: 36px;\n      overflow: hidden; }\n  .progress-component .pregress-play-btn {\n    display: inline-block;\n    position: absolute;\n    right: 6px;\n    bottom: 0px;\n    font-size: 28px;\n    color: #ca7838;\n    cursor: pointer; }\n  .progress-component .icon-arrowdown {\n    left: -2px;\n    position: absolute;\n    font-size: 31px;\n    color: rgba(0, 0, 0, 0.35);\n    line-height: 6px;\n    top: 100%; }\n', ''])
}, function (A, t) {
    A.exports = 'data:application/font-woff;base64,d09GRgABAAAAAARoAAsAAAAABswAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8mUkYY21hcAAAAYAAAABWAAABhmkn0RRnbHlmAAAB2AAAAJEAAACsoFCg7WhlYWQAAAJsAAAALwAAADYU+6wjaGhlYQAAApwAAAAeAAAAJAfeA4VobXR4AAACvAAAAAwAAAAMDAEAAGxvY2EAAALIAAAACAAAAAgADgBWbWF4cAAAAtAAAAAeAAAAIAEQADBuYW1lAAAC8AAAAUUAAAJtPlT+fXBvc3QAAAQ4AAAALgAAAD/D5yXjeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeKT9XY27438AQw9zA0AAUZgTJAQDi6gwteJztkMENgDAMAy9p6QOxBRLiwUC8GJ+OUdwUtsDSxYqTl4EJSOIQGezC6DqVWuSJOfIcP0Vu+L3WrTX4XDLdSrhrFH4tMfd3897WoDdbtwH+ADzlDm4AAHicTYu7DcIwGITvt/FDjiIEQnFtRTItBQTmQGIBJskWbOQeUURykyI7pEKGP12uuu8eILDEQB8IgIIXQ7kzvZdYAr9+A9mjgkfLvYZp4DtcI2TEkQ2jhmwOW9Lxsjt3XiCVWSlyKZFTqswpl5E55EyBeXxaO9m6tvKxlKvx97RaZX6JyuzNSxtHN2c0/rNfLF8AAAB4nGNgZGBgAGLxnctexvPbfGXgZmEAgRvvTIQR9P8GFgbmBiCXg4EJJAoAMOgKOgB4nGNgZGBgbvjfwBDDAmQxMLAwMIBpJMAMAEciAm0AAAQAAAAEAAAABAEAAAAAAAAADgBWeJxjYGRgYGBmUAFiEGACYi4gZGD4D+YzAAAMZAFBAAB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxjYGKAAC4G7ICZkYmRmZGFgS+xqCi/PCW/PE83Ob+gkqUgJ7GSgQEAYa8HrwAA'
}, function (A, t) {
    A.exports = 'data:font/ttf;base64,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'
}, function (A, t) {
    A.exports = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPCEtLQoyMDEzLTktMzA6IENyZWF0ZWQuCi0tPgo8c3ZnPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgaWNvbmZvbnQKPC9tZXRhZGF0YT4KPGRlZnM+Cgo8Zm9udCBpZD0iaWNvbmZvbnQiIGhvcml6LWFkdi14PSIxMDI0IiA+CiAgPGZvbnQtZmFjZQogICAgZm9udC1mYW1pbHk9Imljb25mb250IgogICAgZm9udC13ZWlnaHQ9IjUwMCIKICAgIGZvbnQtc3RyZXRjaD0ibm9ybWFsIgogICAgdW5pdHMtcGVyLWVtPSIxMDI0IgogICAgYXNjZW50PSI4OTYiCiAgICBkZXNjZW50PSItMTI4IgogIC8+CiAgICA8bWlzc2luZy1nbHlwaCAvPgogICAgCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYXJyb3dkb3duLWNvcHkiIHVuaWNvZGU9IiYjNTg5MTU7IiBkPSJNNzI2LjY1MyA0NjYuNjk0aC00MjkuMzA2bDIxNC44NDYtMjA4Ljg1MXoiICBob3Jpei1hZHYteD0iMTAyNCIgLz4KCiAgICAKICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJwbGF5IiB1bmljb2RlPSImIzU5MTc0OyIgZD0iTTUxMiA4NTMuMzMyOTkyQzI1NC43MzMzMTIgODUzLjMzMjk5MiA0Mi42NjU5ODQgNjQxLjI2MzYxNiA0Mi42NjU5ODQgMzg0czIxMi4wNjczMjgtNDY5LjMzMTk2OCA0NjkuMzMxOTY4LTQ2OS4zMzE5NjhjMjU3LjI2NDY0IDAgNDY5LjMzNDAxNiAyMTIuMDY3MzI4IDQ2OS4zMzQwMTYgNDY5LjMzMTk2OCAwIDI1Ny4yNjQ2NC0yMTIuMDY5Mzc2IDQ2OS4zMzQwMTYtNDY5LjMzNDAxNiA0NjkuMzM0MDE2TTUxMi0xMjhDMjI4LjY5Mjk5Mi0xMjggMCAxMDAuNjkyOTkyIDAgMzg0IDAgNjY3LjMwNzAwOCAyMjguNjkyOTkyIDg5NiA1MTIgODk2YzI4My4zMDcwMDggMCA1MTItMjI4LjY5Mjk5MiA1MTItNTEyIDAtMjgzLjMwNzAwOC0yMjguNjkyOTkyLTUxMi01MTItNTEyTTYzMS44ODM3NzYgMzk5Ljg5NzZjMTAuNjE4ODgtNy45NDkzMTIgMTAuNjE4ODgtMjMuODQ2OTEyIDAtMzEuNzk1Mkw0MDUuMjM3NzYgMjE3LjA2NzUyQzM5NC42MTg4OCAyMDkuMTE5MjMyIDM4NCAyMTQuNDE3NDA4IDM4NCAyMjcuNjY1OTJWNTQwLjMzMjAzMmMwIDEzLjI0OTUzNiAxMC42MTk5MDQgMTguNTQ4NzM2IDIxLjIzNzc2IDEwLjYwMDQ0OGwyMjYuNjQ2MDE2LTE1MS4wMzQ4OHoiICBob3Jpei1hZHYteD0iMTAyNSIgLz4KCiAgICAKCgogIDwvZm9udD4KPC9kZWZzPjwvc3ZnPgo='
}, function (A, t, e) {
    var n = e(50)
    typeof n === 'string' && (n = [
        [A.i, n, '']
    ])
    e(1)(n, {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    }), n.locals && (A.exports = n.locals)
}, function (A, t, e) {
    (A.exports = e(0)(!1)).push([A.i, '.player-hidden {\n  display: none !important; }\n\n.quality-components {\n  float: right;\n  color: #fff;\n  height: 35px;\n  position: relative;\n  box-sizing: border-box;\n  margin-top: 4px; }\n\n.current-quality {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  width: 70px;\n  cursor: pointer; }\n\n.quality-list {\n  position: absolute;\n  bottom: 46px;\n  display: none;\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n  .quality-list li {\n    text-align: center;\n    width: 70px;\n    line-height: 30px;\n    background-color: rgba(0, 0, 0, 0.6);\n    cursor: pointer; }\n    .quality-list li.current {\n      color: #00c1de; }\n    .quality-list li + li {\n      border-top: 1px solid rgba(78, 78, 78, 0.3); }\n    .quality-list li:hover {\n      background-color: rgba(0, 0, 0, 0.5); }\n\n.quality-modal {\n  position: absolute;\n  bottom: 20%;\n  left: 5%;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 5px;\n  color: #fff;\n  padding: 10px 15px;\n  font-size: 14px;\n  display: none; }\n  .quality-modal span.current-quality-tag {\n    color: #00c1de; }\n\n@media (max-width: 768px) {\n  .current-quality {\n    width: 40px; }\n  .quality-list li {\n    width: 45px; } }\n', ''])
}, function (A, t, e) {
    var n = e(52)
    typeof n === 'string' && (n = [
        [A.i, n, '']
    ])
    e(1)(n, {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    }), n.locals && (A.exports = n.locals)
}, function (A, t, e) {
    (A.exports = e(0)(!1)).push([A.i, '.player-hidden {\n  display: none !important; }\n\n.rate-components {\n  float: right;\n  color: #fff;\n  height: 35px;\n  position: relative;\n  box-sizing: border-box;\n  margin-top: 5px; }\n\n.current-rate {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  width: 70px;\n  cursor: pointer; }\n\n.rate-list {\n  position: absolute;\n  bottom: 46px;\n  display: none;\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n  .rate-list li {\n    text-align: center;\n    width: 70px;\n    line-height: 30px;\n    background-color: rgba(0, 0, 0, 0.6);\n    cursor: pointer; }\n    .rate-list li.current {\n      color: #00c1de; }\n    .rate-list li + li {\n      border-top: 1px solid rgba(78, 78, 78, 0.3); }\n    .rate-list li:hover {\n      background-color: rgba(0, 0, 0, 0.5); }\n\n@media (max-width: 768px) {\n  .current-rate {\n    width: 40px; }\n  .rate-list li {\n    width: 43px; } }\n', ''])
}, function (A, t, e) {
    var n = e(54)
    typeof n === 'string' && (n = [
        [A.i, n, '']
    ])
    e(1)(n, {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    }), n.locals && (A.exports = n.locals)
}, function (A, t, e) {
    (A.exports = e(0)(!1)).push([A.i, '.aliplayer-rotate-mirror {\n  float: right;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  height: 35px;\n  position: relative;\n  margin-top: 5px; }\n  .aliplayer-rotate-mirror i {\n    color: #fff;\n    display: inline-block;\n    font-size: 22px;\n    display: block;\n    margin-top: 7px;\n    cursor: pointer;\n    margin-right: 10px; }\n    .aliplayer-rotate-mirror i.icon-player-switch {\n      font-size: 24px;\n      font-weight: bold; }\n    @media (min-width: 768px) {\n      .aliplayer-rotate-mirror i:hover + .player-tooltip {\n        display: block; } }\n  .aliplayer-rotate-mirror .mirror-option {\n    position: absolute;\n    background-color: #3c3c3c;\n    top: 0;\n    transform: translateY(-103%);\n    right: -20px; }\n    .aliplayer-rotate-mirror .mirror-option .mirror-item {\n      font-size: 14px;\n      color: #ebecec;\n      line-height: 30px;\n      white-space: nowrap;\n      padding: 0 15px;\n      cursor: pointer;\n      user-select: none; }\n      .aliplayer-rotate-mirror .mirror-option .mirror-item[data-id="counterclockwise"] {\n        display: none; }\n      .aliplayer-rotate-mirror .mirror-option .mirror-item[data-id="clockwise"] {\n        display: none; }\n      .aliplayer-rotate-mirror .mirror-option .mirror-item.active {\n        background-color: rgba(216, 216, 216, 0.1);\n        color: #00c1de; }\n  .aliplayer-rotate-mirror .player-tooltip.counterclockwise {\n    left: -35px; }\n  .aliplayer-rotate-mirror .player-tooltip.clockwise {\n    left: -5px; }\n  .aliplayer-rotate-mirror .player-tooltip.switch {\n    right: 7px; }\n  @media (max-width: 768px) {\n    .aliplayer-rotate-mirror .mirror-option .mirror-item[data-id="counterclockwise"] {\n      display: block; }\n    .aliplayer-rotate-mirror .mirror-option .mirror-item[data-id="clockwise"] {\n      display: block; } }\n', ''])
}, function (A, t, e) {
    var n = e(56)
    typeof n === 'string' && (n = [
        [A.i, n, '']
    ])
    e(1)(n, {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    }), n.locals && (A.exports = n.locals)
}, function (A, t, e) {
    (A.exports = e(0)(!1)).push([A.i, '.start-ad {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  background-color: #000;\n  position: absolute;\n  z-index: 9999; }\n  .start-ad .tip {\n    position: absolute;\n    right: 5px;\n    top: 5px;\n    background-color: #333;\n    color: #fff;\n    font-size: 14px;\n    text-align: center;\n    padding: 3px 7px; }\n    .start-ad .tip i {\n      font-style: normal; }\n  .start-ad a {\n    width: 100%;\n    height: 100%;\n    display: inline-block;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .start-ad a img {\n      max-width: 100%;\n      max-height: 100%; }\n', ''])
}, function (A, t, e) {
    var n = e(58)
    typeof n === 'string' && (n = [
        [A.i, n, '']
    ])
    e(1)(n, {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    }), n.locals && (A.exports = n.locals)
}, function (A, t, e) {
    (A.exports = e(0)(!1)).push([A.i, ".video-ad-component {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2147483647;\n  background-color: #000;\n  font-size: 12px; }\n  .video-ad-component #video-ad-content {\n    width: 100%;\n    height: 100%; }\n  .video-ad-component .video-ad-link {\n    width: 100%;\n    height: 100%;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n  .video-ad-component .video-ad-close {\n    background-color: rgba(59, 59, 59, 0.85);\n    position: absolute;\n    top: 15px;\n    right: 20px;\n    color: #fff;\n    line-height: 26px;\n    padding: 0 10px;\n    user-select: none; }\n    .video-ad-component .video-ad-close #video-ad-duration {\n      color: #00c1de;\n      vertical-align: top;\n      font-size: 14px;\n      position: relative;\n      display: inline-block;\n      text-align: right; }\n      .video-ad-component .video-ad-close #video-ad-duration::after {\n        background-color: #fff;\n        position: absolute;\n        content: '';\n        right: -7px;\n        top: 8px;\n        bottom: 8px;\n        width: 1px; }\n    .video-ad-component .video-ad-close label {\n      cursor: pointer;\n      display: inline-block; }\n    .video-ad-component .video-ad-close .icon-close {\n      font-size: 12px;\n      vertical-align: top; }\n      @media (min-width: 768px) {\n        .video-ad-component .video-ad-close .icon-close:hover {\n          color: #00c1de; } }\n    .video-ad-component .video-ad-close .video-ad-close-text {\n      padding: 0 5px 0 10px; }\n  .video-ad-component .video-ad-detail {\n    position: absolute;\n    right: 35px;\n    bottom: 30px;\n    background-color: rgba(0, 222, 255, 0.85);\n    color: #fff;\n    padding: 8px 12px;\n    user-select: none;\n    cursor: pointer;\n    transition: background-color .15s; }\n    @media (min-width: 768px) {\n      .video-ad-component .video-ad-detail:hover {\n        background-color: #00deff; } }\n  .video-ad-component .autoplay-video-ad {\n    position: absolute;\n    color: #fff;\n    top: 50%;\n    left: 50%;\n    text-align: center;\n    padding: 10px;\n    border-radius: 5px;\n    background-color: rgba(144, 147, 153, 0.85);\n    transform: translate(-50%, -50%);\n    display: none; }\n    .video-ad-component .autoplay-video-ad i {\n      font-size: 42px;\n      margin-bottom: 7px;\n      display: inline-block;\n      cursor: pointer; }\n      .video-ad-component .autoplay-video-ad i + span {\n        margin-bottom: 5px; }\n    .video-ad-component .autoplay-video-ad span {\n      display: block; }\n\n.controlbar-element-hidden {\n  display: none !important; }\n", ''])
}, function (A, t, e) {
    var n = e(60)
    typeof n === 'string' && (n = [
        [A.i, n, '']
    ])
    e(1)(n, {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    }), n.locals && (A.exports = n.locals)
}, function (A, t, e) {
    (A.exports = e(0)(!1)).push([A.i, '.player-hidden {\n  display: none !important; }\n\n.caption-components {\n  float: right;\n  color: #fff;\n  height: 35px;\n  position: relative;\n  box-sizing: border-box;\n  margin-top: 5px; }\n\n.current-caption {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  width: 100px;\n  cursor: pointer; }\n\n.caption-list {\n  position: absolute;\n  bottom: 46px;\n  display: none;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  height: 150px;\n  width: 100px;\n  overflow-y: scroll; }\n  .caption-list li {\n    text-align: center;\n    width: 100px;\n    line-height: 30px;\n    background-color: rgba(0, 0, 0, 0.6);\n    cursor: pointer; }\n    .caption-list li.current {\n      color: #00c1de; }\n    .caption-list li + li {\n      border-top: 1px solid rgba(78, 78, 78, 0.3); }\n    .caption-list li:hover {\n      background-color: rgba(0, 0, 0, 0.5); }\n\n@media (max-width: 768px) {\n  .current-caption {\n    width: 40px; }\n  .caption-list li {\n    width: 43px; } }\n\n.prism-player .prism-info-display .switchimg {\n  color: #fff; }\n', ''])
}, function (A, t, e) {
    var n = e(62)
    typeof n === 'string' && (n = [
        [A.i, n, '']
    ])
    e(1)(n, {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    }), n.locals && (A.exports = n.locals)
}, function (A, t, e) {
    (A.exports = e(0)(!1)).push([A.i, '.player-hidden {\n  display: none !important; }\n\n.track-components {\n  float: right;\n  color: #fff;\n  height: 35px;\n  position: relative;\n  box-sizing: border-box;\n  margin-top: 5px; }\n\n.current-track {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  width: 100px;\n  cursor: pointer; }\n\n.track-list {\n  position: absolute;\n  bottom: 46px;\n  display: none;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  height: auto;\n  width: 100px;\n  overflow-y: scroll; }\n  .track-list li {\n    text-align: center;\n    width: 100px;\n    line-height: 30px;\n    background-color: rgba(0, 0, 0, 0.6);\n    cursor: pointer; }\n    .track-list li.current {\n      color: #00c1de; }\n    .track-list li + li {\n      border-top: 1px solid rgba(78, 78, 78, 0.3); }\n    .track-list li:hover {\n      background-color: rgba(0, 0, 0, 0.5); }\n\n@media (max-width: 768px) {\n  .current-track {\n    width: 40px; }\n  .track-list li {\n    width: 43px; } }\n\n.prism-player .prism-info-display .switchimg {\n  color: #fff; }\n', ''])
}, function (A, t, e) {
    var n = e(64)
    typeof n === 'string' && (n = [
        [A.i, n, '']
    ])
    e(1)(n, {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    }), n.locals && (A.exports = n.locals)
}, function (A, t, e) {
    (A.exports = e(0)(!1)).push([A.i, ".many-video-ad-component {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2147483647;\n  background-color: #000;\n  font-size: 12px; }\n  .many-video-ad-component #many-video-ad-content {\n    width: 100%;\n    height: 100%; }\n  .many-video-ad-component .many-video-ad-link {\n    width: 100%;\n    height: 100%;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n  .many-video-ad-component .many-video-ad-close {\n    background-color: rgba(59, 59, 59, 0.85);\n    position: absolute;\n    top: 15px;\n    right: 20px;\n    color: #fff;\n    line-height: 26px;\n    padding: 0 10px;\n    user-select: none; }\n    .many-video-ad-component .many-video-ad-close #many-video-ad-duration {\n      color: #00c1de;\n      vertical-align: top;\n      font-size: 14px;\n      position: relative;\n      display: inline-block;\n      text-align: right; }\n      .many-video-ad-component .many-video-ad-close #many-video-ad-duration::after {\n        background-color: #fff;\n        position: absolute;\n        content: '';\n        right: -7px;\n        top: 8px;\n        bottom: 8px;\n        width: 1px; }\n    .many-video-ad-component .many-video-ad-close label {\n      cursor: pointer;\n      display: inline-block; }\n    .many-video-ad-component .many-video-ad-close .icon-close {\n      font-size: 12px;\n      vertical-align: top; }\n      @media (min-width: 768px) {\n        .many-video-ad-component .many-video-ad-close .icon-close:hover {\n          color: #00c1de; } }\n    .many-video-ad-component .many-video-ad-close .many-video-ad-close-text {\n      padding: 0 5px 0 10px; }\n  .many-video-ad-component .many-video-ad-detail {\n    position: absolute;\n    right: 35px;\n    bottom: 30px;\n    background-color: rgba(0, 222, 255, 0.85);\n    color: #fff;\n    padding: 8px 12px;\n    user-select: none;\n    cursor: pointer;\n    transition: background-color .15s; }\n    @media (min-width: 768px) {\n      .many-video-ad-component .many-video-ad-detail:hover {\n        background-color: #00deff; } }\n  .many-video-ad-component .autoplay-many-video-ad {\n    position: absolute;\n    color: #fff;\n    top: 50%;\n    left: 50%;\n    text-align: center;\n    padding: 10px;\n    border-radius: 5px;\n    background-color: rgba(144, 147, 153, 0.85);\n    transform: translate(-50%, -50%);\n    display: none; }\n    .many-video-ad-component .autoplay-many-video-ad i {\n      font-size: 42px;\n      margin-bottom: 7px;\n      display: inline-block;\n      cursor: pointer; }\n      .many-video-ad-component .autoplay-many-video-ad i + span {\n        margin-bottom: 5px; }\n    .many-video-ad-component .autoplay-many-video-ad span {\n      display: block; }\n\n.controlbar-element-hidden {\n  display: none !important; }\n", ''])
}, function (A, t, e) {
    var n = e(66)
    typeof n === 'string' && (n = [
        [A.i, n, '']
    ])
    e(1)(n, {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    }), n.locals && (A.exports = n.locals)
}, function (A, t, e) {
    var n = e(2);
    (A.exports = e(0)(!1)).push([A.i, '@font-face {\n  font-family: "iconfont";\n  src: url(' + n(e(4)) + ');\n  /* IE9*/\n  src: url(' + n(e(4)) + '#iefix) format("embedded-opentype"), url("data:application/x-font-woff;charset=utf-8;base64,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") format("woff"), url(' + n(e(67)) + ') format("truetype"), url(' + n(e(68)) + '#iconfont) format("svg");\n  /* iOS 4.1- */ }\n\n.iconfont {\n  font-family: "iconfont" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.icon-list:before {\n  content: "\\E643"; }\n\n.icon-skipnext:before {\n  content: "\\EA9E"; }\n\n.icon-skip-previous:before {\n  content: "\\E6D3"; }\n\n.icon-close:before {\n  content: "\\E616"; }\n\n.icon-player-rotate-left:before {\n  content: "\\E658"; }\n\n.icon-player-rotate-right:before {\n  content: "\\E659"; }\n\n.icon-player-switch:before {\n  content: "\\E781"; }\n\n.icon-danmu-close:before {\n  content: "\\E696"; }\n\n.icon-danmu-open:before {\n  content: "\\E697"; }\n\n.icon-player-play:before {\n  content: "\\E641"; }\n', ''])
}, function (A, t) {
    A.exports = 'data:font/ttf;base64,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Ly8vRS8vL0YuLi6jAmNKSmMCAmNKSmP+0wFJNjZJAQFJNjZJtQcHUjEHDhIIQQcHYgcSAAACAAD/0wOqAzQAIQBDAAA3IT4BNzU0NjIWHQEOAQchFxYUBiIvAS4BNTQ/ATYyFhQHASEOAQcVFAYiJj0BPgE3IScmNDYyHwEeARUUDwEGIiY0N8YCGio1AREeEQJZRf3NdgoUGQqcBQUKnAoZFAoCJ/2WKjUBER4RAllFAlNdCRMZCp0FBQqdChkTCcABNSpgDxERD2BFWQJ2ChkUCp0FDAUOCJ0KFBkKAUoBNSpgDxERD2BFWQJdChkTCaAFDQUNCZ0KFBkKAAAAEgDeAAEAAAAAAAAAFQAAAAEAAAAAAAEACAAVAAEAAAAAAAIABwAdAAEAAAAAAAMACAAkAAEAAAAAAAQACAAsAAEAAAAAAAUACwA0AAEAAAAAAAYACAA/AAEAAAAAAAoAKwBHAAEAAAAAAAsAEwByAAMAAQQJAAAAKgCFAAMAAQQJAAEAEACvAAMAAQQJAAIADgC/AAMAAQQJAAMAEADNAAMAAQQJAAQAEADdAAMAAQQJAAUAFgDtAAMAAQQJAAYAEAEDAAMAAQQJAAoAVgETAAMAAQQJAAsAJgFpCkNyZWF0ZWQgYnkgaWNvbmZvbnQKaWNvbmZvbnRSZWd1bGFyaWNvbmZvbnRpY29uZm9udFZlcnNpb24gMS4waWNvbmZvbnRHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQAKAEMAcgBlAGEAdABlAGQAIABiAHkAIABpAGMAbwBuAGYAbwBuAHQACgBpAGMAbwBuAGYAbwBuAHQAUgBlAGcAdQBsAGEAcgBpAGMAbwBuAGYAbwBuAHQAaQBjAG8AbgBmAG8AbgB0AFYAZQByAHMAaQBvAG4AIAAxAC4AMABpAGMAbwBuAGYAbwBuAHQARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQABeAUxbXVsdQhza2lwbmV4dAVjbG9zZQRwbGF5DXNraXAtcHJldmlvdXMRYXJyb3ctcm90YXRlLWxlZnQSYXJyb3ctcm90YXRlLXJpZ2h0EmJvZmFuZ3FpLWRhbm11Z3VhbhFib2ZhbmdxaS1kYW5tdWthaQ5uZWlyb25ncWllaHVhbgAA'
}, function (A, t) {
    A.exports = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPCEtLQoyMDEzLTktMzA6IENyZWF0ZWQuCi0tPgo8c3ZnPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgaWNvbmZvbnQKPC9tZXRhZGF0YT4KPGRlZnM+Cgo8Zm9udCBpZD0iaWNvbmZvbnQiIGhvcml6LWFkdi14PSIxMDI0IiA+CiAgPGZvbnQtZmFjZQogICAgZm9udC1mYW1pbHk9Imljb25mb250IgogICAgZm9udC13ZWlnaHQ9IjUwMCIKICAgIGZvbnQtc3RyZXRjaD0ibm9ybWFsIgogICAgdW5pdHMtcGVyLWVtPSIxMDI0IgogICAgYXNjZW50PSI4OTYiCiAgICBkZXNjZW50PSItMTI4IgogIC8+CiAgICA8bWlzc2luZy1nbHlwaCAvPgogICAgCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ieCIgdW5pY29kZT0ieCIgaG9yaXotYWR2LXg9IjEwMDEiCmQ9Ik0yODEgNTQzcS0yNyAtMSAtNTMgLTFoLTgzcS0xOCAwIC0zNi41IC02dC0zMi41IC0xOC41dC0yMyAtMzJ0LTkgLTQ1LjV2LTc2aDkxMnY0MXEwIDE2IC0wLjUgMzB0LTAuNSAxOHEwIDEzIC01IDI5dC0xNyAyOS41dC0zMS41IDIyLjV0LTQ5LjUgOWgtMTMzdi05N2gtNDM4djk3ek05NTUgMzEwdi01MnEwIC0yMyAwLjUgLTUydDAuNSAtNTh0LTEwLjUgLTQ3LjV0LTI2IC0zMHQtMzMgLTE2dC0zMS41IC00LjVxLTE0IC0xIC0yOS41IC0wLjUKdC0yOS41IDAuNWgtMzJsLTQ1IDEyOGgtNDM5bC00NCAtMTI4aC0yOWgtMzRxLTIwIDAgLTQ1IDFxLTI1IDAgLTQxIDkuNXQtMjUuNSAyM3QtMTMuNSAyOS41dC00IDMwdjE2N2g5MTF6TTE2MyAyNDdxLTEyIDAgLTIxIC04LjV0LTkgLTIxLjV0OSAtMjEuNXQyMSAtOC41cTEzIDAgMjIgOC41dDkgMjEuNXQtOSAyMS41dC0yMiA4LjV6TTMxNiAxMjNxLTggLTI2IC0xNCAtNDhxLTUgLTE5IC0xMC41IC0zN3QtNy41IC0yNXQtMyAtMTV0MSAtMTQuNQp0OS41IC0xMC41dDIxLjUgLTRoMzdoNjdoODFoODBoNjRoMzZxMjMgMCAzNCAxMnQyIDM4cS01IDEzIC05LjUgMzAuNXQtOS41IDM0LjVxLTUgMTkgLTExIDM5aC0zNjh6TTMzNiA0OTh2MjI4cTAgMTEgMi41IDIzdDEwIDIxLjV0MjAuNSAxNS41dDM0IDZoMTg4cTMxIDAgNTEuNSAtMTQuNXQyMC41IC01Mi41di0yMjdoLTMyN3oiIC8+CiAgICAKCiAgICAKICAgIDxnbHlwaCBnbHlwaC1uYW1lPSIxbXVsdSIgdW5pY29kZT0iJiM1ODk0NzsiIGQ9Ik0xMDcuMiA2ODMuMm0tNjcuMiAwYTQuMiA0LjIgMCAxIDAgMTM0LjQgMCA0LjIgNC4yIDAgMSAwLTEzNC40IDBaTTk4MC44IDc1MC40IDI5Ny42IDc1MC40Yy05LjYgMC0xNi04LTE2LTE2bDAtMTAyLjRjMC05LjYgOC0xNiAxNi0xNmw2ODMuMiAwYzkuNiAwIDE2IDggMTYgMTZsMCAxMDIuNEM5OTYuOCA3NDQgOTg4LjggNzUwLjQgOTgwLjggNzUwLjR6TTk2IDM5OC40bS02Ny4yIDBhNC4yIDQuMiAwIDEgMCAxMzQuNCAwIDQuMiA0LjIgMCAxIDAtMTM0LjQgMFpNOTY4IDQ2NS42IDI4NC44IDQ2NS42Yy05LjYgMC0xNi04LTE2LTE2bDAtMTAyLjRjMC05LjYgOC0xNiAxNi0xNmw2ODMuMiAwYzkuNiAwIDE2IDggMTYgMTZsMCAxMDIuNEM5ODQgNDU3LjYgOTc3LjYgNDY1LjYgOTY4IDQ2NS42ek05NiAxMDAuOG0tNjcuMiAwYTQuMiA0LjIgMCAxIDAgMTM0LjQgMCA0LjIgNC4yIDAgMSAwLTEzNC40IDBaTTk2OCAxNjggMjg0LjggMTY4Yy05LjYgMC0xNi04LTE2LTE2bDAtMTAyLjRjMC05LjYgOC0xNiAxNi0xNmw2ODMuMiAwYzkuNiAwIDE2IDggMTYgMTZsMCAxMDIuNEM5ODQgMTYwIDk3Ny42IDE2OCA5NjggMTY4eiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPgoKICAgIAogICAgPGdseXBoIGdseXBoLW5hbWU9InNraXBuZXh0IiB1bmljb2RlPSImIzYwMDYyOyIgZD0iTTY4Mi42NjY2NjcgMTIyLjAyNjY2NyA3NjggMTIyLjAyNjY2NyA3NjggNjM0LjAyNjY2NyA2ODIuNjY2NjY3IDYzNC4wMjY2NjdNMjU2IDEyMi4wMjY2NjcgNjE4LjY2NjY2NyAzNzguMDI2NjY3IDI1NiA2MzQuMDI2NjY3IDI1NiAxMjIuMDI2NjY3WiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPgoKICAgIAogICAgPGdseXBoIGdseXBoLW5hbWU9ImNsb3NlIiB1bmljb2RlPSImIzU4OTAyOyIgZD0iTTg3Ny4yMTYgNDA0LjE5Mk01NzUuMzI4IDM4NS41MDQgOTQ2Ljc4NCA3NTUuMzI4YzE3LjU2OCAxNy41MDQgMTcuNjY0IDQ1LjgyNCAwLjE5MiA2My40MjQtMTcuNTA0IDE3LjYzMi00NS43OTIgMTcuNjY0LTYzLjM2IDAuMTkyTDUxMi4wMzIgNDQ5LjA1NiAxNDMuNzEyIDgxOC43ODRDMTI2LjMwNCA4MzYuMjg4IDk3LjkyIDgzNi4zNTIgODAuMzg0IDgxOC44OCA2Mi44NDggODAxLjM3NiA2Mi44MTYgNzcyLjk5MiA4MC4yODggNzU1LjQyNGwzNjguMjI0LTM2OS42MzJMNzcuMjE2IDE2LjE5MmMtMTcuNTY4LTE3LjUwNC0xNy42NjQtNDUuODI0LTAuMTkyLTYzLjQyNCA4LjczNi04LjggMjAuMjU2LTEzLjIxNiAzMS43NzYtMTMuMjE2IDExLjQyNCAwIDIyLjg0OCA0LjM1MiAzMS41ODQgMTMuMDU2bDM3MS4zNiAzNjkuNjk2IDM3MS42OC0zNzMuMDg4Qzg5Mi4xOTItNTkuNjE2IDkwMy42OC02NCA5MTUuMTY4LTY0YzExLjQ1NiAwIDIyLjkxMiA0LjM4NCAzMS42NDggMTMuMDg4IDE3LjUwNCAxNy41MDQgMTcuNTY4IDQ1LjgyNCAwLjA5NiA2My4zOTJMNTc1LjMyOCAzODUuNTA0IDU3NS4zMjggMzg1LjUwNHpNNTc1LjMyOCAzODUuNTA0IiAgaG9yaXotYWR2LXg9IjEwMjQiIC8+CgogICAgCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icGxheSIgdW5pY29kZT0iJiM1ODk0NTsiIGQ9Ik01MTIgODkzLjk4NHEtMTM5LjAwOCAwLTI1Ni41MTItNjguNTEyVDY5LjQ3MiA2MzkuNDU2IDAuOTYgMzgyLjk0NHQ2OC41MTItMjU2LjUxMiAxODYuMDE2LTE4Ni4wMTZUNTEyLTEyOC4wOTZ0MjU2LjUxMiA2OC41MTIgMTg2LjAxNiAxODYuMDE2IDY4LjUxMiAyNTYuNTEyLTY4LjUxMiAyNTYuNTEyLTE4Ni4wMTYgMTg2LjAxNlQ1MTIgODkzLjk4NHogbTIwMC01MjQuOTkybC0yOTEuMDA4LTI0Ny4wMDhxLTYuMDE2LTYuMDE2LTE1LjAwOC02LjAxNi04IDAtMTQuNDk2IDUuNTA0dC02LjQ5NiAxNC40OTZWNjMwLjk3NnEwIDggNi40OTYgMTMuNTA0dDE1LjAwOCA1LjUwNCAxNC40OTYtNi4wMTZsMjkxLjAwOC0yNDcuMDA4cTYuMDE2LTYuMDE2IDYuMDE2LTE0LjAxNnQtNi4wMTYtMTQuMDE2eiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPgoKICAgIAogICAgPGdseXBoIGdseXBoLW5hbWU9InNraXAtcHJldmlvdXMiIHVuaWNvZGU9IiYjNTkwOTE7IiBkPSJNMjU2IDY0MGg4NS4zMzMzMzN2LTUxMkgyNTZ6TTQwNS4zMzMzMzMgMzg0bDM2Mi42NjY2NjctMjU2VjY0MHoiICBob3Jpei1hZHYteD0iMTAyNCIgLz4KCiAgICAKICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJhcnJvdy1yb3RhdGUtbGVmdCIgdW5pY29kZT0iJiM1ODk2ODsiIGQ9Ik05Ni40IDc3OS4xbDgwLjYtODAuNmM4MC43IDgxLjMgMTkyLjUgMTMxLjggMzE2LjEgMTMyIDI0Ni4yIDAuNSA0NDcuMy0xOTkuNyA0NDcuNy00NDUuOUM5NDEuMiAxMzcuNSA3NDEtNjMgNDk0LTYzYy0xMzEuOSAwLTI1MC40IDU3LjEtMzMyLjIgMTQ4LTM3LjIgNDEuNC03LjkgMTA3LjQgNDcuOCAxMDcuOSAxOC41IDAuMiAzNi4yLTcuNSA0OC41LTIxLjIgNTguMS02NC41IDE0Mi4zLTEwNS4xIDIzNS45LTEwNS4xIDE3Ni4xIDAgMzE4LjggMTQzLjUgMzE3LjMgMzIwLTEuNSAxNzYuMi0xNDUuMSAzMTYuNi0zMjEuNCAzMTQuNC04Ni42LTEuMS0xNjQuOC0zNi45LTIyMS40LTk0LjFsNzkuNi03OS42YzExLjgtMTEuOCAzLjQtMzEuOS0xMy4yLTMxLjlIODMuMmMtMTAuMyAwLTE4LjcgOC4zLTE4LjcgMTguN1Y3NjUuOWMwIDE2LjYgMjAuMSAyNSAzMS45IDEzLjJ6IiAgaG9yaXotYWR2LXg9IjEwMjQiIC8+CgogICAgCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYXJyb3ctcm90YXRlLXJpZ2h0IiB1bmljb2RlPSImIzU4OTY5OyIgZD0iTTk0MC44IDc2NS45di0yNTEuOGMwLTEwLjQtOC40LTE4LjctMTguNy0xOC43SDY3MC40Yy0xNi42IDAtMjUgMjAuMS0xMy4yIDMxLjlsNzkuNiA3OS42Yy01Ni42IDU3LjItMTM0LjggOTMtMjIxLjQgOTQuMS0xNzYuMyAyLjItMzE5LjktMTM4LjItMzIxLjQtMzE0LjQtMS41LTE3Ni41IDE0MS4yLTMyMCAzMTcuMy0zMjAgOTMuNiAwIDE3Ny44IDQwLjYgMjM1LjkgMTA1LjEgMTIuMyAxMy43IDMwIDIxLjQgNDguNSAyMS4yIDU1LjctMC41IDg1LTY2LjUgNDcuOC0xMDcuOS04MS44LTkwLjktMjAwLjMtMTQ4LTMzMi4yLTE0OC0yNDcgMC00NDcuMiAyMDAuNS00NDYuOCA0NDcuNkM2NC45IDYzMC44IDI2NiA4MzEgNTEyLjIgODMwLjVjMTIzLjYtMC4yIDIzNS40LTUwLjcgMzE2LjEtMTMybDgwLjYgODAuNmMxMS44IDExLjggMzEuOSAzLjQgMzEuOS0xMy4yeiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPgoKICAgIAogICAgPGdseXBoIGdseXBoLW5hbWU9ImJvZmFuZ3FpLWRhbm11Z3VhbiIgdW5pY29kZT0iJiM1OTAzMDsiIGQ9Ik01NTguNTQ1NDU1IDE3NC41NDU0NTVIMTU1LjkyNzI3M0MxMjMuMzQ1NDU1IDE3NC41NDU0NTUgOTMuMDkwOTA5IDIwNC44IDkzLjA5MDkwOSAyMzcuMzgxODE4VjU3Ny4xNjM2MzZDOTMuMDkwOTA5IDYwOS43NDU0NTUgMTIzLjM0NTQ1NSA2NDAgMTU1LjkyNzI3MyA2NDBoNTcyLjUwOTA5MWMzMi41ODE4MTggMCA2Mi44MzYzNjQtMzAuMjU0NTQ1IDYyLjgzNjM2My02Mi44MzYzNjRWNTQ2LjkwOTA5MWMwLTEzLjk2MzYzNiA5LjMwOTA5MS0yMy4yNzI3MjcgMjMuMjcyNzI4LTIzLjI3MjcyN3MyMy4yNzI3MjcgOS4zMDkwOTEgMjMuMjcyNzI3IDIzLjI3MjcyN3YzMC4yNTQ1NDVjMCA1OC4xODE4MTgtNTEuMiAxMDkuMzgxODE4LTEwOS4zODE4MTggMTA5LjM4MTgxOUgxNTUuOTI3MjczQzk3Ljc0NTQ1NSA2ODYuNTQ1NDU1IDQ2LjU0NTQ1NSA2MzUuMzQ1NDU1IDQ2LjU0NTQ1NSA1NzcuMTYzNjM2di0zMzkuNzgxODE4QzQ2LjU0NTQ1NSAxNzkuMiA5Ny43NDU0NTUgMTI4IDE1NS45MjcyNzMgMTI4SDU1OC41NDU0NTVjMTMuOTYzNjM2IDAgMjMuMjcyNzI3IDkuMzA5MDkxIDIzLjI3MjcyNyAyMy4yNzI3MjdzLTkuMzA5MDkxIDIzLjI3MjcyNy0yMy4yNzI3MjcgMjMuMjcyNzI4ek0zMjUuODE4MTgyIDU0Ni45MDkwOTFoNDYuNTQ1NDU0di00Ni41NDU0NTVoLTQ2LjU0NTQ1NHpNNDE4LjkwOTA5MSA1NDYuOTA5MDkxaDE4Ni4xODE4MTh2LTQ2LjU0NTQ1NWgtMTg2LjE4MTgxOHpNMTg2LjE4MTgxOCA0MzAuNTQ1NDU1aDQ2LjU0NTQ1NXYtNDYuNTQ1NDU1SDE4Ni4xODE4MTh6TTI3OS4yNzI3MjcgNDMwLjU0NTQ1NWgxODYuMTgxODE4di00Ni41NDU0NTVoLTE4Ni4xODE4MTh6TTI3OS4yNzI3MjcgMzE0LjE4MTgxOGg0Ni41NDU0NTV2LTQ2LjU0NTQ1NGgtNDYuNTQ1NDU1ek0zNzIuMzYzNjM2IDMxNC4xODE4MThoMTg2LjE4MTgxOXYtNDYuNTQ1NDU0aC0xODYuMTgxODE5ek04MDIuOTA5MDkxIDQzMC41NDU0NTVjLTk1LjQxODE4MiAwLTE3NC41NDU0NTUtNzkuMTI3MjczLTE3NC41NDU0NTUtMTc0LjU0NTQ1NXM3OS4xMjcyNzMtMTc0LjU0NTQ1NSAxNzQuNTQ1NDU1LTE3NC41NDU0NTUgMTc0LjU0NTQ1NSA3OS4xMjcyNzMgMTc0LjU0NTQ1NCAxNzQuNTQ1NDU1LTc5LjEyNzI3MyAxNzQuNTQ1NDU1LTE3NC41NDU0NTQgMTc0LjU0NTQ1NXogbTAtMzAyLjU0NTQ1NWMtNjkuODE4MTgyIDAtMTI4IDU4LjE4MTgxOC0xMjggMTI4IDAgMjMuMjcyNzI3IDYuOTgxODE4IDQ0LjIxODE4MiAxNi4yOTA5MDkgNjIuODM2MzY0bDE3NC41NDU0NTUtMTc0LjU0NTQ1NWMtMTguNjE4MTgyLTkuMzA5MDkxLTM5LjU2MzYzNi0xNi4yOTA5MDktNjIuODM2MzY0LTE2LjI5MDkwOXogbTk3Ljc0NTQ1NCA0Ni41NDU0NTVMNzIxLjQ1NDU0NSAzNTMuNzQ1NDU1YzIzLjI3MjcyNyAxOC42MTgxODIgNTEuMiAzMC4yNTQ1NDUgODEuNDU0NTQ2IDMwLjI1NDU0NSA2OS44MTgxODIgMCAxMjgtNTguMTgxODE4IDEyOC0xMjggMC0zMC4yNTQ1NDUtMTEuNjM2MzY0LTYwLjUwOTA5MS0zMC4yNTQ1NDYtODEuNDU0NTQ1eiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPgoKICAgIAogICAgPGdseXBoIGdseXBoLW5hbWU9ImJvZmFuZ3FpLWRhbm11a2FpIiB1bmljb2RlPSImIzU5MDMxOyIgZD0iTTU1OC41NDU0NTUgMTc0LjU0NTQ1NUgxNTUuOTI3MjczQzEyMy4zNDU0NTUgMTc0LjU0NTQ1NSA5My4wOTA5MDkgMjA0LjggOTMuMDkwOTA5IDIzNy4zODE4MThWNTc3LjE2MzYzNkM5My4wOTA5MDkgNjA5Ljc0NTQ1NSAxMjMuMzQ1NDU1IDY0MCAxNTUuOTI3MjczIDY0MGg1NzIuNTA5MDkxYzMyLjU4MTgxOCAwIDYyLjgzNjM2NC0zMC4yNTQ1NDUgNjIuODM2MzYzLTYyLjgzNjM2NFY1NDYuOTA5MDkxYzAtMTMuOTYzNjM2IDkuMzA5MDkxLTIzLjI3MjcyNyAyMy4yNzI3MjgtMjMuMjcyNzI3czIzLjI3MjcyNyA5LjMwOTA5MSAyMy4yNzI3MjcgMjMuMjcyNzI3djMwLjI1NDU0NWMwIDU4LjE4MTgxOC01MS4yIDEwOS4zODE4MTgtMTA5LjM4MTgxOCAxMDkuMzgxODE5SDE1NS45MjcyNzNDOTcuNzQ1NDU1IDY4Ni41NDU0NTUgNDYuNTQ1NDU1IDYzNS4zNDU0NTUgNDYuNTQ1NDU1IDU3Ny4xNjM2MzZ2LTMzOS43ODE4MThDNDYuNTQ1NDU1IDE3OS4yIDk3Ljc0NTQ1NSAxMjggMTU1LjkyNzI3MyAxMjhINTU4LjU0NTQ1NWMxMy45NjM2MzYgMCAyMy4yNzI3MjcgOS4zMDkwOTEgMjMuMjcyNzI3IDIzLjI3MjcyN3MtOS4zMDkwOTEgMjMuMjcyNzI3LTIzLjI3MjcyNyAyMy4yNzI3Mjh6TTMyNS44MTgxODIgNTQ2LjkwOTA5MWg0Ni41NDU0NTR2LTQ2LjU0NTQ1NWgtNDYuNTQ1NDU0ek00MTguOTA5MDkxIDU0Ni45MDkwOTFoMTg2LjE4MTgxOHYtNDYuNTQ1NDU1aC0xODYuMTgxODE4ek0xODYuMTgxODE4IDQzMC41NDU0NTVoNDYuNTQ1NDU1di00Ni41NDU0NTVIMTg2LjE4MTgxOHpNMjc5LjI3MjcyNyA0MzAuNTQ1NDU1aDE4Ni4xODE4MTh2LTQ2LjU0NTQ1NWgtMTg2LjE4MTgxOHpNMzcyLjM2MzYzNiAzMTQuMTgxODE4aDE4Ni4xODE4MTl2LTQ2LjU0NTQ1NGgtMTg2LjE4MTgxOXpNMjc5LjI3MjcyNyAzMTQuMTgxODE4aDQ2LjU0NTQ1NXYtNDYuNTQ1NDU0aC00Ni41NDU0NTV6TTgwMi45MDkwOTEgNDMwLjU0NTQ1NWMtOTUuNDE4MTgyIDAtMTc0LjU0NTQ1NS03OS4xMjcyNzMtMTc0LjU0NTQ1NS0xNzQuNTQ1NDU1czc5LjEyNzI3My0xNzQuNTQ1NDU1IDE3NC41NDU0NTUtMTc0LjU0NTQ1NSAxNzQuNTQ1NDU1IDc5LjEyNzI3MyAxNzQuNTQ1NDU0IDE3NC41NDU0NTUtNzkuMTI3MjczIDE3NC41NDU0NTUtMTc0LjU0NTQ1NCAxNzQuNTQ1NDU1eiBtMC0zMDIuNTQ1NDU1Yy02OS44MTgxODIgMC0xMjggNTguMTgxODE4LTEyOCAxMjhzNTguMTgxODE4IDEyOCAxMjggMTI4IDEyOC01OC4xODE4MTggMTI4LTEyOC01OC4xODE4MTgtMTI4LTEyOC0xMjh6TTkwMC42NTQ1NDUgMzA5LjUyNzI3M2MtOS4zMDkwOTEgOS4zMDkwOTEtMjMuMjcyNzI3IDkuMzA5MDkxLTMyLjU4MTgxOCAwbC04MS40NTQ1NDUtODEuNDU0NTQ2LTQ4Ljg3MjcyNyA0OC44NzI3MjhjLTkuMzA5MDkxIDkuMzA5MDkxLTIzLjI3MjcyNyA5LjMwOTA5MS0zMi41ODE4MTkgMC05LjMwOTA5MS05LjMwOTA5MS05LjMwOTA5MS0yMy4yNzI3MjcgMC0zMi41ODE4MTlsNjUuMTYzNjM3LTY1LjE2MzYzNmM5LjMwOTA5MS05LjMwOTA5MSAyMy4yNzI3MjctOS4zMDkwOTEgMzIuNTgxODE4IDBsOTcuNzQ1NDU0IDk3Ljc0NTQ1NWM5LjMwOTA5MSA5LjMwOTA5MSA5LjMwOTA5MSAyMy4yNzI3MjcgMCAzMi41ODE4MTh6IiAgaG9yaXotYWR2LXg9IjEwMjQiIC8+CgogICAgCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ibmVpcm9uZ3FpZWh1YW4iIHVuaWNvZGU9IiYjNTkyNjU7IiBkPSJNMTk4LjQgMTkyaDUzNy42YzU0LjQgMCA5NiA0MS42IDk2IDk2djk2YzAgMTkuMiAxMi44IDMyIDMyIDMyczMyLTEyLjggMzItMzJ2LTk2YzAtODkuNi03MC40LTE2MC0xNjAtMTYwaC01NjMuMmwxMTguNC0xMTguNGMxMi44LTEyLjggMTIuOC0zMiAwLTQ0LjgtMTIuOC0xMi44LTMyLTEyLjgtNDQuOCAwbC0xNTYuOCAxNTYuOGMtNi40IDYuNC05LjYgMTYtOS42IDIyLjQgMCA5LjYgMy4yIDE2IDkuNiAyMi40bDE1Ni44IDE1Ni44YzEyLjggMTIuOCAzMiAxMi44IDQ0LjggMCAxMi44LTEyLjggMTIuOC0zMiAwLTQ0LjhsLTkyLjgtODYuNHogbTY0My4yIDQxNmgtNjE3LjZjLTU0LjQgMC05Ni00MS42LTk2LTk2di05NmMwLTE5LjItMTIuOC0zMi0zMi0zMnMtMzIgMTIuOC0zMiAzMnY5NmMwIDg5LjYgNzAuNCAxNjAgMTYwIDE2MGg1OTUuMmwtOTIuOCA5Mi44Yy0xMi44IDEyLjgtMTIuOCAzMiAwIDQ0LjggMTIuOCAxMi44IDMyIDEyLjggNDQuOCAwbDE1Ni44LTE2MGM2LjQtNi40IDkuNi0xNiA5LjYtMjIuNCAwLTkuNi0zLjItMTYtOS42LTIyLjRsLTE1Ni44LTE1Ni44Yy0xMi44LTEyLjgtMzItMTIuOC00NC44IDAtMTIuOCAxMi44LTEyLjggMzIgMCA0NC44bDExNS4yIDExNS4yeiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPgoKICAgIAoKCiAgPC9mb250Pgo8L2RlZnM+PC9zdmc+Cg=='
}, function (A, t, e) {
    'use strict'
    e.r(t)
    var n = e(5)
    var i = e.n(n)
    var o = e(6)
    var r = e.n(o)
    var a = e(7)
    var l = e.n(a)
    var s = (e(29), (function () {
        var A = {
            bsearch: function (A, t, e) {
                if (A.length === 0) return 0
                if (e(t, A[0]) < 0) return 0
                if (e(t, A[A.length - 1]) >= 0) return A.length
                for (var n = 0, i = 0, o = 0, r = A.length - 1; n <= r;) {
                    if (o++, e(t, A[(i = Math.floor((r + n + 1) / 2)) - 1]) >= 0 && e(t, A[i]) < 0) return i
                    e(t, A[i - 1]) < 0 ? r = i - 1 : e(t, A[i]) >= 0 ? n = i : console.error('Program Error'), o > 1500 && console.error('Too many run cycles.')
                }
                return -1
            },
            binsert: function (t, e, n) {
                var i = A.bsearch(t, e, n)
                return t.splice(i, 0, e), i
            }
        }
        return A
    }()))
    var c = function (A, t) {
        for (var e in t) t.hasOwnProperty(e) && (A[e] = t[e])

        function n() {
            this.constructor = A
        }
        A.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n())
    }
    var d = (function () {
        function A(A, t) {
            void 0 === A && (A = 0), void 0 === t && (t = 0), this._pools = [
                []
            ], this.avoid = 1, this._width = A, this._height = t
        }
        return A.prototype.willCollide = function (A, t) {
            return A.stime + A.ttl >= t.stime + t.ttl / 2
        }, A.prototype.pathCheck = function (A, t, e) {
            for (var n = A + t.height, i = t.right, o = 0; o < e.length; o++) {
 if (!(e[o].y > n || e[o].bottom < A)) {
                    if (!(e[o].right < t.x || e[o].x > i)) return !1
                    if (this.willCollide(e[o], t)) return !1
                }
} return !0
        }, A.prototype.assign = function (A, t) {
            for (; this._pools.length <= t;) this._pools.push([])
            var e = this._pools[t]
            if (e.length === 0) return A.cindex = t, 0
            if (this.pathCheck(0, A, e)) return A.cindex = t, 0
            for (var n = 0, i = 0; i < e.length && !((n = e[i].bottom + this.avoid) + A.height > this._height); i++) { if (this.pathCheck(n, A, e)) return A.cindex = t, n }
            return this.assign(A, t + 1)
        }, A.prototype.add = function (A) {
            A.height > this._height ? (A.cindex = -2, A.y = 0) : (A.y = this.assign(A, 0), s.binsert(this._pools[A.cindex], A, function (A, t) {
                return A.bottom < t.bottom ? -1 : A.bottom > t.bottom ? 1 : 0
            }))
        }, A.prototype.remove = function (A) {
            if (!(A.cindex < 0)) {
                if (A.cindex >= this._pools.length) throw new Error('cindex out of bounds')
                var t = this._pools[A.cindex].indexOf(A)
                t < 0 || this._pools[A.cindex].splice(t, 1)
            }
        }, A.prototype.setBounds = function (A, t) {
            this._width = A, this._height = t
        }, A
    }())
    var u = (function (A) {
        function t() {
            A.apply(this, arguments)
        }
        return c(t, A), t.prototype.add = function (t) {
            A.prototype.add.call(this, t), t.x = (this._width - t.width) / 2
        }, t.prototype.willCollide = function (A, t) {
            return !0
        }, t.prototype.pathCheck = function (A, t, e) {
            for (var n = A + t.height, i = 0; i < e.length; i++) { if (!(e[i].y > n || e[i].bottom < A)) return !1 }
            return !0
        }, t
    }(d))
    var p = (c = function (A, t) {
        for (var e in t) t.hasOwnProperty(e) && (A[e] = t[e])

        function n() {
            this.constructor = A
        }
        A.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n())
    }, (function () {
        function A(t, e) {
            if (void 0 === e && (e = {}), this.mode = 1, this.stime = 0, this.text = '', this.ttl = 4e3, this.dur = 4e3, this.cindex = -1, this.motion = [], this.movable = !0, this._alphaMotion = null, this.absolute = !0, this.align = 0, this._alpha = 1, this._size = 25, this._color = 16777215, this._border = !1, this._shadow = !0, this._font = '', !t) throw new Error('Comment not bound to comment manager.')
            if (this.parent = t, e.hasOwnProperty('stime') && (this.stime = e.stime), e.hasOwnProperty('mode') ? this.mode = e.mode : this.mode = 1, e.hasOwnProperty('dur') && (this.dur = e.dur, this.ttl = this.dur), this.dur *= this.parent.options.global.scale, this.ttl *= this.parent.options.global.scale, e.hasOwnProperty('text') && (this.text = e.text), e.hasOwnProperty('motion')) {
                this._motionStart = [], this._motionEnd = [], this.motion = e.motion
                for (var n = 0, i = 0; i < e.motion.length; i++) {
                    this._motionStart.push(n)
                    var o = 0
                    for (var r in e.motion[i]) {
                        var a = e.motion[i][r]
                        o = Math.max(a.dur, o), a.easing !== null && void 0 !== a.easing || (e.motion[i][r].easing = A.LINEAR)
                    }
                    n += o, this._motionEnd.push(n)
                }
                this._curMotion = 0
            }
            e.hasOwnProperty('color') && (this._color = e.color), e.hasOwnProperty('size') && (this._size = e.size), e.hasOwnProperty('border') && (this._border = e.border), e.hasOwnProperty('opacity') && (this._alpha = e.opacity), e.hasOwnProperty('alpha') && (this._alphaMotion = e.alpha), e.hasOwnProperty('font') && (this._font = e.font), e.hasOwnProperty('x') && (this._x = e.x), e.hasOwnProperty('y') && (this._y = e.y), e.hasOwnProperty('shadow') && (this._shadow = e.shadow), e.hasOwnProperty('position') && e.position === 'relative' && (this.absolute = !1, this.mode < 7 && console.warn('Using relative position for CSA comment.'))
        }
        return A.prototype.init = function (A) {
            void 0 === A && (A = null), this.dom = A !== null ? A.dom : document.createElement('div'), this.dom.className = this.parent.options.global.className, this.dom.appendChild(document.createTextNode(this.text)), this.dom.textContent = this.text, this.dom.innerText = this.text, this.size = this._size, this._color != 16777215 && (this.color = this._color), this.shadow = this._shadow, this._border && (this.border = this._border), this._font !== '' && (this.font = this._font), void 0 !== this._x && (this.x = this._x), void 0 !== this._y && (this.y = this._y), (this._alpha !== 1 || this.parent.options.global.opacity < 1) && (this.alpha = this._alpha), this.motion.length > 0 && this.animate()
        }, Object.defineProperty(A.prototype, 'x', {
            get: function () {
                return this._x !== null && void 0 !== this._x || (this.align % 2 == 0 ? this._x = this.dom.offsetLeft : this._x = this.parent.width - this.dom.offsetLeft - this.width), this.absolute ? this._x : this._x / this.parent.width
            },
            set: function (A) {
                this._x = A, this.absolute || (this._x *= this.parent.width), this.align % 2 == 0 ? this.dom.style.left = this._x + 'px' : this.dom.style.right = this._x + 'px'
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(A.prototype, 'y', {
            get: function () {
                return this._y !== null && void 0 !== this._y || (this.align < 2 ? this._y = this.dom.offsetTop : this._y = this.parent.height - this.dom.offsetTop - this.height), this.absolute ? this._y : this._y / this.parent.height
            },
            set: function (A) {
                this._y = A, this.absolute || (this._y *= this.parent.height), this.align < 2 ? this.dom.style.top = this._y + 'px' : this.dom.style.bottom = this._y + 'px'
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(A.prototype, 'bottom', {
            get: function () {
                return this.y + this.height
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(A.prototype, 'right', {
            get: function () {
                return this.x + this.width
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(A.prototype, 'width', {
            get: function () {
                return this._width !== null && void 0 !== this._width || (this._width = this.dom.offsetWidth), this._width
            },
            set: function (A) {
                this._width = A, this.dom.style.width = this._width + 'px'
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(A.prototype, 'height', {
            get: function () {
                return this._height !== null && void 0 !== this._height || (this._height = this.dom.offsetHeight), this._height
            },
            set: function (A) {
                this._height = A, this.dom.style.height = this._height + 'px'
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(A.prototype, 'size', {
            get: function () {
                return this._size
            },
            set: function (A) {
                this._size = A, this.dom.style.fontSize = this._size + 'px'
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(A.prototype, 'color', {
            get: function () {
                return this._color
            },
            set: function (A) {
                this._color = A
                var t = A.toString(16)
                t = t.length >= 6 ? t : new Array(6 - t.length + 1).join('0') + t, this.dom.style.color = '#' + t, this._color === 0 && (this.dom.className = this.parent.options.global.className + ' rshadow')
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(A.prototype, 'alpha', {
            get: function () {
                return this._alpha
            },
            set: function (A) {
                this._alpha = A, this.dom.style.opacity = Math.min(this._alpha, this.parent.options.global.opacity) + ''
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(A.prototype, 'border', {
            get: function () {
                return this._border
            },
            set: function (A) {
                this._border = A, this._border ? this.dom.style.border = '1px solid #00ffff' : this.dom.style.border = 'none'
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(A.prototype, 'shadow', {
            get: function () {
                return this._shadow
            },
            set: function (A) {
                this._shadow = A, this._shadow || (this.dom.className = this.parent.options.global.className + ' noshadow')
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(A.prototype, 'font', {
            get: function () {
                return this._font
            },
            set: function (A) {
                this._font = A, this._font.length > 0 ? this.dom.style.fontFamily = this._font : this.dom.style.fontFamily = ''
            },
            enumerable: !0,
            configurable: !0
        }), A.prototype.time = function (A) {
            this.ttl -= A, this.ttl < 0 && (this.ttl = 0), this.movable && this.update(), this.ttl <= 0 && this.finish()
        }, A.prototype.update = function () {
            this.animate()
        }, A.prototype.invalidate = function () {
            this._x = null, this._y = null, this._width = null, this._height = null
        }, A.prototype._execMotion = function (A, t) {
            for (var e in A) {
 if (A.hasOwnProperty(e)) {
                    var n = A[e]
                    this[e] = n.easing(Math.min(Math.max(t - n.delay, 0), n.dur), n.from, n.to - n.from, n.dur)
                }
}
        }, A.prototype.animate = function () {
            if (this._alphaMotion && (this.alpha = (this.dur - this.ttl) * (this._alphaMotion.to - this._alphaMotion.from) / this.dur + this._alphaMotion.from), this.motion.length !== 0) {
                var A = Math.max(this.ttl, 0)
                var t = this.dur - A - this._motionStart[this._curMotion]
                return this._execMotion(this.motion[this._curMotion], t), this.dur - A > this._motionEnd[this._curMotion] ? (this._curMotion++, void (this._curMotion >= this.motion.length && (this._curMotion = this.motion.length - 1))) : void 0
            }
        }, A.prototype.finish = function () {
            this.parent.finish(this)
        }, A.prototype.toString = function () {
            return ['[', this.stime, '|', this.ttl, '/', this.dur, ']', '(', this.mode, ')', this.text].join('')
        }, A.LINEAR = function (A, t, e, n) {
            return A * e / n + t
        }, A
    }()))
    var h = (function (A) {
        function t(t, e) {
            A.call(this, t, e), this.dur *= this.parent.options.scroll.scale, this.ttl *= this.parent.options.scroll.scale
        }
        return c(t, A), Object.defineProperty(t.prototype, 'alpha', {
            set: function (A) {
                this._alpha = A, this.dom.style.opacity = Math.min(Math.min(this._alpha, this.parent.options.global.opacity), this.parent.options.scroll.opacity) + ''
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.init = function (t) {
            void 0 === t && (t = null), A.prototype.init.call(this, t), this.x = this.parent.width, this.parent.options.scroll.opacity < 1 && (this.alpha = this._alpha), this.absolute = !0
        }, t.prototype.update = function () {
            this.x = this.ttl / this.dur * (this.parent.width + this.width) - this.width
        }, t
    }(p))
    var y = (function () {
        var A = function (A, t) {
            for (var e = Math.PI / 180, n = A * e, i = t * e, o = Math.cos, r = Math.sin, a = [o(n) * o(i), o(n) * r(i), r(n), 0, -r(i), o(i), 0, 0, -r(n) * o(i), -r(n) * r(i), o(n), 0, 0, 0, 0, 1], l = 0; l < a.length; l++) Math.abs(a[l]) < 1e-6 && (a[l] = 0)
            return 'matrix3d(' + a.join(',') + ')'
        }

        function t(A) {
            var t = 0
            this._listeners = {}, this._lastPosition = 0, this.stage = A, this.options = {
                global: {
                    opacity: 1,
                    scale: 1,
                    className: 'cmt'
                },
                scroll: {
                    opacity: 1,
                    scale: 1
                },
                limit: 0
            }, this.timeline = [], this.runline = [], this.position = 0, this.limiter = 0, this.filter = null, this.csa = {
                scroll: new d(0, 0),
                top: new u(0, 0),
                bottom: new u(0, 0),
                reverse: new d(0, 0),
                scrollbtm: new d(0, 0)
            }, this.width = this.stage.offsetWidth, this.height = this.stage.offsetHeight, this.startTimer = function () {
                if (!(t > 0)) {
                    var A = (new Date()).getTime()
                    var e = this
                    t = window.setInterval(function () {
                        var t = (new Date()).getTime() - A
                        A = (new Date()).getTime(), e.onTimerEvent(t, e)
                    }, 10)
                }
            }, this.stopTimer = function () {
                window.clearInterval(t), t = 0
            }
        }
        return t.prototype.stop = function () {
            this.stopTimer()
        }, t.prototype.start = function () {
            this.startTimer()
        }, t.prototype.seek = function (A) {
            this.position = s.bsearch(this.timeline, A, function (A, t) {
                return A < t.stime ? -1 : A > t.stime ? 1 : 0
            })
        }, t.prototype.validate = function (A) {
            return A != null && this.filter.doValidate(A)
        }, t.prototype.load = function (A) {
            this.timeline = A, this.timeline.sort(function (A, t) {
                return A.stime > t.stime ? 2 : A.stime < t.stime ? -2 : A.date > t.date ? 1 : A.date < t.date ? -1 : A.dbid != null && t.dbid != null ? A.dbid > t.dbid ? 1 : A.dbid < t.dbid ? -1 : 0 : 0
            }), this.dispatchEvent('load')
        }, t.prototype.insert = function (A) {
            s.binsert(this.timeline, A, function (A, t) {
                return A.stime > t.stime ? 2 : A.stime < t.stime ? -2 : A.date > t.date ? 1 : A.date < t.date ? -1 : A.dbid != null && t.dbid != null ? A.dbid > t.dbid ? 1 : A.dbid < t.dbid ? -1 : 0 : 0
            }) <= this.position && this.position++, this.dispatchEvent('insert')
        }, t.prototype.clear = function () {
            for (; this.runline.length > 0;) this.runline[0].finish()
            this.dispatchEvent('clear')
        }, t.prototype.setBounds = function () {
            for (var A in this.width = this.stage.offsetWidth, this.height = this.stage.offsetHeight, this.dispatchEvent('resize'), this.csa) this.csa[A].setBounds(this.width, this.height)
            this.stage.style.perspective = this.width * Math.tan(40 * Math.PI / 180) / 2 + 'px', this.stage.style.webkitPerspective = this.width * Math.tan(40 * Math.PI / 180) / 2 + 'px'
        }, t.prototype.init = function () {
            this.setBounds(), this.filter == null && (this.filter = new
                /**
                 * Comment Filters Module Simplified (only supports modifiers & types)
                 * @license MIT
                 * @author Jim Chen
                 */
                function () {
                    this.modifiers = [], this.runtime = null, this.allowTypes = {
                        1: !0,
                        4: !0,
                        5: !0,
                        6: !0,
                        7: !0,
                        8: !0,
                        17: !0
                    }, this.doModify = function (A) {
                        for (var t = 0; t < this.modifiers.length; t++) A = this.modifiers[t](A)
                        return A
                    }, this.beforeSend = function (A) {
                        return A
                    }, this.doValidate = function (A) {
                        return !!this.allowTypes[A.mode]
                    }, this.addRule = function (A) {}, this.addModifier = function (A) {
                        this.modifiers.push(A)
                    }, this.runtimeFilter = function (A) {
                        return this.runtime == null ? A : this.runtime(A)
                    }, this.setRuntimeFilter = function (A) {
                        this.runtime = A
                    }
                }())
        }, t.prototype.time = function (A) {
            if (A -= 1, this.position >= this.timeline.length || Math.abs(this._lastPosition - A) >= 2e3) {
                if (this.seek(A), this._lastPosition = A, this.timeline.length <= this.position) return
            } else this._lastPosition = A
            for (; this.position < this.timeline.length && this.timeline[this.position].stime <= A; this.position++) this.options.limit > 0 && this.runline.length > this.limiter || this.validate(this.timeline[this.position]) && this.send(this.timeline[this.position])
        }, t.prototype.rescale = function () {}, t.prototype.send = function (t) {
            if (t.mode !== 8) {
                if (this.filter == null || (t = this.filter.doModify(t)) != null) {
                    if (t.mode === 1 || t.mode === 2 || t.mode === 6) var e = new h(this, t)
                    else e = new p(this, t)
                    switch (e.mode) {
                        case 1:
                            e.align = 0
                            break
                        case 2:
                        case 4:
                            e.align = 2
                            break
                        case 5:
                            e.align = 0
                            break
                        case 6:
                            e.align = 1
                    }
                    switch (e.init(), this.stage.appendChild(e.dom), e.mode) {
                        default:
                        case 1:
                            this.csa.scroll.add(e)
                            break
                        case 2:
                            this.csa.scrollbtm.add(e)
                            break
                        case 4:
                            this.csa.bottom.add(e)
                            break
                        case 5:
                            this.csa.top.add(e)
                            break
                        case 6:
                            this.csa.reverse.add(e)
                            break
                        case 17:
                        case 7:
                            t.rY === 0 && t.rZ === 0 || (e.dom.style.transform = A(t.rY, t.rZ), e.dom.style.webkitTransform = A(t.rY, t.rZ), e.dom.style.OTransform = A(t.rY, t.rZ), e.dom.style.MozTransform = A(t.rY, t.rZ), e.dom.style.MSTransform = A(t.rY, t.rZ))
                    }
                    e.y = e.y, this.dispatchEvent('enterComment', e), this.runline.push(e)
                }
            } else this.scripting && this.scripting.eval(t.code)
        }, t.prototype.sendComment = function (A) {
            this.send(A)
        }, t.prototype.finish = function (A) {
            this.dispatchEvent('exitComment', A), this.stage.removeChild(A.dom)
            var t = this.runline.indexOf(A)
            switch (t >= 0 && this.runline.splice(t, 1), A.mode) {
                default:
                case 1:
                    this.csa.scroll.remove(A)
                    break
                case 2:
                    this.csa.scrollbtm.remove(A)
                    break
                case 4:
                    this.csa.bottom.remove(A)
                    break
                case 5:
                    this.csa.top.remove(A)
                    break
                case 6:
                    this.csa.reverse.remove(A)
                    break
                case 7:
            }
        }, t.prototype.addEventListener = function (A, t) {
            void 0 !== this._listeners[A] ? this._listeners[A].push(t) : this._listeners[A] = [t]
        }, t.prototype.dispatchEvent = function (A, t) {
            if (void 0 !== this._listeners[A]) {
 for (var e = 0; e < this._listeners[A].length; e++) {
 try {
                    this._listeners[A][e](t)
                } catch (A) {
                    console.err(A.stack)
                }
}
}
        }, t.prototype.onTimerEvent = function (A, t) {
            for (var e = 0; e < t.runline.length; e++) {
                var n = t.runline[e]
                n.hold || n.time(A)
            }
        }, t
    }())
    /*!
     * Comment Core Library CommentManager
     * @license MIT
     * @author Jim Chen
     *
     * Copyright (c) 2014 Jim Chen
     */
    function m(A) {
        var t = document.createElement('div')
        return t.innerHTML = A, t.childNodes[0]
    }

    function g(A) {
        return A instanceof Element && A.nodeType === Node.ELEMENT_NODE
    }
    /**
     * AcFun Format Parser
     * @license MIT License
     * An alternative format comment parser
     */
    e(32)
    var f = (function () {
        function A(A, t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e]
                n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
            }
        }
        return function (t, e, n) {
            return e && A(t.prototype, e), n && A(t, n), t
        }
    }())
    var v = (function () {
        function A(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'controlbar'
            !(function (A, t) {
                if (!(A instanceof t)) throw new TypeError('Cannot call a class as a function')
            }(this, A)), this.sendEl = e, this.danmukuList = t, this.html = m(i.a), this.danmuControlHtml = m(r.a), this.sendEl = e, this.danmuInput = e === null ? null : m(l.a), this.CM = null, this.userDanmuOpen = !0
        }
        return f(A, [{
            key: 'createEl',
            value: function (A, t) {
                var e = this
                var n = t._options && t._options.language
                if (this.isEn = n && n === 'en-us', this.danmuInput !== null && (this.danmuInput.querySelector('.danmu-input-enter').innerText = this.isEn ? 'Enter' : '发送', this.danmuInput.querySelector('input').setAttribute('placeholder', this.isEn ? 'Input danmu' : '输入弹幕')), this.danmuControlHtml.querySelector('.player-tooltip.close').innerText = this.isEn ? 'Close Bullect' : '关闭弹幕', this.danmuControlHtml.querySelector('.player-tooltip.open').innerText = this.isEn ? 'Open Bullect' : '打开弹幕', this.sendEl === 'controlbar') {
                    var i = this.danmuControlHtml.querySelector('.ali-danmu-input-wrap')
                    i.style.display = 'inline-block', i.appendChild(this.danmuInput)
                } else if (this.sendEl !== null) {
 if (g(this.sendEl)) this.sendEl.appendChild(this.danmuInput)
                    else {
                        if (typeof this.sendEl !== 'string') throw new Error('sendEl must be an element or selector string')
                        var o = document.querySelector(this.sendEl)
                        if (!g(o)) throw new Error('sendEl must be an element or selector string')
                        o.appendChild(this.danmuInput)
                    }
} A.querySelector('.prism-controlbar').appendChild(this.danmuControlHtml)
                var r = A.querySelector('video').nextElementSibling
                r ? A.insertBefore(this.html, r) : A.appendChild(this.html), this.CM = new y(this.html.querySelector('.danmu')), this.CM.init(), this.CM.load(this.danmukuList), A.querySelector('video').ontimeupdate = function () {
                    A.querySelector('video') !== null && e.CM.time(1e3 * A.querySelector('video').currentTime)
                }
                var a = this.danmuControlHtml.querySelector('.icon-danmu-close')
                var l = this.danmuControlHtml.querySelector('.icon-danmu-open')
                if (a.onclick = function () {
                        e.userDanmuOpen = !1, a.style.display = 'none', l.style.display = 'inline-block', e.CM.clear(), e.CM.stop()
                    }, l.onclick = function () {
                        l.style.display = 'none', a.style.display = 'inline-block', e.userDanmuOpen = !0, e.CM.start()
                    }, this.danmuInput !== null) {
                    var s = this.danmuInput.querySelector('.ali-danmu-input input')
                    this.danmuInput.querySelector('.danmu-input-enter').onclick = this.sendDanmuHandle.bind(this), s.onkeydown = function (A) {
                        A.keyCode === 13 && e.sendDanmuHandle.call(e)
                    }
                }
            }
        }, {
            key: 'sendDanmuHandle',
            value: function () {
                var A = this.danmuInput.querySelector('.ali-danmu-input input')
                var t = A.value
                t !== '' && (this.send({
                    mode: 1,
                    text: t,
                    stime: 1e3,
                    size: [16, 18, 25, 36, 45][this.randomIndex(5)],
                    color: [16777215, 255, 13369344, 16738047, 16777011][this.randomIndex(5)]
                }), A.value = '', A.focus())
            }
        }, {
            key: 'randomIndex',
            value: function (A) {
                return Math.floor(Math.random() * A)
            }
        }, {
            key: 'play',
            value: function (A, t) {
                this.userDanmuOpen && this.CM.start()
            }
        }, {
            key: 'pause',
            value: function (A, t) {
                this.userDanmuOpen && this.CM.stop()
            }
        }, {
            key: 'send',
            value: function (A) {
                this.CM.send(A)
            }
        }, {
            key: 'insert',
            value: function (A) {
                this.CM && this.CM.insert(A)
            }
        }, {
            key: 'dispose',
            value: function () {
                this.danmuInput !== null && this.danmuInput.parentNode && this.danmuInput.parentNode.removeChild(this.danmuInput)
            }
        }]), A
    }())
    var M = e(8)
    var x = e.n(M)
    var b = (e(34), (function () {
        function A(A, t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e]
                n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
            }
        }
        return function (t, e, n) {
            return e && A(t.prototype, e), n && A(t, n), t
        }
    }()))
    var N = (function () {
        function A(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'random'
            !(function (A, t) {
                if (!(A instanceof t)) throw new TypeError('Cannot call a class as a function')
            }(this, A)), this.text = t, this.style = e || {
                fontSize: '14px',
                color: '#fff'
            }, this.html = m(x.a), this.bulletPosition = n
        }
        return b(A, [{
            key: 'createEl',
            value: function (A, t) {
                this.html.innerText = this.text, A.appendChild(this.html)
            }
        }, {
            key: 'ready',
            value: function (A, t) {
                var e = this
                A.getOptions(), !1 === A.getOptions().autoplay && (this.html.style.animationPlayState = 'paused'), Object.keys(this.style).forEach(function (A) {
                    return e.html.style[A] = e.style[A]
                })
                var n = this.html.offsetHeight
                var i = parseInt(A.getOptions().height.replace('px', '')) - n
                if (this.bulletPosition === 'bottom') this.html.style.bottom = 0
                else {
                    var o = this.bulletPosition === 'top' ? 0 : this.randomTop(i)
                    this.html.style.top = o
                }
                this.bulletPosition === 'random' && this.html.addEventListener('animationiteration', function () {
                    e.html.style.top = e.randomTop(i)
                })
            }
        }, {
            key: 'playing',
            value: function (A, t) {
                this.html.style.animationPlayState = 'running'
            }
        }, {
            key: 'timeupdate',
            value: function (A, t) {
                var e = A.el()
                var n = e.querySelector('.bullet-screen')
                if (n) {
                    n.className !== 'bullet-screen' && (n.className = 'bullet-screen')
                    var i = getComputedStyle(n)
                    var o = i.getPropertyValue('display')
                    var r = i.getPropertyValue('opacity')
                    var a = i.getPropertyValue('visibility')
                    var l = this.text
                    var s = n.innerText
                    o === 'none' && n.style.setProperty('display', 'block'), r !== '1' && n.style.setProperty('opacity', '1'), a === 'hidden' && n.style.setProperty('visibility', 'visible'), l != s && (n.innerText = l)
                } else e.appendChild(this.html)
            }
        }, {
            key: 'pause',
            value: function (A, t) {
                this.html.style.animationPlayState = 'paused'
            }
        }, {
            key: 'randomTop',
            value: function (A) {
                return Math.floor(Math.random() * A) + 'px'
            }
        }]), A
    }())
    var w = e(9)
    var I = e.n(w)
    var T = (e(36), (function () {
        function A(A, t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e]
                n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
            }
        }
        return function (t, e, n) {
            return e && A(t.prototype, e), n && A(t, n), t
        }
    }()))
    var D = (function () {
        function A() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            var e = arguments[1]
            var n = arguments[2]
            !(function (A, t) {
                if (!(A instanceof t)) throw new TypeError('Cannot call a class as a function')
            }(this, A)), this.html = m(I.a), this.autoPlay = t, this.getTime = e || this._getTime, this.saveTimeFunction = n || this._saveTime, this.hasMemoryDisplay = !1
        }
        return T(A, [{
            key: 'createEl',
            value: function (A) {
                A.appendChild(this.html)
            }
        }, {
            key: 'ready',
            value: function (A, t) {
                var e = this
                var n = A.getOptions()
                var i = n.vid || n.source.replace(/\?.*$/, '')
                var o = this.getTime(i)
                if ((o = o ? parseInt(o) : 0) !== null && o !== 0 && !this.hasMemoryDisplay) {
 if (this.hasMemoryDisplay = !0, this.autoPlay) A.seek(o), A.getStatus() !== 'playing' && A.play()
                    else {
                        var r = this.getVideoTime(o)
                        if (o !== parseInt(A._duration)) {
                            var a = '<div class="memory-play">\n          <i class="iconfont icon-close"></i>\n          <span>上次看到</span>\n          <span>' + r + '</span>\n          <span class="play-jump">跳转播放</span>\n          </div>'
                            this.html.innerHTML = a
                            var l = setTimeout(function () {
                                e.html.innerHTML = ''
                            }, 15e3)
                            this.html.querySelector('.icon-close').onclick = function () {
                                e.html.innerHTML = '', clearTimeout(l)
                            }, this.html.querySelector('.play-jump').onclick = function () {
                                A.seek(o), A.getStatus() !== 'playing' && A.play(), e.html.innerHTML = '', clearTimeout(l)
                            }
                        }
                    }
} document.onvisibilitychange = function () {
                    document.visibilityState === 'hidden' && A.getCurrentTime() !== 0 && (this.saveTimeFunction(i, A.getCurrentTime()), play)
                }, window.onbeforeunload = function () {
                    A.getCurrentTime() !== 0 && this.saveTimeFunction(i, A.getCurrentTime())
                }
            }
        }, {
            key: 'error',
            value: function (A, t) {
                this.setMemory(A)
            }
        }, {
            key: 'dispose',
            value: function (A, t) {
                this.setMemory(A)
            }
        }, {
            key: 'setMemory',
            value: function (A) {
                var t = A.getOptions()
                var e = t.vid || t.source.replace(/\?.*$/, '')
                this.saveTimeFunction(e, A.getCurrentTime())
            }
        }, {
            key: 'getVideoTime',
            value: function (A) {
                var t = Math.round(A)
                var e = Math.floor(t / 3600)
                var n = Math.floor((t - 3600 * e) / 60)
                var i = t - 3600 * e - 60 * n
                return n < 10 && (n = '0' + n), i < 10 && (i = '0' + i), e === 0 ? n + ':' + i : e + ':' + n + ':' + i
            }
        }, {
            key: '_getTime',
            value: function (A) {
                return localStorage.getItem(A)
            }
        }, {
            key: '_saveTime',
            value: function (A, t) {
                localStorage.setItem(A, t)
            }
        }]), A
    }())
    var E = e(10)
    var Q = e.n(E)
    var B = (e(38), (function () {
        function A(A, t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e]
                n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
            }
        }
        return function (t, e, n) {
            return e && A(t.prototype, e), n && A(t, n), t
        }
    }()))
    var C = (function () {
        function A(t, e) {
            !(function (A, t) {
                if (!(A instanceof t)) throw new TypeError('Cannot call a class as a function')
            }(this, A)), this.coverUrl = t, this.adUrl = e, this.html = m(Q.a)
        }
        return B(A, [{
            key: 'createEl',
            value: function (A, t) {
                var e = this
                var n = t._options && t._options.language
                this.isEn = n && n === 'en-us', this.html.querySelector('.ad-text').innerText = this.isEn ? 'Ad' : '广告'
                var i = this.html.querySelector('.ad-content')
                var o = i.querySelector('img')
                i.setAttribute('href', this.adUrl), o.setAttribute('src', this.coverUrl), this.html.querySelector('.btn-close').onclick = function () {
                    e.html.style.display = 'none'
                }, A.appendChild(this.html)
            }
        }, {
            key: 'play',
            value: function (A, t) {
                this.html.style.display = 'none'
            }
        }, {
            key: 'pause',
            value: function (A, t) {
                this.html.style.display = 'block'
            }
        }]), A
    }())
    var k = e(11)
    var j = e.n(k)
    var L = e(12)
    var S = e.n(L)
    var z = (e(40), (function () {
        function A(A, t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e]
                n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
            }
        }
        return function (t, e, n) {
            return e && A(t.prototype, e), n && A(t, n), t
        }
    }()))
    var O = (function () {
        function A(t) {
            !(function (A, t) {
                if (!(A instanceof t)) throw new TypeError('Cannot call a class as a function')
            }(this, A)), this.controlHtml = m(j.a), this.listHtml = m(S.a), this.playlist = t, this.playingVideoIndex = 0, this.listHideTimeout = null
        }
        return z(A, [{
            key: 'createEl',
            value: function (A, t) {
                var e = this
                var n = t._options && t._options.language
                this.isEn = n && n === 'en-us', this.controlHtml.querySelector('.player-tooltip.prev').innerText = this.isEn ? 'Previous' : '上一个', this.controlHtml.querySelector('.player-tooltip.list').innerText = this.isEn ? 'Playlist' : '播放列表', this.controlHtml.querySelector('.player-tooltip.next').innerText = this.isEn ? 'Next' : '下一个'
                var i = A.querySelector('.prism-controlbar')
                var o = i.querySelector('.prism-time-display')
                i.insertBefore(this.controlHtml, o), this.listHtml.onmouseleave = function () {
                    e.listHtml.style.width = 0
                }, this.listHtml.onmouseenter = this.clearHideListTimeout.bind(this), this.controlHtml.querySelector('.icon-list').onclick = this.tooglePlaylist.bind(this), this.listHtml.querySelector('.list').innerHTML = this.computedListDom(this.playlist)
                var r = t.getOptions() && t.getOptions().source
                var a = 0
                r && (a = (a = this.playlist.findIndex(function (A) {
                    return A.source === r
                })) > -1 ? a : 0, this.playingVideoIndex = a > -1 ? a : 0), this.listHtml.querySelector('.list').childNodes[0].className = 'video-item active', A.appendChild(this.listHtml)
            }
        }, {
            key: 'ready',
            value: function (A, t) {
                var e = this
                this.controlHtml.querySelector('.icon-skip-previous').onclick = function () {
                    e.playingVideoIndex !== 0 ? e.playVideo(A, e.playingVideoIndex - 1) : e.playlistTip(e.isEn ? 'Already the first one~' : '已经是第一个了~', A._el)
                }, this.controlHtml.querySelector('.icon-skipnext').onclick = function () {
                    e.playingVideoIndex !== e.playlist.length - 1 ? e.playVideo(A, e.playingVideoIndex + 1) : e.playlistTip(e.isEn ? 'Already the last one~' : '已经是最后一个了~', A._el)
                }, this.listHtml.querySelector('.list').onclick = function (t) {
                    var n = t.target
                    if (n.className === 'video-item') {
                        var i = parseInt(n.getAttribute('data-index'))
                        e.playVideo(A, i)
                    }
                }
            }
        }, {
            key: 'clearHideListTimeout',
            value: function () {
                this.listHideTimeout !== null && (clearTimeout(this.listHideTimeout), this.listHideTimeout = null)
            }
        }, {
            key: 'playVideo',
            value: function (A, t) {
                this.playingVideoIndex !== t && (this.playingVideoIndex = parseInt(t), A.loadByUrl(this.playlist[t].source), this.listHtml.querySelector('.video-item.active').className = 'video-item', this.listHtml.querySelector('.list').childNodes[t].className = 'video-item active')
            }
        }, {
            key: 'tooglePlaylist',
            value: function () {
                var A = this
                this.clearHideListTimeout(), this.listHtml.style.width === '30%' ? this.listHtml.style.width = 0 : (this.listHtml.style.width = '30%', this.listHideTimeout = setTimeout(function () {
                    A.listHtml.style.width = 0
                }, 5e3))
            }
        }, {
            key: 'playlistTip',
            value: function (A, t) {
                var e = document.createElement('div')
                e.className = 'playlist-skip-tip', e.innerText = A, t.appendChild(e), setTimeout(function () {
                    t.removeChild(e)
                }, 3e3)
            }
        }, {
            key: 'computedListDom',
            value: function (A) {
                return A.map(function (A, t) {
                    return '<div class="video-item" data-index="' + t + '" title="' + A.name + '">' + A.name + '</div>'
                }).join('')
            }
        }]), A
    }())
    var Y = e(13)
    var U = e.n(Y)
    var G = (e(42), (function () {
        function A(A, t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e]
                n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
            }
        }
        return function (t, e, n) {
            return e && A(t.prototype, e), n && A(t, n), t
        }
    }()))
    var F = (function () {
        function A(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
            !(function (A, t) {
                if (!(A instanceof t)) throw new TypeError('Cannot call a class as a function')
            }(this, A)), this.previewDuration = t, this.html = m(U.a), e !== null && this.insertHTtml(e, 'previewEndHtml'), n !== null && this.insertHTtml(n, 'previewBarHtml')
        }
        return G(A, [{
            key: 'play',
            value: function (A) {
                this.previewEnd && (A._el.querySelector('.center').classList.remove('preview-hide'), A.seek(0), this.previewEnd = !1)
            }
        }, {
            key: 'insertHTtml',
            value: function (A, t) {
                var e = t === 'previewEndHtml' ? '.preview-custom' : '.preview-custom-bar'
                var n = this.html.querySelector(e)
                if (typeof A === 'string') {
 if (A[0] === '#') {
                        var i = document.querySelector(A)
                        i ? n.innerHTML = i.innerHTML : console.warn('[aliplayer components warn]: Invalid parameter ' + t + ", can't find element by this id")
                    } else n.innerHTML = A
} else console.warn('[aliplayer components warn]: Invalid parameter ' + t + ', ' + t + ' must be a string type')
            }
        }, {
            key: 'ready',
            value: function (A) {
                var t = parseInt(A.getDuration())
                this.videoDuration = t, !this.invalidPreview && this.previewDuration >= t && (this.invalidPreview = !0, console.warn('[aliplayer components warn]: Invalid parameter previewDuration, previewDuration must be less than the video duration!')), this.previewDuration !== 0 && this.previewDuration < t && (this.html.style.display = 'block')
            }
        }, {
            key: 'createEl',
            value: function (A, t) {
                var e = this
                var n = t._options && t._options.language
                this.isEn = n && n === 'en-us', this.html.querySelector('.preview-default')
                var i = this.html.querySelector('.preview-default')
                i && (i.innerText = this.isEn ? 'Preview is over' : '试看已结束'), this.html.querySelector('.can-preview').innerText = this.isEn ? 'Try' : '可试看'
                var o = this.previewDuration
                o === 0 && (this.html.style.display = 'none')
                var r = o / 60
                var a = r.toString().split('.')[1]
                r = a && a.length > 1 ? ' ' + o + (this.isEn ? ' senconds' : ' 秒') : ' ' + r + (this.isEn ? ' minutes' : ' 分钟'), o < 60 && (r = ' ' + o + (this.isEn ? ' senconds' : ' 秒')), this.html.querySelector('.preview-time').innerText = r
                var l = A.querySelector('video').nextElementSibling
                l ? A.insertBefore(this.html, l) : A.appendChild(this.html), this.html.querySelector('.preview-vod-close').addEventListener('click', function () {
                    e.html.querySelector('.preview-component-tip').style.display = 'none'
                }), t.setPreviewTime(Number(this.previewDuration))
            }
        }, {
            key: 'closePreviewLayer',
            value: function () {
                this.previewEnd = !1, this.html.querySelector('.preview-component-layer').style.display = 'none'
            }
        }, {
            key: 'timeupdate',
            value: function (A) {
                if (!this.previewEnd && this.previewDuration !== 0 && this.previewDuration < this.videoDuration) {
                    var t = A.getPreviewTime()
                    var e = A.getCurrentTime()
                    Math.floor(t) < e && (this.previewEnd = !0, A._el.querySelector('.center').classList.add('preview-hide'), A.seek(t), A.pause(), this.html.querySelector('.preview-component-layer').style.display = 'block')
                }
            }
        }, {
            key: 'ended',
            value: function (A, t) {
                A.isPreview() && (this.html.querySelector('.preview-component-layer').style.display = 'block')
            }
        }]), A
    }())
    var H = e(14)
    var Z = e.n(H)
    var V = (e(44), (function () {
        function A(A, t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e]
                n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
            }
        }
        return function (t, e, n) {
            return e && A(t.prototype, e), n && A(t, n), t
        }
    }()))
    var q = (function () {
        function A() {
            !(function (A, t) {
                if (!(A instanceof t)) throw new TypeError('Cannot call a class as a function')
            }(this, A)), this.html = m(Z.a), this.imgEle = this.html.querySelector('.img-wrap img'), this.timeEle = this.html.querySelector('.time'), this.playBtnEle = this.html.querySelector('.pregress-play-btn'), this.describeEle = this.html.querySelector('.describe'), this.timer = null, this.currentOffset = null
        }
        return V(A, [{
            key: 'createEl',
            value: function (A, t) {
                var e = this
                A.appendChild(this.html), this.html.onmouseenter = function () {
                    e.timer !== null && (clearTimeout(e.timer), e.timer = null)
                }, this.html.onmouseleave = function () {
                    e.html.style.display = 'none'
                }, this.html.onclick = function () {
                    e.html.style.display = 'none'
                }, this.html.querySelector('.pregress-play-btn').addEventListener('click', function () {
                    t.seek(e.currentOffset)
                })
            }
        }, {
            key: 'markerDotOver',
            value: function (A, t) {
                var e = A._el.clientWidth
                var n = 'calc(' + 100 * t.left + '% - 10px)'
                e * t.left + 323 > e ? (n = e - 330 + 'px', this.html.querySelector('.icon-arrowdown').style.left = e * t.left - e + 317 + 'px') : this.html.querySelector('.icon-arrowdown').style.left = '-2px'
                var i = t.progressMarker
                var o = i.coverUrl
                var r = i.title
                var a = i.describe
                var l = i.offset
                this.currentOffset = l, this.html.style.left = n, this.imgEle.src = o, this.timeEle.innerText = r, this.describeEle.innerText = a, this.html.style.display = 'block'
            }
        }, {
            key: 'markerDotOut',
            value: function (A, t) {
                var e = this
                this.timer = setTimeout(function () {
                    e.html.style.display = 'none'
                }, 100)
            }
        }]), A
    }())
    var P = e(15)
    var R = e.n(P)
    var J = e(16)
    var W = e.n(J)
    var K = (e(49), (function () {
        function A(A, t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e]
                n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
            }
        }
        return function (t, e, n) {
            return e && A(t.prototype, e), n && A(t, n), t
        }
    }()))
    var X = (function () {
        function A(t) {
            !(function (A, t) {
                if (!(A instanceof t)) throw new TypeError('Cannot call a class as a function')
            }(this, A)), this.html = m(R.a), this.modalHtml = m(W.a), this.hasCreated = !1, this.definition = '', this.getQuality = t
        }
        return K(A, [{
            key: 'createEl',
            value: function (A, t) {
                var e = t._options && t._options.language
                this.isEn = e && e === 'en-us', this.html.querySelector('.current-quality').innerText = this.isEn ? 'Resolution' : '清晰度', this.modalHtml.querySelector('.switchimg').innerText = this.isEn ? 'Switching to you for' : '正在为您切换到', this.modalHtml.querySelector('.wait').innerText = this.isEn ? 'Please wait...' : '请稍后...', A.querySelector('.prism-controlbar').appendChild(this.html), A.appendChild(this.modalHtml)
            }
        }, {
            key: 'setCurrentQuality',
            value: function (A, t) {
                var e = this.html.querySelector('.current-quality')
                e.innerText = A, e.dataset.def = t, this.definition = t
                var n = this.html.querySelector('.quality-list')
                var i = n.querySelector('.current')
                i && (i.className = '')
                var o = n.querySelector('li[data-def="' + t + '"]')
                o && (o.className = 'current')
            }
        }, {
            key: 'created',
            value: function (A) {
                var t = this
                this._urls = A._urls
                var e = this.html.querySelector('.current-quality')
                var n = this.html.querySelector('.quality-list')
                var i = this._urls.map(function (A) {
                    return '<li data-def="' + A.definition + '">' + A.desc + '</li>'
                })
                this.html.querySelector('.quality-list').innerHTML = i.join(''), this.definition, this.hasCreated == 0 && this.definition && (n.querySelector('li[data-def="' + this.definition + '"]').className = 'current'), this.hasCreated = !0
                var o = null
                e.onclick = function () {
                    n.style.display = 'block'
                }, e.onmouseleave = function () {
                    o = setTimeout(function () {
                        n.style.display = 'none'
                    }, 100)
                }, n.onmouseenter = function () {
                    clearTimeout(o)
                }, n.onmouseleave = function () {
                    n.style.display = 'none'
                }, n.onclick = function (e) {
                    var n = e.target
                    var i = n.dataset.def
                    var o = n.innerText
                    if (i && n.className !== 'current') {
                        var r = t._urls.find(function (A) {
                            return A.definition === i
                        })
                        A.loadByUrl(r.Url, A.getCurrentTime(), !0, !0), t.setCurrentQuality(r.desc, r.definition), t.modalHtml.style.display = 'block', t.modalHtml.querySelector('span.current-quality-tag').innerText = r.desc
                    }
                    t.getQuality(i, o)
                }
            }
        }, {
            key: 'ready',
            value: function (A) {
                this.modalHtml.style.display = 'none'
                var t = document.querySelector('.prism-setting-item.prism-setting-quality')
                t && t.classList.add('player-hidden')
            }
        }]), A
    }())
    var _ = e(17)
    var $ = e.n(_)
    var AA = (e(51), (function () {
        function A(A, t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e]
                n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
            }
        }
        return function (t, e, n) {
            return e && A(t.prototype, e), n && A(t, n), t
        }
    }()))
    var tA = (function () {
        function A() {
            !(function (A, t) {
                if (!(A instanceof t)) throw new TypeError('Cannot call a class as a function')
            }(this, A)), this.html = m($.a)
        }
        return AA(A, [{
            key: 'createEl',
            value: function (A) {
                A.querySelector('.prism-controlbar').appendChild(this.html)
            }
        }, {
            key: 'ready',
            value: function (A, t) {
                var e = this.html.querySelector('.current-rate')
                var n = this.html.querySelector('.rate-list')
                var i = null
                var o = document.querySelector('.prism-setting-item.prism-setting-speed')
                o && o.classList.add('player-hidden'), e.onclick = function () {
                    n.style.display = 'block'
                }, e.onmouseleave = function () {
                    i = setTimeout(function () {
                        n.style.display = 'none'
                    }, 100)
                }, n.onmouseenter = function () {
                    clearTimeout(i)
                }, n.onmouseleave = function () {
                    n.style.display = 'none'
                }, n.onclick = function (t) {
                    var i = t.target
                    var o = i.dataset.rate
                    if (o) {
                        if (A.setSpeed(o), i.className !== 'current') {
                            var r = n.querySelector('.current')
                            r && (r.className = ''), i.className = 'current'
                        }
                        n.style.display = 'none', e.innerText = o + 'x'
                    }
                }
            }
        }]), A
    }())
    var eA = e(18)
    var nA = e.n(eA)
    var iA = (e(53), (function () {
        function A(A, t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e]
                n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
            }
        }
        return function (t, e, n) {
            return e && A(t.prototype, e), n && A(t, n), t
        }
    }()))
    var oA = (function () {
        function A() {
            !(function (A, t) {
                if (!(A instanceof t)) throw new TypeError('Cannot call a class as a function')
            }(this, A)), this.html = m(nA.a)
        }
        return iA(A, [{
            key: 'createEl',
            value: function (A, t) {
                var e = t._options && t._options.language
                this.isEn = e && e === 'en-us', this.html.querySelector('.player-tooltip.counterclockwise').innerText = this.isEn ? 'Rotate 45 degrees counterclockwise' : '逆时针旋转45度', this.html.querySelector('.mirror-item[data-id="counterclockwise"]').innerText = this.isEn ? 'Rotate left 45 ̊' : '左旋转45˚', this.html.querySelector('.player-tooltip.clockwise').innerText = this.isEn ? 'Rotate 45 degrees clockwise' : '顺时针旋转45度', this.html.querySelector('.mirror-item[data-id="clockwise"]').innerText = this.isEn ? 'Rotate right 45 ̊' : '右旋转45˚', this.html.querySelector('.player-tooltip.switch').innerText = this.isEn ? 'Mirror' : '镜像', this.html.querySelector('.mirror-item[data-id=vertical]').innerText = this.isEn ? 'Vertical mirroring' : '垂直镜像', this.html.querySelector('.mirror-item[data-id=horizon]').innerText = this.isEn ? 'Horizontal mirroring' : '水平镜像', A.querySelector('.prism-controlbar').appendChild(this.html)
            }
        }, {
            key: 'ready',
            value: function (A, t) {
                this.html.querySelector('.icon-player-rotate-left').onclick = function () {
                    var t = A.getRotate()
                    A.setRotate(t - 45)
                }, this.html.querySelector('.icon-player-rotate-right').onclick = function () {
                    var t = A.getRotate()
                    A.setRotate(t + 45)
                }
                var e = this.html.querySelector('.mirror-option')
                this.html.querySelector('.icon-player-switch').onclick = function () {
                    var A = e.style.display
                    e.style.display = A === 'none' ? 'block' : 'none'
                }, e.onmouseleave = function () {
                    this.style.display = 'none'
                }, e.onclick = function (t) {
                    var e = t.target
                    if (e.dataset.id !== 'counterclockwise') {
 if (e.dataset.id !== 'clockwise') {
 if (e.className.match('active')) A.cancelImage(), e.className = 'mirror-item'
                            else {
                                var n = e.dataset.id === 'horizon' ? e.previousElementSibling : e.nextElementSibling
                                n.className.match('active') && (n.className = 'mirror-item', A.cancelImage())
                                var i = e.getAttribute('data-id')
                                A.setImage(i), e.className = 'mirror-item active'
                            }
} else {
                        var o = A.getRotate()
                        A.setRotate(o + 45)
                    }
} else {
                        var r = A.getRotate()
                        A.setRotate(r - 45)
                    }
                }
            }
        }]), A
    }())
    var rA = e(19)
    var aA = e.n(rA)
    var lA = (e(55), (function () {
        function A(A, t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e]
                n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
            }
        }
        return function (t, e, n) {
            return e && A(t.prototype, e), n && A(t, n), t
        }
    }()))
    var sA = (function () {
        function A(t, e, n) {
            if ((function (A, t) {
                    if (!(A instanceof t)) throw new TypeError('Cannot call a class as a function')
                }(this, A)), this.coverUrl = t, this.adUrl = e, this.adDuration = n, n <= 0) throw Error('adDuration must must be greater than 0')
            this.html = m(aA.a)
        }
        return lA(A, [{
            key: 'createEl',
            value: function (A, t) {
                var e = this
                var n = t._options && t._options.language
                this.isEn = n && n === 'en-us', this.html.querySelector('.ad-name').innerText = this.isEn ? 'Ad' : '广告', this.html.querySelector('.second').innerText = this.isEn ? 's' : '秒'
                var i = this.html.querySelector('.ad-content')
                if (i.setAttribute('href', this.adUrl), i.querySelector('img').setAttribute('src', this.coverUrl), this.html.querySelector('.tip i').innerText = this.adDuration, A.appendChild(this.html), this.html !== null) {
                    t.getStatus() !== 'init' && t.pause()
                    var o = this.adDuration
                    var r = this.html.querySelector('.tip i')
                    var a = setInterval(function () {
                        if (o -= 1, r.innerText = o, o === 0) {
                            clearInterval(a), e.removeComponent()
                            var A = t.getOptions()
                            var n = A.vid || A.source.replace(/\?.*$/, '')
                            var i = localStorage.getItem(n) || 0
                            i && (i = parseInt(i))
                            var l = (t.getOptions() && t.getOptions().components).find(function (A) {
                                return A.type.name === 'MemoryPlayComponent'
                            });
                            (!l || !l.args[0] || t.getCurrentTime() >= i) && t.play()
                        }
                    }, 1e3)
                }
            }
        }, {
            key: 'removeComponent',
            value: function () {
                this.html.parentNode.removeChild(this.html), this.html = null
            }
        }, {
            key: 'ready',
            value: function (A) {
                this.html !== null && A.pause()
            }
        }]), A
    }())
    var cA = e(20)
    var dA = e.n(cA)
    var uA = (e(57), e(21))
    var pA = e.n(uA)
    var hA = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (A) {
        return typeof A
    } : function (A) {
        return A && typeof Symbol === 'function' && A.constructor === Symbol && A !== Symbol.prototype ? 'symbol' : typeof A
    }
    var yA = typeof Symbol === 'function' && hA(Symbol.iterator) === 'symbol' ? function (A) {
        return void 0 === A ? 'undefined' : hA(A)
    } : function (A) {
        return A && typeof Symbol === 'function' && A.constructor === Symbol && A !== Symbol.prototype ? 'symbol' : void 0 === A ? 'undefined' : hA(A)
    }
    var mA = window.device
    var gA = {}
    var fA = []
    window.device = gA
    var vA = window.document.documentElement
    var MA = window.navigator.userAgent.toLowerCase()
    var xA = ['googletv', 'viera', 'smarttv', 'internet.tv', 'netcast', 'nettv', 'appletv', 'boxee', 'kylo', 'roku', 'dlnadoc', 'roku', 'pov_tv', 'hbbtv', 'ce-html']

    function bA(A) {
        return MA.indexOf(A) !== -1
    }

    function NA(A) {
        return vA.className.match(new RegExp(A, 'i'))
    }

    function wA(A) {
        var t = null
        NA(A) || (t = vA.className.replace(/^\s+|\s+$/g, ''), vA.className = t + ' ' + A)
    }

    function IA(A) {
        NA(A) && (vA.className = vA.className.replace(' ' + A, ''))
    }

    function TA() {
        gA.landscape() ? (IA('portrait'), wA('landscape'), DA('landscape')) : (IA('landscape'), wA('portrait'), DA('portrait')), BA()
    }

    function DA(A) {
        for (var t in fA) fA[t](A)
    }
    gA.macos = function () {
        return bA('mac')
    }, gA.ios = function () {
        return gA.iphone() || gA.ipod() || gA.ipad()
    }, gA.iphone = function () {
        return !gA.windows() && bA('iphone')
    }, gA.ipod = function () {
        return bA('ipod')
    }, gA.ipad = function () {
        return bA('ipad')
    }, gA.android = function () {
        return !gA.windows() && bA('android')
    }, gA.androidPhone = function () {
        return gA.android() && bA('mobile')
    }, gA.androidTablet = function () {
        return gA.android() && !bA('mobile')
    }, gA.blackberry = function () {
        return bA('blackberry') || bA('bb10') || bA('rim')
    }, gA.blackberryPhone = function () {
        return gA.blackberry() && !bA('tablet')
    }, gA.blackberryTablet = function () {
        return gA.blackberry() && bA('tablet')
    }, gA.windows = function () {
        return bA('windows')
    }, gA.windowsPhone = function () {
        return gA.windows() && bA('phone')
    }, gA.windowsTablet = function () {
        return gA.windows() && bA('touch') && !gA.windowsPhone()
    }, gA.fxos = function () {
        return (bA('(mobile') || bA('(tablet')) && bA(' rv:')
    }, gA.fxosPhone = function () {
        return gA.fxos() && bA('mobile')
    }, gA.fxosTablet = function () {
        return gA.fxos() && bA('tablet')
    }, gA.meego = function () {
        return bA('meego')
    }, gA.cordova = function () {
        return window.cordova && location.protocol === 'file:'
    }, gA.nodeWebkit = function () {
        return yA(window.process) === 'object'
    }, gA.mobile = function () {
        return gA.androidPhone() || gA.iphone() || gA.ipod() || gA.windowsPhone() || gA.blackberryPhone() || gA.fxosPhone() || gA.meego()
    }, gA.tablet = function () {
        return gA.ipad() || gA.androidTablet() || gA.blackberryTablet() || gA.windowsTablet() || gA.fxosTablet()
    }, gA.desktop = function () {
        return !gA.tablet() && !gA.mobile()
    }, gA.television = function () {
        for (var A = 0; A < xA.length;) {
            if (bA(xA[A])) return !0
            A++
        }
        return !1
    }, gA.portrait = function () {
        return screen.orientation && Object.prototype.hasOwnProperty.call(window, 'onorientationchange') ? screen.orientation.type.includes('portrait') : window.innerHeight / window.innerWidth > 1
    }, gA.landscape = function () {
        return screen.orientation && Object.prototype.hasOwnProperty.call(window, 'onorientationchange') ? screen.orientation.type.includes('landscape') : window.innerHeight / window.innerWidth < 1
    }, gA.noConflict = function () {
        return window.device = mA, this
    }, gA.ios() ? gA.ipad() ? wA('ios ipad tablet') : gA.iphone() ? wA('ios iphone mobile') : gA.ipod() && wA('ios ipod mobile') : gA.macos() ? wA('macos desktop') : gA.android() ? gA.androidTablet() ? wA('android tablet') : wA('android mobile') : gA.blackberry() ? gA.blackberryTablet() ? wA('blackberry tablet') : wA('blackberry mobile') : gA.windows() ? gA.windowsTablet() ? wA('windows tablet') : gA.windowsPhone() ? wA('windows mobile') : wA('windows desktop') : gA.fxos() ? gA.fxosTablet() ? wA('fxos tablet') : wA('fxos mobile') : gA.meego() ? wA('meego mobile') : gA.nodeWebkit() ? wA('node-webkit') : gA.television() ? wA('television') : gA.desktop() && wA('desktop'), gA.cordova() && wA('cordova'), gA.onChangeOrientation = function (A) {
        typeof A === 'function' && fA.push(A)
    }
    var EA = 'resize'

    function QA(A) {
        for (var t = 0; t < A.length; t++) { if (gA[A[t]]()) return A[t] }
        return 'unknown'
    }

    function BA() {
        gA.orientation = QA(['portrait', 'landscape'])
    }
    Object.prototype.hasOwnProperty.call(window, 'onorientationchange') && (EA = 'orientationchange'), window.addEventListener ? window.addEventListener(EA, TA, !1) : window.attachEvent ? window.attachEvent(EA, TA) : window[EA] = TA, TA(), gA.type = QA(['mobile', 'tablet', 'desktop']), gA.os = QA(['ios', 'iphone', 'ipad', 'ipod', 'android', 'blackberry', 'windows', 'fxos', 'meego', 'television']), BA()
    var CA = gA
    var kA = (function () {
        function A(A, t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e]
                n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
            }
        }
        return function (t, e, n) {
            return e && A(t.prototype, e), n && A(t, n), t
        }
    }())

    function jA(A, t) {
        if (!(A instanceof t)) throw new TypeError('Cannot call a class as a function')
    }
    var LA = (function () {
        function A(t, e, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '关闭广告'
            jA(this, A), this.adVideoSource = t, this.adLink = e, this.html = m(dA.a), this.adInterval = null, this.adCloseFunction = n, this.html.querySelector('.video-ad-close-text').innerText = i, this.adDuration = null, this.player = null
        }
        return kA(A, [{
            key: 'createEl',
            value: function (A, t) {
                var e = this
                var n = t._options && t._options.language
                this.isEn = n && n === 'en-us', this.html.querySelector('.video-ad-detail').innerText = this.isEn ? 'For more information' : '查看广告详情', this.html.querySelector('.limit').innerText = this.isEn ? 'Your browser limits autoplay' : '您的浏览器限制', this.html.querySelector('.manual').innerText = this.isEn ? 'Please Click' : '自动播放请点击'
                var i = this.html.querySelector('#video-ad-content')
                i.setAttribute('src', this.adVideoSource)
                var o = this
                this.html.querySelector('.icon-player-play').onclick = function () {
                    e.playVideoAd(), e.html.querySelector('.autoplay-video-ad').style.display = 'none'
                }, i.addEventListener('canplay', function A() {
                    i.removeEventListener('canplay', A), document.getElementById('loadflag').style.display = 'none', o.adDuration = Math.ceil(i.duration), o.html.querySelector('#video-ad-duration').innerText = o.adDuration, i.play().then(function () {
                        o.setAdInterval()
                    }).catch(function (A) {
                        o.html.querySelector('.autoplay-video-ad').style.display = 'block'
                    })
                })
                var r = this.html.querySelector('.video-ad-link')
                var a = this.html.querySelector('.video-ad-detail')
                r.setAttribute('href', this.adLink), a.setAttribute('href', this.adLink), A.appendChild(this.html)
            }
        }, {
            key: 'ready',
            value: function (A, t) {
                var e = this
                this.html !== null && (A.pause(), this.player = A, this.html.querySelector('.video-ad-close label').onclick = function () {
                    typeof e.adCloseFunction === 'function' ? e.adCloseFunction(e) : e.closeVideoAd(), document.getElementById('player-con').getElementsByTagName('video')[0].play()
                })
            }
        }, {
            key: 'pauseVideoAd',
            value: function () {
                this.clearAdInterval(), this.html.querySelector('#video-ad-content').pause()
            }
        }, {
            key: 'playVideoAd',
            value: function () {
                this.setAdInterval(), this.html.querySelector('#video-ad-content').play()
            }
        }, {
            key: 'clearAdInterval',
            value: function () {
                this.adInterval !== null && clearInterval(this.adInterval), this.adInterval = null
            }
        }, {
            key: 'setAdInterval',
            value: function () {
                var A = this
                var t = this.html.querySelector('#video-ad-duration')
                this.adInterval = setInterval(function () {
                    A.adDuration -= 1, A.adDuration <= 0 ? (A.closeVideoAd(), document.getElementById('player-con').getElementsByTagName('video')[0].play()) : t.innerText = A.adDuration
                }, 1e3)
            }
        }, {
            key: 'closeVideoAd',
            value: function () {
                this.clearAdInterval(), this.html.parentNode.removeChild(this.html), this.html = null, this.player.getOptions().autoplay && this.player.play()
            }
        }]), A
    }())
    var SA = (function () {
        function A(t, e, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '关闭广告'
            jA(this, A), this.adVideoSource = t, this.adLink = e, this.html = m(pA.a), this.adInterval = null, this.adCloseFunction = n, this.html.querySelector('.video-ad-close-text').innerText = i, this.html.querySelector('.video-ad-link').setAttribute('href', this.adLink), this.html.querySelector('.video-ad-detail').setAttribute('href', this.adLink), this.adDuration = null
        }
        return kA(A, [{
            key: 'createEl',
            value: function (A, t) {
                var e = t._options && t._options.language
                this.isEn = e && e === 'en-us', this.html.querySelector('.video-ad-detail').innerText = this.isEn ? 'For more information' : '查看广告详情', this.html.querySelector('.limit').innerText = this.isEn ? 'Your browser limits autoplay' : '您的浏览器限制', this.html.querySelector('.manual').innerText = this.isEn ? 'Please Click' : '自动播放请点击', A.appendChild(this.html), A.querySelector('video'), A.querySelector('video').setAttribute('preload', 'load')
                var n = A.querySelector('.prism-controlbar')
                n.className = n.className + ' controlbar-element-hidden'
                var i = A.querySelector('.prism-big-play-btn')
                i.className = i.className + ' controlbar-element-hidden'
            }
        }, {
            key: 'created',
            value: function (A) {
                var t = this
                if (this.player = A, this.vdSource = A.getOptions().source, A.loadByUrl(this.adVideoSource), this.html.querySelector('.autoplay-video-ad').onclick = function () {
                        t.adDuration !== null && (A.loadByUrl(t.adVideoSource), t.html.parentNode.querySelector('.prism-big-play-btn').click())
                    }, this.adDuration === null) {
                    this.adDuration = void 0
                    var e = this.html.parentNode.querySelector('video')
                    var n = this
                    e.addEventListener('timeupdate', function t() {
                        var i = e.duration
                        isNaN(i) || i === 0 || (e.removeEventListener('timeupdate', t), n.adDuration = Math.ceil(e.duration), n.html.querySelector('.autoplay-video-ad').style.display !== 'none' && (n.html.querySelector('.autoplay-video-ad').style.display = 'none', A.play()), n.html.querySelector('#video-ad-duration').innerText = n.adDuration, n.setAdInterval())
                    })
                }
            }
        }, {
            key: 'ready',
            value: function (A) {
                var t = this
                this.html.querySelector('.video-ad-close label').onclick = function () {
                    typeof t.adCloseFunction === 'function' ? t.adCloseFunction(t) : t.closeVideoAd(), document.getElementById('player-con').getElementsByTagName('video')[0].play()
                }
            }
        }, {
            key: 'setAdInterval',
            value: function () {
                var A = this
                var t = this.html.querySelector('#video-ad-duration')
                this.adInterval = setInterval(function () {
                    A.adDuration -= 1, A.adDuration <= 0 ? (A.closeVideoAd(), document.getElementById('player-con').getElementsByTagName('video')[0].play()) : t.innerText = A.adDuration
                }, 1e3)
            }
        }, {
            key: 'closeVideoAd',
            value: function () {
                this.clearAdInterval(), this.player.loadByUrl(this.vdSource)
                var A = this.html.parentNode.querySelector('.prism-controlbar')
                A.className = A.className.replace(' controlbar-element-hidden', '')
                var t = this.html.parentNode.querySelector('.prism-big-play-btn')
                t.className = t.className.replace(' controlbar-element-hidden', ''), this.player.getOptions().autoplay && this.player.play(), this.html.parentNode.removeChild(this.html)
            }
        }, {
            key: 'clearAdInterval',
            value: function () {
                this.adInterval !== null && clearInterval(this.adInterval), this.adInterval = null
            }
        }, {
            key: 'playVideoAd',
            value: function () {
                this.setAdInterval(), this.player.play()
            }
        }, {
            key: 'pauseVideoAd',
            value: function () {
                this.clearAdInterval(), this.player.pause()
            }
        }]), A
    }())
    var zA = LA
    CA.mobile() && (zA = SA)
    var OA = zA
    var YA = e(22)
    var UA = e.n(YA)
    var GA = e(23)
    var FA = e.n(GA)
    var HA = (e(59), (function () {
        function A(A, t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e]
                n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
            }
        }
        return function (t, e, n) {
            return e && A(t.prototype, e), n && A(t, n), t
        }
    }()))
    var ZA = (function () {
        function A() {
            !(function (A, t) {
                if (!(A instanceof t)) throw new TypeError('Cannot call a class as a function')
            }(this, A)), this.captionList = null, this.html = m(UA.a), this.modalHtml = m(FA.a), this.hasCreated = !1, this.definition = ''
        }
        return HA(A, [{
            key: 'createEl',
            value: function (A, t) {
                var e = this
                var n = t._options && t._options.language
                this.isEn = n && n === 'en-us', this.modalHtml.querySelector('.switchimg').innerText = this.isEn ? 'Switching to you for' : '字幕切换到', this.modalHtml.querySelector('.switchimg').style.display = 'none', A.querySelector('.prism-controlbar').appendChild(this.html), A.appendChild(this.modalHtml), t.on('textTrackReady', function (A) {
                    var t = A.paramData
                    e.captionList = t
                    var n = t.map(function (A) {
                        return '<li data-def="' + A.value + '">' + A.text + '</li>'
                    })
                    e.html.querySelector('.caption-list').innerHTML = '<li style="background:rgba(88,87,86,.5);color:#fff">字幕</li>' + n.join('')
                })
                var i = this.html.querySelector('.current-caption')
                var o = this.html.querySelector('.caption-list')
                this.hasCreated == 0 && this.definition && (o.querySelector('li[data-def="' + this.definition + '"]').className = 'current'), this.hasCreated = !0
                var r = null
                i.onclick = function () {
                    o.style.display = 'block'
                }, i.onmouseleave = function () {
                    r = setTimeout(function () {
                        o.style.display = 'none'
                    }, 100)
                }, o.onmouseenter = function () {
                    clearTimeout(r)
                }, o.onmouseleave = function () {
                    o.style.display = 'none', e.modalHtml.style.display = 'none'
                }, o.onclick = function (A) {
                    var n = A.target
                    var i = n.dataset.def
                    if (i && n.className !== 'current') {
                        var o = e.captionList.find(function (A) {
                            return A.value === i
                        })
                        t._ccService.switch(o.value), e.setCurrentCaption(o.text, o.value), e.modalHtml.style.display = 'block', e.modalHtml.querySelector('.switchimg').style.display = 'block', e.modalHtml.querySelector('span.current-caption-tag').innerText = o.text
                    }
                }
            }
        }, {
            key: 'setCurrentCaption',
            value: function (A, t) {
                var e = this.html.querySelector('.current-caption')
                e.innerText = A, e.dataset.def = t, this.definition = t
                var n = this.html.querySelector('.caption-list')
                var i = n.querySelector('.current')
                i && (i.className = '')
                var o = n.querySelectorAll('li')
                o.forEach(function (t) {
                    t.innerText === A && (t.className = 'current')
                }), o && (o.className = 'current')
            }
        }, {
            key: 'created',
            value: function (A) {}
        }, {
            key: 'ready',
            value: function (A) {
                this.modalHtml.style.display = 'none'
                var t = document.querySelector('.prism-setting-item.prism-setting-cc')
                t && t.classList.add('player-hidden')
            }
        }]), A
    }())
    var VA = e(24)
    var qA = e.n(VA)
    var PA = e(25)
    var RA = e.n(PA)
    var JA = (e(61), (function () {
        function A(A, t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e]
                n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
            }
        }
        return function (t, e, n) {
            return e && A(t.prototype, e), n && A(t, n), t
        }
    }()))
    var WA = (function () {
        function A() {
            !(function (A, t) {
                if (!(A instanceof t)) throw new TypeError('Cannot call a class as a function')
            }(this, A)), this.trackList = null, this.html = m(qA.a), this.modalHtml = m(RA.a), this.hasCreated = !1, this.definition = ''
        }
        return JA(A, [{
            key: 'createEl',
            value: function (A, t) {
                var e = this
                var n = t._options && t._options.language
                this.isEn = n && n === 'en-us', this.modalHtml.querySelector('.switchimg').innerText = this.isEn ? 'Track to you for' : '音轨切换到', this.modalHtml.querySelector('.switchimg').style.display = 'none', A.querySelector('.prism-controlbar').appendChild(this.html), A.appendChild(this.modalHtml), t.on('audioTrackReady', function (A) {
                    var t = A.paramData
                    e.trackList = t
                    var n = t.map(function (A) {
                        return '<li data-def="' + A.value + '">' + A.text + '</li>'
                    })
                    e.html.querySelector('.track-list').innerHTML = '<li style="background:rgba(88,87,86,.5);color:#fff">音轨</li>' + n.join('')
                })
                var i = this.html.querySelector('.current-track')
                var o = this.html.querySelector('.track-list')
                this.hasCreated == 0 && this.definition && (o.querySelector('li[data-def="' + this.definition + '"]').className = 'current'), this.hasCreated = !0
                var r = null
                i.onclick = function () {
                    o.style.display = 'block'
                }, i.onmouseleave = function () {
                    r = setTimeout(function () {
                        o.style.display = 'none'
                    }, 100)
                }, o.onmouseenter = function () {
                    clearTimeout(r)
                }, o.onmouseleave = function () {
                    o.style.display = 'none', e.modalHtml.style.display = 'none'
                }, o.onclick = function (A) {
                    var n = A.target
                    var i = n.dataset.def
                    if (i && n.className !== 'current') {
                        var o = e.trackList.find(function (A) {
                            return A.value.toString() === i
                        })
                        t._audioTrackService.switch(o.value), e.setCurrentTrack(o.text, o.value), e.modalHtml.style.display = 'block', e.modalHtml.querySelector('.switchimg').style.display = 'block', e.modalHtml.querySelector('span.current-track-tag').innerText = o.text
                    }
                }
            }
        }, {
            key: 'setCurrentTrack',
            value: function (A, t) {
                var e = this.html.querySelector('.current-track')
                e.innerText = A, e.dataset.def = t, this.definition = t
                var n = this.html.querySelector('.track-list')
                var i = n.querySelector('.current')
                i && (i.className = '')
                var o = n.querySelectorAll('li')
                o.forEach(function (t) {
                    t.innerText === A && (t.className = 'current')
                }), o && (o.className = 'current')
            }
        }, {
            key: 'created',
            value: function (A) {}
        }, {
            key: 'ready',
            value: function (A) {
                this.modalHtml.style.display = 'none'
                var t = document.querySelector('.prism-setting-item.prism-setting-audio')
                t && t.classList.add('player-hidden')
            }
        }]), A
    }())
    var KA = e(26)
    var XA = e.n(KA)
    var _A = (e(63), e(27))
    var $A = e.n(_A)
    var At = (function () {
        function A(A, t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e]
                n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
            }
        }
        return function (t, e, n) {
            return e && A(t.prototype, e), n && A(t, n), t
        }
    }())

    function tt(A, t) {
        if (!(A instanceof t)) throw new TypeError('Cannot call a class as a function')
    }
    var et = (function () {
        function A(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '关闭广告'
            tt(this, A), this.adVideoSource = t, this.html = m(XA.a), this.adInterval = null, this.adCloseFunction = e, this.html.querySelector('.many-video-ad-close-text').innerText = n, this.adDuration = null, this.player = null, this.indexVideo = 1
        }
        return At(A, [{
            key: 'createEl',
            value: function (A, t) {
                var e = t._options && t._options.language
                this.isEn = e && e === 'en-us', this.html.querySelector('.many-video-ad-detail').innerText = this.isEn ? 'For more information' : '查看广告详情', this.html.querySelector('.limit').innerText = this.isEn ? 'Your browser limits autoplay' : '您的浏览器限制', this.html.querySelector('.manual').innerText = this.isEn ? 'Please Click' : '自动播放请点击', A.appendChild(this.html)
            }
        }, {
            key: 'created',
            value: function (A) {
                var t = this.adVideoSource.map(function (A, t) {
                    return '<video id="many-video-ad-content' + (t + 1) + '" style="' + (t === 0 ? 'display: block' : 'display:none') + ';width:100%;height:100%" x5-video-player-type="h5" x5-video-player-fullscreen="false" src="' + A.adVideo + '"></video>'
                })
                this.html.querySelector('.videos').innerHTML = t.join(' '), this.indexVideo = Number(this.indexVideo)
                var e = this.indexVideo
                var n = this.adVideoSource
                var i = this.html.querySelector('#many-video-ad-content' + this.indexVideo)
                var o = this.html.querySelector('.many-video-ad-detail')
                var r = this.html.querySelector('#many-video-ad-duration')
                var a = this
                var l = i.play()
                void 0 !== l && l.then(function () {
                    i.play()
                }).catch(function (A) {
                    document.querySelector('.autoplay-many-video-ad').style.display = 'block', i.oncanplay = function () {
                        var A = Math.ceil(i.duration)
                        document.querySelector('#many-video-ad-duration').innerText = A
                    }
                }), i.addEventListener('canplay', function A() {
                    i.removeEventListener('canplay', A), o.href = n[e - 1].adVideoLink, i.play().then(function () {
                        var A = Math.ceil(i.duration)
                        r.innerText = A, a.setAdInterval()
                    }).catch(function (A) {
                        a.html.querySelector('.autoplay-many-video-ad').style.display = 'block', a.html.querySelector('.icon-player-play').onclick = function () {
                            a.playManyVideoAd(), a.html.querySelector('.autoplay-many-video-ad').style.display = 'none'
                        }
                    })
                })
            }
        }, {
            key: 'ready',
            value: function (A, t) {
                var e = this
                this.indexVideo = Number(this.indexVideo)
                var n = this
                this.html.querySelector('#many-video-ad-content' + this.indexVideo).addEventListener('ended', function (t) {
                    n.playNext(n) == '-1' && A.play()
                }), this.html.querySelector('.many-video-ad-close label').onclick = function () {
                    typeof e.adCloseFunction === 'function' ? e.adCloseFunction(e) : e.closeManyVideoAd()
                }
            }
        }, {
            key: 'setAdInterval',
            value: function (A) {
                var t = this
                var e = this.html.querySelector('#many-video-ad-duration')
                var n = this.html.querySelector('#many-video-ad-content' + this.indexVideo)
                this.adInterval = setInterval(function () {
                    var A = Math.ceil(n.duration) - Math.ceil(n.currentTime)
                    e.innerText = A, A == 1 && clearInterval(t.adInterval)
                }, 1e3)
            }
        }, {
            key: 'pauseManyVideoAd',
            value: function () {
                this.clearAdInterval(), this.html.querySelector('#many-video-ad-content' + this.indexVideo).pause()
            }
        }, {
            key: 'playManyVideoAd',
            value: function () {
                this.setAdInterval(), this.html.querySelector('#many-video-ad-content' + this.indexVideo).play()
            }
        }, {
            key: 'clearAdInterval',
            value: function () {
                this.adInterval !== null && clearInterval(this.adInterval), this.adInterval = null
            }
        }, {
            key: 'playNext',
            value: function (A) {
                if (A.indexVideo >= A.adVideoSource.length) return A.html.parentNode.removeChild(A.html), -1
                this.indexVideo = Number(this.indexVideo), document.getElementById('many-video-ad-content' + this.indexVideo) != null && document.getElementById('many-video-ad-content' + this.indexVideo).remove()
                var t = this.indexVideo + 1
                A.html.querySelector('.many-video-ad-detail').href = A.adVideoSource[A.indexVideo].adVideoLink
                var e = this.html.querySelector('#many-video-ad-content' + t)
                var n = this.html.querySelector('#many-video-ad-duration')
                e.style.display = 'block', this.adVideoSource.length >= this.indexVideo && (this.indexVideo = this.indexVideo + 1)
                var i = Math.ceil(e.duration)
                n.innerText = i, A.setAdInterval(), e.play(), e.addEventListener('ended', function (t) {
                    A.playNext(A) == '-1' && document.getElementById('player-con').getElementsByTagName('video')[0].play()
                })
            }
        }, {
            key: 'closeManyVideoAd',
            value: function () {
                this.clearAdInterval(), this.html.parentNode.removeChild(this.html), this.html = null, document.getElementById('player-con').getElementsByTagName('video')[0].play()
            }
        }]), A
    }())
    var nt = (function () {
        function A(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '关闭广告'
            tt(this, A), this.adVideoSource = t, this.html = m($A.a), this.adInterval = null, this.adCloseFunction = e, this.html.querySelector('.many-video-ad-close-text').innerText = n, this.adDuration = null, this.player = null, this.indexVideo = 1
        }
        return At(A, [{
            key: 'createEl',
            value: function (A, t) {
                var e = this
                var n = t._options && t._options.language
                this.isEn = n && n === 'en-us', this.html.querySelector('.many-video-ad-detail').innerText = this.isEn ? 'For more information' : '查看广告详情', this.html.querySelector('.limit').innerText = this.isEn ? 'Your browser limits autoplay' : '您的浏览器限制', this.html.querySelector('.manual').innerText = this.isEn ? 'Please Click' : '自动播放请点击', A.appendChild(this.html), A.querySelector('.videosmb'), A.querySelector('.videosmb').setAttribute('preload', 'load')
                var i = A.querySelector('.prism-controlbar')
                i.className = i.className + ' controlbar-element-hidden', this.html.querySelector('.icon-player-play').onclick = function () {
                    e.playManyVideoAd(), e.html.querySelector('.autoplay-many-video-ad').style.display = 'none'
                }
            }
        }, {
            key: 'created',
            value: function (A) {
                var t = this.adVideoSource.map(function (A, t) {
                    return '<video id="many-video-ad-content' + (t + 1) + '" style="' + (t === 0 ? 'display: block' : 'display:none') + ';width:100%;height:100%" x5-video-player-type="h5" x5-video-player-fullscreen="false" src="' + A.adVideo + '"></video>'
                })
                this.html.querySelector('.videosmb').innerHTML = t.join(' '), this.indexVideo = Number(this.indexVideo)
                var e = this.indexVideo
                var n = this.adVideoSource
                var i = this.html.querySelector('#many-video-ad-content' + this.indexVideo)
                var o = this.html.querySelector('.many-video-ad-detail')
                var r = this
                i.addEventListener('canplay', function A() {
                    i.removeEventListener('canplay', A), o.href = n[e - 1].adVideoLink, r.html.querySelector('#many-video-ad-duration').innerText = Math.ceil(i.duration)
                })
            }
        }, {
            key: 'ready',
            value: function (A) {
                var t = this
                this.indexVideo = Number(this.indexVideo)
                var e = this
                this.html.querySelector('#many-video-ad-content' + this.indexVideo).addEventListener('ended', function (t) {
                    if (e.playNext(e) == '-1') {
                        A.play()
                        var n = document.querySelector('.prism-controlbar')
                        n.className = n.className.replace(' controlbar-element-hidden', '')
                    }
                }), this.html.querySelector('.many-video-ad-close label').onclick = function () {
                    typeof t.adCloseFunction === 'function' ? t.adCloseFunction(t) : t.closeManyVideoAd()
                }
            }
        }, {
            key: 'setAdInterval',
            value: function () {
                var A = this
                var t = this.html.querySelector('#many-video-ad-duration')
                var e = this.html.querySelector('#many-video-ad-content' + this.indexVideo)
                this.adInterval = setInterval(function () {
                    var n = Math.ceil(e.duration) - Math.ceil(e.currentTime)
                    t.innerText = n, n == 1 && clearInterval(A.adInterval)
                }, 1e3)
            }
        }, {
            key: 'closeManyVideoAd',
            value: function () {
                this.clearAdInterval()
                var A = this.html.parentNode.querySelector('.prism-controlbar')
                A.className = A.className.replace(' controlbar-element-hidden', ''), this.html.parentNode.removeChild(this.html), this.html = null, document.getElementById('player-con').getElementsByTagName('video')[0].play()
            }
        }, {
            key: 'clearAdInterval',
            value: function () {
                this.adInterval !== null && clearInterval(this.adInterval), this.adInterval = null
            }
        }, {
            key: 'playManyVideoAd',
            value: function () {
                this.setAdInterval(), this.html.querySelector('#many-video-ad-content' + this.indexVideo).play()
            }
        }, {
            key: 'pauseManyVideoAd',
            value: function () {
                this.clearAdInterval(), this.html.querySelector('#many-video-ad-content' + this.indexVideo).pause()
            }
        }, {
            key: 'playNext',
            value: function (A) {
                if (A.indexVideo >= A.adVideoSource.length) return A.html.parentNode.removeChild(A.html), -1
                this.indexVideo = Number(this.indexVideo), document.getElementById('many-video-ad-content' + this.indexVideo) != null && document.getElementById('many-video-ad-content' + this.indexVideo).remove()
                var t = this.indexVideo + 1
                A.html.querySelector('.many-video-ad-detail').href = A.adVideoSource[A.indexVideo].adVideoLink
                var e = this.html.querySelector('#many-video-ad-content' + t)
                var n = this.html.querySelector('#many-video-ad-duration')
                e.style.display = 'block', this.adVideoSource.length >= this.indexVideo && (this.indexVideo = this.indexVideo + 1)
                var i = Math.ceil(e.duration)
                n.innerText = i, A.setAdInterval(), e.play(), e.addEventListener('ended', function (t) {
                    if (A.playNext(A) == '-1') {
                        document.getElementById('player-con').getElementsByTagName('video')[0].play()
                        var e = document.querySelector('.prism-controlbar')
                        e.className = e.className.replace(' controlbar-element-hidden', '')
                    }
                })
            }
        }]), A
    }())
    var it = et
    CA.mobile() && (it = nt)
    var ot = it
    window.AliPlayerComponent = {
        AliplayerDanmuComponent: v,
        BulletScreenComponent: N,
        MemoryPlayComponent: D,
        PauseADComponent: C,
        PlaylistComponent: O,
        PreviewVodComponent: F,
        RotateMirrorComponent: oA,
        StartADComponent: sA,
        VideoADComponent: OA,
        RateComponent: tA,
        QualityComponent: X,
        ProgressComponent: q,
        CaptionComponent: ZA,
        TrackComponent: WA,
        ManyVideoADComponent: ot
    }
}]))
