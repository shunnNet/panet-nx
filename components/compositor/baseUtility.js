function genProps(){
  return {
    value: {},
    name: {
      type: String
    },
    label: {
      type: String
    }
  }
}
function factory (){
  return {
    props: genProps()
  }
}

export default {
  factory,
  genProps
}