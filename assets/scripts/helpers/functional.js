export function getClasses(context, classList = []) {
  return [...classList, context.data.staticClass || "", context.data.class];
}
export function getStyles(context, styleDict = []) {
  return [styleDict, context.data.staticStyle, context.data.style];
}

export function proxyFunctional(context, { classes=[], style=[] }){
  let result = {
    class: getClasses(context,classes),
    style: getStyles(context, style)
  }
  return result
}


export default {
  getClasses,
  getStyles,
};
