<script setup lang="ts">
import { ref } from 'vue'
import CategoryPanel from '@/components/rendersPanles/CategoryPanel.vue'
import TaskPanel from '@/components/rendersPanles/TaskPanel.vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}

// Filtro para categorías
const categorySearch = ref('')
</script>
<template>
  <v-container class="main-layout pa-0" fluid>
    <!-- PANEL CATEGORÍAS -->
    <div class="panel">
      <div class="panel-header">
        <div class="panel-title-section">
          <span class="panel-title">{{ t('panel.categories') }}</span>
          <v-text-field v-model="categorySearch" class="panel-search" density="compact" hide-details single-line
            variant="outlined" placeholder="Buscar..." />
        </div>
        <div class="actions">
          <v-icon>mdi-plus-circle-outline</v-icon>
          <v-icon>mdi-minus-circle-outline</v-icon>
        </div>
      </div>
      <CategoryPanel :search="categorySearch" />
    </div>

    <!-- PANEL TAREAS -->
    <div class="panel">
      <div class="panel-header">
        <div class="panel-title-section">
          <span class="panel-title">{{ t('panel.tasks') }}</span>

          <v-text-field class="panel-search" density="compact" hide-details single-line variant="outlined"
            placeholder="Buscar..." />

          <v-btn-toggle class="filter-toggle" mandatory density="compact" divided>
            <v-btn v-for="n in 5" :key="n" :value="n" size="small" color="primary" class="filter">
              {{ n }}
            </v-btn>
          </v-btn-toggle>
        </div>

        <div class="actions">
          <v-icon>mdi-plus-circle-outline</v-icon>
          <v-icon>mdi-minus-circle-outline</v-icon>
        </div>
      </div>

      <TaskPanel />
    </div>

  </v-container>
</template>

<style scoped>
.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  margin-bottom: 8px;
  flex-wrap: wrap;
}

.panel-title-section {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.panel-title {
  font-size: 24px;
  font-weight: bold;
}

.panel-search {
  width: 200px;
  font-size: 14px;
  color: black;
  border: 2px solid black;
}

.filter-toggle {
  display: flex;
  gap: 4px;
  background-color: white;
}

.filter {
  border: 2px solid black;
}

.filter:hover {
  cursor: pointer;
}
</style>
