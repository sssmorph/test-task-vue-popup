import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-indigo/theme.css';
const app = createApp(App)
// app.use(router)
app.use(PrimeVue).use(router);
app.mount("#app");