import {defineConfig} from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                "root": "./index.html",
                "level-1": "./level-1.html",
                "level-2": "./level-2.html",
            }
        }
    }
})