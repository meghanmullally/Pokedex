import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueApollo from "vue-apollo"
import ApolloClient from "apollo-boost";


Vue.use(VueApollo)


const apolloClient = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/"
});
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");