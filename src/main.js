import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import { store } from './store/store'

Vue.config.productionTip = false

Vue.use(Vuex)

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
