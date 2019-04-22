<template>
  <div id="app">
    <a-locale-provider :locale="locale">
      <router-view></router-view> 
    </a-locale-provider>
  </div>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('en');
export default {
  name: 'app',
  data() {
    return {
      locale:zh_CN
    }
  },
  mounted(){ 
    this.$bus.$on('change-lang',lang => {
      console.log(lang)
      switch(lang) {
        case 'zh-cn':
          this.locale = zh_CN
          moment.locale('zh-cn');
          break;
        case 'en':
          this.locale = null;
          moment.locale('en');
          break;
        default:
          this.locale = zh_CN
          moment.locale('zh-cn');
      }
     // 
    })
    
  }
}
</script>

<style>
@import './assets/style/layout.scss'
</style>
