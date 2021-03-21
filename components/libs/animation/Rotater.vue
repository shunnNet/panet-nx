<template>
  <div :style="`transform:rotate(${deg}deg)`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deg: 0,
      timestamp: 0,
      startTime: 0,
      progress: 0,
      // active: false,
      maxSpeed: 10,
      lastTime: 0
    }
  },
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    active(newValue) {
      if (newValue === true) {
        this.rotate()
      }
    }
  },

  methods: {
    rotate() {
      requestAnimationFrame(() => {
        this.deg += 5
        if (this.active === true) {
          this.rotate()
        }
      })
    },
    // rotateBizer() { -----------------------Not Complete
    //   requestAnimationFrame((timestamp) => {
    //     if (this.startTime === 0) {
    //       this.startTime = timestamp
    //     }

    //     let nextProgress = timestamp - this.startTime
    //     let next

    //     // console.log(nextProgress)
    //     if (this.active && nextProgress / 2000 >= 0.99) {
    //       next = this.maxSpeed
    //       this.startTime += timestamp - this.lastTime
    //     } else if (this.active) {
    //       next = this.maxSpeed * this.easeOutQuart(nextProgress / 2000)
    //     } else {
    //       this.progress = this.progress === 0 ? 2000 : this.progress - 24
    //       next = this.maxSpeed * this.easeOutQuart(this.progress / 2000)
    //     }
    //     this.lastTime = timestamp
    //     this.deg += next
    //     if (this.active === true || this.progress >= 0) {
    //       this.rotateBizer()
    //     } else {
    //       this.progress = 0
    //       this.startTime = 0
    //     }
    //   })
    // },
    // easeOutQuart(t) {
    //   // https://gist.github.com/gre/1650294
    //   return 1 - --t * t * t * t
    // }
  }
}
</script>
