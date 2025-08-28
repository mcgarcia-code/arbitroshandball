<template>
  <div class="dark-background-section py-5">
    <div class="container my-5">
      <div v-if="authStore.isAdmin" class="card shadow-sm mb-5 admin-card">
        <div class="card-body p-4">
          <h3 class="card-title mb-3 text-dark">Agregar Nueva Sanción</h3>
          <div class="row g-3">
            <div class="col-md-6">
              <input
                type="text"
                class="form-control"
                placeholder="Nombre del Árbitro"
                v-model="nuevaSancion.arbitro"
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                class="form-control"
                placeholder="Motivo"
                v-model="nuevaSancion.motivo"
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                class="form-control"
                placeholder="Artículo"
                v-model="nuevaSancion.articulo"
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                class="form-control"
                placeholder="Sanción (ej: 3 fechas)"
                v-model="nuevaSancion.sancion"
              />
            </div>
            <div class="col-md-12">
              <input
                type="text"
                class="form-control"
                placeholder="Vencimiento (dd/mm/yyyy)"
                v-model="nuevaSancion.vencimiento"
              />
            </div>
          </div>
          <button @click="guardarSancion" class="btn btn-danger mt-3">
            Guardar Sanción
          </button>
        </div>
      </div>

      <div class="text-center mb-5">
        <h1 class="fw-bold text-white">Listado Oficial de Sanciones</h1>
        <p class="lead text-white-50">
          Este listado muestra el historial completo de sanciones.
        </p>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="table-responsive shadow rounded">
            <table class="table table-striped table-hover mb-0">
              <thead class="table-dark">
                <tr>
                  <th scope="col">Árbitro</th>
                  <th scope="col">Motivo</th>
                  <th scope="col">Artículo</th>
                  <th scope="col">Sanción</th>
                  <th scope="col">Vencimiento</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="sancion in sancionesStore.sanciones"
                  :key="sancion.id"
                >
                  <td>{{ sancion.arbitro }}</td>
                  <td>{{ sancion.motivo }}</td>
                  <td>{{ sancion.articulo }}</td>
                  <td>{{ sancion.sancion }}</td>
                  <td>{{ sancion.vencimiento }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useSancionesStore } from "@/stores/sanciones";
import { useAuthStore } from "@/stores/auth";

export default {
  name: "SancionesView",
  setup() {
    const sancionesStore = useSancionesStore();
    const authStore = useAuthStore();
    return {
      sancionesStore,
      authStore,
    };
  },
  data() {
    return {
      nuevaSancion: {
        arbitro: "",
        motivo: "",
        articulo: "",
        sancion: "",
        vencimiento: "",
      },
    };
  },
  methods: {
    guardarSancion() {
      if (!this.nuevaSancion.arbitro) return;
      this.sancionesStore.agregarSancion(this.nuevaSancion);
      this.nuevaSancion = {
        arbitro: "",
        motivo: "",
        articulo: "",
        sancion: "",
        vencimiento: "",
      };
    },
  },
};
</script>

<style scoped>
/* Estilos para la sección principal con imagen de fondo oscuro */
.dark-background-section {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("../assets/sanciones-background.webp"); /* Ruta de tu imagen de fondo */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 80vh;
}

/* Estilo para la tarjeta de administrador */
.admin-card {
  background-color: #f8f9fa;
}
</style>
