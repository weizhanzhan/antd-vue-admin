<template>
  <a-dropdown>
    <div class="menu-icon">
      <span>
        <a-icon
          type="global"
          class="menu-icon-item"
        />
      </span>
    </div>
    <a-menu
      slot="overlay"
      @click="changeLang"
    >
      <a-menu-item key="zh-cn">
        <span rel="noopener noreferrer">中文</span>
      </a-menu-item>
      <a-menu-item key="en">
        <span rel="noopener noreferrer">English</span>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import { Dropdown, Menu, Icon } from 'ant-design-vue'
  @Component({
    components: {
      'a-icon': Icon,
      'a-dropdown': Dropdown,
      'a-menu-item': Menu.Item,
      'a-menu-divider': Menu.Divider,
      'a-menu': Menu
    }
  })
  export default class LangConfig extends Vue {
    changeLang(item:any) {
      const key = item.key
      const bus = Vue.prototype.$bus
      bus.$emit('change-lang', key)
    }
  }
</script>

<style lang="scss" scoped>

</style>
