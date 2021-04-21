<template>
  <div class="pgIndex">
    <div class="pgIndex-bg"></div>
    <div class="box-xl pgIndex-wrap">
      <LogoFull class="pgIndex-logo" />
      <QueryForm dark />
    </div>
  </div>
</template>

<script>
import QueryForm from '@/components/QueryForm.vue'

export default {
  components: {
    QueryForm
  },
}
</script>

<style lang="scss">
.pgIndex {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  &-bg {
    position: fixed;
    filter: brightness(0.3);
    background-image: url('@/assets/images/theater.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    top: 0;
    left: 0%;
    height: 100vh;
    width: 100%;
    z-index: -1;
  }
  &-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &-logo {
    color: color(light);
    max-width: 600px;
    max-height: 400px;
    width: 100%;
    height: 100%;
    @include lg {
      max-width: 390px;
      max-height: 260px;
    }
  }
}
</style>
