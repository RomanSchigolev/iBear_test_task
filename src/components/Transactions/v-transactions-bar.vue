<template>
  <div class="transactions__bar">
    <div class="transactions__header">
      <h2>Transactions</h2>
    </div>
    <div class="transactions__listing">
      <ul class="transactions__list">
        <li class="transactions__item">
          <h3 class="transactions__title">Title-1</h3>
        </li>
        <li class="transactions__item">
          <h3 class="transactions__title">Title-2</h3>
        </li>
        <li class="transactions__item">
          <h3 class="transactions__title">Title-3</h3>
        </li>
        <li class="transactions__item">
          <h3 class="transactions__title">Title-4</h3>
        </li>
        <li class="transactions__item">
          <h3 class="transactions__title">Title-5</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "v-transactions"
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
    padding: 30px 50px;
    max-height: 400px;
    overflow-y: scroll;
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