<template>
  <div class="cron">
    <cont-title title="cron定时转换表达式"></cont-title>
    <el-row class="cron-content">
      <el-col :span="8">
        <input-cron v-model="cycleExpr" :hide-year="false"></input-cron>
      </el-col>
    </el-row>
    <div>
      <countdown endTime="2020/10/01 01:01:01">
        <template slot-scope="timeData">
          <div>{{ timeData.d + '天' + timeData.h + '時' + timeData.m + '分' + timeData.s + '秒' }}</div>
        </template>
      </countdown>
    </div>
  </div>
</template>
<script>
import inputCron from './timerTask/input-cron'
import countdown from '@/components/commons/countdown'
export default {
  data () {
    return {
      cycleExpr: ''
    }
  },
  components: {
    inputCron,
    countdown
  }
}
</script>
<style lang="scss" scoped>
  .cron{
    width: auto;
    height: 100%;
    background: #fff;
    .cron-content{
      padding: 10px;
    }
  }
</style>
