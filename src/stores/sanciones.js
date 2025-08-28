import { defineStore } from "pinia";

export const useSancionesStore = defineStore("sanciones", {
  state: () => ({
    // La lista de sanciones ahora empieza vacía.
    sanciones: [],
  }),
  getters: {
    // Devuelve solo las sanciones vigentes.
    sancionesVigentes: (state) => {
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);

      return state.sanciones.filter((sancion) => {
        if (sancion.vencimiento.toLowerCase() === "indefinido") {
          return true;
        }
        // Maneja fechas vacías o mal formateadas para evitar errores
        if (!sancion.vencimiento || !sancion.vencimiento.includes("/"))
          return false;

        const [dia, mes, anio] = sancion.vencimiento.split("/");
        const fechaVencimiento = new Date(`${anio}-${mes}-${dia}`);
        fechaVencimiento.setHours(0, 0, 0, 0);

        return fechaVencimiento >= hoy;
      });
    },
  },
  actions: {
    // Agrega una nueva sanción al principio de la lista.
    agregarSancion(nuevaSancion) {
      this.sanciones.unshift({ id: Date.now(), ...nuevaSancion });
    },
  },
});
