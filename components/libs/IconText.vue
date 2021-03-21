<template functional>
  <div
    class="icon-text"
    :is="props.tag"
    v-bind="data.attrs"
    v-on="data.on"
    :class="[data.staticClass || '', data.class]"
    :style="[data.staticStyle, data.style]"
  >
    <img class="icon-text__icon" :src="props.icon" v-if="!props.after" />
    <span class="icon-text__text">{{ props.text }}</span>
    <img class="icon-text__icon" :src="props.icon" v-if="props.after" />
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      default: () => "p",
      type: String
    },
    text: {
      type: String
    },
    icon: {
      required: true,
      type: String
    },
    after: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>
