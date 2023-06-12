<template>
    <div class="container-pag-const">
        <div class="objects">
            <div class="objects_computer"></div>
            <div class="objects_table"></div>
            <div class="objects_cup"></div>
            <div class="smoke"></div>
            <div class="objects_chair"></div>
        </div>
        <div class="box">
            <div class="box_1">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="box_2">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="box_3"></div>
        </div>
    </div>
    <div class="footer">
        <div class="title mod">
            Pagina em Construção 
        </div>
        <div class="title">
            Acesse o Instagram ♥
            <div class="sub">
                <a href="https://www.instagram.com/desenvolvedor.l.delgado/" target=”_blank”>
                    desenvolvedor.l.delgado
                    <i class="bi bi-instagram"></i>
                </a>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'const-web'
})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Amatic+SC');

.footer {
    font-size: 2rem;
    z-index: 1;
    background: transparent;
    margin-bottom: 30px;
}
.footer .title {
    font-family: 'Amatic SC';
    text-align: center;
    color:white;
}
.footer .mod {
    color: #dc8e3e;
}
.footer .sub {
    display: flex;
    justify-content: space-around;
    font-size: 1rem;
    font-family: 'Amatic SC';

}
.footer .sub a {
    color:white;
    text-decoration: none;
}
.footer .sub a:hover {
    color: white;
}

.container-pag-const {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: 0;
    top: 0;
    bottom: 0;
    width: 26rem;
    border-radius: 27rem;
    overflow: hidden;
    height: 55vh;
    position: relative;
    z-index: 0;
}

.objects_computer {
    position: absolute;
    width: 7rem;
    height: 5.5rem;
    background: #bfbfbf;
    left: 3.8rem;
    top: 14.8rem;
    transform: skew(17deg, 0deg);
    border-radius: 0.6rem 0.6rem 0 0;
    box-shadow: inset -6px 1px darkgrey;
}
.objects_computer:after {
    content: '';
    position: absolute;
    width: 2rem;
    height: 0.5rem;
    background: darkgrey;
    top: 5.1rem;
    left: 7rem;
    transform: skew(0deg, 2deg);
}

.objects_table {
    position: absolute;
    width: 22rem;
    top: 20.4rem;
    height: 1.4rem;
    background: #63321f;
    left: 2rem;
    box-shadow: 0px -3px #582714;
}
.objects_table:before {
    content: '';
    width: 19rem;
    height: 1.2rem;
    position: absolute;
    background: #582714;
    border-radius: 0 1rem;
    top: 1.4rem;
    left: 3rem;
    z-index: 1;
}

.objects_cup {
    position: absolute;
    width: 2.4rem;
    top: 17.2rem;
    background: #ee4040;
    left: 16.8rem;
    height: 3rem;
    border-radius: 0.3rem 0.3rem 0 0;
    z-index: 55;
    box-shadow: -2px 0px #ee4040;
}
.objects_cup:after {
    content: '';
    width: 2rem;
    height: 2rem;
    background: #ee4040;
    position: absolute;
    top: 0.7rem;
    left: 0.4rem;
    border: none;
    border-radius: 0;
    z-index: 5;
}

.objects_cup:before {
    content: '';
    position: absolute;
    width: 1rem;
    height: 1.9rem;
    border: 4px solid #ee4040;
    left: 2.2rem;
    top: 0.8rem;
    z-index: 1;
}

.objects_chair {
    height: 10.2rem;
    position: absolute;
    width: 9.1rem;
    background: #3c3c3c;
    left: 16.6rem;
    top: 10rem;
    border-radius: 2rem 2rem 0 0;
    transform: skew(-9deg, 0deg);
    box-shadow: inset -9px 5px #424242;
}

.box_1 {
    position: absolute;
    width: 5.4rem;
    height: 6.8rem;
    left: 1rem;
    background-color: rgba(15, 38, 141, 0.71);
    border-radius: 0.6rem;
    box-shadow: 1px 3px 5px #000 52;
    animation: float 2s infinite;
}

.box {
    background: transparent;
}

.box_1 div {
    margin-top: -10px;
    background: #f00707;
    position: absolute;
    border-radius: 1rem;
}

.box_1 :nth-child(1) {
    width: 1.8rem;
    height: 0.3rem;
    top: 1.2rem;
    left: 1.3rem;
}

.box_1 :nth-child(2) {
    width: 1rem;
    height: 0.3rem;
    top: 1.2rem;
    left: 3.3rem;
}

.box_1 :nth-child(3) {
    width: 1.1rem;
    height: 0.3rem;
    top: 2rem;
    left: 2.1rem;
}

.box_1 :nth-child(4) {
    width: 1.4rem;
    height: 0.3rem;
    top: 2rem;
    left: 3.3rem;
}

