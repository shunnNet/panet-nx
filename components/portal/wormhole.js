import Vue from "vue"

const transports = Vue.observable({})

function open(transport) {
  const { to, passengers } = transport
  transport.passengers = Object.freeze(passengers) // why ?

  if (!transports[to]) {
    transports[to] = []
  }
  const newTransport = [...transports[to]]
  const nowIndex = getTransportIndex(transport)
  if (nowIndex > -1) {
    newTransport.splice(nowIndex, 1, transport)
  } else {
    newTransport.push(transport)
  }
  transports[to] = newTransport
}

function close(transport, force = false) {
  const { to } = transport

  if (!transports[to]) {
    return
  }
  if (force){
    transports[to] = []
  }else {
    const newTransport = [...transports[to]]
    const nowIndex = getTransportIndex(transport)
    nowIndex > -1 && transports[to].splice(nowIndex, 1)
    transports[to] = newTransport
  }
}

function getTransportIndex({to, from}){
  return transports[to].findIndex(transport => transport.from === from)
}

export default {
  transports,
  open,
  close
}
