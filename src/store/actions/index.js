export default {
  ADD_TRANSACTION({commit}, transaction) {
    commit("SET_TRANSACTION", transaction)
  }
}