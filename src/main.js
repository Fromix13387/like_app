import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/About',
            component: About
        },
        {
            path: '/Catalog',
            component: Catalog,
        },
        {
            path: '/Contact',
            component: Contact
        },
        {
            path: '/printer/:id',
            component: CardInfo,
            props: true
        },
        {
            path: '/Basket',
            component: Basket,
        },
        {
            path: '/Messages',
            component: Messages,
        }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
