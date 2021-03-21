
<script>
export default {
  data() {
    return {
      now: 0,
      end: 100,
      duration: 3000,
      rAf: null,
      running: false,
    }
  },
  computed: {
    progress() {
      return this.now / this.end
    },
  },
  methods: {
    reset() {
      this.now = 0
      this.end = 100
      return this
    },
    beizer(t) {
      return t * (2 - t)
    },
    run({ to, duration }) {
      if (!this.running) {
        this.running = true
        // https://gist.github.com/gre/1650294
        let startTime = 0
        let finalTarget = to > 100 ? 100 : to < 0 ? 0 : to // 0<= finalTarget <= 100
        let distance = finalTarget - this.now // -100
        const protoNow = this.now

        const progress = (timestamp) => {
          startTime = startTime === 0 ? timestamp : startTime
          const step = timestamp - startTime

          const getProgress = (max, step) => {
            let t = step / duration
            t = t > 1 ? 1 : t
            return distance * this.beizer(t)
          }
          const needContinue = () => {
            if (distance > 0) {
              return nextPosition < finalTarget
            }
            if (distance < 0) {
              return nextPosition > finalTarget
            }
          }

          const forward = getProgress(finalTarget, step)
          const nextPosition = protoNow + forward

          this.$nextTick(() => {
            const needC = needContinue()
            if (needC) {
              this.now = nextPosition
              this.rAf = requestAnimationFrame(progress)
            } else {
              this.now = finalTarget
              this.running = false
            }
          })
        }
        this.rAf = requestAnimationFrame(progress)
        return this
      }
    },
    pause() {
      cancelAnimationFrame(this.rAf)
      this.running = false
    },
  },
  render(){
    return this.$scopedSlots.default({
      progress: this.progress
    })[0]
  }
}
</script>
