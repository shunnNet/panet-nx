<template>
  <div class="c-field c-radio" :class="{ ...stateClass, ...validateClass }">
    <label class="c-field__label" v-if="label"> {{ label }} </label>

    <div class="c-field__outer-wrap">
      <label
        class="c-field__itm-wrap"
        :class="{
          'c-field__itm-wrap--checked': valueKey
            ? innerValue[valueKey] === itm.value[valueKey]
            : innerValue === itm.value,
        }"
        v-for="itm in innerList"
        :key="valueKey ? itm.value[valueKey] : itm.value"
        tabindex="0"
        @keydown.enter="handleKeyEnter($event, itm)"
      >
        <span class="c-field__radio-check"></span>
        <span class="c-field__radio-label"> {{ itm.label }} </span>
        <input
          type="radio"
          :name="name"
          :value="itm.value"
          v-model="innerValue"
          @change="handleChange($event, itm)"
          :disabled="itmIsDisable(itm)"
          hidden
        />
      </label>
    </div>
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
import stateful from "./mixins/stateful.js";

export default {
  name: "c-radio",
  mixins: [baseUtility, stateful, validatable],
  model: {
    props: "value",
    event: "change",
  },
  props: {
    valueKey: {
      type: String,
    },
    list: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      innerList: [],
    };
  },
  created() {
    this.updateInnerListByProp();
  },
  watch: {
    list() {
      this.updateInnerListByProp();
    },
  },
  computed: {
    valueIsObjects() {
      return this.value && typeof this.value === "object";
    },
  },

  methods: {
    itmIsDisable(itm) {
      return this.disabled || this.readonly || itm.disabled;
    },
    updateInnerListByProp() {
      this.innerList = this.list.map((itm) => itm);
    },
    handleChange(e, itm) {
      this.innerValue = itm.value;
      this.$emit("change", this.innerValue);
    },
    handleKeyEnter(e, itm) {
      if (!this.itmIsDisable(itm)) {
        this.innerValue = itm.value;
        this.$emit("change", this.innerValue);
      }
    },
  },
};
</script>
