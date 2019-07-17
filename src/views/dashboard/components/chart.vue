<template>
  <div
    id="main"
    ref="chart"
    style="height:500px;width:90%"
  />
</template>

<script>
  import echarts from 'echarts'
  import option from './options'
  export default {
    mounted() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'))
      // 绘制图表
      myChart.setOption(option)
      window.onresize = function() {
        myChart.resize()
      }
    }
  }
</script>

<style>

</style>
