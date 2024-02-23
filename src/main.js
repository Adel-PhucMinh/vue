import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createWebHashHistory, createRouter } from 'vue-router'
import HomeView from './pages/HomeView.vue'
import LoginView from './pages/LoginView.vue'
import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
const routes = [
    {
        path: '/',
        name: 'home',
        component:HomeView
    },
    {
        path: '/login',
        component:LoginView
    }
    
]

/* add icons to the library */
library.add(...all)

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router())
app.mount('#app')

createApp(App).mount('#app')

//boris.rose.dev@gmail.com