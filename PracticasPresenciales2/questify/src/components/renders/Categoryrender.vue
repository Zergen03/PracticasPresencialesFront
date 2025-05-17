<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useCategoryStore } from '@/stores/categoryStore'

// Recibe el texto de búsqueda desde el padre
const props = defineProps<{
  search: string
}>()

// Store de categorías
const categoryStore = useCategoryStore()

// Llamar al backend para obtener todas las categorías al montar
onMounted(() => {
  categoryStore.fetchAll()
})

// Computed para aplicar el filtro en tiempo real
const filteredCategories = computed(() =>
  categoryStore.categories.filter(cat =>
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


