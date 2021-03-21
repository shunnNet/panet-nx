<template>
  <div class="main">
    <Navbar class="main-nav" />
    <main class="main-content">
      <Nuxt />
    </main>
    <footer class="main-footer">
      I am footer
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar.vue"
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
.main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &-nav {
    background-color: #fff;
    width: 100%;
  }
  &-content {
    flex: 1;
    width: 100%;
  }
  &-footer {
    width: 100%;
  }
}
</style>
