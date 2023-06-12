<template>
    <div class="header">
        <div class="social">
            <p>Acompanhe-me:
                <a href="https://www.instagram.com/desenvolvedor.l.delgado/" class="link" target="_blank" >
                    <i class="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/leonardo-resende-bbb670204/" class="link" target="_blank">
                    <i class="bi bi-linkedin"></i>
                </a>
            </p>
        </div>
        <div class="logo">
            <RouterLink to="/" > <img src="@/assets/img/logo.png" alt="Logo blog leonardo"></RouterLink>
        </div>
        <div class="git">
            <a href="https://github.com/leonardordelgado" target="_blank" rel="noopener noreferrer" class="ButtonFixedTop__Btn-sc-1s8kp9f-0 gitbut">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 32 32"
                    height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16 5.343c-6.196 0-11.219 5.023-11.219 11.219 0 4.957 3.214 9.162 7.673 10.645 0.561 0.103 0.766-0.244 0.766-0.54 
                        0-0.267-0.010-1.152-0.016-2.088-3.12 0.678-3.779-1.323-3.779-1.323-0.511-1.296-1.246-1.641-1.246-1.641-1.020-0.696 0.077-0.682 
                        0.077-0.682 1.126 0.078 1.72 1.156 1.72 1.156 1.001 1.715 2.627 1.219 3.265 0.931 0.102-0.723 0.392-1.219 0.712-1.498-2.49-0.283-5.11-1.246-5.11-5.545 
                        0-1.226 0.438-2.225 1.154-3.011-0.114-0.285-0.501-1.426 0.111-2.97 0 0 0.941-0.301 3.085 1.15 0.894-0.25 1.854-0.373 2.807-0.377 0.953 0.004 1.913 0.129 2.809 
                        0.379 2.14-1.453 3.083-1.15 3.083-1.15 0.613 1.545 0.227 2.685 0.112 2.969 0.719 0.785 1.153 1.785 1.153 3.011 0 4.31-2.624 5.259-5.123 5.537 0.404 0.348 0.761 1.030 0.761 
                        2.076 0 1.5-0.015 2.709-0.015 3.079 0 0.299 0.204 0.648 0.772 0.538 4.455-1.486 7.666-5.69 7.666-10.645 0-6.195-5.023-11.219-11.219-11.219z">
                    </path>
                </svg>
                <p>GitHub</p>
            </a>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Header-component'
})
</script>

<style scoped>


.header {
    display: flex;
    width: 100%;
    height: 100%;
    
}
.social {
    height: 100%;
    width: 40%;
    display: flex;
    align-items: center;
    font-size: 1.4em;
    margin-left: 10px;
    font-family: 'Source Sans Pro', sans-serif;
}
.link{
    text-decoration: none;
    color: inherit;
    font-size: 1.6em;
    margin: 6px;
    width: 30px;
}
.link:hover {
    text-decoration: none;
    color: inherit;
    
}
.logo {
    display: flex;
    height: 100%;
    width: 20%;
justify-content: center;

}
RouterLink img {
    padding-top: 10px;
    width: 100%;
    margin: auto;
}
.git {
    width: 40%;
}
.gitbut{
    position:fixed;
    z-index: 10;
    top: 0px;
    right: 15vw;
    text-decoration: none;
    background-color: rgb(5, 27, 44);
    font-family: "Source Sans Pro", sans-serif;
    color: rgb(252, 247, 248);
    display: flex;
    -webkit-box-align: center;
    font-size: 1.2rem;
    padding: 0.3rem 1.5rem;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
}
.gitbut p{
    margin: 0;
}
@media (max-width: 600px){
.social {
    height: 100%;
    width: 35%;
    display: flex;
    align-items: center;
    font-size: 1.3em;
    font-family: 'Source Sans Pro', sans-serif;
}
.link{
    display: inline-flex;
    margin-left: 1rem;
    
}
.logo {
    display: flex;
    height: 100%;
    width: 35%;
    justify-content: center;
    margin-left: -1rem;
    margin-top: 0.5rem;
}
RouterLink img {
    margin-left: 0;
    padding-top: 0;
    width: 100%;
}
.git {
    width: 30%;
}
.gitbut{
    position:fixed;
    z-index: 10;
    top: 0px;
    right: 4vw;
    text-decoration: none;
    background-color: rgb(5, 27, 44);
    font-family: "Source Sans Pro", sans-serif;
    color: rgb(252, 247, 248);
    display: flex;
    -webkit-box-align: center;
    font-size: 1.2rem;
    padding: 0.3rem 0.8rem;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
}
.gitbut p{
    display: none;
}


}
</style>