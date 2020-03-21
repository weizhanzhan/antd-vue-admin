
<template>
  <header class="header">
    <div class="header-left">
      <module-menu />

      <!-- <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="changeCollapsed"
      />
      <bread-crumb class="head-bread" /> -->
    </div>
    <ul class="menu">
      <li class="user">
        <user-menu />
      </li>
      <li class="theme">
        <theme-menu v-on="$listeners" />
      </li>
      <li class="lang">
        <lang-menu />
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
  import BreadCrumb from '../BreadCrumb.vue'
  import UserMenu from '../HeaderMenu/User.vue'
  import ThemeMenu from '../HeaderMenu/Theme.vue'
  import ModuleMenu from '../HeaderMenu/Modules.vue'
  import LangMenu from '../HeaderMenu/Lang.vue'
  import { Icon, Divider } from 'ant-design-vue'
  import { Vue, Component, Prop } from 'vue-property-decorator'
  @Component({
    components: {
      'a-icon': Icon,
      'bread-crumb': BreadCrumb,
      'user-menu': UserMenu,
      'theme-menu': ThemeMenu,
      'lang-menu': LangMenu,
      'module-menu': ModuleMenu,
      'a-divider': Divider
    }
  })
  export default class Template extends Vue {
    @Prop()collapsed!:Boolean
    changeCollapsed() {
      this.$emit('trigger')
    }
  }
</script>

<style lang="scss">

.header{
  position: relative;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .header-left{
    padding-left: 0;
    .trigger {
      font-size: 18px;
      line-height: 64px;
      cursor: pointer;
      transition: color 0.3s;
    }
    .trigger:hover {
      color: #1890ff;
    }
    .head-bread{
      position: absolute;
      top: 20px;
      left: 60px;
    }
  }
  .menu{
    position: absolute;
    right: 0;
    top: 0;
    list-style: none;
    li{
      display: inline-block;
      text-align: center;
      &:hover{ background: #fafafa  }
    }
    .user{
      min-width: 100px;
    }
    .theme{ width: 50px; }
    .lang{  width: 50px; }
  }
}
</style>
