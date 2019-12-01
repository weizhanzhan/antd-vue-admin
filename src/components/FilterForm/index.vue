
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
        <!-- 高级搜索 -->
        <a
          :style="{ marginLeft: '8px', fontSize: '12px' }"
          @click.prevent="loadMore"
        >
          高级搜索
          <a-icon type="down" />
        </a>
      </a-col>
    </a-row>
    <div class="form-box">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
  import { Provide, Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  components: {}
})
  export default class BlogCateGory extends Vue {
          @Prop({
            type: Boolean, // 父组件传递给子组件的数据类型
            required: false, // 是否必填
            default: ' ' // 默认值， 如果传入的是 Object，则要 default: ()=>({}) 参数为函数
        }) value !: Boolean;

  @Provide() categoryList: any = [];
  @Provide() visible: Boolean = false;
  @Provide() spinning: Boolean = false;

  loadMore() {
    this.$emit('input', !this.value)
    this.$emit('loadmore')
  }
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
  .form-box {
    padding-top: 16px;
  }
}
</style>
