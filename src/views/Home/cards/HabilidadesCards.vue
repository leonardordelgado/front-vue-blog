<template>
    <ul>
        <div class="card-habilidades">
            <div class="icon">
                <i class="bi bi-code-slash">
                    <p>DevOps</p>
                </i>
            </div>
            <div class="conteudo">
                <p>
                    Em minha rotina diária, aplico minhas competências em práticas de integração e entrega contínua (CI/CD)
                    com o auxílio do Jenkins, Docker e Zabbix, bem como possuo conhecimento em Grafana, SQL e a estrutura de
                    microserviços
                </p>
            </div>

        </div>
        <div class="card-habilidades">
            <div class="icon">
                <i class="bi bi-gear-wide-connected">
                    <p>Back-End</p>
                </i>
            </div>
            <div class="conteudo">
                <p>
                    Recentemente, adquiri habilidades como desenvolvedor Back-End utilizando Node.js. Além disso, aprimorei
                    meus conhecimentos em tecnologias como Redis para implementação de cache, Typescript e também tenho
                    experiência em PHP e JavaScript.
                </p>
            </div>

        </div>
        <div class="card-habilidades">
            <div class="icon">
                <i class="bi bi-display">
                    <p>Front-End</p>
                </i>
            </div>
            <div class="conteudo">
                <p>
                    Como desenvolvedor Front-End, utilizo uma variedade de tecnologias, como Vue.js,
                    Next.js, React e também frameworks populares como Bootstrap e Bulma, com o objetivo de criar páginas
                    interativas e dinâmicas que se adequem às demandas dos usuários.
                </p>
            </div>

        </div>

    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Cards-Habilidades',

})
</script>
<style scoped>
ul {
    display: flex;
    margin-bottom: auto;
}

.icon i {
    font-size: 25px;
    margin-left: 70px;
    display: flex;
    width: 300px;
    padding-top: 25px;
    padding-right: 5px;
}

.icon i::before {
    font-size: 25px;
    margin-left: 40%;
    margin-top: 8px;
    display: flex;
}

.icon p {
    margin-left: 10px;
    width: 250px;
}

.card-habilidades {
    border-left: 1px solid rgba(247, 246, 248, 0.824);
    width: 35%;
    display: block;
    margin: 2rem -5px 0px;
    color: rgb(5, 27, 44);
    margin-bottom: 20px;
}

.conteudo {
    margin-top: 10px;
    margin-left: 20px;
    padding-right: 20px;
    padding-bottom: 5px;
}
@media (max-width: 600px){   
    ul {
    display: block;
    }
    .card-habilidades {
    border-left: 1px solid rgba(247, 246, 248, 0.824);
    width: 100%;
    display: block;
    margin: 2rem -5px 0px;
    color: rgb(5, 27, 44);
    margin-bottom: 20px;
    font-size: 15px;
    }
   
 }
</style>