# antd-vue-admin

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

[antd-vue-admin](https://github.com/weizhanzhan/antd-vue-admin) 是一个后台管理 spa 页面，它基于 [vue](https://github.com/vuejs/vue) 和 [ant-design-vue](https://github.com/vueComponent/ant-design-vue) 采用了最新的前端技术栈，实现了登录权限验证，动态路由生成，参考[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) 和[ant-design-pro-vue](https://github.com/sendya/ant-design-pro-vue)，实现更标准化的前端实例模型，根据自己的业务修该对应的路由信息等模块信息，快速搭建后台管理系统模板。


>喜欢的留个star，希望不要修改数据哦，谢谢

>ts版单独在antd-vue-ts分支上，不考虑ts请切换master分支

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

### 功能

```
- 登录 / 注销
- 页面
  - dashboard
  - sideBar收缩和展开
  - 主题换肤
  - 中英文切换（未完善）

- 侧边栏
  - 根据不同用户权限展示相应的动态左侧菜单

- 权限验证
  - 管理员页面（暂无）
  - 权限设置（暂无）

- 表格操作
  - 涉及平常业务遇到的相关表格操作（参考）

- Echarts
 - 滑动显示更多数据
 - 动态切换charts
 - map地图使用

- Icons
 - 阿里iconfont
- TypeScript（待完善）
```

### Online

[在线浏览](http://admin.wzhan.xyz)
>账号375786117@qq.com 密码123456
![Image text](https://github.com/weizhanzhan/antd-vue-admin/blob/antd-vue-ts/public/login.png)
![Image text](https://github.com/weizhanzhan/antd-vue-admin/blob/antd-vue-ts/public/dark.png)
![Image text](https://github.com/weizhanzhan/antd-vue-admin/blob/antd-vue-ts/public/light.png)
