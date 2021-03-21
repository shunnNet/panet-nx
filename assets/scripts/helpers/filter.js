const utils = require("./utils")

function formalizeConditions(conditions){
  return conditions.map((item) => ({ field: item.field, func: genFilter(item.funcName, item.values) }))
}

function genFilter(funcName, params) {
  return function (target){
    return getFilterFunction(funcName)(target, ...params)
  }
}

function getFilterFunction(funcName) {
  return utils[funcName] ? utils[funcName] : () => false
}

function filt(arr, conditions){
  const r = conditions.map(con => con.func(arr[con.field]) )
  return r.every(result => result === true)
  // return true
}


// const data = [ "Lorem in the house", 123, "Lorem in the house", 123 ]
// const sample = [
//   {
//     field: 0,
//     values: ["Lorem"],
//     funcName: "startsWith"
//   },
//   {
//     field: 1,
//     values: [23],
//     funcName: "moreThan"
//   },
// ]



module.exports = {
  filt,
  formalizeConditions
}

