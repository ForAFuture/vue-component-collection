<template>
  <div class="home">
    <cont-title title="HOME"></cont-title>
    <div class="home-content">
      <p>
        <span>github 地址： </span>
        <a href="https://github.com/ForAFuture/vue-component-collection" target="_blank" rel="noopener noreferrer">vue-component-collection</a>
      </p>
    </div>
    <div class="home-date">
      <h3>日期格式化</h3>
      <el-input class="date-input" size="small" v-model="dateValue" placeholder="日期格式：yyyy/MM/dd hh:mm:ss" clearable></el-input>
      <el-button type="primary" size="small" @click="dateFormat(dateValue)">确认</el-button>
      <p>格式化结果：{{ formatValue }}</p>
    </div>
  </div>
</template>
<script>
import utils from '@/utils/index'
export default {
  name: 'name',
  data () {
    return {
      dateValue: '',
      formatValue: ''
    }
  },
  created () {
    console.log(utils)
  },
  methods: {
    dateFormat (fmt) {
      let date = new Date()
      this.formatValue = utils.dateFormat(date, fmt)
    }
  }
}
</script>
style <style lang="scss" scoped>
  .home{
    min-height: 100%;
    background: #fff;
    .home-content, .home-date{
      padding: 10px;
    }
    .home-date{
      .date-input{
        width: 300px;
      }
    }
  }
</style>
