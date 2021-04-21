import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  setInteractionMode,
  extend,
} from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

extend('email', {
  ...email,
  message: "請輸入帳號，他是一個信箱"
})
// Override the default message.
extend('required', {
  ...required,
  message: '這是必填欄位',
})

extend("password", {
  validate(value){
    return typeof value === "string" && value.match(/[a-zA-Z0-9]+/) !== null
  },
  message(field){
    return `密碼必須是英文大小寫或是數字`
  },
})

setInteractionMode('eager')

// export default function (context) {
//   console.log(context)
// }
