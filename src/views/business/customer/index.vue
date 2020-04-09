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
          :data-source="data"
          :row-key="record => record._id"
          :pagination="false"
          :loading="loading"
        >
          <template
            slot="avatar"
            slot-scope="avatar"
          >
            <a-avatar
              :src="avatar"
              :size="23"
            />
          </template>
          <template
            slot="name"
            slot-scope="name"
          >
            {{ name }}
          </template>
        </a-table>
      </div>
    </div>
  </wx-container>
</template>

<script lang="ts">

  import { Vue, Component, Prop } from 'vue-property-decorator'
  import WxFilter from './components/filter.vue'
  const CustomerImg = require('../../../assets/images/customer.jpg')
  const columns = [
    {
      title: 'avatar',
      dataIndex: 'avatar',
      width: '20%',
      scopedSlots: { customRender: 'avatar' }
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      width: '20%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: 'Role',
      dataIndex: 'role',
      width: '20%'
    },
    {
      title: 'Email',
      dataIndex: 'email'
    }
  ]
  @Component({
  components: {
    'wx-filter': WxFilter
    }
  })
  export default class Customer extends Vue {
    customerImg = CustomerImg
    visible: boolean = false;
    columns:Array<object> = columns
    @Prop() data!:Array<object>
    @Prop() loading!:boolean
  }
</script>

<style lang="scss" scoped>

</style>
