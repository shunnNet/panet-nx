export function getClasses(context, classList = []) {
  return [...classList, context.data.staticClass || "", context.data.class];
}
export function getStyles(context, styleDict = []) {
  return [styleDict, context.data.staticStyle, context.data.style];
}


export default {
  getClasses,
  getStyles,
};
