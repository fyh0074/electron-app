import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import 'normalize.css'
import './assets/common.css'

const app= createApp(App).use(createPinia())
app.mount('#app')