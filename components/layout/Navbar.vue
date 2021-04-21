<template>
  <nav :class="['nav', { 'nav--dark': dark }]">
    <div class="nav-wrap box-xxl">
      <router-link class="nav-logoWrap" :to="{ name: 'index' }">
        <Logo class="nav-logo" />
      </router-link>
      <!-- <QueryForm class="nav-form" :dark="dark" /> -->

      <section class="nav-tools">
        <!-- <button type="button" class="btn nav-searchBtn">
          <Search />
        </button> -->

        <template v-if="!$auth.loggedIn">
          <NuxtLink
            :to="{ name: 'login' }"
            :class="['nav-login', 'reset-a', 'btn', loginTheme]"
            >登入</NuxtLink
          >
          <!-- <NuxtLink
            :to="{ name: 'register' }"
            class="nav-register reset-a btn btn--primary"
            >註冊</NuxtLink
          > -->
        </template>
        <template v-else>
          <SimpleUser
            :dark="dark"
            :user="$auth.user"
          ></SimpleUser>
        </template>
      </section>
    </div>
  </nav>
</template>

<script>
import QueryForm from '@/components/QueryForm.vue'
import SimpleUser from '@/components/person/SimpleUser.vue'
export default {
  props: {
    dark: {},
  },
  components: {
    QueryForm,
    SimpleUser,
  },
  computed: {
    loginTheme() {
      return this.dark ? 'btn--primary' : 'btn--primary'
    },
  },
  methods: {
    logout() {
      this.$auth.logout().then(() => window.location.reload())
    },
  },
}
</script>

<style lang="scss">
.nav {
  box-shadow: $global-shadow;
  background-color: color(light);
  // transition: background-color 0.2s;
  &-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-logoWrap {
    @extend %reset-a;
    margin-right: 20px;
  }
  &-logo {
    display: block;
    max-width: 100%;
    height: 70px;
  }
  &-form {
    flex: 1;
    margin-right: 20px;
  }
  &-tools {
    display: flex;
  }
  &-searchBtn {
    @extend %reset-btn;
    display: none;
    height: 48px;
    width: 48px;
    margin-right: 10px;
    &:hover {
      color: color(primary);
    }
  }
  &-login {
    margin-right: 10px;
  }
  @include lg {
    &-form {
      display: none;
    }
    &-searchBtn {
      display: block;
    }
  }
}
.nav--dark {
  background-color: color(dark);
  .nav {
    &-logo {
      color: color(light);
    }
    &-searchBtn {
      color: color(sub);
      &:hover {
        color: color(primary);
      }
    }
  }
}
</style>