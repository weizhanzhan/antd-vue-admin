module.exports = {
  publicPath: '/', // 解决打包后空白
  lintOnSave: false, // 关闭eslint检测
  productionSourceMap: false,
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
    },
    externals: {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      axios: 'axios'
    }
  },
  chainWebpack: config => {
    const cdn = {
      // 访问https://unpkg.com/element-ui/lib/theme-chalk/index.css获取最新版本
      css: ['//unpkg.com/element-ui@2.10.1/lib/theme-chalk/index.css'],
      js: [
        '//unpkg.com/vue@2.6.10/dist/vue.min.js', // 访问https://unpkg.com/vue/dist/vue.min.js获取最新版本
        '//unpkg.com/vue-router@3.0.6/dist/vue-router.min.js',
        '//unpkg.com/vuex@3.1.1/dist/vuex.min.js',
        '//unpkg.com/axios@0.19.0/dist/axios.min.js'
      ]
    }

    // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
    config.plugin('html').tap(args => {
      // html中添加cdn
      args[0].cdn = cdn
      return args
    })
  }
}
