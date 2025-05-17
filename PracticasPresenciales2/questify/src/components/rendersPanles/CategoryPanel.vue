<script setup lang="ts">
import CategoryRender from '../renders/CategoryRender.vue'

defineProps<{
    search: string
}>()
</script>
<template>
    <div class="category-panel">
        <CategoryRender :search="search" />
    </div>
</template>
