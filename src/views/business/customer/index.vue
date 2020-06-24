<template>
  <wx-container show-bread>
    <template v-slot:header>
      <div style="height:60px;display:inline-block">
        <h2>客户管理中心</h2>
        <a-icon
          type="notification"
          theme="twoTone"
        />： 本周新增3名客户 !
      </div>
    </template>
    <div class="wx-body">
      <wx-filter />
      <div>
        <a-table
          :columns="columns"
          :data-source="customerList"
          :row-key="record => record.id"
          :pagination="false"
          :loading="loading"
        >
          <a
            slot="name"
            slot-scope="name"
          >
            {{ name }}
          </a>
          <template
            slot="code"
            slot-scope="code"
          >
            <a-tag
              :color="getCustomerType(code).tagColor"
            >
              {{ getCustomerType(code).name }}
            </a-tag>
          </template>
          <template
            slot="state"
            slot-scope="state"
          >
            <a-tag
              v-if="!state"
              color="red"
            >
              冻结
            </a-tag>
            <a-tag
              v-else
              color="cyan"
            >
              激活
            </a-tag>
          </template>
          <span
            slot="action"
            slot-scope=""
          >
            <a>编辑</a>
            <a-divider type="vertical" />
            <a>删除</a>

          </span>
        </a-table>
      </div>
    </div>
  </wx-container>
</template>

<script lang="ts">

  import { Vue, Component, Prop } from 'vue-property-decorator'
  import { Tag, Divider } from 'ant-design-vue'
  import WxFilter from './components/filter.vue'
  // eslint-disable-next-line no-unused-vars
  import { Customer, CustomerContent } from '@/entity/Customer'
  import { CustomerCodeType } from '@/model/CustomerModel'
  const CustomerImg = require('../../../assets/images/customer.jpg')
  const columns = [
    {
      title: '客户名称',
      dataIndex: 'name',
      sorter: true,
      width: '20%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: 'code',
      dataIndex: 'code',
      scopedSlots: { customRender: 'code' }
    },
    {
      title: 'state',
      dataIndex: 'state',
      scopedSlots: { customRender: 'state' }
    },
    {
      title: '电话',
      dataIndex: 'phone'
    },
    {
      title: '地址',
      dataIndex: 'address'
    },
    {
      title: '操作',
      key: 'action',
      scopedSlots: { customRender: 'action' }
    }
  ]
  // eslint-disable-next-line no-unused-vars
  enum CustomerTypes { first, second, thrid}

  @Component({
  components: {
    'wx-filter': WxFilter,
    'a-tag': Tag,
    'a-divider': Divider
    }
  })
  export default class extends Vue {
    private customerImg = CustomerImg
    private visible: boolean = false;
    private columns:Array<object> = columns
    private customerList:Array<CustomerContent> = []
    private total:number = 0
    @Prop() loading!:boolean

    getCustomerType(code:string) {
      return CustomerCodeType[code]
    }
    async mounted() {
      const customerListContent = await Customer.getAllCustoemrList()
      this.customerList = customerListContent.contents
      this.total = customerListContent.totalElements
    }
  }
</script>

<style lang="scss" scoped>

</style>
