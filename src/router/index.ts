import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Home from '@/views/Home.vue'
import Contatos from '@/views/Contatos.vue'
import Projetos from '@/views/Projetos.vue'
import Certificados from '@/views/Certificados.vue'
import PostCompleto from '@/views/Home/PostCompleto.vue'
const rotas: RouteRecordRaw []=[
    {
        path:'/',
        name: 'home',
        children:[
            {
                path:'/',
                name: 'Home',
                component: Home
            },
            {
                path:'contatos',
                name: 'Contatos',
                component: Contatos
            },
            {
                path:'projetos',
                name: 'Projetos',
                component: Projetos
            },
            {
                path:'certificados',
                name: 'Certificados',
                component: Certificados
            },
            {
                path:'poster/:id',
                name: 'poster-completo',
                component: PostCompleto
            }
        ]
    }

]
const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
  })
export default roteador;