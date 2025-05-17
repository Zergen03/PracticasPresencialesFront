<script setup lang="ts">
import type { Category } from '@/models/Category'
import { ref, computed } from 'vue'

// Recibe la búsqueda desde el padre
const props = defineProps<{
  search: string
}>()

// Datos originales
const category = ref<Category[]>([
  { Id: 1, Name: 'Despliegue de Aplicaciones Web', User_Id: 1 },
  { Id: 2, Name: 'Administración de Servidores', User_Id: 1 },
  { Id: 3, Name: 'Pruebas de Rendimiento', User_Id: 1 }
])

// Computed para aplicar filtro en tiempo real
const filteredCategories = computed(() =>
  category.value.filter(cat =>
    cat.Name.toLowerCase().includes(props.search.toLowerCase())
  )
)
</script>


<template>
  <v-list density="compact" class="custom-list">
<v-list-item v-for="cat in filteredCategories" :key="cat.Id" class="list-item">
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


