<template>
  <a-layout style="min-height: 100vh;">
    <a-layout-sider
      v-model="collapsed"
      collapsible
      :class="['side_bar_'+theme]"
    >
      <side-bar
        :theme="theme"
        :collapsed="collapsed"
      />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0;">
        <header-bar
          :collapsed="collapsed"
          @trigger="trigger"
          @changeLeftBar="changeLeftBar"
        />
      </a-layout-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
  import HeaderBar from '../HeaderBar/index.vue'
  import SideBar from '../SideBar/index.vue'
  import { Layout } from 'ant-design-vue'
  import { Vue, Component } from 'vue-property-decorator'
  @Component({
    name: 'LayoutContainer',
    components: {
        HeaderBar, SideBar,
        'a-layout': Layout,
        'a-layout-sider': Layout.Sider,
        'a-layout-header': Layout.Header,
        'a-layout-content': Layout.Content
    }
  })
  export default class LayoutContainer extends Vue {
      collapsed:boolean=false
      theme:string='dark'

      trigger() {
        this.collapsed = !this.collapsed
      }
      changeLeftBar(val:boolean) {
        if (val) this.theme = 'dark'
        else this.theme = 'light'
      }
  }
</script>
<style lang="scss">
@import "../../assets/style/layout.scss";
</style>
