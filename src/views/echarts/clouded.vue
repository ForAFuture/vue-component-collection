<template>
  <div class="clouded">
    <cont-title title="cron定时转换表达式"></cont-title>
    <el-row class="cloud-content">
      <el-col :span="12">
        <p>输入词云数据</p>
        <el-input class="edit" v-model="inputCloudData" type="textarea" rows="10" placeholder=""></el-input>
        <el-button type="primary" style="margin-top:15px" @click="setCloud">立即生成</el-button>
      </el-col>
      <el-col :span="12">
        <div id="word_cloud_view_id"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import cloudData from './couldData'
let echarts = require('echarts/lib/echarts')
require('echarts-wordcloud')
export default {
  name: 'word_cloud_index',
  data: () => ({
    myChart: null,
    inputCloudData: '',
    optionCloud: {
      tooltip: {
        showDelay: 0,
        formatter: function (obj) {
          var name = obj.name
          var value = obj.value
          return name + ': ' + value
        },
        axisPointer: {
          show: true,
          type: 'cross',
          lineStyle: {
            type: 'dashed',
            width: 1
          }
        }
      },
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
        data: cloudData
      }]
    }
  }),
  methods: {
    draw_myChart () {
      if (this.myChart) {
        this.myChart.dispose()
      }
      this.myChart = echarts.init(document.getElementById('word_cloud_view_id'))
      this.myChart.setOption(this.optionCloud)
      // 点击事件
      // this.myChart.on('click', (params) => {
      //
      // })
    },
    setCloud () {
      this.draw_myChart()
    }
  },
  mounted () {
    this.draw_myChart()
  },
  render (h) {
    return h('div', {
      attrs: {id: 'word_cloud_view_id'},
      style: {
        height: '400px',
        width: '100%'
      }
    })
  }
}
</script>
<style lang="scss" scoped>
  .clouded{
    min-width: 1000px;
    height: 100%;
    background: #fff;
    .cloud-content{
      max-width: 1200px;
      padding: 10px;
      .edit{
        /deep/ textarea{
          background: #3d4450;
          color: #fff;
        }
      }
    }
    #word_cloud_view_id{
      width: 100%;
      height: 500px;
    }
  }
</style>
