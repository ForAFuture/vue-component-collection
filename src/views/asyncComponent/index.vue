<template>
  <div>
    <async-component></async-component>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {
    'async-component': (resolve, reject) => {
      let test = '哈哈'
      setTimeout(function () {
        resolve({
          template: '<div @click="test">' + test + '</div>',
          data () {
            return {
              id: 1,
              name: 'test'
            }
          },
          created () {
            console.log(this)
          },
          methods: {
            test () {
              console.log(2222)
            }
          }
        })
      }, 1000)
    }
  }
}
</script>
