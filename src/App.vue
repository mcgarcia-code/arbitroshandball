<template>
  <div id="app">
    <AppHeader />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
/* Estilos Globales */
body {
  font-family: "Poppins", sans-serif; /* Aplicamos la nueva fuente a todo el sitio */
  background-color: #f8f9fa;
  overflow-x: hidden; /* Evita barras de scroll horizontales */
}

/* Animación para que los elementos aparezcan suavemente */
.fade-in-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
