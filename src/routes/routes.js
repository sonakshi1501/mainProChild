import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Deserts from '@/views/Deserts.vue'
import GithubUsers from '@/views/GithubUsers.vue'


const history = createWebHistory()
const routes = [{
    path: '/',
    name: "Home",
    component: Home,
},
{
    path: '/deserts',
    name: "Deserts",
    component: Deserts
},
{
    path: '/github-users',
    name: "Github-Users",
    component: GithubUsers
},
]
const router = createRouter({ history, routes });
export default router;