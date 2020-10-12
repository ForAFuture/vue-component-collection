<template>
  <div class="input-cron">
    <el-input
      size="small"
      :placeholder="placeholder"
      style="float: left width: 450px"
      clearable
      v-model="editCronValue"
      :disabled="disabled"
    >
      <a slot="append" @click="showConfigDlg" class="config-btn" :disabled="disabled">
        <i class="el-icon-date" style="margin-right: 5px"></i>
        定时配置
      </a>
    </el-input>
    <el-dialog
      title="配置Cron表达式"
      :show-close="true"
      :width="`${width+50}px`"
      top="3vh"
      :visible.sync="dialogVisible"
      :append-to-body="true"
    >
      <div>
        <easy-cron
          v-model="editCronValue"
          :style="`width: ${width}px`"
          :exeStartTime="exeStartTime"
          :hideYear="hideYear"
          :remote="remote"
          :hideSecond="hideSecond"
        ></easy-cron>
      </div>
      <span slot="footer">
        <el-button type="primary" size="small" @click="dialogVisible = false">确认</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import EasyCron from './cron-main'

export default {
  name: 'input-cron',
  model: {
    prop: 'cronValue',
    event: 'change'
  },
  props: {
    cronValue: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 1000
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请输入cron表达式'
    },
    exeStartTime: {
      type: [Number, String, Object],
      default: 0
    },
    hideSecond: {
      type: Boolean,
      default: false
    },
    hideYear: {
      type: Boolean,
      default: false
    },
    remote: {
      type: Function,
      default: null
    }
  },
  data () {
    return {
      editCronValue: this.cronValue,
      // show: false
      dialogVisible: false
    }
  },
  watch: {
    cronValue (newVal, oldVal) {
      if (newVal === this.editCronValue) {
        return
      }
      this.editCronValue = newVal
    },
    editCronValue (newVal, oldVal) {
      this.$emit('change', newVal)
    }
  },
  methods: {
    showConfigDlg () {
      if (!this.disabled) {
        this.dialogVisible = true
      }
    }
  },
  components: {
    EasyCron
  }
}
</script>

<style scoped>
/* .input-cron, .input-ui {
  / / display: inline-block
  } */
.input-cron /deep/ .el-dialog__body {
  padding: 15px 20px;
}
.input-cron /deep/ .el-dialog__footer {
  padding: 5px 30px 20px 20px;
}
.input-cron .ivu-input-wrapper {
  width: 100% !important;
}

.config-btn {
  cursor: pointer;
}
.input-cron /deep/ .el-input-group__append {
  padding: 0 5px;
}

.config-btn:hover {
  color: #2d8cf0;
}
</style>
