<template>
    <div class="ajuste">
        <div class="email">
            <p>
                <a href="mailto:leoresende2010@hotmail" class="link">
                    <i class="bi bi-envelope-at"></i>
                    leoresende2010@hotmail
                </a>
                
            </p>
        </div>
        <div class="social">
            <p>Acompanhe-me:
                <a href="https://www.instagram.com/desenvolvedor.l.delgado/" class="link" target="_blank">
                    <i class="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/leonardo-resende-bbb670204/" class="link" target="_blank">
                    <i class="bi bi-linkedin"></i>
                </a>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "footer-blog"
})
</script>
<style scoped>
.ajuste{
    display: flex;
    height: 50%;
}
.email {
    width: 50%;
    display: flex;
    align-items: center;
    font-size: 1.3em;
    justify-content: space-evenly;
    font-family: 'Source Sans Pro', sans-serif;
    margin-top: 4rem;
}

.social {
    width: 50%;
    display: flex;
    align-items: center;
    font-size: 1.4em;
    margin-left: 10px;
    font-family: 'Source Sans Pro', sans-serif;
    justify-content: space-evenly;
    margin-top: 4rem;
}
.link{
    text-decoration: none;
    color: inherit;
    font-size: 1.6em;
    margin: 6px;
    width: 30px;
}
@media (max-width: 600px){
    .ajuste{
    display: block;
    height: 30%;
    }
    .email {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 1em;
    justify-content: space-evenly;
    font-family: 'Source Sans Pro', sans-serif;
    margin-top: 0;
    padding-top: 2rem;
    }
    .social {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 1.4em;
    margin-left: 10px;
    font-family: 'Source Sans Pro', sans-serif;
    justify-content: space-evenly;
    margin-top: 0;
    }
    .link{
    text-decoration: none;
    color: inherit;
    font-size: 1.6em;
    margin: 6px;
    width: 30px;
    }
}
</style>