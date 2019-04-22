module.exports = {  
  publicPath: '/',//解决打包后空白
  lintOnSave:false,//关闭eslint检测
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "./src/assets/style/theme.scss";
        `
      }
    }
  }
} 