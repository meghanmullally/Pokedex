import Vue from 'vue';
import App from './App.vue';
import axios from 'axios'
import VueAxios from 'vue-axios'

 
Vue.use(VueAxios, axios)

import 'bootstrap';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/pokemon?limit=151'


Vue.use(router);
import router from "./router";

require('./assets/styles.css')

Vue.config.productionTip = false;

Vue.component('pokemon-card', {
  props: ['cardTitle'],
  template: '<h3>{{postTitle}}</h3>'
});

Vue.component('button-counter', {
  data: function() {
    return {type: Number, count: 0}
  },
  template: '<button v-on:click="count++">You clicked me {{count}} times.</button>'
})


new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
  render: h => h(App)
})

