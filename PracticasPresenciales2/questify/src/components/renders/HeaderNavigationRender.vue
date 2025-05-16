<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>
<template>
  <div class="header-container">
    <header class="navbar">
      <nav class="nav-links">
        <RouterLink to="/" class="nav-item">Home</RouterLink>
        <RouterLink to="/store" class="nav-item">Store</RouterLink> 
        <RouterLink to="/inventory" class="nav-it">Inventory</RouterLink> 
      </nav>

      </header>
  </div>
</template>
<style scoped>

</style>