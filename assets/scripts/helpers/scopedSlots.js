export function proxyScopedSlot(scopedSlot, slotScopes = []) {
  let result = {};
  slotScopes.forEach((name) => {
    if (scopedSlot[name]) {
      result[name] = (props) => scopedSlot[name](props);
    }
  });
  return result;
}
