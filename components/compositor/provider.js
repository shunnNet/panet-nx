import { ValidationProvider } from "vee-validate";

function genProps(){
  return {
    name: {
      type: String,
      requied: true
    },
    mode: {
      type: String,
    },
    vid: {
      type: String
    },
    rules: {
      requied: true
    },
    slim: {
      type: Boolean,
      default: () => true
    }
  }
}

function genComponents(){
  return { ValidationProvider }
}

function _genContent(factory){
  return this.$createElement(ValidationProvider, {
    props: {
      slim: this.slim,
      name: this.name,
      rules: this.rules,
      vid: this.vid,
      mode: this.mode,
    },
    ref: "validator",
    scopedSlots: {
      default: (props) => factory(props),
    },
  });
}

function genMethods(){
  return {
    _genContent
  }
}
function factory (){
  return {
    props: genProps(),
    components: genComponents(),
    methods : genMethods(),
    
  }
}

export default {
  factory,
  genProps,
  genComponents,
  genMethods
}