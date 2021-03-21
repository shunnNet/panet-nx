<script>
import ProviderFactory from '@/components/compositor/provider.js'
import cUnitProxyFactory from '@/components/compositor/cInputProxy.js'
import { CInput } from '@/components/libs'

const Provider = ProviderFactory.factory()
const { ValidationProvider } = Provider.components
const { name, mode, vid, rules, slim } = Provider.props
const { _genContent } = Provider.methods

const scopedSlots = ['before', 'prepend', 'append', 'after', 'error']
const cInputProps = {
  type: {
    type: String,
    default: () => 'text',
    validator: (v) => {
      return ['text', 'password', 'tel', 'email'].includes(v)
    },
  },
  placeholder: {
    type: String,
  },
}
const cUnitProxy = cUnitProxyFactory.factory(CInput, cInputProps, scopedSlots)

const {
  value,
  label,
  readonly,
  disabled,
  required,
  autofocus,
  type,
  placeholder,
} = cUnitProxy.props

const { _genUnitContent } = cUnitProxy.methods

export default {
  components: {
    ValidationProvider,
    CInput,
  },
  props: {
    name,
    mode,
    vid,
    rules,
    slim,
    value,
    label,
    readonly,
    disabled,
    required,
    autofocus,
    type,
    placeholder,
  },
  methods: {
    _genContent,
    _genUnitContent,
  },
  render(h) {
    return this._genContent(this._genUnitContent)
  },
}
</script>
