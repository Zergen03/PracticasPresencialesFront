<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import castleImg from '../../components/imgs/castillo.png'

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
            <v-progress-linear :model-value="0" color="white" bg-color="#ffffff88" :height="8" rounded />
          </div>
          <span class="bar-label">X/100</span>
        </div>

        <!-- EXPERIENCIA -->
        <div class="progress-row">
          <span class="xp-label">{{ t('stats.xp') }}</span>
          <div class="bar-container">
            <v-progress-linear :model-value="0" color="white" bg-color="#ffffff88" :height="8" rounded />
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


