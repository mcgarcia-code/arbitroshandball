import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia"; // 1. Importa createPinia
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);

app.use(createPinia()); // 2. Dile a tu app que use Pinia
app.use(router);

app.mount("#app");

createApp(App).use(router).mount("#app");
