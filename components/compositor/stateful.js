function genProps() {
  return {
    readonly: {
      type: Boolean,
      default: () => false,
    },
    disabled: {
      type: Boolean,
      default: () => false,
    },
    required: {
      type: Boolean,
      default: () => false,
    },
  }
}

function genComputed() {
  return {
    stateClass() {
      return {
        "c-field--readonly": this.readonly,
        "c-field--disabled": this.disabled,
        "c-field--required": this.required,
      };
    }
  }
}

function factory() {
  return {
    props: genProps(),
    computed: genComputed()
  }
}

export default {
  factory,
  genProps,
  genComputed,
}
