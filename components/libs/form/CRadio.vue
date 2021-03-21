<template>
  <label
    class="c-field__itm-wrap"
    :class="{
      'c-field__itm-wrap--checked': isChecked,
    }"
    v-if="itm !== undefined"
    tabindex="0"
    @keydown.enter="handleKeyEnter($event, itm)"
  >
    <span class="c-field__radio-check"></span>
    <span class="c-field__radio-label"> {{ itm.label }} </span>
    <input
      type="radio"
      :name="name"
      :value="itm.value"
      @change="handleChange($event, itm)"
      :disabled="itmIsDisable(itm)"
      hidden
    />
  </label>
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
    itm: {},
  },
  computed: {
    isChecked() {
      return this.value === this.itm.value;
    },
  },

  methods: {
    itmIsDisable(itm) {
      return this.disabled || this.readonly;
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
