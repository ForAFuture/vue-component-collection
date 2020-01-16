<template>
  <div class="layout">
    <v-header></v-header>
    <side-bar></side-bar>
    <div class="content-box" :class="{'isCollapse': collapse}">
      <tags></tags>
      <div class="content">
        <transition name="move" mode="in-out">
          <!-- <keep-alive> -->
            <router-view></router-view>
          <!-- </keep-alive> -->
        </transition>
        <el-backtop target=".content"></el-backtop>
      </div>
    </div>
  </div>
</template>
<script>
import vHeader from '@/components/header.vue'
import sideBar from '@/components/sideBar.vue'
import tags from '@/components/tags.vue'
export default {
  name: 'layout',
  data () {
    return {}
  },
  components: {
    vHeader,
    sideBar,
    tags
  },
  computed: {
    collapse () {
      return this.$store.getters.getCollapse
    }
  }
}
</script>
<style lang="scss" scode>
  .layout{
    width: auto;
    height: 100%;
    overflow: hidden;
    .content-box{
      position: absolute;
      right: 0;
      left: 64px;
      top: 60px;
      bottom: 0;
      -webkit-transition: left .3s ease-in-out;
      transition: left .3s ease-in-out;
      &:not(.isCollapse){
        left: 200px;
      }
      .content{
        width: auto;
        height: calc(100% - 30px);
        padding: 10px 10px 0;
        background: #eee;
        overflow-y: auto;
        overflow-x: auto;
      }
    }
  }
</style>
