export default function (to, from, savedPosition) {
  if (to.name === 'query') {
    console.log(savedPosition);
    return savedPosition
  }
  return { x: 0, y: 0 }
}
