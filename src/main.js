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
  routes,
  mode: 'history',
  base: 'https://www.full-stack-to-do.herokuapp.com/',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
