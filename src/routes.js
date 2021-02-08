import logIn from './components/logIn.vue'
import signUp from './components/signUp.vue'
import Home from './components/home.vue'

export const routes = [
    { 'path': '/', component: Home },
    { 'path': '/logIn', component: logIn },
    { 'path': '/signUp', component: signUp },

];