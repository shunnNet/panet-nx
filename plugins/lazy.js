import Vue from "vue"

Vue.directive("lazy", {
  inserted: function (el, {value}) {
    el.style.transition = "opacity .5s"
    el.style.opacity = 0
    const img = new Image()
    img.src = value
    img.onload = function(){
      el.style.opacity = 1
    }
  }
})
