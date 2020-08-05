<template>
  <ul class="widget__list">
    <li class="widget__item widget__item--textField">
      <v-text-field/>
    </li>
    <li class="widget__item widget__item--transactions">
      <v-transactions-bar/>
    </li>
  </ul>
</template>

<script>
  import vTextField from "@/components/TextField/v-text-field"
  import vTransactionsBar from "@/components/Transactions/v-transactions-bar";

  export default {
    name: "v-transactions",
    components: {
      vTextField,
      vTransactionsBar
    }
  }
</script>

<style scoped>

</style>