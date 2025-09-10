import { createWebHistory, createRouter } from 'vue-router'

import HomePage from './Pages/HomePage.vue';
import SignUpPage from './components/SignUpPage.vue';
import LoginPage from './Pages/LoginPage.vue';
import NewAddedTaskMainLayout from './components/NewAddedTaskMainLayout.vue';
import FinishedTaskMainLayout from './components/FinishedTaskMainLayout.vue';
import DeletedTaskMainLayout from './components/DeletedTaskMainLayout.vue';
import ForgotPassword from './components/ForgotPassword.vue';




const routes = [
    {
        path: "/signup",
        component: SignUpPage,
    },
    {
        path: "/",
        component: LoginPage,
    },

    {
        path: "/home",
        component: HomePage,
    },
    {
        path: "/home/newtask",
        component: NewAddedTaskMainLayout,
    },
    {
        path: "/home/finished",
        component: FinishedTaskMainLayout,
    },
    {
        path: "/home/deleted",
        component: DeletedTaskMainLayout,
    },
    {
        path: "/forgotpassword",
        component: ForgotPassword
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;