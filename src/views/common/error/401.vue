<template>
  <div>
    <a-result
      status="403"
      title="403"
      sub-title="Sorry, you are not authorized to access this page."
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
  export default class Error401 extends Vue {
  }
</script>

<style lang="scss" scoped>

</style>
