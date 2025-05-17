<script setup lang="ts">
import type { ToDoTask } from '@/models/ToDoTask';
import { ref } from 'vue'

const task = ref<ToDoTask[]>([
  { Id: 1, Name: 'kubernetes', Description: 'kubernetes', GoldReward: 1, XpReward: 1, ExpirationDate: new Date(), Difficulty: 1, CategoryId: 1 },
  { Id: 2, Name: 'kubernetes', Description: 'kubernetes', GoldReward: 1, XpReward: 1, ExpirationDate: new Date(), Difficulty: 1, CategoryId: 1 },
  { Id: 3, Name: 'kubernetes', Description: 'kubernetes', GoldReward: 1, XpReward: 1, ExpirationDate: new Date(), Difficulty: 1, CategoryId: 1 }

])
</script>

<template>
  <v-list density="compact" class="custom-list">
    <v-list-item v-for="tas in task" :key="tas.Id" class="list-item">
      <v-list-item-title>
        • {{ tas.Name }}
      </v-list-item-title>
      <template #append>
        <div class="icon-actions">
          <v-icon size="36">mdi-alpha-x</v-icon>
          <v-icon size="26">mdi-check</v-icon>
        </div>
      </template>

    </v-list-item>
  </v-list>
</template>

<style scoped>
.list-item {
  border: 2px solid black;
  width: 100%;
  height: 100%;
  background-color: white;
}
.custom-list {
  background-color: #1c2066;
}
</style>
