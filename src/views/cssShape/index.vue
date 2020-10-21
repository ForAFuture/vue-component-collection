<template>
  <div class="css-shape">
    <cont-title title="css形状"></cont-title>
    <div class="item-list">
      <div class="hollow-triangle-arrow">
        <div class="title">空心三角箭头</div>
        <div class="clear">
          <div class="lf">
            <pre>
  div{
    width: 150px;
    height: 200px;
    border: 1px solid #ccc;
    position: relative;
    &::after{
      content: '';
      position: absolute;
      left: calc(50% - 6px);
      top: -6px;
      width: 8px;
      height: 8px;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      background: #fff;
      transform: rotate(225deg);
      -webkit-transform: rotate(225deg);
    }
  }
            </pre>
          </div>
          <div class="rf">
            <div class="shape"></div>
          </div>
        </div>
      </div>
      <div class="solid-triangle-arrow">
        <div class="title">实心三角</div>
        <div class="clear">
          <div class="lf">
            <pre>
  div{
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 100px 0 100px 400px;
    border-color: transparent transparent transparent #007bff;
  }
            </pre>
          </div>
          <div class="rf">
            <div class="shape"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .css-shape{
    min-width: 1000px;
    min-height: 100%;
    background: #fff;
    .item-list{
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      & > div{
        margin-right: 20px;
      }
      .title{
        text-align: center;
        line-height: 28px;
        margin-bottom: 10px;
        font-weight: bold;
      }
      pre{
        margin: 0;
        padding: 10px;
        background: #ccc;
      }
      .hollow-triangle-arrow{
        .shape{
          width: 150px;
          height: 200px;
          margin-left: 15px;
          border: 1px solid #ccc;
          position: relative;
          &::after{
            content: '';
            position: absolute;
            left: calc(50% - 6px);
            top: -6px;
            width: 8px;
            height: 8px;
            border-right: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            background: #fff;
            transform: rotate(225deg);
            -webkit-transform: rotate(225deg);
          }
        }
      }
      .solid-triangle-arrow{
        .shape{
          margin-left: 15px;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 50px 0 50px 100px;
          border-color: transparent transparent transparent #007bff;
        }
      }
    }
  }
</style>
