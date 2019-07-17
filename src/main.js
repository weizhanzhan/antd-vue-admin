import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Bmob from "hydrogen-js-sdk";
import store from './store'
import '@babel/polyfill'

import './permission'
import './utils/antd-components.js'
import './assets/style/global.scss'
import { bus } from './utils/common'

Vue.prototype.$bus = bus

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
