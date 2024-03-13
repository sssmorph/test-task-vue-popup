import { createRouter, createWebHistory } from 'vue-router'

const formPage = () => import ("./components/FormPage.vue");
const mainPage = () => import("./components/MainPage.vue");
const routes= [
    {
        path: "/",
        name: "main",
        component: mainPage,
    },
    {
        path: "/formPage",
        name: "formPage",
        component:formPage,
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router