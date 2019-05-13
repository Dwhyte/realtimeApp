import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/Home.vue'
import Login from '../components/login/Login.vue'
import SignUp from '../components/login/signup.vue'
import NotFound from '../components/NotFound.vue'
import Forum from '../components/forum/Forum'
import Logout from '../components/login/Logout.vue'

const routes = [
    { path: '*', component: NotFound },
    { path: '/', component: Home },
    { path: '/login', component: Login },
    {
        path: '/signup',
        component: SignUp
    },
    {
        path: '/forum',
        name: 'forum',
        component: Forum
    },
    {
        path: '/logout',
        name: 'logout',
        component: Logout
    }
]


const router = new VueRouter({
    routes,
    mode: 'history'
})


export default router
