import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

let app = createApp(App);

//1、使用router
app.use(router)
app.mount('#app');
