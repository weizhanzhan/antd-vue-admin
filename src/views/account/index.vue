<template>
  <div class="account">
    <a-row>
      <a-col
        :span="7"
        class="account-item"
      >
        <div class="account-info">
          <Info />
        </div>
      </a-col>
      <a-col
        :span="17"
        class="account-item"
      >
        <div class="account-detail">
          <button @click="updateTheme('red')">
            red
          </button>
          <button
            class="test"
            @click="updateTheme('green')"
          >
            GREEN
          </button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import { message } from 'ant-design-vue/es'
  let lessNodesAppended

  const updateTheme = primaryColor => {
    // Don't compile less in production!
    /* if (process.env.NODE_ENV === 'production') {
    return;
  } */
    // Determine if the component is remounted
    if (!primaryColor) {
      return
    }
    const hideMessage = message.loading('正在编译主题！', 0)
    function buildIt() {
      if (!window.less) {
        return
      }
      setTimeout(() => {
        window.less
          .modifyVars({
            '@primary-color': primaryColor
          })
          .then(() => {
            hideMessage()
          })
          .catch(() => {
            message.error('Failed to update theme')
            hideMessage()
          })
      }, 200)
    }
    if (!lessNodesAppended) {
      // insert less.js and color.less
      const lessStyleNode = document.createElement('link')
      const lessConfigNode = document.createElement('script')
      const lessScriptNode = document.createElement('script')
      lessStyleNode.setAttribute('rel', 'stylesheet/less')
      lessStyleNode.setAttribute('href', '/color.less')
      lessConfigNode.innerHTML = `
      window.less = {
        async: true,
        env: 'production',
        javascriptEnabled: true
      };
    `
      lessScriptNode.src = 'https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js'
      lessScriptNode.async = true
      lessScriptNode.onload = () => {
        buildIt()
        lessScriptNode.onload = null
      }
      document.body.appendChild(lessStyleNode)
      document.body.appendChild(lessConfigNode)
      document.body.appendChild(lessScriptNode)
      lessNodesAppended = true
    } else {
      buildIt()
    }
  }

  import Info from './components/info.vue'
  export default {
    components: { Info },
    methods: {
      updateTheme(color) {
        console.log(2323)
        updateTheme(color)
      }
    }
  }
</script>

<style lang="scss" scoped>
// $theme-color 全局css
.account {
    padding: 8px;
    .account-item{
        padding: 8px 16px 12px 8px;
        .account-info{
          width: 100%;
          min-height: 500px;
          background: #ffffff
        }
        .account-detail{
          width: 100%;
          height: 500px;
          background: #ffffff
        }
    }

}
.test{
  background: var(--PC)
}
</style>
