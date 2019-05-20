import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/Home.vue'
import Login from '../components/login/Login.vue'
import SignUp from '../components/login/signup.vue'
import NotFound from '../components/NotFound.vue'
import Forum from '../components/forum/Forum'
import Read from '../components/forum/Read.vue'
import CreateCategory from '../components/category/createCategory'
import Create from '../components/forum/Create.vue'
import Logout from '../components/login/Logout.vue'

const routes = [{
        path: '*',
        component: NotFound
    },
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
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
        path: '/question/:slug',
        name: 'read',
        component: Read
    },
    {
        path: '/ask',
        component: Create
    },
    {
        path: '/category',
        component: CreateCategory
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
