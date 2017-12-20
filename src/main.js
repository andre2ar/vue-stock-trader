import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueRosource from 'vue-resource'
import {routes} from './router';

import store from './store/store'

Vue.use(VueRouter);
Vue.use(VueRosource);

Vue.http.options.root = 'https://vue-stock-trader-ac489.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
});
