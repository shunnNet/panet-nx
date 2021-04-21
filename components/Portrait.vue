<template>
  <article class="portrait">
    <div
      class="portrait-imgFrame"
      :style="{ backgroundImage: `url(${user.photo})` }"
    ></div>
    <h4 class="portrait-title">{{ user.name }}</h4>
    <span class="portrait-sub">{{ user.occupation.name }} </span>
  </article>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.portrait {
  $imgHeight: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-imgFrame {
    display: flex;
    align-items: center;
    justify-content: center;
    height: $imgHeight;
    width: 150px;
    overflow: hidden;
    border-radius: 100%;
    margin-bottom: 10px;
    background-color: color(sub);
    user-select: none;
    // background-image: url(/sample_4.png);
    background-position: center;
    background-size: cover;
  }
  &-img {
    width: 150px;
    user-select: none;
  }
  &-title {
    @extend %reset-text;
    font-weight: bold;
    font-size: 1.3em;
  }
  &-sub {
    @extend %reset-text;
    color: color(darkSub);
    font-size: 1em;
  }
}
</style>