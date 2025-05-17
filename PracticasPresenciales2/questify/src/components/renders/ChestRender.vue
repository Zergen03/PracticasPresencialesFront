<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import cofreOP from '../../source/images/OP-chest.png'
import normalChest from '../../source/images/normal-chest.png'
import premiumChest from '../../source/images/premium-chest.png'
import basicChest from '../../source/images/basic-chest.jpg'

const { t } = useI18n()

// Nuevo tipo extendido para incluir contenido
type ChestItem = {
  Id: number
  TypeObject: string
  ValueObject: number
  Contenido: string[]
}

const items = ref<ChestItem[]>([
  {
    Id: 1,
    TypeObject: 'Básico',
    ValueObject: 5,
    Contenido: ['Espada rota', 'Poción pequeña'] //meter aqui objetos aleatorios
  },
  {
    Id: 2,
    TypeObject: 'Normal',
    ValueObject: 10,
    Contenido: ['Espada de hierro', 'Armadura ligera'] //meter aqui objetos aleatorios
  },
  {
    Id: 3,
    TypeObject: 'Premium',
    ValueObject: 25,
    Contenido: ['Espada legendaria', 'Poción de vida', 'Armadura pesada'] //meter aqui objetos aleatorios
  },
  {
    Id: 4,
    TypeObject: 'OP',
    ValueObject: 50,
    Contenido: ['Espada divina', 'Armadura celestial', 'Arco mágico', 'Poción mágica'] //meter aqui objetos aleatorios
  }
])

const images = ref([
  basicChest,
  normalChest,
  premiumChest,
  cofreOP
])
</script>

<template>
  <div class="rotation-wrapper">
    <h2 class="title">{{ t('shop.cofres') }}</h2>
    <div class="items-container">
      <div class="item-card" v-for="(item, index) in items" :key="item.Id">
        <img :src="images[index]" alt="cofre" style="width: 80px; height: 60px" />
        <div class="tags">
          <span class="item-name">{{ item.TypeObject }}</span>
          <span class="item-price">{{ item.ValueObject }}€</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>
