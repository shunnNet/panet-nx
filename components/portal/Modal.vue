<template>
  <transition appear name="lbModal">
    <div
      class="lb-modal"
      v-if="value"
      @click="close($event)"
      :style="{ zIndex }"
    >
      <div class="lb-modal__content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import modalControl from './modalControl.js'
export default {
  props: {
    value: {},
  },
  data() {
    return {
      zIndex: 99999,
    }
  },
  watch: {
    value(now) {
      if (now === true) {
        console.log(modalControl.modalList.length, this._uid)
        const zIndex = modalControl.modalList.length
          ? modalControl.modalList.slice(-1)[0].zIndex + 1
          : this.zIndex

        modalControl.addModal({ id: this._uid, zIndex })
        this.zIndex = zIndex
      }
    },
  },
  updated() {
    if (this.value === false) {
      modalControl.removeModal(this._uid)
    }
  },

  methods: {
    close($event) {
      if ($event.currentTarget === $event.target) {
        this.$emit('input', false)
      }
    },
  },
}
</script>

<style lang="scss">
.lb-modal {
  position: fixed;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 1;
display: table;
  padding: 18px;

  &__content {
    display: table-cell;
    vertical-align: middle;
    text-align: center;

    transform-origin: center;
  }
}
.lbModal {
  &-enter-active,
  &-leave-active {
    transition: background-color 0.4s !important;
    .lb-modal__content {
      transition: transform 0.4s, opacity 0.4s;
    }
  }
  &-enter,
  &-leave-to {
    background-color: transparent !important;
    .lb-modal__content {
      opacity: 0;
      transform: translateY(-100px);
    }
  }
  &-enter-to,
  &-leave {
    background-color: rgba(0, 0, 0, 0.6);
    .lb-modal__content {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  // &-leave,
  // &-leave-active,
  // &-leave-to {
  //   z-index: 99998;
  // }
}
</style>
