import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(BootstrapVue).use(router).mount("#app");
