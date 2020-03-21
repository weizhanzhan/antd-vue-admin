<template>
  <a-dropdown>
    <div class="menu-icon">
      <span>
        <a-avatar
          :src="user.avatar"
          :size="23"
        />
        <span class="user_name">{{ user.name }}</span>
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
      <a-menu-divider />
      <a-menu-item key="logout">
        <span rel="noopener noreferrer"><a-icon type="logout" />&nbsp;&nbsp;退出</span>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import { Dropdown, Menu, Avatar, Icon } from 'ant-design-vue'
  import { mapGetters } from 'vuex'
  @Component({
    components: {
      'a-icon': Icon,
      'a-avatar': Avatar,
      'a-dropdown': Dropdown,
      'a-menu-item': Menu.Item,
      'a-menu-divider': Menu.Divider,
      'a-menu': Menu
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
 .menu-icon {
    text-align: center;
    padding: 0 10px;
    .menu-icon-item {
      color: var(--PC);
      font-size: 20px;
    }
    .user_name {
      font-weight: bold;
      padding-left: 12px;
    }
  }
  .menu-icon:hover {
    background: rgba(0, 0, 0, 0.025);
  }
</style>
