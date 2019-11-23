
<template>
  <wx-container>
    <template v-slot:header>
      <div style="color:rgba(0, 0, 0, 0.45)">
        <a-icon type="bell" />  这里展示的是删除后的博客列表
      </div>
    </template>
    <div class="wx-body ">
      回收站
    </div>
  </wx-container>
</template>

<script lang="ts">
  import { Provide, Vue, Component } from 'vue-property-decorator'
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
