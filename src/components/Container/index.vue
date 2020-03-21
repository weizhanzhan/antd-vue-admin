<template>
  <div class="wx-container">
    <div
      v-if="$slots.header"
      class="container-header"
    >
      <slot name="header" />
    </div>
    <div class="container-body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  @Component({
    name: 'WxContainer'
  })
  export default class WxContainer extends Vue {
  }
</script>

<style lang="scss" scoped>
.wx-container{
  .container-header{
    padding: 16px 24px;
    background: #ffffff
  }
  .container-body{
    margin: 24px;
    transition: all .2s;
  }
}
</style>
