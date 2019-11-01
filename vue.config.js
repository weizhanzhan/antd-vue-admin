module.exports = {
  publicPath: '/', // 解决打包后空白
  lintOnSave: false, // 关闭eslint检测
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "./src/assets/style/theme.scss";
        `
      }
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
      rules: [
        {
          test: /.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/.vue$/]
          }
        }
      ]
    }
  }
}
