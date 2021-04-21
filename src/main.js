import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import router from './router';
import { store } from './store/store';

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  store: store,
  router,
  render: (h) => h(App),
}).$mount('#app');
