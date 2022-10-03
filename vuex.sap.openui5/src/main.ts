import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.min.css";
createApp(App).use(store).use(BootstrapVue).use(router).mount("#app");
