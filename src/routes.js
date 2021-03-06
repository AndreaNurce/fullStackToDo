import logIn from './components/logIn.vue'
import signUp from './components/signUp.vue'
import notFound from './components/notFound.vue'
import email from './components/reset/email.vue'
import password from './components/reset/password.vue'

export const routes = [
    {
        'path': '/', component: () => import('./components/home/home.vue'), beforeEnter(to, from, next) {
            if (localStorage.getItem('token')) {
                next()
            } else {
                next({
                    name: "logIn"
                });
            }
        }},
    { 'path': '/logIn',name :'logIn' ,component: logIn },
    { 'path': '/signUp', component: signUp },
    { 'path': '/404', component: notFound },
    { 'path': '/accounts/email', component: email },
    { 'path': '/accounts/password', component: password, beforeEnter(to, from, next) {
        if (localStorage.getItem('recoverToken') && localStorage.getItem('recoverEmail')  ) {
        next()
    } else {
        next({
            name: "logIn"
                });
    }
        }},
    { 'path': '*', redirect: '/404' },
    

];