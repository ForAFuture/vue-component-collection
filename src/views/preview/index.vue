<template>
  <div class="vue-preview">
    <cont-title title="图片预览"></cont-title>
    <vue-preview :thumbImageStyle="{width:'200px',height:'200px',margin:'10px'}" :previewBoxStyle="{}" :slides="slide1" @close="handleClose"></vue-preview>
  </div>
</template>
<script>
// import vuePreview from 'vue-preview'
export default {
  data () {
    return {
      img: require('@/assets/images/user.png'),
      slide1: [
        {
          src: '@/../static/images/001.jpg',
          msrc: '@/../static/images/001_min.png',
          alt: 'picture1',
          title: 'Image Caption 1',
          w: 600,
          h: 400
        },
        {
          src: '@/../static/images/002.jpg',
          msrc: '@/../static/images/002_min.png',
          alt: 'picture2',
          title: 'Image Caption 2',
          w: 1200,
          h: 900
        }
      ]
    }
  },
  methods: {
    handleClose () {
      console.log(1)
    }
  },
  components: {
    // vuePreview
  }
}
</script>

<style lang="scss" scoped>
  .vue-preview{
    min-width: 1000px;
    height: 100%;
    background: #fff;
    /deep/ figure{
      display: inline-block;
      // width: 200px;
    }
  }
</style>
