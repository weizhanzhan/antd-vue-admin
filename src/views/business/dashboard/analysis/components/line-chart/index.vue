<template>
  <div
    ref="chart"
    style="height:558px;width:100%"
  />
</template>

<script lang="ts">
  import echarts from 'echarts'
  import option from './option'
  import { Component, Vue } from 'vue-property-decorator'

  @Component({

  })
  export default class App extends Vue {
    private echart:any

    private initEchart() {
      this.echart = echarts.init(this.$refs.chart as HTMLCanvasElement)
      this.echart.setOption(option)

      window.addEventListener('resize', () => {
        this.echart.resize()
      })
      setTimeout(() => {
        this.echart.resize()
      }, 0)
    }
    mounted() {
      this.initEchart()
    }
  }
</script>

<style>

</style>
