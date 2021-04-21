<template functional>
  <div class="loadingBlock"></div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.loadingBlock{
  width: 500px;
  height: 200px;
  background-color: #dddddd;
  animation-name: wave;
  animation-timing-function: linear;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
/*   animation-fill-mode: forwards; */
  background-image: -webkit-linear-gradient(left,  #dddddd 0%,  #f5f5f5 20%,  #e5e5e5 40%,  #dddddd 100%);
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
</style>