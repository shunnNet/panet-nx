<template>
  <transition name="cross" mode="out-in" type="transition">
    <div class="mask" v-if="show" :style="{
      height: height
    }" />
    <slot v-else></slot>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    height: {
      type: String,
      default: () => "100px"
    }
  },
}
</script>

<style lang="scss">
.mask {
  width: 100%;
  height: 100px;
  border-radius: $global-block-radius;
  background-color: #dddddd;
  animation-name: wave;
  animation-timing-function: linear;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  /*   animation-fill-mode: forwards; */
  background-image: -webkit-linear-gradient(
    left,
    #dddddd 0%,
    #f5f5f5 20%,
    #e5e5e5 40%,
    #dddddd 100%
  );
  background-repeat: no-repeat;
}
@keyframes wave {
  0% {
    background-position: -500px top;
  }
  100% {
    background-position: 500px top;
  }
}

.cross-enter,
.cross-leave-to {
  opacity: 0;
}
.cross-enter-to,
.cross-leave {
  opacity: 1;
}
.cross-enter-active,
.cross-leave-active {
  transition: opacity 0.2s;
}
</style>