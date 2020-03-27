<template>
  <div>
    <!-- 您打开的页面竟然没了！😱你敢信？
    <button @click="$router.push('/')">
      返回首页
    </button> -->
    <a-result
      status="404"
      title="404"
      sub-title="Sorry, the page you visited does not exist."
    >
      <template v-slot:extra>
        <a-button
          type="primary"
          @click="$router.push('/')"
        >
          Back Home
        </a-button>
      </template>
    </a-result>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import { Result } from 'ant-design-vue'
  @Component({
    components: {
      'a-result': Result
    }
  })
  export default class Error404 extends Vue {
  }
</script>

<style lang="scss" scoped>

</style>
