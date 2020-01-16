<template>
  <div class="side-bar" :class="{'isCollapse': collapse}">
    <el-menu
      :default-active="currentRoute"
      router
      class="sidebar-el-menu"
      :collapse="collapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <template v-for="item in menuList">
        <template v-if="item.subs">
          <el-submenu :index="item.title" :key="item.route">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <el-menu-item :index="itemSub.route" v-for="itemSub in item.subs" :key="itemSub.route">
              <span>{{ itemSub.title }}</span>
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-if="!item.subs">
          <el-menu-item :index="item.route" :key="item.title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import menuList from '@/assets/js/menuItems.js'
export default {
  data () {
    return {
      // collapse: this.$store.getters.getCollapse, // 导航折叠状态
      menuList: menuList
    }
  },
  computed: {
    collapse () {
      return this.$store.getters.getCollapse
    },
    currentRoute () {
      return this.$route.path.replace('/', '')
    }
  },
  mounted () {
    // console.log(menuList)
  }
}
</script>

<style lang="scss" scoped>
  .side-bar{
    height: calc(100% - 60px);
    position: absolute;
    left: 0;
    top: 60px;
    bottom: 0;
    overflow: auto;
    &:not(.isCollapse){
      width: 200px;
    }
    .sidebar-el-menu:not(.el-menu--collapse) {
      width: 200px;
    }
    ul{
      height: 100%;
      border-right: 0;
      overflow: hidden;
      background: #545c64;
    }
  }
  .side-bar::-webkit-scrollbar {
    width: 0;
  }
</style>
