import echarts from 'echarts'
export default {
    // title: {
    //     text: '今日&昨日',
    //     left: '50%',
    //     textAlign: 'center'
    // },
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //         lineStyle: {
    //             color: '#ddd'
    //         }
    //     },
    //     backgroundColor: 'rgba(255,255,255,1)',
    //     padding: [5, 10],
    //     textStyle: {
    //         color: '#7588E4'
    //     },
    //     extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
    // },
    // legend: {
    //     right: 20,
    //     orient: 'vertical',
    //     data: ['今日', '昨日']
    // },
    // xAxis: {
    //     type: 'category',
    //     data: ['00:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
    //     boundaryGap: false,
    //     splitLine: {
    //         show: true,
    //         interval: 'auto',
    //         lineStyle: {
    //             color: ['#D4DFF5']
    //         }
    //     },
    //     axisTick: {
    //         show: false
    //     },
    //     axisLine: {
    //         lineStyle: {
    //             color: '#609ee9'
    //         }
    //     },
    //     axisLabel: {
    //         margin: 10,
    //         textStyle: {
    //             fontSize: 14
    //         }
    //     }
    // },
    // yAxis: {
    //     type: 'value',
    //     splitLine: {
    //         lineStyle: {
    //             color: ['#D4DFF5']
    //         }
    //     },
    //     axisTick: {
    //         show: false
    //     },
    //     axisLine: {
    //         lineStyle: {
    //             color: '#609ee9'
    //         }
    //     },
    //     axisLabel: {
    //         margin: 10,
    //         textStyle: {
    //             fontSize: 14
    //         }
    //     }
    // },
    // series: [{
    //     name: '今日',
    //     type: 'line',
    //     smooth: true,
    //     showSymbol: false,
    //     symbol: 'circle',
    //     symbolSize: 6,
    //     data: ['1200', '1400', '1008', '1411', '1026', '1288', '1300', '800', '1100', '1000', '1118', '1322'],
    //     areaStyle: {
    //         normal: {
    //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                 offset: 0,
    //                 color: 'rgba(199, 237, 250,0.5)'
    //             }, {
    //                 offset: 1,
    //                 color: 'rgba(199, 237, 250,0.2)'
    //             }], false)
    //         }
    //     },
    //     itemStyle: {
    //         normal: {
    //             color: '#f7b851'
    //         }
    //     },
    //     lineStyle: {
    //         normal: {
    //             width: 3
    //         }
    //     }
    // }, {
    //     name: '昨日',
    //     type: 'line',
    //     smooth: true,
    //     showSymbol: false,
    //     symbol: 'circle',
    //     symbolSize: 6,
    //     data: ['1200', '1400', '808', '811', '626', '488', '1600', '1100', '500', '300', '1998', '822'],
    //     areaStyle: {
    //         normal: {
    //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                 offset: 0,
    //                 color: 'rgba(216, 244, 247,1)'
    //             }, {
    //                 offset: 1,
    //                 color: 'rgba(216, 244, 247,1)'
    //             }], false)
    //         }
    //     },
    //     itemStyle: {
    //         normal: {
    //             color: '#58c8da'
    //         }
    //     },
    //     lineStyle: {
    //         normal: {
    //             width: 3
    //         }
    //     }
    // }]
    title: {
        text: 'Front Frame',
        subtext: 'Stars(数据纯属虚构)' // 副标题
        // subtextStyle:{
        //     align:'right'
        // }
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
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    // calculable : true,
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }
    ],
    yAxis: [
        {
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
        }
    ],
    series: [
        {
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
