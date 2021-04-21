<script>
import { proxyFunctional } from '@/assets/scripts/helpers/functional.js'
export default {
  functional: true,
  props: {
    tag: {
      type: String,
      default: () => 'div',
    },
  },
  render(h, ctx) {
    const rootTag = ctx.props.tag
    const slots = ctx.slots()

    const brickText = h('div', { class: 'brick-text' }, ctx.slots().default)
    const append = slots.append
      ? [h('div', { class: 'brick-append' }, slots.append)]
      : []

    return h(
      rootTag,
      {
        ...proxyFunctional(ctx, {
          classes: ['brick'],
        }),
      },
      [brickText, ...append]
    )
  },
}
</script>

<style lang="scss">
.brick {
  display: block;
  position: relative;
  border-bottom: 1px solid #000;
  padding: 10px 10px;
  width: 500px;
  cursor: pointer;
  transition: border-color 0.2s;

  &-text {
    @extend %textEllipsis;
    display: inline-block;
    max-width: 80%;
  }
  &-append {
    vertical-align: bottom;
    float: right;
  }
  &::after {
    @extend %spreadBorder__horizontal;
    border-top: none;
    border-bottom: 2px solid color(primaryEm);
  }

  &:hover {
    border-color: transparent;
    .brick-text {
      color: color(primaryEm);
    }
    &::after {
      transform: scaleX(1);
    }
  }
}
</style>