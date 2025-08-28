import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    // Por defecto, nadie es administrador.
    isAdmin: false,
  }),
  actions: {
    login(password) {
      // Esta es tu contraseña secreta. ¡Cámbiala por una que solo tú sepas!
      const adminPassword = "admin123";

      if (password === adminPassword) {
        this.isAdmin = true;
        alert("¡Bienvenido, admin!");
      } else {
        alert("Contraseña incorrecta.");
      }
    },
    logout() {
      this.isAdmin = false;
    },
  },
});
