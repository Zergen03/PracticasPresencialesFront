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

<style scoped>
.rotation-wrapper {
    background-color: #c9d8ea;
    padding: 24px 16px;
    text-align: center;
    width: 100%;
}

.title {
    font-size: 40px;
    font-weight: 700;
    color: #445b87;
    margin-bottom: 60px;
}

.items-container {
    display: flex;
    justify-content: center;
    gap: 132px;
    flex-wrap: wrap;
}

.item-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.item-name,
.item-price {
    font-size: 14px;
    color: #1a1a1a;
}
.tags {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    width: 100%;
}
</style>
