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
        if (isNaN(this.endTime)) {
          return new Date(this.endTime.replace(/-/g, '/')).getTime()
        } else {
          return new Date(Number(this.endTime)).getTime()
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

        if (this.timeData.h < 10) {
          this.timeData.h = '0' + this.timeData.h
        }
        if (this.timeData.m < 10) {
          this.timeData.m = '0' + this.timeData.m
        }
        if (this.timeData.s < 10) {
          this.timeData.s = '0' + this.timeData.s
        }
        setTimeout(this.countdown, 1000)
      } else {
        this.endTimeStatus = true
        this.$emit('endFinish')
      }
    }
  }
}
</script>
