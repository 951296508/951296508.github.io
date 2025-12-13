import type { App } from "vue";
import { setupRouter } from "@/router";
import { setupStore } from "@/store";

export default {
    install(app: App<Element>) {
        setupRouter(app);
        setupStore(app);
    }
}