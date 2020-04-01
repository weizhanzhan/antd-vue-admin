<template>
  <wx-container show-bread>
    <template v-slot:header>
      <h2>Echarts</h2>
      <div>
        <a-icon
          type="bar-chart"
          class="chart-icon"
        />echarts常用集合
      </div>
    </template>
    <div class="wx-body">
      <a-tabs
        default-active-key="1"
        :tab-position="tabPosition"
      >
        <a-tab-pane
          key="1"
          tab="词云chart"
        >
          <a-word-cloud />
        </a-tab-pane>
        <a-tab-pane
          key="2"
          tab="Tab 2"
        >
          Content of Tab 2
        </a-tab-pane>
        <a-tab-pane
          key="3"
          tab="Tab 3"
        >
          Content of Tab 3
        </a-tab-pane>
      </a-tabs>
    </div>
  </wx-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import WordCloud from './components/word-cloud/index.vue'
  @Component({
    components: {
      'a-word-cloud': WordCloud
    }
  })
  export default class EchartCompnents extends Vue {
    tabPosition= 'left'
  }
</script>

<style lang="scss" scoped>

</style>
