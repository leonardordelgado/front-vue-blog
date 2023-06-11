<template>
    <nav class="position">
        <div class='NavBar'>
            <ul style="padding-left: 0;">
                <li>
                    <RouterLink to="/" class="link cert">
                        <i class="fa fa-home" aria-hidden="true">
                            <p>Home</p>
                        </i>
                        <span class="nav-text"><p>Home</p></span>
                    </RouterLink>
                </li>
                <hr />
                <li>
                    <RouterLink to="/contatos" class="link cert ">
                        <i class="fa bi bi-person-lines-fill">
                            <p>Contatos</p>
                        </i>
                        <span class="nav-text"> <p>Contatos</p></span>
                    </RouterLink>
                </li>
                <hr />
                <li>
                    <RouterLink to="/projetos" class="link cert ">
                        <i class="fa bi bi-lightbulb-fill">
                            <p>Projetos</p>
                        </i>
                        <span class="nav-text">
                           <p>Projetos</p> 
                        </span>
                    </RouterLink>
                </li>
                <hr />
                <li>
                    <RouterLink to="/certificados" class="link cert">
                        <i class="fa bi bi-patch-check-fill">
                            <p>Certificados</p>
                        </i>
                        <span class="nav-text"><p>Certificados</p></span>
                    </RouterLink>
                </li>
                
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Nav-Bar'
})
</script>

<style scoped>
.position{
    position: fixed;
    margin-top: 5%;
    z-index: 1;
}
.NavBar{
    background-color: var(--darkgray);
    background-image: linear-gradient(to top,rgba(0,0,0,.0,9),transparent);
    width: 50px;
    height: auto;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
.fa{
    position: relative;
    width: 30px;
    text-align: center;
    margin-bottom: -30px;
    font-size:25px;
    transform: translateX(10px);
    color: var(--nav-color);
    
}
.fa-home{
    margin-top: 10px;
}
.bi-patch-check-fill{
    margin-top: -20px;
}
.nav-text{
    position: relative;
    top: -20px;
    left: 60%;
    display:flex;
    color: white;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 1px;
    transform: translate(-130%, -50%) translateZ(0);
    border-radius: 3px;
    background: var(--darkgray);
    border-right-color: var(--darkgray);
    transition: all .3s ease-in-out;
    z-index: -1;
    width: 130px;  
    height: 20px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 15px;
}
.nav-text p{
    margin: auto;
}
.nav-text::before{
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      top: 25%;
      right: 100%;
      margin-top: 5px * -1;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent; 
      border-right: 5px solid #efefef;
      border-right-color: inherit;
}

li{
    height: 30px;
    display: block;
    
}
.link:hover .nav-text{
    transform: translate(25%, -50%);
}
.link{
    text-decoration: none;
    width: 5px;
}
i p {
    display: none;
}
@media (max-width: 600px){
    .position{
        position: fixed;
        margin-top:inherit;
    }
    .NavBar{
        position: fixed;
        margin-top:inherit;
        bottom: 0vw;
        width: 100vw;
        height: 60px;
        border-top-right-radius:inherit;
        border-bottom-right-radius: inherit;
        border-top-left-radius:10px ;
        border-top-right-radius: 10px;
        z-index: 1;
    }
    i p {
        display:block;
        font-size: 15px;
    }
    ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        justify-content:space-evenly;
        display: flex;
        height: 100%;
        width: 100%;
    }
    .link{
    text-decoration: none;
    width: auto;
    margin:0;
    }
    
    li{
    display: inline-flex;
    width: 30px;
    margin: auto -5px auto 0.5rem;
    
    }
    .fa-home{
    margin-top: 0;
    }
    .bi-patch-check-fill{
    margin-top: 0;
    }
    .fa{
    width: inherit;
    top:2px; 
    font-size:20px;
    transform:inherit;
    user-select: none
    }
    .nav-text{
        display: none;
            
    }
    hr{
        display: none;
    }
    .cert{
        margin-left: -2rem;
    }
}
</style>