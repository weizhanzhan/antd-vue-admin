<template>
  <a-sub-menu
    :key="menuInfo.name"
    v-bind="$props"
    v-on="$listeners"
  >
    <span slot="title">
      <a-icon type="smile" /><span>{{ $t(`menu.${menuInfo.meta.title}`) }}</span>
    </span>
    <template v-for="item in menuInfo.children">
      <a-menu-item
        v-if="!item.children"
        :key="item.name"
      >
        <!-- <a-icon type="smile" /> -->
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

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'
  import { Menu, Icon } from 'ant-design-vue'
  @Component({
    components: {
      'a-menu': Menu,
      'a-sub-menu': Menu.SubMenu,
      'a-menu-item-group': Menu.ItemGroup,
      'a-menu-item': Menu.Item,
      'a-icon': Icon
    },
    props: (Menu.SubMenu as any).props
  })
  export default class SubMenu extends Vue {
    @Prop({ default: '#010101' }) private bgColor!: string;
    @Prop({ default: '#fff' }) private txtColor!: string;
    @Prop(Object)menuInfo!:{}

    isSubMenu:Boolean = true
  }
</script>

<style lang="scss" scoped>

</style>
