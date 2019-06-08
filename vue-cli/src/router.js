import Vue from "vue";
import Router from "vue-router";
import home from "./pages/home.vue";
import types from "./pages/types.vue";
import pokemon from "./pages/pokemon.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: home
    },
    {
      path: "/types",
      name: "types",
      component: types
    },
    {
      path: "/pokemon",
      name: "pokemon",
      component: pokemon
    }
  ]
});

