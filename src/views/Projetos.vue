<template>
    <div >
        <ConstrucaoPag />
    </div>
    
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import ConstrucaoPag from '@/components/ConstrucaoPag.vue';
    export default defineComponent({
        name: 'Projetos-curriculo',
        components:{
            ConstrucaoPag
        }
    })
</script>
<style scoped>

</style>