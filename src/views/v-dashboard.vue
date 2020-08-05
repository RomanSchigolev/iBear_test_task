<template>
  <ul class="widget__list">
    <li class="widget__item widget__item--weather">
      <v-weather-bar/>
    </li>
    <li class="widget__item widget__item--transactions">
      <v-transactions-bar/>
    </li>
  </ul>
</template>

<script>
  import vWeatherBar from "@/components/Weather/v-weather-bar";
  import vTransactionsBar from "@/components/Transactions/v-transactions-bar";

  export default {
    name: "v-dashboard",
    components: {
      vWeatherBar,
      vTransactionsBar
    }
  }
</script>

<style>
  .widget__item {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .widget__item:not(:last-child) {
    margin-bottom: 50px;
  }
</style>