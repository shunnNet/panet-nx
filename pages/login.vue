<template>
  <div class="pgLogin">
    <ValidationObserver slim v-slot="{ handleSubmit }">
      <form class="pgLogin-form block" @submit.prevent="handleSubmit(onSubmit)">
        <header class="block-header">
          <IconText icon="Subject" class="block-title"> 登入 </IconText>
        </header>
        <IconButton
          class="pgLogin-provider"
          icon="Google"
          text="使用 Google 帳號登入"
        />
        <IconButton
          class="pgLogin-provider"
          icon="Facebook"
          text="使用 Facebook 帳號登入"
        />
        <CDivider :text="'或以帳號登入'" />
        <CInputV
          class="pgLogin-field"
          v-model="form.account"
          name="account"
          :rules="'required|email'"
          placeholder="請輸入帳號"
          :required="true"
        >
          <template #prepend>
            <Person />
          </template>
        </CInputV>
        <CInputV
          class="pgLogin-field"
          v-model="form.password"
          name="password"
          :rules="'required|password'"
          placeholder="請輸入密碼"
          :required="true"
          type="password"
        >
          <template #prepend>
            <Lock />
          </template>
        </CInputV>

        <button
          class="btn btn--primary w-full pgLogin-field"
          type="submit"
        >
          登入
        </button>
        <button
          class="btn btn--sub w-full"
          type="button"
          @click="showForgetPassword = true"
        >
          忘記密碼
        </button>
      </form>
    </ValidationObserver>
    <Portal to="global">
      <Alert v-model="showForgetPassword" title="忘記密碼">
        <ForgetPassword />
      </Alert>
    </Portal>
  </div>
</template>

<script>
import CInputV from '@/components/form/CInputV.vue'
import IconButton from '@/components/IconButton.vue'
import CDivider from '@/components/CDivider.vue'
import Portal from '@/components/portal/Portal.vue'
import Alert from '@/components/modal/Alert.vue'
import ForgetPassword from '@/components/modal/ForgetPassword.vue'

export default {
  middleware: 'auth',
  components: {
    CInputV,
    CDivider,
    IconButton,
    Portal,
    Alert,
    ForgetPassword,
  },
  data() {
    return {
      form: {
        account: '',
        password: '',
      },
      showForgetPassword: false,
    }
  },
  methods: {
    onSubmit() {
      this.$auth
        .loginWith('local', {
          data: {
            ...this.form,
          },
        })
        .then(() =>
          console.log(
            `%c Log in Successfully`,
            'background: lightseagreen; color: #fff'
          )
        )
    },
  },
}
</script>

<style lang="scss">
.pgLogin {
  display: flex;
  justify-content: center;
  padding-top: 50px;

  &-form {
    max-width: 400px;
    min-height: 500px;
    width: 100%;
  }

  &-provider {
    margin-bottom: 5px;
  }
  &-field {
    margin-bottom: 15px;
  }
}
</style>