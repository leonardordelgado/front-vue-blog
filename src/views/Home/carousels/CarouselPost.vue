<template>
    <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
        <slide v-for="post  in posts" :key="post._id" class="slide">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <p class="title">{{ post.titulo }}</p>
                        <p>{{ post.descricao }}</p>
                    </div>
                    <div class="flip-card-back">
                        <p class="text">{{ post.previaText }}</p>
                    </div>
                </div>
            </div>

        </Slide>

        <template #addons>
            <navigation>
                <template #next>
                    <button type="button" id="carousel-arrow-next" class="carousel-arrow carousel-arrow-next"
                        arial-label="Image suivante" ref="cur"></button>

                </template>
                <template #prev>
                    <button type="button" id="carousel-arrow-prev" class="carousel-arrow carousel-arrow-prev"
                        arial-label="Image précédente"></button>
                </template>
            </navigation>
        </template>
    </carousel>

    <Carousel id="thumbnails" :items-to-show="1" v-model="currentSlide" :wrap-around="false" ref="carousel">
        <Slide slide v-for="(post, index)  in posts" :key="post._id">
            <div class="flip-card carousel__item" @click="slideTo(index)">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <p class="title">{{ post.titulo }}</p>
                        <RouterLink
                            :to="{ name: 'poster-completo', params: {id: post._id}}" >
                            <input type="submit" class="bt button is-white">
                        </RouterLink>
                    </div>

                </div>
            </div>
        </Slide>
    </Carousel>
</template>

<script lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation, } from 'vue3-carousel'
import { computed, defineComponent, toRefs } from 'vue';

import { OBTEM_POSTS } from '@/store/actions';
import { useStore } from '@/store';

export default defineComponent({
    name: 'Carousel-cards',
    components: {
        Carousel,
        Slide,
        Navigation
    },
    data: () => ({
        currentSlide: 0,
    }),
    methods: {
        slideTo(val: number) {
            this.currentSlide = val
        }
    },
    setup() {
        const store = useStore()
        store.dispatch(OBTEM_POSTS)


        return {
            posts: computed(() => store.state.post)
        }
    },
})
</script>


<style scoped>
.flip-card {
    background-color: transparent;
    width: 45%;
    height: 260px;
    margin-bottom: 1.5rem;
    margin-top: 2rem;
    perspective: 1000px;
    font-family: 'Source Sans Pro', sans-serif;

}

#thumbnails .flip-card {
    background-color: transparent;
    width: 15%;
    height: 100px;
    font-family: 'Source Sans Pro', sans-serif;
    margin-top: -0rem;
}

#thumbnails .flip-card:hover .flip-card-inner {
    transform: none;
}

#thumbnails .bt {
    margin: auto;
    margin-left: auto;
    margin-right: auto;

}

#thumbnails .title {
    margin-bottom: 1px;
}

.carousel-arrow {
    z-index: 3;
    display: block;
    position: absolute;
    width: 36px;
    height: 36px;
    top: 50%;
    margin-top: -18px;
    border-radius: 50%;
    border: 0;
    background-color: #fff;
    background-image: url("http://res.cloudinary.com/dnqehhgmu/image/upload/v1509720334/blue-arrow_jk1ydw.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 16px 16px;
    cursor: pointer;
    -webkit-transition: background-size 0.15s ease-out;
    transition: background-size 0.15s ease-out;
}

.carousel-arrow:hover,
.carousel-arrow:focus {
    background-size: 22px 22px;
}

.carousel-arrow-next {
    right: 20px;
}

.carousel-arrow-prev {
    left: 20px;
    -webkit-transform: rotateZ(180deg);
    -ms-transform: rotate(180deg);
    transform: rotateZ(180deg);
}

.slide {
    width: 15%;

}

.title {
    font-size: 1.5em;
    font-weight: 900;
    text-align: center;
    margin: 0;
    color: white;
}

.text {
    height: 100%;
    display: block;
    font-size: 1em;
    text-align: center;
    color: white;
    overflow: auto;
}

.bt {

    margin-top: -10px;
    margin-left: auto;
    margin-bottom: 10px;
    margin-right: auto;

}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(-180deg);
}

.flip-card-front,
.flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 0.5px solid #ffffff;
    border-radius: 0.3em;
}

.flip-card-front {
    background: var(--darkgray);
    color: white;
}

.flip-card-back {
    background: var(--darkgray);
    color: white;
    transform: rotateY(-180deg);
}

.text::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: white;
}

.text::-webkit-scrollbar-track {

    background-color: transparent;
    border-radius: 10px;
}

.text::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
}

@media (max-width: 600px) {
    .flip-card {
        width: 65%;
    }

    .carousel-arrow-next {
        right: 0px;
    }

    .carousel-arrow-prev {
        left: 0px;
    }

    #thumbnails .flip-card {
        background-color: transparent;
        width: 50%;
        height: 100px;
        font-family: 'Source Sans Pro', sans-serif;
        margin-top: -0rem;
    }

    #thumbnails .flip-card:hover .flip-card-inner {
        transform: none;
    }

    #thumbnails .bt {
        margin: auto;
        margin-left: auto;
        margin-right: auto;

    }

    #thumbnails .title {
        margin-bottom: 1px;
    }

}</style>