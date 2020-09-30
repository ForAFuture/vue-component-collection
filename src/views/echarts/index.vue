<template>
  <div class="echarts">
    <router-view />
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
  .echarts{
    width: 100%;
    min-width: 1000px;
    min-height: 100%;
  }
</style>
