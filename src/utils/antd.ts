
import Vue from 'vue'
import WxContainer from '../components/Container/index.vue'
import { message } from 'ant-design-vue'

const selfComponent = [
    { name: 'wx-container', component: WxContainer }
]
selfComponent.forEach(item => {
    Vue.component(item.name, item.component)
})
Vue.prototype.$message = message
