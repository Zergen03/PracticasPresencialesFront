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

<style scoped>
.layout {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.full-width {
  width: 100%;
  height: 100%;
}

.left-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-left: 50px;
}

.right-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
}

.store-image {
  width: 60%;
  height: 80%;
}
</style>
