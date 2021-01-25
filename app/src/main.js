import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './state/store'
import axios from 'axios'

Vue.use(Vuex);
vue.ues(axios);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
