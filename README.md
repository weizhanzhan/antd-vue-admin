# antd-vue-admin typescript_Dev

<p align="center">
    <a href="https://github.com/weizhanzhan/antd-vue-admin" target="_blank">
        <img src="http://react.zhanwei.xyz/ico.png" width="100">
    </a>
</p>
<p align="center">
    <a href="https://github.com/vuejs/vue">
        <img src="https://img.shields.io/badge/vue-2.6.6-brightgreen.svg">
    </a>
    <a href="https://github.com/vueComponent/ant-design-vue?utm_source=gold_browser_extension">
        <img src="https://img.shields.io/badge/ant--design--vue-1.3.5-informational">
    </a>
    <a href="https://github.com/prettier/prettier">
        <img src="https://img.shields.io/badge/code style-prettier-brightgreen.svg">
    </a>
    <a href="https://github.com/webpack/webpack">
        <img src="https://img.shields.io/badge/webpack->=4.0.0-critical.svg">
    </a>
  	<a href="https://github.com/gcddblue/vue-admin-webapp/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/css-sass-yellow.svg">
    </a>
</p>


## 简介

[antd-vue-admin](https://github.com/weizhanzhan/antd-vue-admin) 是一个后台管理 spa 页面，它基于 [vue](https://github.com/vuejs/vue) 和 [ant-design-vue](https://github.com/vueComponent/ant-design-vue) 采用了最新的前端技术栈，实现了登录权限验证，动态路由生成(新加入模块，根据模块生成对应模块的菜单信息)，参考[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) 和[ant-design-pro-vue](https://github.com/sendya/ant-design-pro-vue)，实现更标准化的前端实例模型，根据自己的业务修该对应的路由信息等模块信息，快速搭建后台管理系统模板。此版本是经过Typescript重构，加入一些新功能



>此版本是ts版本 分支typescript_dev，不考虑ts请切换master分支,或者antd-vue-ts分支ts，js代码都有的

### 安装

```
# 克隆项目
git clone https://github.com/weizhanzhan/antd-vue-admin.git

# 进入项目目录
cd antd-vue-admin

# 安装依赖
npm install
or
yarn

# 启动服务
npm run serve
```

### 部署
```
npm run build
```
<!-- `deploy`分支执行 deploy.sh 文件脚本执行 npm run build 并上传至 gh-pages 分支更新 github pages 页面 -->

### Online

[在线浏览](https://antd-vue-admin.now.sh/)用户名密码随便输入
>账号375786117@qq.com 密码123456
![Image text](https://github.com/weizhanzhan/antd-vue-admin/blob/antd-vue-ts/public/demo.gif)
![Image text](https://github.com/weizhanzhan/antd-vue-admin/blob/typescript_dev/public/temp.gif)

### 功能

```
- 登录 / 注销
- 页面
  - 模块切换
  - dashboard
  - sideBar收缩和展开
  - 主题换肤
  - 中英文切换
  
- 侧边栏
  - 根据不同用户权限展示相应模块下的动态左侧菜单，模块切换，菜单更换

- 权限验证
  - 管理员页面 
  - 权限设置 

- 表格操作
  - 涉及平常业务遇到的相关表格操作（参考）

- Echarts
 - 滑动显示更多数据
 - 动态切换charts
 - map地图使用
 - video视频播放 AliyunPlayer
- Icons
 - 阿里iconfont
- TypeScript（已经加入）
```


<!-- ![Image text](https://github.com/weizhanzhan/antd-vue-admin/blob/antd-vue-ts/public/dark.png)
![Image text](https://github.com/weizhanzhan/antd-vue-admin/blob/antd-vue-ts/public/light.png) -->
