<template>
  <div>
    <div :class="['logo',theme+'_bg']">
      <img
        src="/ico.png"
      >
      <span :class="['logo_text',theme,collapsed?'hide':'show']">Vue Admin</span>
    </div>
    <a-menu
      mode="inline"
      :class="['side_bar_'+theme]"
      :theme="theme"
      :open-keys="openKeys"
      :selected-keys="[$route.name]"
      :inline-collapsed="collapsed"
      @click="menuClick"
      @openChange="handleOpenChange"
    >
      <template v-for="item in handleRoutes(routes)">
        <a-menu-item
          v-if="!item.children"
          :key="item.name"
        >
          <a-icon type="pie-chart" />
          <span>{{ item.meta.title }}123</span>
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

<script>
  import subMenu from './components/sub-menu.vue'
  import {
    mapGetters
  } from 'vuex'
  export default {
    components: { subMenu },
    props: {
      theme: {
        type: String,
        default: 'dark'
      },
      collapsed: {
        type: Boolean
      }
    },
    data() {
      return {
        openKeys: [this.$route.matched[0].name]
      }
    },
    computed: {
      ...mapGetters(['routes'])
    },
    watch: {
      '$route'() {
        this.openKeys = [this.$route.matched[0].name]
      }
    },
    methods: {
      handleOpenChange(openKeys) {
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
      },
      menuClick({ key }) {
        this.$router.push({ name: key })
      },
      /**
       * 过滤菜单，把hidden的去掉，把children只有一个 覆盖父级路由 显示单级菜单
       */
      handleRoutes(routes) {
        let newRoutes = JSON.parse(JSON.stringify(routes))
        newRoutes = newRoutes.filter(route => !route.hidden)
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

  }
</script>

<style lang="scss" scoped>
    .logo {
      height: 32px;
      margin: 16px;
      color: #fff;
      padding-left: 10px;
      padding-top: 3px;
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
      background: var(--PCL)
    }
</style>
