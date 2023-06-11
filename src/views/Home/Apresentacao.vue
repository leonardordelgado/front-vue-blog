<template>
    <div class="container">
        <h3>Olá, meu nome é</h3>
        <h1>Leonardo Resende Delgado</h1>
        <h2>e sou um desenvolvedor full stack.</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Apresentacao-home'
})
</script>
<style scoped>


 h1 {
    font-family: Farro, sans-serif;
    font-size: 2.8em;
}
@media (max-width: 600px){ 
    h1{
        font-size: 2em;
    }
    h3{
        font-size: 1.5em;
    }
    h2{
        font-size: 1.6em;
    }
}
</style>