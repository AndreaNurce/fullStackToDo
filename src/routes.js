import logIn from './components/logIn.vue'
import signUp from './components/signUp.vue'
import notFound from './components/notFound.vue'

export const routes = [
    {
        'path': '/', component: () => import('./components/home.vue'), beforeEnter(to, from, next) {
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
    { 'path': '*', redirect: '/404' },
    

];