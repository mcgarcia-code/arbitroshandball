<template>
  <div class="dark-background-section py-5">
    <div class="container my-5">
      <div class="text-center mb-5">
        <h1 class="fw-bold text-white">Cursos de Árbitros</h1>
        <p class="lead text-white-50">
          Explora nuestros próximos cursos y capacitaciones.
        </p>
      </div>

      <div class="row justify-content-center g-4">
        <div
          v-for="(curso, index) in cursos"
          :key="index"
          class="col-md-6 col-lg-5"
        >
          <div class="card h-100 course-card">
            <img
              :src="getImageUrl(curso.image)"
              class="card-img-top"
              :alt="curso.title"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title fw-bold text-dark">{{ curso.title }}</h5>
              <p class="card-text text-muted mb-3">{{ curso.description }}</p>
              <ul class="list-group list-group-flush mb-4 flex-grow-1">
                <li
                  class="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span class="text-dark"
                    ><i class="bi bi-calendar me-2 text-info"></i>Fecha
                    Inicio:</span
                  >
                  <span class="fw-bold text-dark">{{ curso.startDate }}</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span class="text-dark"
                    ><i class="bi bi-clock me-2 text-info"></i>Duración:</span
                  >
                  <span class="fw-bold text-dark">{{ curso.duration }}</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span class="text-dark"
                    ><i class="bi bi-geo-alt me-2 text-info"></i
                    >Modalidad:</span
                  >
                  <span class="fw-bold text-dark">{{ curso.modality }}</span>
                </li>
              </ul>
              <div class="mt-auto d-flex justify-content-between">
                <a
                  :href="curso.detailsLink"
                  class="btn btn-outline-secondary me-2"
                  >Más detalles</a
                >
                <a :href="curso.enrollLink" class="btn btn-danger"
                  >Inscribirme</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CursosView",
  data() {
    return {
      cursos: [
        {
          title: "Curso Regular",
          description:
            "Destinado a todos aquellos que quieran incorporarse a nuestra plantilla arbitral y que tengan conocimientos básicos del deporte.",
          image: "curso-basico.webp", // Asegúrate de que esta imagen exista en src/assets
          startDate: "Inscripciones cerradas",
          duration: "3 Meses",
          modality: "Presencial",
          detailsLink:
            "https://drive.google.com/file/d/1p7sOlohNfBTtwqtOBVq0xBLHeZ71VVdl/view",
          enrollLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSfewUFdFlKz1r0TkfmNONFDK97gB0t5kXaUzuoXq_laSEq9gw/closedform",
        },
        {
          title: "Curso Intensivo",
          description:
            "Destinado a jugadores/as activos de Fe.Me.Bal de Liga de Honor ORO, Liga de Honor PLATA, Inferiores A y Técnicos nivel 3 o 2 de Fe.Me.Bal.",
          image: "curso-avanzado.webp", // Asegúrate de que esta imagen exista en src/assets
          startDate: "Febrero/Marzo 2026",
          duration: "2 Semanas",
          modality: "Presencial",
          detailsLink:
            "https://drive.google.com/file/d/1CY5RgpKwIjWkbj7_qVdWjGEPEAoLNfCo/view",
          enrollLink:
            "https://docs.google.com/forms/d/e/1FAIpQLScQQ3HnL4-rWnC-EtkJNphun3DTz_f0os_sxouF-FLwLiPkLQ/closedform",
        },
        // Puedes añadir más cursos aquí
      ],
    };
  },
  methods: {
    getImageUrl(imageName) {
      // Necesario para que Webpack procese las rutas de las imágenes dinámicamente
      try {
        return require(`../assets/${imageName}`);
      } catch (e) {
        console.error(`Error al cargar la imagen: ${imageName}`, e);
        return ""; // Retorna una cadena vacía o una imagen de placeholder si no se encuentra
      }
    },
  },
};
</script>

<style scoped>
/* Estilos para la sección principal con imagen de fondo oscuro */
.dark-background-section {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("../assets/cursos-background.webp"); /* Ruta de tu imagen de fondo */
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Efecto parallax */
  min-height: 80vh; /* Asegura que la sección ocupe al menos un buen espacio */
  display: flex;
  align-items: center; /* Centra verticalmente el contenido */
  justify-content: center;
}

/* Estilos de las tarjetas de curso */
.course-card {
  border: none;
  border-radius: 0.75rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.75rem 2rem rgba(0, 0, 0, 0.15);
}

.card-img-top {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  height: 200px; /* Altura fija para las imágenes */
  object-fit: cover; /* Asegura que la imagen cubra el área sin distorsionarse */
}

.list-group-item {
  border-color: rgba(0, 0, 0, 0.05);
  padding-left: 0;
  padding-right: 0;
}

/* Íconos de información */
.list-group-item i {
  color: #0d6efd; /* Azul para los íconos de información */
}

/* Botones */
.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
}

.btn-outline-secondary:hover {
  background-color: #6c757d;
  color: #fff;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
}
</style>
