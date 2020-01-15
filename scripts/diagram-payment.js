// based on prepared DOM, initialize echarts instance
var diagramPayment = echarts.init(document.getElementById('diagram-payment'));

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
            data: ['0-12 тыс.руб в %', '12-46 тыс.руб в %', '46-100 тыс.руб в %', '100+ тыс.руб в %', 'Неизвестно в %']
        },

        series: [{
            name: 'Тип',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [
                { value: 23, name: '0-12 тыс.руб в %' },
                { value: 54, name: '12-46 тыс.руб в %' },
                { value: 7, name: '46-100 тыс.руб в %' },
                { value: 1, name: '100+ тыс.руб в %' },
                { value: 14, name: 'Неизвестно в %' }
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

    diagramPayment.setOption(option);
});