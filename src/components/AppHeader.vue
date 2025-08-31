<template>
  <header
    class="navbar navbar-expand-xl navbar-light bg-white shadow-sm sticky-top"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.png" alt="AAAB Logo" style="height: 80px" />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/descargas"
              >Descargas</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cursos"
              >Curso de Árbitros</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/designaciones"
              >Designaciones</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/tribunal-de-etica"
              >Tribunal de Ética</router-link
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://arbitroshandball.com.ar/catalogo/"
              target="_blank"
              >Catálogo Online</a
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
.navbar-brand img {
  margin-right: 15px;
}

/* --- ESTILOS AÑADIDOS --- */
.nav-link {
  /* Añadimos una transición suave para el cambio de color */
  transition: color 0.2s ease-in-out;
}

/* Cuando el mouse pasa por encima del enlace */
.nav-link:hover {
  color: #dc3545 !important; /* Rojo fuerte */
}

/* Estilo para el enlace de la página activa */
.nav-link.router-link-exact-active {
  color: #dc3545 !important; /* Rojo fuerte */
  font-weight: bold;
}

/* --- CÓDIGO PARA ALINEACIÓN EN MÓVIL --- */
/*
  Este código se aplica solo cuando el menú está colapsado (en móvil)
  y fuerza a que los elementos se alineen a la derecha.
*/
@media (max-width: 1199.98px) {
  .navbar-collapse .navbar-nav {
    align-items: flex-end;
  }
}
</style>
