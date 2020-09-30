<template>
  <div class="countdown">
    <slot :data="timeData"></slot>
  </div>
</template>

<script>
export default {
  name: 'countdown',
  props: {
    endTime: ''
  },
  data () {
    return {
      timeData: {
        d: '',
        h: '',
        m: '',
        s: ''
      },
      endTimeStatus: false
    }
  },
  computed: {
    endTimed () {
      if (this.endTime) {
        if (typeof this.endTime === 'string') {
          return new Date(this.endTime.replace(/-/g, '/')).getTime()
        } else {
          return new Date(this.endTime).getTime()
        }
      } else {
        return new Date().getTime()
      }
    }
  },
  mounted () {
    this.countdown()
  },
  methods: {
    countdown () {
      let now = new Date().getTime()
      let endTime = this.endTimed

      let timeDiff = endTime - now
      if (timeDiff > 0) {
        this.timeData.d = Math.floor(timeDiff / 1000 / 60 / 60 / 24)
        this.timeData.h = Math.floor((timeDiff / 1000 / 60 / 60) % 24)
        this.timeData.m = Math.floor((timeDiff / 1000 / 60) % 60)
        this.timeData.s = Math.floor((timeDiff / 1000) % 60)
        setTimeout(this.countdown, 1000)
      } else {
        this.endTimeStatus = true
        this.$emit('endFinish')
      }
    }
  }
}
</script>
