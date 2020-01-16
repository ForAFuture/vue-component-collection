<template>
  <div>
    <h2>saffron</h2>
    <div id="cloud">

    </div>
  </div>
</template>

<script>
import 'echarts/theme/macarons.js'
let echarts = require('echarts/lib/echarts')
require('echarts-wordcloud')
export default {
  data () {
    return {
      myChart: null,
      optionCloud: {
        series: [{
          type: 'wordCloud',
          shape: 'circle',
          // maskImage: maskImage,
          left: 'center',
          top: 'center',
          width: '100%',
          height: '100%',
          right: null,
          bottom: null,
          sizeRange: [6, 60],
          rotationRange: [-45, 90],
          autoSize: {
            enable: true,
            minSize: 6
          },
          textPadding: 0,
          // rotationStep: 45,
          // gridSize: 8,
          drawOutOfBound: false,
          textStyle: {
            normal: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              // Color can be a callback function or a color string
              color: function () {
                // Random color
                return 'rgb(' + [
                  Math.round(Math.random() * 256),
                  Math.round(Math.random() * 256),
                  Math.round(Math.random() * 256)
                ].join(',') + ')'
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          data: [{'name': '需求', 'value': 10927}, {'name': '修改', 'value': 5902}]
        }]
      }
    }
  },
  methods: {
    setCloud () {
      this.myChart = echarts.init(document.getElementById('cloud'))
      this.myChart.setOption(this.optionCloud)
    }
  },
  mounted () {
    this.setCloud()
  }
}
</script>
