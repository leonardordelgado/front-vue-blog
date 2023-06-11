<template>
    <div class="container">
        <div class="title " >
            <h1>Habilidades</h1>
        </div>
        <div class="sub-title" >
            <p>
                Quanto mais complexo for o desafio que se apresenta, mais eu me empolgo! Sou extremamente entusiasmado por
                tecnologia e inovação, e minhas habilidades interpessoais, como resiliência, criatividade, pensamento
                crítico e comunicação, complementam meu perfil profissional.
            </p>
        </div>
        <div class="conteudo" >
            <HabilidadesCards />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HabilidadesCards from './cards/HabilidadesCards.vue';
export default defineComponent({
    name: 'Habilidades-home',
    components:{
        HabilidadesCards
    }
})
</script>
<style scoped>
.container {
    margin: 8rem;
}

.title {
    padding: 2rem;
    cursor:default;
}

.sub-title {
    width: 40vw;
    margin: 1rem;
    margin-left: 3rem;
    cursor:default;
}

.conteudo {
    width: 70vw;
    margin: 1rem;
}
@media (max-width: 600px){ 
    .container {
    margin: 0;
}

.title {
    padding: 1rem;
}

.sub-title {
    width: 90vw;
    margin: 0;
    margin-left: 1rem;
    font-size: 1.3em;
}

.conteudo {
    width: 90vw;
    margin: 0;
}
 }

</style>