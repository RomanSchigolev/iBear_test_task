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
    background-color: #d9f1f6;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
