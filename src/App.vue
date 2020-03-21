<template>
  <div id="app">
    <a-locale-provider :locale="locale">
      <router-view />
    </a-locale-provider>
  </div>
</template>

<script lang="ts">
  import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'
  import moment from 'moment'
  import { Component, Vue } from 'vue-property-decorator'
  import 'moment/locale/zh-cn'

  moment.locale('en')
  @Component
  export default class App extends Vue {
    locale:any = zh_CN
    mounted() {
       this.$bus.$on('change-lang', (lang:string) => {
        switch (lang) {
        case 'zh-cn':
          this.locale = zh_CN
          moment.locale('zh-cn')
          this.$i18n.locale = 'zh'
          break
        case 'en':
          this.locale = null
          this.$i18n.locale = 'en'
          moment.locale('en')
          break
        default:
          this.locale = zh_CN
          moment.locale('zh-cn')
        }
      })
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
