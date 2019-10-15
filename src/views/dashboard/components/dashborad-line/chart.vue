<template>
  <div
    ref="chart"
    style="height:558px;width:100%"
  />
</template>

<script>
  import echarts from 'echarts'
  import option from './options'
  export default {
    data() {
      return {
        chart: null
      }
    },
    mounted() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(this.$refs.chart)
      // 绘制图表
      this.chart.setOption(option)

      window.addEventListener('resize', () => {
        this.chart.resize()
      })

      setTimeout(() => {
        this.chart.resize()
      }, 0)
    }
  }
</script>

<style>

</style>
