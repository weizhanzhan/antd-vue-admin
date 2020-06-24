<template>
  <div class="module-box">
    <a-dropdown>
      <div class="module-icon">
        <span>
          <a-icon type="home" />
          <label style="padding-left:10px">{{ $t(`menu.${ activeModule}`) }}</label>
        </span>
        <span>
          <a-icon type="caret-down" />
        </span>
      </div>
      <a-menu
        slot="overlay"
        @click="dropClick"
      >
        <a-menu-item
          v-for="item in moduleMenu"
          :key="item.name"
        >
          <div class="module-menu-item">
            <span rel="noopener noreferrer">  <a-icon type="folder" />&nbsp;&nbsp;{{ $t(`menu.${ item.name }`) }}</span>
            <span v-if="activeModule === item.name">
              <a-icon
                type="environment"
                theme="twoTone"
                two-tone-color="#52c41a"
              /></span>
          </div>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import { Dropdown, Menu, Avatar, Icon, Divider } from 'ant-design-vue'
  import { Getter, Action } from 'vuex-class'

  @Component({
    components: {
      'a-icon': Icon,
      'a-avatar': Avatar,
      'a-dropdown': Dropdown,
      'a-menu-item': Menu.Item,
      'a-menu-divider': Menu.Divider,
      'a-menu': Menu,
      'a-divider': Divider
    }
  })
  export default class UserConfig extends Vue {
    @Getter('user') public user!: any
    @Getter('moduleMenu') public moduleMenu!: any
    @Getter('activeModuleMenu') public activeModuleMenu!: any
    @Getter('activeModule') public activeModule!: any
    @Action('handleModuleMenu')public handleModuleMenu!: any
    dropClick(item:any) :void{
      const moduleName = item.key
      this.handleModuleMenu(moduleName)
      this.toThisModuleFirstPage()
    }
    mounted() {
      this.handleInitModule()
    }
    toThisModuleFirstPage() {
      const { activeModuleMenu } = this
      if (activeModuleMenu.length) {
        const firstPage = activeModuleMenu[0]
        this.$router.push({ name: firstPage.name })
      }
    }
    handleInitModule() {
      const moduleName = this.$route.meta.module
      this.handleModuleMenu(moduleName)
    }
  }
</script>

<style lang="scss" scoped>
.module-box{
   width:200px;
   display:inline-block;
   position: relative;
   &::before{
       position: absolute;
       top:12px;
       content: '';
       right: 0;
       height: 30px;
       width: 1px;
       background: #e8e8e8
   }
   .module-icon {
     padding: 0 24px;
     display: flex;
     justify-content: space-between;
  }
  .module-icon:hover {
    background: rgba(0, 0, 0, 0.025);
  }

}
.module-menu-item{
  display: flex;
  justify-content: space-between;
}
</style>
