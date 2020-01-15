// based on prepared DOM, initialize echarts instance
var diagramOrgCount500 = echarts.init(document.getElementById('diagram-org-count-500'));



setTimeout(function () {

    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 10,
            data: ['Магазины', 'Продукты', 'Общепит', 'Кафе', 'Еда', 'Рестораны']
        },
        series: [
            {
                name: 'Тип',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    { value: 60, name: 'Магазины' },
                    { value: 13, name: 'Продукты' },
                    { value: 2, name: 'Общепит' },
                    { value: 32, name: 'Кафе' },
                    { value: 29, name: 'Еда' },
                    { value: 35, name: 'Рестораны' }
                ]
            }
        ]
    };

    diagramOrgCount500.setOption(option);
});