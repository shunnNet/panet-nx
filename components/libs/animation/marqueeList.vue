<template>
  <div ref="marqueeList" class="rowup" @mouseenter="stop" @mouseleave="startMarquee">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "marqueeList",
  props: {
    interval: {
      type: Number,
      default: 0
    },
    rowCount: {
      type: Number,
      default: 5
    },
    rowHeight: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      itemCount: 0
    }
  },
  methods: {
    fixMarquee() {
      Array.from(this.$refs.marqueeList.children)
        .slice(0, this.rowCount)
        .forEach((d) => {
          this.$refs.marqueeList.appendChild(d.cloneNode(true))
        })
    },
    startMarquee() {
      const height = this.itemCount * this.rowHeight
      const duration = this.itemCount * this.interval
      this.$refs.marqueeList.style.setProperty("--height", `-${height - 20}px`)
      this.$refs.marqueeList.style.setProperty("--duration", `${duration}s`)
      this.$refs.marqueeList.style.removeProperty("animation-play-state")
    },
    stop() {
      this.$refs.marqueeList.style.setProperty("animation-play-state", `paused`)
    }
  },
  mounted() {
    this.itemCount = this.$refs.marqueeList.children.length
    if (this.itemCount < this.rowCount) return
    setTimeout(() => {
      this.fixMarquee()
      this.startMarquee()
    }, 0)
  }
}
</script>

<style>
@keyframes rowup {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, var(--height), 0);
  }
}
.rowup {
  animation: var(--duration) rowup linear infinite normal;
  position: relative;
}
</style>
