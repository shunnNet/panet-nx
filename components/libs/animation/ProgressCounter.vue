<script>
import ProgressProvider from "./ProgressProvider.vue"
export default {
  extends: ProgressProvider,
  props: {
    to: {
      type: Number,
      required: true
    },
    from: {
      type: Number,
      required: true
    }
  },
  computed: {
    positive() {
      return this.to - this.from >= 0
    }
  },
  render() {
    const value = this.positive
      ? Math.ceil(this.progress * this.to)
      : this.from + Math.ceil((this.to - this.from) * this.progress)
    return this.$scopedSlots.default({
      num: value
    })
  }
}
</script>
