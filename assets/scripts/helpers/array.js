function rotate(arr = [], k = 1) {
  let copy = arr.slice(0)
  if (k <= arr.length) {
    copy.unshift(...copy.splice(-k))
    return copy
  } else {
    let counter = 0
    while (counter < k) {
      copy.unshift(...copy.splice(-1))
      ++counter
    }
    return copy
  }
}

function getRotateNext(arr = [], index = 0, num = 0) {
  let next = (index + num) % arr.length
  return next >= 0 ? arr[next] : arr[arr.length + next]
}


function getRotateNextIndex(arr = [], index = 0, num = 0) {
  let next = (index + num) % arr.length
  return next >= 0 ? next : arr.length + next
}

// 將陣列補到指定的倍數
export const fillListToTimes = (list = [], times = 3, fillBy = {}) => {
  const lastSpace = times - (list.length % times)
  return [...list, ...new Array(lastSpace).fill(fillBy)]
}

// 將陣列補到指定的倍數，並加上 meta 資訊
// 經常搭配需要加上 "敬請期待" 的輪播圖一起使用
export const fillListToTimesWithMeta = (list = [], times = 3, fillBy = {}) => {
  let lastSpace = times - (list.length % times)

  lastSpace = (lastSpace === times) && list.length !== 0 ? 0 : lastSpace
  // No fill to times when length is not 0 && list.length % times is 0

  const protoWithMeta = list.map((item) => ({ data: item, isFill: false }))
  const fillWithMeta = new Array(lastSpace).fill({ data: fillBy, isFill: true })

  return [...protoWithMeta, ...fillWithMeta]
}


module.exports = {
  rotate,
  getRotateNext,
  getRotateNextIndex,
  fillListToTimes,
  fillListToTimesWithMeta
}
