<template>
  <div
    class="c-field c-textarea"
    :class="{ ...stateClass, ...focusClass, ...validateClass }"
  >
    <label class="c-field__label" v-if="label" :for="`textarea-${_uid}`">
      {{ label }}
    </label>
    <slot name="before"></slot>
    <label class="c-field__wrap">
      <textarea
        class="c-field__unit"
        :id="`textarea-${_uid}`"
        :value="value"
        ref="unit"
        v-bind="{ ...inputAttrs }"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      ></textarea>
    </label>
    <slot name="after"></slot>
    <slot name="error" :error="error" errorClass="c-field__error">
      <div class="c-field__error" v-show="error">
        {{ error }}
      </div>
    </slot>
  </div>
</template>

<script>
import baseUtility from "./mixins/baseUtility.js";
import validatable from "./mixins/validatable.js";
import focusable from "./mixins/focusable.js";
import stateful from "./mixins/stateful.js";

export default {
  name: "c-textarea",
  mixins: [baseUtility, focusable, stateful, validatable],
  props: {
    placeholder: {
      type: String,
    },
  },
  methods: {
    handleInput(e) {
      this.innerValue = e.target.value;
      this.$emit("input", e.target.value);
    },
    handleChange(e) {
      this.innerValue = e.target.value;
      this.$emit("change", e.target.value);
    },
  },
  computed: {
    inputAttrs() {
      return {
        value: this.innerValue,
        name: this.name,
        placeholder: this.placeholder,
        autofocus: this.autofocus,
        readonly: this.readonly,
        disabled: this.disabled,
      };
    },
  },
};
</script>
