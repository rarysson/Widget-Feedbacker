import { createApp } from "vue";
import App from "./App.vue";
import Playground from "./views/Playground.vue";
import { setup } from "./services/bootstrap";

import "animate.css";
import "@/assets/css/fonts.css";
import "@/assets/css/tailwind.css";

setup({
  onDevelopment: () => {
    createApp(App).mount("#app");
  },
  onProduction: () => {
    createApp(Playground).mount("#app");
  },
});
