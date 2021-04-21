<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    threshold: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      observer: null,
    }
  },
  mounted() {
    const option = {
      threshold: this.threshold,
    }
    this.observer = new IntersectionObserver(this.handleIntersection, option)

    this.observer.observe(this.$el)
  },
  methods: {
    handleIntersection(entries) {
      this.$emit('input', entries[0].isIntersecting)
    },
  },

  render(h) {
    return this.$scopedSlots.default()
  },
}
</script>