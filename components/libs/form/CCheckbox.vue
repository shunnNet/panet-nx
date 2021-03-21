<template>
  <div class="c-field c-checkbox" :class="{ ...stateClass, ...validateClass }">
    <label class="c-field__label" v-if="label"> {{ label }} </label>
    <div>
      <div class="c-field__outer-wrap">
        <label
          class="c-field__itm-wrap"
          :class="{ 'c-field__itm-wrap--checked': itm.checked }"
          v-for="itm in innerList"
          :key="valueKey ? itm.value[valueKey] : itm.label"
          tabindex="0"
          @keydown.enter="() => (itm.checked ? removeItm(itm) : addItm(itm))"
        >
          <span class="c-field__checkbox-check">
            <svg
              class="c-field__checkbox-check__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              width="18px"
              height="18px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
            </svg>
          </span>
          <span class="c-field__checkbox-label"> {{ itm.label }} </span>
          <input
            type="checkbox"
            :name="name"
            :value="itm.value"
            v-model="innerValue"
            @change="handleChange($event, itm)"
            :disabled="itm.disabled"
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
  </div>
</template>

<script>
import baseUtility from "./mixins/baseUtility.js";
import validatable from "./mixins/validatable.js";
import stateful from "./mixins/stateful.js";

export default {
  name: "c-checkbox",
  mixins: [baseUtility, stateful, validatable],
  model: {
    props: "value",
    event: "change",
  },
  props: {
    value: {
      type: Array,
    },
    valueKey: {
      type: String,
    },
    list: {
      type: Array,
    },
  },
  data() {
    return {
      innerList: [],
    };
  },
  computed: {
    valueIsObjects() {
      return this.value[0] && typeof this.value[0] === "object";
    },
  },
  methods: {
    updateInnerListByProp() {
      this.innerList = this.list.map((itm) => {
        let checked = this.findItmIndexFromList(itm, this.value) !== -1;
        return { ...itm, checked };
      });
    },
    handleChange(e, itm) {
      this.$set(itm, "checked", e.target.checked);
      this.$emit("change", this.innerValue);
    },

    removeItm(itm) {
      const i = this.findItmIndexFromList(itm, this.innerValue);
      if (i !== -1) {
        this.innerValue.splice(i, 1);
        this.$set(itm, "checked", false);
        this.$emit("change", this.innerValue);
      }
    },
    findItmIndexFromList(itm, list) {
      return this.valueIsObjects
        ? list.findIndex(
            (valueItem) => valueItem[this.valueKey] === itm.value[this.valueKey]
          )
        : list.findIndex((valueItem) => valueItem === itm.value);
    },
    addItm(itm) {
      this.innerValue.push(itm.value);

      this.$set(itm, "checked", true);
      this.$emit("change", this.innerValue);
    },
  },
  created() {
    this.updateInnerListByProp();
  },
  watch: {
    list() {
      this.updateInnerListByProp();
    },
  },
};
</script>

