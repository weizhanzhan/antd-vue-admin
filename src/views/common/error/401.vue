<template>
  <div>
    Error401
    <button @click="$router.push('/')">
      返回首页
    </button>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component
  export default class Error401 extends Vue {
  }
</script>

<style lang="scss" scoped>

</style>
