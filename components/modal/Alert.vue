<template>
  <Modal v-model="value" >
    <div class="block modal" :style="space">
      <header class="block-header modal-header">
        <IconText :icon="icon"> {{ title }} </IconText>
      </header>
      <section class="block-section modal-content">
        <slot></slot>
      </section>
      <footer class="block-footer modal-footer">
        <button class="btn btn--sub w-full" type="button" @click="close">
          關閉
        </button>
      </footer>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/components/portal/Modal.vue'
export default {
  components: { Modal },
  props: {
    title: {
      required: true,
      type: String,
    },
    icon: {
      type: String,
      default: () => 'Person',
    },
    value: {
      type: Boolean,
      required: true,
    },
    maxWidth: {
      type: Number,
      default: () => 350
    },
    maxHeight: {
      type: Number,
      default: () => 300
    },
  },
  computed: {
    space() {
      return {
        "max-width": `${this.maxWidth}px`,
        "max-height": `${this.maxHeight}px`,
      }
    }
  },
  methods: {
    close() {
      this.$emit('input', false)
      this.$emit("close")
    },
  },
}
</script>
