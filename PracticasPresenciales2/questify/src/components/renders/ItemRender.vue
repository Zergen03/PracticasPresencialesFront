<script setup lang="ts">
import { ref } from 'vue'
import type { Items } from '@/models/Items'

const items = ref<Items[]>([
  { Id: 1, TypeObject: 'Item', StatsObject: 1, ValueObject: 1 },
  { Id: 2, TypeObject: 'Item', StatsObject: 1, ValueObject: 1 },
  { Id: 3, TypeObject: 'Item', StatsObject: 1, ValueObject: 1 },
  { Id: 4, TypeObject: 'Item', StatsObject: 1, ValueObject: 1 },
  { Id: 5, TypeObject: 'Item', StatsObject: 1, ValueObject: 1 },
  { Id: 6, TypeObject: 'Item', StatsObject: 1, ValueObject: 1 },
  { Id: 7, TypeObject: 'Item', StatsObject: 1, ValueObject: 1 },
  { Id: 8, TypeObject: 'Item', StatsObject: 1, ValueObject: 1 },
  { Id: 9, TypeObject: 'Item', StatsObject: 1, ValueObject: 1 },
  { Id: 10, TypeObject: 'Item', StatsObject: 1, ValueObject: 1 },
  { Id: 11, TypeObject: 'Item', StatsObject: 1, ValueObject: 1 },
  { Id: 12, TypeObject: 'Item', StatsObject: 1, ValueObject: 1 },
])
</script>

<template>
  <div class="inventory-wrapper">
    <v-container fluid class="pa-0 full-container">
      <v-row dense class="item-row">
        <v-col
          v-for="item in items"
          :key="item.Id"
          cols="10"
          class="item-cell"
        >
          <v-card flat class="item-card d-flex flex-column align-center justify-center">
            <v-icon size="48">mdi-sword</v-icon>
            <div class="info-container">
              <span class="item-name">{{ item.TypeObject }}</span>
              <span class="item-price">{{ item.ValueObject }}€</span>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.inventory-wrapper {
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
}

.full-container {
  width: 100%;
}

.item-row {
  row-gap: 16px;
  column-gap: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.item-cell {
  padding: 4px;
  max-width: 360px; /* Ajusta según lo que necesites */
}

.item-card {
  background-color: #c9d8ea;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid black;
  box-shadow:  10px 10px 5px rgba(0, 0, 0, 0.3);
}
.item-card:hover {
  transform: translateY(-4px);
  box-shadow: 12px 12px 8px rgba(0, 0, 0, 0.35);
}
.item-name,
.item-price {
  font-size: 14px;
  color: #1a1a1a;
}

.info-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 8px;
}

</style>
