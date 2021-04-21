<template>
  <div class="spinner">
    <div class="spin spin-white"></div>
    <div class="spin spin-second"></div>
  </div>
</template>

<style lang="scss">
.spinner {
  position: relative;
  width: 100px;
  height: 100px;
}
.spin {
  position: absolute;
  /*  1. modify border-style like dotted or dashed make different graph  */
  border: 10px solid rgba(144, 144, 144, 0.2);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation-iteration-count: infinite;
  animation-name: rotate;
  animation-timing-function: cubic-bezier(0.51, 0.69, 0.07, 1);
}
.spin-white {
  /*  2. Modify delay or duration to make different loading effect */
  border-top-color: rgba(144, 144, 144, 1);
  animation-delay: 0.1s;
  animation-duration: 1.5s;
}

.spin-second {
  /* 3. Modify or comment color to modify length */

  border-right-color: rgba(144, 144, 144, 0.5);
  border-top-color: rgba(144, 144, 144, 0.5);
  /*   border-left-color:rgba(144, 144, 144, 0.5); */
  animation-duration: 1.5s;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>