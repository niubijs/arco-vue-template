import {createApp} from 'vue';
import ArcoVue from '@arco-design/web-vue';
import {createPinia} from 'pinia';

import App from './App.vue';
import router from './router';
import '@/assets/tailwind.css';
import '@arco-design/web-vue/dist/arco.css';
import '@/assets/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ArcoVue)

app.mount('#app')
