import {
  Component,
  Vue
} from 'vue-property-decorator'
import Echart from 'echarts'

enum SotckTypeColor{
  // eslint-disable-next-line no-unused-vars
  MoreThanMax = '#f7c53e', BetweenMaxAndMin = '#3F60EE', LessThanMin = '#FD687D'
}

interface DataOption{
  maxs:Array<number>
  mins:Array<number>
  stocks:Array<number>
  bindDom:HTMLCanvasElement
}

interface ComplierParams {
  option?:Echart.EChartOption,
  data:DataOption
}

@Component
export default class IninData extends Vue {
  charts: Echart.ECharts | null = null

  complier(params:ComplierParams) {
    if (!params.data.bindDom) throw Error('未发现挂在echart的dom对象')
    this.charts = Echart.init(params.data.bindDom)
    this.bindOption(params)
  }
  bindOption(params:ComplierParams) {
    const { data, option } = params
    const rootOption = this.getOption(data)
    if (option) {
      Object.assign(rootOption, option)
    }
    console.log(rootOption, this.charts)
     // @ts-ignore
    this.charts && this.charts.setOption(rootOption)
  }
  getOption(data:DataOption) {
    const {
      maxs,
      mins,
      stocks
    } = data
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: (p:any) => {
          var a = ''
          try {
            a += (p[0].axisValue || '') + '</br>'
            a += (p[0].marker || '') + 'Max：' + (p[1].value[1] || 0) + '</br>'
            a += (p[1].marker || '') + 'Min：' + (p[1].value[2] || 0) + '</br>'
            a += (p[1].marker || '') + '库存：' + (stocks[p[0].dataIndex] || 0) + '</br>'
          } catch {

          }
          return a
        }
      },
      yAxis: {
        type: 'value',
        name: '库存',
        max: (Math.max(...maxs) * 125 / 100) || null
      },
      dataZoom: [{
        type: 'slider',
        show: true,
        xAxisIndex: [0],
        start: 1,
        end: 35
      }],
      grid: {
        top: '15%',
        right: '15%'
      },
      series: [{
          data: stocks,
          type: 'bar',
          name: 'Daily Stock(Pcs)',
          lineStyle: {
            'width': 2,
            'type': 'solid'
          },
          symbol: 'diamond',
          symbolSize: 20,
          itemStyle: {
            color: function(params: {
              dataIndex: number;value: number
            }) {
              const currentMaxStock = maxs[params.dataIndex]
              const currentMinStock = mins[params.dataIndex]
              if (params.value > currentMaxStock) {
                return SotckTypeColor.MoreThanMax
              } else if (params.value < currentMinStock) {
                return SotckTypeColor.LessThanMin
              } else return SotckTypeColor.BetweenMaxAndMin
            }
          }
        },
        {
          name: 'Stock Max/ Min',
          type: 'custom',
          itemStyle: {
            normal: {
              borderWidth: 2
            }
          },

          renderItem: (params: any, api: any) => {
            const colors = new Array(stocks.length).fill('#FD687D')
            var xValue = api.value(0)
            var highPoint = api.coord([xValue, api.value(1)])
            var lowPoint = api.coord([xValue, api.value(2)])
            var halfWidth = api.size([1, 0])[0] * 0.3

            var style = api.style({
              stroke: colors[params.dataIndex],
              fill: null
            })

            return {
              type: 'group',
              children: [{
                type: 'line',
                shape: {
                  x1: highPoint[0] - halfWidth,
                  y1: highPoint[1],
                  x2: highPoint[0] + halfWidth,
                  y2: highPoint[1]
                },
                style: style
              }, {
                type: 'line',
                shape: {
                  x1: highPoint[0],
                  y1: highPoint[1],
                  x2: lowPoint[0],
                  y2: lowPoint[1]
                },
                style: style
              }, {
                type: 'line',
                shape: {
                  x1: lowPoint[0] - halfWidth,
                  y1: lowPoint[1],
                  x2: lowPoint[0] + halfWidth,
                  y2: lowPoint[1]
                },
                style: style
              }]
            }
          },
          encode: {
            x: 0,
            y: [1, 2]
          },

          data: this.handleMaxMin(maxs, mins),
          zlevel: 2,
          z: 2
        }

      ]
    }
  }
  handleMaxMin(maxs: Array < number >, mins: Array < number >) {
    return mins.map((min, index) => {
      return [index, min, maxs[index]]
    })
  }
  beforeDestroy() {
    this.charts && this.charts.dispose()
  }
}
