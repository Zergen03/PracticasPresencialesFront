<template>
  <div class="header-wrapper">
    <HeaderNavigationRender />
    <HeaderStatsRender />
  </div>
</template>

<script setup lang="ts">
import HeaderNavigationRender from './HeaderNavigationRender.vue'
import HeaderStatsRender from './HeaderStatsRender.vue'
</script>

<style scoped>
.header-wrapper {
  background-color: #a5c4de;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
