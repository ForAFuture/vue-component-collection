<template>
  <div class="cron">
    <cont-title title="cron定时转换表达式"></cont-title>
    <el-row class="cron-content">
      <el-col :span="8">
        <input-cron v-model="cycleExpr" :hide-year="false"></input-cron>
      </el-col>
    </el-row>
    <el-row class="countdown">
      <el-col :span="8">
        <el-input size="small" v-model="inputEndTime" placeholder="默认：2020/12/30 01:01:01">
          <a slot="append" @click="update" class="config-btn">
            <i class="el-icon-refresh" style="margin-right: 5px"></i>
            设置结束时间
          </a>
        </el-input>
        <countdown :endTime="endTime" @endFinish="endFinish">
          <template v-slot:default="{ data }" v-if="status">
            <div>离倒计时结束还剩余：{{ data.d + '天' + data.h + '时' + data.m + '分' + data.s + '秒' }}</div>
          </template>
          <template v-if="!status">
            <div>倒计时已结束</div>
          </template>
        </countdown>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import inputCron from './timerTask/input-cron'
import countdown from '@/components/commons/countdown'
export default {
  data () {
    return {
      cycleExpr: '',
      inputEndTime: '',
      endTime: '2020/12/30 01:01:01',
      status: true
    }
  },
  components: {
    inputCron,
    countdown
  },
  methods: {
    update () {
      if (this.inputEndTime) {
        this.endTime = this.inputEndTime
      } else {
        this.endTime = '2020/12/30 01:01:01'
      }
    },
    endFinish () {
      this.status = false
    }
  }
}
</script>
<style lang="scss" scoped>
  .cron{
    width: auto;
    height: 100%;
    background: #fff;
    .cron-content,.countdown{
      padding: 10px;
    }
    // .config-btn{
    //   width: ;
    // }
  }
</style>
