function genProps() {
  return {
    autofocus: {
      type: Boolean,
    },
  };
}
function genComputed() {
  return {
    focusClass() {
      return {
        "c-field--focus": this.isFocus,
      };
    },
  };
}
function genMethods() {
  return {
    handleFocus() {
      this.isFocus = true;
      this.$emit("focus");
    },
    handleBlur() {
      this.isFocus = false;
      this.$emit("blur");
    },
    focus() {
      this.$refs.unit && this.$refs.unit.focus();
    },
    blur() {
      this.$refs.unit && this.$refs.unit.blur();
    },
  };
}

function factory() {
  return {
    props: genProps(),
    computed: genComputed(),
    methods: genMethods(),
  };
}

export default {
  factory,
  genProps,
  genComputed,
  genMethods
}
