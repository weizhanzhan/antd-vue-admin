
<template>
  <div>
    <a-table
      :columns="columns"
      :data-source="data"
       :rowKey="record => record._id"
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
</template>

<script lang="ts">
  import { Provide, Vue, Component, Prop } from 'vue-property-decorator'
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
  components: {}
})
  export default class BlogCateGory extends Vue {
//   @Provide() data: any = [];
  @Provide() visible: Boolean = false;
  @Provide() columns:Array<Object> = columns

  @Prop() data!:Array<Object>
  
  @Prop() loading!:Boolean
  }
</script>

<style scoped>
</style>
