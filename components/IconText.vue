
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
    const {data, props} = context
    
    const tag = props.tag
    const Icon = h(props.icon, {

      class: ["iconText-icon" ,props.iconClass],
    });

    return h(
      tag,
      {
        class: functional.getClasses(context, ["iconText"]),
        style: functional.getStyles(context),
        directives: data.directives
      },
      [Icon, ...context.slots().default]
    );
  },
};
</script>

<style lang="scss">
.iconText {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &-icon {
    max-height: 1.5em;
    max-width: 1.5em;
    margin-right: 5px;
  }
}
</style>