
<script>
export default {
  functional: true,
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  render(h, context) {
    return h("span", {
      class: [
        "material-icons",
        context.data.staticClass || '', context.data.class
      ]
    }, [context.props.icon])
  },
};
</script>
