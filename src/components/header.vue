<template>
  <div class="header">
    <div class="header-left">
      <div @click="toggleClick">
        <i v-if="!collapse" class="icon el-icon-s-fold"></i>
        <i v-else class="icon el-icon-s-unfold"></i>
      </div>
    </div>
    <div class="sys-name">Person Symtem</div>
    <div class="header-right">
      <el-tooltip class="full-screen" effect="dark" content="全屏" placement="bottom">
        <i class="el-icon-rank" @click="fullScreen"></i>
      </el-tooltip>
      <div class="user-img">
        <img src="@/assets/images/user.png" alt="">
      </div>
      <el-dropdown class="dropdown-text" trigger="click">
        <span class="el-dropdown-link">
          <span>admin</span><i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人资料</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
  name: 'vHeader',
  data () {
    return {
      collapse: this.$store.getters.getCollapse, // 导航折叠状态
      isFullScreen: this.$store.getters.getFullScreen
    }
  },
  methods: {
    toggleClick () {
      this.collapse = !this.collapse
      this.$store.commit('setCollapse', this.collapse)
    },
    fullScreen () {
      if (!screenfull.isEnabled) {
        this.$message({
          message: '你的浏览器不支持全屏',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    }
  },
  mounted () {
    // console.log(this.collapse)
  }
}
</script>

<style lang="scss" scoped>
  .header{
    width: 100%;
    height: 60px;
    position: relative;
    background: #324157;
    color: #fff;
    font-size: 28px;
    .header-left{
      width: 50px;
      float: left;
      font-size: 22px;
      line-height: 60px;
      text-align: center;
      &:hover{
        cursor: pointer;
        background: #48576e;
      }
    }
    .sys-name{
      width: 200px;
      float: left;
      line-height: 60px;
      text-align: center;
    }
    .header-right{
      float: right;
      line-height: 60px;
      .full-screen{
        display: inline-block;
        margin: 0 5px;
        vertical-align: middle;
        transform: rotate(45deg);
        &:hover{
          cursor: pointer;
          // background: #48576e;
        }
      }
      .user-img{
        display: inline-block;
        width: 30px;
        height: 30px;
        margin: 0 5px;
        line-height: 30px;
        border-radius: 50%;
        overflow: hidden;
        vertical-align: middle;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .dropdown-text{
        display: inline-block;
        height: 16px;
        line-height: 16px;
        vertical-align: middle;
        margin-right: 15px;
        color: #fff;
        &:hover{
          cursor: pointer;
        }
      }
    }
  }
</style>
