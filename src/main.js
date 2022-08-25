import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import Vue3TouchEvents from "vue3-touch-events";

createApp(App).use(store).use(Vue3TouchEvents).mount("#app");
