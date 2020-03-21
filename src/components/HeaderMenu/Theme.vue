<template>
  <a-dropdown
    overlay-class-name="theme-config"
  >
    <div class="menu-icon">
      <span>
        <a-icon
          type="bg-colors"
          class="menu-icon-item"
        />
      </span>
    </div>
    <div slot="overlay">
      <div class="w_theme_select">
        <h3 class="w_theme_select_title">
          Theme Color
        </h3>
        <div class="w_theme_content">
          <div
            v-for="color in colors"
            :key="color"
            class="w_theme_color_block"
            :style="[{'background':color}]"
            @click="changeTheme(color)"
          >
            <a-icon
              v-if="activeTheme===color"
              type="check"
            />
          </div>
        </div>
        <h3 class="w_theme_select_title">
          Menu Color
        </h3>
        <div>
          <a-switch
            checked-children="深色"
            un-checked-children="浅色"
            default-checked
            @change="changeMenuTheme"
          />
        </div>
      </div>
    </div>
  </a-dropdown>
</template>
<script lang="ts">
  import { updateTheme } from '../../utils/common'
  import { Vue, Component } from 'vue-property-decorator'
  import { Dropdown, Menu, Avatar, Icon, Switch } from 'ant-design-vue'
  @Component({
    components: {
      'a-icon': Icon,
      'a-switch': Switch,
      'a-avatar': Avatar,
      'a-dropdown': Dropdown,
      'a-menu-item': Menu.Item,
      'a-menu-divider': Menu.Divider,
      'a-menu': Menu
    }
  })
  export default class ThemeConfig extends Vue {
    colors:Array<string> = ['#F5222D', '#FA541C', '#FAAD14', '#13C2C2', '#52C41A', '#1890FF', '#2F54E8', '#722ED1']
    activeTheme:string = '#2F54E8'
    changeTheme(color:string) {
      this.activeTheme = color
      localStorage.setItem('local_theme', color)
      updateTheme(color)
    }

    mounted() {
      const init_theme = localStorage.getItem('local_theme')
      this.activeTheme = (init_theme || '#2F54E8')
      updateTheme(this.activeTheme)
    }
    changeMenuTheme(val:Boolean) { this.$emit('changeLeftBar', val) }
  }
</script>

<style lang="scss" scoped>
.ant-dropdown:before {
  //为了解决 无法点击自定义的东西
  z-index: -1;
}
 .w_theme_select {
   width: 130px;
   height: 170px;
   padding: 8px 0 8px 12px;
   background-color: #fff;
   background-clip: padding-box;
   border-radius: 4px;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  .w_theme_select_title {
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 22px;
  }
  .w_theme_color_block {
    float: left;
    width: 20px;
    height: 20px;
    margin-right: 8px;
    margin-bottom: 8px;
    color: #fff;
    font-weight: 700;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
  }
}
</style>
