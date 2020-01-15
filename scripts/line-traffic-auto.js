// based on prepared DOM, initialize echarts instance
var lineTrafficAuto = echarts.init(document.getElementById('line-traffic-auto'));

setTimeout(function () {

    var colors = ['#5793f3', '#d14a61', '#675bba'];


    option = {
        color: colors,

        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data: ['Будни, тыс.авто', 'Выходные, тыс.авто']
        },
        grid: {
            top: 70,
            bottom: 50
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return 'Будни, тыс.авто  ' + params.value
                                + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                        }
                    }
                },
                data: ['с 8 до 12', 'с 12 до 14', 'с 14 до 22']
            },
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return ' Выходные, тыс.авто ' + params.value
                                + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                        }
                    }
                },
                data: ['с 8 до 12', 'с 12 до 14', 'с 14 до 22']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Выходные, тыс.авто',
                type: 'line',
                xAxisIndex: 1,
                smooth: true,
                data: [157.140, 89.910, 265.635]
            },
            {
                name: 'Будни, тыс.авто',
                type: 'line',
                smooth: true,
                data: [455.753, 274.924, 833.373]
            }
        ]
    };



    lineTrafficAuto.setOption(option);
});