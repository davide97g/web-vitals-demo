import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "./style.css";
import "ant-design-vue/dist/reset.css";
import { router } from "./router";

createApp(App).use(router).use(Antd).mount("#app");
