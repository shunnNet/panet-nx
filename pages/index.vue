<template>
  <div class="pgIndex">
    <div
      class="pgIndex-wrapper"
      :class="{ 'pgIndex--active': backgroundActive }"
    >
      <div class="pgIndex-bg"></div>
      <div class="box-xl pgIndex-content">
        <LogoFull class="pgIndex-logo" />
        <QueryForm dark />
      </div>
    </div>
  </div>
</template>

<script>
import QueryForm from '@/components/QueryForm.vue'
import { loadImg } from '@/assets/scripts/helpers/image.js'

export default {
  name: 'Index',
  components: {
    QueryForm,
  },
  data() {
    return {
      backgroundActive: false,
    }
  },
  created() {
    if (process.client) {
      const src = this.$store.state.supportWebp
        ? require(`@/assets/images/theater.jpg?webp`)
        : require(`@/assets/images/theater.jpg`)

      loadImg(src).then(() => {
        this.backgroundActive = true
      })
    }
  },
}
</script>

<style lang="scss">
.pgIndex {
  &-wrapper {
    display: flex;
    justify-content: center;
    padding-top: 50px;
    margin: -20px 0;
    min-height: 100vh;
    transition: background-color 1s;
    background-color: #000000;
  }
  &--active {
    background-color: transparent;
  }

  &-bg {
    position: fixed;
    filter: brightness(0.3);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    top: 0;
    left: 0%;
    height: 100vh;
    width: 100%;
    z-index: -1;
  }
  &-content {
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
.webp {
  .pgIndex-bg {
    background-image: url('@/assets/images/theater.jpg?webp');
  }
}
.nowebp {
  .pgIndex-bg {
    background-image: url('@/assets/images/theater.jpg');
  }
}
</style>
