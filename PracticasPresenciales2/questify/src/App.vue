<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HeaderView from './components/renders/HeaderRender.vue';
import FooterView from './components/renders/FooterRender.vue';
</script>

<template>
  <HeaderView />
  <RouterView />
  <FooterView />
</template>

<style scoped></style>
