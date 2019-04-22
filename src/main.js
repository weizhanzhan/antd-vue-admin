import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import Bmob from "hydrogen-js-sdk";
import store from './store'
import '@babel/polyfill';

import './permission'
import './utils/antd-components.js'
import './assets/style/global.scss'
import { bus } from './utils/common'
  
Vue.prototype.$bus = bus
// Bmob.initialize("2f5992c295f5f1ad6cb7b69b3202685a", "86329081e4466445e800e56f389ffaed");
// Vue.prototype.Bmob = Bmob
// Bmob.User.login('zhanwei','123456').then(res => {
//   console.log(res)
// }).catch(err => {
//  console.log(err)
// });
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
