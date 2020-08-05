import Vue from "vue";
import Router from "vue-router";

import Dashboard from "@/views/v-dashboard";
import Transactions from "@/views/v-transactions";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/dashboard",
      component: Dashboard
    },
    {
      path: "/transactions",
      component: Transactions
    }
  ]
});