import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import vuetify from "./plugins/vuetify";
import "./plugins/bootstrap-vue";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
const axios = require("axios");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
