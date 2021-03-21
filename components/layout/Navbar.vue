<template>
  <nav class="nav">
    <div class="nav-wrap">
      <Logo class="nav-logo" />
      <SimpleSearch class="nav-form"/>
    </div>
  </nav>
</template>

<script>
import Logo from '@/assets/images/logo.svg?inline'
import SimpleSearch from '@/components/SimpleSearch.vue'
export default {
  components: {
    Logo,
    SimpleSearch,
  },
}
</script>

<style lang="scss">
.nav {
  &-wrap {
    @extend %box-lg;
    display: flex;
  }
  &-logo {
    height: 70px;
  }
  &-form {
    flex: 1;
  }
}
</style>