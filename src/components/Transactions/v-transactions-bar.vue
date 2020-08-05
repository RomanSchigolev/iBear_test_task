<template>
  <div class="transactions__bar">
    <div class="transactions__header">
      <h2>Transactions</h2>
    </div>
    <div class="transactions__listing">
      <h2
        class="transactions__empty"
        v-if="TRANSACTIONS.length === 0"
      >
        There is no transactions
      </h2>
      <ul class="transactions__list">
        <li
          class="transactions__item"
          v-for="transaction in TRANSACTIONS"
          :key="transaction.id"
        ><h3 class="transactions__title">{{transaction.title}}</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "v-transactions",
    computed: {
      ...mapGetters([
        "TRANSACTIONS"
      ])
    }
  }
</script>

<style scoped>
  .transactions__bar {
    background-color: #ffffff;
    border-radius: 15px;
    text-align: left;
  }

  .transactions__header h2 {
    border-bottom: 1px solid #a5a5a5;
    padding: 20px 50px;
    letter-spacing: 1px;
  }

  .transactions__listing {
    padding: 30px 50px 180px;
  }

  .transactions__empty {
    color: #a5a5a5;
    text-align: center;
    font-size: 25px;
    text-transform: uppercase;
  }

  .transactions__item {
    border-bottom: 1px solid #a5a5a5;
    padding-bottom: 30px;
  }

  .transactions__item:not(:last-child) {
    margin-bottom: 30px;
  }

  .transactions__title {
    font-size: 18px;
    letter-spacing: 1px;
  }
</style>