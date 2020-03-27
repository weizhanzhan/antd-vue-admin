
<template>
  <div>
    <div :class="['logo',theme+'_border']">
      <img src="/favicon.ico">
      <span :class="['logo_text',theme,collapsed?'hide':'show',theme+'_bg']">Vue Admin</span>
    </div>
    <a-menu
      mode="inline"
      :class="['side_bar_'+theme]"
      :theme="theme"
      :open-keys="openKeys"
      :selected-keys="[$route.name]"
      :inline-collapsed="collapsed"
      @click="handleMenuClick"
      @openChange="handleOpenChange"
    >
      <template v-for="item in handleRoutes(filterByRoleAddedModueRoutes)">
        <a-menu-item
          v-if="!item.children"
          :key="item.name"
        >
          <a-icon type="smile" />
          <span>{{ $t(`menu.${ item.meta.title}`) }}</span>
        </a-menu-item>
        <sub-menu
          v-else
          :key="item.name"
          :menu-info="item"
        />
      </template>
    </a-menu>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Watch, Prop } from 'vue-property-decorator'
  import { Getter } from 'vuex-class'
  import SubMenu from '../Menu/SubMenu.vue'
  import { Menu, Icon } from 'ant-design-vue'
  @Component({
    components: {
      'a-menu': Menu,
      'a-submenu': Menu.SubMenu,
      'a-menu-item-group': Menu.ItemGroup,
      'a-menu-item': Menu.Item,
      'a-icon': Icon,
      'sub-menu': SubMenu
    }
  })
  export default class Template extends Vue {
    openKeys:Array<any>=[]
    @Prop({ default: 'dark' })theme!:string
    @Prop()collapsed!:Boolean
    @Getter('routes') public routes!: any
    @Getter('addRoutes') public filterByRoleAddedRoutes!: Array<any>
    @Getter('activeModuleMenu') public filterByRoleAddedModueRoutes!: Array<any>
    @Watch('$route')
    onRouterChange() :void {
      this.handleMenuOpenedKeys()
    }
    mounted() :void {
      this.handleMenuOpenedKeys()
    }
    handleMenuOpenedKeys():void{
      this.openKeys = [this.$route.matched[0].name]
    }
    handleOpenChange(openKeys:Array<any>) {
      let keys
      if (openKeys.length > 1) {
        if (openKeys.length > 2) {
          keys = [openKeys[openKeys.length - 1]]
        } else if (openKeys[1].indexOf(openKeys[0]) > -1) {
          keys = [openKeys[0], openKeys[1]]
        } else {
          keys = [openKeys[openKeys.length - 1]]
        }
        this.openKeys = keys
      } else {
        this.openKeys = openKeys
      }
    }
    handleMenuClick(route:any) :void {
      this.$router.push({ name: route.key })
    }
    /**
     * 过滤菜单，把hidden的去掉，把children只有一个 覆盖父级路由 显示单级菜单
     */
    handleRoutes(routes:Array<any>) {
      let newRoutes = JSON.parse(JSON.stringify(routes))
      newRoutes = newRoutes.filter((route:any) => !route.hidden)
      for (var i = 0; i < newRoutes.length; i++) {
        const route = newRoutes[i]
        if (route.children && route.children.length === 1) {
          if (!route.alwaysShow) {
            newRoutes[i] = route.children[0]
          }
        } else if (route.children && route.children.length > 1) {
          newRoutes[i].children = [...this.handleRoutes(route.children)]
        }
      }
      return newRoutes
    }
  }
</script>

<style lang="scss" scoped>
  .logo {
    height: 32px;
    padding: 19px 16px 45px 26px;
    color: #fff;
    .logo_text{
      font-size: 18px;
      font-weight: 700;
      vertical-align: top;
      padding-left: 10px
    }
    .logo_text.dark{
      color: #ffffff
    }
    .logo_text.light{
      color: var(--PC)
    }
    .show{
      opacity: 1;
      transition: opacity 0.5s ease-in
    }
    .hide{ opacity: 0;}
    img {
      width: 25px;
      height: 25px;
    }
  }
  .light_bg{
    background: var(--PCL);
  }
  .light_border{
     border-right: 1px solid #e8e8e8;
  }
  .dark_border{
     border-right: 0
  }
</style>
