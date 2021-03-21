<template>
  <div class="c-field c-input" :class="{ ...stateClass, ...focusClass, ...validateClass }">
    <label class="c-field__label" v-if="label" :for="`input-${_uid}`">
      {{ label }}
    </label>
    <slot name="before" :togglePwd="togglePwd"></slot>

    <label class="c-field__wrap">
      <slot name="prepend" :type="innerType" :togglePwd="togglePwd" :iconClass="'c-field__icon'"></slot>
      <input
        class="c-field__unit"
        :id="`input-${_uid}`"
        :type="innerType"
        ref="unit"
        v-bind="{ ...inputAttrs }"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <slot name="append" :type="innerType" :togglePwd="togglePwd" :iconClass="'c-field__icon'"></slot>
    </label>

    <slot name="after" :togglePwd="togglePwd"></slot>
    <slot name="error" :errors="errors" errorClass="c-field__error" v-if="errors.length">
      <div class="c-field__error" v-show="errors.length">
        {{ errors[0] }}
      </div>
    </slot>
  </div>
</template>

<script>
import baseUtility from "./mixins/baseUtility.js"
import validatable from "./mixins/validatable.js"
import focusable from "./mixins/focusable.js"
import stateful from "./mixins/stateful.js"

export default {
  name: "c-input",
  mixins: [baseUtility, focusable, stateful, validatable],
  props: {
    type: {
      type: String,
      default: () => "text",
      validator: (v) => {
        return ["text", "password", "tel", "email"].includes(v)
      }
    },
    placeholder: {
      type: String
    }
  },
  data() {
    return {
      innerType: this.type
    }
  },
  computed: {
    inputAttrs() {
      return {
        value: this.innerValue,
        name: this.name,
        placeholder: this.placeholder,
        autofocus: this.autofocus,
        readonly: this.readonly,
        disabled: this.disabled
      }
    }
  },
  methods: {
    handleInput(e) {
      this.innerValue = e.target.value
      this.$emit("input", e.target.value)
    },
    handleChange(e) {
      this.innerValue = e.target.value
      this.$emit("change", e.target.value)
    },
    togglePwd() {
      this.innerType = this.innerType === "password" ? "text" : "password"
    }
  }
}
</script>
