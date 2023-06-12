
import Vue ,  { createApp } from 'vue'
import App from './App.vue'
import roteador from './router'
import { store, key} from './store'
import  VueGtag  from 'vue-gtag-next'


//"G-JN9LM1KPMV"



createApp(App)
    .use(VueGtag,{
        property:{
            id: "G-JN9LM1KPMV"
        }
    } )
    .use(roteador)
    .use(store,key)
    .mount('#app')
