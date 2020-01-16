<template>
  <div class="cont-title">
    <span>&nbsp;{{ title }}</span>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
  .cont-title{
    width: 100%;
    background: #fff;
    padding: 5px;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    font-weight: 600;
  }
</style>
