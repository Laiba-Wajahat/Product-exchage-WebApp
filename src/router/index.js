import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../Pages/Home.vue'
import AboutPage from '../Pages/About.vue'
import FaqPage from '../Pages/Faq.vue'
import LoginPage from '../Pages/Login.vue'
import RegisterPage from '../Pages/Register.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    },
    {
        path: '/Faq',
        name: 'FAQ',
        component: FaqPage
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;