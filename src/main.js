// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import { directive as onClickOutside } from "vue-on-click-outside";
import VueRouter from "vue-router";

Vue.directive("on-click-outside", onClickOutside);
Vue.use(VueRouter);

const routes = [{ path: "/", component: App }];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  el: "#app",
  components: { App },
  template: "<App/>"
});
