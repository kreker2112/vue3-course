import MainPage from '../pages/MainPage.vue'
import PostPage from '../pages/PostPage.vue'
import AboutPage from '../pages/About.vue'
import PostIdPage from '../pages/PostIdPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/posts',
        component: PostPage,
    },
    {
        path: '/about',
        component: AboutPage,
    },
    {
        path: '/posts/:id',
        component: PostIdPage,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
