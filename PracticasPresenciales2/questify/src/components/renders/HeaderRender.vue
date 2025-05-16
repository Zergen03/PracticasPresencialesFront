<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HeaderNavigationRender from './HeaderNavigationRender.vue';
import HeaderStatsRender from './HeaderStatsRender.vue';
</script>
<template>
    <HeaderNavigationRender />
    <HeaderStatsRender />
</template>
<style scoped></style>