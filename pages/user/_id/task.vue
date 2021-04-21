<template >
  <div class="block">
    <header class="block-header">
      <IconText icon="Person" class="block-title"> Task </IconText>
    </header>
    <section class="block-section">
      <p>User Id: {{ id }}</p>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.id
    },
  },
}
</script>

<style>
</style>