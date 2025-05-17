<script setup lang="ts">
import type { Items } from '@/models/Items'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const items = ref<Items[]>([
    { Id: 1, TypeObject: 'Item', StatsObject: 1, ValueObject: 1 },
    { Id: 2, TypeObject: 'Item', StatsObject: 1, ValueObject: 1 },
    { Id: 3, TypeObject: 'Item', StatsObject: 1, ValueObject: 1 },
    { Id: 4, TypeObject: 'Item', StatsObject: 1, ValueObject: 1 }
])
</script>

<template>
    <div class="rotation-wrapper">
        <h2 class="title">{{ t('shop.diaria') }}</h2>
        <div class="items-container">
            <div class="item-card" v-for="item in items" :key="item.Id">
                <v-icon size="48">mdi-sword</v-icon>
                <div class="tags">
                    <span class="item-name">{{ item.TypeObject }}</span>
                    <span class="item-price">{{ item.ValueObject }}€</span>
                </div>
            </div>
        </div>
    </div>
</template>

