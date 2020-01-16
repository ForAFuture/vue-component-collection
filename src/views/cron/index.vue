<template>
  <div class="cron">
    <cont-title title="cron定时转换表达式"></cont-title>
    <el-row class="cron-content">
      <el-col :span="8">
        <input-cron v-model="cycleExpr" :hide-year="false"></input-cron>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import inputCron from './timerTask/input-cron'
export default {
  data () {
    return {
      cycleExpr: ''
    }
  },
  components: {
    inputCron
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
