<template>
  <ul class="widget__list">
    <li class="widget__item widget__item--weather">
      <v-weather/>
    </li>
    <li class="widget__item widget__item--transactions">
    </li>
  </ul>
</template>

<script>
  import vWeather from "@/components/Weather/v-weather-bar"

  export default {
    name: "v-dashboard",
    components: {
      vWeather
    }
  }
</script>

<style scoped>
  .widget__item {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
</style>