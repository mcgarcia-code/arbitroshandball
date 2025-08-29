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

      <div class="collapse navbar-collapse" id="navbarNav" ref="navbarCollapse">
        <ul class="navbar-nav ms-auto" @click="closeMenu">
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
// Se importa la funcionalidad 'Collapse' de Bootstrap
import { Collapse } from "bootstrap";

export default {
  name: "AppHeader",
  data() {
    return {
      bsCollapse: null, // Propiedad para guardar la instancia del menú colapsable
    };
  },
  mounted() {
    // Creamos la instancia del menú cuando el componente se carga
    this.bsCollapse = new Collapse(this.$refs.navbarCollapse, {
      toggle: false,
    });
  },
  methods: {
    // Método para cerrar el menú si está abierto
    closeMenu() {
      // 'show' es la clase que Bootstrap añade cuando el menú está visible
      if (this.$refs.navbarCollapse.classList.contains("show")) {
        this.bsCollapse.hide();
      }
    },
  },
};
</script>

<style scoped>
.navbar-brand img {
  margin-right: 15px;
}

.nav-link {
  transition: color 0.2s ease-in-out;
}

.nav-link:hover {
  color: #dc3545 !important; /* Rojo fuerte */
}

.nav-link.router-link-exact-active {
  color: #dc3545 !important; /* Rojo fuerte */
  font-weight: bold;
}

/* --- CORRECCIÓN PARA ALINEACIÓN EN MÓVIL --- */
/*
  Este código se aplica solo cuando el menú está colapsado (en móvil).
  Fuerza a que los elementos de la lista se alineen a la derecha.
*/
@media (max-width: 1199.98px) {
  .navbar-collapse .navbar-nav {
    align-items: flex-end;
  }
  .navbar-collapse .nav-item {
    text-align: right;
  }
}
</style>
