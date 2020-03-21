<template>
  <div class="module-box">
    <a-dropdown>
      <div class="module-icon">
        <span>
          <a-icon type="folder" />
          项目一
        </span>
        <span>
          <a-icon type="caret-down" />
        </span>
      </div>
      <a-menu
        slot="overlay"
        @click="dropClick"
      >
        <a-menu-item key="account">
          <span rel="noopener noreferrer"><a-icon type="user" />&nbsp;&nbsp;个人中心</span>
        </a-menu-item>

        <a-menu-item key="setting">
          <span rel="noopener noreferrer"><a-icon type="setting" />&nbsp;&nbsp;设置中心</span>
        </a-menu-item>

        <a-menu-item key="logout">
          <span rel="noopener noreferrer"><a-icon type="logout" />&nbsp;&nbsp;退出</span>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import { Dropdown, Menu, Avatar, Icon, Divider } from 'ant-design-vue'
  import { mapGetters } from 'vuex'
  @Component({
    components: {
      'a-icon': Icon,
      'a-avatar': Avatar,
      'a-dropdown': Dropdown,
      'a-menu-item': Menu.Item,
      'a-menu-divider': Menu.Divider,
      'a-menu': Menu,
      'a-divider': Divider
    },
    computed: {
      ...mapGetters(['user'])
    }
  })
  export default class UserConfig extends Vue {
    dropClick(item:any) :void{
      const key = item.key
      switch (key) {
      case 'account':
        this.$router.push('/account/index')
        break
      case 'logout':
        this.$store.dispatch('Logout')
        window.location.reload()
        break
      default:
        break
      }
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
