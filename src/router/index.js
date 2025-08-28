import { createRouter, createWebHistory } from "vue-router";
import InicioView from "../views/InicioView.vue";
import DescargasView from "../views/DescargasView.vue";
import CursosView from "../views/CursosView.vue";
import DesignacionesView from "../views/DesignacionesView.vue";
import TribunalEticaView from "../views/TribunalEticaView.vue";
import SancionesView from "../views/SancionesView.vue";

const routes = [
  {
    path: "/",
    name: "inicio",
    component: InicioView,
  },
  {
    path: "/descargas",
    name: "descargas",
    component: DescargasView,
  },
  {
    path: "/cursos",
    name: "cursos",
    component: CursosView,
  },
  {
    path: "/designaciones",
    name: "designaciones",
    component: DesignacionesView,
  },
  {
    path: "/tribunal-de-etica",
    name: "tribunalEtica",
    component: TribunalEticaView,
  },
  {
    path: "/sanciones",
    name: "sanciones",
    component: SancionesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(_to, _from, _savedPosition) {
    // siempre desplázate al principio de la página
    return { top: 0 };
  },
});

export default router;
