// noinspection JSUnusedGlobalSymbols

import { defineConfig } from 'vite'

export default defineConfig({
    base: './',
    resolve: {
        alias: {
            components: "/src/components",
            scripts: "/src/scripts",
            styles: "/src/styles",
            src: "."
        }
    }
})
