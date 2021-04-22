<template>
  <div class="main" :class="[webp]">
    <Navbar class="main-nav" :dark="dark" />
    <main class="main-content">
      <Nuxt keep-alive :keep-alive-props="{ include: ['Query', 'Index'] }" />
    </main>
    <Foot class="main-footer" />
    <PortalTarget name="global" />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
import Foot from '@/components/layout/Foot.vue'
import PortalTarget from '@/components/portal/PortalTarget.vue'
export default {
  components: {
    Navbar,
    Foot,
    PortalTarget,
  },
  data() {
    return {
      webp: this.webp = this.$store.state.supportWebp ? 'webp' : 'nowebp'
    }
  },
  computed: {
    dark() {
      return this.$route.name === 'index' ? true : false
    },
  },
}
</script>

<style lang="scss">
.main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &-nav {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 9999;

    &--index {
      background-color: transparent;
    }
  }
  &-content {
    padding: 20px 0;
    flex: 1;
    width: 100%;
  }
  &-footer {
    width: 100%;
  }
}
</style>
