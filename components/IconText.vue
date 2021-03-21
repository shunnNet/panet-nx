
<script>
import functional from "@/assets/scripts/helpers/functional.js";

export default {
  props:{
    // slot
    tag: {
      type: String,
      default: () => "div"
    },
    iconClass: {
      type: String
    },
    icon : {
      type: String
    }
  },
  functional: true,
  render(h, context) {
    const tag = context.props.tag
    const Icon = h("MIcon", {
      props: {
        icon: context.props.icon,
      },
      class: [context.props.iconClass],
    });

    return h(
      tag,
      {
        class: functional.getClasses(context, ["iconText"]),
        style: functional.getStyles(context),
        directives: context.data.directives
      },
      [Icon, ...context.slots().default]
    );
  },
};
</script>

<style lang="scss">
.iconText {
  display: inline-flex;
  align-items: center;
  .material-icons {
    font-size: 1em;
    margin-right: 2px;
  }
}
</style>