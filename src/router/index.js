// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
//
// Vue.use(VueRouter)
//
//   const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]
//
// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })
//
// export default router

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