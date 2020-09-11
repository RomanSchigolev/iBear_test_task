export default {
  TRANSACTIONS(state) {
    return state.transactions.filter(transaction => transaction.title !== "")
  }
}