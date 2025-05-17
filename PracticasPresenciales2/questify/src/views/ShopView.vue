<script setup lang="ts">
import DailyItemPanel from '@/components/rendersPanles/DailyItemPanel.vue';
import ChestRender from '@/components/renders/ChestRender.vue';
</script>

<template>
  <v-container class="layout" fluid>
    <v-row no-gutters class="full-width">
      <v-col class="left-panel">
        <DailyItemPanel />
        <ChestRender />
      </v-col>

      <v-col class="right-panel d-flex justify-center align-center">
        <img src="../components/imgs/imagen_vendedor_ambulante.jpg" alt="Tienda" class="store-image" />
      </v-col>
    </v-row>
  </v-container>
</template>
