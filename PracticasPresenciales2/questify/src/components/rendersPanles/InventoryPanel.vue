<script setup lang="ts">
import ItemRender from '../renders/ItemRender.vue';

</script>

<template>
  <div class="inventory-panel">
    <ItemRender  />
  </div>
</template>

<style scoped>
.inventory-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
