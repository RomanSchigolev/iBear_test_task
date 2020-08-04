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
    height: 100vh;
    background-color: #D9F1F6;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
