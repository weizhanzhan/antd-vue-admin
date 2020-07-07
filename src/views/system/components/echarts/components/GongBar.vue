<template>
  <div>
    <div
      ref="chart"
      style="height:500px;width:100%"
    />
  </div>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import GongBar from './GongBar'
@Component
  export default class extends GongBar {
    mounted() {
      this.complier({
        data: {
          bindDom: this.$refs.chart as HTMLCanvasElement,
          maxs: [100, 300, 500, 200, 500, 200],
          mins: [10, 32, 21, 42, 33, 22],
          stocks: [90, 222, 600, 1000, 300, 180]
        },
        option: {
          xAxis: {
            name: 'X坐标轴',
            data: ['A', 'B', 'C', 'D', 'E', 'F']
          }
        }
      })
    }
  }
</script>

<style scoped>

</style>
