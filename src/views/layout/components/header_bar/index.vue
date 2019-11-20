<template>
  <a-row class="header_bar">
    <a-col
      :xl="1"
      :lg="2"
      :md="3"
      :sm="3"
    >
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="changeCollapsed"
      />
    </a-col>
    <a-col
      :xl="23"
      :lg="22"
      :md="21"
      :sm="21"
    >
      <a-row
        type="flex"
        justify="end"
      >
        <a-col
          :xl="2"
          :lg="3"
          :md="5"
          :sm="10"
        >
          <UserConfig />
        </a-col>
        <a-col
          :xl="1"
          :lg="1"
          :md="4"
          :sm="4"
        >
          <ThemeConfig v-on="$listeners" />
        </a-col>
        <a-col
          :xl="1"
          :lg="1"
          :md="3"
          :sm="4"
        >
          <LangConfig />
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>

<script>

  import UserConfig from './components/User'
  import ThemeConfig from './components/Theme'
  import LangConfig from './components/Lang'
  export default {
    components: {
      UserConfig,
      ThemeConfig,
      LangConfig
    },
    props: { collapsed: { type: Boolean }},
    methods: {

      changeCollapsed() { this.$emit('trigger') }
      // App.vue监听语言改变

    }
  }
</script>

<style lang="scss" >
  .header_bar{
    .trigger {
      font-size: 18px;
      line-height: 64px;
      padding: 0 24px;
      cursor: pointer;
      transition: color .3s;
    }
    .trigger:hover {
      color: #1890ff;
    }
    .menu-icon{
      text-align: center;
        .menu-icon-item{
          color:var(--PC);
          font-size:20px
        }
        .user_name{
          font-weight: bold;
        }
    }
    .menu-icon:hover{
      background: rgba(0, 0, 0, 0.025)
    }
  }
  .w_theme_select{

    width: 130px;
    height: 170px;
    padding: 8px 0 8px 12px;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    .w_theme_select_title{
      margin-bottom: 12px;
      font-size: 14px;
      line-height: 22px;
    }

      .w_theme_color_block{
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
  .ant-dropdown:before{//为了解决 无法点击自定义的东西
    z-index: -1;
  }
</style>
