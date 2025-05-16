<script setup lang="ts">
import HeaderRender from '../src/components/renders/HeaderRender.vue'
import FooterRender from '../src/components/renders/FooterRender.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app class="fill-height d-flex flex-column">
    <HeaderRender />
    
    <v-main class="flex-grow-1 main-background">
      <RouterView />
    </v-main>

    <FooterRender />
  </v-app>
</template>

<style scoped>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}

.main-background {
  min-height: 0; /* importante para evitar scroll vacío */
  
}
</style>
