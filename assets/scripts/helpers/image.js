
export const loadImg = (src) => {
  return new Promise( (resolve, reject) => {
    const img = new Image()
    img.onload = function (){
      resolve()
    }
    img.onerror = function () {
      reject()
    }
    img.src = src
  })
  
}