import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("@/views/v-dashboard")
    },
    {
      path: "/transactions",
      name: "Transactions",
      component: () => import("@/views/v-transactions")
    }
  ]
});