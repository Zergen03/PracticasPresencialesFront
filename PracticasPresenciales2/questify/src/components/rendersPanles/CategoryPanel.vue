<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CategoryRender from '../renders/CategoryRender.vue';
</script>
<template>
    <div class="category-panel">
        <CategoryRender />
    </div>
</template>


<style scoped>
.custom-list {
  padding: 0;
  width: 100%;
}

.list-item {
  padding: 2px 8px;
  min-height: 28px;
  font-size: 13px;
  color: black;
  width: 100%;
  border: 1px solid #1c2066;
  background-color: white;
  display: flex;
  align-items: center;
}
</style>