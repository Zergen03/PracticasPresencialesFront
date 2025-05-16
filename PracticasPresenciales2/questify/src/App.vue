<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HeaderView from './views/HeaderView.vue';
import FooterView from './views/FooterView.vue';
</script>

<template>

  <HeaderView />
  <RouterView />
  <FooterView />
</template>

<style scoped></style>
