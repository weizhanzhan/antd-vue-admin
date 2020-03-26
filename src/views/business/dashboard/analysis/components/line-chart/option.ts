 const option:object = {
  title: {
    text: 'Front Frame',
    subtext: 'Stars(数据纯属虚构)' // 副标题
  },
  color: ['#006DF0', '#933EC5', '#65b12d'],
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '4%',
    right: '2%'
  },
  legend: {
    data: ['Vue', 'React', 'Angular']
  },
  toolbox: {
    show: true,
    feature: {
      mark: {
        show: true
      },
      dataView: {
        show: true,
        readOnly: false
      },
      magicType: {
        show: true,
        type: ['line', 'bar', 'stack', 'tiled']
      },
      restore: {
        show: true
      },
      saveAsImage: {
        show: true
      }
    }
  },
  // calculable : true,
  xAxis: [{
    type: 'category',
    boundaryGap: false,
    data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  }],
  yAxis: [{
    type: 'value',
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: ['#eeeeee']
      }
    }
  }],
  series: [{
      name: 'Vue',
      type: 'line',
      smooth: true,
      symbolSize: 8,
      symbol: 'circle',
      barWidth: '50%',
      data: [140, 242, 221, 154, 260, 830, 710],
      lineStyle: {
        width: 1
      }
    },
    {
      name: 'React',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 8,
      data: [430, 682, 434, 791, 390, 30, 110],
      lineStyle: {
        width: 1
      }
    },
    {
      name: 'Angular',
      type: 'line',
      smooth: true,
      symbolSize: 8,
      symbol: 'circle',
      data: [1320, 1132, 601, 234, 120, 590, 820],
      lineStyle: {
        width: 1
      }
    }
  ]
}
export default option
