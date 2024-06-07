<script defer >

import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';


export default {

  components: {
    Header,
    Footer
  },
  

}
// const title = ref("Next-kit - Nuxt3 Typescript Free UI kit built with Vuetify3");
// useHead({
//   meta: [{ content: title }],
//   titleTemplate: (titleChunk) => {
//     return titleChunk
//       ? `${titleChunk} - Nuxt3 Typescript Free UI kit built with Vuetify3`
//       : "Next-kit - Nuxt3 Typescript Free UI kit built with Vuetify3";
//   },
// });
</script>

<template>
  
  <v-app>
    
    <Header />
   
    <v-main>
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>
