
<template>
  <div class="form">
    <a-row class="form-title">
      <a-col :span="12">
        数据筛选
      </a-col>
      <a-col
        :span="12"
        class="super-btn"
      >
        高级搜索
      </a-col>
    </a-row>
    <div class="form-box">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
  import { Provide, Vue, Component } from 'vue-property-decorator';
@Component({
  components: {}
})
  export default class BlogCateGory extends Vue {
  @Provide() categoryList: any = [];
  @Provide() visible: Boolean = false;
  @Provide() spinning: Boolean = false;
  }
</script>

<style lang="scss" scoped>
.form {
  .form-title {
    border-bottom: 1px solid #eeeeee;
    padding-bottom: 16px;
    .super-btn {
      text-align: right;
    }
  }
}
</style>
