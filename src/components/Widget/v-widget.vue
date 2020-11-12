<template>
  <div class="widget">
    <div class="widget__navigation">
      <v-navigation />
    </div>
    <div class="widget__content">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import vNavigation from "@/components/Navigation/v-navigation";

export default {
  name: "v-widget",
  components: {
    vNavigation,
  },
};
</script>

<style scoped>
.widget {
  display: flex;
  width: 100%;
}

.widget__navigation {
  margin-right: 67px;
}

.widget__content {
  width: 760px;
  text-align: center;
}
</style>