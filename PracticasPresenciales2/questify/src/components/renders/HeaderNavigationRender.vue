<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '../../stores/userStore'
import LoginPopup from './LoginPopup.vue'
import RegisterPopup from './RegisterPopup.vue'

const { t, locale } = useI18n()

const userStore = useUserStore()

const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}
</script>

<template>
  <div class="nav-bar d-flex flex-row align-center justify-space-between px-4">
    <div class="d-flex flex-row align-center h-100 w-100 test">
      <v-btn class="questify-btn"  rounded="0" @click.prevent height="100%">
        {{ t('nav.questify') }}
      </v-btn>

      <RouterLink class="nav-btn" to="/">{{ t('nav.tasks') }}</RouterLink>
      <RouterLink class="nav-btn" to="/inventory">{{ t('nav.inventory') }}</RouterLink>
      <RouterLink class="nav-btn" to="/store">{{ t('nav.store') }}</RouterLink>

      <v-btn variant="text" @click="toggleLanguage" class="lang-btn ml-2">
        {{ locale === 'es' ? 'EN' : 'ES' }}
      </v-btn>
    </div>

    <div class="d-flex flex-row align-center h-100 right-section">
      <div class="d-flex align-center coin-display">
        <v-icon size="44">mdi-currency-btc</v-icon>
        <span class="coin-count">0</span>
      </div>
      <!-- <v-icon class="ml-4" size="64">mdi-account</v-icon> -->
      <div class="login-register-buttons">
        <template v-if="!userStore.token">
          <LoginPopup />
          <RegisterPopup />
        </template>

        <template v-else>
          <v-btn text @click="userStore.logout()">{{ t('nav.logout') }}</v-btn>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>

.nav-bar {
  height: 100px;
  background-color: #a5c4de;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.login-register-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.test {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  height: 60%;
  padding: 20px;
}

.questify-btn {
  height: 100%;
  display: flex;
  align-items: center;
  border: 2px solid #13294b !important;
  color: #13294b;
  text-transform: none;
  font-weight: bold;
  font-size: 13px;
  padding: 0 12px;
  margin-right: 12px;
  min-width: 90px;
  background-color: transparent;
  font-family: 'Segoe UI', sans-serif;
  box-shadow: none;
}

.nav-btn {
  height: 100%;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.25);
  padding: 0 14px;
  margin-right: 8px;
  font-weight: 600;
  text-decoration: none;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 14px;
  border-radius: 2px;
}

.nav-btn:hover {
  background-color: rgba(255, 255, 255, 0.35);
}

.router-link-exact-active.nav-btn {
  border: 2px solid #1a1a1a;
}

.right-section {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 16px;
  width: 50%;
  height: 100%;
}

.coin-display {
  display: flex;
  align-items: center;
  gap: 4px;
}

.coin-count {
  font-size: 16px;
  font-weight: 500;
  margin: 0;
}

.lang-btn {
  min-width: 36px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  color: #13294b;
}
</style>
