<template>
  <wx-container show-bread>
    <template v-slot:header>
      <div>
        <h2>工作台</h2>
        <a-icon
          type="dashboard"
          class="header-icon"
          theme="twoTone"
          two-tone-color="#52c41a"
        />这里是工作台的一些注释
      </div>
    </template>
    <div>
      Container内容插槽 --Workplace
    </div>
  </wx-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component
  export default class Workplace extends Vue {
  }
</script>

<style lang="scss" scoped>

</style>
