<template>
  <a-dropdown>
    <div class="menu-icon">
      <span>
        <a-avatar
          :src="user.avatar"
          :size="23"
        />
        <span class="user_name">&nbsp;&nbsp;{{ user.name }}</span>
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
  import { mapGetters } from 'vuex'
  import { Vue, Component } from 'vue-property-decorator'
  @Component({
      computed: {
         ...mapGetters(['user'])
      }
  })
  export default class UserConfig extends Vue {
    dropClick(item:any) :void{
      const key = item.key
      console.log(key)
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

<style scoped>

</style>
