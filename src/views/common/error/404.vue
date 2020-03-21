<template>
  <div>
    您打开的页面竟然没了！😱你敢信？
    <button @click="$router.push('/')">
      返回首页
    </button>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component
  export default class Error404 extends Vue {
  }
</script>

<style lang="scss" scoped>

</style>
