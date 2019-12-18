<template>
  <wx-container>
    <template v-slot:header>
      <div style="color:rgba(0, 0, 0, 0.45)">
        <a-icon type="bell" />  echart及其他chart组件
      </div>
    </template>
    <div class="wx-body">
      <a-tabs
        default-active-key="1"
        @change="callback"
      >
        <a-tab-pane
          key="1"
          tab="词云"
        >
          <WordCloud />
        </a-tab-pane>
        <a-tab-pane
          key="2"
          tab="复杂柱状图"
          force-render
        >
          Content of Tab Pane 2
        </a-tab-pane>
        <a-tab-pane
          key="3"
          tab="其他"
        >
          Content of Tab Pane 3
        </a-tab-pane>
      </a-tabs>
    </div>
  </wx-container>
</template>

<script lang="ts">
  import WordCloud from './components/word-cloud/index.vue'
  import { Provide, Vue, Component } from 'vue-property-decorator'
@Component({
  components: {
      WordCloud
  }
})
  export default class BlogCateGory extends Vue {
    //   @Provide() categoryList: any = [];
    //   @Provide() visible: Boolean = false;
    //   @Provide() spinning: Boolean = false;
    callback(key:any) {
      console.log(key)
    }
  }
</script>

<style lang="scss" scoped>

</style>
