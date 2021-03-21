<template>
  <div class="container">
    <!-- <Logo />
    <ValidationProvider rules="email" v-slot="{ errors }" name="email">
      <input type="text" v-model="text" class="input-for" />
      <span>{{ errors }}</span>
    </ValidationProvider>
    <client-only>
      <Datepicker />
    </client-only> -->
  </div>
</template>

<script>
import Logo from '@/assets/images/logo.svg?inline'
import libs from '@/components/libs'

export default {
  // layout: "main",
  components: {
    Logo,
  },
  data() {
    return {
      text: '',
    }
  },
}
</script>

<style lang="scss">

</style>
