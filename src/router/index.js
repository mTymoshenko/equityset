import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/home";

import Markets from "../views/markets";
import Notifications from "../views/markets/notifications";
import Profile from "../views/markets/profile";
import Pricing from "../views/markets/pricing";
import Portfolio from "../views/markets/portfolio";

Vue.use(VueRouter);

const routes = [
  {
    path: "/markets",
    name: "markets",
    component: Markets,
    redirect: "/markets/notifications",
    children: [
      {
        path: "profile",
        name: "profile",
        component: Profile,
      },
      {
        path: "pricing",
        name: "pricing",
        component: Pricing,
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications,
      },
      {
        path: "portfolio",
        name: "porfolio",
        component: Portfolio,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
