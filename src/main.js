import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './state/store'
import axios from 'axios'
import vueRouter from 'vue-router'
import { routes } from './routes.js'

Vue.use(vueRouter);
Vue.use(Vuex);
Vue.use(axios);

Vue.config.productionTip = false

const router = new vueRouter({
  mode :'history',
  routes,
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
