<template>
  <div class="tags-group">
      <el-tag
        v-for="tag in tags"
        :key="tag.name"
        closable
        @click="click(tag)"
        @close="handleClose(tag)"
        :type="tag.type"
        :class="{'active': activeTag === tag.name}">
        {{tag.name}}
      </el-tag>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tags: [],
      activeTag: ''
    }
  },
  methods: {
    click (tag) {
      // console.log(tag)
      if (tag.path === this.$route.path) {
        return
      }
      this.$router.push(tag.path)
    },
    handleClose (tag) {
      this.tags.map((item, index, arr) => {
        if (item.name === tag.name) {
          this.tags.splice(index, 1)
          if (tag.name === this.activeTag) {
            if (arr[index + 1]) {
              this.$router.push(arr[index].path)
            } else if (arr[index - 1]) {
              this.$router.push(arr[index - 1].path)
            } else {
              this.$router.push('home')
            }
          }
        }
      })
    }
  },
  computed: {},
  watch: {
    $route (newValue, oldValue) {
      this.activeTag = newValue.meta.title
      let isExist = this.tags.some(item => {
        return item.path === newValue.fullPath
      })
      if (!isExist) {
        this.tags.push({
          name: newValue.meta.title,
          type: '',
          path: newValue.fullPath
        })
      }
    }
  },
  created () {
    this.activeTag = this.$route.meta.title
    this.tags.push({
      name: this.$route.meta.title,
      type: '',
      path: this.$route.fullPath
    })
  }
}
</script>
<style lang="scss" scoped>
  .tags-group{
    // width: 100%;
    height: 30px;
    line-height: 30px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 5px 10px #ccc;
    z-index: 9;
    /deep/ .el-tag{
      height: 25px;
      line-height: 24px;
      border-radius: 5px;
      vertical-align: middle;
      margin-left: 5px;
      &:hover{
        cursor: pointer;
        background: #409eff;
        color: #fff;
      }
      &.active{
        color: #fff;
        background: #409eff;
      }
    }
  }
</style>
