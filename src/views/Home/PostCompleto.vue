<template>
    <div v-for="(post, index) in posters" :key="index">
        <h1>{{ post.titulo }}</h1>
        <h3>{{ post.descricao }}</h3>
        <div class="container">
            <div class="text">
                <p>
                    {{ post.texto }}
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { useStore } from '@/store';
    import { computed, defineComponent, watch } from 'vue';
    import {  useRoute } from 'vue-router';

    export default defineComponent({
        name: 'poster-completo',
        setup(){
            const store = useStore()
            const route = useRoute()
            let id =  route.params.id
            const posters = computed(()=> store.state.post.filter(i=> i._id == id))
            return{
                posters
            }
        }
    })
</script>
<style scoped>
    h1, h3{
        color: white;
        text-align: center;
        margin-top: 15px;
        font-family: 'Source Sans Pro', sans-serif;
    }
    .container{
        margin-top: -15px;
        width: 100%;
    }
    .text{
        margin: 4rem;
        color: white;
        border: solid 2px white;
        padding: 1rem;
        border-radius: 10px;
    }
   
</style>