
<script>
import functional from "@/assets/scripts/helpers/functional.js";

export default {
  functional: true,
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  render(h, context) {
    return h(
      "div",
      {
        class: functional.getClasses(context, ["scaleImg"]),
        style: functional.getStyles(context),
        directives: context.data.directives,
        listeners: context.data.on,
      },
      [
        h("div", {
          class: ["scaleImg-imgFilter"],
          style: { backgroundImage: `url(${context.props.url})` },
        }),
        h("div", {
          class: ["scaleImg-img"],
          style: { backgroundImage: `url(${context.props.url})` },
        }),
      ]
    );
  },
};
</script>

<style lang="scss">
.scaleImg {
  position: relative;
  overflow: hidden;
  &-img {
    position: absolute;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    top: 0;
    padding-bottom: 80%;
  }
  &-imgFilter {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.5;
    padding-bottom: 80%;
  }

  &-img,
  &-imgFilter {
    box-sizing: content-box;
    transition: transform 0.3s;
  }
  &:hover {
    .scaleImg-img,
    .scaleImg-imgFilter {
      transform: scale(1.2);
    }
  }
}
</style>