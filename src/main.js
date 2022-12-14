import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.less'
import router from './router'
import store from './store'
import 'amfe-flexible'
createApp(App).use(store).use(router).mount('#app')
