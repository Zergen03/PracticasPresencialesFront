<template>
  <footer class="footer d-flex align-center justify-space-between px-8">
    <!-- Icono izquierda -->
    <v-icon size="32">mdi-sword</v-icon>

    <!-- Centro: redes + texto -->
    <div class="footer-center d-flex flex-column align-center">
      <div class="d-flex social-icons">
        <v-icon size="35">mdi-linkedin</v-icon>
        <v-icon size="35">mdi-instagram</v-icon>
        <v-icon size="35">mdi-twitter</v-icon>
        <v-icon size="35">mdi-facebook</v-icon>
      </div>
      <span class="footer-text mt-1">Questify ⓒ</span>
    </div>

    <!-- Icono derecha -->
    <v-icon size="40">mdi-shield-outline</v-icon>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #f8c2a0;
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.footer-center {
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

}

.social-icons {
  display: flex;
  gap: 12px;
}

.footer-text {
  font-size: 22px;
  font-weight: 400;
}
</style>
