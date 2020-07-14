module.exports = {
    publicPath: '/vue-admin-preview/',
    productionSourceMap: process.env.NODE_ENV !== 'production',
    configureWebpack: config => {
        config.externals = {
          vue: 'Vue',
          'vue-router': 'VueRouter',
          vuex: 'Vuex',
          axios: 'axios'
        }
      }
    // baseUrl: process.env.NODE_ENV === 'production' ? './' : ''
}
