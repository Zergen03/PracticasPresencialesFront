<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>
<template>
    <v-app-bar color="blue-lighten-3" flat>
        <v-container class="d-flex align-center justify-space-between" fluid>
            <!-- Sección izquierda -->
            <div class="d-flex align-center">
                <v-btn text class="text-none font-weight-bold text-capitalize">
                    Questify
                </v-btn>

                <RouterLink to="/" class="mx-2" >Tareas</RouterLink>
                <RouterLink to="/shop" class="mx-2" >Tienda</RouterLink>
                <RouterLink to="/inventory" class="mx-2" >Inventario</RouterLink>
            </div>

            <!-- Sección derecha -->
            <div class="d-flex align-center">
                <v-icon class="mr-1">mdi-coin</v-icon>
                <span class="mr-4">0</span>
                <v-icon>mdi-account</v-icon>
            </div>
        </v-container>
    </v-app-bar>
</template>
<style scoped>
.v-app-bar {
  height: 60px;
}
</style>