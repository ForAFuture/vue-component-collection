<template>
  <div class="error-404">
    <cont-title title="404"></cont-title>
    <div class="error-content">
      <p class="number">
        <span class="one">4</span>
        <span class="two">0</span>
        <span class="three">4</span>
      </p>
      <p class="desc">Not Found!</p>
      <p class="back" @click="back">返回上一頁</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    back () {
      this.$router.go(-2)
    }
  }
}
</script>

<style lang="scss" scoped>
  .error-404{
    width: 100%;
    min-width: 1000px;
    height: 100%;
    background: #fff;
    .error-content{
      width: 400px;
      height: 400px;
      margin: 50px auto;
      color: #409eff;
      p{
        text-align: center;
      }
      .number{
        font-size: 80px;
        font-weight: bold;
        span{
          display: inline-block;
        }
        .one{
          transform: rotate(15deg);
        }
        .three{
          transform: rotate(-15deg);
        }
      }
      .desc{
        font-size: 16px;
      }
      .back{
        width: 150px;
        height: 40px;
        margin: 20px auto 0;
        color: #fff;
        text-align: center;
        line-height: 40px;
        border-radius: 4px;
        cursor: pointer;
        background: #409eff;
      }
    }
  }
</style>