.box_1 :nth-child(5) {
    width: 0.7rem;
    height: 0.3rem;
    top: 2.7rem;
    left: 2.7rem;
    box-shadow: 1rem 0px #f50707, 1.8rem 0px #fd0909, -0.5rem 11px #f80000;
}

.box_1 :nth-child(6) {
    width: 1.8rem;
    height: 0.3rem;
    top: 4.1rem;
    left: 1.2rem;
    box-shadow: 1rem 22px #f90000, 0rem 43px #fb0000;
}

.box_1 :nth-child(7) {
    width: 0.8rem;
    height: 0.3rem;
    top: 4.8rem;
    left: 1.7rem;
    box-shadow: 0rem 22px #ff0000;
}

.box_2 {
    position: absolute;
    width: 6.4rem;
    height: 4.4rem;
    left: 7.3rem;
    top: 1.7rem;
    background-color: rgba(15, 38, 141, 0.71);
    border-radius: 0.6rem;
    box-shadow: 1px 3px 5px #000 52;
    animation: float2 2s 1s infinite;
}

.box_2 div {
    position: absolute;
    border-radius: 1rem;
    background: #f60000;
    margin-top: 10px;
    
}

.box_2 :nth-child(1) {
    transform: rotate(45deg);
    width: 0.2rem;
    height: 0.6rem;
    left: 1rem;
    top: -0.4rem;
    box-shadow: 1.1rem 0.5rem #fb0000, 2.5rem -0.5rem #f90000, 5.5rem -.7rem #ff0000;
}

.box_2 :nth-child(2) {
    transform: rotate(133deg);
    width: 0.2rem;
    height: 0.6rem;
    left: 1rem;
    top: 0rem;
    box-shadow: 0.5rem -1.1rem #ff025e, -0.9rem -2rem #ff005d, -1.1rem -5rem #f70101;
}

.box_2:after {
    content: '';
    width: 1rem;
    height: 0.3rem;
    background: #ff005d;
    position: absolute;
    border-radius: 6rem;
    top: 2.6rem;
    left: 2.4rem;
}

.box_2:before {
    content: '';
    width: 0.8rem;
    height: 0.2rem;
    background: #ff0000;
    position: absolute;
    border-radius: 6rem;
    top: 1.8rem;
    left: 2rem;
    transform: rotate(-68deg);
    box-shadow: -.7rem 3rem #fc0000;
}

.box_3 {
    position: absolute;
    width: 4.9rem;
    height: 4.2rem;
    left: 7.3rem;
    top: 7.4rem;
    background-color: rgba(15, 38, 141, 0.71);
    border-radius: 0.6rem;
    box-shadow: 1px 3px 5px #000 52;
    animation: float3 2.5s infinite;
}

.box_3:after {
    content: '';
    position: absolute;
    background: #ff0000;
    width: 0.8rem;
    height: 0.2rem;
    transform: rotate(-64deg);
    border-radius: 5rem;
    top: 0.8rem;
    left: 0.5rem;
    box-shadow: 0.2rem 0.5rem #f70000;
}

.smoke {
    width: 70px;
    height: 100px;
    background: none;
    position: absolute;
    left: 18rem;
    margin-left: -40px;
    z-index: 3;
    top: 13.8rem;
    animation: bk 11s infinite;
}

.smoke:after {
    content: '';
    width: 100px;
    height: 100px;
    background: none;
    position: absolute;
    background-image: -webkit-radial-gradient(42% 48%, ellipse, rgba(255, 255, 255, 0.2), transparent 25%), -webkit-radial-gradient(35% 70%, ellipse, rgba(255, 255, 255, 0.2), transparent 15%), -webkit-radial-gradient(42% 61%, ellipse, rgba(255, 255, 255, 0.2), transparent 10%);
    animation: smoke 2s 1s infinite;
    transform: rotate(18deg);
}

@keyframes float {
    0% {
        top: 6.7rem;
    }

    50% {
        top: 7rem;
    }

    100% {
        top: 6.7rem;
    }
}

@keyframes float2 {
    0% {
        top: 1.7rem;
    }

    50% {
        top: 2rem;
    }

    100% {
        top: 1.7rem;
    }
}

@keyframes float3 {
    0% {
        top: 7.4rem;
    }

    50% {
        top: 7.7rem;
    }

    100% {
        top: 7.4rem;
    }
}

@keyframes smoke {
    0% {
        background-position: 0 0;
        opacity: 0;
    }

    15%,
    85% {
        opacity: 1;
    }

    100% {
        background-position: -20px -25px, -5px -25px, 0px -25px, 0px -25px;
        opacity: 0;
    }
}
</style>