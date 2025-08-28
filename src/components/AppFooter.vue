<template>
  <div>
    <footer class="main-footer text-white pt-5 pb-4">
      <div class="container text-center text-md-start">
        <div class="row align-items-center justify-content-between">
          <div class="col-md-4 col-lg-4 mt-3">
            <h6 class="text-uppercase fw-bold mb-3">Contacto</h6>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a
                  href="mailto:aaabdesignaciones@gmail.com"
                  class="footer-link"
                >
                  <i class="bi bi-envelope-fill me-2"></i> Designaciones
                </a>
              </li>
              <li class="mb-2">
                <a href="mailto:aaabsecretria@gmail.com" class="footer-link">
                  <i class="bi bi-envelope-fill me-2"></i> Secretaría
                </a>
              </li>
              <li>
                <a href="mailto:aaabetica@gmail.com" class="footer-link">
                  <i class="bi bi-envelope-fill me-2"></i> Tribunal de Ética
                </a>
              </li>
            </ul>
          </div>

          <div class="col-md-4 col-lg-4 mt-3 text-center">
            <img
              src="@/assets/logo.png"
              alt="AAAB Logo"
              class="footer-logo mb-3"
            />
            <p class="tagline text-uppercase fw-bold">Cambia tu visión</p>
            <p class="tagline text-uppercase fw-bold">Hacete Árbitro</p>
          </div>

          <div class="col-md-4 col-lg-4 mt-3 text-center">
            <h6 class="text-uppercase fw-bold mb-3">
              Seguinos en nuestras <br />redes sociales
            </h6>
            <div class="social-icons">
              <a
                href="https://www.instagram.com/arbitros.balonmano/"
                target="_blank"
                class="social-icon"
                aria-label="Instagram"
              >
                <i class="bi bi-instagram"></i>
              </a>
              <a
                href="https://x.com/aaabalonmano"
                target="_blank"
                class="social-icon"
                aria-label="Twitter X"
              >
                <i class="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <div class="copyright-bar text-center p-3">
      MCG Solutions © 2025 Asociación de Árbitros de Handball
      <span class="mx-2">|</span>
      <a v-if="!authStore.isAdmin" @click="login" href="#" class="admin-link"
        >Admin Login</a
      >
      <a v-else @click="logout" href="#" class="admin-link">Logout</a>
    </div>

    <a
      v-if="showScrollButton"
      @click.prevent="scrollToTop"
      href="#"
      class="scroll-to-top"
    >
      <i class="bi bi-arrow-up-short"></i>
    </a>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth";

export default {
  name: "AppFooter",
  setup() {
    const authStore = useAuthStore();

    const login = () => {
      const password = prompt("Ingresa la contraseña de administrador:");
      if (password) {
        authStore.login(password);
      }
    };

    const logout = () => {
      authStore.logout();
    };

    return { authStore, login, logout };
  },
  data() {
    return {
      showScrollButton: false,
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 200) {
        this.showScrollButton = true;
      } else {
        this.showScrollButton = false;
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.main-footer {
  background-color: #212529;
}
.footer-logo {
  max-width: 120px;
  opacity: 0.9;
}
.tagline {
  color: #dee2e6;
  font-size: 1.1rem;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}
.footer-link {
  color: #adb5bd;
  text-decoration: none;
  transition: color 0.3s;
}
.footer-link:hover {
  color: #ffffff;
}
.social-icons .social-icon {
  font-size: 1.8rem;
  color: #adb5bd;
  margin: 0 10px;
  transition: color 0.3s, transform 0.3s;
  display: inline-block;
}
.social-icons .social-icon:hover {
  color: #ffffff;
  transform: translateY(-3px);
}
.copyright-bar {
  background-color: #000000;
  color: #a0a3a7;
  font-size: 0.9rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #dc3545;
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-decoration: none;
  transition: opacity 0.3s, transform 0.3s;
  opacity: 0.8;
  z-index: 1000;
}
.scroll-to-top:hover {
  opacity: 1;
  transform: scale(1.1);
}
.admin-link {
  color: #6c757d;
  text-decoration: none;
}
.admin-link:hover {
  color: #ffffff;
}
</style>
