<script setup lang="ts">
import type { Items } from '@/models/Items'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

// Imágenes
import espada from '../../source/images/sword.png'
import poti from '../../source/images/serum.png'
import arco from '../../source/images/bow-and-arrow.png'
import armadura from '../../source/images/armor.png'

const { t } = useI18n()

const items = ref<Items[]>([
  { Id: 1, TypeObject: 'Espada', StatsObject: 1, ValueObject: 10 },
  { Id: 2, TypeObject: 'Poción', StatsObject: 1, ValueObject: 5 },
  { Id: 3, TypeObject: 'Arco', StatsObject: 1, ValueObject: 8 },
  { Id: 4, TypeObject: 'Armadura', StatsObject: 1, ValueObject: 15 }
])

// Función que asocia TypeObject con una imagen
function obtenerImagen(tipo: string): string {
  switch (tipo.toLowerCase()) {
    case 'espada':
      return espada
    case 'poción':
    case 'pocion':
      return poti
    case 'arco':
      return arco
    case 'armadura':
      return armadura
    default:
      return '' 
  }
}
</script>

<template>
  <div class="rotation-wrapper">
    <h2 class="title">{{ t('shop.diaria') }}</h2>
    <div class="items-container">
      <div class="item-card" v-for="item in items" :key="item.Id">
        <img
          :src="obtenerImagen(item.TypeObject)"
          alt="icono objeto"
          style="width: 64px; height: auto"
        />
        <div class="tags">
          <span class="item-name">{{ item.TypeObject }}</span>
          <span class="item-price">{{ item.ValueObject }}€</span>
        </div>
      </div>
    </div>
  </div>
</template>
