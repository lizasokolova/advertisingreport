// based on prepared DOM, initialize echarts instance
var diagramOrgCount250 = echarts.init(document.getElementById('diagram-org-count-250'));



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
                    { value: 7, name: 'Продукты' },
                    { value: 1, name: 'Общепит' },
                    { value: 10, name: 'Кафе' },
                    { value: 7, name: 'Еда' },
                    { value: 10, name: 'Рестораны' }
                ]
            }
        ]
    };

    diagramOrgCount250.setOption(option);
});