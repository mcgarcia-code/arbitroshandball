import { defineStore } from "pinia";

export const useSancionesStore = defineStore("sanciones", {
  state: () => ({
    // La lista de sanciones ahora empieza vacía.
    sanciones: [],
  }),
  getters: {
    // GETTER ACTUALIZADO: Ahora comprueba si hoy está entre 'desde' y 'hasta'.
    sancionesVigentes: (state) => {
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);

      return state.sanciones.filter((sancion) => {
        // Valida que las fechas existan
        if (!sancion.desde || !sancion.hasta) return false;
        if (!sancion.desde.includes("/") || !sancion.hasta.includes("/")) {
          // Maneja el caso especial "Indefinido"
          if (sancion.hasta.toLowerCase() === "indefinido") {
            // Si es indefinido, solo necesita que la fecha de inicio ya haya pasado
            const [diaDesde, mesDesde, anioDesde] = sancion.desde.split("/");
            const fechaDesde = new Date(`${anioDesde}-${mesDesde}-${diaDesde}`);
            fechaDesde.setHours(0, 0, 0, 0);
            return hoy >= fechaDesde;
          }
          return false;
        }

        // Convierte las fechas "dd/mm/yyyy" a objetos Date
        const [diaDesde, mesDesde, anioDesde] = sancion.desde.split("/");
        const fechaDesde = new Date(`${anioDesde}-${mesDesde}-${diaDesde}`);
        fechaDesde.setHours(0, 0, 0, 0);

        const [diaHasta, mesHasta, anioHasta] = sancion.hasta.split("/");
        const fechaHasta = new Date(`${anioHasta}-${mesHasta}-${diaHasta}`);
        fechaHasta.setHours(0, 0, 0, 0);

        // Devuelve true si la fecha de hoy está dentro del rango
        return hoy >= fechaDesde && hoy <= fechaHasta;
      });
    },
  },
  actions: {
    // La acción ahora espera 'desde' y 'hasta'
    agregarSancion(nuevaSancion) {
      this.sanciones.unshift({ id: Date.now(), ...nuevaSancion });
    },
  },
});
