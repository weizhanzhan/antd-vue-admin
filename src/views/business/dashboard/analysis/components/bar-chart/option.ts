const option:object = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        show: false
    },
    yAxis: {
        type: 'value',
        show: false
    },
    grid: {
        left: '0'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        color: '#2f54e8',
        barWidth: '30%'
    }]
}
 export default option
