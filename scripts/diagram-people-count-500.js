// based on prepared DOM, initialize echarts instance
var diagramPeopleCount500 = echarts.init(document.getElementById('diagram-people-count-500'));

setTimeout(function () {

    option = {
        title: {
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc',
                fontSize: 16,
                width: '100%'
            }
        },

        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        legend: {
            // orient: 'vertical',
            // top: 'middle',
            bottom: 10,
            left: 'center',
            data: ['Проживают', 'Работают']
        },

        series: [{
            name: 'Количество человек',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [
                { value: 8145, name: 'Проживают' },
                { value: 6138, name: 'Работают' }
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }]
    };

    diagramPeopleCount500.setOption(option);
});