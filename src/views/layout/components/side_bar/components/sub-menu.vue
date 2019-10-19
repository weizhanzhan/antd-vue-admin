<template>
  <!-- <a-sub-menu
    :key="menuInfo.name"
  >
    <span slot="title">
      <a-icon type="mail" /><span>{{ menuInfo.meta.title }}</span>
    </span>
    <template v-for="item in menuInfo.children">
      <a-menu-item
        v-if="!item.children"
        :key="item.name"
      >
        <a-icon type="pie-chart" />
        <span>{{ item.meta.title }}</span>
      </a-menu-item>
      <sub-menu
        v-else
        :key="item.name"
        :menu-info="item"
      />
    </template>
  </a-sub-menu> -->
  <a-sub-menu
    :key="menuInfo.name"
    v-bind="$props"
    v-on="$listeners"
  >
    <span slot="title">
      <a-icon type="mail" /><span>{{ $t(`menu.${menuInfo.meta.title}`) }}</span>
    </span>
    <template v-for="item in menuInfo.children">
      <a-menu-item
        v-if="!item.children"
        :key="item.name"
      >
        <a-icon type="pie-chart" />
        <span>{{ $t(`menu.${item.meta.title}`) }}</span>
      </a-menu-item>
      <sub-menu
        v-else
        :key="item.name"
        :menu-info="item"
      />
    </template>
  </a-sub-menu>
</template>
<script>
  import { Menu } from 'ant-design-vue'
  export default {
    name: 'SubMenu',
    // must add isSubMenu: true
    isSubMenu: true,
    props: {
      ...Menu.SubMenu.props,
      // Cannot overlap with properties within Menu.SubMenu.props
      menuInfo: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>
