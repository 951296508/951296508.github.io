import { createApp } from 'vue'
import "@/style/index.scss";
import App from './App.vue'
import setupPlugins from "@/plugins"

const app = createApp(App);
// 注册插件
app.use(setupPlugins);
app.mount("#app");
