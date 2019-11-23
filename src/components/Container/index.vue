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

<script>
  export default {
    name: 'WxContainer',
    mounted() {
      console.log(this)
    }
  }
</script>

<style lang="scss" scoped>
.wx-container{
  .container-header{
    padding: 16px 24px;
    background: #ffffff
  }
  .container-body{
   margin: 24px 24px 0;
  }
}
</style>
