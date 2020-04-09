<template>
  <wx-container show-bread>
    <template v-slot:header>
      Container Header插槽(不需要删除)
    </template>
    <div>
      Container内容插槽
    </div>
  </wx-container>
</template>

<script lang="ts">
  /**
   * @desc Home主页模板
   * show-bread 是否显示导航面包屑
   * v-slot:header contaniner组件 header插槽
   * container 默认内容插槽
   */
  import { Component, Vue } from 'vue-property-decorator'
  @Component
  export default class ComponentName extends Vue {

  }
</script>

<style lang="scss" scoped>
</style>
