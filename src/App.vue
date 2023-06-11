<template>
  <main class="row">
    <div class="nav-header d-flex col-14 ">
      <Header />
    </div>

    <div class="corpo">
      <NavBar />
      <RouterView>

      </RouterView>
      <div class="roda-pe">
        <Footer />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue'; //Import header 
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
export default defineComponent({
  name: 'App',
  components: {// informa os components que serao usados na pagina
    Header,
    NavBar,
    Footer
  }

});
</script>

<style>
@import url('https://fonts.googleapis.com/css2? family= Source+Sans+Pro & display=swap');

:root {
  --header-color: rgba(255, 255, 255, 0.476);
  --nav-color: rgba(255, 255, 255, 0.476);
  --darkgray: #333333;
  --text-color-fraca: rgba(5, 27, 44, 0.375);
  
}

.nav-header {
  height: 18vh;
  background: var(--header-color);
}

main {
  height: 100vh;
  background-color: #fcf7f8;
  background-position: 50% 50%;
  background-size: 100% auto;
  overflow-x: hidden;
  font-size: -webkit-calc(60% + .8vmin);
  font-size: calc(60% + .8vmin);
  background: url(@/assets/img/fundo.jpeg) no-repeat fixed;
  -o-background-size: cover;
  background-size: cover;
}

.corpo {
  height: 100%;
}
.roda-pe{
  bottom: 0;
  height: 100px;
  width: 100vw;
  background: var(--header-color);
  
  
}
@media (max-width: 600px){
  .nav-header {
  height: 12vh;
  background: var(--header-color);
  }
  .corpo {
  height: 30%;
  } 
  .roda-pe{
  padding-bottom: 13rem;
  
   left: 0;
   bottom: 0;
   width: 100%;
  }
  .row{
    --bs-gutter-x: none;
  }
}
</style>
