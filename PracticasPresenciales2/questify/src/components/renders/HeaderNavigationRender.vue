<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="nav-bar d-flex flex-row align-center justify-space-between px-4">
    <!-- Sección izquierda -->
    <div class="d-flex flex-row align-center h-100 w-100 test">
      <v-btn class="questify-btn" variant="outlined" rounded="0" height="100%">
        Questify
      </v-btn>

      <RouterLink class="nav-btn active" to="/">Tareas</RouterLink>
      <RouterLink class="nav-btn" to="/inventory">Inventario</RouterLink>
      <RouterLink class="nav-btn" to="/store">Tienda</RouterLink>
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



<style scoped>
.nav-bar {
  height: 100px;
  /* Fijo para coherencia visual */
  background-color: #a5c4de;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
}

.left {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 25%;
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

.nav-btn.active {
  border: 2px solid #1a1a1a;
}

.coin-count {
  font-size: 14px;
  font-weight: 500;
  margin-left: 4px;
}
.right-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 25%;
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

</style>
