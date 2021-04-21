<template>
  <button :class="['btn','iconBtn', btnTheme]" type="button">
    <IconText :icon="icon" class="iconBtn-iconText"> {{ text }} </IconText>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      default: () => 'dark-line',
    },
  },
  computed: {
    btnTheme() {
      return `btn--${this.theme}`
    },
  },
}
</script>

<style lang="scss">
.iconBtn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  &-iconText {
    width: 100%;
    justify-content: flex-start !important;
    .iconText-icon {
      margin-right: 15%;
    }
  }
}
</style>