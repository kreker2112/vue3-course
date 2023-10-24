import Main from '../pages/MainPage.vue'
import PostPage from '../pages/PostPage.vue'
import About from '../pages/About.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/pages',
        component: PostPage,
    },
    {
        path: '/about',
        component: About,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
