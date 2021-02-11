import logIn from './components/logIn.vue'
import signUp from './components/signUp.vue'
import Home from './components/home.vue'
import notFound from './components/notFound.vue'

export const routes = [
    { 'path': '/', component: Home },
    { 'path': '/logIn', component: logIn },
    { 'path': '/signUp', component: signUp },
    { 'path': '/404', component: notFound },
    { 'path': '*', redirect: '/404' },
    

];