import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions';
import stocks from './modules/stocks';
import portifolio from './modules/portifolio';

Vue.use(Vuex);

export default new Vuex.Store({
  actions: actions,
  modules:{
    stocks,
    portifolio
  }
});
