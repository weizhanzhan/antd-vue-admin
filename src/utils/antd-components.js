import Vue from 'vue'
import {
    Button,
    Layout,
    Icon,
    Menu,
    Form,
    Input,
    Checkbox,
    Row,
    Col,
    Dropdown,
    Badge,
    Avatar,
    Breadcrumb,
    Select,
    LocaleProvider,
    Transfer,
    Popconfirm,
    TimePicker,
    DatePicker,
    pagination,
    Radio,
    Calendar,
    Modal,
    Table,
    Tag,
    Divider,
    Switch
} from 'ant-design-vue'

import {
    message
} from 'ant-design-vue'
const {
    Header,
    Footer,
    Sider,
    Content
} = Layout

const componentList = [
    Button,
    Layout,
    Header,
    Footer,
    Sider,
    Content,
    Menu,
    Form,
    Icon,
    Input,
    Checkbox,
    Row,
    Col,
    Dropdown,
    Badge,
    Avatar,
    Breadcrumb,
    Select,
    LocaleProvider,
    Transfer,
    Popconfirm,
    TimePicker,
    DatePicker,
    pagination,
    Calendar,
    Radio,
    Modal,
    Table,
    Tag,
    Divider,
    Switch
]

componentList.forEach(component => {
    // Vue.component(component.name, component)
    Vue.use(component)
})

Vue.prototype.$message = message
// import {
//     Affix,
//     Anchor,
//     AutoComplete,
//     Alert,
//     Avatar,
//     BackTop,
//     Badge,
//     Breadcrumb,
//     Button,
//     Calendar,
//     Card,
//     Collapse,
//     Carousel,
//     Cascader,
//     Checkbox,
//     Col,
//     DatePicker,
//     Divider,
//     Dropdown,
//     Form,
//     Icon,
//     Input,
//     InputNumber,
//     Layout,
//     List,
//     LocaleProvider,
//     message,
//     Menu,
//     Modal,
//     notification,
//     Pagination,
//     Popconfirm,
//     Popover,
//     Progress,
//     Radio,
//     Rate,
//     Row,
//     Select,
//     Slider,
//     Spin,
//     Steps,
//     Switch,
//     Table,
//     Transfer,
//     Tree,
//     TreeSelect,
//     Tabs,
//     Tag,
//     TimePicker,
//     Timeline,
//     Tooltip,
//     // Mention,
//     Upload,
//     // version,
//     Drawer,
//     Skeleton,
//     Comment,
//     ConfigProvider,
//   } from 'ant-design-vue';

//   Vue.prototype.$message = message;
//   Vue.prototype.$notification = notification;
//   Vue.prototype.$info = Modal.info;
//   Vue.prototype.$success = Modal.success;
//   Vue.prototype.$error = Modal.error;
//   Vue.prototype.$warning = Modal.warning;
//   Vue.prototype.$confirm = Modal.confirm;

//   /* v1.1.3+ registration methods */
//   Vue.use(Affix);
//   Vue.use(Anchor);
//   Vue.use(AutoComplete);
//   Vue.use(Alert);
//   Vue.use(Avatar);
//   Vue.use(BackTop);
//   Vue.use(Badge);
//   Vue.use(Breadcrumb);
//   Vue.use(Button);
//   Vue.use(Calendar);
//   Vue.use(Card);
//   Vue.use(Collapse);
//   Vue.use(Carousel);
//   Vue.use(Cascader);
//   Vue.use(Checkbox);
//   Vue.use(Col);
//   Vue.use(DatePicker);
//   Vue.use(Divider);
//   Vue.use(Drawer);
//   Vue.use(Dropdown);
//   Vue.use(Form);
//   Vue.use(Icon);
//   Vue.use(Input);
//   Vue.use(InputNumber);
//   Vue.use(Layout);
//   Vue.use(List);
//   Vue.use(LocaleProvider);
//   Vue.use(Menu);
//   Vue.use(Modal);
//   Vue.use(Pagination);
//   Vue.use(Popconfirm);
//   Vue.use(Popover);
//   Vue.use(Progress);
//   Vue.use(Radio);
//   Vue.use(Rate);
//   Vue.use(Row);
//   Vue.use(Select);
//   Vue.use(Slider);
//   Vue.use(Spin);
//   Vue.use(Steps);
//   Vue.use(Switch);
//   Vue.use(Table);
//   Vue.use(Transfer);
//   Vue.use(Tree);
//   Vue.use(TreeSelect);
//   Vue.use(Tabs);
//   Vue.use(Tag);
//   Vue.use(TimePicker);
//   Vue.use(Timeline);
//   Vue.use(Tooltip);
//   Vue.use(Upload);
//   Vue.use(Skeleton);
//   Vue.use(Comment);
//   Vue.use(ConfigProvider);

