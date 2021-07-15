<template>
  <div class="scrollbar">
    <cont-title title="滚动条样式"></cont-title>
    <div class="scrollbar-item">
      <div class="scrollbar-content">
        <pre>
    .scrollbar-item{
      width: 600px;
      height: 500px;
      margin: 16px;
      border: 1px solid #ccc;
      overflow-y: scroll;
    }
    .scrollbar-item::-webkit-scrollbar {    /*滚动条整体样式*/
      width: 10px;                        /*高宽分别对应横竖滚动条的尺寸*/
      height: 1px;
    }
    .scrollbar-item::-webkit-scrollbar-thumb {  /*滚动条里面小方块*/
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      background: #ebebeb;
    }
    .scrollbar-item::-webkit-scrollbar-track {  /*滚动条里面轨道*/
      /* -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2); */
      border-radius: 10px;
      background: #fff;
    }
        </pre>
      </div>
    </div>
    <div class="scrollbar-item1">
      <div class="scrollbar-content">
        <pre>
    .scrollbar-item{
      width: 600px;
      height: 500px;
      margin: 16px;
      border: 1px solid #ccc;
      overflow-y: scroll;
    }
    .scrollbar-item::-webkit-scrollbar {  /*滚动条整体样式*/
      width: 15px;  /*高宽分别对应横竖滚动条的尺寸*/
      height: 1px;
    }
    .scrollbar-item::-webkit-scrollbar-thumb {  /*滚动条里面小方块*/
      border-radius: 15px;
      background-color: rgb(230, 48, 133);
      background-image: -webkit-linear-gradient(
        45deg,
        rgba(124, 150, 236, 0.2) 25%,
        transparent 25%,
        transparent 50%,
        rgba(114, 216, 46, 0.2) 50%,
        rgba(174, 235, 62, 0.2) 75%,
        transparent 75%,
        transparent
      );
    }
    .scrollbar-item::-webkit-scrollbar-track {  /*滚动条里面轨道*/
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: #ededed;
      border-radius: 15px;
    }
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  .scrollbar{
    min-width: 1000px;
    min-height: 100%;
    background: #fff;
    .scrollbar-item, .scrollbar-item1{
      display: inline-block;
      width: 600px;
      height: 500px;
      margin: 16px;
      border: 1px solid #ccc;
      overflow-y: scroll;
      .scrollbar-content{
        height: 800px;
      }
    }
    .scrollbar-item::-webkit-scrollbar {    /*滚动条整体样式*/
      width: 10px;                        /*高宽分别对应横竖滚动条的尺寸*/
      height: 1px;
    }
    .scrollbar-item::-webkit-scrollbar-thumb {  /*滚动条里面小方块*/
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      background: #ebebeb;
    }
    .scrollbar-item::-webkit-scrollbar-track {  /*滚动条里面轨道*/
      /* -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2); */
      border-radius: 10px;
      background: #fff;
    }

    .scrollbar-item1::-webkit-scrollbar {
      /*滚动条整体样式*/
      width : 15px;  /*高宽分别对应横竖滚动条的尺寸*/
      height: 1px;
    }
    .scrollbar-item1::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius   : 15px;
      background-color: rgb(230, 48, 133);
      background-image: -webkit-linear-gradient(
        45deg,
        rgba(124, 150, 236, 0.2) 25%,
        transparent 25%,
        transparent 50%,
        rgba(114, 216, 46, 0.2) 50%,
        rgba(174, 235, 62, 0.2) 75%,
        transparent 75%,
        transparent
      );
    }
    .scrollbar-item1::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
      background   : #ededed;
      border-radius: 15px;
    }
  }
</style>
