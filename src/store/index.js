import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transactions: []
  },
  mutations: {
    SET_TRANSACTION(state, transaction) {
      state.transactions.push(transaction);
    }
  },
  actions: {
    ADD_TRANSACTION({commit}, transaction) {
      commit("SET_TRANSACTION", transaction)
    }
  },
  getters: {
    TRANSACTIONS(state) {
      return state.transactions.filter(transaction => transaction.title !== "")
    }
  }
})
