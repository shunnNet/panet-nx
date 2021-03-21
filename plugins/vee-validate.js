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

extend('email', email)
// Override the default message.
extend('required', {
  ...required,
  message: 'This field is required',
})
setInteractionMode('eager')

// export default function (context) {
//   console.log(context)
// }
