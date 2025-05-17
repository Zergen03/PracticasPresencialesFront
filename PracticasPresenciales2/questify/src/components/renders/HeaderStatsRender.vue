<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import castleImg from '../../source/images/castle.png'

import { VProgressLinear, VIcon } from 'vuetify/components'


const { t } = useI18n()
</script>

<template>
  <div class="header-stats">
    <div class="stats-left">
      <img :src="castleImg" alt="Castillo" class="castle-img" />

      <div class="stats-info">
        <div class="player-label">{{ t('stats.username') }} 0</div>

        <!-- VIDA -->
        <div class="progress-row">
          <v-icon size="16" class="icon">mdi-heart-outline</v-icon>
          <div class="bar-container">
            <v-progress-linear class="health-bar" :model-value="10" :height="8" rounded />
          </div>
          <span class="bar-label">X/100</span>
        </div>

        <!-- EXPERIENCIA -->
        <div class="progress-row">
          <span class="xp-label">{{ t('stats.xp') }}</span>
          <div class="bar-container">
            <v-progress-linear class="xp-bar" :model-value="40" :height="8" rounded />
          </div>
          <span class="bar-label">X/100</span>
        </div>
      </div>
    </div>

    <div class="quote">
      <span>{{ t('stats.quote') }}</span><br />
    </div>
  </div>
</template>

<style scoped>
.header-stats {
  background-color: #C0C6D6;
  padding: 12px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60%;
}

.health-bar {
  color: #cc220b;
  /* background-color: #ffffff; */
  border-radius: 4px;
}

.xp-bar {
  color: #09c419;
  /* background-color: #ffffff; */
  border-radius: 4px;
}

.stats-left {
  display: flex;
  align-items: flex-start;
  align-items: center;
  width: 100%;
}

.castle-img {
  width: 200px;
  height: 150px;
  border-radius: 4px;
  object-fit: cover;
  margin-right: 16px;
}

.stats-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 26px !important;
  height: 100%;
}

.player-label {
  font-weight: 400;
  font-size: 22px;
  margin-bottom: 4px;
  color: #1a1a1a;
}

.progress-row {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
}

.icon {
  color: #1a1a1a;
}

.xp-label {
  font-size: 12px;
  margin-right: 2px;
}

.bar-container {
  width: 140px;
  height: 8px;
  flex-shrink: 0;
}

.bar-label {
  min-width: 40px;
  font-size: 15px;
  text-align: left;
  color: #1a1a1a;
}

.quote {
  font-size: 26px;
  font-weight: 500;
  color: #1a1a1a;
  line-height: 1.3;
  text-align: right;
  white-space: nowrap;
}
</style>
