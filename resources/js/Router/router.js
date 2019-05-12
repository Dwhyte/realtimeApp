import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/Home.vue'
import Login from '../components/login/Login.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
    { path: '*', component: NotFound },
    { path: '/', component: Home },
    { path: '/login', component: Login }
]


const router = new VueRouter({
    routes,
    mode: 'history'
})


export default router
