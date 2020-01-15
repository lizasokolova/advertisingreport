// based on prepared DOM, initialize echarts instance
var lineTrafficPeople = echarts.init(document.getElementById('line-traffic-people'));

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
            data: ['Будни, тыс.чел', 'Выходные, тыс.чел']
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
                            return 'Будни, тыс.чел  ' + params.value
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
                            return ' Выходные, тыс.чел ' + params.value
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
                name: 'Выходные, тыс.чел',
                type: 'line',
                xAxisIndex: 1,
                smooth: true,
                data: [165.817, 94.875, 280.303]
            },
            {
                name: 'Будни, тыс.чел',
                type: 'line',
                smooth: true,
                data: [480.919, 290.105, 833.373]
            }
        ]
    };



    lineTrafficPeople.setOption(option);
});