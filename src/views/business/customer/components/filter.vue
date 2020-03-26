<template>
  <div
    class="wx-body"
    style="padding:10px"
  >
    <a-form
      layout="inline"
      class="ant-advanced-search-form"
    >
      <a-row>
        <a-col
          :xl="3"
          :lg="3"
          :md="4"
          :sm="8"
          :xs="12"
        >
          <a-form-item>
            <a-input placeholder="请输入用户名" />
          </a-form-item>
        </a-col>
        <a-col
          :xl="3"
          :lg="3"
          :md="4"
          :sm="8"
          :xs="12"
        >
          <a-form-item>
            <a-input placeholder="请输入岗位" />
          </a-form-item>
        </a-col>
        <a-col
          :xl="3"
          :lg="3"
          :md="4"
          :sm="8"
          :xs="12"
        >
          <a-form-item>
            <a-input placeholder="请选择角色" />
          </a-form-item>
        </a-col>
        <a-col
          :xl="15"
          :lg="15"
          :md="12"
          :sm="10"
          :xs="6"
        >
          <a-form-item class="form-item-btn">
            <a-button
              type="primary"
            >
              Search
            </a-button>
            <a-button
              :style="{ marginLeft: '8px' }"
              @click="handleReset"
            >
              Clear
            </a-button>
            <div style="float:right">
              <a-button
                type="primary"
                icon="plus"
                @click="handleAddClick"
              >
                新增
              </a-button>
                 &nbsp;
              <a-button
                icon="download"
              >
                导出
              </a-button>
            </div>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <wx-modal ref="modal" />
  </div>
</template>
<script lang="ts">
  import WxModal from './modal.vue'
  import { Provide, Vue, Component } from 'vue-property-decorator'

  @Component({
    components: { WxModal }
  })
  export default class BlogCateGory extends Vue {
    @Provide() categoryList: any = [];
    @Provide() visible: Boolean = false;
    @Provide() spinning: Boolean = false;

    handleReset() {

    }
    handleAddClick() {
      const modal = this.$refs.modal as WxModal
      modal.show({})
    }
  }
</script>

<style scoped>
.ant-advanced-search-form >>> .ant-form-item {
  display: flex;
  margin-bottom: 0
}

.ant-advanced-search-form >>> .ant-form-item-control-wrapper {
  flex: 1;
}
</style>
