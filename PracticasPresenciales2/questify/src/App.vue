<script setup lang="ts">
import HeaderView from '../src/components/renders/HeaderRender.vue'
import FooterView from '../src/components/renders/FooterRender.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app class="fill-height d-flex flex-column">
    <HeaderView />
    
    <v-main class="flex-grow-1 main-background">
      <RouterView />
    </v-main>

    <FooterView />
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
