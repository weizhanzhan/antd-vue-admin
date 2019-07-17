<template>
  <a-menu-item
    v-if="!route.children"
    class="ant-menu-item"
    style="padding-left: 24px;"
  >
    <a-icon type="user" />
    <span>{{ isHidden }}</span>
  </a-menu-item>
  <a-menu
    v-else
    theme="dark"
    :default-selected-keys="defaultSelectedKeys"
    mode="inline"
  >
    <a-sub-menu key="sub1">
      <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>

      <a-menu-item key="7">
        Option 7
      </a-menu-item>
      <a-menu-item key="8">
        Option 8
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script>
  export default {
    name: 'SideBarItem',
    props: {
      route: {
        type: Object
      },
      defaultSelectedKeys: {
        type: Array
      }
    },
    computed: {

      isHidden() {
        return this.route.hidden
      }
    }
  }

</script>

<style>

</style>
