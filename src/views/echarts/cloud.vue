<template>
  <div class="echarts-cloud">
    <cont-title title="echarts-词云图"></cont-title>
    <el-row class="cloud-content">
      <el-col :span="12">
        <p>输入词云数据</p>
        name: <el-input class="edit" v-model="inputName" placeholder=""></el-input>
        value: <el-input v-model="inputValue" maxlength="100" placeholder="0-100"></el-input>
        <span>选择生成形状：</span>
        <el-select class="type-select" v-model="typeId" @change="typeChange">
          <el-option
            v-for="item in imgType"
            :key="item.id"
            :label="item.label"
            :value="item.id">
          </el-option>
        </el-select>
        <el-button type="primary" style="margin-top:15px" @click="setCloud">添加并立即生成</el-button>
      </el-col>
      <el-col :span="12">
        <div class="chart-name">{{ imgType[typeId - 1].label }}</div>
        <div ref="cloudChart" id="word_cloud_view_id"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import 'echarts/theme/macarons.js'
import cloudData from './couldData'
// let echarts = require('echarts/lib/echarts')
import echarts from 'echarts'
import utils from '@/utils/index.js'
require('echarts-wordcloud')
export default {
  name: 'word_cloud_index',
  data: () => ({
    myChart: null,
    inputName: '',
    inputValue: '',
    typeId: 1,
    imgType: [
      {
        id: 1,
        label: '蝴蝶',
        src: require('@/assets/images/hudie.jpg')
      },
      {
        id: 2,
        label: '头像',
        src: require('@/assets/images/touxiang.jpg')
      },
      {
        id: 3,
        label: '心形',
        src: require('@/assets/images/hard.jpg')
      }
    ],
    // img: require('@/assets/images/hudie.jpg'),
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
        // shape: 'circle', // 生成圆形
        maskImage: '', // 指定生成图形 图片对象 new Image()
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
      // 生成指定图片形状canvas
      utils.toBase64(this.imgType[this.typeId - 1].src, (src) => {
        let imageObj = new Image()
        imageObj.crossOrigin = '*'
        imageObj.src = src
        this.optionCloud.series[0].maskImage = imageObj
        setTimeout(() => {
          // that.myChart = echarts.init(document.getElementById('word_cloud_view_id'))
          this.myChart = echarts.init(this.$refs.cloudChart)
          this.myChart.setOption(this.optionCloud)
        }, 0)
      })

      // 点击事件
      // this.myChart.on('click', (params) => {
      //
      // })
    },
    setCloud () {
      if (this.inputValue && this.inputName) {
        this.optionCloud.series[0].data.push({
          value: this.inputValue,
          name: this.inputName
        })
      }
      this.draw_myChart()
    },
    typeChange (val) {
      this.typeId = val
    }
  },
  mounted () {
    this.draw_myChart()
  }
  // 设置宽高时，不需要render函数
  // render (h) {
  //   return h('div', {
  //     attrs: {id: 'word_cloud_view_id'},
  //     style: {
  //       height: '400px',
  //       width: '100%'
  //     }
  //   })
  // }
}
</script>
<style lang="scss" scoped>
  .echarts-cloud{
    min-width: 1000px;
    min-height: 100%;
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
      .type-select{
        width: 100px;
      }
      .chart-name{
        font-size: 16px;
        text-align: center;
      }
    }
    #word_cloud_view_id{
      width: 100%;
      height: 500px;
    }
  }
</style>
