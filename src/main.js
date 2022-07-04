import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { registerBaseComponents, switchTheme } from "@/helpers";
import "@/assets/styles/main.scss";

Vue.config.productionTip = false;
/*
 * Theme apply:
 */
switchTheme("light");

/*
 * Automatically import and register Base components
 */
registerBaseComponents(Vue);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
