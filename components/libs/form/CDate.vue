<template>
  <div class="c-field c-date" :class="{ ...stateClass, ...validateClass }">
    <label class="c-field__label" v-if="label" :for="`input-${_uid}`">
      {{ label }}
    </label>
    <slot name="before"></slot>

    <div class="c-field__wrap">
      <slot name="prepend" :iconClass="'c-field__icon'"></slot>
      <client-only>
        <date-picker
          input-class="c-field__unit"
          :id="`input-${_uid}`"
          v-bind="{ ...inputAttrs }"
          v-model="innerValue"
          ref="datePicker"
          @selected="handleChange"
        >
        </date-picker>
      </client-only>
      <slot name="append" :iconClass="'c-field__icon'"></slot>
    </div>

    <slot name="after"></slot>
    <slot name="error" :error="error" errorClass="c-field__error">
      <div class="c-field__error" v-show="error">
        {{ error }}
      </div>
    </slot>
  </div>
</template>

<script>
import baseUtility from './mixins/baseUtility.js'
import validatable from './mixins/validatable.js'
import stateful from './mixins/stateful.js'
// import datePicker from 'vuejs-datepicker'
import { en, zh, zhHK, vi } from 'vuejs-datepicker/dist/locale'

const languages = {
  en,
  zh,
  tw: zhHK,
  vi,
}

export default {
  name: 'c-date',
  mixins: [baseUtility, stateful, validatable],
  model: {
    props: 'value',
    event: 'change',
  },
  // components: {
  //   datePicker,
  // },
  props: {
    language: {
      type: String,
      default: 'zh',
    },
    format: {
      default: () => 'yyyy/MM/dd',
    },
    calendarClass: {},
    disabledDate: {
      type: Object,
    },
    placeholder: {
      type: String,
    },
  },
  computed: {
    inputAttrs() {
      return {
        value: this.innerValue,
        name: this.name,
        placeholder: this.placeholder,
        disabled: this.disabled,
        language: languages[this.language],
        format: this.format,
        'disabled-dates': this.disabledDate,
      }
    },
  },
  methods: {
    handleChange(value) {
      this.innerValue = value
      this.$emit('change', value)
    },
  },
}
</script>
