<template>
    <div >
        <section class="apresentacao" >
            <Apresentacao />
        </section>
        <section class="habilidades">
            <Habilidades />
        </section>
        <section class="posters">
            <CarouselPost />
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Apresentacao from './Home/Apresentacao.vue';
import Habilidades from './Home/Habilidades.vue'
import CarouselPost from './Home/carousels/CarouselPost.vue';
export default defineComponent({
    name: 'Home-curriculo',
    components:{
        Apresentacao,
        CarouselPost,
        Habilidades
        
    }
})
</script>
<style scoped>
.apresentacao {
    margin-top:15% ;
    margin-left: 17%;
    margin-bottom: 25vh;
    display: block;
    color: white;
}
.habilidades{
    width: 100vw;
    min-height: 60vh;
    background: var(--header-color);
}
.posters{

    margin: auto;
    margin-top: 5%;
    width: 85%;
    min-height: 80vh;
}
@media (max-width: 600px){    
    .apresentacao {
    margin-top:30% ;
    margin-left: 5%;
    margin-bottom: 15vh;
    display: block;
    color: white;
    }
    .habilidades{
    width: 100vw;
    min-height: 50vh;
    background: var(--header-color);
    }
    .posters{
    margin: auto;
    margin-top: 5%;
    width: 85%;
    min-height: 40vh;
    }
}

</style>