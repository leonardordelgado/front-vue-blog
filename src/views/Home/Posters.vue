<template>
    <div class="container">
        <PostersCards />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostersCards from './cards/PostersCards.vue';
export default defineComponent({
    name: 'Poster-home',
    components:{
        PostersCards
    }

})
</script>
<style scoped>
.container {
    margin: 8rem;
}


</style>