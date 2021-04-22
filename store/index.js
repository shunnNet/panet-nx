export const states = () => ({
  supportWebp: false,
})

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    commit('SET_SUPPORT_WEBP', req.headers.accept.includes('image/webp'))
  },
}

export const mutations = {
  SET_SUPPORT_WEBP(state, toState = false) {
    state.supportWebp = toState
  },
}
