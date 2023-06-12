<template>
  
    <header class="header"><Header /> </header>
    <main class="main">
      <NavBar />
      <RouterView>

      </RouterView>
    </main>
    <footer class="footer"><Footer /></footer>
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
  },
  
 

});
</script>

<style>
@import url('https://fonts.googleapis.com/css2? family= Source+Sans+Pro & display=swap');

:root {
  --header-color: rgba(255, 255, 255, 0.429);
  --nav-color: rgba(255, 255, 255, 0.476);
  --darkgray: #333333;
  --text-color-fraca: rgba(5, 27, 44, 0.375);

}



.header {
  height: 18vh;
  background: var(--header-color);
}

.main {
  flex-grow: 1;
}


.footer {
  height: auto;
  background: transparent;
  position: relative;
  bottom: 0;
  padding:inherit;
  background: var(--header-color);
}

@media (max-width: 600px) {
  .header {
    height: 12vh;
    
  }


  .footer {
    padding-bottom: 3rem;
    
  }


}</style>
