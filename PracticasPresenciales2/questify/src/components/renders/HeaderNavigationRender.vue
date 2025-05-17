<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}
</script>

<template>
  <div class="nav-bar d-flex flex-row align-center justify-space-between px-4">
    <!-- Sección izquierda -->
    <div class="d-flex flex-row align-center h-100 w-100 test">
      <v-btn class="questify-btn" variant="outlined" rounded="0" height="100%">
        {{ t('nav.questify') }}
      </v-btn>

      <RouterLink class="nav-btn" to="/">{{ t('nav.tasks') }}</RouterLink>
      <RouterLink class="nav-btn" to="/inventory">{{ t('nav.inventory') }}</RouterLink>
      <RouterLink class="nav-btn" to="/store">{{ t('nav.store') }}</RouterLink>

      <!-- Botón de idioma junto a los links -->
      <v-btn variant="text" @click="toggleLanguage" class="lang-btn ml-2">
        {{ locale === 'es' ? 'EN' : 'ES' }}
      </v-btn>
    </div>

    <!-- Sección derecha -->
    <div class="d-flex flex-row align-center h-100 right-section">
      <div class="d-flex align-center coin-display">
        <v-icon size="44">mdi-currency-btc</v-icon>
        <span class="coin-count">0</span>
      </div>
      <v-icon class="ml-4" size="64">mdi-account</v-icon>
    </div>
  </div>
</template>


