<template>
  <transition
    name="slide"
    v-on:enter="enter"
    v-on:leave="leave"
    v-on:before-enter="beforeEnter"
    v-on:after-enter="afterEnter"
    v-on:before-leave="beforeLeave"
  >
    <slot></slot>
  </transition>
</template>

<script>
/*
  類似jquery slideToggle
  在 slot 中插入具有 v-show 或是 v-if 的區塊即可開關
  maxHeight 和 minHeight 設定高度上下限
*/
export default {
  props: {
    enterDuration: {
      default: () => "0.4s",
      type: String,
    },
    leaveDuration: {
      default: () => "0.2s",
      type: String,
    },
    enterFunction: {
      default: () => 'cubic-bezier(0.24, 0.72, 0.51, 1)',
      type: String,
    },
    leaveFunction: {
      default: () => 'cubic-bezier(0.24, 0.72, 0.51, 1)',
      type: String,
    },
    max: {
      default: () => 580,
      type: Number,
    },
    min: {
      default: () => 300,
      type: Number,
    },
    direction: {
      default: () => 'y',
      validator: (data) => ['x', 'y'].includes(data),
    },
  },
  data() {
    return {
      open: false,
      el: null,
    }
  },

  computed: {
    lengthProp() {
      return this.direction === 'y' ? 'height' : 'width'
    },
    scrollLengthProp() {
      return (
        'scroll' + this.lengthProp[0].toUpperCase() + this.lengthProp.slice(1)
      )
    },
  },
  methods: {
    getMaxLength(el) {
      const actualLength = el[this.scrollLengthProp]

      return actualLength > this.max
        ? this.max
        : actualLength < this.min
        ? this.min
        : actualLength
    },
    setOverflow(el, state) {
      el.style.overflow = state
    },
    setLength(el, length) {
      el.style[this.lengthProp] = `${length}px`
    },
    beforeEnter(el) {
      
      el.style.transition = `${this.lengthProp} ${this.enterDuration} ${this.enterFunction}`
      console.log(`${this.lengthProp} ${this.enterDuration} ${this.enterFunction}`);
      this.setLength(el, 0)
      this.setOverflow(el, 'hidden')
    },
    enter(el) {
      this.el = el
      const length = this.getMaxLength(el)
      this.setLength(el, length)
      this.open = true
    },
    afterEnter(el) {
      this.setOverflow(el, 'auto')
    },
    beforeLeave(el) {
      el.style.transition = `${this.lengthProp} ${this.leaveDuration} ${this.leaveFunction}`
      this.setOverflow(el, 'hidden')
    },
    leave(el) {
      this.setLength(el, 0)
      this.open = false
    },
  },
  mounted() {
    const obs = new MutationObserver(() => {
      if (this.open) {
        this.enter(this.el)
      }
    })
    obs.observe(this.$el, {
      childList: true,
      subtree: true,
    })
  },
}
</script>
