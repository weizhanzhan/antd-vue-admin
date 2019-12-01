<template>
  <wx-container>
    <WxFilter />
    <div class="wx-body ">
      <WxTable
        :data="users"
        :loading="loading"
      />
    </div>
  </wx-container>
</template>

<script lang="ts">
  import FilterForm from '../../../components/FilterForm/index.vue'
  import WxFilter from './components/filter.vue'
  import WxTable from './components/table.vue'
  import { getUser } from '../../../api/user'
  import { Provide, Vue, Component } from 'vue-property-decorator'
@Component({
  components: {
    FilterForm: FilterForm,
    WxFilter: WxFilter,
    WxTable: WxTable
  }
})
  export default class BlogCateGory extends Vue {
  @Provide() users: Array<Object> = [];

  @Provide() loading: Boolean = false;
  @Provide() formData:Object = {}
  created() {
    this.loading = true
    getUser().then((res:any) => {
      this.loading = false
      this.users = res
    }).catch(() => {
      this.loading = false
    })
  }
  handleSearch() {
    console.log(2323)
  }
  handleReset() {}
  loadMore() {
    console.log('loadmore')
  }
  }

</script>

<style scoped>

/* .ant-advanced-search-form .ant-form-item */
</style>
