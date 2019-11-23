<template>
  <wx-container>
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
  </wx-container>
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
  .account-item{
      padding: 0 16px 0 8px;
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
