export const state = () => ({
  webConfig: {
    darkMode: true,
  },
})

export const mutations = {
  SET_DARK_MODE(state, value) {
    state.webConfig.darkMode = value
  },
}

export const actions = {
  setDarkMode({ commit }, { value }) {
    commit('SET_DARK_MODE', value)
  },
}
