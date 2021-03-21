<script>
import ProviderFactory from '@/components/compositor/provider.js'
import cUnitProxyFactory from '@/components/compositor/cInputProxy.js'
import { CSelect } from '@/components/libs'

const Provider = ProviderFactory.factory()
const { ValidationProvider } = Provider.components
const { name, mode, vid, rules, slim } = Provider.props
const { _genContent } = Provider.methods

const scopedSlots = ['errors']
const appendProps = {
  options: {
    type: Array,
  },
  valueKey: {
    type: String,
  },
  dropMaxHeight: {
    type: Number,
  },
  placeholder: {
    type: String,
  },
}

const cUnitProxy = cUnitProxyFactory.factory(CSelect, appendProps, scopedSlots)

const {
  value,
  label,
  readonly,
  disabled,
  required,
  autofocus,
  options,
  valueKey,
  dropMaxHeight,
  placeholder,
} = cUnitProxy.props

const { _genUnitContent } = cUnitProxy.methods

export default {
  components: {
    ValidationProvider,
    CSelect,
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
    options,
    valueKey,
    dropMaxHeight,
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
