import Vue from 'vue'

const requireFunction = require.context('../assets/images/svg?inline', false, /\.svg$/)

requireFunction.keys().forEach((req) => {
  const component = requireFunction(req)
  const componentName = extractComponentName(req)
  Vue.component(componentName, component)
})


function extractComponentName(path) {
  let filename = path.replace("./", "").replace(".svg", "")
  let firstLetter = filename[0].toUpperCase()
  return firstLetter + filename.slice(1)
  
}