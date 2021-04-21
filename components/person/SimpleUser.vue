<template>
  <div
    class="simpleUser"
    :class="{ 'simpleUser--dark': dark }"
    @mouseenter="toggle(true)"
    @mouseleave="lateClose"
    @click="toggle(!showDrop)"
  >
    <div class="simpleUser-imgFrame">
      <img :src="user.photo" class="simpleUser-photo" />
    </div>
    <span class="simpleUser-text"> {{ user.name }}</span>
    <Arrow class="simpleUser-arrow" />

    <transition appear name="drop">
      <ul class="simpleUser-drop block" v-show="showDrop">
        <NuxtLink
          tag="li"
          :to="{ path: `/user/${user._id}/info` }"
          class="simpleUser-dropItem reset-a d-block"
        >
          <IconText icon="Person">我的頁面</IconText>
        </NuxtLink>
        <li class="simpleUser-dropItem">
          <IconText icon="Person">我的頁面</IconText>
        </li>
        <li class="simpleUser-dropItem">
          <IconText icon="Person">我的頁面</IconText>
        </li>
        <li class="simpleUser-dropItem" @click="logout">
          <IconText icon="Person">登出</IconText>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: () => false,
    },
    user: {
      required: true,
    },
  },
  mounted() {
    console.log(`%c ${this.user.photo}`, 'background: lightseagreen; color: #fff');
  },
  data() {
    return {
      showDrop: false,
      lateCloseCounter: 0,
    }
  },
  methods: {
    lateClose() {
      this.lateCloseCounter = setTimeout(() => {
        this.toggle(false)
      }, 500)
    },
    toggle(state) {
      this.showDrop = state
      if (state === true) {
        clearTimeout(this.lateCloseCounter)
      }
    },
    logout() {
      this.$auth.logout()
    },
  },
}
</script>

<style lang="scss">
.simpleUser {
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  position: relative;
  &-text {
    font-weight: bold;
  }
  &-imgFrame {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    overflow: hidden;
    border-radius: 100%;
    margin-right: 10px;
    background-color: color(sub);
  }
  &-photo {
    width: 32px;
  }
  &-drop {
    @extend %reset-ul;
    position: absolute;
    width: 100%;
    top: 110%;
    left: 0;
  }
  &-dropItem {
    padding: 15px;
    border-bottom: 1px solid color(sub);
    &:first-child {
      border-radius: $global-block-radius $global-block-radius 0 0;
    }
    &:last-child {
      border-bottom: 0;
      border-radius: 0 0 $global-block-radius $global-block-radius;
    }
    &:hover {
      background-color: color(sub);
    }
  }
  &--dark {
    .simpleUser-text, .simpleUser-arrow  {
      color: color(light);
    }
  }
}
.drop-enter,
.drop-leave-to {
  transform: translateY(-10%);
  opacity: 0;
}
.drop-enter-active,
.drop-leave-active {
  transition: 0.2s;
}
.drop-enter-to,
.drop-leave {
  opacity: 1;
  transform: translateY(0%);
}
</style>