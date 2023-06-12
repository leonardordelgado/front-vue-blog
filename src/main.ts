
import Vue ,  { createApp } from 'vue'
import App from './App.vue'
import roteador from './router'
import { store, key} from './store'


import VueAnalytics from 'vue-analytics'


App.use( VueAnalytics,{
    id: "G-JN9LM1KPMV"
})

createApp(App)
    .use(roteador)
    .use(store,key)
    .mount('#app')
