<template>
  <div class="wx-container">
    <div
      v-if="$slots.header"
      class="container-header"
    >
      <div
        v-if="showBread"
        class="bread-crumb"
      >
        <bread-crumb />
      </div>
      <div class="header_slot">
        <slot name="header" />
      </div>
    </div>
    <div class="container-body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'
  import BreadCrumb from '../BreadCrumb.vue'
  @Component({
    name: 'WxContainer',
    components: {
      'bread-crumb': BreadCrumb
    }
  })
  export default class WxContainer extends Vue {
    @Prop({ default: false, type: Boolean }) showBread!:boolean
  }
</script>

<style lang="scss" scoped>
.wx-container{
  .container-header{
    padding: 16px 24px;
    background: #ffffff;
    font-size: 14px;
    .bread-crumb{
      padding-bottom: 11px;
    }
    .header_slot{
      color: rgba(0, 0, 0, 0.65);
    }
  }
  .container-body{
    margin: 24px;
    transition: all .2s;
  }
}
</style>
