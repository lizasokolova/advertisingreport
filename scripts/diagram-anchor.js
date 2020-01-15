// based on prepared DOM, initialize echarts instance
var diagramAnchor = echarts.init(document.getElementById('diagram-anchor'));

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
            data: ['ТРЦ', 'БЦ', 'Фитнес-центры', 'Больницы', 'Школы', 'Садики']
        },

        series: [{
            name: 'Тип',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [
                { value: 9, name: 'ТРЦ' },
                { value: 16, name: 'БЦ' },
                { value: 26, name: 'Фитнес-центры' },
                { value: 20, name: 'Больницы' },
                { value: 60, name: 'Школы' },
                { value: 30, name: 'Садики' }
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

    diagramAnchor.setOption(option);
});