import Vue from "vue";
import Router from "vue-router";
// @ts-ignore
import Home from "./views/Home.vue";
// @ts-ignore
import Dashboard from "./views/Dashboard.vue";
// @ts-ignore
import ActiveKeep from "./views/ActiveKeep.vue";
// @ts-ignore
import ActiveVault from "./views/ActiveVault.vue";
import { authGuard } from "@bcwdev/auth0-vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      beforeEnter: authGuard
    },
    {
      path: "/activekeep",
      name: "activekeep",
      component: ActiveKeep,
      beforeEnter: authGuard
    },
    {
      path: "/activevault/:id",
      name: "activevault",
      component: ActiveVault,
      beforeEnter: authGuard
    }
  ]
});
