
import Vue from 'vue'
import WxContainer from '../components/Container/index.vue'
import { message } from 'ant-design-vue'
import {
    Icon,
    Row,
    Col,
    Table,
    Button,
    Form,
    Input,
    Upload,
    Modal,
    Tabs
} from 'ant-design-vue'

const antdComponents = [
    { name: 'a-row', component: Row },
    { name: 'a-col', component: Col },
    { name: 'a-icon', component: Icon },
    { name: 'a-table', component: Table },
    { name: 'a-button', component: Button },
    { name: 'a-form', component: Form },
    { name: 'a-form-item', component: Form.Item },
    { name: 'a-input', component: Input },
    { name: 'a-upload', component: Upload },
    { name: 'a-modal', component: Modal },
    { name: 'a-tabs', component: Tabs },
    { name: 'a-tab-pane', component: Tabs.TabPane }
]
const selfComponent = [
    { name: 'wx-container', component: WxContainer }
]
selfComponent.forEach(item => {
    Vue.component(item.name, item.component)
})
antdComponents.forEach(item => {
    Vue.component(item.name, item.component)
})
Vue.prototype.$message = message
