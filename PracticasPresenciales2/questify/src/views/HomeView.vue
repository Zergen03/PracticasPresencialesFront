<template>
    <v-container class="main-layout">
      <!-- PANEL DE CATEGORÍAS -->
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title">Categorías</span>
          <div class="actions">
            <v-icon>mdi-plus-circle-outline</v-icon>
            <v-icon>mdi-minus-circle-outline</v-icon>
          </div>
        </div>
        <CategoryPanel />
      </div>

      <!-- PANEL DE TAREAS -->
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title">Tareas</span>
          <div class="actions">
            <v-icon>mdi-plus-circle-outline</v-icon>
            <v-icon>mdi-minus-circle-outline</v-icon>
          </div>
        </div>
        <TaskPanel />
      </div>
    </v-container>
</template>

<script setup lang="ts">
import CategoryPanel from '@/components/rendersPanles/CategoryPanel.vue';
import TaskPanel from '@/components/rendersPanles/TaskPanel.vue';
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 32px;
  padding-top: 32px;
  height: 80%;
}

.panel {
  width: 100%;
  height: 100%;
  background-color: #1c2066;
  padding: 16px;
  border-radius: 4px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  margin-bottom: 8px;
}

.panel-title {
  font-size: 24px;
  font-weight: bold;
}

.actions v-icon {
  margin-left: 8px;
  cursor: pointer;
}
</style>
