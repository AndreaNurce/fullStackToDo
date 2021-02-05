import logIn from './components/logIn.vue'
import logOut from './components/logOut.vue'
import Home from './components/home.vue'


export const routes = [
    { 'path': '/', component: Home },
    { 'path': '/logIn', component: logIn },
    { 'path': '/logOut', component: logOut },

];