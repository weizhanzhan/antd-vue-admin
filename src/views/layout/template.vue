
<template>
  <div class="wx-body ">
    heelo
  </div>
</template>

<script lang="ts">
  import { Provide, Vue, Component } from 'vue-property-decorator';
@Component({
  components: {}
})
  export default class BlogCateGory extends Vue {
  @Provide() categoryList: any = [];
  @Provide() visible: Boolean = false;
  @Provide() spinning: Boolean = false;
  }
</script>

<style scoped>
</style>
