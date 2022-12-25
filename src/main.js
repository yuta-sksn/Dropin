import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/main.scss'
import './assets/css/font.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
