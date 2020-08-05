<template>
  <div id="app">
    <div class="hero">
      <v-widget/>
    </div>
  </div>
</template>

<script>
  import vWidget from "@/components/Widget/v-widget";
  export default {
    name: "app",
    components: {
      vWidget
    }
  }
</script>

<style>
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 70px;
  }
</style>
