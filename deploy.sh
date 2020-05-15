#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

git init
git add -A
git commit -m '功能开发细节优化'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:weizhanzhan/antd-vue-admin.git typescript_dev

cd -