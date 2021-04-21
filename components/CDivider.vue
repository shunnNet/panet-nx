<template functional>
  <div class="CDivider">
    <div class="CDivider-line"></div>
    <span class="CDivider-text"> {{ props.text }} </span>
    <div class="CDivider-line"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
}
</script>

<style lang="scss">
.CDivider {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 30px auto;
  width: 100%;
  &-text {
    color: grey;
    padding: 0 10px;
    font-style: italic;
  }
  &-line {
    flex: 1;
    height: 1px;
    background-color: grey;
    width: 100%;
  }
}
</style>