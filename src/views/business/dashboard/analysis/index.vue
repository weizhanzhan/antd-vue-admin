<template>
  <wx-container>
    <template v-slot:header>
      <div>
        Container头部插槽
      </div>
    </template>
    <div>
      Container内容插槽 --Analysis
    </div>
  </wx-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component
  export default class Analysis extends Vue {
  }
</script>

<style lang="scss" scoped>

</style>
