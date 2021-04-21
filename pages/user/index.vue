<template >
  <div>
    hello user:
    <NuxtChild />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route)
  },
}
</script>

<style>
</style>