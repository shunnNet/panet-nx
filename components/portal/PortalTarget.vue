<script>
import wormhole from "./wormhole.js"

export default {
  props: {
    slotProps: {
      type: Object,
      default: () => ({})
    },
    name: {
      type: String,
      required: true
    },
    multiple: Boolean
  },
  created() {
    if (!wormhole.transports[this.name]) {
      this.$set(wormhole.transports, this.name, [])
    }
  },
  computed: {
    ownTransports() {
      const transports = wormhole.transports[this.name] ? wormhole.transports[this.name] : []
      return this.multiple ? transports : transports.slice(-1)
    },
    passengers() {
      // console.log("newPassenger", this.ownTransports[0])
      return this.ownTransports.map((transport) => {
        let newPassenger = transport.passengers[0]

        if (typeof newPassenger === "function") {
          newPassenger = newPassenger(this.slotProps)
        } else {
          newPassenger = transport.passengers
        }
        return newPassenger
      })
    }
  },
  // methods: {
  //   children() {
  //     return this.passengers.length === 0 ?
  //   }
  // }
  render() {
    // console.log(this.ownTransports)
    return <div> {this.passengers} </div>
  }
}
</script>
