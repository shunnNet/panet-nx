<template>
  <div
    class="parent"
    :style="{
      'animation-duration': `${speed}s`,
      'animation-delay' : `${delay}s`
    }"
  >
    <div
      class="child"
      :style="{
        'animation-duration': `${speed}s`,
      'animation-delay' : `${delay}s`
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    speed: {
      default: () => 2,
      type: Number
    },
    delay: {
      default: () => 0,
      type: Number
    },

  }
}
</script>

<style>
@keyframes parent {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
@keyframes child {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(-360deg);
  }
}
.parent {
  /* // position: relative; */
  width: min-content;
  animation: parent 2s infinite linear;
  transform-origin: 50% 49%;
  /* // background-color: black; */
}
.child {
  animation: child 2s infinite linear;
}
</style>
