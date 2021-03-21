
<script>
import { isNumber } from "@/assets/scripts/helpers/assert.js"
import tagTheme from "@/assets/scripts/helpers/tagTheme.js";


export default {
  functional: true,
  props: {
    type: {
      default: () => "Default"
    },
    ellipsis: {
      type: Boolean,
      default: () => false,
    },
    width: {
      type: Number
    }
  },
  render(h, context) {
    const theme = `tag--${tagTheme[context.props.type]}`
    const ellipsis = context.props.ellipsis ? ["text-ellipsis"] : []
    
    return h('span', {
      class: [ "tag", theme, ...ellipsis ],
      style: {
        width: isNumber(context.props.width) ? `${context.props.width}px` : "auto"
      },
    }, context.slots().default)
  },
};
</script>

<style lang="scss">
.tag {
  display: inline-block;
  margin: 0 5px 5px 0;
  padding: 5px 8px;
  border-radius: 5px;
  background-color: lightseagreen;
  vertical-align: bottom;
  color: #fff;
  &:last-child {
    margin: 0 0 5px 0;
  }
}
</style>