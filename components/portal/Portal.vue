<script>
import wormhole from "./wormhole.js"

let pid = 1

export default {
  props: {
    name: {
      type: String,
      default: () => String(++pid)
    },
    to: {
      required: true,
      type: String
    }
  },
  methods: {
    normalizeSlots() {
      return this.$scopedSlots.default ? [this.$scopedSlots.default] : this.$slots.default
    },
    sendUpdate() {
      const slotContent = this.normalizeSlots()
      if (slotContent) {
        const content = {
          from: this.name,
          to: this.to,
          passengers: this.normalizeSlots()
        }
        wormhole.open(content)
      } else {
        this.clear()
      }
    },
    clear() {
      wormhole.close({
        from: this.name,
        to: this.to
      })
    }
  },
  mounted() {
    this.sendUpdate()
  },
  updated() {
    // console.log("update")
    this.sendUpdate()
  },
  beforeDestroy() {
    this.clear()
  },
  render() {
    return <div class="portal" style="display: none;"></div>
  }
}
</script>
