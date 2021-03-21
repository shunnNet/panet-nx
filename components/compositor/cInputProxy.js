import { proxyScopedSlot } from '@/assets/scripts/helpers/scopedSlots.js'
import baseUtilFactory from './baseUtility.js'
import statefulFactory from './stateful.js'
import focusableFactory from './focusable.js'

const { value, label, name } = baseUtilFactory.genProps()
const { readonly, disabled, required } = statefulFactory.genProps()
const { autofocus } = focusableFactory.genProps()

function genProps(append = {}) {
  return {
    name,
    value,
    label,
    readonly,
    disabled,
    required,
    autofocus,
    ...append
  }
}

function genMethods(unit, scopedSlots, proxyProps) {
  
  return {
    _genUnitContent(props) {
      const propsDown = {}
      for (const key in proxyProps) {
        propsDown[key] = this[key]
      }
      // console.log(unit, props.errors);

      return this.$createElement(unit, {
        props: {
          ...propsDown,
          errors: props.errors
        },
        scopedSlots: proxyScopedSlot(this.$scopedSlots, scopedSlots),
        attrs: this.$attrs,
        on: {
          ...this.$listeners
        },
        ref: 'unit'
      })
    }
  }
}

function factory(unit, appendProps = [], scopedSlots = []) {
  const proxyProps = genProps(appendProps)
  return {
    props: proxyProps,
    methods: genMethods(unit, scopedSlots, proxyProps)
  }
}

export default {
  factory,
  genMethods,
  genProps
}
