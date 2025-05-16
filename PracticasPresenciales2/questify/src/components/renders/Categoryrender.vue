<script setup lang="ts">
import type { Category } from '@/models/Category';
import { ref } from 'vue'

const category = ref<Category[]>([
  { Id: 1, Name: 'Despliegue de Aplicaciones Web', User_Id: 1 },
  { Id: 2, Name: 'Despliegue de Aplicaciones Web', User_Id: 1 },
  { Id: 3, Name: 'Despliegue de Aplicaciones Web', User_Id: 1 }
])
</script>

<template>
  <v-list density="compact" class="custom-list">
    <v-list-item v-for="cat in category" :key="cat.Id" class="list-item">
      <v-list-item-title class="title-text">
        • {{ cat.Name }}
      </v-list-item-title>
      <template #append>
        <v-icon size="36">mdi-chevron-right</v-icon>
      </template>
    </v-list-item>
  </v-list>
</template>

<style scoped>
.custom-list {
  padding: 0;
  scrollbar-width: none;
  width: 100%;
}
.title-text {
  width: 50%;
}
.list-item {
  padding: 2px 8px;
  min-height: 24px;
  font-size: 13px;
  color: black;
  width: 98%;
  border: 2px solid black;

}
</style>
