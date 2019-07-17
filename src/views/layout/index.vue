<template>
  <a-layout style="min-height: 100vh;">
    <a-layout-sider
      v-model="collapsed"
      :trigger="null"
      collapsible
    >
      <side-bar />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <header-bar
          :collapsed="collapsed"
          @trigger="trigger"
        />
      </a-layout-header>
      <a-layout-content>
        <div style="padding:16px 0 0 16px">
          <breadCrumb />
        </div>
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
  import headerBar from './components/header_bar'
  import sideBar from './components/side_bar'
  import breadCrumb from '../../components/bread_crumb'

  export default {
    components: {
      sideBar,
      headerBar,
      breadCrumb
    },
    data() {
      return {
        collapsed: false
      }
    },
    methods: {
      trigger() {
        this.collapsed = !this.collapsed
      }
    }
  }
</script>
<style lang="scss">
  @import '../../assets/style/layout.scss';
</style>
