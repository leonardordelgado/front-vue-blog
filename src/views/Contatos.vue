<template>
    <div class="contatos">
        <div class="container-contatos">
            <div class="infor">
                <img src="@/assets/img/fotoPerfil.jpeg" alt="">
                <h1>Leonardo Resende Delgado</h1>
                <h2>Software Developer | Backend | PHP | NodeJS | SQL | Docker | TypeScript | MongoDB | JavaScript</h2>
                <h4>
                         <p>Sou um desenvolvedor experiente em frontend e backend. Estou constantemente me aprimorando para atender
                    às demandas de um mercado competitivo e dinâmico.</p>
                         <p>Com vasto conhecimento e habilidades tanto em desenvolvimento de frontend quanto de backend, sou capaz
                    de criar soluções completas e eficientes para atender às necessidades dos clientes. Através de uma
                    abordagem centrada no usuário, estou comprometido em entregar produtos de alta qualidade que superem as
                    expectativas.</p>
                </h4>
            </div>
            <div class="contatos-links">
                <ul class="butons">
                    <a href="https://www.instagram.com/desenvolvedor.l.delgado/" target="_blank">
                        <li>
                            <p>Instagram</p>
                            <i class="bi bi-instagram"></i>
                        </li>
                    </a>
                    <a href="https://www.linkedin.com/in/leonardo-resende-bbb670204/" target="_blank">
                        <li>
                            <p>Linkedin</p>
                            <i class="bi bi-linkedin"></i>

                        </li>
                    </a>
                    <a href="https://github.com/leonardordelgado" target="_blank">
                        <li>
                            <p>Github</p>
                            <i class="bi bi-github"></i>

                        </li>
                    </a>
                    <a href="mailto:leoresende2010hotmail.com">
                        <li>

                            <p>E-mail</p>
                            <i class="bi bi-envelope-at"></i>

                        </li>
                    </a>
                </ul>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Contatos-curriculo'
})
</script>
<style scoped>
.contatos {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 0;
    padding-bottom: 4rem;
    height: 90vh;
}

.container-contatos {
    margin:auto;
    height: auto;
    width: 110vh;
    overflow: hidden;
    display: inline-flex;
}

.infor {
    margin: auto;
    background:var(--nav-color);
    width: 70%;
    height: auto;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    text-align: center;
    margin-right: 2px;
}

.infor img {
    border-radius: 50%;
    width: 121px;
    margin-top: 2rem;
}

.infor h2,
h4, h2 {
    color: white;
    font-family: Poppins;
    font-weight: 700;
}

.infor h1 {
    color: white;
    font-size: 30px;
}
.infor h2 {
    font-size: 15px;
 }
.infor h4 {
    font-size: 15px;
    text-align: justify;
    margin: .5rem;
}

.contatos-links {
    background: rgba(169, 169, 170, 0.753);
    width: 70%;
    height: auto;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
   display: flex;
   justify-content: center;
}

.butons {
    list-style-type: none;
    gap: 1.5rem;
    flex-direction: column;
    flex-wrap: nowrap;
    cursor: default;
    display: grid;
    margin: auto;
    width: 210px;
}

.butons li {
    width: 100%;
    height: 50px;
    background: var(--darkgray);
    border-radius: 30px;
    overflow: hidden;
    text-align: center;
    margin-left: -1rem;
}

.butons li p {
    font-size: 20px;
    float: left;
    font-family: Poppins;
    font-weight: 700;
    color: white;
    margin-left: 10px;
    margin-right: -10px;
    margin-top: .6rem;
    width: 90px;
}

.butons i {
    width: 30px;
    float: right;
    margin-left:0px;
    margin-right:10px;
    margin-top: .5rem;
    font-size: 1.5em;
    color: white;
}
.butons  a {
    text-decoration: none;
}

@media (max-width:600px) {
    .contatos {
        width: 100%;
        display: block;
        height: auto;
    }
    .infor img {
        margin-top:30px;
    }
    .container-contatos {
        margin: 1rem;
        height: auto;
        width: auto;
        overflow: inherit;
        display: block;
    }

    .infor {
        background: rgba(169, 169, 170, 0.753);
        float: none;
        width: auto;
        height: auto;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        border-bottom-left-radius: inherit;
        text-align: center;
        padding: 5px;
    }

    .contatos-links {
        float: none;
        width: auto;
        height: auto;
        border-top-right-radius: inherit;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
        margin-right: 2px;
        margin-top: -9px;       
        display: block;
    }

    .butons {
        list-style-type: none;
        gap: 1.5rem;
        flex-direction: column;
        flex-wrap: nowrap;
        cursor: default;
        display: grid;
        margin-top: 10px;
        width: 210px;
    }

    .butons li {
        margin-top: 5px;
        margin-bottom: 5px;
        height: auto;
        overflow:inherit;
        display: flex;
        text-align: inherit;
    }


    .butons li p {
        font-size: 20px;
        float: left;
        font-family: Poppins;
        font-weight: 700;
        color: white;
        margin-left: 1rem;
        margin-top: .6rem;
        width: 100px;
    }

    .butons i {
        width: 30px;
        float: right;
        margin-left: 30px;
        margin-right: 0rem;
        margin-top: .8rem;
        font-size: 1.5em;
        color: white;
    }    
}
</style>