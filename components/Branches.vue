

<script>
export default {
  props: {
    branch: {
      type: String,
      required: true,
    },
  },
  methods: {
    _genContent(vm) {
      return vm.$scopedSlots[this.branch]()
    },
  },
  render(h) {
    return this._genContent(this)
  },
}
</script>