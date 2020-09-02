const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  axios: 'axios'
}
const cdnMap = {
  css: [],
  js: [
      '//unpkg.com/vue@2.6.10/dist/vue.min.js',
      '//unpkg.com/vue-router@3.0.6/dist/vue-router.min.js',
      '//unpkg.com/vuex@3.1.1/dist/vuex.min.js',
      '//unpkg.com/axios@0.19.0/dist/axios.min.js'
  ]
}
module.exports = {
    publicPath: '/vue-admin-preview/',
    productionSourceMap: process.env.NODE_ENV !== 'production',
    chainWebpack: config => {
      config.externals(externals)
      config.plugin('html').tap(args => {
        args[0].cdn = cdnMap
        args[0].minify && (args[0].minify.minifyCSS = true) // 压缩html中的css
        return args
      })
    }
    // baseUrl: process.env.NODE_ENV === 'production' ? './' : ''
}
