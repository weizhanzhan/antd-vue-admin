<template>
  <div class="account">
    <a-row>
      <a-col
        :xl="7"
        class="account-item"
      >
        <div class="account-info">
          <Info />
        </div>
      </a-col>
      <a-col
        :xl="17"
        class="account-item"
      >
        <div class="account-detail" />
      </a-col>
    </a-row>
  </div>
</template>

<script>

  import Info from './components/info.vue'
  export default {
    components: { Info },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
// $theme-color 全局css
.account {
    padding: 8px;
    .account-item{
        padding: 8px 16px 12px 8px;
        .account-info{
          width: 100%;
          min-height: 500px;
          background: #ffffff
        }
        .account-detail{
          width: 100%;
          height: 500px;
          background: #ffffff
        }
    }

}
.test{
  background: var(--PC)
}
</style>
