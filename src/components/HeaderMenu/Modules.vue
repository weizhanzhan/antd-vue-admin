<template>
  <div class="module-box">
    <a-dropdown>
      <div class="module-icon">
        <span>

          <a-icon type="home" />
          {{ activeModule }}
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
          <span rel="noopener noreferrer">  <a-icon type="folder" />&nbsp;&nbsp;{{ item.name }}</span>
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
    @Getter('activeModule') public activeModule!: any
    @Action('handleModuleMenu')public handleModuleMenu!: any
    dropClick(item:any) :void{
      const key = item.key
      this.handleModuleMenu(key)
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
       top:17px;
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

</style>
